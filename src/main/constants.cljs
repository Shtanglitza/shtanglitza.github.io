(ns main.constants
  (:require
   [clojure.string :as string]
   [main.components.icons :as icons]
   [reagent.core :as r]))


;; utility functions

(defn concatenate-css-definitions [definitions]
  (clojure.string/join " " definitions))

(defn transform-string 
  "This functions generates the ID name value form the string"
  [s] 
  (let [words (clojure.string/split s #" ")
        first-word (first words)
        other-words (rest words)
        initials (map #(subs % 0 1) other-words)]
    (string/join "" (cons first-word initials))))


(defn href-maker 
  "This functions generates the href anchor point value from the ID value"
  [s]
  (str "#" (transform-string s)))


;; Var constants

(def email-address
  "mailto:office@shtanglitza.ai")

(def linkedin-address
  "https://www.linkedin.com/company/shtanglitza/")

(def website-url "https://www.shtanglitza.ai")

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
   {:class ["font-black"
            "text-indigo-500"
            "mr-2" 
            "text-md" 
            "italic" 
            "opacity-90"]}
   "/"])

(def contact-icons  ; Define contact-icons as a var
  {:email {:icon icons/emailIcn :target email-address :title "office@shtanglitza.ai"}
   :linkedin {:icon icons/linkedIcn :target linkedin-address :title "Connect with Us"}})

(def contact-links  ; Define contact-links as a var
  (for [[key {:keys [icon target]}] contact-icons]
    [:li {:key key}
     [:a
      {:class "flex-auto justify-start"
       :href target
       :target "_blank"}
      (r/as-element (icon))]]))


(def footer-links  ; Define contact-links as a var
  (for [[key {:keys [icon target title]}] contact-icons]
    [:a
     {:key key
      :href target
      :target "_blank"
      :class ["flex"
              "flex-row"
              "w-fit"
              "mt-3"
              "group"]}
     [:span
      {:class ["mr-2"
               "group-hover:ms-1"
               "ease-in-out"
               "duration-700"]}
      (r/as-element (icon))]
     [:span
      {:class ["group-hover:text-indigo-400"
               "ease-in-out"
               "duration-700"]}
      title]]))

; CSS constants

(def menu-css-footer (concatenate-css-definitions ["font-light"
                                                   "text-sm"
                                                   "ease-in-out"
                                                   "duration-700"
                                                   "hover:text-indigo-200"]))
(def menu-css-navbar (concatenate-css-definitions ["flex-auto"
                                                   "justify-start"
                                                   "font-medium"
                                                   "hover:text-violet-600"
                                                   "nav-link"]))
