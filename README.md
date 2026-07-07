# John Mark Pacis — Portfolio

Personal portfolio of John Mark Pacis, a software engineer from Pangasinan, Philippines. A single-page dark-themed site covering selected work, professional experience, skills, and contact details — with scroll-reveal animations, an icon tech marquee, and generated Open Graph/favicon images.

**Live site:** [jm-portfolio-eta.vercel.app](https://jm-portfolio-eta.vercel.app)

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Vanilla CSS in `app/globals.css` — no Tailwind, no UI library
- `next/font` for self-hosted Google Fonts (Bricolage Grotesque, Inter, JetBrains Mono)
- `next/og` `ImageResponse` for the Open Graph image and favicon

Fully responsive down to 320px and respects `prefers-reduced-motion` (all animation is disabled for users who request it).

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
