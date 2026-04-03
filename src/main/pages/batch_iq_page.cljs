(ns main.pages.batch-iq-page
  (:require
    [reagent.core :as r]
    [main.constants :as constants]
    [reitit.frontend.easy :as rfe]
    ["lucide-react" :refer [MessageCircleMore]]))


(def show-video? (r/atom true))
(add-watch show-video? :lock-scroll
           (fn [_ _ _ open?]
             (let [style (if open? "hidden" "")]
               (set! (.. js/document -body -style -overflow) style)
               (set! (.. js/document -documentElement -style -overflow) style))))

(defn video-modal []
  (let [handle-esc (fn [e] (when (= (.-key e) "Escape") (reset! show-video? false)))]
    (r/create-class
      {:component-did-mount
       (fn [_]
         (.addEventListener js/document "keydown" handle-esc)
         (set! (.. js/document -body -style -overflow) "hidden"))
       :component-will-unmount
       (fn [_]
         (.removeEventListener js/document "keydown" handle-esc)
         (set! (.. js/document -body -style -overflow) ""))
       :reagent-render
       (fn []
         (when @show-video?
           [:div {:class    ["fixed" "inset-0" "z-[999]" "flex" "flex-col" "items-center" "justify-center"
                             "bg-black/30" "backdrop-blur-xs"
                             "w-screen" "h-screen" "overflow-hidden"
                             "animate-[fadeIn_0.4s_ease-in-out]" "transition-all duration-500 ease-in"]
                  :on-click #(reset! show-video? false)}
            [:span {:class ["text-cyan-200/80" "text-sm" "tracking-wider" "animate-pulse" "mb-6"]}
             "Hover over the speaker icon and unmute the video player to enjoy the full experience."]
            ;; Skip text
            [:div {:class ["absolute" "bottom-8" "text-white/30" "text-sm" "tracking-wider"]}
             "Press ESC or click anywhere to skip"]
            ;; Video container
            [:div {:class    ["relative" "w-full" "max-w-5xl" "mx-4" "aspect-video" "rounded-2xl"
                              "overflow-hidden"
                              "overflow-hidden" "max-h-[calc(100vh-180px)]"
                              "shadow-[0_0_150px_rgba(82,83,209,0.4)]"
                              "ring-1" "ring-white/10"]
                   :on-click (fn [e] (.stopPropagation e))}

             [:button {:class    ["absolute" "top-3" "right-3" "z-[1000]"
                                  "flex" "items-center" "gap-2"
                                  "px-3" "py-1.5" "rounded-full"
                                  "bg-black/60" "backdrop-blur-sm"
                                  "text-cyan-200/70" "hover:text-cyan-200" "hover:bg-black/80"
                                  "transition-all" "duration-300" "cursor-pointer"]
                       :on-click #(reset! show-video? false)}
              [:span {:class ["text-sm" "tracking-wider" "uppercase" "font-light"]} "Close"]
              [:svg {:xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 24 24"
                     :fill  "none" :stroke "currentColor" :stroke-width "2"
                     :class ["w-5" "h-5"]}
               [:path {:d "M6 18L18 6M6 6l12 12"}]]]
             [:iframe {:src             "https://www.youtube.com/embed/4QZvxypw038?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1"
                       :class           ["w-full" "h-full"]
                       :frameBorder     "0"
                       :allow           "autoplay; encrypted-media; picture-in-picture; fullscreen"
                       :allowFullScreen true}]]]))})))
(defn lets-talk-button []
  [:div {:class ["relative" "rounded-full" "p-[5px]"
                 "bg-[#1A1838]"
                 "shadow-[inset_3px_3px_8px_rgba(0,0,0,0.7),_inset_-3px_-3px_8px_rgba(60,55,110,0.15)]"]}
   [:span {:class ["absolute" "inset-0" "rounded-full" "pointer-events-none"
                   "border" "border-white/[0.15]"]}]
   [:a {:href constants/email-address
        :class ["relative" "inline-flex" "items-center" "justify-center" "gap-2"
                "px-10" "py-3.5" "rounded-full"
                "bg-[linear-gradient(135deg,_#5253D1,_#6C5CE7)]"
                "hover:bg-[linear-gradient(135deg,_#6361E0,_#7B6CF0)]"
                "text-white" "font-semibold" "text-lg" "tracking-wide"
                "shadow-[0_0_20px_rgba(82,83,209,0.4),_0_0_60px_rgba(82,83,209,0.15)]"
                "hover:shadow-[0_0_30px_rgba(82,83,209,0.6),_0_0_80px_rgba(82,83,209,0.25)]"
                "transition-all" "duration-500"]}
    [:> MessageCircleMore {:size 20 :stroke-width 1.5 :class "opacity-70"}]
    "Let\u2019s Talk"]])

(defn play-button []
  [:div {:class ["group" "relative" "inline-flex" "rounded-full" "p-[2px]" "overflow-hidden"]}
   ;; Animated gradient border
   [:span {:class ["absolute" "inset-0" "rounded-full" "animated-border"]}]
   ;; Button
   [:button {:on-click #(reset! show-video? true)
             :class    ["relative" "inline-flex" "items-center" "gap-3"
                        "px-6" "py-3" "rounded-full" "overflow-hidden"
                        "bg-[linear-gradient(to_right,_#121722,_#232B4A)]"
                        "shadow-[0_0_20px_rgba(82,83,209,0.3)]"
                        "hover:shadow-[0_0_30px_rgba(82,83,209,0.5)]"
                        "transition-all" "duration-500" "cursor-pointer"]}
    [:span {:class ["absolute" "left-0" "top-0" "bottom-0" "w-16"
                    "bg-[radial-gradient(circle_at_-20%_50%,_#D8C2FF,_transparent_50%)]"
                    "mix-blend-screen" "opacity-40" "group-hover:opacity-80"
                    "transition-opacity" "duration-500" "pointer-events-none"]}]
    [:span {:class ["absolute" "right-0" "top-0" "bottom-0" "w-16"
                    "bg-[radial-gradient(circle_at_120%_50%,_#20FFFB,_transparent_50%)]"
                    "mix-blend-screen" "opacity-40" "group-hover:opacity-80"
                    "transition-opacity" "duration-500" "pointer-events-none"]}]
    [:span {:class ["relative" "z-10" "flex" "items-center" "justify-center"
                    "w-10" "h-10" "rounded-full"
                    "bg-black/30" "group-hover:bg-black/50"
                    "transition-colors" "duration-300"]}
     [:svg {:xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 24 24"
            :fill  "currentColor" :class ["w-5" "h-5" "text-[#77F7E8]" "ml-0.5"]}
      [:path {:d "M8 5.14v14l11-7-11-7z"}]]]
    [:span {:class ["relative" "z-10" "text-white" "font-semibold" "text-sm" "tracking-wide"]}
     "Watch Demo"]]])


(def stat-cards-data
  [{:number "~20%"
    :desc   "Of knowledge worker time spent searching for information - higher in regulated, multi-system environments"
    :source "McKinsey Global Institute"}
   {:number "40%"
    :desc   "Of inspection-based FDA warning letters cited inadequate written procedures"
    :source "21 CFR 211.100(a), FY2023 - Greenleaf Health analysis"}
   {:number "0"
    :desc   "Semantic layers connecting procedural knowledge across QMS, LIMS, and ELN"
    :source "As of 2026 - Integration layers exist for data, not for procedural reasoning"}])

(defn stat-card [{:keys [number desc source]}]
  [:div {:class ["group" "relative" "flex-1" "rounded-3xl" "overflow-hidden"
                 "bg-[#1A1F32]" "cursor-pointer"
                 "border" "border-white/[0.08]"
                 "shadow-[8px_8px_20px_rgba(0,0,0,0.5),_-8px_-8px_20px_rgba(50,45,90,0.25)]"
                 "hover:shadow-[10px_10px_25px_rgba(0,0,0,0.6),_-10px_-10px_25px_rgba(50,45,90,0.3)]"
                 "transition-all" "duration-500"]}
   ;; Left glow
   [:span {:class ["absolute" "left-0" "inset-y-0" "w-1/2"
                   "bg-[radial-gradient(ellipse_at_0%_50%,_#9F8DE2,_transparent_70%)]"
                   "mix-blend-screen" "opacity-[0.12]" "group-hover:opacity-[0.35]"
                   "transition-opacity" "duration-700" "pointer-events-none"]}]


   ;; Right glow
   [:span {:class ["absolute" "right-0" "inset-y-0" "w-1/2"
                   "bg-[radial-gradient(ellipse_at_100%_50%,_#72EBDE,_transparent_70%)]"
                   "mix-blend-screen" "opacity-[0.12]" "group-hover:opacity-[0.35]"
                   "transition-opacity" "duration-700" "pointer-events-none"]}]
   ;; Edge glossy — top
   [:span {:class ["absolute" "inset-x-0" "top-0" "h-[1px]"
                   "bg-[linear-gradient(to_right,_rgba(159,141,226,0.6),_rgba(255,255,255,0.25)_50%,_rgba(114,235,222,0.6))]"]}]
   ;; Edge glossy — left
   [:span {:class ["absolute" "left-0" "inset-y-0" "w-[1px]"
                   "bg-[linear-gradient(to_bottom,_rgba(159,141,226,0.5),_rgba(255,255,255,0.08)_50%,_rgba(114,235,222,0.3))]"]}]
   ;; Edge glossy — right
   [:span {:class ["absolute" "right-0" "inset-y-0" "w-[1px]"
                   "bg-[linear-gradient(to_bottom,_rgba(114,235,222,0.3),_rgba(255,255,255,0.08)_50%,_rgba(159,141,226,0.5))]"]}]
   ;; Edge glossy — bottom
   [:span {:class ["absolute" "inset-x-0" "bottom-0" "h-[1px]"
                   "bg-[linear-gradient(to_right,_rgba(159,141,226,0.3),_rgba(255,255,255,0.1)_50%,_rgba(114,235,222,0.3))]"]}]
   ;; Content
   [:div {:class ["relative" "z-10" "p-6"]}
    [:span {:class ["inline-block"]
            :style {:filter "drop-shadow(4px 4px 6px rgba(0,0,0,0.6)) drop-shadow(-4px -4px 6px rgba(80,70,140,0.25)) drop-shadow(0 0 18px rgba(114,235,222,0.25))"}}
     [:span {:class ["text-4xl" "md:text-5xl" "font-bold" "tracking-tight"
                     "bg-[linear-gradient(135deg,_#9F8DE2,_#72EBDE)]" "bg-clip-text" "text-transparent"]}
      number]]
    [:div {:class ["text-md" "text-white/60" "leading-relaxed" "mt-4 mb-6"]}
     desc]
    [:div {:class ["text-[13px]" "text-cyan-100/80" "mt-3" "bottom-0" "italic"]}
     source]]])

(defn Page []
  (r/create-class
    {:component-did-mount
     (fn [_]
       (.scrollTo js/window #js {:top 0 :behavior "instant"})
       (reset! show-video? true))
     :reagent-render
     (fn []
       [:main {:class ["w-full" "min-h-screen" "relative" "overflow-hidden"
                       "fade-in"]}

        ;; Gradient overlay 1 — purple blend (matches security section)
        [:div {:class ["fixed" "inset-0" "z-28"
                       "bg-[linear-gradient(to_bottom,_#241E3F_0%,_#241E3F_15%,_#1B1936_70%,_#1B1936_100%)]"
                       "backdrop-blur-[2px]" "mix-blend-multiply" "opacity-[90%]"]}]


        ;; Gradient overlay 2 — dark top band so navbar logo/text are visible
        [:div {:class ["fixed" "inset-0" "z-28"
                       "bg-[linear-gradient(to_bottom,_#0B0F17_0%,_#0B0F17_10%,_#0E1320_30%,_#0E1320_70%,_#0B0F17_100%)]"
                       "opacity-100"]}]

        ;; Abstract background — hero only

        [:div {:class ["absolute" "-top-20" "left-0" "w-full" "h-screen" "z-[29]"
                       "bg-cover" "bg-center" "bg-no-repeat"
                       "opacity-100"
                       "pointer-events-none"]
               :style {:backgroundImage (str "url('" constants/assets-url "img/abstract_bg.png')")}}]


        ;; Content
        [:div {:class ["relative" "z-30" "flex" "flex-col" "items-center"
                       "justify-center" "min-h-screen"
                       "px-6" "pt-20 pb-0"
                       "max-w-screen-md" "mx-auto"
                       "md:max-w-screen-lg" "md:px-16"
                       "lg:max-w-screen-2xl" "lg:px-20"]}

         [:div {:class ["max-w-screen-md" "mx-auto" "text-center"]}

          [:div {:class ["flex" "flex-col" "items-center" "w-full"]
                 :style {:min-height "calc(100vh - 80px)"}}

           ;; Center group — takes remaining space and centers content
           [:div {:class ["flex" "flex-col" "items-center" "justify-center" "flex-1" "relative" "z-10"]}
            [:div {:class ["mx-auto" "mb-10" "drop-shadow-sm" "flex" "flex-col" "items-center" "justify-center"]}
             [:span {:class ["w-full" "pt-3 pb-3" "text-center" "text-white/80" "text-sm" "tracking-wider" "uppercase" "font-light"]}
              "Early Pilot \u00B7 Proof of Concept"]
             [:img {:src   (str constants/assets-url "img/Logo.svg")
                    :class ["h-16" "md:h-20" "w-auto"]}]]

            [:h1 {:class ["text-3xl" "md:text-5xl" "lg:text-6xl" "font-black"
                          "text-white" "tracking-tight" "leading-none" "mb-8"
                          "drop-shadow-sm" "text-center"]}
             "The semantic memory layer for "
             [:span {:class ["bg-[linear-gradient(135deg,_#B49FFE,_#77F7E8)]" "bg-clip-text" "text-transparent"]}
              "agentic life science workflows"]]

           [:div {:class ["flex" "flex-col" "sm:flex-row" "items-center" "gap-4" "pt-8"]}
            [play-button]
            [lets-talk-button]]

            ]

           ;; Bottom pinned
           [:p {:class ["text-sm" "md:text-base" "text-white/70" "font-medium"
                        "tracking-wide" "text-center" "pb-16"]}
            "Your" [:strong " QMS, "], [:strong " LIMS "] [:strong ",  ELN "] "hold the data" [:span {:class ["text-[#7AF3EB]"]} " · BatchIQ makes it intelligible to AI agents"]]]

          ;; Section 2 ------S2

          ;; Platform UI
          [:div {:class ["relative" "w-full" "pt-32"]}

           ;; Glow behind image — between bg and image
           [:div {:class ["absolute" "top-[3%]" "left-[50%]" "-translate-x-1/2"
                          "w-[700px]" "h-[400px]"
                          "bg-[radial-gradient(ellipse_at_50%_50%,_rgba(115,104,234,0.2),_transparent_70%)]"
                          "pointer-events-none" "z-[5]"]}]

           ;; Image
           [:div {:class ["relative" "w-full" "z-[1]"]}
            [:img {:src (str constants/assets-url "img/disapearing_ui.png")
                   :class ["w-full" "h-auto"]}]
            [:div {:class ["absolute" "inset-x-0" "bottom-0" "h-auto" "z-20"
                           "bg-[linear-gradient(to_top,_#151A2C_0%,_#151A2C_25%,_rgba(21,26,44,0.8)_50%,_transparent_100%)]"
                           "pointer-events-none"]}]]

           ;; Text
           [:div {:class ["relative" "-mt-16" "sm:-mt-24" "md:-mt-40" "z-30" "max-w-2xl" "mx-auto" "text-center" "px-6"]}

            [:p {:class ["text-xl" "md:text-2xl" "text-white/80" "font-light"
                         "leading-relaxed" "mb-8"]}
             "Life science organizations have invested millions in systems of record LIMS, MES and ELN "
             "but none of them semantically connect procedural knowledge across silos."]
            [:img {:src (str constants/assets-url "img/Logo.svg")
                   :class ["h-13" "md:h-18" "w-auto" "inline-block" "align-baseline" "mr-1 pb-2"]}]
            [:p {:class ["text-xl" "md:text-2xl" "text-white/80" "font-light"
                         "leading-relaxed" "mb-8"]}

             " is the complementary semantic layer that transforms scattered SOPs into structured, "
             "traceable knowledge ready for agentic workflows and AI-native operations."]

            [:p {:class ["text-sm" "text-white/80" "font-light" "italic"
                         "max-w-xl" "mx-auto"]}
             "Distributed knowledge graph and vector index "
             "purpose-built for real-time procedural reasoning, not another wrapper around off-the-shelf LLM tooling."]]]

          ;; Stat cards
          [:div {:class ["flex" "flex-col" "items-center" "w-full" "pt-24 pb-4"]}
           [:div {:class ["flex" "flex-col" "sm:flex-row" "gap-6" "justify-center"
                          "mb-16" "max-w-3xl" "mx-auto"]}
            (for [{:keys [number] :as card} stat-cards-data]
              ^{:key number} [stat-card card])]]


          ;; Widgets showcase section
          [:div {:class ["relative" "w-full" "py-20"]}
           [:div {:class ["max-w-screen-md" "lg:max-w-screen-lg" "mx-auto" "px-6"
                          "flex" "flex-col" "items-center" "gap-12"]}

            ;; Text — top
            [:div {:class ["w-full" "max-w-2xl" "text-center" "flex" "flex-col" "gap-8"]}
             [:div
              [:span {:class ["text-cyan-200" "text-xs" "tracking-wider" "uppercase" "font-medium"]}
               "Tool panel"]
              [:h2 {:class ["text-3xl" "md:text-4xl" "text-white" "font-extralight" "tracking-wide" "mt-2"]}
               "Artifacts that work "
               [:span {:class ["font-bold"
                               "bg-[linear-gradient(135deg,_#9F8DE2,_#72EBDE)]" "bg-clip-text" "text-transparent"]}
                "for you"]]]

             [:p {:class ["text-white/50" "text-base" "md:text-lg" "leading-relaxed"]}
              "BatchIQ ships with three core reference views - "
              [:span {:class ["text-[#72EBDE]" "font-medium"]} "SOP Viewer"] ", "
              [:span {:class ["text-[#72EBDE]" "font-medium"]} "References"] ", and "
              [:span {:class ["text-[#72EBDE]" "font-medium"]} "Node-based document structure"]
              " - each offering a different layer of insight into the same procedural knowledge. "
              "From reading and navigating SOPs with full semantic context, to tracing cross-references across regulatory documents, "
              "to visualizing entire document architectures as interconnected graphs."]

             [:p {:class ["text-white/30" "text-sm" "leading-relaxed" "italic"]}
              "More widgets are in active development — including advanced graph exploration, "
              "compliance mapping, and agentic query interfaces. The tool panel grows with every release."]]

            ;; Image — bottom
            [:div {:class ["w-full"]}
             [:img {:src (str constants/assets-url "img/widgets.png")
                    :class ["w-full" "h-auto"]}]]]]

          ;; Graph layer chnage

          ;; Knowledge graph showcase section
          [:div {:class ["relative" "w-full" "py-20" "overflow-hidden"]}

           ;; Section text
           [:div {:class ["text-center" "mb-16" "max-w-2xl" "mx-auto" "relative"]}
            [:h2 {:class ["text-3xl" "md:text-4xl" "text-white" "font-extralight" "tracking-wide" "mb-4"]}
             "Not a database" [:br]
             [:span {:class ["font-bold"
                             "bg-[linear-gradient(135deg,_#9F8DE2,_#72EBDE)]" "bg-clip-text" "text-transparent"]}
              "A reasoning layer"]]
            [:p {:class ["text-white/40" "text-base" "md:text-lg" "font-light" "max-w-xl" "mx-auto"]}
             "Every relationship, every dependency, every procedural link — mapped, queryable, and traceable in real time."]
            ;; Glow between text and images
            [:div {:class ["absolute" "-bottom-48" "left-1/2" "-translate-x-1/2"
                           "w-[500px]" "h-48"
                           "bg-[radial-gradient(ellipse_at_50%_50%,_rgba(114,235,222,0.14),_transparent_70%)]"
                           "pointer-events-none"]}]]
           ;; Image composition — cinematic floating screenshots

           [:div {:class ["relative" "max-w-screen-md" "mx-auto" "h-[320px]" "sm:h-[380px]" "md:h-[420px]"]}

            ;; Left image
            [:div {:class ["absolute" "-left-8" "sm:-left-4" "md:left-0"
                           "top-12" "sm:top-16"
                           "w-[55%]" "sm:w-[50%]" "md:w-[45%]"
                           "z-10"]}
             [:img {:src (str constants/assets-url "img/kg_view_1.png")
                    :class ["w-full" "h-auto" "rounded-xl"
                            "shadow-[0_20px_60px_rgba(0,0,0,0.5),_0_0_30px_rgba(159,141,226,0.08)]"
                            "ring-1" "ring-white/[0.06]"]}]]

            ;; Center image
            [:div {:class ["absolute" "left-1/2" "-translate-x-1/2"
                           "top-0"
                           "w-[80%]" "sm:w-[72%]" "md:w-[68%]"
                           "z-30"]}
             [:img {:src (str constants/assets-url "img/kg_view_2.png")
                    :class ["w-full" "h-auto" "rounded-xl"
                            "shadow-[0_30px_80px_rgba(0,0,0,0.6),_0_0_40px_rgba(114,235,222,0.08)]"
                            "ring-1" "ring-white/[0.08]"]}]]

            ;; Right image
            [:div {:class ["absolute" "-right-8" "sm:-right-4" "md:right-0"
                           "top-12" "sm:top-16"
                           "w-[55%]" "sm:w-[50%]" "md:w-[45%]"
                           "z-20"]}
             [:img {:src (str constants/assets-url "img/kg_view_3.png")
                    :class ["w-full" "h-auto" "rounded-xl"
                            "shadow-[0_20px_60px_rgba(0,0,0,0.5),_0_0_30px_rgba(114,235,222,0.06)]"
                            "ring-1" "ring-white/[0.06]"]}]]]]




          ;; How it fits — architecture stack
          [:div {:class ["mt-16" "mb-8" "max-w-lg" "mx-auto"]}
           [:h2 {:class ["flex" "items-center" "justify-center" "flex-wrap" "gap-1"
                         "text-3xl" "md:text-4xl" "mb-12" "text-center"]}
            [:span {:class ["text-white" "font-extralight" "tracking-wide"]} "Where"]
            [:img {:src   (str constants/assets-url "img/Logo.svg")
                   :class ["h-10" "md:h-12" "w-auto" "inline-block"]}]
            [:span {:class ["text-white" "font-extralight" "tracking-wide"]} "sits in your stack ?"]]

           [:div {:class ["relative" "flex" "flex-col" "gap-3"]}

            ;; Connected container behind layers
            [:div {:class ["absolute" "inset-0" "-m-5" "rounded-3xl" "pointer-events-none" "z-0"
                           "bg-[#161B2A]"
                           "border" "border-white/[0.08]"
                           "shadow-[inset_6px_6px_18px_rgba(0,0,0,0.7),_inset_-6px_-6px_18px_rgba(40,35,80,0.1),_0_0_30px_rgba(159,141,226,0.04),_0_0_60px_rgba(114,235,222,0.03)]"]}
             [:span {:class ["absolute" "left-8" "top-16" "bottom-16" "w-[1px]"
                             "bg-[linear-gradient(to_bottom,_rgba(159,141,226,0.2),_rgba(114,235,222,0.15)_50%,_rgba(159,141,226,0.2))]"]}]
             [:span {:class ["absolute" "right-8" "top-16" "bottom-16" "w-[1px]"
                             "bg-[linear-gradient(to_bottom,_rgba(114,235,222,0.15),_rgba(159,141,226,0.2)_50%,_rgba(114,235,222,0.15))]"]}]]

            ;; Layer 3 — AI agents
            [:div {:class ["group" "relative" "z-10" "rounded-2xl" "overflow-hidden"
                           "bg-[#1A1F32]"
                           "border" "border-white/[0.06]"
                           "shadow-[6px_6px_16px_rgba(0,0,0,0.5),_-6px_-6px_16px_rgba(50,45,90,0.2)]"
                           "p-4"]}
             [:span {:class ["absolute" "left-0" "inset-y-0" "w-1/2"
                             "bg-[radial-gradient(ellipse_at_0%_50%,_#9F8DE2,_transparent_70%)]"
                             "mix-blend-screen" "opacity-[0.08]" "pointer-events-none"]}]
             [:span {:class ["absolute" "right-0" "inset-y-0" "w-1/2"
                             "bg-[radial-gradient(ellipse_at_100%_50%,_#72EBDE,_transparent_70%)]"
                             "mix-blend-screen" "opacity-[0.08]" "pointer-events-none"]}]
             [:span {:class ["absolute" "inset-x-0" "top-0" "h-[1px]"
                             "bg-[linear-gradient(to_right,_rgba(159,141,226,0.4),_rgba(255,255,255,0.15)_50%,_rgba(114,235,222,0.4))]"]}]
             [:span {:class ["absolute" "left-0" "inset-y-0" "w-[1px]"
                             "bg-[linear-gradient(to_bottom,_rgba(159,141,226,0.5),_rgba(255,255,255,0.08)_50%,_rgba(114,235,222,0.3))]"]}]
             [:span {:class ["absolute" "right-0" "inset-y-0" "w-[1px]"
                             "bg-[linear-gradient(to_bottom,_rgba(114,235,222,0.3),_rgba(255,255,255,0.08)_50%,_rgba(159,141,226,0.5))]"]}]
             [:span {:class ["absolute" "inset-x-0" "bottom-0" "h-[1px]"
                             "bg-[linear-gradient(to_right,_rgba(159,141,226,0.3),_rgba(255,255,255,0.1)_50%,_rgba(114,235,222,0.3))]"]}]
             [:div {:class ["relative" "z-10" "flex" "items-center" "gap-3"]}
              [:span {:class ["text-cyan-100" "text-xs" "font-mono"]} "03"]
              [:span {:class ["text-white/80" "text-sm"]} "AI Agents & Agentic Workflows"]]]

            [:div {:class ["flex" "justify-center" "my-3" "relative" "z-20"]}
             [:span {:class ["text-center" "text-cyan-200" "text-xs"]} "consumes \u2193"]]

            ;; Layer 2 — BatchIQ (highlighted)
            [:div {:class ["group" "relative" "z-10" "rounded-2xl" "p-[2px]" "overflow-hidden"
                           "animate-[pulse-glow_4s_ease-in-out_infinite]"]}
             ;; Animated gradient border
             [:span {:class ["absolute" "inset-0" "rounded-2xl" "animated-border"]}]
             ;; Card content
             [:div {:class ["relative" "rounded-[14px]" "overflow-hidden"
                            "bg-[#1A1F32]" "p-5"]}
              [:span {:class ["absolute" "left-0" "inset-y-0" "w-1/2"
                              "bg-[radial-gradient(ellipse_at_0%_50%,_#9F8DE2,_transparent_70%)]"
                              "mix-blend-screen" "opacity-[0.15]" "pointer-events-none"]}]
              [:span {:class ["absolute" "right-0" "inset-y-0" "w-1/2"
                              "bg-[radial-gradient(ellipse_at_100%_50%,_#72EBDE,_transparent_70%)]"
                              "mix-blend-screen" "opacity-[0.15]" "pointer-events-none"]}]
              [:div {:class ["relative" "z-10" "flex" "flex-col" "items-center" "text-center" "gap-1"]}
               [:span {:class ["text-cyan-100" "text-[10px]" "font-mono" "tracking-widest" "uppercase"]} "02"]
               [:span {:class ["text-[#72EBDE]" "text-lg" "font-bold" "tracking-wide"
                               "bg-[linear-gradient(135deg,_#9F8DE2,_#72EBDE)]" "bg-clip-text" "text-transparent"]}
                "BatchIQ"]
               [:span {:class ["text-white/50" "text-sm" "font-medium" "tracking-wide"]}
                "Semantic Memory Layer"]
               [:span {:class ["text-white/30" "text-[11px]" "mt-1" "leading-relaxed" "max-w-xs"]}
                "Transforms scattered SOPs into structured, traceable knowledge for agentic consumption"]]]]

            ;; Connector
            [:div {:class ["flex" "justify-center" "relative" "z-20" "my-3"]}
             [:span {:class ["text-cyan-200" "text-xs" "font-mono"]} "\u2191   reads from   \u2193"]]

            ;; Layer 1 — Systems of record
            [:div {:class ["group" "relative" "z-10" "rounded-2xl" "overflow-hidden"
                           "bg-[#1A1F32]"
                           "border" "border-white/[0.06]"
                           "shadow-[6px_6px_16px_rgba(0,0,0,0.5),_-6px_-6px_16px_rgba(50,45,90,0.2)]"
                           "p-4"]}
             [:span {:class ["absolute" "left-0" "inset-y-0" "w-1/2"
                             "bg-[radial-gradient(ellipse_at_0%_50%,_#9F8DE2,_transparent_70%)]"
                             "mix-blend-screen" "opacity-[0.08]" "pointer-events-none"]}]
             [:span {:class ["absolute" "right-0" "inset-y-0" "w-1/2"
                             "bg-[radial-gradient(ellipse_at_100%_50%,_#72EBDE,_transparent_70%)]"
                             "mix-blend-screen" "opacity-[0.08]" "pointer-events-none"]}]
             [:span {:class ["absolute" "inset-x-0" "top-0" "h-[1px]"
                             "bg-[linear-gradient(to_right,_rgba(159,141,226,0.4),_rgba(255,255,255,0.15)_50%,_rgba(114,235,222,0.4))]"]}]
             [:span {:class ["absolute" "left-0" "inset-y-0" "w-[1px]"
                             "bg-[linear-gradient(to_bottom,_rgba(159,141,226,0.5),_rgba(255,255,255,0.08)_50%,_rgba(114,235,222,0.3))]"]}]
             [:span {:class ["absolute" "right-0" "inset-y-0" "w-[1px]"
                             "bg-[linear-gradient(to_bottom,_rgba(114,235,222,0.3),_rgba(255,255,255,0.08)_50%,_rgba(159,141,226,0.5))]"]}]
             [:span {:class ["absolute" "inset-x-0" "bottom-0" "h-[1px]"
                             "bg-[linear-gradient(to_right,_rgba(159,141,226,0.3),_rgba(255,255,255,0.1)_50%,_rgba(114,235,222,0.3))]"]}]
             [:div {:class ["relative" "z-10" "flex" "items-center" "gap-3"]}
              [:span {:class ["text-cyan-100" "text-xs" "font-mono"]} "01"]
              [:span {:class ["text-white/80" "text-sm"]} "Your Systems of Record"]
              [:div {:class ["ml-auto" "flex" "gap-2"]}
               (for [label ["LIMS" "MES" "ELN" "QMS"]]
                 [:span {:key label
                         :class ["px-2" "py-0.5" "rounded-md" "text-[11px]"
                                 "bg-white/[0.05]" "text-white/30" "font-mono"]}
                  label])]]]]]
          [:div {:class ["text-4xl" "md:text-5xl" "text-white" "font-light" "py-12" "mt-24" "px-12" "text-center"]}
           "Ready to integrate" [:br]
           [:span {:class ["font-bold"
                           "bg-[linear-gradient(135deg,_#9F8DE2,_#72EBDE)]" "bg-clip-text" "text-transparent"]}
            "the intelligence layer "]
           "your stack is missing?"]
          ;; CTA buttons (matching site button patterns)
          [:div {:class ["flex" "flex-col" "sm:flex-row" "gap-6" "justify-center" "items-center"]}

           ;; Let's Talk — neumorphic inset container + glowing inner button
           [:div {:class ["relative" "rounded-full" "p-[5px]"
                          "bg-[#1A1838]"
                          "shadow-[inset_3px_3px_8px_rgba(0,0,0,0.7),_inset_-3px_-3px_8px_rgba(60,55,110,0.15)]"]}
            ;; Glossy border highlight
            [:span {:class ["absolute" "inset-0" "rounded-full" "pointer-events-none"
                            "border" "border-white/[0.15]"]}]
            [:a {:href  constants/email-address
                 :class ["relative" "inline-flex" "items-center" "justify-center" "gap-2"
                         "px-10" "py-3.5" "rounded-full"
                         "bg-[linear-gradient(135deg,_#5253D1,_#6C5CE7)]"
                         "hover:bg-[linear-gradient(135deg,_#6361E0,_#7B6CF0)]"
                         "text-white" "font-semibold" "text-lg" "tracking-wide"
                         "shadow-[0_0_20px_rgba(82,83,209,0.4),_0_0_60px_rgba(82,83,209,0.15)]"
                         "hover:shadow-[0_0_30px_rgba(82,83,209,0.6),_0_0_80px_rgba(82,83,209,0.25)]"
                         "transition-all" "duration-500"]}
             ;; Plus icon (Lucide style)
             [:> MessageCircleMore {:size 20 :stroke-width 1.5 :class "opacity-70"}]
             "Let's Talk"]]

           ;; Back to Homepage — outlined neumorphic
           [:div {:class ["relative" "rounded-full" "p-[5px]"
                          "bg-[#161B2A]"
                          "shadow-[inset_3px_3px_8px_rgba(0,0,0,0.7),_inset_-3px_-3px_8px_rgba(40,45,80,0.15)]"]}
            [:span {:class ["absolute" "inset-0" "rounded-full" "pointer-events-none"
                            "border" "border-white/[0.06]"]}]
            [:a {:href  (rfe/href :home)
                 :class ["relative" "inline-flex" "items-center" "justify-center"
                         "px-10" "py-3.5" "rounded-full"
                         "bg-transparent"
                         "border" "border-white/15"
                         "hover:border-white/25"
                         "text-white/60" "hover:text-white/80"
                         "font-light" "text-lg" "tracking-wide"
                         "transition-all" "duration-500"]}
             "Back to Homepage"]]]
          ;; Founder credibility

          [:div {:class ["relative" "mt-20" "pb-16" "pt-32" "overflow-hidden" "rounded-3xl"
                         "mx-auto" "w-full"]}

           ;; Content
           [:div {:class ["relative" "z-10" "flex" "flex-col" "items-center" "text-center" "px-8"]}
            [:img {:src   (str constants/assets-url "img/stanglitza_letter_logo.png")
                   :class ["h-10" "w-auto" "mb-8" "opacity-80" "brightness-125"]}]
            [:p {:class ["text-white/55" "text-base" "md:text-lg" "leading-relaxed" "max-w-xl"]}
             "Deep expertise in biomedical data engineering, "
             "semantic web standards, and production knowledge graph infrastructure."]
            [:div {:class ["mt-6" "h-[1px]" "w-24"
                           "bg-[linear-gradient(to_right,_#9F8DE2,_#72EBDE)]" "opacity-30"]}]
            [:p {:class ["mt-6" "text-xs" "tracking-wider" "text-white/50"]}
             "A product by "
             [:a {:href  constants/website-url
                  :class ["text-[#8681CE]/80" "hover:text-[#8681CE]/100"
                          "hover:underline" "transition-colors" "duration-300"]}
              "Shtanglitza.ai"]]]]

          ]]])}))
