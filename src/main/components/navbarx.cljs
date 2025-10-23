;(ns main.components.navbarx
;  (:require
;   [applied-science.js-interop :as j]
;   [reagent.core :as r]
;   [main.components.icons :as icons]
;   [clojure.string :as string]
;   [main.constants :as constants]))
;
;
;; Navbar-menu Utility functions
;
;(def active-index (r/atom 0)) ; Use an atom to store the index of the active link
;
;(def menu-open? (r/atom false))
;
;(def show-bg? (r/atom false))
;
;(defn add-classes [element & class-names]
;  (let [el (.getElementById js/document element)]
;    (when el
;      (doseq [class-name class-names]
;        (.add (.-classList el) class-name)))))
;
;(defn remove-classes [element & class-names]
;  (let [el (.getElementById js/document element)]
;    (when el
;      (doseq [class-name class-names]
;        (.remove (.-classList el) class-name)))))
;
;(defn toggle-menu []
;  (swap! menu-open? not))
;
;(def content-names ["Home" "About" "Capabilities" "Expertise" "Security"])
;
;(defn- make-menu
;  "Creates menu. is-footer? indicates the use of a list inside footer element
;   and in that way apply different conditions ...."
;  [cnt-names is-footer?]
;  (let [is-small? (< (.-innerWidth js/window) 769)]
;    (doall
;     (for [[i link] (map-indexed vector cnt-names)]
;       (let [href (str "#" (clojure.string/lower-case link))]
;         [:li {:key i}
;          [:a
;           (cond-> {:href href
;                    :class (if is-footer?
;                             constants/menu-css-footer
;                             (str constants/menu-css-navbar " " (when (= i @active-index) "active")))}
;             is-small? (merge {:on-click toggle-menu}))
;           (when is-footer? constants/listDots)
;           link]])))))
;
;(defn make-regular-menu [cnt-names]
;  (make-menu cnt-names false)
;  )
;
;(defn make-footer-menu [cnt-names]
;  (make-menu cnt-names true))
;
;(defn nav-scroll []
;  (j/call js/document :addEventListener "click"
;          (fn [event]
;            (let [clicked-toggle-button? (j/call (j/get event :target) :closest "#toggle-menu-button")]
;              (when (and @menu-open?
;                         (not clicked-toggle-button?))
;                (toggle-menu)))))
;
;  (letfn [(handle-scroll []
;            (if (>= (.-pageYOffset js/window) 100) ; Check if scrolled 100px or more
;              (do (println "Setting show-bg? to true") (reset! show-bg? true))
;              (do (println "Setting show-bg? to false") (reset! show-bg? false))))]
;    (js/window.addEventListener "scroll" handle-scroll) ; Add scroll listener
;    (handle-scroll))) ; Check initial scroll position on mount
;
;
; (defn active-link-on-scroll []
;   (let [links (array-seq (.querySelectorAll js/document ".nav-link"))] ; Get the links as a sequence
;     (js/window.addEventListener "scroll"
;      (fn []
;        (let [scroll-y (.-pageYOffset js/window)
;              new-index (->> links
;                             (map-indexed vector) ; Pair each link with its index
;                             (filter #(let [href (j/call (second %) :getAttribute "href")
;                                            target (j/call js/document :querySelector href)]
;                                        (and target
;                                             (<= (j/get target :offsetTop) scroll-y)
;                                             (> (+ (j/get target :offsetTop) (j/get target :offsetHeight)) scroll-y))))
;                             ffirst)] ; Get the index of the first active link
;          (reset! active-index new-index))))))
;
;; Defining navbar-menu component
;
;(defn navbar []
;  [:nav
;   {:id "my-navbar"
;    :class ["z-50"
;            "fixed"
;            "top-0"
;            "left-0"
;            "text-white"
;            "w-full"
;            "h-auto"
;            "transition-colors"
;            "duration-300"
;            (when @show-bg? "bg-white/95 ")]}
;   [:div
;    {:class ["container"
;             "flex"
;             "items-center"
;             "justify-between"
;             "mx-auto"
;             "px-6"
;             "max-w-screen-md"
;             "md:max-w-screen-lg"
;             "md:px-8"
;             "lg:max-w-screen-2xl"
;             "lg:px-20"
;             "transition-all"
;             "duration-500"
;             "ease-in-out"
;             (if @show-bg? "py-3" "py-6")]}
;    [:a
;     {:href constants/website-url
;      :class ["font-bold"
;              "text-lg"
;              "space-x-3"
;              "rtl:space-x-reverse"]}
;     [:img
;      {:id "S_logo"
;       :src (str constants/assets-url "img/shtanglitza_logo_d.svg")
;       :class ["h-8"
;               "my-1"
;               "self-center"
;               "text-2xl"
;               "font-semibold"
;               "whitespace-nowrap"
;               "mix-blend-color-darken"]}]]
;    [:ul
;     {:id "lg-navbar"
;      :class ["hidden"
;              "sm:hidden"
;              "md:grid"
;              "grid-flow-col"
;              "auto-cols-max"
;              "gap-5"
;              "text-custom-darkest-violet"
;              "items-center"
;              "text-lg"]}
;
;     (make-regular-menu content-names)
;
;     [:div
;      {:class (into ["group"
;                     "flex"
;                     "flex-row"
;                     "inline"
;                     "space-x-4"
;                     "py-1"
;                     "px-2"
;                     "bg-indigo-500/80"
;                     "rounded-md"]
;                    (when @show-bg? ["shadow-md"
;                                     "shadow-indigo-500/20"]))}
;      constants/contact-links]]
;
;    [:button {:id "toggle-menu-button"
;              :on-click toggle-menu
;              :class ["z-50"
;                      "inline-flex"
;                      "items-center"
;                      "p-2"
;                      "text-white"
;                      "md:hidden"
;                      "hover: bg-transparent w-fit"
;                      (str "menu-icon" (when  @menu-open? " openly"))]
;              :type "button"}
;
;    ;; ... (Hamburger icon transform) ...
;
;     (if (= @menu-open? true)
;       (icons/close-menu)
;       (icons/hamburg-menu))
;     (if @menu-open?
;       (do
;         (remove-classes "small-menu-list" "close")
;         (add-classes "small-menu-list" "open"))
;       (do
;         (remove-classes "small-menu-list" "open")
;         (add-classes "small-menu-list" "close")))]
;
;   ;; Navigation links
;
;    [:div
;     {:id "small-menu-list"
;      :class ["fixed"
;              "top-0"
;              "righ-0"
;              "left-0"
;              "flex"
;              "flex-col"
;              "justify-start"
;              "items-start"
;              "w-screen"
;              "h-screen"
;              "small-menu"
;              "close"
;              "backdrop-blur-xl"
;              "bg-white/75"]}
;
;     [:ul
;      {:id "small-navbar"
;       :class ["text-custom-darkest-violet"
;               "space-y-5"
;               "text-2xl"
;               "pt-32"
;               "pl-12"
;               "tracking-widest"
;               "w-fit"
;               "h-fit"]}
;      [:div
;       {:class "mb-10"}
;       [:a
;        {:class ["flex-auto"
;                 "justify-start"]
;         :href constants/website-url}
;        [:img
;         {:src (str constants/assets-url "img/f_icn.svg")
;          :class ["h-16"
;                  "my-1"
;                  "w-auto"]}]]]
;      (make-regular-menu content-names)
;
;      [:div
;       {:class ["group"
;                "flex"
;                "flex-row"
;                "inline"
;                "w-fit"
;                "space-x-4"
;                "translate-y-4"
;                "py-1"
;                "px-2"
;                "bg-indigo-500/80"
;                "shadow-md"
;                "shadow-indigo-500/30"
;                "rounded-md"]}
;       constants/contact-links]]]]])
;
;
(ns main.components.navbarx
  (:require
    [applied-science.js-interop :as j]
    [reagent.core :as r]
    [main.components.icons :as icons]
    [clojure.string :as string]
    [main.constants :as constants]
    [reitit.frontend.easy :as rfe]
    [main.router :as router]))  ;; Keep this import for route detection

