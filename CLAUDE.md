# Portfolio

One-page Next.js site for Fouzia Bakrim.

## Commands

- `pnpm dev` starts the local site with Turbopack
- `pnpm build` creates the production build
- `pnpm start` serves that build
- `pnpm lint` and `pnpm lint:fix` run ESLint
- `pnpm prettier` and `pnpm prettier:check` run Prettier
- `pnpm type:check` runs TypeScript

Node 24 or newer is required. The package manager is pnpm.

## Structure

- `app/` holds the page, the shared layout, the 404 page, and the SEO files
- `components/` holds one file per section
- `css/tailwind.css` holds the theme, animations, and the few rules utilities cannot express
- `data/index.ts` holds all site content
- `assets/portrait.png` is the portrait

## Content

Change copy, links, projects, jobs, education, and skills in `data/index.ts`. Do not hard-code that text in components. `siteConfig.url` is still `https://TODO` until the live address is known. Replace it after the first deploy so the share tags, sitemap, and robots file point at the real site.
