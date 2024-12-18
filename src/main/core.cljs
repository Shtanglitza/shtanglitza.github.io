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
 

(defn init []
  (.log js/console "Loading App")
  (rdom/render [web-page] (js/document.getElementById "app"))
  (start))

(init)

