# personal-web

Single-page personal site built with [Astro](https://astro.build),
[React](https://react.dev) and [Tailwind CSS](https://tailwindcss.com).
Static output; the only JavaScript shipped is the theme toggle.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
```

| Command           | Action                             |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server               |
| `npm run build`   | Build the static site to `dist/`   |
| `npm run preview` | Serve the production build locally |
| `npm run check`   | Type-check Astro, TS and React     |

## Structure

```
public/
├─ favicon.svg
└─ robots.txt
src/
├─ assets/avatar.png       # your photo (optimized at build time)
├─ components/
│  ├─ project-item.astro   # one row in the list
│  └─ theme-toggle.tsx     # the only hydrated island (client:load)
├─ content/projects/       # empty — one markdown file per project
├─ layouts/base-layout.astro
├─ pages/
│  ├─ index.astro          # the whole page
│  └─ 404.astro
├─ styles/global.css       # Tailwind theme tokens + dark mode
├─ consts.ts               # name, meta, links
└─ content.config.ts       # project frontmatter schema (Zod)
```

## Filling it in

1. `src/consts.ts` — `SITE` fields and the `LINKS` array (the links row is
   hidden while the array is empty).
2. `src/pages/index.astro` — the `{/* TODO */}` intro paragraphs.
3. `astro.config.mjs` — `SITE_URL` for canonical and `og:url`.
4. `src/assets/avatar.png` — swap for your own image (update the `import` in
   `index.astro` if the extension changes). Astro resizes it and emits webp,
   so a large source file is fine.
5. `src/styles/global.css` — colour tokens under `@theme` (light) and `.dark`.

## Adding a project

Each markdown file in `src/content/projects/` becomes one row, sorted by
`order`. Only frontmatter is used — the body is ignored.

```markdown
---
title: Project name
description: One line, shown under the title.
icon: '⏱️' # emoji in the tile
category: Web app # free text
status: live # 'live' | 'building' | omit for none
url: https://example.com # optional, links the title
order: 1
---
```

Frontmatter is validated by the Zod schema in `src/content.config.ts`, so a
typo fails the build instead of shipping a broken row.

## Deploying

`npm run build` emits a static `dist/` — deploy to any static host with build
command `npm run build` and publish directory `dist`.

## Notes

- Until the first project exists, `astro build` logs `The collection "projects"
  does not exist or is empty` — expected, and the build still succeeds.
- Content is cached in `node_modules/.astro`; after deleting markdown files run
  `rm -rf node_modules/.astro` if stale rows persist.
- `overrides.satteri` in `package.json` pins the markdown processor to `0.10.3`
  because `0.10.4` has no published macOS arm64 native binding.
- TypeScript is pinned to v6 because `@astrojs/check` does not yet support v7.
