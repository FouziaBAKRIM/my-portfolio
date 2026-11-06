# Prompt: Convert an HTML portfolio to Next.js

Open a coding agent in the folder containing the HTML file, then paste everything below the line.

---

Convert the portfolio HTML file in this folder into a production-ready Next.js site.

**The result must look and behave exactly like the HTML file.** This is a migration, not a redesign. Do not change the layout, copy, colors, fonts, spacing, sizes, shadows, breakpoints, or animations. Do not add sections, pages, or a blog. The only intended differences are in the underlying code, performance, and SEO.

## 1. Before writing code

Read the whole HTML file, including its `<head>`, `<style>` and `<script>` tags, and any linked local files. Then list:

- Sections, navigation links, and all content
- Colors, fonts, custom breakpoints, and any Tailwind config
- Whether it uses Tailwind (and which version), plain CSS, or both
- Interactions: dark mode, mobile menu, tabs, forms, animations, and so on
- Images and other assets, local or remote
- Analytics and other third-party scripts

I am a beginner, so use plain language in your questions and reports, and explain any technical term you need to use. When something requires action from me, give exact steps and the exact commands to run.

Ask me only for what the file cannot answer, in one message. Expect to need the site's URL. If I don't have a domain yet, use a `TODO` for `siteConfig.url` and tell me to replace it with my Vercel address after the first deploy, because the SEO tags depend on it. Never invent facts such as a domain, job title, location, social link, or analytics ID. If I don't have a value, leave a `TODO` in `data/index.ts` and include it in your final report.

## 2. Stack

- Next.js with the App Router and Turbopack
- React
- TypeScript in strict mode
- Tailwind CSS 4 or newer, configured in CSS with no `tailwind.config.ts`
- pnpm and Node 24 or later
- ESLint flat config, Prettier, Husky, and lint-staged

**Use the latest stable version of every package.** Install with `pnpm add <package>@latest` and `pnpm add -D <package>@latest` instead of writing version numbers by hand or relying on memory. Never choose an older version unless the latest has a peer dependency conflict, such as `typescript-eslint` not yet supporting the newest TypeScript. If that happens, use the newest version that works and tell me why. The config examples below show the intended setup. If a latest version has changed an API or option, follow its current documentation.

Check that Node and pnpm are installed before starting. If either is missing or too old, walk me through installing it.

Runtime dependencies are `next`, `react`, `react-dom`, `clsx`, and `tailwind-merge`. Add `next-themes` only if the HTML has a theme toggle. Do not add a UI kit, animation library, MDX, or a CMS unless the HTML already depends on the library. Keep any dependency the original relies on only if rewriting it would change the behavior.

Create the files by hand. `create-next-app` can refuse to run in a folder that already has files. Leave the original HTML file in place as the reference, and add it to `.prettierignore`.

## 3. Project structure

```text
app/
  layout.tsx             fonts, metadata, viewport, html/body
  page.tsx               composes the sections, JSON-LD
  not-found.tsx          styled to match the site
  robots.ts
  sitemap.ts
  opengraph-image.*      1200x630
  icon.*                 favicon
components/              one file per section or repeated UI element
  icons.tsx              inline SVGs from the HTML
css/tailwind.css         @theme, keyframes, the few rules utilities can't express
data/index.ts            all site content (.tsx only if it holds JSX)
lib/utils.ts             cn()
types/index.ts           shared content types
public/                  images and static files
```

Create a route only for a page that exists in the HTML. A one-page site with anchor links stays one page, with the same anchors. Add a file only if something uses it.

## 4. Code practices

**Separate content from markup.** Store all content in typed exports in `data/index.ts`, such as `siteConfig`, `profile`, `navLinks`, `projects`, `experience`, and `skills`. Include only the groups the HTML has. Components render by mapping over this data, so changing content never requires editing a component.

`siteConfig` is the single source for the title, URL, description, language, and author. Metadata, the sitemap, robots, and JSON-LD all read from it.

**Default to Server Components.** Use `'use client'` only on the smallest component that needs state or browser APIs, such as a menu toggle. `app/page.tsx` stays a Server Component.

**Keep it simple.** Avoid speculative abstractions, config for values that never change, and wrapper components with a single use.

