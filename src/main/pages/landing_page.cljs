(ns main.pages.landing-page
  (:require
   [reagent.core :as r]
   [main.constants :as constants]
   [main.components.ui-cards :as ui-cards]))


;; Defining header section 

(def header [:div
              {:id "home"
               :class ["flex"
                       "flex-wrap"
                       "justify-center"
                       "h-screen"
                       "w-full"
                       "items-center"
                       "bg-gradient-to-r"
                       "from-white/90"
                       "from-15%"
                       "via-bg-white/30" 
                       "via-40%"
                       "to-white/0"
                       "to-90%"
                       "relative"]}

              [:div
               {:class ["w-full"
                        "h-full"
                        "bg-gradient-to-tr"
                        "from-white/90"
                        "from-1%"
                        "via-violet-300/30"
                        "via-42%"
                        "to-cyan-300/80"
                        "to-33%"
                        "absolute"
                        "bottom-0"
                        "left-0"
                        "z-20"
                        "mix-blend-multiply"
                        "lg:from-15%"]}]

              [:div
               {:class ["flex"
                        "flex-wrap"
                        "items-center"
                        "justify-between"
                        "w-full"
                        "z-30"
                        "max-w-screen-md"
                        "p-8"
                        "md:max-w-screen-lg"
                        "md:p-16"
                        "lg:max-w-screen-2xl"
                        "lg:p-20"]}
               [:h1
                {:class ["text-start"
                         "mt-6"
                         "mb-2"
                         "text-gray-950"
                         "text-5xl"
                         "font-black"
                         "w-fit"
                         "md:text-7xl"
                         "xl:text-7xl"]}

                "Unlock The Potential of" [:br]

                [:span
                 {:class ["text-violet-500"
                          "font-black"]}
                 " Biomedical "]
                [:span
                 {:class ["text-cyan-500/80"
                          "font-black"]}
                 " Data "]]

               [:h5
                {:class ["text-start"
                         "mt-2" "mb-6"
                         "text-black/65"
                         "text-xl"
                         "font-normal"
                         "hyphens-auto"
                         "w-fit"
                         "md:text-3xl"]}
                "Revolutionizing ontologies, data integration,
                and knowledge graphs to fuel innovation and drive informed decision-making."]]])

; Defining About section

(def about-sec [:div
                {:id "about"
                 :class ["bg-white"
                         "flex"
                         "items-center"
                         "justify-center"
                         "h-auto"
                         "py-36"
                         "box-border"]}
                [:div
                 {:class ["flex"
                          "flex-col"
                          "w-full"
                          "h-fit"
                          "gap-4"
                          "max-w-screen-md"
                          "px-8"
                          "md:max-w-screen-lg"
                          "md:px-16"
                          "lg:max-w-screen-2xl"
                          "lg:px-20"
                          "lg:flex-row"
                          "lg:gap-24"]}

                 [:div
                  {:class ["flex"
                           "flex-col"
                           "w-full"
                           "justify-center"
                           "items-center"
                           "text-custom-darkest-violet"
                           "lg:w-50"
                           "order-last"
                           "lg:order-first"]}

                  [:div
                   {:class ["flex" 
                            "flex-col" 
                            "w-full" 
                            "items-center" 
                            "justify-center" 
                            "lg:flex-row"]}
                   [:img
                    {:class ["mx-6"
                             "w-10"
                             "h-auto"]
                     :src (str constants/assets-url "img/about_icon.svg")}]
                
                   [:h1 
                    {:class ["text-center"
                             "my-6"
                             "text-gray-950"
                             "text-5xl"
                             "font-black"
                             "md:text-6xl"
                             "md:text-start"]}
                    "Who are we?"]]

                  [:p
                   {:class ["text-xl"
                            "mt-2"
                            "text-start"
                            "hyphens-auto"
                            "text-black/60"
                            "md:text-2xl"
                            "md:text-center"]}
                   "\u2003 We are a dedicated team of experts focused on empowering the biomedical domain through ontologies,
                   data integration, harmonization, analysis, and knowledge graphs. With our small but highly skilled
                   engineering team, we offer tailored solutions to enhance data organization, uncover hidden insights, 
                   and drive informed decision-making."]]
                                    
                 [:div
                   {:class ["flex"
                            "w-full"
                            "lg:w-50"
                            "order-first"
                            "lg:order-last"]}
                   [:img 
                    {:src (str constants/assets-url "img/try.webp")
                     :class ["w-auto"
                             "h-auto"
                             "rounded-3xl"]}]]]])

; Defining Capabilities section

(def capabilities-sec [:div
                       {:id "capabilities"
                        :class ["relative"
                                "h-auto"
                                "py-36"
                                "flex"
                                "items-center"
                                "justify-center"
                                "bg-indigo-50"]}
                       [:div
                        {:class ["w-full"
                                 "h-full"
                                 "bg-gradient-to-br"
                                 "from-white/0"
                                 "from-25%"
                                 "via-violet-300/50"
                                 "via-42%"
                                 "to-cyan-300/80"
                                 "to-33% absolute"
                                 "bottom-0"
                                 "right-0"
                                 "z-20"
                                 "justify-start"
                                 "items-center"
                                 "overflow-hidden"]}
                        [:img
                         {:class ["absolute"
                                  "left-0"
                                  "-ms-16"
                                  "h-full"
                                  "scale-125"
                                  "-rotate-6"
                                  "hidden"
                                  "lg:flex"]
                          :src (str constants/assets-url "img/s_letter_l.svg")}]]

                       [:div
                        {:class ["flex"
                                 "flex-col"
                                 "w-full"
                                 "h-fit"
                                 "items-center"
                                 "max-w-screen-md"
                                 "p-8"
                                 "md:max-w-screen-lg"
                                 "md:p-16"
                                 "lg:max-w-screen-2xl"
                                 "lg:p-6 z-30"]}

                        [:div
                         {:class ["flex"
                                  "flex-col"
                                  "w-full"
                                  "justify-center"
                                  "items-center"
                                  "text-custom-darkest-violet"
                                  "lg:w-2/3"]}

                         [:div
                          {:class ["flex" 
                                   "flex-col" 
                                   "items-center"
                                   "justify-start"
                                   "lg:flex-row"]}
                          [:img
                           {:class ["mx-6"
                                    "w-14"
                                    "h-auto"]
                                    :src (str constants/assets-url "img/capabilities_icon.svg")}]
                          [:h1
                           {:class ["text-center"
                                    "my-6"
                                    "text-gray-950"
                                    "text-3xl"
                                    "font-black"
                                    "md:text-6xl"]}
                           "Capabilities"]]
                         [:p
                          {:class ["text-xl"
                                   "text-black/60"
                                   "mt-4"
                                   "mb-6"
                                   "hyphens-auto"
                                   "md:text-2xl"
                                   "md:text-center"]}
                          "\u2003 Through our extensive capabilities, we collaborate closely with
                          our clients to achieve their goals and deliver exceptional results.
                          Our capabilities include:"]]
                        ui-cards/capability-ui-cards]])
                        
                                         
 ; Defining Expertise section
                                         
(def expertise-sec [:div
                    {:id "expertise"
                     :class ["flex"
                             "h-auto"
                             "items-center"
                             "justify-center"
                             "py-36"
                             "bg-gradient-to-b"
                             "from-white from-50%"
                             "to-slate-100"]}

                    [:div
                     {:class ["flex"
                              "flex-col"
                              "w-full"
                              "h-fit"
                              "items-center"
                              "gap-4"
                              "max-w-screen-md" 
                              "px-4"
                              "md:max-w-screen-lg"
                              "md:px-16"
                              "lg:max-w-screen-2xl"
                              "lg:px-20"]}
                     [:div
                      {:class ["flex"
                               "flex-col"
                               "w-full"
                               "lg:w-2/3"
                               "justify-center"
                               "items-center"
                               "text-custom-darkest-violet"]}

                      [:div
                       {:class ["flex"
                                "flex-col"
                                "items-center"
                                "justify-start"
                                "lg:flex-row"]}
                       [:img
                        {:class ["mx-6"
                                 "w-14"
                                 "h-auto"]
                         :src (str constants/assets-url "img/expertise_icon.svg")}]
                       
                       [:h1 {:class ["text-center"
                                     "my-6"
                                     "text-gray-950"
                                     "text-3xl"
                                     "font-black"
                                     "md:text-6xl"]}
                        "Expertise"]]

                      [:p
                       {:class ["text-xl"
                                "text-black/80"
                                "mt-4"
                                "mb-6"
                                "px-4"
                                "hyphens-auto"
                                "md:text-2xl"
                                "md:text-center"]}
                       "\u2003 With years of experience in the biotech industry, we've honed our expertise in developing cutting-edge
                        software and database solutions tailored to the unique needs of life science organizations."]]

                     [:div {:class ["grid"
                                    "grid-cols"
                                    "gap-4" "py-12"
                                    "sm:grid-cols-1"
                                    "lg:grid-cols-2"
                                    "xl:grid-cols-2"
                                    "2xl:grid-cols-2"]}
                      ui-cards/expertise-ui-cards]]])
                                     
;Defining video cover

(defn video-cover []
 (let [video-loaded? (r/atom false)]
    (fn []
      [:div
       [:img {:src (str constants/assets-url "img/bck_cover_image.webp")
              :alt "Backup Image"
              :class ["absolute"
                      "top-0"
                      "left-0"
                      "w-full"
                      "h-full"
                      "object-cover"
                      "fixed"
                      "z-10"
                      "top-0"
                      "left-0"
                      (when @video-loaded? "hidden")]}]
       [:video
        {:class ["top-0"
                 "left-0"
                 "w-full"
                 "h-full"
                 "object-cover"
                 "fixed"
                 "z-20"]
         :autoPlay true
         :muted true
         :loop true
         :playsInline true
         :on-can-play #(reset! video-loaded? true)
         :on-error #(js/console.error "Video error:", %)
         :on-stalled #(js/console.warn "Video stalled:", %)}
        [:source {:src (str constants/assets-url "video/shtanglitze.mp4") :type "video/mp4"}]]])))
                                                                                           
; Definng initial component for landing-page render

(defn init-landing-page []
  [:div 
   
   [video-cover]
   [:div
    {:class ["p-0"
             "m-0"
             "relative"
             "z-30"]}
    header
    about-sec
    capabilities-sec
    expertise-sec]])                                                                                  
                                                                                           
                                                                                           




