# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, default port 5173)
npm run build      # Type-check then bundle (tsc && vite build)
npm run preview    # Preview production build locally
```

There is no linter and no test runner configured.

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + React Router v6. No backend — all data is static TypeScript.

### Routing

All routes are nested under a single `Layout` component (`src/components/layout/Layout.tsx`) which renders `Navbar` + `<Outlet>` + `Footer`. Routes are defined in `src/App.tsx`:

| Path | Component |
|---|---|
| `/` | `HomePage` |
| `/issues` | `ArchivesPage` |
| `/article/:id` | `ArticleDetailPage` |
| `/about` | `AboutPage` |
| `/submit` | `SubmitPage` |
| `/editorial-board` | `EditorialBoardPage` |
| `/search` | `SearchPage` |
| `/contact` | `ContactPage` |

### Data Layer

All content lives in three static files — no API calls anywhere:

- **`src/data/articles.ts`** — array of `Article` objects with full metadata, citations (APA/MLA/Chicago/BibTeX), and search helpers. Article `id` fields (e.g., `ijrhm-2025-v14i2-001`) are used directly as URL slugs in `/article/:id`.
- **`src/data/issues.ts`** — array of `JournalIssue` objects. Each issue contains an `articleIds` array that must reference IDs matching those in `articles.ts`. **Keep these in sync** when adding or renaming articles.
- **`src/data/editorialBoard.ts`** — array of `EditorialBoardMember` objects.

All TypeScript interfaces are in `src/types/index.ts`.

### Styling

Tailwind with a custom theme (see `tailwind.config.js`). Custom colour palettes: `navy`, `gold`, `maroon`, plus named backgrounds `cream` (`#FAF8F3`) and `parchment` (`#F5F0E8`).

Three semantic font families used throughout:
- `font-display` / `font-playfair` — Playfair Display (headings, article titles)
- `font-body` / `font-lora` — Lora (abstract text, body prose)
- `font-ui` — DM Sans (labels, navigation, UI chrome)

Global CSS utility classes defined in `src/index.css` (not Tailwind utilities):
- `.gold-rule` — decorative gold horizontal bar
- `.section-label` — small-caps gold label above section headings
- `.card-border-anim` — card with animated left gold border on hover
- `.grain-overlay` — subtle noise texture via `::after` pseudo-element
- `.announce-bar` — navy top announcement bar in Navbar

### Path Alias

`@` maps to `src/` (configured in `vite.config.ts`). Use `@/components/...`, `@/data/...`, etc.

### Page Titles

Most pages set `document.title` imperatively inside a `useEffect`. `HomePage` and `ArchivesPage` use a `<title>` tag directly in JSX instead. The pattern for all titles is `"Page Name — IJRHM"` or `"Full Journal Name | Home"`.

### `ArticleCard` Variants

`ArticleCard` accepts a `variant` prop: `"default"` (full card with abstract), `"compact"` (minimal list row), `"horizontal"` (used in search results and related articles).
