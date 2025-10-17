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

(def security-sections
  [{:id "asset-management"
    :title "Asset Management"
    :content
    [:ul
     [:li "All assets are documented, tracked, and owned, with clear processes for their return and decommissioning."]]}

   {:id "information-classification"
    :title "Information Classification"
    :content
    [:ul
     [:li "Information is categorized into Public, External, Internal, and Confidential, each with specific handling, access, labeling, storage, transmission, and retention rules that commensurate with the information sensitivity."]
     [:li "Confidential information, critical to business operations, is strictly limited to authorized personnel on a need-to-know basis, with MFA and logging for storage access, and secure, encrypted transmission."]]}

   {:id "access-control"
    :title "Access Control"
    :content
    [:ul
     [:li "We strictly adhere to 'need-to-know' and 'least privilege' principles, ensuring that only authorized personnel can access data, protecting it from unauthorized exposure."]
     [:li "Critical functions have separation of duties."]
     [:li "Access requests are approved, modified with role changes, and revoked upon termination."]
     [:li "Bi-annual access reviews are conducted."]
     [:li "Unique user identities are assigned, and MFA is prioritized, using strong passwords and hardware tokens or OTP codes."]]}

   {:id "supplier-risk-management"
    :title "Supplier Risk Management"
    :content
    [:ul
     [:li "Third-party ICT products and services undergo risk assessments prior to being purchased."]
     [:li "To ensure ongoing security, third-party ICT products and services are subject to continuous risk monitoring and assessment."]]}

   {:id "incident-management"
    :title "Incident Management"
    :content
    [:ul
     [:li "A detailed Incident Response Plan outlines phases from detection to recovery. Suspected incidents are reported to Shtanglitza’s Incident Response Team."]
     [:li "To preserve its integrity and security, all evidence collected during incident response is managed consistently according to established protocols."]
     [:li "We commit to providing timely communication to affected clients and authorities within 72 hours of detection."]
     [:li "Annual incident response tests are conducted."]]}

   {:id "business-continuity"
    :title "Business Continuity"
    :content
    [:ul
     [:li "Plans are in place to maintain operations during disruptions, leveraging highly available SaaS offerings and conducting annual tests."]]}

   {:id "legal-regulatory"
    :title "Legal & Regulatory Requirements"
    :content
    [:ul
     [:li "Compliance with all applicable laws, statutory requirements (including data breach notifications, Intellectual Property and PII protection), and contractual obligations is ensured."]]}

   {:id "people-security"
    :title "People Security"
    :content
    [:ul
     [:li "All personnel receive annual training to ensure a current and comprehensive understanding of our security policies."]
     [:li "As part of our secure onboarding process, we conduct background checks and ensure all new hires sign employment contracts and non-disclosure agreements (NDAs)."]
     [:li "Our off-boarding process systematically includes deactivating all accounts and communicating any continuing security responsibilities to a departing personnel member."]]}

   {:id "remote-working"
    :title "Remote Working, Endpoint Logical and Physical Security"
    :content
    [:ul
     [:li "Personnel must work in safe and secure physical locations, prevent screen visibility, and use secure Wi-Fi."]
     [:li "Endpoint devices are encrypted, regularly patched, protected by host-based firewalls and antivirus software."]]}

   {:id "vulnerability-management"
    :title "Vulnerability Management"
    :content
    [:ul
     [:li "A structured approach for identifying, assessing, managing, and remediating vulnerabilities."]
     [:li "Continuous monitoring of NIST NVD and CISA newsletters for the latest vulnerabilities and tactics, techniques, and procedures (TTPs)."]]}

   {:id "information-backup"
    :title "Information Backup"
    :content
    [:ul
     [:li "Backups are stored in secure, encrypted locations with restricted, logged access and MFA."]
     [:li "Restore tests are conducted regularly (at least bi-annually)."]]}

   {:id "logging"
    :title "Logging"
    :content
    [:ul
     [:li "Systems log events crucial for security monitoring and forensics (authentication, authorization changes, privileged actions, configuration changes, information governance)."]
     [:li "Logs are access-protected and regularly reviewed."]]}

   {:id "cryptography"
    :title "Cryptography"
    :content
    [:ul
     [:li "We employ strong encryption algorithms (e.g., AES 256 and TLS 1.2+) for encrypting all data at rest and in transit."]
     [:li "Cryptographic keys are rotated regularly and digital certificates are provisioned from reputable Certificate Authorities."]]}

   {:id "sdlc-change-management"
    :title "SDLC & Change Management"
    :content
    [:ul
     [:li "Shtanglitza treats the Software Development Lifecycle (SDLC) as an essential process for preventing security vulnerabilities, ensuring compliance with regulations, and protecting customer data. By integrating security practices from the outset (the shift-left approach), our goal is to reduce the risk of costly post-release fixes and data breaches."]
     [:li "Initial security requirements, threat modeling, and risk assessments for Shtanglitza solutions may be either received from the customer or designed and performed solely by Shtanglitza. Our developers are trained to use best practices as described by the \"Twelve-factor App\" and OWASP Top 10."]
     [:li "Shtanglitza is dedicated to being a reliable partner and is prepared to work with customers to address security risks and threats identified at various stages of the SDLC. Open communication with customers is essential for understanding these risks, and the Shtanglitza team will proactively share insights and potential risks that may extend beyond the current scope of work, but are nonetheless important for the customer's overall security posture."]
     [:li "Shtanglitza will support customers with 3rd party pentest requirements throughout the SDLC by providing necessary information about system design, technologies, and other pertinent information."]
     [:li "Changes to Shtanglitza ICT products and services prior to being deployed are planned, tested, and approved."]]}])



;;old version
;(def security-chips
;  [{:id "information-classification" :label "Information Classification"}
;   {:id "access-control" :label "Access Control"}
;   {:id "supplier-risk-management" :label "Supplier Risk Management"}
;   {:id "incident-management" :label "Incident Management"}
;   {:id "business-continuity" :label "Business Continuity"}
;   {:id "legal-regulatory" :label "Legal and Regulatory Requirements"}
;   {:id "people-security" :label "People Security"}
;   {:id "remote-working" :label "Remote Working, Endpoint Logical and Physical Security"}
;   {:id "vulnerability-management" :label "Vulnerability Management"}
;   {:id "information-backup" :label "Information Backup"}
;   {:id "logging" :label "Logging"}
;   {:id "cryptography" :label "Cryptography"}
;   {:id "sdlc-change-management" :label "SDLC and Change Management"}])

(def security-chips
  (mapv (fn [section]
          {:id (:id section)
           :label (:title section)})
        security-sections))
