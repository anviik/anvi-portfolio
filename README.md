# Anvi Kudaraya — Portfolio

A single-page React + Vite personal portfolio with a pastel "constellation" landing page,
glassmorphism UI, dark mode, and a hover/tap project carousel. Pure CSS, no UI framework.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Editing content

All personal content lives in [`src/siteData.js`](src/siteData.js) — bio, skills,
experience, projects, accomplishments, and contact links. Project thumbnails live in
[`public/projects/`](public/projects) (swap the placeholder SVGs for real screenshots).

## Deploy

Hosted on Vercel (framework preset: **Vite**, build `npm run build`, output `dist`).
Pushes to `main` trigger an automatic deploy.
