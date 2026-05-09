# SEO Optimization Plan — Samurai Katana Swords Philippines

This document is the implementation plan only. No code changes are made here.

## 1. Goals

- Rank for high-intent local queries: "custom katana Philippines", "handmade samurai sword Philippines", "blade refurbishment Philippines", "Filipino blacksmith sword maker", "daisho set Philippines".
- Drive qualified inquiries to `/contact` (custom order form).
- Establish topical authority around custom blades, traditional Filipino weapons, and katana craftsmanship.

## 2. Target Keywords

| Page | Primary Keyword | Secondary Keywords |
| --- | --- | --- |
| `/` | custom katana Philippines | handmade samurai sword, Filipino blacksmith, you design it we forge it |
| `/services` | sword forging services Philippines | blade refurbishment, sword maintenance, sword polishing |
| `/products` | handmade katana for sale Philippines | daisho set, European long sword, traditional Filipino weapons, practice sword |
| `/about` | Filipino sword maker | licensed swordsmith Philippines, custom blade artisan |
| `/contact` | order custom katana Philippines | custom sword request, blade commission Philippines |

## 3. Per-Page Metadata

All metadata is set via TanStack Router's `head()` on each route. The root route holds the defaults; child routes override `title` and `description` and add `og:*` / `twitter:*` tags.

### `/` Home

- Title: `Custom Katana Philippines | Handmade Samurai Swords — Pinoy Katana`
- Description (max ~160 chars): `Custom-forged katana, daisho sets, and traditional Filipino blades handcrafted by licensed Filipino blacksmiths. You design it, we forge it.`
- Canonical: `https://pinoykatana.com/`
- OG image: `import.meta.env.VITE_OG_BANNER_URL` (see §4)
- Keywords focus: custom katana Philippines, handmade samurai sword

### `/services`

- Title: `Sword Forging, Refurbishment & Maintenance Services | Pinoy Katana`
- Description: `Custom sword forging, blade refurbishment, sharpening, and polishing by skilled Filipino swordsmiths. Restore old blades or commission a new one.`
- Canonical: `https://pinoykatana.com/services`

### `/products`

- Title: `Handmade Katana, Daisho Sets & Custom Blades for Sale | Pinoy Katana`
- Description: `Browse handcrafted katana, daisho sets, European long swords, traditional Filipino weapons, knives, and practice blades — all built to your spec.`
- Canonical: `https://pinoykatana.com/products`

### `/about`

- Title: `About Pinoy Katana — Licensed Filipino Swordsmiths`
- Description: `Licensed and insured Filipino blacksmiths combining traditional Japanese sword-forging with modern craftsmanship. Learn about our process and team.`
- Canonical: `https://pinoykatana.com/about`

### `/contact`

- Title: `Order a Custom Sword | Pinoy Katana Commission Form`
- Description: `Send your design, dimensions, and finish preferences to commission a custom katana or blade. 50% down payment, ~2 month forge time, worldwide shipping.`
- Canonical: `https://pinoykatana.com/contact`

## 4. Root-Level Metadata Additions (`src/routes/__root.tsx`)

Add the following site-wide defaults that child routes inherit unless overridden:

- `<meta name="robots" content="index,follow">`
- `<meta name="theme-color" content="#000000">` (match brand)
- `<meta name="author" content="Samurai Katana Swords Philippines">`
- `<meta property="og:site_name" content="Pinoy Katana">`
- `<meta property="og:type" content="website">`
- `<meta property="og:locale" content="en_PH">`
- `<meta property="og:image" content="${VITE_OG_BANNER_URL}">`
- `<meta property="og:image:width" content="${VITE_OG_BANNER_WIDTH}">`
- `<meta property="og:image:height" content="${VITE_OG_BANNER_HEIGHT}">`
- `<meta name="twitter:card" content="summary_large_image">`
- `<meta name="twitter:image" content="${VITE_OG_BANNER_URL}">`

**Env-controlled values** (read from `import.meta.env` at build time):

| Variable | Purpose | Default in `.env` |
| --- | --- | --- |
| `VITE_SITE_URL` | Base URL used to build canonical and absolute OG URLs | `https://pinoykatana.com` |
| `VITE_OG_BANNER_URL` | Full URL of the social share banner (1200×630 recommended) | `https://pinoykatana.com/og-banner.jpg` |
| `VITE_OG_BANNER_WIDTH` | Banner width in pixels | `1200` |
| `VITE_OG_BANNER_HEIGHT` | Banner height in pixels | `630` |

`.env` is gitignored; `.env.example` is committed as the template. **TODO**: design and drop the actual `og-banner.jpg` into `public/` (or host it elsewhere) — until then `VITE_OG_BANNER_URL` points to a placeholder path.
- `<link rel="canonical" href="...">` set per-route via `head()`
- `<html lang="en-PH">` instead of `en`

## 5. Structured Data (JSON-LD)

Inject via `head().scripts` on the relevant routes.

