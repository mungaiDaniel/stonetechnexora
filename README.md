# StoneTech Nexora website

React + Vite landing site with a booking form for free ERP roadmap calls.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build in /dist
```

Deploy the `dist` folder to Netlify, Vercel, Cloudflare Pages or any static host.

## Edit content

All text lives in `src/content.js`: headline, services, industries, the Nexora Path phases, testimonials and contact details. Search for `TODO` to find what still needs your real details:

- `brand` — email, phone, city, LinkedIn
- `FORM_ENDPOINT` — where booking requests go (see below)
- `platforms` — list only platforms you are a partner for
- `clientLogos` / `testimonials` — dashed placeholders until you add real ones

## Make the booking form send emails

1. Create a free form at https://formspree.io
2. Paste its URL into `FORM_ENDPOINT` in `src/content.js`

Until then the form runs in demo mode: it validates and shows the confirmation, but sends nothing.

## Colors and fonts

Defined at the top of `src/index.css`. Teal, pink and gold are the three Nexora Path phases (Ground, Connect, Launch) and are used consistently across the site.
