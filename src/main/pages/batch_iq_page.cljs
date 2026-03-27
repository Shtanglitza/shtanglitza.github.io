(ns main.pages.batch-iq-page
  (:require
   [reagent.core :as r]
   [main.constants :as constants]
   [reitit.frontend.easy :as rfe]))

;; ============================================================
;; Page Component — Single-screen product announcement
;; Styled to match the site's visual language (security page hero
;; pattern: bg image + dual gradient overlays + glassmorphism)
;; ============================================================

(defn Page []
  (r/create-class
   {:component-did-mount
    (fn [_]
      (.scrollTo js/window #js {:top 0 :behavior "instant"}))

    :reagent-render
    (fn []
      [:main {:class ["w-full" "min-h-screen" "relative" "overflow-hidden"
                      "fade-in"]}

       ;; ── Full-page background (matching site pattern: image + dual gradients) ──
       [:div {:class ["fixed" "inset-0" "z-0" "bg-center" "bg-cover"
                      "bg-no-repeat" "animate-subtle-move"]
              :style {:backgroundImage (str "url('" constants/assets-url "img/security_bck.webp')")}}]

       ;; Gradient overlay 1 — purple blend (matches security section)
       [:div {:class ["fixed" "inset-0" "z-1"
                      "bg-[linear-gradient(to_bottom,_#1D1B48_0%,_#1D1B48_15%,_#726AF0_70%,_#726AF000_100%)]"
                      "backdrop-blur-[2px]" "mix-blend-multiply" "opacity-[90%]"]}]

       ;; Gradient overlay 2 — dark top band so navbar logo/text are visible
       [:div {:class ["fixed" "inset-0" "z-2"
                      "bg-[linear-gradient(to_bottom,_#1A1944_0%,_#1A1944_10%,_#1A1944E6_40%,_#1A194480_70%,_#1A194400_100%)]"
                      "opacity-100"]}]

       ;; ── Content ──
       [:div {:class ["relative" "z-30" "flex" "flex-col" "items-center"
                      "justify-center" "min-h-screen"
                      "px-6" "py-20"
                      "max-w-screen-md" "mx-auto"
                      "md:max-w-screen-lg" "md:px-16"
                      "lg:max-w-screen-2xl" "lg:px-20"]}

        [:div {:class ["max-w-screen-md" "mx-auto" "text-center"]}

         ;; Logo (inline SVG matching pitch deck design)
         [:div {:class ["mx-auto" "mb-10" "drop-shadow-sm" "flex" "justify-center"]}
          [:svg {:xmlns "http://www.w3.org/2000/svg"
                 :viewBox "0 0 340 80"
                 :fill "none"
                 :class ["h-14" "md:h-20"]}
           [:defs
            [:linearGradient {:id "batchGrad" :x1 "0" :y1 "0" :x2 "1" :y2 "0"}
             [:stop {:offset "0%" :stop-color "#e0f0f8" :stop-opacity "0.7"}]
             [:stop {:offset "40%" :stop-color "#b8e8f0"}]
             [:stop {:offset "100%" :stop-color "#7dd8e8"}]]
            [:linearGradient {:id "iqGrad" :x1 "0" :y1 "0" :x2 "1" :y2 "1"}
             [:stop {:offset "0%" :stop-color "#5dcce0"}]
             [:stop {:offset "50%" :stop-color "#6b7de0"}]
             [:stop {:offset "100%" :stop-color "#5253D1"}]]]
           [:text {:x "0" :y "62" :font-family "Poppins, sans-serif"
                   :font-size "64" :font-weight "200" :fill "url(#batchGrad)"
                   :letter-spacing "-1"} "Batch"]
           [:text {:x "185" :y "62" :font-family "Poppins, sans-serif"
                   :font-size "64" :font-weight "700" :fill "url(#iqGrad)"
                   :letter-spacing "-1"} "IQ"]]]

         ;; Stage badge (glassmorphism matching site card pattern)
         [:div {:class ["inline-flex" "items-center" "gap-2" "px-5" "py-2" "mb-10"
                        "rounded-full" "backdrop-blur-md"
                        "border" "border-white/30"
                        "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_rgba(255,255,255,0.05))]"]}
          [:span {:class ["w-2" "h-2" "rounded-full" "bg-[#77F7E8]" "animate-pulse"]}]
          [:span {:class ["text-white/60" "text-sm" "tracking-wider" "uppercase" "font-light"]}
           "Early Pilot \u00B7 Proof of Concept"]]

         ;; Punchline
         [:h1 {:class ["text-4xl" "md:text-6xl" "lg:text-7xl" "font-black"
                       "text-white" "tracking-tight" "leading-tight" "mb-8"
                       "drop-shadow-sm"]}
          "The semantic memory layer" [:br]
          "for " [:span {:class ["text-[#77F7E8]"]} "agentic life science workflows."]]

         ;; Why now — regulatory hook (corrected: FDA draft 2025, EMA-FDA joint 2026)
         [:p {:class ["text-sm" "md:text-base" "text-[#77F7E8]/70" "font-medium"
                      "tracking-wide" "uppercase" "mb-6"]}
          "Your QMS, LIMS, and ELN hold the data \u2014 BatchIQ makes it intelligible to AI agents"]

         ;; One-liner
         [:p {:class ["text-xl" "md:text-2xl" "text-white/55" "font-light"
                      "leading-relaxed" "max-w-2xl" "mx-auto" "mb-14"]}
          "Life science organizations have invested millions in systems of record \u2014 LIMS, MES and ELN \u2014 "
          "but none of them semantically connect procedural knowledge across silos. "
          "BatchIQ is the complementary semantic layer that transforms scattered SOPs into structured, "
          "traceable knowledge \u2014 ready for agentic workflows and AI-native operations."]

         ;; Tech moat — one line, framed as defensibility
         [:p {:class ["text-sm" "text-white/60" "font-light" "italic"
                      "max-w-xl" "mx-auto" "mb-14"]}
          "Distributed knowledge graph and vector index "
          "purpose-built for real-time procedural reasoning, not another wrapper around off-the-shelf LLM tooling."]

         ;; Key numbers (glassmorphism cards matching site hero stat pattern)
         [:div {:class ["flex" "flex-col" "sm:flex-row" "gap-4" "justify-center"
                        "mb-16" "max-w-2xl" "mx-auto"]}

          ;; Stat 1 — The integration gap (McKinsey Global Institute, defensible)
          [:div {:class ["flex-1" "p-4" "rounded-lg" "text-left"
                         "backdrop-blur-md" "border" "border-white/30" "shadow-sm"
                         "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(255,255,255,0.3))]"]}
           [:div {:class ["text-2xl" "md:text-3xl" "font-black" "text-[#1D1B48]" "mb-1"]}
            "~20%"]
           [:div {:class ["text-xs" "text-[#1D1B48]/60"]}
            "of knowledge worker time spent searching for information \u2014 higher in regulated, multi-system environments"]
           [:div {:class ["text-[10px]" "text-[#1D1B48]/35" "mt-1" "italic"]}
            "McKinsey Global Institute"]]

          ;; Stat 2 — Regulatory pressure
          [:div {:class ["flex-1" "p-4" "rounded-lg" "text-left"
                         "backdrop-blur-md" "border" "border-white/30" "shadow-sm"
                         "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(255,255,255,0.3))]"]}
           [:div {:class ["text-2xl" "md:text-3xl" "font-black" "text-[#1D1B48]" "mb-1"]}
            "40%"]
           [:div {:class ["text-xs" "text-[#1D1B48]/60"]}
            "of inspection-based FDA warning letters cited inadequate written procedures"]
           [:div {:class ["text-[10px]" "text-[#1D1B48]/35" "mt-1" "italic"]}
            "21 CFR 211.100(a), FY2023 \u2014 Greenleaf Health analysis"]]

          ;; Stat 3 — Complementary positioning
          [:div {:class ["flex-1" "p-4" "rounded-lg" "text-left"
                         "backdrop-blur-md" "border" "border-white/30" "shadow-sm"
                         "bg-[linear-gradient(to_bottom_right,_#A9F5C8E6_25%,_#A9F5C899_60%,_rgba(255,255,255,0.5)_100%)]"]}
           [:div {:class ["text-2xl" "md:text-3xl" "font-black" "text-[#1D1B48]" "mb-1"]}
            "0"]
           [:div {:class ["text-xs" "text-[#1D1B48]/60"]}
            "semantic layers connecting procedural knowledge across QMS, LIMS, and ELN"]
           [:div {:class ["text-[10px]" "text-[#1D1B48]/35" "mt-1" "italic"]}
            "as of 2026 \u2014 integration layers exist for data, not for procedural reasoning"]]]

         ;; CTA buttons (matching site button patterns)
         [:div {:class ["flex" "flex-col" "sm:flex-row" "gap-4" "justify-center"]}
          [:a {:href constants/email-address
               :class ["inline-flex" "items-center" "justify-center"
                       "px-8" "py-4" "rounded-lg"
                       "bg-emerald-300/80" "hover:bg-emerald-300"
                       "text-green-800" "font-bold" "text-lg"
                       "backdrop-blur-sm"
                       "transition-all" "ease-in-out" "duration-700"
                       "hover:shadow-2xl" "hover:shadow-emerald-400"]}
           "Let\u2019s Talk"]

          [:a {:href (rfe/href :home)
               :class ["inline-flex" "items-center" "justify-center"
                       "px-8" "py-4" "rounded-lg"
                       "border-2" "border-white/20" "text-white" "font-bold" "text-lg"
                       "hover:bg-white/10"
                       "transition-all" "duration-300"]}
           "Back to Homepage"]]

         ;; Founder credibility
         ;; How it works — architecture positioning
         [:div {:class ["mt-16" "mb-8" "p-6" "rounded-xl" "backdrop-blur-md"
                        "border" "border-white/15" "max-w-lg" "mx-auto"
                        "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))]"]}
          [:p {:class ["text-[#77F7E8]/50" "text-xs" "tracking-wider" "uppercase" "font-medium" "mb-3"]}
           "How it fits"]
          [:div {:class ["flex" "flex-col" "gap-2" "text-sm" "text-white/50" "font-light"]}
           [:div {:class ["flex" "items-center" "gap-3"]}
            [:span {:class ["text-white/25"]} "\u2191"]
            [:span "AI agents & agentic workflows"]]
           [:div {:class ["flex" "items-center" "gap-3" "py-2" "px-3" "-mx-3" "rounded-lg"
                          "border" "border-[#77F7E8]/20" "bg-[#77F7E8]/5"]}
            [:span {:class ["text-[#77F7E8]/70" "font-semibold"]} "\u2192"]
            [:span {:class ["text-[#77F7E8]/80" "font-semibold"]} "BatchIQ \u2014 semantic memory layer"]]
           [:div {:class ["flex" "items-center" "gap-3"]}
            [:span {:class ["text-white/25"]} "\u2193"]
            [:span "LIMS \u00B7 MES \u00B7 ELN"]]]]

         ;; Founder credibility
         [:div {:class ["mb-6" "p-5" "rounded-xl" "backdrop-blur-md"
                        "border" "border-white/10" "max-w-lg" "mx-auto"
                        "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))]"]}
          [:p {:class ["text-white/50" "text-sm" "leading-relaxed"]}
           "Built by the "
           [:a {:href constants/website-url
                :class ["text-[#77F7E8]/60" "hover:text-[#77F7E8]/90"
                        "font-semibold"
                        "hover:underline" "transition-colors" "duration-300"]}
            "Shtanglitza.ai"]
           " team \u2014 deep expertise in biomedical data engineering, "
           "semantic web standards, and production knowledge graph infrastructure."]]

         ;; Powered by
         [:p {:class ["mt-6" "text-xs" "tracking-wider" "uppercase" "text-white/25"]}
          "A product by "
          [:a {:href constants/website-url
               :class ["text-[#77F7E8]/40" "hover:text-[#77F7E8]/70"
                       "hover:underline" "transition-colors" "duration-300"]}
           "Shtanglitza.ai"]]]]])}))