- Use the alias `@/*` for the repo root.
- Use `cn()` for conditional classes:

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 5. Porting the UI to Tailwind 4

Move all styling into Tailwind utilities, with no `<style>` blocks or inline styles left, except values that must be computed at runtime. Use the exact original values.

- **Theme:** put every custom color, font, shadow, radius, and breakpoint in `@theme` in `css/tailwind.css`, with the same values. Don't round or swap them for near-matches. Use arbitrary values such as `max-w-[37rem]` for one-offs.
- **Base setup:**

```css
@import 'tailwindcss';

/* Only if the HTML has class-based dark mode */
@custom-variant dark (&:is(.dark *));

@theme {
  --font-sans: var(--font-body), ui-sans-serif, system-ui, sans-serif;
  /* Original colors, fonts, and breakpoints */
}
```

- **Fonts:** load the same families, weights, and styles through `next/font`, exposed as CSS variables, and remove the font `<link>` tags.
- **Keyframes and animations:** keep the same names, timing, and easing, with keyframes in `css/tailwind.css`.
- **Scripts:** rewrite inline JS as React or CSS, with the same behavior. Prefer CSS where it can do the same thing.
- **Forms:** keep any working endpoint. If a form has no real backend, keep the UI, don't build one, and flag it in your report.

**If the source uses Tailwind 3 or the CDN build,** class names can look the same but render differently in v4. Check every use of these:

| v3 | v4 equivalent |
| --- | --- |
| `border`, `divide-*` with no color (gray default) | add the v3 gray explicitly, `border-gray-200` |
| `ring` (3px, blue) | `ring-3 ring-blue-500/50` |
| `shadow-sm`, `shadow` | `shadow-xs`, `shadow-sm` |
| `drop-shadow-sm`, `drop-shadow` | `drop-shadow-xs`, `drop-shadow-sm` |
| `blur-sm`, `blur` | `blur-xs`, `blur-sm` |
| `backdrop-blur-sm`, `backdrop-blur` | `backdrop-blur-xs`, `backdrop-blur-sm` |
| `rounded-sm`, `rounded` | `rounded-xs`, `rounded-sm` |
| `outline-none` | `outline-hidden` |
| `bg-opacity-*`, `text-opacity-*`, etc. | color modifiers, such as `bg-black/50` |
| `flex-shrink-*`, `flex-grow-*` | `shrink-*`, `grow-*` |
| `bg-[--x]` | `bg-(--x)` |
| Buttons (`cursor: pointer` by default) | add `cursor-pointer` where the original shows it |
| Placeholders (gray-400 by default) | set the color explicitly |

Also replicate the v3 default `hover:` behavior: v4 applies hover only on devices that support it. Copy any inline `tailwind.config` values into `@theme`.

## 6. Images

- Move local images to `public/`. Download remote images you can legally self-host, otherwise allow their host in `images.remotePatterns`.
- Use `next/image` with the same rendered size and crop. Give it `width` and `height`, or `fill` with `sizes`.
- Use `preload` on the above-the-fold (LCP) image only.
- Use static imports with `placeholder="blur"` for large photos where the placeholder doesn't change the design.
- Write descriptive `alt` text for meaningful images, and `alt=""` for decorative ones.

## 7. SEO

**Metadata** in `app/layout.tsx`:

```ts
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.title}` },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.title,
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};
```

- Base the title (about 60 characters or fewer) and description (about 150-160 characters) on the HTML's actual content, without keyword stuffing. These may be new, but mention them in your report.
- Set `locale` and `<html lang>` to match the site's language.
- If you add more routes, each one needs its own title, description, and canonical URL.

**Crawling:**

```ts
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

// app/sitemap.ts: list only routes that really exist
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteConfig.url }];
}
```

**Structured data:** add `Person` JSON-LD in `app/page.tsx`, built from `data/index.ts`. Include only facts present in the HTML or confirmed by me. Escape `<` so content can't break out of the script tag:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      url: siteConfig.url,
      image: `${siteConfig.url}${profile.image}`,
      jobTitle: profile.jobTitle,
      sameAs: profile.socials.map((s) => s.href),
    }).replace(/</g, '\\u003c'),
  }}
/>
```

**Markup:** these changes must not alter the appearance. Change the tag and keep the same visual classes.

