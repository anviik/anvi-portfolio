# Anvi Kudaraya — Portfolio

A single-page React + Vite personal portfolio with an editorial, single-scroll layout,
scroll-driven animations, brand logos, and dark mode. Pure CSS, no UI framework or animation library.

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
experience, projects, blog posts, and contact links.

- **Project art:** add `image: '/projects/shot.png'` to a project to replace its monogram panel.
- **Organization logos:** on an experience entry, set `logo` to a file in [`public/logos/`](public/logos).
  Entries with only `mono` show typeset letters until a real logo is added.

## Deploy

Hosted on Vercel (framework preset: **Vite**, build `npm run build`, output `dist`).
Pushes to `main` trigger an automatic deploy.
