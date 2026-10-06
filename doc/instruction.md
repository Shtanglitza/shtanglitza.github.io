# Shtanglitza website – developer instructions

Practical notes for whoever works on this site next. For the blog, see `README.md` in the repo root.

---

## 1. Run the project locally

Requirements: Node/npm, Java, Clojure CLI (shadow-cljs reads deps from `deps.edn`).

```bash
npm install        # first time, and after every pull that changes package.json
npm run dev        # Tailwind watcher + shadow-cljs watch
```

Open **http://localhost:8080**. Code changes hot-reload.

> Changes to `shadow-cljs.edn` are read only at startup – stop `npm run dev` (Ctrl+C) and start it again.

Production build:

```bash
npm run prod       # builds into public/release/js
npm run test-prod  # serves the production build for checking
```

There are no automated tests – check pages manually in the browser.

---

## 2. Add a new case study

All case study content lives in **one file**: `src/main/case_studies.cljs`.

1. Open `src/main/case_studies.cljs`.
2. Copy an existing `{...}` block and paste it **at the end** of the `case-studies` vector (newest is always last).
3. Edit the fields:

```clojure
{:slug "my-new-project"                ; URL: /case-studies/my-new-project  (lowercase, dashes, unique)
 :number "IV"                          ; shown as "Case Study IV"
 :title "Full title of the case study"
 :highlight "3× faster"                ; OPTIONAL – green ⚡ chip; remove the line if not needed
 :challenge "What problem the client had."
 :solution-intro "We built a platform that:"   ; OPTIONAL – sentence before the bullets
 :solution-points
 [{:label "First Point"  :text "Description of the first point."}
  {:label "Second Point" :text "Description of the second point."}
  {:label "Third Point"  :text "Description of the third point."}]
 :outcome "What the result was."}
```

4. Save. That's it – everything below updates automatically:

| Where | What happens |
|---|---|
| Home page – Case Studies section | Shows the **3 newest** studies, newest first |
| `/case-studies` page | Lists **all** studies, newest first |
| `/case-studies/<slug>` | Detail page is created from the data |
| Detail page bottom | Previous / Next links follow the order in the file |

### How visitors reach case studies

- **Navbar / footer "Case Studies"** – scrolls to the Case Studies section on the home page (`id="case-studies"`), like the other menu items.
- **"View all case studies"** link under the cards – opens the `/case-studies` page with every study.
- **A card** – opens that study's page, `/case-studies/<slug>`.

### What appears on the card (automatic)

- **Gray tags** = the first 3 `:label`s from `:solution-points`. To change which tags show, reorder the points.
- **Green ⚡ chip** = only if `:highlight` is set. Small on the card, large in the detail page hero.
- **Card text** = the `:challenge`, cut to 2 lines.

### Text tips

- Special characters are fine: `–` `→` `↔` `×` `’`.
- Quotes inside text must be escaped: `"He said \"hello\""`.
- To make part of a bullet **bold**, use a hiccup vector instead of a string:
  ```clojure
  :text [:<> "scores with FDR and " [:strong "embedded links"] " to artifacts."]
  ```
- The home section intro paragraph (`case-studies-sec` in `pages/landing_page.cljs`) mentions the current 3 studies – review it when the newest 3 change.

---

## 3. Where things are

```
src/main/
  case_studies.cljs          case study content + helpers (latest, newest-first, find-by-slug, neighbours)
  router.cljs                routes; also sets body background per route
  core.cljs                  app root; passes the route match to every page: [view match]
  constants.cljs             shared constants (assets-url, email, security sections content)
  components/
    case_study_card.cljs     case study card + highlight-chip (⚡ chip)
    page_hero.cljs           hero banner (Security, Case Studies, Case Study pages)
    callout.cljs             highlighted box with left accent border (e.g. "Outcome")
    navbarx.cljs             navbar + mobile menu; footer shortcuts reuse its menu
    footer.cljs
  pages/
    landing_page.cljs        home (sections: about, capabilities, expertise, case studies, security)
    case_studies_page.cljs   /case-studies
    case_study_page.cljs     /case-studies/:slug
    security_page.cljs       /security
    batch_iq_page.cljs       /batch-iq
    not_found_page.cljs      404
src/input.css               Tailwind entry + custom CSS (animations, base styles)
public/                     static files served by dev server (index.html, assets/)
index.html, 404.html        production entry points (repo root, served by GitHub Pages)
```

### Reusable components

```clojure
[page-hero {:label "Security" :title "How We Do It?"} & extra-content]
;; title-only heroes shrink to fit; with extra content they keep a min height

[callout "Outcome" [:p "text"]]

[highlight-chip "10–50× faster" ["mt-4"]]                 ; large
[highlight-chip "10–50× faster" [] {:small? true}]        ; small (cards)
```

### Adding a new navbar item that scrolls to a home section

Add the name to `content-names` in `components/navbarx.cljs`. The section on the home page must have an `id` equal to the name lowercased with spaces turned into dashes, e.g. `"Case Studies"` → `id="case-studies"`. The footer "Shortcuts" list updates automatically.

---

## 4. Things the next developer should know

### Asset paths must be absolute
Pages live at nested URLs (`/case-studies/my-slug`), so relative paths break.
- Always build image URLs with `(str constants/assets-url "img/...")`.
- `assets-url` is `/assets/` in dev and `/public/assets/` in prod (set in `shadow-cljs.edn`).
- `public/index.html` uses `/assets/...` and `/js/main.js`.

### Refreshing a page on GitHub Pages
GitHub Pages has no server routing. Unknown URLs serve `404.html`, which loads the full app; the router then shows the right page. Keep `404.html` loading the app with absolute paths.

### Tailwind v4 gotchas (the project was upgraded from v3)
- `border` without a color uses the **text color** (often black). Always add a color: `border border-gray-300`.
- Buttons get `cursor: pointer` from a rule in `src/input.css` (`@layer base`).
- `z-1`, `z-2`, … now exist and work. Overlays with these can cover text that has no z-index.
- Tailwind scans source files for class names – build class names as full strings, never by concatenating parts.

### Body background
`router.cljs` (`set-body-bg!`) sets the page background on every navigation: dark on BatchIQ, white everywhere else.

### Background animation
`.animate-subtle-move` (`src/input.css`) slowly drifts `background-position` between 46% and 54%. Keep values inside 0–100% – values outside move the image off screen.

### Click handlers
Use `:on-click`, not `::on-click` (double colon creates a different keyword and the click silently does nothing).

### Git
Work on a feature branch, commit in small parts, open a PR into `main`.
