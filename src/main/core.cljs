(ns main.core

  (:require
  ;;  [applied-science.js-interop :as j]
   [clojure.string :as str :refer [lower-case]]
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [main.icons :as icons]
   [main.navbarx :as navbar-menu]
            ;; ["locomotive-scroll" :as LocomotiveScroll]
   [main.constants :refer [email-address linkedin-address assets-url]]))



;; (def scroll 
;;   (LocomotiveScroll. (clj->js {:el (js/document.querySelector "[data-scroll-container]")
;;                                :smooth true
;;                                :lerp 0.05}
;;                               ;;  :reload-on-context-change true
;;                               :smartphone {:smooth false}
;;                               :tablet {:smooth false}
;;                               :gestureDirection "vertical"
;;                               ;;  :smooth-mobile 0
;;                               )))


(def listDots 
  [:span 
   {:class "font-bold
            text-purple-500
            mr-2
            text-xl"}
   ":"])
(def fSlash 
  [:span 
   {:class "font-black
            text-purple-500
            mr-2 
            text-md 
            italic 
            opacity-75"}
   "/"])

(defn transform-string [s]
  (let [words (clojure.string/split s #" ")
        first-word (first words)
        other-words (rest words)
        initials (map #(subs % 0 1) other-words)]
    (str/join "" (cons first-word initials))))


(defn href-maker [s]
  (str "#" (transform-string s)))

;; Defining header section 

(def header1 [:div
              {:id "home"
               :class "flex 
                       flex-wrap 
                       justify-center 
                       h-screen 
                       w-full 
                       items-center 
                       bg-gradient-to-r 
                       from-white/90
                       from-15% 
                       via-bg-white/30 
                       via-40% 
                       to-white/0 
                       to-90% relative"}

              [:div
               {:class "w-full
                        h-full 
                        bg-gradient-to-tr 
                        from-white/90
                        from-15%  
                        via-violet-300/30 
                        via-42% 
                        to-cyan-300/80 
                        to-33% 
                        absolute 
                        bottom-0 
                        left-0 
                        z-20 
                        mix-blend-multiply"}] 

              [:div
               {:class "flex 
                        flex-wrap 
                        items-center 
                        justify-between 
                        mx-auto 
                        w-full 
                        z-30
                        max-w-screen-md p-8 
                        md:max-w-screen-lg md:p-16
                        lg:max-w-screen-2xl lg:p-20"}
               [:h1
                {:class "text-start
                         mt-6 
                         mb-2 
                         text-gray-950 
                         text-5xl
                         font-black
                         w-fit
                           md:text-7xl 
                           xl:text-7xl"}

                "Unlock The Potential of" [:br]
                [:span
                 {:class "text-violet-500 
                          font-black"}
                 " Biomedical "]
                [:span
                 {:class "text-cyan-500/80
                          font-black"}
                 " Data "]]

               [:h5
                {:class "text-start 
                         mt-2 mb-6 
                         text-black/65 
                         text-xl
                         font-normal
                         hyphens-auto
                         w-fit
                           md:text-4xl"}
                "Revolutionizing ontologies, data integration,
                 and knowledge graphs to fuel innovation and drive informed decision-making."]]])


(def about-sec [:div
                {:id "about"
                 :class "bg-white 
                         flex 
                         items-center 
                         justify-center 
                         h-auto 
                         py-36 
                         box-border"}
                [:div
                 {:class "flex 
                          flex-col 
                          w-full 
                          h-fit 
                          gap-4            
                          max-w-screen-md px-8 
                          md:max-w-screen-lg md:px-16
                          lg:max-w-screen-2xl lg:px-20 lg:flex-row"}

                 [:div
                  {:class "flex 
                           flex-col 
                           w-full
                           justify-center
                           items-center
                           text-custom-darkest-violet
                           lg:w-50"}

                  [:div
                   {:class "flex 
                            flex-col 
                            w-full 
                            items-center 
                            justify-center 
                            lg:flex-row"}
                   [:img
                    {:class "mx-6
                            w-12 
                            h-auto"
                     :src (str assets-url "img/about-icon.svg")}]
                
                   [:h1 
                    {:class "text-center 
                                 my-6 
                                 text-gray-950 
                                 text-5xl 
                                 font-black
                                   md:text-6xl md:text-start"}
                    "Who are we?"]]

                  [:p
                   {:class "text-xl 
                            mt-2 
                            text-start
                            hyphens-auto
                            text-black/60
                            md:text-2xl
                            md:text-center"}
                   \u2003"We are a dedicated team of experts focused on empowering the biomedical domain through ontologies,
                   data integration, harmonization, analysis, and knowledge graphs. With our small but highly skilled
                   engineering team, we offer tailored solutions to enhance data organization, uncover hidden insights, 
                   and drive informed decision-making."]]

                 [:div
                  {:class "flex 
                           w-full 
                           lg:w-50 
                           py-24"}
                  [:img {:src (str assets-url "img/try.png")
                         :class "w-auto 
                                 h-auto 
                                 rounded-3xl"}]]]])


(def capabilities-sec [:div
                       {:id "capabilities"
                        :class "relative 
                                h-auto 
                                py-36 
                                flex 
                                items-center 
                                justify-center 
                                bg-indigo-50"}
                       [:div
                        {:class "w-full 
                                 h-full 
                                 bg-gradient-to-br 
                                 from-white/0 
                                 from-25% 
                                 via-violet-300/50 
                                 via-42% 
                                 to-cyan-300/80 
                                 to-33% absolute
                                 bottom-0 
                                 right-0
                                 z-20
                                 justify-start
                                 items-center 
                                 overflow-hidden"}
                        [:img
                         {:class "absolute 
                                  left-0 
                                  -ms-16 
                                  h-full 
                                  scale-125
                                  -rotate-6 
                                  hidden
                                  lg:flex"
                          :src (str assets-url "img/s_letter_l.svg")}]]

                       [:div
                        {:class "flex 
                                 flex-col 
                                 w-full 
                                 h-fit 
                                 items-center
                                   max-w-screen-md p-8 
                                   md:max-w-screen-lg md:p-16
                                   lg:max-w-screen-2xl lg:p-6 z-30"}

                        [:div
                         {:class "flex 
                                  flex-col 
                                  w-full 
                                  justify-center
                                  items-center
                                  text-custom-darkest-violet                            
                                  lg:w-2/3"}

                         [:div
                          {:class "flex 
                                   flex-col 
                                   items-center
                                   justify-start
                                   lg:flex-row"}
                          [:img
                           {:class "mx-6 
                                    w-16
                                    h-auto"
                                    :src (str assets-url "img/capabilities-icon.svg")}]
                          [:h1
                           {:class "text-center 
                                    my-6 
                                    text-gray-950
                                    text-3xl
                                    font-black
                                      md:text-6xl"}
                           "Capabilities"]]
                         [:p
                          {:class "text-xl 
                                   text-black/60 
                                   mt-4
                                   mb-6
                                  hyphens-auto
                                    md:text-2xl
                                    md:text-center"}
                          "\u2003 Through our extensive capabilities, we collaborate closely with
                          our clients to achieve their goals and deliver exceptional results.
                          Our capabilities include:"]]

                        [:div
                         {:class "grid
                                  grid-cols
                                  gap-4 
                                  py-12
                                    sm:grid-cols-2 
                                    lg:grid-cols-3"}

                    ;; fuchsia card

                         [:div
                          {:class "relative
                                   flex 
                                   w-full
                                   justify-center
                                   items-center
                                   bg-fuchsia-400/70
                                   rounded-2xl
                                   px-12 
                                   py-6 
                                   shadow-lg 
                                   shadow-fuchsia-400/40 
                                   transition-all 
                                   duration-700 
                                   ease-in-out 
                                   overflow-hidden
                                   group 
                                   cursor-pointer
                                     hover:scale-105
                                     hover:bg-fuchsia-300/80"}
                          [:img 
                           {:class "absolute
                                         z-10
                                         transition-all
                                         opacity-90 
                                         duration-700 
                                         ease-in-out
                                         group-hover:scale-125
                                         group-hover:-translate-x-6
                                         group-hover:-rotate-45"
                                 :src (str assets-url "img/fragmentsWhite.svg")}]
                          [:section
                           {:class "flex-1
                                    flex-auto 
                                    items-center
                                    justify-center 
                                    z-20"}

                           [:h1
                            {:class "text-center 
                                     text-xl
                                     font-black 
                                     text-white-700
                                       hover: text-fuchsia-700"}
                            "Custom ontology"
                            [:br]
                            "development"]]]

                         ;; purple card

                         [:div
                          {:class "relative 
                                   flex
                                   w-full
                                   justify-center 
                                   items-center 
                                   bg-purple-400/70 
                                   rounded-2xl 
                                   px-12 py-6 
                                   shadow-lg 
                                   shadow-purple-400/40 
                                   transition-all 
                                   duration-700
                                   ease-in-out 
                                   overflow-hidden
                                   group
                                   cursor-pointer
                                     hover:scale-105
                                     hover:bg-purple-300/80"}
                          [:img
                           {:class "absolute
                                         z-10 
                                         transition-all 
                                         opacity-90 
                                         duration-700
                                         ease-in-out
                                           group-hover:scale-125
                                           group-hover:-translate-x-6
                                           group-hover:-rotate-45"
                                 :src (str assets-url "img/fragmentsWhite.svg")}]
                          [:section
                           {:class "flex-1 
                                    flex-auto
                                    items-center
                                    justify-center
                                    z-20"}
                           [:h1
                            {:class "text-center
                                     text-xl 
                                     font-black 
                                     text-white-700
                                       hover: text-purple-700"}
                            "Seamless data"
                            [:br]
                            "integration"]]]

                        ;; violet card card

                         [:div
                          {:class "relative 
                                   flex w-full 
                                   justify-center 
                                   items-center
                                   bg-violet-400/70
                                   rounded-2xl
                                   px-12
                                   py-6 
                                   shadow-lg 
                                   shadow-violet-400/40 
                                   transition-all
                                   duration-700
                                   ease-in-out 
                                   overflow-hidden
                                   group cursor-pointer
                                   hover:scale-105
                                   hover:bg-violet-300"}
                          [:img 
                           {:class "absolute 
                                         z-10 
                                         transition-all 
                                         opacity-90 
                                         duration-700 
                                         ease-in-out
                                         group-hover:scale-125
                                         group-hover:-translate-x-6
                                         group-hover:-rotate-45"
                                 :src (str assets-url "img/fragmentsWhite.svg")}]
                          [:section
                           {:class "flex-1
                                    flex-auto 
                                    items-center 
                                    justify-center
                                    z-20"}

                           [:h1
                            {:class "text-center 
                                     text-xl 
                                     font-black 
                                     text-white-700
                                     hover: text-violet-700"}
                            "Intuitive knowledge"
                            [:br]
                            "graph construction"]]]

                         ;;  indigo card

                         [:div
                          {:class "relative 
                                   flex 
                                   w-full 
                                   justify-center
                                   items-center
                                   bg-indigo-400/70
                                   rounded-2xl
                                   px-12
                                   py-6
                                   shadow-lg
                                   shadow-indigo-400/40
                                   transition-all
                                   duration-700
                                   ease-in-out
                                   overflow-hidden
                                   group cursor-pointer
                                     hover:scale-105
                                     hover:bg-indigo-300/80"}
                          [:img 
                           {:class "absolute 
                                         z-10 
                                         transition-all 
                                         opacity-90 
                                         duration-700 
                                         ease-in-out
                                           group-hover:scale-125
                                           group-hover:-translate-x-6
                                           group-hover:-rotate-45"
                                 :src (str assets-url "img/fragmentsWhite.svg")}]
                          [:section
                           {:class "flex-1 
                                    flex-auto 
                                    items-center
                                    justify-center
                                    z-20"}
                           [:h1
                            {:class "text-center 
                                     text-xl
                                     font-black
                                     text-white-700
                                       hover: text-indigo-700"}
                            "Advanced data"
                            [:br]
                            "analysis"]]]

                         ;;  blue card

                         [:div
                          {:class "relative
                                   flex 
                                   w-full
                                   justify-center
                                   items-center
                                   bg-blue-400/70
                                   rounded-2xl
                                   px-12 
                                   py-6
                                   shadow-lg
                                   shadow-blue-400/40
                                   transition-all
                                   duration-700
                                   ease-in-out
                                   overflow-hidden
                                   group cursor-pointer
                                     hover:scale-105
                                     hover:bg-blue-300/80"}
                          [:img 
                           {:class "absolute 
                                         z-10
                                         transition-all
                                         opacity-90
                                         duration-700
                                         ease-in-out
                                           group-hover:scale-125
                                           group-hover:-translate-x-6
                                           group-hover:-rotate-45"
                                 :src (str assets-url "img/fragmentsWhite.svg")}]
                          [:section
                           {:class "flex-1 
                                    flex-auto
                                    items-center 
                                    justify-center
                                    z-20"}
                           [:h1
                            {:class "text-center 
                                     text-xl
                                     font-black
                                     text-blue-700
                                       hover: text-blue-700"}
                            "Efficient semantic"
                            [:br]
                            "querying"]]]


                         ;;  cyan card 

                         [:div
                          {:class "relative 
                                   flex 
                                   w-full
                                   justify-center
                                   items-center
                                   bg-cyan-400/70
                                   rounded-2xl
                                   px-12
                                   py-6
                                   shadow-lg
                                   shadow-cyan-400/40
                                   transition-all 
                                   duration-700
                                   ease-in-out 
                                   overflow-hidden
                                   group cursor-pointer
                                     hover:scale-105
                                     hover:bg-cyan-300/80"}
                          [:img
                           {:class "absolute 
                                         z-10
                                         transition-all
                                         opacity-90
                                         duration-700
                                         ease-in-out
                                           group-hover:scale-125
                                           group-hover:-translate-x-6
                                           group-hover:-rotate-45"
                                 :src (str assets-url "img/fragmentsWhite.svg")}]
                          [:section
                           {:class "flex-1 
                                    flex-auto 
                                    items-center 
                                    justify-center 
                                    z-20"}
                           [:h1
                            {:class "text-center
                                     text-xl
                                     font-black
                                     text-white-700
                                       hover: text-cyan-700"}
                            "Bespoke application"
                            [:br]
                            "development"]]]]]])

;; the map with expertise section keys and properties.Dynamic Cards creator

(def expertise-sec-names
  {:OntologyDaM {:sec-name "Ontology Development and Management"                      
                 :icons
                 {:src (str assets-url "img/Ontology_Icn.svg")}
                 :content "Our expert small engineering team creates, maintains, and updates custom ontologies
                           tailored to the biomedical domain, ensuring accurate representation of domain knowledge
                           for efficient data organization, integration, and retrieval."
                 :bg-colors "bg-gradient-to-br 
                             from-indigo-50/95
                             from-45% 
                             to-fuchsia-100/90 
                             to-90% bl"
                 :bg-photo
                 {:style
                  {:background-image (str "url(" assets-url "img/o_dev_wall.jpg" ")")}}
                }

   :DataIaH {:sec-name "Data Integration and Harmonization"
             :icons
             {:src (str assets-url"img/Data_integration.svg")}
             :content "We offer bespoke data integration and harmonization solutions, 
                       combining and refining disparate biomedical data sources into a unified, 
                       consistent, and easily-accessible format. Our skilled team ensures improved 
                       data quality and seamless information exchange."
             :bg-colors "bg-gradient-to-br
                         from-blue-50/80
                         from-45% 
                         to-purple-100/95
                         to-90%"
             :bg-photo
             {:style
              {:background-image (str "url("  assets-url "img/Data_integration_p.jpg" ")")}}
             }

   :KnowledgeGCaV {:sec-name "Knowledge Graph Construction and Visualization"
                   :icons
                   {:src (str assets-url "img/Knowledge_graph.svg")}
                   :content "Our team builds tailored knowledge graphs representing complex biomedical
                            data as interconnected nodes and edges, enabling intuitive data exploration and 
                            the discovery of hidden relationships and insights for informed decision-making."
                   :bg-colors "bg-gradient-to-br 
                               from-slate-50/90 
                               from-45% 
                               to-violet-100/95 
                               to-90%"
                   :bg-photo
                   {:style
                    {:background-image (str "url("  assets-url "img/knowledge_graphs_p.jpg" ")")}}
                  }

   :DataAaI {:sec-name "Data Analysis and Insights"
             :icons
             {:src (str assets-url "img/Data_insght.svg")}
             :content "Our engineers employ advanced statistical and machine learning
                       methods to uncover hidden patterns, trends, and correlations in biomedical data, 
                       providing valuable insights that drive research, innovation, 
                       and informed decision-making in the biomedical domain."
             :bg-colors "bg-gradient-to-br 
                         from-slate-50/90 
                         from-45%
                         to-indigo-100/90
                         to-90%"
             :bg-photo
             {:style
              {:background-image (str "url("  assets-url "img/Data_insights_p.jpg" ")")}}
            }

   :SemanticDQaR {:sec-name "Semantic Data Querying and Retrieval"
                  :icons
                  {:src (str assets-url "img/Semantic_dat.svg")}
                  :content "We develop custom solutions for efficient and precise querying of biomedical data,
                            allowing users to easily search, retrieve, and filter information using natural language queries 
                            and ensuring quick access to relevant data and insights."
                  :bg-colors "bg-gradient-to-br
                              from-slate-100/85
                              from-45%
                              to-blue-100/90 
                              to-90%"
                  :bg-photo
                  {:style
                   {:background-image (str "url(" assets-url "img/semantic_dataq.jpg" ")")}}
                  }


   :DataSaC {:sec-name "Data Security and Compliance"
             :icons
             {:src (str assets-url "img/Data_sec.svg")}
             :content "Our team prioritizes data security and adheres to industry best practices
                       and regulatory standards, ensuring the protection of sensitive biomedical data while
                       maintaining compliance with relevant data privacy regulations, such as HIPAA and GDPR."
             :bg-colors "bg-gradient-to-br
                         from-slate-100/80 
                         from-45% 
                         to-sky-100
                         to-90%"
             :bg-photo
             {:style
              {:background-image  (str  "url(" assets-url "img/data-sec.jpg" ")")}}
             }


   :CustomBAD {:sec-name "Custom Biomedical Application Development"
               :icons
               {:src (str assets-url "img/Custom_app.svg")}
               :content "We offer tailored application development services, collaborating closely with you to design, develop,
                         and deploy applications that streamline biomedical workflows, improve collaboration,
                         and boost productivity within the domain."
               :bg-colors "bg-gradient-to-br 
                           from-slate-100/80 
                           from-45% 
                           to-cyan-100/95
                           to-90%"
               :bg-photo
               {:style               
                {:background-image (str "url(" assets-url "img/custom_app_p.jpg" ")")}}
               }


   :PersonalizedTaS {:sec-name "Personalized Training and Support"
                     :icons
                     {:src (str assets-url "img/Personalized_tra.svg")}
                     :content "Our engineering team provides comprehensive training and ongoing support to help you 
                               make the most of our solutions. We offer personalized guidance, hands-on workshops,
                               and technical assistance, ensuring your team can confidently navigate and utilize our data integration,
                               analysis, and visualization tools."
                     :bg-colors "bg-gradient-to-br
                                 from-slate-100/80
                                 from-45%
                                 to-teal-100/95
                                 to-90%"
                     :bg-photo
                     {:style
                      {:background-image  (str "url(" assets-url "img/training_p.jpg" ")")}}   
                 }})

(def expertise-sec
  [:div
   {:id "expertise"
    :class "flex 
            h-auto
            items-center
            justify-center
            px-1 
            lg:p-8
            bg-gradient-to-b 
            from-white from-50%
            to-slate-100"}
   [:div
    {:class "flex
             flex-col 
             w-full
             h-fit
             items-center
             py-36
             max-w-screen-md px-1 
               md:max-w-screen-lg md:px-16
               lg:max-w-screen-2xl lg:px-6"}
    [:div
     {:class "flex 
              flex-col
              w-full
              lg:w-2/3
              justify-center
              items-center
              text-custom-darkest-violet
              p-4"}

     [:div
      {:class "flex 
               flex-col
               items-center 
               justify-start 
               lg:flex-row"}
      [:img
       {:class "mx-6
                w-16
                h-auto"
                :src (str assets-url "img/expertise-icon.svg")}]
      [:h1 {:class "text-center
                    my-6 text-gray-950 
                    text-3xl
                    font-black
                      md:text-6xl"}
       "Expertise"]]

     [:p
      {:class "text-xl 
               text-black/80
               mt-4
               mb-6
               hyphens-auto
                md:text-2xl
                md:text-center"}
      "\u2003 With years of experience in the biotech industry, we've honed our expertise in developing cutting-edge
      software and database solutions tailored to the unique needs of life science organizations."]]


    [:div {:class "grid 
                   grid-cols
                   gap-4 py-12
                     sm:grid-cols-1 
                     lg:grid-cols-2 
                     xl:grid-cols-2 
                     2xl:grid-cols-2"}

     (for [[k {:keys [sec-name icons content bg-colors bg-photo]}] expertise-sec-names]

       [:div
        {:key k                        
         :class "relative 
                 flex 
                 flex-col
                 justify-start 
                 items-start
                 overflow-hidden
                 rounded-3xl
                 shadow-inner
                 shadow-lg 
                 shadow-white 
                 bg-cover
                 bg-left
                 group
                 cursor-pointer"
         :style (get bg-photo :style)}
        [:div {:class "opacity-0 
                       bg-white
                       backdrop-blur-xl
                       absolute 
                       w-full 
                       h-full 
                       z-20 
                       group-hover:opacity-70
                       transition-opacity duration-700 ease-in-out"}]
        [:div
         {:class (str "flex 
                       items-strech 
                       w-full
                       h-full z-30" " " bg-colors)}
         [:div
          {:class "flex 
                   flex-col 
                   justify-start 
                   items-center 
                   px-8 
                   py-12"}
          [:img
           {:class "w-16 
                    h-auto
                    group-hover:scale-95 
                    transition-all 
                    duration-700 
                    ease-in-out"
            :src (get icons :src)}]
          [:h1
           {:class "text-center 
                    my-6 
                    text-xl
                    font-black
                      md:text-2xl
                    group-hover:-translate-y-2
                    group-focus-within:-translate-y-2
                    transition-all duration-700 ease-in-out"}
           sec-name]
          [:p
           {:class "hyphens-auto 
                    text-xl
                    mt-2
                    text-black/60 
                    font-regular
                    drop-shadow-sm 
                    shadow-white 
                    group-hover:-translate-y-2
                    group-focus-within:-translate-y-2
                    transition-all duration-700 ease-in-out"}
           content]]]])]]])


(defn video-cover []
  (let [video-loaded? (r/atom false)]
    (fn []
      [:div
       [:img {:src (str assets-url "img/bck-cover-image.png")
              :alt "Backup Image"
              :class (str "absolute 
                           top-0 
                           left-0 
                           w-full 
                           h-full 
                           object-cover
                           fixed 
                           z-10 
                           top-0
                           left-0"
                          (when @video-loaded? "hidden"))}]
       [:video
        {:class "top-0
                 left-0
                 w-full 
                 h-full
                 object-cover
                 fixed
                 z-20"
         :autoPlay true
         :muted true
         :loop true
         :playsInline true
         :on-can-play #(reset! video-loaded? true)
         :on-error #(js/console.error "Video error:", %)
         :on-stalled #(js/console.warn "Video stalled:", %)}
        [:source {:src (str assets-url "video/shtanglitze.mp4") :type "video/mp4"}]]])))
       
      
(defn main []
  [:main
   {:class "w-full
            h-max"}
   [video-cover]
   [:div
    {:class "p-0
             m-0
             relative
             z-30"}
    header1
    about-sec
    capabilities-sec
    expertise-sec]])





(defn footer []
  [:footer
   {:class "w-full 
            pt-36 
            bg-gradient-to-r 
            from-slate-950 
            to-indigo-950
            inset-x-0
            bottom-0 
            z-30"}
   [:div
    {:class "flex 
             flex-wrap 
             flex-col
             mx-auto
             justify-center
             text-white
             gap-4 
             max-w-screen-md p-8 
               md:max-w-screen-lg  md:p-16  md:flex-row
               lg:max-w-screen-2xl lg:p-20"}
    [:div
     {:class "mx-12
              my-6"}
     [:a
      {:href "#"}
      [:img
       {:src (str assets-url "img/ShtanglitzaLogoTp0.svg")
        :class "w-auto 
                h-12
                mb-6"}]]
     [:div
      {:class "flex
               flex-col"}
      [:a
       {:href email-address
        :class "flex
                flex-row 
                w-fit
                mt-3
                group"}
       [:span
        {:class "mr-2
                   group-hover:ms-1 
                 viewBox 0 0 24 24
                 ease-in-out 
                 duration-700"}
        (icons/emailIcn)]
       [:span
        {:class "group-hover:text-purple-400 
                 ease-in-out
                 duration-700"}
        "Email"]]
      [:a
       {:href linkedin-address
        :target "_blank"
        :class "flex 
                flex-row
                w-fit
                mt-2 
                group"}
       [:span
        {:class "mr-2
                   group-hover:ms-1 
                 viewBox 0 0 24 24 
                 ease-in-out 
                 duration-700"}
        (icons/linkedIcn)]
       [:span
        {:href "https://google.com"
         :class "group-hover:text-purple-400 
                 ease-in-out
                 duration-700"}
        "Visit our LinkedIn"]]]]
    [:div
     {:class "flex 
              flex-col 
                md:flex-row"}
     [:div
      {:class "mx-12 
               my-6"}
      [:ul
       {:class "list-image-[url()]"}
       [:p
        {:class "font-bold 
                 text-purple-400 
                 tracking-widest mb-2"}
        "Shortcuts"]

       (for [link ["Home" "About" "Capabilities" "Expertise" "Contact"]]
         (let [href (str "#" (lower-case link))]
           [:li {:key link}
            [:a
             {:href href
              :class "font-light
                      text-sm 
                      ease-in-out duration-700
                        hover:text-purple-400"}
             listDots link]]))]]
     [:div
      {:class "mx-12
               my-6"}
      [:ul
       {:class "list-image-[url()]"}
       [:p
        {:class "font-bold
                 text-purple-400
                 tracking-widest mb-2"}
        "Expertise"]

       (for [link [(-> expertise-sec-names :OntologyDaM :sec-name)
                   (-> expertise-sec-names :DataIaH :sec-name)
                   (-> expertise-sec-names :KnowledgeGCaV :sec-name)
                   (-> expertise-sec-names :DataAaI :sec-name)
                   (-> expertise-sec-names :SemanticDQaR :sec-name)
                   (-> expertise-sec-names :DataSaC :sec-name)
                   (-> expertise-sec-names :CustomBAD :sec-name)
                   (-> expertise-sec-names :PersonalizedTaS :sec-name)]]

         [:li {:key link}
          [:a
           {:href (href-maker link)
            :class "font-light 
                    text-sm
                    ease-in-out
                    duration-700
                      hover:text-purple-400"}
           fSlash link]])]]]]

   [:div
    {:class "w-full
             h-full 
             flex
             flex-row
             m-0 
             mt-16 
             py-14 
             justify-center 
             align-middle"}
    [:p
     {:class "text-white 
              text-sm
              font-light
              tracking-widest"}
     "All rights reserved (c) 2024 Shtangltza.ai"]]])


(defn web-page []
  [:div
   {:class "flex
            flex-col 
            box-border"}
   (navbar-menu/navbar)
   [main]
   [footer]])


(defn ^:dev/after-load start []
  (js/console.log "start"))
 

(defn init []
  (.log js/console "Loading App")
  (rdom/render [web-page] (js/document.getElementById "app"))
  (start))

