# International Journal of Rural Health and Medicine (IJRHM)

**Academic Journal Website — React 18 + TypeScript + Vite + Tailwind CSS**

A complete, production-ready academic journal website built for Amaltas University, modelled after SAGE Journals with a distinctive "Oxford Press Meets Digital India" design aesthetic.

---

## ✦ Design Philosophy

| Token | Value |
|---|---|
| Primary (Navy) | `#141f5c` |
| Accent (Gold) | `#d4a828` |
| Secondary (Maroon) | `#8b1a1a` |
| Background (Cream) | `#FAF8F3` |
| Heading Font | Playfair Display (serif) |
| Body Font | Lora (serif) |
| UI Font | DM Sans (sans-serif) |

---

## 📁 Project Structure

```
amaltas-journal/
├── index.html                      # Entry HTML, meta/OG tags, Google Fonts
├── package.json
├── vite.config.ts                  # @ alias → src/
├── tsconfig.json / tsconfig.node.json
├── tailwind.config.js              # Custom navy/gold/maroon scales + fonts
├── postcss.config.js
└── src/
    ├── main.tsx                    # React root
    ├── App.tsx                     # React Router v6, all routes
    ├── index.css                   # Tailwind + custom CSS (grain, gold-rule, animations)
    ├── types/
    │   └── index.ts                # All TypeScript interfaces
    ├── data/
    │   ├── articles.ts             # 10 articles + helper functions
    │   ├── issues.ts               # 10 issues (Vol 12–14) + helpers
    │   └── editorialBoard.ts       # 12 board members
    ├── utils/
    │   └── helpers.ts              # formatDate, articleTypeLabel, truncateText, etc.
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx          # Sticky, dropdown, mobile hamburger, search toggle
    │   │   ├── Footer.tsx          # 4-column academic footer
    │   │   └── Layout.tsx          # Scroll-to-top + Outlet wrapper
    │   ├── ui/
    │   │   ├── Badge.tsx           # navy/gold/green/maroon variants
    │   │   ├── Button.tsx          # primary/secondary/ghost/gold/outline-white
    │   │   └── SearchBar.tsx       # onDark prop, navigates to /search
    │   ├── home/
    │   │   ├── HeroSection.tsx     # Navy+grain hero, ISSN chips, dual CTAs
    │   │   ├── JournalMetrics.tsx  # 6-metric strip (IF, CiteScore, H-Index…)
    │   │   ├── FeaturedArticles.tsx
    │   │   ├── LatestIssueSection.tsx
    │   │   ├── MostRead.tsx
    │   │   └── CallToAction.tsx
    │   └── articles/
    │       ├── ArticleCard.tsx     # default / compact / horizontal variants
    │       └── CitationBox.tsx     # APA / MLA / Chicago / BibTeX tabs + copy
    └── pages/
        ├── HomePage.tsx
        ├── ArchivesPage.tsx        # Year/volume sidebar + issue article list
        ├── ArticleDetailPage.tsx   # Full article view, metrics, citation, share
        ├── AboutPage.tsx           # Aims & Scope, Peer Review, OA Policy, Ethics, Indexing
        ├── SubmitPage.tsx          # Author guidelines + submission form + FAQ
        ├── EditorialBoardPage.tsx  # Grouped by role, member cards with expertise
        ├── SearchPage.tsx          # Search + filters (type, year, access, section)
        └── ContactPage.tsx         # Contact cards, office info, contact form
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Installation

```bash
# 1. Unzip and enter directory
unzip amaltas-journal.zip
cd amaltas-journal

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
npm run preview  # preview production build locally
```

---

## 🔌 Converting to Dynamic (API-Ready Architecture)

The project is architected for a clean static → dynamic migration. **Only the data layer files need to change.**

### Step 1 — Replace data functions in `src/data/`

Each file exposes named functions that return data synchronously. Swap these to async API calls:

```ts
// BEFORE (static)
export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

