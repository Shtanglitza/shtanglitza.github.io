(ns main.pages.not-found-page
  (:require
    [reagent.core :as r]
    [main.constants :as constants]
    [reitit.frontend.easy :as rfe]))

(defn Page [match]
  (r/create-class
    {:component-did-mount
     (fn []
       (js/console.log "🔍 404: Page mounted for invalid route")
       (.scrollTo js/window 0 0))

     :component-will-unmount
     (fn []
       (js/console.log "🔍 404: Page unmounting"))

     :reagent-render
     (fn []

       (let [invalid-path (or
                            (get-in match [:path-params :path])
                            (:path match)
                            (-> js/window .-location .-pathname)
                            "unknown page")]

         [:main {:class ["w-full" "max-w-[1536px]" "mx-auto" "min-h-screen" "bg-[#FEFEFF]" "py-8" "px-6" "flex" "justify-center" "items-center"]}
          [:div {:class ["mx-auto" "relative" "flex" "flex-row" "justify-center" "items-center" "min-h-[60vh]"]}
           [:div {:class ["text-center"]}
            [:img
             {:class ["mx-6"
                      "w-fit"
                      "h-auto"]
              :src (str constants/assets-url "img/404-img.png")}]
            [:h1 {:class ["text-4xl" "font-bold" "text-gray-900" "mb-4" "mt-3"]} "Page Not Found"]
            [:p {:class ["text-xl" "text-gray-700" "mb-4"]}
             "The page '" invalid-path "' doesn't exist."]
            [:p {:class ["text-lg" "text-gray-600" "mb-6"]}
             "Please check the URL or try one of these pages:"]
            [:div {:class ["flex" "flex-col" "sm:flex-row" "gap-4" "justify-center"  "mb-6"]}
             [:a {:href (rfe/href :home)
                  :class ["px-6" "py-3" "bg-violet-200" "text-violet-600" "rounded-lg" "hover:bg-violet-400" "hover:text-white" "transition-colors"]}
              "Homepage"]
             [:a {:href (rfe/href :security)
                  :class ["px-6" "py-3" "bg-violet-200" "text-violet-600" "rounded-lg" "hover:bg-violet-400" "transition-colors" "hover:text-white"]}
              "Security"]]
            ]]]))}))