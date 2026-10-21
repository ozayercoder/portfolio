# Ozayer — Portfolio

A single-page developer portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **React 19**. Fully static, dark-themed, with scroll-reveal animations, a scroll-spy navbar, and complete SEO setup.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build (fully static)
npm start        # serve the production build
```

## Customizing content

**Everything you see is driven by one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Edit the values in it — name, role, email, social links, skills, projects, and experience — and the whole site updates. Entries marked with `TODO` comments are placeholders; swap them for your real information (email, résumé link, GitHub URLs, location, etc.).

You'll also want to update two small things:

1. [`src/data/portfolio.ts`](src/data/portfolio.ts) → `siteConfig.siteUrl` — set your deployed URL (used by the sitemap, robots, and metadata).
2. Images in `src/assets/` — replace the portrait and logo with your own (keep the same filenames or update their imports).

## Project structure

```
src/
├── app/                  # App Router
│   ├── layout.tsx        # fonts, metadata, SEO
│   ├── page.tsx          # assembles the sections
│   ├── globals.css       # theme tokens + shared styles
│   ├── icon.tsx          # generated favicon
│   ├── opengraph-image.tsx
│   ├── robots.ts / sitemap.ts
├── components/           # one file per section + shared UI
│   ├── Navbar.tsx        # sticky nav w/ scroll-spy + mobile menu
│   ├── Reveal.tsx        # scroll reveal animation wrapper
│   └── ...
├── data/portfolio.ts     # ★ all site content lives here
└── assets/               # images (statically imported for optimization)
```
