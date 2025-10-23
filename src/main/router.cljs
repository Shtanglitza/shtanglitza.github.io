(ns main.router
  (:require
    [reagent.core :as r]
    [reitit.frontend :as rf]
    [reitit.frontend.easy :as rfe]
    [main.pages.landing-page :as landing]
    [main.pages.security-page :as security]
    [clojure.string :as str]))

(defonce current-route (r/atom nil))

(def routes
  [["/" {:name :home :view landing/Page}]
   ["/security" {:name :security :view security/Page}]])

(def router (rf/router routes))



(defn on-navigate [new-match]
  (let [old-route @current-route
        new-route new-match
        old-path (some-> old-route :path)
        new-path (-> new-route :path)
        old-base (first (str/split (or old-path "") #"#"))
        new-base (first (str/split (or new-path "") #"#"))]

    (js/console.log "🚀 ROUTER: Navigating from" old-path "to" new-path)

    (let [has-hash? (-> new-path (str/split #"#") count (> 1))
          page-changed? (and old-base new-base (not= old-base new-base))]

      (when (and page-changed? (not has-hash?))
        (js/console.log "🚀 ROUTER: Page changed with no hash, scrolling to top")
        (js/window.scrollTo 0 0)))

    (reset! current-route new-match)))

(defn start! []
  (js/console.log "🔧 ROUTER: Starting router...")
  (rfe/start! router on-navigate {:use-fragment false}))