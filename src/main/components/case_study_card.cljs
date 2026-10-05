(ns main.components.case-study-card
  (:require
    [reitit.frontend.easy :as rfe]
    ["lucide-react" :refer [ChevronRight Zap]]))

;; Highlight chip ("10–50× faster") - used on cards (small) and in the case study hero
(defn highlight-chip [text extra-classes & [{:keys [small?]}]]
  [:span {:class (into ["inline-flex" "items-center" "rounded-full" "whitespace-nowrap"
                        "border" "border-emerald-200/40" "bg-emerald-50/90"
                        "text-green-800" "font-medium" "backdrop-blur-[1px]"]
                       (concat (if small?
                                 ["gap-1" "px-2.5" "py-1" "text-xs"]
                                 ["gap-2" "px-4" "py-2" "text-base"])
                               extra-classes))}
   [:> Zap {:size (if small? 12 16) :fill "currentColor"}]
   text])

;; Case study card - used on the /case-studies index page and the landing section
;; Key points are the first solution labels, so every card has the same structure.
(defn case-study-card [{:keys [slug number title challenge highlight solution-points]}]
  [:a {:href  (rfe/href :case-study {:slug slug})
       ;; Soft neumorphic card: corner glow + white fill (padding-box) over a white -> light primary
       ;; gradient that only shows through the transparent 1px border (border-box).
       ;; On hover the border-box layer becomes solid primary.
       :class ["group" "flex" "flex-col" "h-full" "p-6" "rounded-2xl"
               "border" "border-transparent"
               "[background:radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_45%)_padding-box,radial-gradient(circle_at_top_left,#F1F2F8,transparent_45%)_padding-box,linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(135deg,#ffffff_0%,#D9DBFB_100%)_border-box]"
               "hover:[background:radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_45%)_padding-box,radial-gradient(circle_at_top_left,#F1F2F8,transparent_45%)_padding-box,linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(#8284F4,#8284F4)_border-box]"
               "shadow-[6px_6px_16px_rgba(99,102,241,0.08),_-6px_-6px_16px_rgba(255,255,255,0.9)]"
               "hover:shadow-[8px_8px_22px_rgba(99,102,241,0.16),_-6px_-6px_16px_rgba(255,255,255,0.9)]"
               "transition-all" "duration-300"]}
   [:div {:class ["flex" "items-center" "justify-between" "gap-3" "min-h-[26px]"]}
    [:span {:class ["text-xs" "uppercase" "tracking-wider" "text-[#6366F1]" "font-medium"]}
     (str "Case Study " number)]
    (when highlight
      [highlight-chip highlight [] {:small? true}])]
   [:h3 {:class ["mt-4" "text-lg" "font-bold" "text-gray-900" "leading-snug"]} title]
   [:p {:class ["mt-3" "text-sm" "text-gray-600" "leading-relaxed" "line-clamp-2"]} challenge]
   [:ul {:class ["mt-5" "flex" "flex-wrap" "gap-2"]}
    (for [{:keys [label]} (take 3 solution-points)]
      ^{:key label}
      [:li {:class ["px-2.5" "py-1" "rounded-md" "bg-gray-100" "text-xs" "text-gray-700"]} label])]
   [:span {:class ["mt-auto" "pt-6" "inline-flex" "items-center" "gap-1" "text-sm" "font-medium" "text-indigo-500" "group-hover:text-indigo-700" "transition-colors"]}
    "Read case study" [:> ChevronRight {:size 16}]]])
