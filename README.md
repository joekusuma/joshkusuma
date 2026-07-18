# AXIOM — Josh Bennett Kusuma · Portfolio

A portfolio site built in [Astro](https://astro.build). Design direction: a "living technical drawing" — the work is presented like a design dossier (spec sheets, drafting marks, monospace annotations). Fully responsive, image-optimized, with an interactive 3D viewer for the printed projects.

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # outputs the static site to dist/
npm run preview  # preview the built site
```

Node 18+ recommended.

## Deploy

The build in `dist/` is a plain static site — host it anywhere.

- **Netlify / Vercel / Cloudflare Pages:** connect the repo (build command `npm run build`, output `dist`), or drag-and-drop the `dist/` folder.
- **GitHub Pages (project site at `/repo-name/`):** set the base path in `astro.config.mjs`:
  ```js
  export default defineConfig({ base: '/your-repo-name', /* ...keep the rest */ });
  ```
  Root-domain hosts don't need this.

## Editing content

Almost everything lives in one file: **`src/data/projects.js`**.

- **Text** — edit each project's `title`, `tagline`, `blurb`, `summary` (array of paragraphs), and `specs` (rows shown in the spec sheet).
- **Years** — the `year` on each project is an estimate where the source art wasn't dated. Adjust to the real dates.
- **Images** — drop a `.webp` into `src/assets/projects/` and reference it by filename (no extension) in `hero`, `gallery`, or `partsGallery`. Astro auto-generates responsive sizes at build.
- **Add a project** — copy an existing object in the `projects` array, give it a unique `slug`, and it appears automatically on the home index, the projects page, and its own detail page.
- **Featured** — `featured: true` puts a project in the home shuffling preview and the canvas gallery.

## 3D projects

Set `is3d: true` and list `models` (`{ name, file }`) — the files are STLs in `public/models/`. The viewer (`src/components/StlViewer.astro`, Three.js) fetches them at runtime and lets visitors orbit/zoom. The full source files are offered as a download from `public/downloads/` via each project's `download` field.

## Structure

```
src/
  data/projects.js      ← all project content (edit here)
  pages/                ← routes (index, about, projects, skills, contact)
  components/           ← Nav, ShuffleCanvas, StlViewer
  layouts/Base.astro    ← shared shell (fonts, nav, footer, meta)
  styles/global.css     ← design tokens + base styles
  assets/projects/      ← source images (.webp)
public/
  models/               ← STL files for the 3D viewer
  downloads/            ← zipped source files offered on project pages
```

## Notes

- Type: Work Sans + JetBrains Mono (self-hosted via `@fontsource-variable`).
- All raster art is WebP; Astro emits responsive variants per breakpoint.
- Respects `prefers-reduced-motion` (shuffle + 3D auto-rotate pause).
