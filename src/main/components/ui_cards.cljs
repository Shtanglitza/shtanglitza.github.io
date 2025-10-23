(ns main.components.ui-cards
  (:require 
   [main.constants :as constants]))


; Defining Expertise UI cards data

(def expertise-card-data 
  {:OntologyDaM
   (let [title "Ontology Development and Management"]
     {:sec-name title
      :card-id (str (constants/transform-string title))
      :icons (str constants/assets-url "img/ontology_devm.svg")
      :content "Our expert small engineering team creates, maintains, and updates custom ontologies
                tailored to the biomedical domain, ensuring accurate representation of domain knowledge
                for efficient data organization, integration, and retrieval."
      :bg-colors ["bg-gradient-to-br" 
                  "from-indigo-50/95"
                  "from-45%" 
                  "to-fuchsia-100/90" 
                  "to-90%"]
      :bg-photo
       {:background-image (str "url(" constants/assets-url "img/ontology_devm_p.webp" ")")}})

   :DataIaH 
    (let [title "Data Integration and Harmonization"]
     {:sec-name title
      :card-id (str (constants/transform-string title))
      :icons (str constants/assets-url "img/data_int.svg")
      :content "We offer bespoke data integration and harmonization solutions, 
                combining and refining disparate biomedical data sources into a unified, 
                consistent, and easily-accessible format. Our skilled team ensures improved 
                data quality and seamless information exchange."
      :bg-colors ["bg-gradient-to-br"
                  "from-blue-50/80"
                  "from-45%" 
                  "to-purple-100/95"
                  "to-90%"]
      :bg-photo
       {:background-image (str "url("  constants/assets-url "img/data_int_p.webp" ")")}})

   :KnowledgeGCaV
    (let [title "Knowledge Graph Construction and Visualization"]
     {:sec-name title
      :card-id (str (constants/transform-string title))
      :icons (str constants/assets-url "img/knowledge_graph.svg")
      :content "Our team builds tailored knowledge graphs representing complex biomedical
                data as interconnected nodes and edges, enabling intuitive data exploration and 
                the discovery of hidden relationships and insights for informed decision-making."
      :bg-colors ["bg-gradient-to-br" 
                  "from-slate-50/90" 
                  "from-45%" 
                  "to-violet-100/95" 
                  "to-90%"]
      :bg-photo 
       {:background-image (str "url("  constants/assets-url "img/knowledge_graph_p.webp" ")")}})

   :DataAaI 
    (let [title "Data Analysis and Insights"]
     {:sec-name title
      :card-id (str (constants/transform-string title))
      :icons (str constants/assets-url "img/data_ins.svg")
      :content "Our engineers employ advanced statistical and machine learning
                methods to uncover hidden patterns, trends, and correlations in biomedical data, 
                providing valuable insights that drive research, innovation, 
                and informed decision-making in the biomedical domain."
      :bg-colors ["bg-gradient-to-br"
                  "from-slate-50/90"
                  "from-45%"
                  "to-indigo-100/90"
                  "to-90%"]
      :bg-photo 
       {:background-image (str "url("  constants/assets-url "img/data_ins_p.webp" ")")}})

   :SemanticDQaR
    (let [title "Semantic Data Querying and Retrieval"]
     {:sec-name title
      :card-id (str (constants/transform-string title))
      :icons (str constants/assets-url "img/semantic_dat.svg")
      :content "We develop custom solutions for efficient and precise querying of biomedical data,
                allowing users to easily search, retrieve, and filter information using natural language queries 
                and ensuring quick access to relevant data and insights."
      :bg-colors ["bg-gradient-to-br"
                  "from-slate-100/85"
                  "from-45%"
                  "to-blue-100/90" 
                  "to-90%"]
      :bg-photo
      {:background-image (str "url(" constants/assets-url "img/semantic_dat_p.webp" ")")}})

   :DataSaC
    (let [title "Data Security and Compliance"]
    {:sec-name title
     :card-id (str (constants/transform-string title))
     :icons (str constants/assets-url "img/data_sec.svg")
     :content "Our team prioritizes data security and adheres to industry best practices and regulatory requirements,
     ensuring the protection of sensitive biomedical data while maintaining compliance international standards,
     such as ISO 27001."
     :bg-colors ["bg-gradient-to-br"
                 "from-slate-100/80" 
                 "from-45%" 
                 "to-sky-100"
                 "to-90%"]
     :bg-photo
   
      {:background-image  (str  "url(" constants/assets-url "img/data_sec_p.webp" ")")}})

   :CustomBAD
    (let [title "Custom Biomedical Application Development"] 
     {:sec-name title
      :card-id (str (constants/transform-string title))
      :icons (str constants/assets-url "img/custom_app.svg")
      :content "We offer tailored application development services, collaborating closely with you to design, develop,
                and deploy applications that streamline biomedical workflows, improve collaboration,
                and boost productivity within the domain."
      :bg-colors ["bg-gradient-to-br" 
                  "from-slate-100/80" 
                  "from-45%" 
                  "to-cyan-100/95"
                  "to-90%"]
      :bg-photo 
       {:background-image (str "url(" constants/assets-url "img/custom_app_p.webp" ")")}})

   :PersonalizedTaS 
    (let [title "Personalized Training and Support"] 
     {:sec-name title
      :card-id (str (constants/transform-string title))
      :icons (str constants/assets-url "img/personalized_tra.svg")
      :content "Our engineering team provides comprehensive training and ongoing support to help you 
                make the most of our solutions. We offer personalized guidance, hands-on workshops,
                and technical assistance, ensuring your team can confidently navigate and utilize our data integration,
                analysis, and visualization tools."
      :bg-colors ["bg-gradient-to-br"
                  "from-slate-100/80"
                  "from-45%"
                  "to-teal-100/95"
                  "to-90%"]
      :bg-photo {:background-image (str "url(" constants/assets-url "img/personalized_tra_p.webp" ")")}})})

