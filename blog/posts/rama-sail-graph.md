Title: Building a Distributed RDF Store on Rama
Date: 2026-03-30
Tags: clojure, rama, rdf, sparql, distributed systems
Blog-author: Vladimir Mladenovic

[//]: # (# Building a Distributed RDF Store on Rama)

How much of an RDF database can you push into a distributed execution model before the abstractions stop fitting?

[rama-sail-graph](https://github.com/Shtanglitza/rama-sail-graph) is an attempt to find out. It is a Rama-backed RDF quad store where SPARQL queries compile into distributed execution plans that run across Rama partitions, and the whole thing sits behind RDF4J's SAIL API so that existing Java tooling can query it through familiar interfaces, within the bounds of what the engine currently supports.

## The Design Tension: SAIL Meets Distributed Dataflow

For this project, the interesting problem is not storage. It is the mismatch between two execution models.

On one side is [RDF4J's SAIL API](https://rdf4j.org/documentation/reference/sail/): a connection-oriented, transaction-aware storage contract. A `SailConnection` exposes `begin`, `commit`, `rollback`. Clients expect to buffer writes, read their own uncommitted changes, and roll back cleanly. RDF4J's entire ecosystem (repositories, query preparation, SPARQL evaluation) layers on top of this contract. If the goal is compatibility with the existing RDF4J world, SAIL is the right boundary to implement.

On the other side is [Rama](https://redplanetlabs.com/): a distributed runtime where data flows through depots, gets indexed in partitioned PStates, and queries run as topologies across the cluster. There are no connections in the traditional sense. There is no local transaction buffer.

Bridging these two models is the core design problem. The adapter must present connection-scoped transaction semantics on top of a system that does not natively think in connections. Uncommitted writes go into a connection-local buffer. Rollback discards that buffer. Commit deduplicates add/delete pairs and appends the net operations to Rama's depot, optionally waiting for the microbatch to process before returning.

That is not just a compatibility detail. It is what makes the adapter usable inside the rest of the RDF4J ecosystem, including future integrations like stackable inferencing layers that depend on `NotifyingSailConnection` and statement-level change notification.

<!-- end-of-preview -->

## The Storage Model: Four Quad Indices

Each quad is indexed four ways, each PState hash-partitioned by its leading key:

- `$$spoc` (subject-first): when you know the entity, scan its predicates. The default for entity lookups.
- `$$posc` (predicate-first): when you know the predicate, find all subjects and objects. Common for `rdf:type` queries.
- `$$ospc` (object-first): reverse lookups. "Who knows Alice?" requires scanning from the object.
- `$$cspo` (context-first): named graph queries. "Everything in graph G."

At query time, the `find-triples` topology selects the index automatically based on which variables are bound. If the subject is known, it hashes to the subject's partition and uses `$$spoc`. If only the predicate is bound, it uses `$$posc`. If nothing is bound, it falls back to a full scan. This dispatch happens at the Rama level, inside a `<<cond`, so index selection is a runtime decision made where the data lives.

Writes are append-driven through a depot. Deletes are physical: quads are removed from all four indices, and empty branches are cleaned up. Both adds and deletes are idempotent, which matters once you care about retries and distributed execution.

## What a Query Actually Does

The easiest way to understand the system is to follow a query through it.

Take a two-hop SPARQL join:

```sparql
SELECT ?name WHERE {
  <http://ex/alice> <http://ex/knows> ?friend .
  ?friend <http://ex/name> ?name .
}
```

**Step 1: Compile.** RDF4J parses this into an algebra tree (two `StatementPattern` nodes inside a `Join`). The adapter's `tuple-expr->plan` multimethod walks that tree and produces an internal plan:

```clojure
{:op :join
 :left  {:op :bgp :pattern {:s "<http://ex/alice>" :p "<http://ex/knows>" :o "?friend"}}
 :right {:op :bgp :pattern {:s "?friend" :p "<http://ex/name>" :o "?name"}}
 :join-vars ["?friend"]}
```

Each triple pattern becomes a `:bgp` node. The join records which variables bind the two sides together. Cardinality estimates from stored statistics determine which side goes left (probe) and which goes right (build).

**Step 2: Optimize.** The plan passes through a pipeline of rewrites:

1. Push filters down into joins
2. Flatten left-join chains
3. Reorder join chains using statistics (Selinger-style dynamic programming)
4. Detect and transform self-join patterns
5. Rewrite `rdf:type` lookups to use materialized views
6. Batch property lookups for the same subject
7. Push limits down to enable early termination

For this simple query, most passes are no-ops. But add a `FILTER`, and filter pushdown will decompose it into conjuncts and push each one into the join side whose variables it references, avoiding shipping unfiltered rows across partitions.

**Step 3: Execute.** The optimized plan is sent to Rama's `execute-plan` query topology, which dispatches on the `:op` field. For `:join`, it runs a distributed hash join:

1. **Build phase**: execute the right sub-plan (`?friend <name> ?name`), collect results, build a hash index keyed by `?friend`.
2. **Probe phase**: execute the left sub-plan (`alice <knows> ?friend`), and for each result, probe the hash index.
3. **Aggregate**: matched rows are shuffled back to the origin and collected into the result set.

The left sub-plan hashes to Alice's partition via `$$spoc` and returns her friends. The right sub-plan uses `$$posc` to find name triples. The join happens server-side. The calling code gets back a `CloseableIteration` of `BindingSet` objects and never knows it left the SAIL API.

## Two Optimizations Worth Understanding

The optimization pipeline already handles seven distinct passes. Two are worth explaining because they illustrate problems specific to distributed SPARQL execution.

**Filter pushdown.** A `FILTER` sitting above a `JOIN` applies after both sides have already been evaluated and merged. In a distributed system, that means shipping potentially large intermediate results across partitions before discarding most of them. The filter pushdown pass decomposes `AND` expressions into independent conjuncts, checks which variables each conjunct references, and pushes it into whichever join side contains those variables. After pushdown, cardinality is re-estimated and join ordering may change.

**Self-join optimization.** Consider a BSBM-style query that finds pairs of products from the same producer:

```sparql
SELECT ?p1 ?p2 ?producer WHERE {
  ?p1 bsbm:producer ?producer .
  ?p2 bsbm:producer ?producer .
  FILTER (?p1 < ?p2)
}
```

A naive execution fetches all producer triples twice and computes the Cartesian product. The self-join pass detects that both patterns share the same predicate and join variable, transforms them into a single BGP fetch, groups results by the join key, and generates pairs within each group while applying the inequality filter during generation. This avoids fetching the same predicate twice and can reduce output significantly when filters are selective, though pair generation within each group is still combinatorial in the general case.

## What Runs Server-Side

Beyond the query walkthrough above, the engine pushes a substantial subset of SPARQL algebra into Rama query topologies:

- basic graph pattern evaluation
- joins and left joins
- filters, unions, bind, and values
- order, distinct, limit, and offset
- group by and aggregates
- ask queries

When an operator is not yet supported, the adapter can fall back to RDF4J's local evaluation strategy for some cases. That preserves correctness but gives up the scaling benefits of server-side execution. Not everything falls back cleanly, though: `SERVICE` is explicitly rejected, and property paths (`+`, `*`) are not yet a reliable fallback path either.

## Compatibility

The repository includes compatibility coverage based on RDF4J's `RDFStoreTest` suite, alongside targeted tests for query execution, transactions, metrics, and the SPARQL endpoint. The test suite exercises semantics that client code actually depends on: transaction handling, namespace operations, statement pattern matching, named graph management, blank node and literal round-trips, duplicate behavior, and concurrent access patterns.

## Not Just a Library

The project ships a SPARQL HTTP endpoint built on Ring and Jetty, with content negotiation for tuple, boolean, and graph responses. It exposes a `/metrics` endpoint for Prometheus scraping, a `/health` endpoint for liveness checks, and tracks query latency histograms, query counters by outcome, active connections, and transaction metrics.

## Current Limits

`rama-sail-graph` is still in public preview:

- functional and tested, but not yet production-hardened
- operator coverage is incomplete; `SERVICE` is explicitly unsupported
- some unsupported operators (such as `MINUS`) fall back to RDF4J's local evaluation
- property paths (`+`, `*`) are not yet a reliable execution path
- subquery support is partial
- query timeout is best-effort: a cluster query may continue after the client times out
- the SPARQL HTTP endpoint has no authentication, rate limiting, or TLS

## Why This Repo Is Worth Watching

A two-hop SPARQL join compiles to a distributed hash join that executes across Rama partitions, returns results through a standard RDF4J `CloseableIteration`, and the calling code never knows it left the SAIL API. That is the design bet: you can push a meaningful amount of RDF database behavior into a distributed execution model without breaking the interface contract that existing tooling depends on.

The hard question is still open. How far can you take this before the abstractions stop fitting? The planning layer is still evolving. Cost modeling, statistics quality, and operator coverage all have room to improve. But the foundation (distributed indices, server-side plan execution, SAIL compatibility, a working optimization pipeline) is already in place and running.

If you care about graph databases, SPARQL engines, or the problem of making standards-based interfaces work on top of distributed runtimes, [the code is here](https://github.com/Shtanglitza/rama-sail-graph).
