(ns main.components.icons
  (:require
   ["@mdi/react" :refer (Icon)]
   ["@mdi/js" :refer [mdiLinkedin mdiEmail mdiMenu mdiWindowClose mdiTextBoxMultiple]]))


(def icon-paths
  {:email
   {:path mdiEmail}
   :linkedin
   {:path mdiLinkedin}
   :hamburg
   {:path mdiMenu}
   :h-close
   {:path mdiWindowClose}
   :blog
   {:path mdiTextBoxMultiple}})

(def typography
  {:size 0.9
   :color "white"})

(def nav-typography
  {:size 1.5
   :color "#4c1d95"}) ; Larger size for hamburg
(defn make-icon [icon-type]
  (let [icon-typography (merge (icon-type icon-paths)
                               (condp = icon-type
                                 :hamburg nav-typography
                                 :h-close nav-typography
                                 typography))]
    [:div
     [:> Icon icon-typography]]))



(defn linkedIcn []
  (make-icon :linkedin))


(defn emailIcn []
  (make-icon :email))

(defn hamburg-menu []
  (make-icon :hamburg))

(defn close-menu []
  (make-icon :h-close))

(defn blogIcn []
  (make-icon :blog))