; Defining Expertise UI cards 

(def expertise-ui-cards
  (for [[k {:keys [sec-name card-id icons content bg-colors bg-photo]}] expertise-card-data]
    [:div {:key k
           :id card-id
           :class ["scroll-mt-[120px]" "flex"]} 
     [:div
      {:class ["relative"
               "flex"
               "h-full"
               "flex-col"
               "justify-start"
               "items-start"
               "overflow-hidden"
               "rounded-3xl"
               "shadow-inner"
               "shadow-lg"
               "shadow-white"
               "bg-cover"
               "bg-left"
               "group"
               "cursor-pointer"]
       :style bg-photo}
     
      [:div {:class ["opacity-0"
                     "bg-white"
                     "backdrop-blur-xl"
                     "absolute"
                     "w-full"
                     "h-full"
                     "z-20"
                     "group-hover:opacity-70"
                     "transition-opacity"
                     "duration-700"
                     "ease-in-out"]}]
      [:div
       {:class (into ["flex"
                      "items-strech"
                      "w-full"
                      "h-full z-30"]
                     bg-colors)}
       [:div
        {:class ["flex"
                 "flex-col"
                 "justify-start"
                 "items-center"
                 "px-8"
                 "py-12"]}
        [:img
         {:class ["w-14"
                  "h-auto"
                  "group-hover:scale-95"
                  "transition-all"
                  "duration-700"
                  "ease-in-out"]
          :src icons}]
        [:h1
         {:class ["text-center"
                  "my-6"
                  "text-xl"
                  "font-black"
                  "md:text-2xl"
                  "group-hover:-translate-y-2"
                  "group-focus-within:-translate-y-2"
                  "transition-all"
                  "duration-700"
                  "ease-in-out"]}
         sec-name]
        [:p
         {:class ["hyphens-auto"
                  "text-xl"
                  "mt-2"
                  "text-black/60"
                  "font-regular"
                  "drop-shadow-sm"
                  "shadow-white"
                  "group-hover:-translate-y-2"
                  "group-focus-within:-translate-y-2"
                  "transition-all"
                  "duration-700"
                  "ease-in-out"]}
         content]]]]
     ]
    ))

;; Defining Capabilities section UI data

