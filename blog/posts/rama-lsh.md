Title: Diving into Rama: A Clojure LSH Vector Search Experiment
Date: 2025-11-07
Tags: clojure, vector search, rama, lsh
Blog-author: Marko Đorđević

Vector search is a common requirement for AI applications, enabling features like recommendation engines and semantic search. However, building a scalable, real-time vector search system often involves integrating multiple distinct technologies: a message queue for ingestion, various databases for indexing and storage, and a compute layer for processing.

As part of evaluating [Rama](https://redplanetlabs.com/) as a development platform for our product solution, which incorporates several data models to capture different stages in biotech lab experiment design and execution, we decided to try building a vector search system from scratch.

While modern vector search often relies on complex graph-based algorithms like [HNSW](https://www.pinecone.io/learn/series/faiss/hnsw/), this post explores a different approach: implementing the classic Locality-Sensitive Hashing (LSH) algorithm. LSH is a great starting point for an experiment like this because its principles - hashing, bucketing, and re-ranking - map clearly to data processing primitives. The goal is to see how Rama's unified model handles the components of this traditionally complex task.


## What is Locality-Sensitive Hashing (LSH)?

Locality-Sensitive Hashing is an algorithm for approximate nearest-neighbor search. Instead of comparing a query vector to every other vector in a dataset (which is slow), LSH uses a special hashing technique.
<!-- end-of-preview -->
The core idea is that similar vectors are "hashed" into the same "bucket" with high probability. A query then only needs to be compared against the vectors in its own bucket and a few nearby ones, drastically reducing the search space. This is typically followed by a re-ranking step that computes the exact distance for this smaller set of candidates.

*(For a deeper dive, see: [Pinecone article](https://www.pinecone.io/learn/series/faiss/locality-sensitive-hashing/))*


## What is Rama?

Rama is a platform for building distributed backends. It integrates data storage and computation into a single system, aiming to reduce the "glue code" connecting separate services.

Its core components are:

* **Depots:** Durable, partitioned, append-only logs for data ingestion.
* **PStates:** Durable, replicated, and arbitrarily structured data structures for storing indexed views.
* **Topologies:** Distributed, fault-tolerant dataflow programs that define all data processing, from real-time ETLs to on-demand queries.

*(For more information, see the [Rama Documentation](https://redplanetlabs.com/docs/~/index.html))*


## The LSH Module Implementation

**A Quick Note:** Before diving in, a disclaimer. This code comes from a developer with very little Rama experience. It's an experiment, not a production-ready, heavily-optimized solution. The code is probably very far from perfect, but it's a way to learn the platform.

The implementation consists of one Rama module that handles ingestion, indexing, and querying.

### 1. PState Schemas: Defining the Data

The module relies on two PStates, Rama's durable data stores, to hold the data.

* **$$embeddings:** This is the "source of truth." It maps a vector's unique ID (`String`) to its full data. It's defined as a `fixed-keys-schema`, which is ideal for object-like structures where the keys (`:vec`, `:norm`, `:body`) are known in advance.
* **$$lsh-tables:** This is the LSH index itself. It maps a bucket ID (a string) to a `set-schema` of vector IDs. This set is declared with `{:subindex? true}`, a key Rama feature. It tells Rama to index the elements of the set individually, which is critical for performance when a single bucket grows to contain thousands or millions of IDs.

```clojure
   (declare-pstate etl
                   $$embeddings
                   {String (fixed-keys-schema
                             {:vec  (vector-schema Double)
                              :norm Double
                              :body String})})

    (declare-pstate etl
                    $$lsh-tables
                    {String (set-schema String {:subindex? true})})
```

### 2. A Note on LSH Parameters

The code uses several hardcoded parameters. Here's a brief explanation of why:

* `dims = 384`: This is dictated by the embedding model. The dataset used in testing is based on `all-MiniLM-L6-v2`, which produces 384-dimension vectors.
* `nbits = 8` & `num-tables = 4`: This is the core LSH performance/accuracy trade-off. More tables (`num-tables`) increase recall (higher chance of finding a true neighbor) at the cost of more lookups. More bits (`nbits`) create more (and smaller) buckets per table (2^8 = 256). For a dataset in the 10k-100k vector range, this configuration (4 tables, 256 buckets each) is a reasonable starting point to keep buckets from getting too large, while the multiple tables provide a good chance of finding true neighbors.
* `top-k = 50`: This is simply the application requirement—how many results to return.

### 3. The Indexing ETL: `<<sources`

A streaming topology (`stream-topology`) listens to the `*ingest` depot for new vectors. Its dataflow defines the real-time indexing logic.

```clojure
(defmodule LSHModule
  [setup topologies]
  (declare-depot setup *ingest (hash-by :id))

  (let [etl (stream-topology topologies "load")]
    ;; ... PState declarations ...

    (<<sources etl
      (source> *ingest :> {:keys [*id *vec *body]})

      ;; 1. Save the full vector to the embeddings PState.
      (vector/norm *vec :> *norm)
      (local-transform> [(keypath *id)
                         (termval {:vec  *vec
                                   :norm *norm
                                   :body *body})]
        $$embeddings)

      ;; 2. Get the deterministic hyperplanes.
      (get-hyperplane-sets :> *all-planes)

      ;; 3. Hash the vector against all tables to get bucket IDs.
      (ops/explode *all-planes :> *plane)
      (vector/vector->bucket-id *vec *plane :> *bucket-str)

      ;; 4. Partition to the task responsible for this bucket.
      (|hash *bucket-str)

      ;; 5. Add the vector's ID to the bucket in the LSH table.
      (local-transform> [(keypath *bucket-str)
                         NONE-ELEM
                         (termval *id)]
        $$lsh-tables))))
```

### 4. The Query: A Two-Phase Scatter-Gather

The query is a multi-stage operation. To keep the code efficient, it's split into two phases.

#### Phase 1: The Generator (Find Candidates)

A `defgenerator` (a reusable sub-batch) is defined to handle the "approximate" search. It scatters the query to all LSH buckets, gathers all potential candidates, and deduplicates them.

```clojure
(defgenerator gather-unique-ids
  [query-vec]
  (batch<- [*unique-id]
    ;; 1. Hash the query vector against all tables and
    ;;    probe nearby buckets.
    (get-hyperplane-sets :> *all-planes)
    (ops/explode *all-planes :> *plane)
    (vector/vector->bucket-id query-vec *plane :> *bucket-str)
    (vector/nearby-buckets *bucket-str 2 :> *nbr-strs)
    (set/union #{*bucket-str} *nbr-strs :> *probe-buckets)

    ;; 2. Scatter: For every bucket, fetch the set of IDs.
    (ops/explode *probe-buckets :> *bucket-str2)
    (|hash *bucket-str2)
    (local-select> (keypath *bucket-str2) $$lsh-tables :> *ids-in-bucket)
    (ops/explode *ids-in-bucket :> *cand-id)

    ;; 3. Gather & Deduplicate: Aggregate all IDs into one unique set.
    (|global)
    (aggs/+set-agg *cand-id :> *all-unique-cands)

    ;; 4. Emit a stream of *unique* IDs.
    (ops/explode *all-unique-cands :> *unique-id)))
```

#### Phase 2: The Query Topology (Re-rank)

This is the main query API. It calls the generator from Phase 1, then performs the exact distance calculation only on the unique candidates.

```clojure
 (<<query-topology topologies "top-vec-search"
    [*query-vec :> *top-results]

    ;; 1. Call Phase 1. This emits a stream of *unique* IDs.
    (gather-unique-ids *query-vec :> *unique-id)

    ;; 2. Re-rank: Fetch the full vector for each unique ID.
    (|hash *unique-id)
    (local-select> (keypath *unique-id) $$embeddings
                   :> {:keys [*vec *norm *body]})

    ;; 3. Calculate the *true* distance.
    (vector/norm *query-vec :> *q-norm)
    (vector/cosine-distance *query-vec *vec *q-norm *norm :> *distance)
    (vector *unique-id *distance *body :> *tuple)

    ;; 4. Aggregate: Gather tuples and find the true top 50.
    (|origin)
    (aggs/+top-monotonic
      [top-k] ;; Must be a constant
      *tuple
      :+options {:id-fn first
                 :sort-val-fn second
                 :sort-type :ascending}
      :> *top-results))
```

### Testing the Module

For local development and unit testing, Rama provides an `InProcessCluster` (IPC). This simulates a full cluster in-process, making it easy to test the complete dataflow.

The following REPL test case demonstrates the workflow. The dataset used here is a sample of Wikipedia articles, which can be downloaded [here](https://huggingface.co/datasets/Supabase/wikipedia-en-embeddings/blob/main/wiki_minilm.ndjson.gz).

```clojure
(require '[com.rpl.rama.test :as rtest])
(require '[rama-vector-store.utils :as utils]) ;; Assumed helper ns

(with-open [ipc (rtest/create-ipc)]
  ;; 1. Launch the module in the local cluster
  (rtest/launch-module! ipc LSHModule {:tasks 4 :threads 2})
  (let [;; 2. Load dataset
        dataset     (take 100 (utils/wiki-minilm-dataset))
        module-name (get-module-name LSHModule)
        ;; 3. Get clients to interact with the module
        depot       (foreign-depot ipc module-name "*ingest")
        query       (foreign-query ipc module-name "top-vec-search")
        ;; 4. Select the first vector as our query
        query-vec   (:all-MiniLM-L6-v2 (first dataset))
        query-text  (:body (first dataset))]

    ;; 5. Ingest data by appending to the depot
    (doseq [{:keys [id all-MiniLM-L6-v2 body]} dataset]
      (foreign-append! depot (->Embedding id all-MiniLM-L6-v2 body)))

    (println "Querying for vector 0:\n" (subs query-text 0 70) "...")

    ;; 6. Invoke the query topology
    (foreign-invoke-query query query-vec)))
```

Running this test queries the system using the first vector from the dataset ("Title: Fresnes, Yonne..."). The query topology returns a list of tuples, each containing `[id, distance, body]`, sorted by distance.

A snippet of the results shows the query vector itself as the first result, with a distance of nearly zero, as expected.

```clojure
Querying for vector 0:
Title: Fresnes, Yonne Content: Fresnes is a commune. It is found i...
=>
[["0" -2.22...E-16 "Title: Fresnes, Yonne Content: Fresnes is a commune..."]
 ["19" 0.701... "Title: Saint-Palais, Allier Content: Saint-Palais is a commune..."]
 ["60" 0.708... "Title: Rocles, Ardèche Content: Rocles is a commune..."]
 ["96" 0.753... "Title: Pyrénées-Orientales Content: Pyrénées-Orientales..."]
 ["78" 0.773... "Title: Saint-André-de-Cubzac Content: Saint-André-de-Cubzac..."]
 ...]
```
The `InProcessCluster` is ideal for this kind of integration testing. For full-scale performance testing, one would deploy the module to a production cluster. Interaction with a deployed cluster uses the same `foreign-` client APIs or Rama's built-in REST API. (A two-node cluster is available for free from [Red Planet Labs](https://redplanetlabs.com/)).


### Caveats & Notes on the Process

This code is the result of trial and error. The biggest hurdle was figuring out the correct way to handle the large, static `hyperplane-sets` vector.

The first instinct might be to use `declare-object`, as it's the idiomatic Rama way to make data available to all tasks. An attempt might look like this:

```clojure
;; This fails!
(def hyperplane-sets (vec (repeatedly ...)))

(defmodule LSHModule [setup topologies]
  (declare-object setup *hyperplanes hyperplane-sets)
  ...)
```

This fails instantly with a `Class file too large!` error. It seems that when Rama (or Clojure) compiles the module, it resolves `hyperplane-sets` to its literal value and tries to inline that *entire* massive vector (all 12,288 numbers) directly into the module's compiled `.class` file. This blows past the JVM's 65KB method size limit.

A similar error occurs if one tries to use the global `def` directly inside a dataflow `ops/explode`:

```clojure
;; This also fails to compile/load
(<<sources etl
  ...
  (ops/explode hyperplane-sets :> *plane) ;; Fails
  ...)
```

The dataflow compiler tries to do the same thing: inline the huge vector as a constant, which again breaks the method size limit.

The solution that *did* work was to add a layer of indirection. By defining `hyperplane-sets` in a `defonce` (which uses a fixed-seed `Random`) and then accessing it *only* through a simple getter function, `(defn get-hyperplane-sets [])`, the compiler's behavior changes.

```clojure
;; This works!
(defn get-hyperplane-sets []
  hyperplane-sets)

(<<sources etl
  ...
  (get-hyperplane-sets :> *all-planes) ;; Works
  (ops/explode *all-planes :> *plane)
  ...)
```

The dataflow compiler now just embeds a small function call (`get-hyperplane-sets`). The massive vector is then loaded at runtime via the var, successfully avoiding the compile-time error.


### Observations & Future Work

This experiment showed that Rama's model can express this entire system in a single module.

* **Unified System:** The ETL (indexing) and queries (searching) live in the same file and use the same dataflow API. There is no need for external "glue code" to connect a streaming platform to a database.
* **Flexible Data Shapes:** PStates handled the two required data models: a key-value "document store" (`$$embeddings`) and a key-to-set "lookup index" (`$$lsh-tables`).
* **Expressive Dataflow:** The dataflow API was able to define a complex, multi-stage scatter-gather-aggregate query. The `defgenerator` primitive was useful for optimizing this query by separating candidate generation from re-ranking.
* **Built-in Distribution:** Scalability is handled by partitioning. The use of `|hash` in both the ETL and query topologies defines how the work is distributed.

The next step in this evaluation will be to run proper performance benchmarks against this implementation to see how it scales under load. We plan to post those results in a future article.


### Final Code

Here is the complete `lsh-module.clj` file:

```clojure
(ns rama-vector-store.lsh-module
  (:use [com.rpl.rama]
        [com.rpl.rama.path])
  (:require [clojure.set :as set]
            [com.rpl.rama.aggs :as aggs]
            [com.rpl.rama.ops :as ops]
            ;; Namespace with helper functions (dot-product, cosine-distance, ...)
            [rama-vector-store.vector-utils :as vector])
  (:import (java.util Random)))

(defrecord Embedding [id vec body])
(def nbits 8)
(def num-tables 4)
(def dims 384)
(def top-k 50)

(defonce hyperplane-sets
  (let [rand (Random. 12345)] ;; Fixed seed for reproducibility
    (vec (repeatedly num-tables
                     (fn []
                       (vec (repeatedly nbits
                                        (fn []
                                          (vec (repeatedly dims (fn [] (- (.nextDouble rand) 0.5))))))))))))
(defn get-hyperplane-sets []
  hyperplane-sets)

(defgenerator gather-unique-ids
  [query-vec]
  (batch<- [*unique-id] ; This is the output variable of the generator
    (get-hyperplane-sets :> *all-planes)
    (ops/explode *all-planes :> *plane)
    (vector/vector->bucket-id query-vec *plane :> *bucket-str)
    (vector/nearby-buckets *bucket-str 2 :> *nbr-strs)
    (set/union #{*bucket-str} *nbr-strs :> *probe-buckets)

    (ops/explode *probe-buckets :> *bucket-str2)
    (|hash *bucket-str2)
    (local-select> (keypath *bucket-str2) $$lsh-tables :> *ids-in-bucket)
    (ops/explode *ids-in-bucket :> *cand-id)

    (|global)
    (aggs/+set-agg *cand-id :> *all-unique-cands) ; Aggregates all IDs into one unique set

    (ops/explode *all-unique-cands :> *unique-id) ; Emits each unique ID
    ))


(defmodule LSHModule
  [setup topologies]
  (declare-depot setup *ingest (hash-by :id))

  (let [etl (stream-topology topologies "load")]
    (declare-pstate etl
                    $$embeddings
                    {String (fixed-keys-schema
                              {:vec  (vector-schema Double)
                               :norm Double
                               :body String})})

    (declare-pstate etl
                    $$lsh-tables
                    {String (set-schema String {:subindex? true})})

    (<<sources etl
      (source> *ingest :> {:keys [*id *vec *body]})
      (vector/norm *vec :> *norm)
      (local-transform> [(keypath *id)
                         (termval {:vec  *vec
                                   :norm *norm
                                   :body *body})]
        $$embeddings)
      (get-hyperplane-sets :> *all-planes)
      (ops/explode *all-planes :> *plane)
      (vector/vector->bucket-id *vec *plane :> *bucket-str)
      (|hash *bucket-str)
      (local-transform> [(keypath *bucket-str)
                         NONE-ELEM
                         (termval *id)]
        $$lsh-tables)))

  (<<query-topology topologies "top-vec-search"
    [*query-vec :> *top-results]

    ;; Call the generator to get a stream of *unique* IDs
    (gather-unique-ids *query-vec :> *unique-id)

    ;; Fetch embeddings for each *unique* candidate
    (|hash *unique-id)
    (local-select> (keypath *unique-id) $$embeddings
                   :> {:keys [*vec *norm *body]})

    ;; Distance calculation
    (vector/norm *query-vec :> *q-norm)
    (vector/cosine-distance *query-vec *vec *q-norm *norm :> *distance)

    ;; Construct tuple
    (vector *unique-id *distance *body :> *tuple)

    ;; Aggregate top results by distance
    (|origin)
    (aggs/+top-monotonic
      [top-k]
      *tuple
      :+options {:id-fn first
                 :sort-val-fn second
                 :sort-type :ascending}
      :> *top-results))
  )
```