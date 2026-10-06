(ns main.pages.case-studies-page
  (:require
    [main.case-studies :as case-studies]
    [main.components.case-study-card :refer [case-study-card]]
    [main.components.page-hero :refer [page-hero]]
    [reitit.frontend.easy :as rfe]))

;; All case studies - /case-studies

(defn Page []
  ;; flex column + mt-auto on the last block keeps "Back to Homepage" at the bottom
  ;; of the screen when there are few cards; with many cards it simply follows them.
  [:main {:class ["w-full" "max-w-[1536px]" "mx-auto" "min-h-screen" "bg-[#FEFEFF]" "pb-24" "px-6" "flex" "flex-col"]}
   [:div {:class ["w-full" "max-w-6xl" "mx-auto" "lg:px-6" "pt-32" "pb-16" "flex" "flex-col" "flex-1"]}

    [page-hero {:label "Shtanglitza" :title "Case Studies"}]

    [:div {:class ["grid" "grid-cols-1" "md:grid-cols-2" "lg:grid-cols-3" "gap-6" "mb-16"]}
     (for [study (case-studies/newest-first)]
       ^{:key (:slug study)} [case-study-card study])]

    [:div {:class ["mt-auto" "pt-8" "border-t" "border-gray-200" "flex" "justify-center"]}
     [:button
      {:on-click #(rfe/push-state :home)
       :class    ["px-5" "py-2.5" "rounded-lg" "text-indigo-500" "font-medium" "hover:text-indigo-700" "transition-colors" "duration-150"]}
      "Back to Homepage"]]]])
