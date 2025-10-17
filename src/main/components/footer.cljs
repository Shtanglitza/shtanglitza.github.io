(ns main.components.footer
  (:require
   [main.components.navbarx :as navbar-menu]
   [main.constants :as constants]
   [main.components.ui-cards :as ui-cards]))

(defn footer []
  [:footer
   {:class ["w-full"
            "pt-36"
            "bg-gradient-to-r"
            "from-slate-950"
            "to-indigo-950"
            "inset-x-0"
            "bottom-0"
            "z-30"]}
   [:div
    {:class ["flex"
             "flex-wrap"
             "flex-col"
             "mx-auto"
             "justify-start"
             "text-white"
             "gap-8"
             "max-w-screen-md p-4"
             "md:max-w-screen-lg"
             "md:p-16"
             "md:flex-row"
             "md:justify-center"
             "lg:max-w-screen-2xl"
             "lg:p-20"
             "xl:gap-6"
             "xl:justify-center"]}
    [:div
     {:class ["mx-6"
              "my-6"]}
     [:a
      {:href "#"}
      [:img
       {:src (str constants/assets-url "img/shtanglitza_logo_w.svg")
        :class ["w-auto"
                "h-12"
                "mb-6"]}]]
     [:div
      {:class ["flex"
               "flex-col"]}
      constants/footer-links]]

    [:div
     {:class ["flex"
              "flex-col"
              "lg:flex-row"]}
     [:div
      {:class ["mx-6"
               "my-6"]}
      [:ul
       [:p
        {:class ["font-bold"
                 "text-indigo-400"
                 "tracking-widest"
                 "mb-2"]}
        "Shortcuts"]
       (navbar-menu/make-footer-menu navbar-menu/content-names)]]
     [:div
      {:class ["mx-6"
               "my-6"]}
      [:ul
       [:p
        {:class ["font-bold"
                 "text-indigo-400"
                 "tracking-widest"
                 "mb-2"]}
        "Expertise"]

       (for [link [(-> ui-cards/expertise-card-data :OntologyDaM :sec-name)
                   (-> ui-cards/expertise-card-data :DataIaH :sec-name)
                   (-> ui-cards/expertise-card-data :KnowledgeGCaV :sec-name)
                   (-> ui-cards/expertise-card-data :DataAaI :sec-name)
                   (-> ui-cards/expertise-card-data :SemanticDQaR :sec-name)
                   (-> ui-cards/expertise-card-data :DataSaC :sec-name)
                   (-> ui-cards/expertise-card-data :CustomBAD :sec-name)
                   (-> ui-cards/expertise-card-data :PersonalizedTaS :sec-name)]]

         [:li {:key link}
          [:a
           {:href (constants/href-maker link)
            :class ["font-light"
                    "text-sm"
                    "ease-in-out"
                    "duration-700"
                    "hover:text-indigo-200"]}
           constants/fSlash link]])]]]

    [:div
     {:class ["flex" "flex-col" "lg:flex-row"]}
     [:div {:class ["mx-6" "my-6" "max-w-[350px]" "min-h-[200px]" "flex" "flex-col" "justify-center" "items-center" "text-slate-300/70" "text-[14px]" "rounded-xl"]}
      [:img
       {:src (str constants/assets-url "img/iso_27001.svg")
        :class ["w-full" "h-auto"]}]
      [:span {:class "ml-2 my-2"}
       [:a {:href (str constants/assets-url "files/certificates/Shtanglitza sert 27k_02102025111313.pdf")
            :class ["text-teal-500" "hover:text-teal-600" "whitespace-nowrap" "hover:no-underline" "tracking-wider"]
            :target "_blank"}
        "Click here"]
       " or scan the QR code above to download PDF certificate."]]]
    ]

   [:div
    {:class ["w-full"
             "h-full" 
             "flex"
             "flex-row"
             "m-0"     
             "py-14 "
             "justify-center"
             "align-middle"]}
    [:p
     {:class ["text-white"
              "text-sm"
              "font-light"
              "tracking-widest"]}
     "All rights reserved (c) " (.getFullYear (js/Date.)) " Shtangltza.ai"]]])