;; States -------
(def active-index (r/atom 0))
(def menu-open? (r/atom false))
(def show-bg? (r/atom false))

(def content-names ["Home" "About" "Capabilities" "Expertise" "Security"])

;; Utility Functions ----------
(defn add-classes [element & class-names]
  (let [el (.getElementById js/document element)]
    (when el
      (doseq [class-name class-names]
        (.add (.-classList el) class-name)))))

(defn remove-classes [element & class-names]
  (let [el (.getElementById js/document element)]
    (when el
      (doseq [class-name class-names]
        (.remove (.-classList el) class-name)))))

(defn toggle-menu []
  (swap! menu-open? not))

;; SIMPLE Router scrolling helpers - RESTORED --------
(defn on-landing? []
  ;; Simple check - if we're on home route
  (= (-> @router/current-route :data :name) :home))

(defn scroll-to! [id]
  (js/console.log "📍 NAVBAR: Scrolling to:" id)
  (when-let [el (.getElementById js/document id)]
    (.scrollIntoView el #js {:behavior "smooth" :block "start"})))

(defn nav-click! [section-id {:keys [close-mobile?]}]
  (when close-mobile? (toggle-menu))

  (if (on-landing?)
    ;; On landing page - just scroll to section
    (do
      (js/console.log "📍 NAVBAR: On landing, scrolling to:" section-id)
      (scroll-to! section-id))
    ;; Not on landing page - go to home page first, then scroll
    (do
      (js/console.log "📍 NAVBAR: Not on landing, navigating to home first")
      (rfe/push-state :home)
      ;; Wait for page to load then scroll
      (js/setTimeout #(scroll-to! section-id) 300))))

;; Menu creation - KEEP IT SIMPLE
(defn- make-menu
  "Creates menu. is-footer? indicates the use of a list inside footer element"
  [cnt-names is-footer?]
  (let [is-small? (< (.-innerWidth js/window) 769)]
    (doall
      (for [[i link] (map-indexed vector cnt-names)]
        (let [section-id (-> link string/lower-case)
              href (str "#" section-id)]
          [:li {:key i}
           [:a
            {:href href
             :class (if is-footer?
                      constants/menu-css-footer
                      (str constants/menu-css-navbar " nav-link " (when (= i @active-index) "active")))
             :on-click (fn [e]
                         (.preventDefault e)
                         (nav-click! section-id {:close-mobile? (and is-small? @menu-open?)}))}
            (when is-footer? constants/listDots)
            link]])))))

(defn make-regular-menu [cnt-names]
  (make-menu cnt-names false))

(defn make-footer-menu [cnt-names]
  (make-menu cnt-names true))

;; Scroll behavior - KEEP IT SIMPLE
(defn nav-scroll []
  (j/call js/document :addEventListener "click"
          (fn [event]
            (let [clicked-toggle-button? (j/call (j/get event :target) :closest "#toggle-menu-button")]
              (when (and @menu-open?
                         (not clicked-toggle-button?))
                (toggle-menu)))))

  (letfn [(handle-scroll []
            (if (>= (.-pageYOffset js/window) 50)
              (do (reset! show-bg? true))
              (do (reset! show-bg? false))))]
    (js/window.addEventListener "scroll" handle-scroll)
    (handle-scroll)))

(defn active-link-on-scroll []
  (let [links (array-seq (.querySelectorAll js/document ".nav-link"))]
    (js/window.addEventListener "scroll"
                                (fn []
                                  (let [scroll-y (.-pageYOffset js/window)
                                        new-index (->> links
                                                       (map-indexed vector)
                                                       (filter #(let [href (j/call (second %) :getAttribute "href")
                                                                      target (j/call js/document :querySelector href)]
                                                                  (and target
                                                                       (<= (j/get target :offsetTop) scroll-y)
                                                                       (> (+ (j/get target :offsetTop) (j/get target :offsetHeight)) scroll-y))))
                                                       ffirst)]
                                    (reset! active-index new-index))))))

;; Navbar component - UNCHANGED from your working version
(defn navbar []
  [:nav
   {:id "my-navbar"
    :class ["z-50" "fixed" "top-0" "left-0" "text-white" "w-full" "h-auto"
            "transition-colors" "duration-300" (when @show-bg? "bg-white/95 ")]}
   [:div
    {:class ["container" "flex" "items-center" "justify-between" "mx-auto"
             "px-6" "max-w-screen-md" "md:max-w-screen-lg" "md:px-8"
             "lg:max-w-screen-2xl" "lg:px-20" "transition-all" "duration-500"
             "ease-in-out" (if @show-bg? "py-3" "py-6")]}

    ;; Logo
    [:a
     {:href constants/website-url
      :class ["font-bold" "text-lg" "space-x-3" "rtl:space-x-reverse"]}
     [:img
      {:id "S_logo"
       :src (str constants/assets-url "img/shtanglitza_logo_d.svg")
       :class ["h-8" "my-1" "self-center" "text-2xl" "font-semibold"
               "whitespace-nowrap" "mix-blend-color-darken"]}]]

    ;; Desktop menu
    [:ul
     {:id "lg-navbar"
      :class ["hidden" "sm:hidden" "md:grid" "grid-flow-col" "auto-cols-max"
              "gap-5" "text-custom-darkest-violet" "items-center" "text-lg"]}
     (make-regular-menu content-names)
     [:div
      {:class (into ["group" "flex" "flex-row" "inline" "space-x-4" "py-1" "px-2"
                     "bg-indigo-500/80" "rounded-md"]
                    (when @show-bg? ["shadow-md" "shadow-indigo-500/20"]))}
      constants/contact-links]]

    ;; Mobile menu button
    [:button {:id "toggle-menu-button"
              :on-click toggle-menu
              :class ["z-50" "inline-flex" "items-center" "p-2" "text-white"
                      "md:hidden" "hover:bg-transparent" "w-fit"
                      (str "menu-icon" (when @menu-open? " openly"))]
              :type "button"}
     (if @menu-open?
       (icons/close-menu)
       (icons/hamburg-menu))
     (if @menu-open?
       (do
         (remove-classes "small-menu-list" "close")
         (add-classes "small-menu-list" "open"))
       (do
         (remove-classes "small-menu-list" "open")
         (add-classes "small-menu-list" "close")))]

    ;; Mobile menu
    [:div
     {:id "small-menu-list"
      :class ["fixed" "top-0" "right-0" "left-0" "flex" "flex-col"
              "justify-start" "items-start" "w-screen" "h-screen"
              "small-menu" "close" "backdrop-blur-xl" "bg-white/75"]}
     [:ul
      {:id "small-navbar"
       :class ["text-custom-darkest-violet" "space-y-5" "text-2xl"
               "pt-32" "pl-12" "tracking-widest" "w-fit" "h-fit"]}
      [:div
       {:class "mb-10"}
       [:a
        {:class ["flex-auto" "justify-start"]
         :href constants/website-url}
        [:img
         {:src (str constants/assets-url "img/f_icn.svg")
          :class ["h-16" "my-1" "w-auto"]}]]]
      (make-regular-menu content-names)
      [:div
       {:class ["group" "flex" "flex-row" "inline" "w-fit" "space-x-4"
                "translate-y-4" "py-1" "px-2" "bg-indigo-500/80"
                "shadow-md" "shadow-indigo-500/30" "rounded-md"]}
       constants/contact-links]]]]])