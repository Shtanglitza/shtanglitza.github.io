(ns main.constants 
  (:require
    [clojure.string :as string]))


(def email-address
  "mailto:office@shtanglitza.ai")

(def linkedin-address
  "https://www.linkedin.com/company/shtanglitza/")

(goog-define assets-url "")

(def listDots
  [:span
   {:class "font-bold
            text-indigo-500
            mr-2
            text-xl"}
   ":"])

(def fSlash
  [:span
   {:class "font-black
            text-indigo-500
            mr-2 
            text-md 
            italic 
            opacity-75"}
   "/"])

; CSS constants

(defn concatenate-css-definitions [definitions]
  (clojure.string/join " " definitions))

(def menu-css-footer (concatenate-css-definitions ["font-light" "text-sm" "ease-in-out" "duration-700" "hover:text-indigo-200"]))
(def menu-css-navbar (concatenate-css-definitions ["flex-auto justify-start font-medium hover:text-violet-600"]))
;; (def menu-css-3 (concatenate-css-definitions []))