(ns main.components.footer
  (:require
    [main.components.navbarx :as navbar-menu]
    [main.constants :as constants]
    [main.components.ui-cards :as ui-cards]
    [reitit.frontend.easy :as rfe]
    [clojure.string :as string]))

(defn footer []
  [:footer
   {:class ["w-full"
            "pt-36"
            "bg-gradient-to-r"
            (if (navbar-menu/on-batch-iq?) "bg-[#0D0E18]" "bg-linear-to-r")
            (when-not (navbar-menu/on-batch-iq?) "from-slate-950")
            (when-not (navbar-menu/on-batch-iq?) "to-indigo-950")
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
       {:src   (str constants/assets-url "img/shtanglitza_logo_w.svg")
        :class ["w-auto"
                "h-12"
                "mb-6"]}]]
     [:div
      {:class ["flex"
               "flex-col"]}
      constants/footer-links]]
    [:div
     {:class ["flex" "flex-col" "lg:flex-row" "lg:order-last"]}
     [:div {:class ["mx-6" "my-6" "max-w-[350px]" "min-h-[200px]" "flex" "flex-col" "justify-center" "items-center" "text-slate-300/70" "text-[14px]" "rounded-xl"]}
      [:img
       {:src   (str constants/assets-url "img/iso_27001.svg")
        :class ["w-full" "h-auto"]}]
      [:span {:class "ml-2 my-2"}
       [:a {:href   (str constants/assets-url "files/certificates/Shtanglitza_sert_27k_02102025111313.pdf")
            :class  ["text-teal-500" "hover:text-teal-600" "whitespace-nowrap" "hover:no-underline" "tracking-wider"]
            :target "_blank"}
        "Click here"]
       " or scan the QR code above to download PDF certificate."]]]

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
       (navbar-menu/make-footer-menu navbar-menu/content-names)
       [:li
        [:div {:class ["group" "inline-flex" "relative" "rounded-lg" "p-[2px]" "mt-3" "overflow-hidden"
                       "bg-[linear-gradient(to_right,_rgba(216,194,255,0.15),_rgba(255,255,255,0.06)_50%,_rgba(32,255,251,0.04))]"
                       "hover:bg-white/70"
                       "shadow-[-4px_0_10px_rgba(216,194,255,0.1),_4px_0_10px_rgba(32,255,251,0.1)]"
                       "hover:shadow-[-6px_0_15px_rgba(216,194,255,0.3),_6px_0_15px_rgba(32,255,251,0.2)]"
                       "transition-all" "duration-500"]}
         [:span {:class ["absolute" "-left-2" "top-0" "bottom-0" "w-10" "rounded-l-lg"
                         "bg-[radial-gradient(circle_at_left,_rgba(216,194,255,0.4),_transparent_70%)]"
                         "mix-blend-screen"
                         "opacity-30" "group-hover:opacity-70"
                         "transition-opacity" "duration-500"
                         "pointer-events-none"]}]
         [:span {:class ["absolute" "-right-2" "top-0" "bottom-0" "w-10" "rounded-r-lg"
                         "bg-[radial-gradient(circle_at_right,_rgba(32,255,251,0.4),_transparent_70%)]"
                         "mix-blend-screen"
                         "opacity-30" "group-hover:opacity-70"
                         "transition-opacity" "duration-500"
                         "pointer-events-none"]}]
         [:a {:href  (rfe/href :batch-iq)
              :class ["relative" "inline-flex" "items-center" "gap-2"
                      "px-4" "py-1.5"
                      "rounded-[6px]" "overflow-hidden"
                      "bg-[#E1DEFD]"
                      "text-sm" "font-semibold" "text-[#1D1B48]"]}
          [:span {:class ["absolute" "left-0" "-top-2" "-bottom-2" "w-16"
                          "group-hover:w-20"
                          "bg-[radial-gradient(circle_at_-20%_50%,_#D8C2FF,_transparent_50%)]"
                          "mix-blend-screen"
                          "opacity-30" "group-hover:opacity-70"
                          "transition-all" "duration-500"
                          "pointer-events-none"]}]
          [:span {:class ["absolute" "right-0" "-top-2" "-bottom-2" "w-16"
                          "group-hover:w-20"
                          "bg-[radial-gradient(circle_at_120%_50%,_#20FFFB,_transparent_50%)]"
                          "mix-blend-screen"
                          "opacity-30" "group-hover:opacity-70"
                          "transition-all" "duration-500"
                          "pointer-events-none"]}]
          [:span {:class ["absolute" "inset-x-0" "top-0" "h-[1px]"
                          "bg-[linear-gradient(to_right,_rgba(216,194,255,0.3),_rgba(255,255,255,0.15)_50%,_rgba(32,255,251,0.3))]"]}]
          [:span {:class ["absolute" "inset-x-0" "bottom-0" "h-[1px]"
                          "bg-[linear-gradient(to_right,_rgba(216,194,255,0.15),_rgba(255,255,255,0.08)_50%,_rgba(32,255,251,0.15))]"]}]
          [:span {:class ["relative" "z-10" "inline-flex" "items-center" "gap-2"]}
           [:span {:class ["w-1.5" "h-1.5" "rounded-full" "bg-[#5F50CC]"
                           "shadow-[0_0_6px_2px_rgba(95,80,204,0.5)]"
                           "animate-pulse"]}]
           "BatchIQ"
           [:span {:class ["text-[#5253D1]" "text-xs" "font-light" "tracking-wider" "uppercase"]} "Early Pilot"]]]]
        ]]]
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

         (let [href (constants/href-maker link)
               section-id (subs href 1)]
           [:li {:key link}
            [:a
             {:href     href
              :class    ["font-light" "text-sm" "ease-in-out" "duration-700" "hover:text-indigo-200"]
              :on-click (fn [e]
                          (.preventDefault e)
                          (navbar-menu/nav-click! section-id {:close-mobile? false}))}
             constants/fSlash link]]))]]]]

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