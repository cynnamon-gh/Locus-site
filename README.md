# Locus website

Marketing site for **Locus**, an EA-adjacent group house and community space in West Philadelphia. Deploy from this folder with Railway.

## Local development

```bash
cd site
npm install
cp .env.example .env.local
# Edit .env.local with Resend keys and contact email
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes (for form) | Resend API key |
| `RESEND_FROM_EMAIL` | Yes (for form) | Verified sender, e.g. `Locus <hello@yourdomain.com>` |
| `CONTACT_EMAIL` | Yes (for form) | Recipient for form submissions; also shown as mailto fallback |

Without these, the contact form returns 503; the rest of the site works.

## Deploy to Railway

```bash
cd site
railway link    # once, if not linked
railway up
```

Set the three env vars above in the Railway service dashboard.

Railpack detects Next.js automatically. `railway.toml` sets `npm run start`, which binds to `$PORT`.

## Refresh images from parent repo

Hero photos (real Locus exterior):

```bash
cp "../media/outside(1).jpeg" public/images/hero/hero.jpg
cp "../media/outside(2).jpeg" public/images/hero/hero-2.jpg
cp "../media/outside(3).jpeg" public/images/hero/hero-3.jpg
```

Gallery placeholders live in `public/images/gallery/` — replace files there or add new ones and update `components/Gallery.tsx`.

## Build

```bash
npm run build
npm run start
```
