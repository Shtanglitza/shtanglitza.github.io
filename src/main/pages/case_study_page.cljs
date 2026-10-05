(ns main.pages.case-study-page
  (:require
    [main.constants :as constants]
    [main.case-studies :as case-studies]
    [main.pages.not-found-page :as not-found]
    [reitit.frontend.easy :as rfe]
    [main.components.case-study-card :refer [highlight-chip]]
    [main.components.callout :refer [callout]]
    [main.components.page-hero :refer [page-hero]]
    ["lucide-react" :refer [ChevronLeft ChevronRight MessageCircleMore]]))

;; Single case study page - /case-studies/:slug
;; Layout follows the Security page: hero banner, then content blocks.

(defn hero [{:keys [number title highlight]}]
  [page-hero {:label (str "Case Study " number) :title title}
   (when highlight
     [highlight-chip highlight ["relative" "mt-4"]])])

;; Same style as the BatchIQ "Let's Talk" button, without the dark outer ring
(defn lets-talk-button []
  [:a {:href  constants/email-address
       :class ["relative" "inline-flex" "items-center" "justify-center" "gap-2"
               "px-10" "py-3.5" "rounded-full"
               "bg-[linear-gradient(135deg,_#5253D1,_#6C5CE7)]"
               "hover:bg-[linear-gradient(135deg,_#6361E0,_#7B6CF0)]"
               "text-white" "font-semibold" "text-lg" "tracking-wide"
               "shadow-[0_0_20px_rgba(82,83,209,0.4),_0_0_60px_rgba(82,83,209,0.15)]"
               "hover:shadow-[0_0_30px_rgba(82,83,209,0.6),_0_0_80px_rgba(82,83,209,0.25)]"
               "transition-all" "duration-500"]}
   [:> MessageCircleMore {:size 20 :stroke-width 2 :class "opacity-100 subpixel-antialiased"}]
   "Let's Talk"])

(defn content-block [heading & body]
  (into [:section {:class ["py-6" "border-b" "border-gray-300"]}
         [:h2 {:class ["text-xl" "font-bold" "text-gray-900" "mb-3"]} heading]]
        body))

(defn solution-list [points]
  [:ul {:class ["list-disc" "pl-6" "space-y-2"]}
   (for [{:keys [label text]} points]
     ^{:key label}
     [:li [:strong {:class ["text-gray-900"]} label ":"] " " text])])

(defn neighbour-link [study direction]
  (if study
    [:a {:href  (rfe/href :case-study {:slug (:slug study)})
         :class ["flex" "flex-col" "gap-1" "px-5" "py-2.5" "rounded-lg" "text-indigo-500" "hover:text-indigo-700" "transition-colors" "duration-150"
                 (if (= direction :next) "sm:items-end sm:text-right" "sm:items-start")]}
     [:span {:class ["inline-flex" "items-center" "gap-1" "text-xs" "uppercase" "tracking-wider" "text-gray-500"]}
      (if (= direction :next)
        [:<> "Next case study" [:> ChevronRight {:size 14}]]
        [:<> [:> ChevronLeft {:size 14}] "Previous case study"])]
     [:span {:class ["font-medium"]} (str "Case Study " (:number study) ": " (:title study))]]
    [:div]))

(defn Page [match]
  (let [slug  (get-in match [:path-params :slug])
        study (case-studies/find-by-slug slug)]
    (if-not study
      [not-found/Page match]
      (let [{:keys [challenge solution-intro solution-points outcome]} study
            [prev-study next-study] (case-studies/neighbours slug)]
        [:main {:class ["w-full" "max-w-[1536px]" "mx-auto" "min-h-screen" "bg-[#FEFEFF]" "pb-24" "px-6"]}
         [:div {:class ["max-w-4xl" "mx-auto" "lg:px-6" "py-16"]}

          [hero study]

          [:div {:class ["text-gray-700" "leading-relaxed" "text-md"]}
           [content-block "Challenge"
            [:p challenge]]

           [content-block "Solution"
            (when solution-intro [:p {:class ["mb-4"]} solution-intro])
            [solution-list solution-points]]

           [callout "Outcome"
            [:p {:class ["text-gray-900"]} outcome]]]

          [:div {:class ["mt-16" "flex" "justify-center"]}
           [lets-talk-button]]

          [:div {:class ["mt-16" "pt-8" "border-t" "border-gray-200" "grid" "grid-cols-1" "sm:grid-cols-2" "gap-4"]}
           [neighbour-link prev-study :prev]
           [neighbour-link next-study :next]]

          [:div {:class ["mt-8" "flex" "justify-center"]}
           [:button
            {:on-click #(rfe/push-state :home)
             :class    ["px-5" "py-2.5" "rounded-lg" "text-indigo-500" "font-medium" "hover:text-indigo-700" "transition-colors" "duration-150"]}
            "Back to Homepage"]]]]))))
