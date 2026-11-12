# Personal Introduction Website

A frontend-only personal profile site built from the PRD: Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion and Lucide icons. No backend, database or authentication.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to /out
```

`next.config.ts` uses `output: "export"`, so the build is plain HTML, CSS and JS that any static host can serve (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## Make it yours

1. **Content:** edit `data/profile.ts`. Every section reads from it, and the sample person in there is fictional.
2. **Photos:** replace the placeholder JPGs in `public/images/` and update `src`, `alt`, `width`, `height` and `caption` in `profile.ts`. Keep each image under about 1600px on the long edge and 300 KB; the static export serves them as-is.
3. **Family members:** set `approved: false` on anyone who hasn't agreed to appear, and they won't be shown.
4. **Metadata:** set `meta.url` to your real domain for correct social previews.

> Privacy: everything in `profile.ts` and `public/` is downloadable by any visitor. Leave out home addresses, phone numbers, ID numbers and dates of birth.

## Structure

```
app/          layout (fonts, metadata), page, global styles and design tokens
components/   Navbar, Hero, About, Education, Career, FamilyBackground,
              InterestsValues, FutureGoals, Gallery (with lightbox), Contact,
              Footer, BackToTop, plus shared Section, Reveal, Icon, MotionProvider
data/         profile.ts, the single source of content
public/images placeholder photos
```

## PRD coverage

| Requirement | Where |
| --- | --- |
| Sticky navbar, mobile menu, active-section highlight | `Navbar.tsx` |
| Split-screen hero, name, intro, photo, Explore profile button | `Hero.tsx` |
| Smooth scrolling (with sticky-header offset) | `globals.css` |
| Fade-in on section entry | `Reveal.tsx`, used by every section |
| Education timeline with status | `Education.tsx` |
| Family cards with approval flag | `FamilyBackground.tsx` |
| Interest cards with icons, values, lifestyle | `InterestsValues.tsx` |
| Long-term goals timeline | `FutureGoals.tsx` |
| Responsive gallery, lightbox with arrows, keyboard (Esc, ←, →) and captions | `Gallery.tsx` |
| Contact links, closing message, back-to-top button | `Contact.tsx`, `BackToTop.tsx` |
| Keyboard focus styles, skip link, reduced-motion support | `globals.css`, `layout.tsx`, `MotionProvider.tsx` |
| SEO metadata and Open Graph | `layout.tsx` |
