(ns main.partners)

;; Partners & certifications content - shown in the landing page "Partners & Certifications" section.
;; To add a partner, append a map to this vector.
;;
;; :id           unique key
;; :name         card title
;; :logo         partner logo (for a dark background) inside assets/img/
;; :logo-alt     alt text for the logo
;; :website      optional partner site - the logo links to it (new tab)
;; :badge        certification badge image inside assets/img/
;; :badge-alt    alt text for the badge image
;; :description  short paragraph
;; :certificate  optional PDF inside assets/files/certificates/ -> "View certificate" link

(def partners
  [{:id "pcvue"
    :name "PcVue Certified Partner"
    :logo "PcVue_Logo_Dark-Background.webp"
    :logo-alt "PcVue logo"
    :website "https://www.pcvue.com/"
    :badge "pcvue_certified_partner_badge.png"
    :badge-alt "PcVue Certified Partner badge"
    :description "Shtanglitza is a Certified Partner of ARC Informatique as a PcVue developer, with the competence to design, integrate, and support SCADA & HMI systems based on PcVue products."
    :certificate "PcVue_Certified_Partner_2026_Shtanglitza.pdf"}])
