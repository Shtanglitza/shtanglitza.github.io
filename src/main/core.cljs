(ns core
  (:require [applied-science.js-interop :as j]
            [reagent.core :as r]
            [reagent.dom :as rdom]))


(goog-define assets-url "")

(def small-menu-visible (r/atom false))
(def menu-el-visible (r/atom {"home" true}))


(defn website
  []
  [:div {:id "screen"
         :style {:width "100%"
                 :height "100%"
                 :display "flex"}}
   [:div {:id "sidebar"
          :style {:width "300px"
                  :min-width "300px"
                  :height "100%"
                  :display "flex"
                  :background-color "#1c1d18"
                  :flex "1 1 auto"
                  :flex-direction "column"
                  :overflow "hidden"
                  :max-width 400}}
    [:div {:id "sidebar-logo"
           :style {:display "flex"
                   :width "100%"
                   :height "150px"}}
     [:h2 {:style {:margin "auto"
                   :font-size 40
                   :letter-spacing -1}}
      [:span
       [:img {:src (str assets-url "images/logo.png")
              :style {:height 48
                      :margin-bottom -6}}]]
      "htanglitza"]]
    [:div {:id "sidebar-menu"
           :style {:display "flex"
                   :flex "1 1 auto"
                   :flex-direction "column"
                   :justify-content "center"
                   :align-items "center"}}
     [:div {:class "menu-item"
            :style {:height "60px"
                    :display "flex"
                    :align-items "center"}}
      [:a {:on-click (fn []
                       (j/call
                         (j/call js/document :getElementById "home")
                         :scrollIntoView
                         #js{:behavior "smooth"}))}
       [:h2 {:id "menu-home"
             :style {:transition "all .5s"
                     :letter-spacing -1
                     :margin 0
                     :font-size (if (@menu-el-visible "home") 36 24)}} "HOME"]]]
     [:div {:class "menu-item"
            :style {:height "60px"
                    :display "flex"
                    :align-items "center"}}
      [:a {:on-click (fn []
                       (j/call
                         (j/call js/document :getElementById "about")
                         :scrollIntoView
                         #js{:behavior "smooth"}))}
       [:h2 {:id "menu-about"
             :style {:transition "all .5s"
                     :letter-spacing -1
                     :margin 0
                     :font-size (if (@menu-el-visible "about") 36 24)}} "ABOUT"]]]
     [:div {:class "menu-item"
            :style {:height "60px"
                    :display "flex"
                    :align-items "center"}}
      [:a {:on-click (fn []
                       (j/call
                         (j/call js/document :getElementById "capabilities")
                         :scrollIntoView
                         #js{:behavior "smooth"}))}
       [:h2 {:id "menu-capabilities"
             :style {:transition "all .5s"
                     :letter-spacing -1
                     :margin 0
                     :font-size (if (@menu-el-visible "capabilities") 36 24)}} "CAPABILITIES"]]]
     [:div {:class "menu-item"
            :style {:height "60px"
                    :display "flex"
                    :align-items "center"}}
      [:a {:on-click (fn []
                       (j/call
                         (j/call js/document :getElementById "expertise")
                         :scrollIntoView
                         #js{:behavior "smooth"}))}
       [:h2 {:id "menu-expertise"
             :style {:transition "all .5s"
                     :letter-spacing -1
                     :margin 0
                     :font-size (if (@menu-el-visible "expertise") 36 24)}} "EXPERTISE"]]]
     [:div {:class "menu-item"
            :style {:height "60px"
                    :display "flex"
                    :align-items "center"}}
      [:a {:on-click (fn []
                       (j/call
                         (j/call js/document :getElementById "contact")
                         :scrollIntoView
                         #js{:behavior "smooth"}))}
       [:h2 {:id "menu-contact"
             :style {:transition "all .5s"
                     :letter-spacing -1
                     :margin 0
                     :font-size (if (@menu-el-visible "contact") 36 24)}} "CONTACT"]]]]
    [:div {:id "sidebar-contact"
           :style {:display "flex"
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
        [:img {:src (str assets-url "images/linkedin.svg")}]]]]
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
      [:span "shtanglitza@gmail.com"]]]
    [:div {:id "sidebar-hamburger"
           :style {:display "none"
                   :height 32
                   :margin "34px 16px 0px 0px"}}
     [:img {:src (if @small-menu-visible
                   (str assets-url "images/close.svg")
                   (str assets-url "images/menu.svg"))
            :on-click (fn []
                        (j/call
                          (j/get
                            (j/call js/document :getElementById "small-menu")
                            :classList)
                          :toggle
                          "small-menu-visible")
                        (swap! small-menu-visible not))}]]]
   [:div {:id "content"
          :style {:display "flex"
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
                    :flex-direction "column"}}
      [:div {:style {:display "flex"
                     :width "100%"
                     :min-height "60vh"
                     :background-color "#1c1d18"
                     :border-left "2px solid #d1b781"}}
       [:h1 {:style {:color "#d1b781"
                     :width "100%"
                     :font-size 80
                     :letter-spacing -5
                     :text-align "center"
                     :padding 32
                     :margin "auto"
                     :max-width 650}}
        "Unlock the potential of biomedical data"]]
      [:div {:style {:display "flex"
                     :background-color "#d1b781"
                     :padding 40
                     :min-height "60vh"}}
       [:p {:style {:color "#1c1d18"
                    :text-align "center"
                    :padding "0 32"
                    :margin "auto"
                    :font-size 36
                    :letter-spacing -1
                    :max-width 650}}
        "Revolutionizing ontologies, data integration, and knowledge graphs to fuel innovation and drive informed decision-making."]]]
     [:div {:id "about"
            :style {:display "flex"
                    :background-color "#1c1d18"
                    :padding 40
                    :min-height "60vh"
                    :border-left "2px solid #d1b781"
                    :flex-direction "column"
                    :justify-content "center"}}
      [:h1 {:style {:color "#d1b781"
                    :text-align "center"
                    :font-size 48
                    :letter-spacing -1
                    :font-weight 500
                    :margin-top 0
                    :margin-bottom 0}}
       "Who are we?"]
      [:img {:src (str assets-url "images/who-are-we.png")
             :style {:height 80
                     :margin-left "auto"
                     :margin-right "auto"
                     :margin-top 20
                     :margin-bottom 20}}]
      [:p {:style {:color "#d1b781"
                   :text-align "center"
                   :padding "0 32"
                   :margin "0 auto"
                   :font-size 26
                   :letter-spacing -1
                   :max-width 650}}
       "We are a dedicated team of experts focused on empowering the biomedical domain through ontologies, data integration, harmonization, analysis, and knowledge graphs. With our small but highly skilled engineering team, we offer tailored solutions to enhance data organization, uncover hidden insights, and drive informed decision-making."]]
     [:div {:id "capabilities"
            :style {:display "flex"
                    :background-color "#d1b781"
                    :padding 40
                    :min-height "60vh"
                    :flex-direction "column"
                    :justify-content "center"}}
      [:h1 {:style {:color "#1c1d18"
                    :text-align "center"
                    :font-size 48
                    :letter-spacing -1
                    :font-weight 500
                    :margin-top 0
                    :margin-bottom 0}}
       "Capabilities"]
      [:img {:src (str assets-url "images/capabilities.png")
             :style {:height 80
                     :margin-left "auto"
                     :margin-right "auto"
                     :margin-top 20
                     :margin-bottom 20}}]
      [:p {:style {:color "#1c1d18"
                   :text-align "center"
                   :padding "0 32"
                   :margin "0 auto"
                   :font-size 26
                   :letter-spacing -1
                   :max-width 650}}
       "Our capabilities include custom ontology development, seamless data integration, intuitive knowledge graph construction, advanced data analysis, efficient semantic querying, and bespoke application development. We are committed to ensuring data security and compliance with relevant regulations, such as HIPAA and GDPR."]]
     [:div {:id "expertise"
            :style {:display "flex"
                    :width "100%"
                    :flex-direction "column"}}
      [:div {:style {:display "flex"
                     :background-color "#1c1d18"
                     :padding 40
                     :min-height "30vh"
                     :justify-content "center"
                     :align-items "center"
                     :border-left "2px solid #d1b781"}}
       [:h1 {:style {:color "#d1b781"
                     :text-align "center"
                     :font-size 56
                     :letter-spacing -1
                     :font-weight 500}}
        "EXPERTISE"]]
      [:div {:style {:display "flex"
                     :background-color "#d1b781"
                     :padding 40
                     :min-height "60vh"
                     :flex-direction "column"
                     :justify-content "center"}}
       [:h1 {:style {:color "#1c1d18"
                     :text-align "center"
                     :font-size 40
                     :letter-spacing -1
                     :font-weight 500
                     :margin-top 0
                     :margin-bottom 0}}
        "1. Ontology Development and Management"]
       [:img {:src (str assets-url "images/ontology-development-and-management.png")
              :style {:height 80
                      :margin-left "auto"
                      :margin-right "auto"
                      :margin-top 20
                      :margin-bottom 20}}]
       [:p {:style {:color "#1c1d18"
                    :text-align "center"
                    :padding "0 32"
                    :margin "0 auto"
                    :font-size 26
                    :letter-spacing -1
                    :max-width 650}}
        "Our expert small engineering team creates, maintains, and updates custom ontologies tailored to the biomedical domain, ensuring accurate representation of domain knowledge for efficient data organization, integration, and retrieval."]]
      [:div {:style {:display "flex"
                     :background-color "#1c1d18"
                     :padding 40
                     :min-height "60vh"
                     :flex-direction "column"
                     :border-left "2px solid #d1b781"
                     :justify-content "center"}}
       [:h1 {:style {:color "#d1b781"
                     :text-align "center"
                     :font-size 40
                     :letter-spacing -1
                     :font-weight 500
                     :margin-top 0
                     :margin-bottom 0}}
        "2. Data Integration and Harmonization"]
       [:img {:src (str assets-url "images/data-integration-and-harmonization.png")
              :style {:height 80
                      :margin-left "auto"
                      :margin-right "auto"
                      :margin-top 20
                      :margin-bottom 20}}]
       [:p {:style {:color "#d1b781"
                    :text-align "center"
                    :padding "0 32"
                    :margin "0 auto"
                    :font-size 26
                    :letter-spacing -1
                    :max-width 650}}
        "We offer bespoke data integration and harmonization solutions, combining and refining disparate biomedical data sources into a unified, consistent, and easily-accessible format. Our skilled team ensures improved data quality and seamless information exchange."]]
      [:div {:style {:display "flex"
                     :background-color "#d1b781"
                     :padding 40
                     :min-height "60vh"
                     :flex-direction "column"
                     :justify-content "center"}}
       [:h1 {:style {:color "#1c1d18"
                     :text-align "center"
                     :font-size 40
                     :letter-spacing -1
                     :font-weight 500
                     :margin-top 0
                     :margin-bottom 0}}
        "3. Knowledge Graph Construction and Visualization"]
       [:img {:src (str assets-url "images/knowledge-graph-construction-and-visualization.png")
              :style {:height 80
                      :margin-left "auto"
                      :margin-right "auto"
                      :margin-top 20
                      :margin-bottom 20}}]
       [:p {:style {:color "#1c1d18"
                    :text-align "center"
                    :padding "0 32"
                    :margin "0 auto"
                    :font-size 26
                    :letter-spacing -1
                    :max-width 650}}
        "Our team builds tailored knowledge graphs representing complex biomedical data as interconnected nodes and edges, enabling intuitive data exploration and the discovery of hidden relationships and insights for informed decision-making."]]
      [:div {:style {:display "flex"
                     :background-color "#1c1d18"
                     :padding 40
                     :min-height "60vh"
                     :flex-direction "column"
                     :border-left "2px solid #d1b781"
                     :justify-content "center"}}
       [:h1 {:style {:color "#d1b781"
                     :text-align "center"
                     :font-size 40
                     :letter-spacing -1
                     :font-weight 500
                     :margin-top 0
                     :margin-bottom 0}}
        "4. Data Analysis and Insights"]
       [:img {:src (str assets-url "images/data-analysis-and-insights.png")
              :style {:height 80
                      :margin-left "auto"
                      :margin-right "auto"
                      :margin-top 20
                      :margin-bottom 20}}]
       [:p {:style {:color "#d1b781"
                    :text-align "center"
                    :padding "0 32"
                    :margin "0 auto"
                    :font-size 26
                    :letter-spacing -1
                    :max-width 650}}
        "Our engineers employ advanced statistical and machine learning methods to uncover hidden patterns, trends, and correlations in biomedical data, providing valuable insights that drive research, innovation, and informed decision-making in the biomedical domain."]]
      [:div {:style {:display "flex"
                     :background-color "#d1b781"
                     :padding 40
                     :min-height "60vh"
                     :flex-direction "column"
                     :justify-content "center"}}
       [:h1 {:style {:color "#1c1d18"
                     :text-align "center"
                     :font-size 40
                     :letter-spacing -1
                     :font-weight 500
                     :margin-top 0
                     :margin-bottom 0}}
        "5. Semantic Data Querying and Retrieval"]
       [:img {:src (str assets-url "images/semantic-data-querying-and-retrieval.png")
              :style {:height 80
                      :margin-left "auto"
                      :margin-right "auto"
                      :margin-top 20
                      :margin-bottom 20}}]
       [:p {:style {:color "#1c1d18"
                    :text-align "center"
                    :padding "0 32"
                    :margin "0 auto"
                    :font-size 26
                    :letter-spacing -1
                    :max-width 650}}
        "We develop custom solutions for efficient and precise querying of biomedical data, allowing users to easily search, retrieve, and filter information using natural language queries and ensuring quick access to relevant data and insights."]]
      [:div {:style {:display "flex"
                     :background-color "#1c1d18"
                     :padding 40
                     :min-height "60vh"
                     :flex-direction "column"
                     :border-left "2px solid #d1b781"
                     :justify-content "center"}}
       [:h1 {:style {:color "#d1b781"
                     :text-align "center"
                     :font-size 40
                     :letter-spacing -1
                     :font-weight 500
                     :margin-top 0
                     :margin-bottom 0}}
        "6. Data Security and Compliance"]
       [:img {:src (str assets-url "images/data-security-and-compliance.png")
              :style {:height 80
                      :margin-left "auto"
                      :margin-right "auto"
                      :margin-top 20
                      :margin-bottom 20}}]
       [:p {:style {:color "#d1b781"
                    :text-align "center"
                    :padding "0 32"
                    :margin "0 auto"
                    :font-size 26
                    :letter-spacing -1
                    :max-width 650}}
        "Our team prioritizes data security and adheres to industry best practices and regulatory standards, ensuring the protection of sensitive biomedical data while maintaining compliance with relevant data privacy regulations, such as HIPAA and GDPR."]]
      [:div {:style {:display "flex"
                     :background-color "#d1b781"
                     :padding 40
                     :min-height "60vh"
                     :flex-direction "column"
                     :justify-content "center"}}
       [:h1 {:style {:color "#1c1d18"
                     :text-align "center"
                     :font-size 40
                     :letter-spacing -1
                     :font-weight 500
                     :margin-top 0
                     :margin-bottom 0}}
        "7. Custom Biomedical Application Development"]
       [:img {:src (str assets-url "images/custom-biomedical-application-development.png")
              :style {:height 80
                      :margin-left "auto"
                      :margin-right "auto"
                      :margin-top 20
                      :margin-bottom 20}}]
       [:p {:style {:color "#1c1d18"
                    :text-align "center"
                    :padding "0 32"
                    :margin "0 auto"
                    :font-size 26
                    :letter-spacing -1
                    :max-width 650}}
        "We offer tailored application development services, collaborating closely with you to design, develop, and deploy applications that streamline biomedical workflows, improve collaboration, and boost productivity within the domain."]]
      [:div {:style {:display "flex"
                     :background-color "#1c1d18"
                     :padding 40
                     :min-height "60vh"
                     :flex-direction "column"
                     :border-left "2px solid #d1b781"
                     :justify-content "center"}}
       [:h1 {:style {:color "#d1b781"
                     :text-align "center"
                     :font-size 40
                     :letter-spacing -1
                     :font-weight 500
                     :margin-top 0
                     :margin-bottom 0}}
        "8. Personalized Training and Support"]
       [:img {:src (str assets-url "images/personalized-training-and-support.png")
              :style {:height 80
                      :margin-left "auto"
                      :margin-right "auto"
                      :margin-top 20
                      :margin-bottom 20}}]
       [:p {:style {:color "#d1b781"
                    :text-align "center"
                    :padding "0 32"
                    :margin "0 auto"
                    :font-size 26
                    :letter-spacing -1
                    :max-width 650}}
        "Our engineering team provides comprehensive training and ongoing support to help you make the most of our solutions. We offer personalized guidance, hands-on workshops, and technical assistance, ensuring your team can confidently navigate and utilize our data integration, analysis, and visualization tools."]]]
     [:div {:id "contact"
            :style {:display "flex"
                    :width "100%"
                    :flex-direction "column"}}
      [:div {:style {:display "flex"
                     :background-color "#d1b781"
                     :padding 40
                     :min-height "30vh"
                     :justify-content "center"
                     :align-items "center"}}
       [:h1 {:style {:display "flex"
                     :color "#1c1d18"
                     :text-align "center"
                     :font-size 56
                     :letter-spacing -1
                     :font-weight 500}}
        "CONTACT"]]
      [:div {:style {:display "flex"
                     :width "100%"
                     :min-height "40vh"
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
                       :align-items "center"
                       :padding "10px"}}
         [:a {:class "linked-in"
              :href "https://www.linkedin.com/company/shtanglitza/"
              :target "_blank"
              :style {:margin-left "5px"
                      :margin-right "5px"}}
          [:img {:src (str assets-url "images/linkedin.svg")}]]]]
       [:a {:href "mailto:shtanglitza@gmail.com"
            :target "_blank"
            :style {:margin "5px"
                    :padding "10px"
                    :display "flex"
                    :flex-direction "row"
                    :justify-content "center"
                    :align-items "center"}}
        [:img {:src (str assets-url "images/email.svg")}]
        [:span {:style {:color "#d1b781"}} "shtanglitza@gmail.com"]]]]]]
   [:div {:id "small-menu"
          :style {:display "flex"
                  :position "absolute"
                  :top 100
                  :left 0
                  :height "calc(100% - 100px)"
                  :width "0%"
                  :background-color "#d1b781"
                  :transition "all 0.5s"
                  :flex-direction "column"
                  :justify-content "center"
                  :align-items "center"
                  :overflow "hidden"}}
    [:div {:class "menu-item"
           :style {:height "60px"
                   :display "flex"
                   :align-items "center"
                   :overflow "hidden"}}
     [:a {:style {:display "flex"}
          :on-click (fn []
                      (when @small-menu-visible
                        (reset! small-menu-visible false)
                        (j/call
                          (j/get
                            (j/call js/document :getElementById "small-menu")
                            :classList)
                          :remove
                          "small-menu-visible"))
                      (j/call
                        (j/call js/document :getElementById "home")
                        :scrollIntoView
                        #js{:behavior "smooth"}))}
      [:h2 {:id "menu-home"
            :style {:transition "all .5s"
                    :letter-spacing -1
                    :margin 0
                    :color "#1c1d18"
                    :font-size (if (@menu-el-visible "home") 36 24)}} "HOME"]]]
    [:div {:class "menu-item"
           :style {:height "60px"
                   :display "flex"
                   :align-items "center"
                   :overflow "hidden"}}
     [:a {:style {:display "flex"}
          :on-click (fn []
                      (when @small-menu-visible
                        (reset! small-menu-visible false)
                        (j/call
                          (j/get
                            (j/call js/document :getElementById "small-menu")
                            :classList)
                          :remove
                          "small-menu-visible"))
                      (j/call
                        (j/call js/document :getElementById "about")
                        :scrollIntoView
                        #js{:behavior "smooth"}))}
      [:h2 {:id "menu-about"
            :style {:transition "all .5s"
                    :letter-spacing -1
                    :margin 0
                    :color "#1c1d18"
                    :font-size (if (@menu-el-visible "about") 36 24)}} "ABOUT"]]]
    [:div {:class "menu-item"
           :style {:height "60px"
                   :display "flex"
                   :align-items "center"
                   :overflow "hidden"}}
     [:a {:style {:display "flex"}
          :on-click (fn []
                      (when @small-menu-visible
                        (reset! small-menu-visible false)
                        (j/call
                          (j/get
                            (j/call js/document :getElementById "small-menu")
                            :classList)
                          :remove
                          "small-menu-visible"))
                      (j/call
                        (j/call js/document :getElementById "capabilities")
                        :scrollIntoView
                        #js{:behavior "smooth"}))}
      [:h2 {:id "menu-capabilities"
            :style {:transition "all .5s"
                    :letter-spacing -1
                    :margin 0
                    :color "#1c1d18"
                    :font-size (if (@menu-el-visible "capabilities") 36 24)}} "CAPABILITIES"]]]
    [:div {:class "menu-item"
           :style {:height "60px"
                   :display "flex"
                   :align-items "center"
                   :overflow "hidden"}}
     [:a {:style {:display "flex"}
          :on-click (fn []
                      (when @small-menu-visible
                        (reset! small-menu-visible false)
                        (j/call
                          (j/get
                            (j/call js/document :getElementById "small-menu")
                            :classList)
                          :remove
                          "small-menu-visible"))
                      (j/call
                        (j/call js/document :getElementById "expertise")
                        :scrollIntoView
                        #js{:behavior "smooth"}))}
      [:h2 {:id "menu-expertise"
            :style {:transition "all .5s"
                    :letter-spacing -1
                    :margin 0
                    :color "#1c1d18"
                    :font-size (if (@menu-el-visible "expertise") 36 24)}} "EXPERTISE"]]]
    [:div {:class "menu-item"
           :style {:height "60px"
                   :display "flex"
                   :align-items "center"
                   :overflow "hidden"}}
     [:a {:style {:display "flex"}
          :on-click (fn []
                      (when @small-menu-visible
                        (reset! small-menu-visible false)
                        (j/call
                          (j/get
                            (j/call js/document :getElementById "small-menu")
                            :classList)
                          :remove
                          "small-menu-visible"))
                      (j/call
                        (j/call js/document :getElementById "contact")
                        :scrollIntoView
                        #js{:behavior "smooth"}))}
      [:h2 {:id "menu-contact"
            :style {:transition "all .5s"
                    :letter-spacing -1
                    :margin 0
                    :color "#1c1d18"
                    :font-size (if (@menu-el-visible "contact") 36 24)}} "CONTACT"]]]
    [:div {:id "small-menu-contact"
           :style {:display "flex"
                   :width "100%"
                   :height "200px"
                   :flex-direction "column"
                   :justify-content "center"
                   :align-items "center"
                   :background-color "#1c1d18"}}
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
        [:img {:src (str assets-url "images/linkedin.svg")}]]]]
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
      [:span "shtanglitza@gmail.com"]]]]])

(defn ^:export render
  []
  (rdom/render [website]
               (js/document.getElementById "app")))

(defn ^:dev/after-load start []
  (js/console.log "start")
  (render)
  (j/call (j/call js/document :getElementById "content")
          :addEventListener
          "scroll"
          (fn []
            (doseq [menu ["home" "about" "capabilities" "expertise" "contact"]]
              (let [rect (j/call (j/call js/document :getElementById menu)
                                 :getBoundingClientRect)
                    rect-height (j/get rect :height)
                    rect-top (j/get rect :top)
                    rect-bottom (j/get rect :bottom)
                    visible (and (>= (+ rect-top rect-height) 0)
                                 (<= (- rect-bottom rect-height) (j/get js/window :innerHeight)))]
                (swap! menu-el-visible assoc menu visible))))))

(defn init []
  (js/console.log "init")
  (start))