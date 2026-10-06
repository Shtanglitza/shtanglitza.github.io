(ns main.components.callout)

;; Highlighted box with a left accent border (e.g. case study "Outcome").
;; Usage: [callout "Heading" [:p "text"]]

(defn callout [heading & body]
  (into [:section {:class ["mt-8" "p-6" "bg-indigo-50" "border-l-4" "border-[#6366F1]"]}
         [:h2 {:class ["text-xl" "font-bold" "text-[#6366F1]" "mb-3"]} heading]]
        body))
