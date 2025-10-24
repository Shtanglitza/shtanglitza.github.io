(ns main.pages.security-page
  (:require
    [reagent.core :as r]
    [main.constants :as constants]
    [reitit.frontend.easy :as rfe]))

(def open-section (r/atom nil))


(defn toggle-section [section-id]
  (swap! open-section
         (fn [current-open]
           (if (= current-open section-id)
             nil
             section-id))))

(defn is-section-open? [section-id]
  (= @open-section section-id))


(defn scroll-to-element [id]
  (when-let [element (.getElementById js/document id)]
    (let [element-top (.getBoundingClientRect element)
          offset-top (.-top element-top)
          scroll-top (+ (.-pageYOffset js/window) offset-top)
          offset (if (= id "top232") 0 280)]
      (js/console.log offset scroll-top offset-top element-top)
      (.scrollTo js/window 0 (- scroll-top offset)))))

(defn handle-nav-click [section-id]
  (js/console.log section-id)
  (toggle-section section-id)
  ;;prevent double scroll
  (let [new-hash (str "#" section-id)]
    (if (.-replaceState js/history)
      (.replaceState js/history nil nil new-hash)
      (set! (.-hash js/location) new-hash)))

  (js/setTimeout (fn [] (scroll-to-element section-id)) 300))

