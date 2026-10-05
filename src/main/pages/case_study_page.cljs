(ns main.pages.case-study-page
  (:require
    [main.constants :as constants]
    [main.case-studies :as case-studies]
    [main.pages.batch-iq-page :as batch-iq]
    [main.pages.not-found-page :as not-found]
    [reitit.frontend.easy :as rfe]
    ["lucide-react" :refer [ChevronLeft ChevronRight]]))

;; Single case study page - /case-studies/:slug
;; Layout follows the Security page: hero banner, then content blocks.

(defn hero [{:keys [number title highlight]}]
  (let [bg-url (str constants/assets-url "img/security_bck.webp")]
    [:section {:class ["mb-8" "mt-6" "relative" "overflow-hidden" "bg-center" "bg-cover" "bg-no-repeat" "min-h-[210px]" "rounded-2xl" "shadow-sm" "px-6" "pt-8" "pb-6" "animate-subtle-move"]
               :style {:backgroundImage (str "url('" bg-url "')")}}
     [:div {:class ["absolute inset-0" "bg-[linear-gradient(to_bottom_right,_#1D1B48_0%,_#726AF0_60%,_#726AF000_100%)]" "backdrop-blur-[2px]" "mix-blend-multiply" "opacity-[90%]"]}]
     [:div {:class ["absolute inset-0"
                    "bg-[linear-gradient(to_bottom_right,_#1A1944_0%,_#1A1944E6_40%,_#1A194400_100%)]"
                    "opacity-100"]}]
     [:h6 {:class ["relative" "text-[#A9F5C8E6]" "text-sm"]} (str "Case Study " number)]
     [:h1 {:class ["relative" "text-2xl" "md:text-3xl" "font-bold" "text-white" "mb-3" "drop-shadow-sm" "max-w-3xl"]}
      title]
     (when highlight
       [:div {:class ["relative" "mt-4" "inline-block" "p-2" "px-4" "rounded-lg" "border" "border-white/30" "shadow-sm" "backdrop-blur-md"
                      "bg-[linear-gradient(to_bottom_right,_#A9F5C8E6_25%,_#A9F5C899_60%,_rgba(255,255,255,0.5)_100%)]"]}
        [:div {:class ["text-lg" "font-bold" "text-[#166534]"]} highlight]])]))

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

           [:section {:class ["mt-8" "p-6" "rounded-lg" "bg-indigo-50" "border-l-4" "border-[#6366F1]"]}
            [:h2 {:class ["text-xl" "font-bold" "text-[#6366F1]" "mb-3"]} "Outcome"]
            [:p {:class ["text-gray-900"]} outcome]]]

          [:div {:class ["mt-16" "flex" "justify-center"]}
           [batch-iq/lets-talk-button]]

          [:div {:class ["mt-16" "pt-8" "border-t" "border-gray-200" "grid" "grid-cols-1" "sm:grid-cols-2" "gap-4"]}
           [neighbour-link prev-study :prev]
           [neighbour-link next-study :next]]

          [:div {:class ["mt-8" "flex" "justify-center"]}
           [:button
            {:on-click #(rfe/push-state :home)
             :class    ["px-5" "py-2.5" "rounded-lg" "text-indigo-500" "font-medium" "hover:text-indigo-700" "transition-colors" "duration-150"]}
            "Back to Homepage"]]]]))))
