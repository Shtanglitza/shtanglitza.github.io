(ns main.constants 
  (:require
    [clojure.string :as string]))


(def email-address
  "mailto:office@shtanglitza.ai")

(def linkedin-address
  "https://www.linkedin.com/company/shtanglitza/")

(goog-define assets-url "")

; CSS constants

(defn concatenate-css-definitions [definitions]
  (clojure.string/join " " definitions))

(def menu-css-footer (concatenate-css-definitions ["font-light" "text-sm" "ease-in-out" "duration-700" "hover:text-indigo-200"]))
(def menu-css-2 (concatenate-css-definitions []))
(def menu-css-3 (concatenate-css-definitions []))