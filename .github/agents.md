# AI Agent Instructions — sonuxt-and-tailwind

Purpose: quickly orient an AI coding assistant so it can be immediately productive editing, adding features, or fixing bugs.

* **Big picture architecture**
  + Nuxt 4 application using the `app/` directory entrypoint (`app.vue`,     `app.config.ts`) with file‑system routing from `pages/` (dynamic routes: `[slug].vue`, catch‑alls: `[...slug].vue`).
  + Content via `@nuxt/content` with multilingual markdown/YAML stored under `content/<locale>/` (English `en/`, French `fr/`). Numbered filenames control ordering.
  + Internationalization handled by `@nuxtjs/i18n`; JSON locale messages in `i18n/locales/`; language switch through `LocaleSelect.vue` and route middleware.
  + Styling: Tailwind CSS (utility‑first) with theme variables & palettes in `assets/css/` (`colors.css`,     `themes.css`,     `main.css`).
  + Shared config & types: `shared/` (utilities, environment), global declarations in `types/index.d.ts`.
  + State & logic encapsulated in composables (`app/composables/`): navigation, search, header/footer, language helpers.
  + Components grouped by domain: general UI (`components/`), content blocks (`components/content`), social/SEO images (`components/OgImage/`), theming (`ThemePicker.vue`).
  + Layout scoping (`layouts/`): `default.vue`,     `docs.vue`,     `auth.vue`, etc. for route‑level wrappers.
  + Tooling: PNPM, ESLint, Prettier, strict TS config; aims for a lean multilingual SaaS/docs/blog starter.

* **When making changes**
  + Keep commits/patches atomic; one concern per diff.
  + Always update both locales; if translation unavailable, duplicate English and mark `TODO: translate` at top.
  + Preserve numeric ordering in content filenames; only renumber intentionally and adjust related indices.
  + Run lint & type checks before completion: `pnpm run lint`;  `pnpm run typecheck` (add script if missing).
  + Validate dark/light themes, responsive breakpoints, and a11y (focus order, alt text, semantic headings) for UI changes.
  + Update composables (`useNavigation.ts`,     `useHeader.ts`,     `useFooter.ts`) when altering structural nav/footer/header items.
  + Reflect environment changes in `shared/environment.ts`; avoid ad‑hoc env access.
  + Confirm before large refactors; default to minimal surface edits.
  + Keep markdown frontmatter consistent; add new fields to all localized copies.

* **Where to look for typical changes**
  + Routes/pages: `pages/` and matching layout in `layouts/`.
  + UI components: `components/` (+ `assets/images/` for static assets).
  + Content edits: `content/<locale>/` (docs, blog, changelog) ensuring parity.
  + Theme & design tokens: `assets/css/`.
  + Reusable logic/state: `app/composables/`.
  + SEO/meta images: `components/OgImage/`.
  + Types & env: `shared/types/`,  `shared/environment.ts`, global `types/index.d.ts`.
  + i18n messages: `i18n/locales/*.json`.

* **Project-specific conventions**
  + Components: PascalCase filenames;  `<script setup lang="ts">` preferred; one responsibility per SFC.
  + Composables: `useX.ts` naming; return explicit refs/computeds; avoid side effects on import.
  + Content ordering: numeric prefixes (e.g. `1.index.md`) define list order; keep stable for links/bookmarks.
  + Strings: no hardcoded user‑visible text—use i18n or content.
  + Styling: prefer Tailwind utilities; avoid custom CSS unless extracting patterns or tokens; use configured color vars.
  + Commit convention: Conventional Commits (`feat:`,     `fix:`,     `docs:`,     `refactor:`,     `chore:`,     `style:`).
  + Accessibility baseline: landmarks (`<header>`,     `<main>`,     `<footer>`), alt text, focus states, contrast adherence.
  + Avoid large component templates; extract logic if complexity grows.

* **Common code standards to follow**
  + Use Composition API exclusively; avoid Options API.
  + Define return types for non‑trivial composables; eliminate `any`.
  + Prefer computed over watchers; watchers only for side effects.
  + Keep reactive state localized; avoid global singletons outside Nuxt runtime config.
  + Tailwind classes grouped logically (layout → spacing → typography → color → state); avoid duplicates.
  + Performance: lazy load heavy/ClientOnly components; optimize large images; minimize blocking JS.
  + Error handling: dev—throw early; prod—user friendly fallback via `error.vue`.
  + Security: never log secrets; use runtime config; sanitize user input if any dynamic extension added.
  + Testing focus (if added): composables and content transformations before UI.
  + Maintain accessibility & multi‑locale consistency for all new features.

* **Agent Operating Rules**
  + Avoid wasting tokens: read only necessary files; targeted searches over full dumps.
  + Default to concise answers; expand only when user requests more detail.
  + Use `apply_patch` for edits; never invent paths; keep diffs minimal.
  + Confirm intent before broad refactors or dependency additions.
  + Maintain existing style & formatting; no gratuitous rearranging.
  + Cite official docs below for framework specifics; avoid guessing.
  + No secrets or credentials exposure; treat env config as sensitive.
  + Provide aggregated patches rather than noisy micro‑diffs unless user asks.
  + Justify any new dependency; prefer native Nuxt/Vue/Tailwind solutions.
  + Keep translation parity; mark placeholders clearly (`TODO: translate`).
  + Clarify assumptions instead of guessing when ambiguity exists.
  + Avoid unnecessary verbosity; do not restate unchanged plans.
  + Only run tests/lint relevant to changes; avoid full scans unless needed.

* **Context Documentation** - The following official documentation sites are useful context for working in this repository:
  + `https://nuxt.com/docs/4.x`: Nuxt 4 official documentation (core framework and concepts).
  + `https://tailwindcss.com/docs`: Tailwind CSS documentation (utility classes, config, plugins).
  + `https://ui.nuxt.com/docs`: `@nuxy/ui` component library documentation.
  + `https://content.nuxt.com/docs`: `@nuxt/content` documentation for content queries and markdown handling.
  + `https://i18n.nuxtjs.org/docs`: `@nuxtjs/i18n` documentation (localization and route/language patterns).
  + `https://ai-sdk.dev`: AI SDK documentation (AI integrations and composables).
