(ns main.pages.landing-page
  (:require
   [reagent.core :as r]
   [main.constants :as constants]
   [main.components.ui-cards :as ui-cards]
   [main.pages.security-page :refer [handle-nav-click]]
   [reitit.frontend.easy :as rfe]))


(defn goto-security []
  (rfe/push-state :security)
  (.scrollTo js/window #js{ :top 0 :behavior "instant"}))

(defn goto-security-with-hash [hash-id]
  (rfe/push-state :security)
  (js/setTimeout
    (fn []
      (handle-nav-click hash-id)) ; Use the imported function directly
    400))

(defn goto-security-top []
  (rfe/push-state :security)
  (r/next-tick #(set! (.-hash js/location) "top")))

(defn security-chip [{:keys [id label]}]
  [:button
   {:on-click #(goto-security-with-hash id)
    :class ["flex-inline" "px-4" "py-2" "rounded-full"
            "border"
            "border-emerald-200/30"
            "bg-emerald-300/80"
            "hover:bg-emerald-300"
            "transition-all ease-in-out duration-700"
            "text-green-800" "text-sm" "font-medium" "backdrop-blur-sm"
            "hover:shadow-2xl" "hover:shadow-emerald-400"
            ""]}
   label])

(def header [:div
              {:id "home"
               :class ["flex"
                       "flex-wrap"
                       "justify-center"
                       "calculated-height"
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
                          "gap-10"
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
                     :class ["w-full"
                             "h-auto"
                             "self-center"]}]]]])

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
                                   "text-black/70"
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

(def security-sec
  (let [bg-url (str constants/assets-url "img/security_bck.webp")]
  [:div
                   {:id "security"
                    :class ["relative"
                            "overflow-hidden"
                            "h-auto"
                            "py-36"
                            "flex"
                            "items-center"
                            "justify-center"
                            "bg-center"
                            "bg-cover"
                            "bg-no-repeat"
                            "animate-subtle-move"
                            ]
                    :style {:backgroundImage (str "url('" bg-url "')")}
                    }
                   [:div {:class ["absolute inset-0" "bg-[linear-gradient(to_bottom_right,_#1D1B48_0%,_#726AF0_60%,_#726AF000_100%)]" "backdrop-blur-[2px]" "mix-blend-multiply" "opacity-[90%]" "z-1"]}]
                    [:div {:class ["absolute inset-0"
                  "bg-[linear-gradient(to_bottom_right,_#1A1944_0%,_#1A1944E6_50%,_#1A194400_100%)]"
                  "backdrop-blur-[8px]"
                  "opacity-100"
                  "z-2"]}]


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
                        :src (str constants/assets-url "img/data_sec_lock.svg")}]
                      [:h1
                       {:class ["text-center"
                                "my-6"
                                "text-white"
                                "text-3xl"
                                "font-black"
                                "md:text-6xl"
                                "text-shadow-md"]}
                       "Security"]]
                     [:p
                      {:class ["text-xl"
                               "text-white"
                               "drop-shadow-sm"
                               "mt-4"
                               "mb-6"
                               "hyphens-auto"
                               "md:text-2xl"
                               "md:text-center"
                               "text-shadow-md"]}
                      "\u2003 At Shtanglitza " [:span {:class ["font-bold"]} "we treat the security of our client's information as our top priority"] ".
                      We maintain a robust " [:span {:class ["font-bold"]} "ISO 27001:2022"] " compliant, control framework that protects our people, technology,
                      and physical assets. By consistently applying these controls, we provide a foundation of trust that enables
                      our client relationships to thrive.\n
                      "]
                     [:p
                      {:class ["text-xl"
                               "text-white"
                               "mt-4"
                               "mb-6"
                               "hyphens-auto"
                               "md:text-2xl"
                               "md:text-center"]}
                      "If you would like to know more about Shtanglitza’s Information Security program, please read the"
                      [:button {::on-click #(goto-security)
                      :class ["text-[#77F7E8]" "hover:text-[#4ED9CB]" "whitespace-nowrap" "hover:no-underline" "tracking-wider"]}
                      " \"How we do it" \"]

                      " section "
                      [:span
                       {:class ["italic" "font-light"]}
                       "(click here or Read more button below)"
                       ]
                      " or contact us at  "
                      [:a
                       {:href (str "mailto:" constants/email-address)
                        :class ["text-[#77F7E8]" "hover:text-[#4ED9CB]" "whitespace-nowrap" "hover:no-underline" "tracking-wider"]
                        :title "Contact us via email"}
                       "security@shtanglitza.ai"]]

                     [:section
                      {:class ["flex" "w-full" "h-fit" "flex-row" "flex-wrap"
                               "items-center" "justify-center" "gap-3" "mt-6"]}
                      (for [chip constants/security-chips]
                        ^{:key (:id chip)} [security-chip chip])]

                     [:button
                      {:on-click #(goto-security)
                       :class ["inline-flex" "items-center" "justify-center" "mt-12" "w-fit"
                               "px-6" "py-3" "rounded-lg" "bg-white/90" "hover:bg-white"
                               "text-[#8284F4]" "font-semibold" "shadow-[#7375ec]/30" "shadow-lg"
                               "transition-colors" "duration-200"]}
                      "Read More"]]]]))


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
                      "min-h-full" 
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
                 "min-h-full" 
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

(defn Page []
  [:div 
   
   [video-cover]
   [:div
    {:class ["p-0"
             "m-0"
             "relative"
             "z-30"
             "fade-in"]}
    header
    about-sec
    capabilities-sec
    expertise-sec
    security-sec]])
                                                                                           
                                                                                           