(def capability-card-data
  {:custom-od  {:custom-card-style ["hover:bg-fuchsia-300/80"
                                    "shadow-fuchsia-400/40"
                                    "bg-fuchsia-400/70"]
                :target (constants/href-maker (get-in expertise-card-data [:OntologyDaM :card-id]))
                :bck-fragments (str constants/assets-url "img/fragments_white.svg")
                :title [:div {:class ["text-fuchsia-700"
                                      "text-xl"
                                      "font-black"]} "Custom ontology" [:br] "development"]}  

   :seamless-di  {:custom-card-style ["hover:bg-purple-300/80"
                                      "shadow-purple-400/40 "
                                      "bg-purple-400/70 "]
                  :target (constants/href-maker (get-in expertise-card-data [:DataIaH :card-id]))
                  :bck-fragments (str constants/assets-url "img/fragments_white.svg")
                  :title [:div {:class ["text-purple-700"
                                        "text-xl"
                                        "font-black"]} "Seamless data" [:br] "integration"]} 

   :intuitive-kgc  {:custom-card-style ["hover:bg-violet-300/80"
                                        "shadow-violet-400/40 "
                                        "bg-violet-400/70 "]
                    :target (constants/href-maker (get-in expertise-card-data [:KnowledgeGCaV :card-id]))
                    :bck-fragments (str constants/assets-url "img/fragments_white.svg")
                    :title [:div {:class ["text-violet-700"
                                          "text-xl"
                                          "font-black"]} "Intuitive knowledge" [:br] "graph construction"]}  

   :advanced-da  {:custom-card-style ["hover:bg-indigo-300/80"
                                      "shadow-indigo-400/40 "
                                      "bg-indigo-400/70 "]
                  :target (constants/href-maker (get-in expertise-card-data [:DataAaI :card-id]))
                  :bck-fragments (str constants/assets-url "img/fragments_white.svg")
                  :title [:div {:class ["text-indigo-700"
                                        "text-xl"
                                        "font-black"]} "Advanced data" [:br] "analysis"]}
                   

   :efficient-sq  {:custom-card-style ["hover:bg-blue-300/80"
                                       "shadow-blue-400/40 "
                                       "bg-blue-400/70 "]
                   :target (constants/href-maker (get-in expertise-card-data [:SemanticDQaR :card-id]))
                   :bck-fragments (str constants/assets-url "img/fragments_white.svg")
                   :title [:div {:class ["text-blue-700"
                                                    "text-xl"
                                                    "font-black"]} "Efficient semantic" [:br] "querying"]}

   :bespoke-ad  {:custom-card-style ["hover:bg-cyan-300/80"
                                     "shadow-cyan-400/40 "
                                     "bg-cyan-400/70 "]
                 :target (constants/href-maker (get-in expertise-card-data [:CustomBAD :card-id]))
                 :bck-fragments (str constants/assets-url "img/fragments_white.svg")
                 :title [:div {:class ["text-cyan-700"
                                       "text-xl"
                                       "font-black"]} "Bespoke application" [:br] "development"]}})

; Defining Capabilities section UI cards

(def capability-ui-cards
  [:div
   {:class ["grid"
            "grid-cols"
            "gap-4"
            "py-12"
            "sm:grid-cols-2"
            "lg:grid-cols-3"]}

   (for [[k {:keys [custom-card-style bck-fragments title target]}] capability-card-data]

     [:a {:key k
          :href target}
      [:div
       {:class (into ["relative"
                      "flex"
                      "w-full"
                      "justify-center"
                      "items-center"
                      "rounded-2xl"
                      "px-12"
                      "py-6"
                      "transition-all"
                      "duration-700"
                      "ease-in-out"
                      "overflow-hidden"
                      "group"
                      "shadow-lg"
                      "cursor-pointer"
                      "hover:scale-105"]
                     custom-card-style)}
       [:img
        {:class ["absolute"
                 "z-10"
                 "transition-all"
                 "opacity-90"
                 "duration-700"
                 "ease-in-out"
                 "group-hover:scale-125"
                 "group-hover:-translate-x-6"
                 "group-hover:-rotate-45"]
         :src
         bck-fragments}]

       [:section
        {:class ["flex-1"
                 "flex-auto"
                 "items-center"
                 "justify-center"
                 "z-20"]}

        [:h1
         {
          :class (into ["text-center"
                        "text-white-700"])}
         title]]]])])