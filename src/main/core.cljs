(ns main.core
  (:require
   [reagent.dom :as rdom]
   [main.components.navbarx :as navbar-menu]
   [main.components.footer :as footer-section]
   ;[main.pages.landing-page :as landing-page]
   [main.router :as router]))
   

;(defn main []
;  [:main
;   {:class ["w-full"
;            "h-max"]}
;   [landing-page/init-landing-page]
;   ])

(defn main []
  [:main {:class ["flex-grow" "w-full"]}
   (let [match @router/current-route
         view  (-> match :data :view)]
     (if view
       [view]
       [:div {:class [
                     "flex"
                      "flex-row"
                     "items-center"
                     "justify-center"
                      "w-full"
                     "h-full"
                     "text-violet-500"
                      ]}
        "Loading..."]))])

(defn Root []
  [:div
   {:class ["flex"
            "flex-col"
            "min-h-screen"
            "box-border"
            ]}
   [navbar-menu/navbar]
   [main]
   [footer-section/footer]])

; All functions that need to be executed after DOM render are called here

(defn ^:dev/after-load start []
  (js/console.log "start")
  (navbar-menu/nav-scroll)
  (navbar-menu/active-link-on-scroll)

  ;; Handle initial page load with hash
  (let [hash (.-hash js/location)]
    (when (and (not (empty? hash)) (not= hash "#"))
      (js/console.log "🔄 Handling initial hash:" hash)
      (js/setTimeout
        #(when-let [el (.getElementById js/document (subs hash 1))]
           (.scrollIntoView el #js {:behavior "smooth" :block "start"}))
        500)))



  )
 
;Auto-height calculation
(defn set-vh! []
  (let [vh (* (.-innerHeight js/window) 0.01)]
    (.setProperty (.-style (.-documentElement js/document))
                  "--vh"
                  (str vh "px"))))

;; Add event listener for resize
(.addEventListener js/window "resize" set-vh!)

;; Call it once on load


(defn init []
  (.log js/console "Loading App")
  (set-vh!)
  (set! (.-scrollRestoration js/history) "manual")
  (router/start!)
  (rdom/render [Root] (js/document.getElementById "app"))
  (start))

(init)

