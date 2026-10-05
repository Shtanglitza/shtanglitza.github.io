(ns main.pages.case-studies-page
  (:require
    [main.constants :as constants]
    [main.case-studies :as case-studies]
    [main.components.case-study-card :refer [case-study-card]]
    [reitit.frontend.easy :as rfe]))

;; All case studies - /case-studies

(defn hero []
  (let [bg-url (str constants/assets-url "img/security_bck.webp")]
    [:section {:class ["mb-8" "mt-6" "relative" "overflow-hidden" "bg-center" "bg-cover" "bg-no-repeat" "min-h-[210px]" "rounded-2xl" "shadow-sm" "px-6" "pt-8" "pb-6" "animate-subtle-move"]
               :style {:backgroundImage (str "url('" bg-url "')")}}
     [:div {:class ["absolute inset-0" "bg-[linear-gradient(to_bottom_right,_#1D1B48_0%,_#726AF0_60%,_#726AF000_100%)]" "backdrop-blur-[2px]" "mix-blend-multiply" "opacity-[90%]"]}]
     [:div {:class ["absolute inset-0"
                    "bg-[linear-gradient(to_bottom_right,_#1A1944_0%,_#1A1944E6_40%,_#1A194400_100%)]"
                    "opacity-100"]}]
     [:h6 {:class ["relative" "text-[#A9F5C8E6]" "text-sm"]} "Shtanglitza"]
     [:h1 {:class ["relative" "text-2xl" "md:text-3xl" "font-bold" "text-white" "mb-3" "drop-shadow-sm"]}
      "Case Studies"]]))

(defn Page []
  [:main {:class ["w-full" "max-w-[1536px]" "mx-auto" "min-h-screen" "bg-[#FEFEFF]" "pb-24" "px-6"]}
   [:div {:class ["max-w-6xl" "mx-auto" "lg:px-6" "py-16"]}

    [hero]

    [:div {:class ["grid" "grid-cols-1" "md:grid-cols-2" "lg:grid-cols-3" "gap-6"]}
     (for [study (case-studies/newest-first)]
       ^{:key (:slug study)} [case-study-card study])]

    [:div {:class ["mt-16" "pt-8" "border-t" "border-gray-200" "flex" "justify-center"]}
     [:button
      {:on-click #(rfe/push-state :home)
       :class    ["px-5" "py-2.5" "rounded-lg" "text-indigo-500" "font-medium" "hover:text-indigo-700" "transition-colors" "duration-150"]}
      "Back to Homepage"]]]])