(defn sidebar-item [section]
  (let [section-id (:id section)
        is-open? (r/track! #(is-section-open? section-id))]
    [:li {:key section-id}
     [:button
      {:on-click #(handle-nav-click section-id)
       :class ["w-full" "text-left" "text-sm"  "px-3" "py-0.5" "rounded" "text-[#6366F1]" "hover:text-indigo-900" "transition-colors"
               (when @is-open? "text-indigo-900 font-bold")]}
      (:title section)]]))
;;new sidebar version with fixed position and scroll opacity fade in-out transition
(defn sidebar []
  (let [scroll-position (r/atom 1)
        handle-scroll (fn []
                        (let [scroll-top (.-scrollY js/window)
                              doc-height (.-scrollHeight (.-documentElement js/document))
                              win-height (.-innerHeight js/window)
                              from-bottom (+ scroll-top win-height)
                              scroll-percent (/ from-bottom doc-height)
                              fade-start 0.88
                              opacity (if (> scroll-percent fade-start)
                                        (let [progress (/ (- scroll-percent fade-start) (- 1 fade-start))]
                                          (max 0 (Math/pow (- 1 progress) 3))) ; Exponential fade
                                        1)]
                          (reset! scroll-position opacity)))]

    (r/create-class
      {:component-did-mount
       (fn []
         (.addEventListener js/window "scroll" handle-scroll)
         (handle-scroll))

       :component-will-unmount
       (fn []
         (.removeEventListener js/window "scroll" handle-scroll))

       :reagent-render
       (fn []
         [:div {:class ["fixed" "top-0" "w-fit" "max-w-[255px]" "bg-transparent" "hidden" "xl:block" "overflow-y-auto" "ms-12" "h-full" "mt-20" "me-8" "self-start" "z-10" ]
                :style {:opacity @scroll-position
                        :transition "opacity 0.3s ease-in-out"}}
          [:h3 {:class ["text-lg" "font-bold" "text-gray-900" "mb-4" "mt-12" "ms-3" "border-b" "pb-2"]} "Section Overview"]
          [:ul {:class ["space-y-1"]}
           (for [section constants/security-sections]
             ^{:key (:id section)} [sidebar-item section])]])})))


(defn accordion-section [section]
  (let [section-id (:id section)
        is-open?   (is-section-open? section-id)
        base-sec   [
        "scroll-mt-[120px]"
        "mb-0"
        "border-[#8284F4]"
        "rounded-lg"
        "overflow-hidden"
                    "transition-all" "duration-700" "ease-in-out"]
        base-btn   ["w-full" "text-left" "p-6" "bg-transparent" "hover:bg-indigo-50"
                    "transition-colors" "duration-300" "ease-in-out" "border-b-2"
                    "flex" "justify-between" "items-center"]]
    [:section {:id section-id
               :class (into base-sec
                            (when is-open? ["border-blue-300" "border-gray-200"]))}
     [:button
      {:on-click #(toggle-section section-id)
       :class (into base-btn
                    (when is-open? ["bg-blue-50" "text-[#6366F1]"]))}
      [:h2 {:class (into ["text-xl" "font-bold" "text-gray-900" "mr-2"]
                         (when is-open? ["text-[#6366F1]"]))}
       (:title section)]
      [:img {:src (str constants/assets-url "img/chevron.svg")
             :alt "chevron icon"
             :class ["w-3" "h-3" "text-gray-300" "transform" "transition-transform" "duration-500" "ease-in-out"
                     (if is-open? "rotate-180" "rotate-0")]}]]

     [:div {:class ["overflow-hidden"
                    (if is-open?
                      "transition-all duration-300 ease-in-out max-h-[2000px]"
                      "transition-none max-h-0")]}
      [:div {:class ["p-6" "bg-white" "border-t" "border-gray-100"
                     (if is-open?
                       "transition-opacity duration-300 ease-in-out opacity-100"
                       "transition-none opacity-0")]}
       (let [c (:content section)]
         [:div {:class ["text-gray-700" "leading-relaxed" "text-md"
                        "[&>ul]:list-disc" "[&>ul]:pl-6" "[&>ul>li]:mb-1"]}
          (cond

            (vector? c) c

            (seq? c) (into [:ul] (map (fn [s] [:li s]) c))

            :else [:p c])])]]]))


;; Main page component
(defn Page []
  (r/create-class
    {:component-did-mount
     (fn []
       (let [hash (.-hash js/location)]
         (when (and (not (empty? hash)) (not= hash "#"))
           (let [section-id (subs hash 1)]
             (reset! open-section section-id)
             ;(js/setTimeout #(scroll-to-element section-id) 100)
             ))))

     :component-will-unmount
     (fn []
       (reset! open-section nil))
     :component-did-update
     (fn [this old-argv]
       (let [hash (.-hash js/location)]
         (when (and (not (empty? hash)) (not= hash "#"))
           (let [section-id (subs hash 1)]
             (when (not= section-id @open-section)
               (reset! open-section section-id))))))

     :reagent-render
     (fn []
       (let [bg-url (str constants/assets-url "img/security_bck.webp")]
       [:main {:class [
       ;"scroll-mt-[280px]"
       "w-full"
       "max-w-[1536px]"
       "mx-auto"
       "min-h-screen"
       "bg-[#FEFEFF]"
       "pb-24"
       "px-6"]}
        [sidebar]
        [:div {:id "top232" :class ["mx-auto"  "relative"
                                    "flex" "flex-row"]}

         [:div {:class ["xl:ml-[25%]"]}
          [:div {:class [ "mx-auto" "px-6" "py-16"]}

           [:section {:class ["mb-16" "mt-12" "relative" "overflow-hidden" "bg-center" "bg-cover" "bg-no-repeat" "min-h-[420px]" "rounded-3xl" "shadow-sm" "px-8" "pt-16" "pb-8" "animate-subtle-move"]
                      :style {:backgroundImage (str "url('" bg-url "')")} }
            [:div {:class ["absolute inset-0" "bg-[linear-gradient(to_bottom_right,_#1D1B48_0%,_#726AF0_60%,_#726AF000_100%)]" "backdrop-blur-[2px]" "mix-blend-multiply" "opacity-[90%]" "z-1"]}]
            [:div {:class ["absolute inset-0"
                           "bg-[linear-gradient(to_bottom_right,_#1A1944_0%,_#1A1944E6_40%,_#1A194400_100%)]"
                           "backdrop-blur-[0px]"
                           "opacity-100"
                           "z-2"]}]
            [:div {:class ["flex" "flex-col" "items-start" "w-fit"]}
             [:h6 {:class ["relative" "text-[#A9F5C8E6]" "text-xl"]} "Security"]
             [:h1 {:class ["relative" "text-4xl" "md:text-6xl" "font-bold" "text-white" "mb-6" "drop-shadow-sm"]}
              "How We Do It?"]
             ]


            [:p {:class ["relative" "text-xl" "md:text-2xl" "text-white" "leading-relaxed" "max-w-3xl" "ps-0" "drop-shadow-sm" "font-light"]}
             "Comprehensive security controls and policies based on ISO 27001:2022 standards to ensure the highest level of data protection and compliance."]

            [:div {:class ["mt-8" "flex" "sm:flex-row" "flex-col" "gap-4" "justify-center" "align-center" "text-center"]}
             [:div {:class ["p-4"
                            "relative"
                            "flex-1"
                            ;"lg:w-[40%]"
                            ;"xs:w-[50%]"
                            "h-full"
                            "items-center"
                            "rounded-lg"
                            "bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(255,255,255,0.3))]"
                            "backdrop-blur-md"
                            "border"
                            "border-white/30"
                            "shadow-sm"]}
              [:div {:class ["text-2xl" "font-bold" "text-[#1E1F63]"]} (count constants/security-sections)]
              [:div {:class ["text-sm" "text-[#1E1F63]/80"]} "Security Items"]]

             [:div {:class ["p-4"
                            "relative"
                            "flex-1"
                            "h-full"
                            "items-center"
                            ;"lg:w-[40%]"
                            ;"xs:w-[50%]"
                            "rounded-lg"
                            "border"
                            "border-white/30"
                            "shadow-sm"
                            "backdrop-blur-md"
                            "bg-[linear-gradient(to_bottom_right,_#A9F5C8E6_25%,_#A9F5C899_60%,_rgba(255,255,255,0.5)_100%)]"]}
              [:div {:class ["text-2xl" "font-bold" "text-[#166534]"]} "ISO 27001"]
              [:div {:class ["text-sm" "text-[#166534]"]} "Certified"]]

             ]]

           [:div {:class ["space-y-0"]}
            (for [section constants/security-sections]
              ^{:key (:id section)} [accordion-section section])
            ]

           [:div {:class ["mt-16" "pt-8" "border-t" "border-gray-200" "flex" "flex-col" "sm:flex-row" "justify-between" "items-center"]}
            [:button
             {:on-click #(do (reset! open-section nil)
                             (handle-nav-click "top232"))
              :class    ["px-5" "py-2.5" "rounded-lg" "text-indigo-500" "font-medium" "hover:text-indigo-700" "transition-colors" "duration-150"]}
             "Scroll to Top"]
            [:button
             {:on-click #(rfe/push-state :home)
              :class    ["px-5" "py-2.5" "rounded-lg" "text-indigo-500" "font-medium" "hover:text-indigo-700" "transition-colors" "duration-150"]}
             "Back to Homepage"]]]]
         ]

        ]))}))