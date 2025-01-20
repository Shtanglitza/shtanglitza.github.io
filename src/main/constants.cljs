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

(goog-define blog-address "")

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
  {:blog {:icon icons/blogIcn :url-t main.constants/blog-address :title "Blog" :tooltip "Visit our blog" :label "Blog" :target ""}
   :linkedin {:icon icons/linkedIcn :url-t linkedin-address :title "Connect with Us"  :tooltip "Connect with Us" :label "" :target "_blank"}
   :email {:icon icons/emailIcn :url-t email-address :title "office@shtanglitza.ai"  :tooltip "Contact Us" :label "" :target "_blank"}})

(def contact-links  ; Define contact-links as a var
  (for [[key {:keys [icon url-t tooltip label target]}] contact-icons]
    [:li {:key key :class ["flex items-center"]}
     [:a
      {:class "flex items-center justify-start gap-2 text-white text-[17px]"
       :href url-t
       :target target
       :title tooltip}
      label
      (r/as-element (icon))]]))


(def footer-links  ; Define contact-links as a var
  (for [[key {:keys [icon title url-t target tooltip]}] contact-icons]
    [:a
     {:key key
      :href url-t
      :target target
      :title tooltip
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
