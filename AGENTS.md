<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Single-page Next.js 16.4.2 portfolio (App Router). `src/app/page.tsx` composes section components from `src/components/`. The root layout mounts global client components (`Cursor`, `IntroAnimation`).

- **All site content** (site config, nav, projects, skills, experience) lives in `src/data/portfolio.ts` — edit that file, not the components. Project images are static imports from `src/assets/`.
- Path alias `@/*` → `./src/*`.
- Deployed on Vercel. No env vars are used.

## Commands

```bash
npm run dev          # dev server (Turbopack)
npm run lint         # ESLint flat config
npx tsc --noEmit     # typecheck (no npm script exists for this)
npm run build        # production build
```

There is **no test suite and no CI**. Verify changes with: `npm run lint && npx tsc --noEmit && npm run build`.

The build may stop once with a Next.js security-upgrade nudge; re-run `npm run build` to continue.

## Conventions & quirks

- **Tailwind CSS v4 only**: `@import "tailwindcss"` in `src/app/globals.css`, processed by the `@tailwindcss/turbopack` loader rule in `next.config.ts`. There is no postcss config or `tailwind.config` — don't add them, and don't use v3 `@tailwind` directives.
- **React Compiler is enabled** (`reactCompiler: true`): components must be pure during render — no prop/state mutation or side effects in render bodies.
- **Lint enforces `react-hooks/set-state-in-effect`** (error): never call `setState` synchronously in an effect body — schedule it in a callback (`setTimeout`, `requestAnimationFrame`, event handler).
- Components are **Server Components by default**; add `"use client"` only when using hooks or browser APIs (existing: Navbar, ThemeToggle, Cursor, Reveal, CopyEmailButton, IntroAnimation).
- **Session intro**: `src/components/IntroAnimation.tsx` plays a ~2.2s logo reveal once per session. An inline pre-paint script in `layout.tsx` adds `html.intro-pending` (static cover) before hydration; the component removes it, locks scroll via `html.intro-lock`, and sets the `intro-seen` sessionStorage key **on finish**. If you edit one side, keep the script, CSS classes, and component in sync.
- **Logo**: `src/app/favicon.ico` is byte-identical (PNG, 502×497 RGBA) to `src/assets/Ozayer-removebg-preview.png` — import the `.png`, never edit the favicon. Site-wide it is displayed with `.logo-mark { filter: invert(1) }` for the dark theme; the intro instead masks it with a gradient (no filters).
- **Theming**: dark is default (`#05060d`); an inline script sets `html.light` before first paint from `localStorage`. Colors are CSS vars in `:root` / `html.light` mapped through `@theme inline` — swap vars, don't hardcode.
- The `README.md` tech list is stale (mentions DaisyUI, React Router, React Toastify — none are installed). Trust `package.json`.