// AFTER (dynamic — e.g. Supabase / Node.js / Firebase)
export async function getArticleById(id: string): Promise<Article | undefined> {
  const res = await fetch(`/api/articles/${id}`);
  if (!res.ok) return undefined;
  const json = await res.json();
  return json.data as Article;
}
```

### Step 2 — Update page components to use async data

Replace direct function calls with `useEffect` + `useState`, or adopt a data-fetching library:

```ts
// Recommended: TanStack Query (React Query)
npm install @tanstack/react-query

const { data: article, isLoading } = useQuery({
  queryKey: ['article', id],
  queryFn: () => getArticleById(id!),
});
```

### Recommended Backend Options

| Backend | Best For |
|---|---|
| **Supabase** | Easiest migration — PostgreSQL + REST/GraphQL + Auth + Storage |
| **Node.js + Express + PostgreSQL** | Full control, on-premise deployment |
| **Firebase** | Realtime features, quick prototyping |
| **Directus** | Headless CMS over existing DB |

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3 | Core framework |
| `react-dom` | ^18.3 | DOM rendering |
| `react-router-dom` | ^6 | Client-side routing |
| `lucide-react` | ^0.383 | Icons |
| `clsx` | ^2 | Conditional classnames |
| `tailwindcss` | ^3.4 | Utility CSS |
| `@vitejs/plugin-react` | ^4 | Vite + React fast refresh |
| `typescript` | ^5.4 | Type safety |

---

## 🎨 Tailwind Custom Configuration

Key additions in `tailwind.config.js`:

- **Colors**: `navy` (50–950), `gold` (50–600), `maroon` (50–900) — all custom scales
- **Font Families**: `playfair`, `lora`, `dm-sans`
- **Shadows**: `card`, `card-hover`, `nav` — academic card shadow system
- **Animations**: `fade-in-up`, `nav-dropdown` for micro-interactions

---

## 🌐 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | HomePage | Hero, metrics, featured, latest issue, most-read |
| `/issues` | ArchivesPage | Year/volume/issue browser |
| `/article/:id` | ArticleDetailPage | Full article, abstract, citation box |
| `/about` | AboutPage | Aims & scope, peer review, OA policy, ethics, indexing |
| `/submit` | SubmitPage | Author guidelines, types, submission form, FAQ |
| `/editorial-board` | EditorialBoardPage | All editors grouped by role |
| `/search` | SearchPage | Full-text search + multi-filter sidebar |
| `/contact` | ContactPage | Contact cards, resources, message form |

---

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Semantic HTML throughout (`<main>`, `<nav>`, `<article>`, `<aside>`, `<section>`)
- `focus-visible` ring styles in `index.css`
- `aria-label` on all icon-only buttons
- `aria-expanded` / `aria-controls` on Navbar dropdowns and mobile menu
- Color contrast ratios ≥ 4.5:1 for all text

---

## 📈 SEO

- `<title>` set per-page via `document.title` in `useEffect`
- Open Graph and Twitter Card meta in `index.html`
- Canonical URL, ISSN, journal schema in head
- Semantic headings (`h1` → `h2` → `h3` hierarchy on all pages)
- DOI links with `rel="noopener noreferrer"`

---

## 🔮 Recommended Next Steps

1. **Add TanStack Query** for data fetching, caching, and loading states
2. **Connect Supabase** — articles, issues, and board members map 1:1 to tables
3. **Add CMS** (Directus or Sanity) for editorial team to manage content without code
4. **PDF Viewer** — embed PDF.js for in-browser article reading
5. **Email Subscriptions** — connect form to Mailchimp / Resend API
6. **Analytics** — add Google Scholar badge widgets, Altmetric donut badges
7. **i18n** — add Hindi language support with `react-i18next`
8. **PWA** — add service worker for offline access to recently viewed articles

---

## 📄 Licence

This project code is provided for Amaltas University's internal use. Journal content is published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

---

*Built with precision for Amaltas University — where research meets impact.*
