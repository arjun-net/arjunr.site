# Arjun Rao — Portfolio

A fast, static personal portfolio built with [Astro](https://astro.build). No backend, no CMS —
all content lives in one file: [`src/data/site.ts`](src/data/site.ts).

## Editing content

Open [`src/data/site.ts`](src/data/site.ts) and edit the exported objects:

- `profile` — name, tagline, GitHub/LinkedIn/email links, résumé path
- `featuredProject` — the Files project (description, tech, repo, learnings blurb)
- `otherProjects` — array of project cards (add/remove/edit freely)
- `skills` — flat list of skills
- `about` — 2–3 sentence bio
- `seo` — page title/description/OG image

Every placeholder is marked with `TODO`. Find them all with:

```bash
grep -rn "TODO" src/ public/*.svg
```

Remaining TODOs to fill in before launch:

- [ ] `src/data/site.ts` — real LinkedIn URL, real email address
- [ ] `src/data/site.ts` — featured project screenshot description + "what I learned" blurb
- [ ] `src/data/site.ts` — the 2 placeholder entries in `otherProjects`
- [ ] `src/data/site.ts` — `about` bio
- [ ] `public/resume.pdf` — replace the placeholder PDF with your real résumé (keep the filename)
- [ ] `public/og-image.svg` — replace with a real 1200×630 PNG/JPG (SVG og:images don't render on
      all platforms, e.g. Twitter/X) and update `seo.ogImage` in `site.ts`
- [ ] `src/components/FeaturedProject.astro` — swap the dashed placeholder box for a real
      `<img>`/GIF once you have a screenshot (instructions in a comment right above it)

## Running locally

Requires Node 18+.

```bash
npm install
npm run dev
```

Open http://localhost:4321.

Build and preview the production bundle:

```bash
npm run build
npm run preview
```

## Deploying

The live domain is **arjunr.site**, already set in `astro.config.mjs` (`site: "https://arjunr.site"`).
Because it's a custom domain, no `base` path is needed — the site is served at the root either way.

### Option A: GitHub Pages (this repo is set up for it)

`.github/workflows/deploy.yml` and `public/CNAME` (containing `arjunr.site`) are already in place.

1. Push to GitHub (see below) — the workflow runs on every push to `main` and deploys automatically.
2. In the repo's **Settings → Pages**, set the source to "GitHub Actions" (one-time setup).
3. In the repo's **Settings → Pages → Custom domain**, enter `arjunr.site` and save. GitHub Pages
   picks up `public/CNAME` automatically, but setting it in the UI also provisions HTTPS.
4. At your domain registrar / DNS provider for `arjunr.site`, add:
   - An `A` record for the apex (`@`) pointing to GitHub Pages' IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (Optional) a `CNAME` record for `www` pointing to `arjun-net.github.io`, if you want `www` to work too
5. DNS propagation can take a few minutes to a few hours. Once it resolves, GitHub auto-provisions
   an HTTPS certificate — check the "Enforce HTTPS" box in Pages settings once it's available.

### Option B: Vercel (zero config)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo. Vercel auto-detects Astro —
   no config needed.
3. In the Vercel project's **Settings → Domains**, add `arjunr.site` and follow Vercel's DNS
   instructions (usually an `A`/`CNAME` record, similar to above).
4. Every push to `main` redeploys automatically.

## Stack

- [Astro](https://astro.build) (static output, zero client-side JS by default)
- TypeScript
- Plain CSS (custom properties for theming, no framework/build step needed)
- Light/dark mode: follows system preference by default; the toggle in the header overrides it
  and persists the choice in `localStorage`

## Performance / accessibility notes

- No web fonts (uses the OS system font stack) and no JS frameworks — keeps the page tiny and fast.
- The only client-side JS is the ~15-line theme toggle script.
- Images need real `alt` text once you add the project screenshot — see the TODO in
  `FeaturedProject.astro`.
- Run a Lighthouse audit after adding your real content/images:

  ```bash
  npm run build && npm run preview
  # then run Lighthouse against http://localhost:4321 in Chrome DevTools
  ```
