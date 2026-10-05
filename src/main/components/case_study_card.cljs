(ns main.components.case-study-card
  (:require
    [reitit.frontend.easy :as rfe]
    ["lucide-react" :refer [ChevronRight]]))

;; Case study card - used on the /case-studies index page and the landing section

(defn case-study-card [{:keys [slug number title challenge highlight]}]
  [:a {:href  (rfe/href :case-study {:slug slug})
       :class ["group" "flex" "flex-col" "h-full" "p-6" "rounded-2xl" "bg-white"
               "border" "border-gray-200" "shadow-sm"
               "hover:shadow-md" "hover:border-[#8284F4]" "transition-all" "duration-300"]}
   [:span {:class ["text-xs" "uppercase" "tracking-wider" "text-[#6366F1]" "font-medium"]}
    (str "Case Study " number)]
   [:h3 {:class ["mt-2" "text-lg" "font-bold" "text-gray-900" "leading-snug"]} title]
   [:p {:class ["mt-3" "text-sm" "text-gray-600" "leading-relaxed" "line-clamp-3"]} challenge]
   (when highlight
     [:span {:class ["mt-4" "self-start" "px-3" "py-1" "rounded-lg" "text-sm" "font-bold" "text-[#166534]"
                     "bg-[linear-gradient(to_bottom_right,_#A9F5C8E6_25%,_#A9F5C899_60%,_rgba(255,255,255,0.5)_100%)]"]}
      highlight])
   [:span {:class ["mt-auto" "pt-6" "inline-flex" "items-center" "gap-1" "text-sm" "font-medium" "text-indigo-500" "group-hover:text-indigo-700" "transition-colors"]}
    "Read case study" [:> ChevronRight {:size 16}]]])
