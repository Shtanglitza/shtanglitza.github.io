(ns main.navbarx
  (:require
   [applied-science.js-interop :as j]
   [reagent.core :as r]
   [main.icons :as icons]
   [clojure.string :as string]
   [main.constants :as constants]))

(def menu-open? (r/atom false))

(def show-bg? (r/atom false))

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

(def content-names ["Home" "About" "Capabilities" "Expertise"])

(defn make-menu
  "Creates menu. is-footer? indicates the use of a list inside footer element
   and in that way apply different conditions ...."
  [cnt-names is-footer?]
  (let [is-small? (< (.-innerWidth js/window) 769)]
    (.log js/console "is-small? value is" is-small?) 
  (for [link cnt-names]
    (let [href (str "#" (clojure.string/lower-case link))]
      [:li {:key link}
       [:a
        (cond-> {:href href
                 :class (if is-footer?
                          constants/menu-css-footer
                          constants/menu-css-navbar)}
          is-small? (merge {:on-click toggle-menu})) 
        (when is-footer? constants/listDots)
        link]]))))

(defn navbar []
  (r/after-render
   (fn []
     (j/call js/document :addEventListener "click"
             (fn [event]
               (let [clicked-toggle-button? (j/call (j/get event :target) :closest "#toggle-menu-button")]
                 (when (and @menu-open?
                            (not clicked-toggle-button?))
                   (toggle-menu)))))

     (letfn [(handle-scroll []
               (if (>= (.-pageYOffset js/window) 100) ; Check if scrolled 50px or more
                 (do (println "Setting show-bg? to true") (reset! show-bg? true))
                 (do (println "Setting show-bg? to false") (reset! show-bg? false))))]
       (js/window.addEventListener "scroll" handle-scroll) ; Add scroll listener
       (handle-scroll) ; Check initial scroll position on mount
       #(js/window.removeEventListener "scroll" handle-scroll))))

  [:nav
   {:id "my-navbar"
    :class ["z-50 
             fixed 
             top-0 
             left-0 
             text-white 
             w-full 
             h-auto 
             transition-colors 
             duration-300"
            (when @show-bg? "bg-white/95 ")]}
   [:div
    {:class "container 
             flex 
             items-center
             justify-between
             mx-auto 
             px-6 
             py-6
             max-w-screen-md 
               md:max-w-screen-lg md:px-8
               lg:max-w-screen-2xl lg:px-20"}
    [:a
     {:href constants/website-url
      :class "font-bold
              text-lg 
              space-x-3
              rtl:space-x-reverse"}
     [:img
      {:id "S_logo"
       :src (str constants/assets-url "img/shtanglitza_logo_d.svg")
       :class "h-8
               my-1
               self-center
               text-2xl
               font-semibold
               whitespace-nowrap
               mix-blend-color-darken"}]]
    [:ul
     {:class "hidden 
              sm:hidden 
              md:grid grid-flow-col auto-cols-max gap-5 text-custom-darkest-violet items-center text-lg"}

     (make-menu content-names false)

     [:div
      {:class "group 
               flex 
               flex-row 
               inline 
               space-x-2 
               py-1 
               px-2
               bg-indigo-500/80
               rounded-md"}
      constants/contact-links
      ]]

    [:button {:id "toggle-menu-button"
              :on-click toggle-menu
              :class ["z-50 
                       inline-flex
                       items-center
                       p-2
                       text-white 
                         md:hidden 
                       hover: bg-transparent w-fit"
                      (str "menu-icon" (when  @menu-open? " openly"))]
              :type "button"}
    ;; ... (SVG icon for the button) ...
     (if (= @menu-open? true)
       (icons/close-menu)
       (icons/hamburg-menu))]
    
    (if @menu-open?
      (do
        (remove-classes "small-menu-list" "close")
        (add-classes "small-menu-list" "open"))
      (do
        (remove-classes "small-menu-list" "open")
        (add-classes "small-menu-list" "close")))

   ;; Navigation links 

    [:div
     {:id "small-menu-list"
      :class
      [(str "fixed 
             top-0 
             righ-0 
             left-0 
             flex 
             flex-col
             justify-start
             items-start
             w-screen 
             h-screen 
             small-menu
             close 
             backdrop-blur-xl
             bg-white/30")]}
     

     [:ul
      {:class "text-custom-darkest-violet
               space-y-5 
               text-2xl
               pt-32
               pl-12
               tracking-widest
               w-fit h-fit"}
      [:div
       {:class "mb-10"}
       [:a
        {:class "flex-auto
                 justify-start"
         :href constants/website-url}
        [:img
         {:src (str constants/assets-url "img/f_icn.svg")
          :class "h-16 
                  my-1 
                  w-auto"}]]]
      (make-menu content-names false)

      [:div
       {:class "group 
                flex 
                flex-row 
                inline 
                w-fit 
                space-x-2
                translate-y-4
                py-1 
                px-2 
                bg-indigo-500/80
                rounded-md"} 
       constants/contact-links
       ]]]]])
