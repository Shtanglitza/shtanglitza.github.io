(ns main.components.page-hero
  (:require
    [main.constants :as constants]))

;; Hero banner used at the top of the Security, Case Studies and Case Study pages.
;; Usage: [page-hero {:label "Security" :title "How We Do It?"} & extra-content]

;; With extra content it keeps a min height; title-only heroes shrink to fit.
(defn page-hero [{:keys [label title]} & children]
  (let [bg-url (str constants/assets-url "img/security_bck.webp")
        title-only? (not-any? some? children)]
    (into
      [:section {:class ["mb-8" "mt-6" "relative" "overflow-hidden" "bg-center" "bg-cover" "bg-no-repeat" "rounded-2xl" "shadow-sm" "px-6" "animate-subtle-move"
                         (if title-only? "py-8" "min-h-[210px] pt-8 pb-6")]
                 :style {:backgroundImage (str "url('" bg-url "')")}}
       [:div {:class ["absolute inset-0" "bg-[linear-gradient(to_bottom_right,_#1D1B48_0%,_#726AF0_60%,_#726AF000_100%)]" "backdrop-blur-[2px]" "mix-blend-multiply" "opacity-[90%]"]}]
       [:div {:class ["absolute inset-0"
                      "bg-[linear-gradient(to_bottom_right,_#1A1944_0%,_#1A1944E6_40%,_#1A194400_100%)]"
                      "opacity-100"]}]
       [:h6 {:class ["relative" "text-[#A9F5C8E6]" "text-sm"]} label]
       [:h1 {:class ["relative" "text-2xl" "md:text-3xl" "font-bold" "text-white" "drop-shadow-sm" "max-w-3xl" (when-not title-only? "mb-3")]}
        title]]
      children)))