- One `<h1>`, with headings in logical order
- `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` where they fit
- Real `<a>` for links, using `next/link` internally, and real `<button>` for actions
- `aria-label` on icon-only links and buttons
- `rel="noopener noreferrer"` on links that open a new tab
- Visible keyboard focus

**Rendering and motion:**

- The page must be statically prerendered, with all content in the HTML response. Never fetch or hide primary content behind client-side JS.
- Animations must not leave content invisible if JS fails or hasn't loaded. Prefer CSS animations that start on first paint.
- Disable non-essential animation under `prefers-reduced-motion`. Other visitors must still see the original motion.

**Performance:** avoid layout shift, and load third-party scripts with `next/script` or `@next/third-parties`. Keep analytics only if the HTML already has them, with the ID in an environment variable.

## 8. Tooling

`package.json` scripts:

```json
{
  "packageManager": "pnpm@<installed version>",
  "engines": { "node": ">=24" },
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "prettier": "prettier --write .",
    "prettier:check": "prettier --check .",
    "type:check": "tsc",
    "prepare": "husky"
  }
}
```

Set `packageManager` to the exact pnpm version that is installed.

`pnpm-workspace.yaml`:

```yaml
allowBuilds:
  sharp: true
  unrs-resolver: false
```

`tsconfig.json`: use the standard Next.js options with `strict`, `noEmit`, `moduleResolution: bundler`, `jsx: react-jsx`, the `next` plugin, and `"paths": { "@/*": ["./*"] }`.

`eslint.config.mjs`:

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores(['.next/**', 'next-env.d.ts']),
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  tseslint.configs.recommended,
  prettierRecommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
]);
```

`.prettierrc`:

```json
{
  "bracketSpacing": true,
  "endOfLine": "lf",
  "printWidth": 80,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindStylesheet": "./css/tailwind.css"
}
```

`.lintstagedrc`:

```json
{
  "*.{js,jsx,ts,tsx,mjs}": ["prettier --write", "eslint --fix"],
  "*.{json,css,md}": ["prettier --write"]
}
```

`.husky/pre-commit`:

```sh
pnpm exec lint-staged
pnpm type:check
```

`.gitignore` must cover `node_modules`, `.next`, `out`, `.env*`, `.vercel`, `*.tsbuildinfo`, `next-env.d.ts`, and `.DS_Store`.

Run `git init` if needed so Husky can install. Do not commit or push unless I ask.

Do not add GitHub Actions, other CI/CD, `vercel.json`, or any deploy scripts. Deployment is automatic: Vercel builds the site whenever `main` is pushed to GitHub, with no config needed in this project.

Add a short `CLAUDE.md` covering the commands, the structure, and the rule that content lives in `data/index.ts`.

## 9. Verify before finishing

Run these and fix every failure:

1. `pnpm lint`, `pnpm type:check`, `pnpm prettier:check`, and `pnpm build` all pass. The build reports the routes as static.
2. **Visual comparison:** take full-page screenshots of the original HTML and the running Next.js site at 375, 768, 1280, and 1920 px wide, in each theme the site has. Run Playwright with `pnpm dlx` so it isn't added to the project. Compare each pair, including after scrolling to trigger animations, and fix every difference. If a browser can't run here, say so instead of claiming they match.
3. **Behavior:** test every link, anchor, menu, toggle, form, and animation against the original.
4. **Content:** confirm that all visible text from the original appears unchanged.
5. **SEO:** run `pnpm start`, then check the raw response with `curl`:
   - The page's content is in the HTML.
   - Title, description, canonical, Open Graph, Twitter tags, and JSON-LD are all present, with absolute URLs.
   - `/robots.txt` and `/sitemap.xml` are correct.
   - An unknown URL returns a 404 status.
   - The page has exactly one `<h1>`.
6. No browser console errors or hydration warnings.

## 10. Final report

Keep it short:

- What was built, and the exact commands to run it on my computer
- How to change my content: which part of `data/index.ts` holds what
- How to publish: the steps to push to GitHub and import the repository into Vercel once, after which each push to `main` deploys automatically
- Results of each verification step, including anything you could not run
- Any remaining visual differences
- Every `TODO` and value I still need to provide
- New text you wrote, such as the meta description and alt text
- Forms or features in the original that don't actually work
