(ns main.core
  (:require
   [reagent.dom :as rdom]
   [main.components.navbarx :as navbar-menu]
   [main.components.footer :as footer-section]
   [main.pages.landing-page :as landing-page]))
   

(defn main []
  [:main
   {:class ["w-full"
            "h-max"]}
   [landing-page/init-landing-page]
   ])

(defn web-page []
  [:div
   {:class ["flex"
            "flex-col" 
            "box-border"]}
   [navbar-menu/navbar]
   [main]
   [footer-section/footer]])

; All functions that need to be executed after DOM render are called here

(defn ^:dev/after-load start []
  (js/console.log "start") 
  (navbar-menu/nav-scroll) 
  (navbar-menu/active-link-on-scroll))
 
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
  (.log js/console "Loading    App")
  (set-vh!)
  (rdom/render [web-page] (js/document.getElementById "app"))
  (start))

(init)

