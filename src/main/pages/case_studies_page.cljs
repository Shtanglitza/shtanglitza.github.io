(ns main.pages.case-studies-page
  (:require
    [main.case-studies :as case-studies]
    [main.components.case-study-card :refer [case-study-card]]
    [main.components.page-hero :refer [page-hero]]
    [reitit.frontend.easy :as rfe]))

;; All case studies - /case-studies

(defn Page []
  [:main {:class ["w-full" "max-w-[1536px]" "mx-auto" "min-h-screen" "bg-[#FEFEFF]" "pb-24" "px-6"]}
   [:div {:class ["max-w-6xl" "mx-auto" "lg:px-6" "py-16"]}

    [page-hero {:label "Shtanglitza" :title "Case Studies"}]

    [:div {:class ["grid" "grid-cols-1" "md:grid-cols-2" "lg:grid-cols-3" "gap-6"]}
     (for [study (case-studies/newest-first)]
       ^{:key (:slug study)} [case-study-card study])]

    [:div {:class ["mt-16" "pt-8" "border-t" "border-gray-200" "flex" "justify-center"]}
     [:button
      {:on-click #(rfe/push-state :home)
       :class    ["px-5" "py-2.5" "rounded-lg" "text-indigo-500" "font-medium" "hover:text-indigo-700" "transition-colors" "duration-150"]}
      "Back to Homepage"]]]])