- **`/` Home — `LocalBusiness`** with `@type: "Store"`:
  - `name`, `url`, `image`, `logo`
  - `address` (PostalAddress, PH)
  - `telephone`, `email`
  - `sameAs`: Facebook, Instagram, X URLs from `socialProfiles`
  - `priceRange`, `areaServed: "Worldwide"`
- **`/products` — `ItemList`** of `Product` entries generated from `products` in `content.ts`:
  - Each Product: `name`, `image`, `description`, `category`, `brand: "Pinoy Katana"`, `offers.availability: "MadeToOrder"`
- **`/services` — `Service`** entries (one per service in `services`): `serviceType`, `provider`, `areaServed`.
- **`/contact` — `FAQPage`** generated from `orderFaqs`.
- **All pages — `BreadcrumbList`** matching the nav hierarchy.
- **`/` — `Organization`** with `logo`, `sameAs`, `contactPoint`.

## 6. Content & On-Page SEO

- **Heading hierarchy**: exactly one `<h1>` per page matching the primary keyword. Audit `HeroSection`, `CollectionSection`, `SpecsSection`, `ProtocolsSection`, `CommissionSection`, `FaqSection` for `<h1>`/`<h2>` correctness.
- **Image alt text**: every `<img>` from `imageSources` and `ProductCard` needs descriptive alt text including blade type and context (e.g. "Handcrafted Japanese katana on wooden display stand").
- **Internal linking**: from product cards link to `/contact` with the product name as anchor query param (`?ref=daisho-set`); from `/services` cross-link to `/products`.
- **External link hygiene**: `rel="noopener"` on social links; consider `rel="ugc nofollow"` on Unsplash credit links.
- **Body copy**: rewrite intro paragraphs to surface primary keyword in the first 100 words without keyword stuffing. Add a short location paragraph ("Forged in the Philippines, shipped worldwide").
- **FAQ section**: keep `orderFaqs` in markup (already present) so it can power the `FAQPage` schema.

## 7. Technical SEO

- **`public/robots.txt`**: replace default with explicit `User-agent: *`, `Allow: /`, `Sitemap: https://pinoykatana.com/sitemap.xml`.
- **`public/sitemap.xml`**: generate at build time listing the five static routes with `lastmod`. Add a Vite plugin or a small `scripts/generate-sitemap.ts` step in `npm run build`.
- **`public/manifest.json`**: confirm `name`, `short_name`, `description`, `theme_color`, `background_color`, icon sizes (192, 512). Currently linked from root.
- **Performance (Core Web Vitals)**:
  - Replace remote Unsplash hero in `imageSources.hero` with locally hosted, compressed AVIF/WebP. Remote hotlinks hurt LCP.
  - Add `loading="lazy"` and explicit `width`/`height` on all non-hero images; `fetchpriority="high"` on the hero.
  - Preload hero image and primary font in `__root.tsx` `links`.
  - Audit Tailwind v4 build output for unused CSS; verify Vite is producing a single CSS bundle.
- **Security headers** (where the host allows): `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`. Improves trust signals.
- **Trailing slashes**: pick one canonical form in TanStack Router config and 301 the other at the host level.
- **404 route**: add a custom `NotFoundComponent` with internal links back to home/products to recover lost link equity.

## 8. Local & Off-Page SEO

- Claim and complete a **Google Business Profile** with category "Sword maker" / "Handicraft", photos, hours, service area = Philippines + worldwide shipping.
- Submit `sitemap.xml` to **Google Search Console** and **Bing Webmaster Tools**.
- Build citations on PH directories (Yellow Pages PH, Sulit/Carousell, FB Marketplace listing linking back).
- Encourage customer reviews referencing keywords ("custom katana", "Filipino swordsmith") on Facebook page and GBP.
- Add an `Organization` with `aggregateRating` schema once 5+ reviews exist.

## 9. Analytics & Verification

- Add Google Search Console verification meta tag to `__root.tsx` head.
- Add a privacy-respecting analytics script (Plausible or GA4 with consent) loaded after interaction-ready.
- Track: form submissions on `/contact`, outbound clicks to social, scroll depth on `/products`.

## 10. Implementation Order

1. Root metadata + `lang="en-PH"` + canonical helper. (`__root.tsx`)
2. Per-route `head()` overrides with title, description, OG/Twitter, canonical.
3. JSON-LD: `LocalBusiness` + `Organization` on `/`, then `Product` list on `/products`, `Service` on `/services`, `FAQPage` on `/contact`.
4. `robots.txt` + `sitemap.xml` generation in build.
5. Image alt audit + hero image localization + `loading`/`width`/`height` attributes.
6. Heading hierarchy audit across landing components.
7. Custom 404, internal linking pass.
8. Submit to Search Console + GBP setup.

## 11. Acceptance Criteria

- All five routes return unique `<title>` and `<meta name="description">` under 160 chars.
- Each route exposes a valid canonical URL.
- `view-source` shows JSON-LD validating in [Schema Markup Validator](https://validator.schema.org/).
- Lighthouse SEO score ≥ 95 on each route; LCP < 2.5s on home.
- `sitemap.xml` reachable at `/sitemap.xml` and lists all five routes.
- No `<img>` without an `alt` attribute.
