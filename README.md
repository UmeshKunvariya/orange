# Orange Solutions — Website

Marketing site for Orange Solutions. Single-page, light theme, no backend.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · deployed on Vercel.

---

## Brand assets

`brand/` holds the original business-card artwork. The web assets in `public/`
were extracted from it programmatically:

| File | What it is | Source |
|---|---|---|
| `public/logo.png` | Full horizontal lockup, transparent | cropped from `brand/Orange b.png` |
| `public/mark.png` | Orange fruit mark only, transparent | cropped from `brand/Orange b.png` |
| `public/icon.png` | 512×512 app icon / apple-touch icon | mark on brand canvas |
| `public/og.jpg` | 1200×630 social share image | `brand/Orange f.png` |
| `public/favicon.svg` | Vector favicon | hand-drawn approximation of the mark |

If the logo artwork ever changes, replace the files in `brand/` and re-crop.

## Phone numbers

Both business-card numbers are configured in `src/config/site.ts`:

```ts
export const contacts = [
  { display: "+91 87580 59160", intl: "918758059160", whatsapp: true },
  { display: "+91 96645 46860", intl: "919664546860", whatsapp: true },
] as const;
```

- `display` — what visitors read
- `intl` — dial format for `wa.me` and `tel:` links: country code + number,
  **no `+`, no spaces, no leading zero**
- `whatsapp` — set to `false` if a number isn't on WhatsApp; it will still show
  as a click-to-call number

**The first entry is the primary.** It's the number behind every "Chat on
WhatsApp" button in the header, hero and mobile menu. Reorder the array to swap
which number gets those.

The contact section shows **one WhatsApp button per number**, so visitors can
pick either. The footer lists both for WhatsApp and both for calling. Adding a
third number is just another entry in the array — every section picks it up.

---

## Editing the content

**All text lives in one file: `src/config/site.ts`.** You never need to touch a
component to change what the site says.

| What you want to change | Where in `site.ts` |
|---|---|
| Phone / WhatsApp numbers | `contacts` |
| Tagline, slogan, location, email | `site` |
| Navigation links | `nav` |
| Hero pills (AI Automation, etc.) | `focusAreas` |
| The 10 solution cards | `solutions` |
| AutoClub case study | `caseStudy` |
| The 4 process steps | `process` |
| Reliable / Efficient / Scalable / Support | `whyUs` |
| FAQ questions & answers | `faqs` |

To show an email address in the footer, fill in `site.email` — it's hidden
automatically while empty.

After attaching a custom domain, update `site.url` (it drives SEO metadata,
the sitemap and robots.txt).

---

## Running locally

```bash
npm install     # first time only
npm run dev     # http://localhost:3000
npm run build   # production build — run before deploying
npm run lint
```

## Deploying an update

```bash
npx vercel --prod
```

Edit, run that command, live in ~30 seconds.

---

## Attaching a custom domain

1. Buy a domain (GoDaddy, Namecheap, Hostinger — `.in` domains are cheap).
2. In the [Vercel dashboard](https://vercel.com/dashboard) → your project →
   **Settings** → **Domains** → **Add**, enter the domain.
3. Vercel shows you the DNS records to add. In your registrar's DNS panel:
   - `A` record, name `@` → `76.76.21.21`
   - `CNAME` record, name `www` → `cname.vercel-dns.com`
4. Wait a few minutes. HTTPS is issued automatically and free.
5. Update `site.url` in `src/config/site.ts` and redeploy.

---

## Structure

```
brand/                  original business-card artwork (source of truth)
public/                 logo.png, mark.png, icon.png, og.jpg, favicon.svg
src/
├─ app/
│  ├─ layout.tsx      fonts, SEO metadata, JSON-LD schema
│  ├─ page.tsx        section order
│  ├─ globals.css     design tokens (colours, fonts, animations)
│  ├─ robots.ts       robots.txt
│  └─ sitemap.ts      sitemap.xml
├─ config/site.ts     ← ALL CONTENT LIVES HERE
└─ components/
   ├─ Header, Hero, Services, Work, Process, WhyUs, FAQ, CTA, Footer
   ├─ Logo.tsx
   └─ ui/             Section, Reveal, WhatsAppButton, Icons
```

## Mobile

The site is mobile-first. Every section collapses to a single column on phones,
the header switches to a hamburger menu below 1024px, and all tap targets are
at least 40px. Breakpoints used: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.

## Brand colours

Defined in `src/app/globals.css` under `@theme`:

| Token | Value | Used for |
|---|---|---|
| `brand` | `#EA580C` | buttons, links, icons |
| `brand-hover` | `#F97316` | hover states |
| `brand-tint` | `#FFF1E5` | soft icon backgrounds |
| `canvas` | `#FFFDFB` | page background |
| `canvas-alt` | `#FFF7ED` | alternating sections |
| `ink` | `#0F172A` | headings |
| `body` | `#475569` | body text |
