<!-- Copied guidance for AI coding agents working in this repo. Keep concise. -->

# AI Agent Instructions — sonuxt-and-tailwind

Purpose: quickly orient an AI coding assistant so it can be immediately productive editing, adding features, or fixing bugs in this Nuxt 4 + Tailwind starter.

* **Quick start (dev)**: install + prepare and run.
  + `pnpm install`
  + `pnpm dev` (runs `nuxt dev`)
  + `pnpm build` then `pnpm preview` to locally preview the production build
  + Note: `postinstall` runs `nuxt prepare` automatically. The project expects `node >= 25.1.0` and `pnpm >= 10.20.0`.

* **Big picture architecture**
  + Frontend: Nuxt 4 (Vite) + Vue 3 + TailwindCSS. Auto-imports and components are used heavily.
  + Server: Nitro-powered server runtime. Server-side handlers live under `server/` (see `server/api/*.ts` and `server/routes/**`).
  + Content: `@nuxt/content` is used; markdown pages live in `content/` (language folders like `content/en/` and `content/fr/`).
  + Routing: File-based routing in `pages/` and `app/`. Dynamic catch-all routes use `[...slug].vue` and the server has a corresponding `server/routes/raw/[...slug].md.get.ts` example.

* **Where to look for typical changes**
  + UI & layout: `app/`,           `layouts/`,  `components/` (`components/content/` for markdown-related components).
  + Content and docs: `content/en/` (and `content/fr/`). Use `@nuxt/content` queries or file edits.
  + Composables: helpers are in `composables/` and are auto-imported by Nuxt. Prefer adding small utilities here.
  + Server endpoints: `server/api/` (simple `eventHandler` exports) and `server/routes/` (custom route handlers). Example pattern:

```ts
  // server/api/example.ts
  export default eventHandler(async (event) => {
    // use getRouterParams(event), setHeader(event, ...), queryCollection(event, ...)
    return { ok: true }
  })

  // See `server/routes/raw/[...slug].md.get.ts` for a real example that uses `queryCollection` and `minimark/stringify` .
```

* **Project-specific conventions & gotchas**
  + Content-first: Documentation and pages are markdown-first; UI components in `components/content/` are used to render rich content. When changing docs, check both the markdown and any prose-components under `content/` that affect rendering.
  + i18n by directory: localized content is organized under language folders in `content/` (e.g.,           `content/en/`); code and pages will expect this structure.
  + Auto-imports: `composables/` functions, components and many Nuxt utilities are auto-imported. When adding a new composable, name and export it as a default or named export consistent with existing files.
  + Types: shared ambient types are in `shared/types/index.d.ts` — use them for type-aware edits and when adding new runtime data shapes.
  + Node engine requirement: many contributors run with a recent Node.js — verify CI/dev machine uses Node >= 25.1.0; otherwise local `pnpm` installs can fail.

* **Common code patterns to mirror**
  + Server handler: `export default eventHandler(async (event) => { ... })` and use `getRouterParams(event)` for dynamic segments.
  + Querying content in server code: `queryCollection(event, 'docs').path('/some/path').first()` (see `server/routes/raw/...`).
  + Adding a public API: put small route handlers in `server/api/` and larger/custom routes in `server/routes/`.

* **Developer workflows & commands**
  + Install: `pnpm install` (runs `nuxt prepare` via `postinstall`).
  + Dev: `pnpm dev`
  + Build: `pnpm build` ; preview: `pnpm preview`
  + Typecheck: `pnpm typecheck` (runs `nuxt typecheck`)
  + Lint: `pnpm lint` and auto-fix with `pnpm lint:fix`; format checks with `pnpm prettier`.

* **When making changes**
  + For UI changes, update `components/` and the relevant `layouts/` or `pages/` file. Confirm the component is registered or auto-imported.
  + For content changes, edit `content/*` and check `components/content/` for any custom renderers.
  + For API changes, add or update files in `server/api/` or `server/routes/`. Maintain the `eventHandler` pattern and return serializable objects.
  + If you add dependencies, ensure `package.json` engines and `pnpm` constraints remain compatible.

* **References (examples in repo)**
  + `server/routes/raw/[...slug].md.get.ts` — markdown fetch + stringify example
  + `server/api/notifications.ts` — `eventHandler` returning a JSON array
  + `content/en/docs/` — example docs layout and doc-level organization
  + `shared/types/index.d.ts` — repo-wide ambient types

* **Context Documentation** - The following official documentation sites are useful context for working in this Nuxt 4 + Tailwind starter:
  + `https://nuxt.com/docs/4.x`: Nuxt 4 official documentation (core framework and concepts).
  + `https://tailwindcss.com/docs`: Tailwind CSS documentation (utility classes, config, plugins).
  + `https://ui.nuxt.com/docs`: `@nuxy/ui` component library documentation.
  + `https://content.nuxt.com/docs`: `@nuxt/content` documentation for content queries and markdown handling.
  + `https://i18n.nuxtjs.org/docs`: `@nuxtjs/i18n` documentation (localization and route/language patterns).
  + `https://ai-sdk.dev`: AI SDK documentation (AI integrations and composables).
