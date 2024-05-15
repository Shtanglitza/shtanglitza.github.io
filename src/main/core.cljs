(ns core
      (:require [applied-science.js-interop :as j]
                [reagent.dom :as rdom]))


(goog-define assets-url "")

(defn website
      []
      [:div {:style {:width "100%"
                     :height "100%"
                     :display "flex"}}
       [:div {:id "sidebar"
              :media "(min-width: 1000px)"
              :style {:width "300px"
                      :min-width "300px"
                      :height "100%"
                      :display "flex"
                      :background-color "#1c1d18"}}
        [:div {:style {:display "flex"
                       :min-width "0px"
                       :flex "1 1 auto"
                       :flex-direction "column"
                       :overflow "hidden"}}
         [:div {:style {:display "flex"
                        :width "100%"
                        :height "150px"}}
          [:h2 {:style {:margin "auto"
                        :font-size 48}}
           [:span
            [:img {:src (str assets-url "images/logo.png")
                   :style {:height 48
                           :margin-bottom -5}}]]
           "htanglitza"]]
         [:div {:style {:display "flex"
                        :flex "1 1 auto"
                        :flex-direction "column"
                        :justify-content "center"
                        :align-items "center"}}
          [:div {:class "menu-item"}
           [:a {:on-click (fn []
                            (j/call
                              (j/call js/document :getElementById "home")
                              :scrollIntoView
                              #js{:behavior "smooth"}))}
            [:h2 {:id "menu-home"} "HOME"]]]
          [:div {:class "menu-item"}
           [:a {:on-click (fn []
                            (j/call
                              (j/call js/document :getElementById "about")
                              :scrollIntoView
                              #js{:behavior "smooth"}))}
            [:h2 {:id "menu-about"} "ABOUT"]]]
          [:div {:class "menu-item"}
           [:a {:on-click (fn []
                            (j/call
                              (j/call js/document :getElementById "capabilities")
                              :scrollIntoView
                              #js{:behavior "smooth"}))}
            [:h2 {:id "menu-capabilities"} "CAPABILITIES"]]]
          [:div {:class "menu-item"}
           [:a {:on-click (fn []
                            (j/call
                              (j/call js/document :getElementById "expertise")
                              :scrollIntoView
                              #js{:behavior "smooth"}))}
            [:h2 {:id "menu-expertise"} "EXPERTISE"]]]
          [:div {:class "menu-item"}
           [:a {:on-click (fn []
                            (j/call
                              (j/call js/document :getElementById "contact")
                              :scrollIntoView
                              #js{:behavior "smooth"}))}
            [:h2 {:id "menu-contact"} "CONTACT"]]]]
         [:div {:style {:display "flex"
                        :width "100%"
                        :height "200px"
                        :flex-direction "column"
                        :justify-content "center"
                        :align-items "center"}}
          [:div {:style {:display "flex"
                         :flex-direction "row"
                         :justify-content "center"
                         :align-items "center"
                         :margin "3px"}}
           [:div {:style {:display "flex"
                          :flex-direction "row"
                          :align-items "center"}}
            [:a {:class "linked-in"
                 :href "https://www.linkedin.com/company/shtanglitza/"
                 :target "_blank"
                 :style {:margin-left "5px"
                         :margin-right "5px"}}
             [:img {:src (str assets-url "images/linkedin.svg")}]]
            [:a {:class "google-maps"
                 :href "https://maps.google.com/maps?q=44.7997033,20.4894722"
                 :target "_blank"
                 :style {:margin-left "5px"
                         :margin-right "5px"}}
             [:img {:src (str assets-url "images/maps.svg")}]]]]
          [:a {:href "mailto:shtanglitza@gmail.com"
               :target "_blank"
               :style {:margin-left "5px"
                       :margin-right "5px"
                       :display "flex"
                       :flex-direction "row"
                       :justify-content "center"
                       :align-items "center"
                       :margin "3px"}}
           [:img {:src (str assets-url "images/email.svg")}]
           [:span "shtanglitza@gmail.com"]]]]]
       [:div {:style {:display "flex"
                      :flex "1 1 auto"
                      :background-color "#d1b781"
                      :height "100vh"
                      :overflow-y "auto"}}
        [:div {:style {:width "100%"
                       :height "100vh"
                       :background-color "#1c1d18"}}
         [:div {:id "home"
                :style {:display "flex"
                        :width "100%"
                        :height "60vh"
                        :background-color "#1c1d18"
                        :border-left "2px solid #d1b781"}}
          [:h1 {:style {:color "#d1b781"
                        :width "100%"
                        :font-size 96
                        :text-align "center"
                        :padding 32
                        :margin "auto"
                        :max-width 650}}
           "Unlock the potential of biomedical data"]]
         [:div {:style {:display "flex"
                        :background-color "#d1b781"
                        :padding 80
                        :height "60vh"}}
          [:p {:style {:color "#1c1d18"
                       :text-align "center"
                       :padding 32
                       :margin "auto"
                       :font-size 32
                       :max-width 650}}
           "Revolutionizing ontologies, data integration, and knowledge graphs to fuel innovation and drive informed decision-making."]]
         [:div {:id "about"
                :style {:display "flex"
                        :background-color "#1c1d18"
                        :padding 80
                        :height "60vh"
                        :border-left "2px solid #d1b781"
                        :flex-direction "column"}}
          [:h1 {:style {:color "#d1b781"
                        :text-align "center"
                        :font-size 48
                        :font-weight 500}}
           "Who are we?"]
          [:p {:style {:color "#d1b781"
                       :text-align "center"
                       :padding "0 32"
                       :margin "0 auto"
                       :font-size 32
                       :max-width 650}}
           "We are a dedicated team of experts focused on empowering the biomedical domain through ontologies, data integration, harmonization, analysis, and knowledge graphs. With our small but highly skilled engineering team, we offer tailored solutions to enhance data organization, uncover hidden insights, and drive informed decision-making."]]
         [:div {:id "capabilities"
                :style {:display "flex"
                        :background-color "#d1b781"
                        :padding 80
                        :height "60vh"
                        :flex-direction "column"}}
          [:h1 {:style {:color "#1c1d18"
                        :text-align "center"
                        :font-size 48
                        :font-weight 500}}
           "Capabilities"]
          [:p {:style {:color "#1c1d18"
                       :text-align "center"
                       :padding "0 32"
                       :margin "0 auto"
                       :font-size 32
                       :max-width 650}}
           "Our capabilities include custom ontology development, seamless data integration, intuitive knowledge graph construction, advanced data analysis, efficient semantic querying, and bespoke application development. We are committed to ensuring data security and compliance with relevant regulations, such as HIPAA and GDPR."]]
         [:div {:id "expertise"
                :style {:display "flex"
                        :background-color "#1c1d18"
                        :padding 80
                        :height "30vh"
                        :border-left "2px solid #d1b781"}}
          [:h1 {:style {:color "#d1b781"
                        :text-align "center"
                        :font-size 56
                        :font-weight 500
                        :width "100%"}}
           "EXPERTISE"]]
         [:div {:style {:display "flex"
                        :background-color "#d1b781"
                        :padding 80
                        :height "60vh"
                        :flex-direction "column"}}
          [:h1 {:style {:color "#1c1d18"
                        :text-align "center"
                        :font-size 48
                        :font-weight 500}}
           "Ontology Development and Management"]
          [:p {:style {:color "#1c1d18"
                       :text-align "center"
                       :padding "0 32"
                       :margin "0 auto"
                       :font-size 32
                       :max-width 650}}
           "Our expert small engineering team creates, maintains, and updates custom ontologies tailored to the biomedical domain, ensuring accurate representation of domain knowledge for efficient data organization, integration, and retrieval."]]
         [:div {:style {:display "flex"
                        :background-color "#1c1d18"
                        :padding 80
                        :height "60vh"
                        :flex-direction "column"
                        :border-left "2px solid #d1b781"}}
          [:h1 {:style {:color "#d1b781"
                        :text-align "center"
                        :font-size 48
                        :font-weight 500}}
           "Data Integration and Harmonization"]
          [:p {:style {:color "#d1b781"
                       :text-align "center"
                       :padding "0 32"
                       :margin "0 auto"
                       :font-size 32
                       :max-width 650}}
           "We offer bespoke data integration and harmonization solutions, combining and refining disparate biomedical data sources into a unified, consistent, and easily-accessible format. Our skilled team ensures improved data quality and seamless information exchange."]]
         [:div {:style {:display "flex"
                        :background-color "#d1b781"
                        :padding 80
                        :height "60vh"
                        :flex-direction "column"}}
          [:h1 {:style {:color "#1c1d18"
                        :text-align "center"
                        :font-size 48
                        :font-weight 500}}
           "Knowledge Graph Construction and Visualization"]
          [:p {:style {:color "#1c1d18"
                       :text-align "center"
                       :padding "0 32"
                       :margin "0 auto"
                       :font-size 32
                       :max-width 650}}
           "Our team builds tailored knowledge graphs representing complex biomedical data as interconnected nodes and edges, enabling intuitive data exploration and the discovery of hidden relationships and insights for informed decision-making."]]
         [:div {:style {:display "flex"
                        :background-color "#1c1d18"
                        :padding 80
                        :height "60vh"
                        :flex-direction "column"
                        :border-left "2px solid #d1b781"}}
          [:h1 {:style {:color "#d1b781"
                        :text-align "center"
                        :font-size 48
                        :font-weight 500}}
           "Data Analysis and Insights"]
          [:p {:style {:color "#d1b781"
                       :text-align "center"
                       :padding "0 32"
                       :margin "0 auto"
                       :font-size 32
                       :max-width 650}}
           "Our engineers employ advanced statistical and machine learning methods to uncover hidden patterns, trends, and correlations in biomedical data, providing valuable insights that drive research, innovation, and informed decision-making in the biomedical domain."]]
         [:div {:style {:display "flex"
                        :background-color "#d1b781"
                        :padding 80
                        :height "60vh"
                        :flex-direction "column"}}
          [:h1 {:style {:color "#1c1d18"
                        :text-align "center"
                        :font-size 48
                        :font-weight 500}}
           "Semantic Data Querying and Retrieval"]
          [:p {:style {:color "#1c1d18"
                       :text-align "center"
                       :padding "0 32"
                       :margin "0 auto"
                       :font-size 32
                       :max-width 650}}
           "We develop custom solutions for efficient and precise querying of biomedical data, allowing users to easily search, retrieve, and filter information using natural language queries and ensuring quick access to relevant data and insights."]]
         [:div {:style {:display "flex"
                        :background-color "#1c1d18"
                        :padding 80
                        :height "60vh"
                        :flex-direction "column"
                        :border-left "2px solid #d1b781"}}
          [:h1 {:style {:color "#d1b781"
                        :text-align "center"
                        :font-size 48
                        :font-weight 500}}
           "Data Security and Compliance"]
          [:p {:style {:color "#d1b781"
                       :text-align "center"
                       :padding "0 32"
                       :margin "0 auto"
                       :font-size 32
                       :max-width 650}}
           "Our team prioritizes data security and adheres to industry best practices and regulatory standards, ensuring the protection of sensitive biomedical data while maintaining compliance with relevant data privacy regulations, such as HIPAA and GDPR."]]
         [:div {:style {:display "flex"
                        :background-color "#d1b781"
                        :padding 80
                        :height "60vh"
                        :flex-direction "column"}}
          [:h1 {:style {:color "#1c1d18"
                        :text-align "center"
                        :font-size 48
                        :font-weight 500}}
           "Custom Biomedical Application Development"]
          [:p {:style {:color "#1c1d18"
                       :text-align "center"
                       :padding "0 32"
                       :margin "0 auto"
                       :font-size 32
                       :max-width 650}}
           "We offer tailored application development services, collaborating closely with you to design, develop, and deploy applications that streamline biomedical workflows, improve collaboration, and boost productivity within the domain."]]
         [:div {:style {:display "flex"
                        :background-color "#1c1d18"
                        :padding 80
                        :height "60vh"
                        :flex-direction "column"
                        :border-left "2px solid #d1b781"}}
          [:h1 {:style {:color "#d1b781"
                        :text-align "center"
                        :font-size 48
                        :font-weight 500}}
           "Personalized Training and Support"]
          [:p {:style {:color "#d1b781"
                       :text-align "center"
                       :padding "0 32"
                       :margin "0 auto"
                       :font-size 32
                       :max-width 650}}
           "Our engineering team provides comprehensive training and ongoing support to help you make the most of our solutions. We offer personalized guidance, hands-on workshops, and technical assistance, ensuring your team can confidently navigate and utilize our data integration, analysis, and visualization tools."]]
         [:div {:id "contact"
                :style {:display "flex"
                        :background-color "#d1b781"
                        :padding 80
                        :height "30vh"}}
          [:h1 {:style {:color "#1c1d18"
                        :text-align "center"
                        :font-size 56
                        :font-weight 500
                        :width "100%"}}
           "CONTACT"]]
         [:div {:style {:display "flex"
                        :width "100%"
                        :height "40vh"
                        :flex-direction "column"
                        :justify-content "center"
                        :align-items "center"
                        :background-color "#1c1d18"
                        :border-left "2px solid #d1b781"}}
          [:div {:style {:display "flex"
                         :flex-direction "row"
                         :justify-content "center"
                         :align-items "center"
                         :margin "3px"}}
           [:div {:style {:display "flex"
                          :flex-direction "row"
                          :align-items "center"}}
            [:a {:class "linked-in"
                 :href "https://www.linkedin.com/in/vladimir-mladenovi%C4%87-b8b8aa2b/"
                 :target "_blank"
                 :style {:margin-left "5px"
                         :margin-right "5px"}}
             [:img {:src (str assets-url "images/linkedin.svg")}]]
            [:a {:class "google-maps"
                 :href "https://maps.google.com/maps?q=44.7997033,20.4894722"
                 :target "_blank"
                 :style {:margin-left "5px"
                         :margin-right "5px"}}
             [:img {:src (str assets-url "images/maps.svg")}]]]]
          [:a {:href "mailto:shtanglitza@gmail.com"
               :target "_blank"
               :style {:margin-left "5px"
                       :margin-right "5px"
                       :display "flex"
                       :flex-direction "row"
                       :justify-content "center"
                       :align-items "center"
                       :margin "3px"}}
           [:img {:src (str assets-url "images/email.svg")}]
           [:span {:style {:color "#d1b781"}} "shtanglitza@gmail.com"]]]]]])

(defn ^:export render
      []
      (rdom/render [website]
                   (js/document.getElementById "app")))

(defn ^:dev/after-load start []
      (js/console.log "start")
      (render))

(defn init []
      (js/console.log "init")
      (start))