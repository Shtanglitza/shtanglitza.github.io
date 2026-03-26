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

         ;; Logo
         [:img {:src (str constants/assets-url "img/batchiq_logo.svg")
                :alt "BatchIQ"
                :class ["h-14" "md:h-20" "mx-auto" "mb-10" "drop-shadow-sm"]}]

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
          "AI that turns SOPs into" [:br]
          [:span {:class ["text-[#77F7E8]"]} "operational intelligence."]]

         ;; Why now — regulatory hook (corrected: FDA draft 2025, EMA-FDA joint 2026)
         [:p {:class ["text-sm" "md:text-base" "text-[#77F7E8]/70" "font-medium"
                      "tracking-wide" "uppercase" "mb-6"]}
          "New FDA draft guidance and evolving EMA frameworks are raising the bar for validated quality processes"]

         ;; One-liner
         [:p {:class ["text-xl" "md:text-2xl" "text-white/55" "font-light"
                      "leading-relaxed" "max-w-2xl" "mx-auto" "mb-14"]}
          "Pharma runs on Standard Operating Procedures \u2014 but existing tools manage them as documents, "
          "not as executable knowledge. BatchIQ transforms static SOPs into structured, traceable workflows "
          "\u2014 designed to catch procedural gaps before they become deviations."]

         ;; Tech moat — one line, framed as defensibility
         [:p {:class ["text-sm" "text-white/60" "font-light" "italic"
                      "max-w-xl" "mx-auto" "mb-14"]}
          "A hybrid knowledge-graph and vector-index architecture serving as agentic memory \u2014 "
          "not a chatbot wrapper, but a purpose-built reasoning engine for procedural knowledge."]

         ;; Key numbers (glassmorphism cards matching site hero stat pattern)
         [:div {:class ["flex" "flex-col" "sm:flex-row" "gap-4" "justify-center"
                        "mb-16" "max-w-2xl" "mx-auto"]}

          ;; Stat 1 — FDA regulatory pain (corrected: count→percentage, proper violation name)
          [:div {:class ["flex-1" "p-4" "rounded-lg" "text-left"
                         "backdrop-blur-md" "border" "border-white/30" "shadow-sm"
                         "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(255,255,255,0.3))]"]}
           [:div {:class ["text-2xl" "md:text-3xl" "font-black" "text-[#1D1B48]" "mb-1"]}
            "40%"]
           [:div {:class ["text-xs" "text-[#1D1B48]/60"]}
            "of FDA warning letters cited inadequate written procedures"]
           [:div {:class ["text-[10px]" "text-[#1D1B48]/35" "mt-1" "italic"]}
            "21 CFR 211.100(a), FY2023 analysis"]]

          ;; Stat 2 — Market size (corrected: $2.98B projected by 2030, not current)
          [:div {:class ["flex-1" "p-4" "rounded-lg" "text-left"
                         "backdrop-blur-md" "border" "border-white/30" "shadow-sm"
                         "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(255,255,255,0.3))]"]}
           [:div {:class ["text-2xl" "md:text-3xl" "font-black" "text-[#1D1B48]" "mb-1"]}
            "$1.6B"]
           [:div {:class ["text-xs" "text-[#1D1B48]/60"]}
            "pharma QMS market today, projected to reach $3B by 2030"]
           [:div {:class ["text-[10px]" "text-[#1D1B48]/35" "mt-1" "italic"]}
            "MarketsandMarkets 2025"]]

          ;; Stat 3 — Competitive wedge (replaced redundant CAGR with differentiation)
          [:div {:class ["flex-1" "p-4" "rounded-lg" "text-left"
                         "backdrop-blur-md" "border" "border-white/30" "shadow-sm"
                         "bg-[linear-gradient(to_bottom_right,_#A9F5C8E6_25%,_#A9F5C899_60%,_rgba(255,255,255,0.5)_100%)]"]}
           [:div {:class ["text-2xl" "md:text-3xl" "font-black" "text-[#1D1B48]" "mb-1"]}
            "0"]
           [:div {:class ["text-xs" "text-[#1D1B48]/60"]}
            "tools that model SOPs as structured procedural knowledge graphs"]
           [:div {:class ["text-[10px]" "text-[#1D1B48]/35" "mt-1" "italic"]}
            "others check compliance \u2014 none model the procedures themselves"]]]

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
         [:div {:class ["mt-16" "mb-6" "p-5" "rounded-xl" "backdrop-blur-md"
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
