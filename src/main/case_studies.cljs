(ns main.case-studies)

;; Case studies content - single source of truth for the landing section,
;; the /case-studies index page and every /case-studies/:slug detail page.
;; To add a new case study, append a map to this vector.
;;
;; :slug             URL part, /case-studies/<slug>
;; :number           roman numeral shown as "Case Study <number>"
;; :featured?        true -> shown on the landing page (keep it to 3)
;; :highlight        optional short result shown on cards
;; :solution-intro   optional sentence before the solution bullet points
;; :solution-points  {:label "..." :text ...}, :text is a string or a hiccup
;;                   vector when part of it must be styled

(def case-studies
  [{:slug "biotech-data-integration"
    :number "I"
    :title "Enhancing Biotech Data Integration with Ontology-Guided Platform"
    :featured? true
    :challenge "The client faced significant data fragmentation, with critical information such as in-process KPIs, equipment and materials inventory, and analytical data stored in disparate systems (Excel tables), leading to inefficiencies and hindered decision-making."
    :solution-intro "We developed an ontology-guided process capture platform that:"
    :solution-points
    [{:label "Integrated Diverse Data Sources"
      :text "Unified in-process KPIs, equipment and materials inventory, and analytical data into a cohesive system."}
     {:label "Employed Standardized Ontologies"
      :text "Utilized Basic Formal Ontology (BFO), National Cancer Institute Thesaurus (NCIT), and Allotrope Foundation standards to ensure semantic consistency."}
     {:label "Enabled Federated Queries"
      :text "Implemented federated queries across AWS services, including Neptune, Redshift, and RDS, facilitating comprehensive data analysis."}
     {:label "Ensured Secure Access"
      :text "Integrated Okta for robust authentication and secure data access."}]
    :outcome "The platform enhanced data interoperability, reduced redundancy, and provided the client with actionable insights, thereby accelerating innovation and improving operational efficiency."}

   {:slug "llm-srd-platform"
    :number "II"
    :title "LLM-Driven Scientific Response Document (SRD) Platform"
    :featured? true
    :challenge "Literature reviews and SRD drafting are slow, variable, and hard to standardize. Claims are difficult to trace to sources; medical-legal and compliance reviews are lengthy. Inputs are fragmented across PDFs, publications, trial registries, SOPs, FAQs."
    :solution-intro "Produce a high-quality, explainable SRD in minutes (not weeks). Ensure every claim is grounded in sources and aligned to domain ontology. Reduce review cycles with auditability and consistent structure."
    :solution-points
    [{:label "Ingestion & Enrichment"
      :text "PDFs, PubMed, ClinicalTrials.gov, SOPs; auto-chunking, metadata extraction."}
     {:label "Vector Store (RAG)"
      :text "Embeddings over chunked content for precise retrieval against user queries."}
     {:label "Knowledge Graph"
      :text "Entities (e.g., molecules, indications, endpoints) and relationships to contextualize evidence."}
     {:label "Ontology & Policies"
      :text "Controlled vocabulary, schema (e.g., OWL) enforcing clinical/scientific terminology and SRD structure."}
     {:label "LLM Orchestrator"
      :text "Retrieves evidence, reasons over KG, applies ontology, generates SRD sections (summary, claims, evidence tables), and auto-inserts citations."}]
    :outcome "SRD with inline citations, claims-to-evidence map, references, and full audit trail."}

   {:slug "drug-disease-link-discovery"
    :number "III"
    :title "Reproducing Drug–Disease Link Discovery with Expression Profiles"
    :featured? true
    :highlight "10–50× faster"
    :challenge "Faithfully reproduce a published method; make it scalable and fully reproducible."
    :solution-points
    [{:label "R Script Modernization"
      :text "Refactored the paper’s R code into parameterized, testable modules (normalization → DE → scoring)."}
     {:label "Nextflow Orchestration"
      :text "DSL2 pipeline with containerized steps, parallel runs across drugs/diseases, and HPC/cloud profiles."}
     {:label "Reproducible by Design"
      :text "Pinned package versions, container digests, input checksums, and machine-readable provenance (PROV/RO-Crate)."}
     {:label "Association Tables"
      :text [:<> "drug ↔ disease scores with FDR, effect direction, and " [:strong "embedded links"] " to artifacts."]}
     {:label "Visualizations"
      :text "volcano plots, score distributions, and ranked lists ready for publication."}
     {:label "Audit-Ready Runs"
      :text "run reports, parameter manifests, and full data lineage for every result."}]
    :outcome "10–50× faster end-to-end; reproducible, reviewable, and easy to extend to new cohorts or parameter sweeps."}])

(defn find-by-slug [slug]
  (some #(when (= slug (:slug %)) %) case-studies))

(defn featured []
  (filter :featured? case-studies))

(defn neighbours
  "Returns [previous next] case studies around the given slug, nil at the ends."
  [slug]
  (let [idx (first (keep-indexed #(when (= slug (:slug %2)) %1) case-studies))]
    [(when (and idx (pos? idx)) (nth case-studies (dec idx)))
     (when (and idx (< (inc idx) (count case-studies))) (nth case-studies (inc idx)))]))
