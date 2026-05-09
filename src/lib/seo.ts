import {
  imageSources,
  navItems,
  orderFaqs,
  products,
  services,
  socialProfiles,
} from '#/components/landing/content'

const DEFAULT_SITE_URL = 'http://localhost:3000'
const DEFAULT_OG_BANNER_WIDTH = '1200'
const DEFAULT_OG_BANNER_HEIGHT = '630'

export const siteUrl = normalizeBaseUrl(
  import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL,
)
export const ogBannerUrl =
  import.meta.env.VITE_OG_BANNER_URL || `${siteUrl}/og-banner.jpg`
export const ogBannerWidth =
  import.meta.env.VITE_OG_BANNER_WIDTH || DEFAULT_OG_BANNER_WIDTH
export const ogBannerHeight =
  import.meta.env.VITE_OG_BANNER_HEIGHT || DEFAULT_OG_BANNER_HEIGHT

export const siteName = 'Pinoy Katana'
export const organizationName = 'Samurai Katana Swords Philippines'
export const defaultLogoUrl = absoluteUrl('/katana-logo.png')
export const heroImageUrl = absoluteUrl(imageSources.hero)

export type RoutePath = '/' | '/services' | '/products' | '/about' | '/contact'

export type PageSeo = {
  description: string
  path: RoutePath
  title: string
}

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdObject
  | JsonLdValue[]
type JsonLdObject = { [key: string]: JsonLdValue }

export const pageSeo: Record<RoutePath, PageSeo> = {
  '/': {
    title: 'Custom Katana Philippines | Handmade Samurai Swords - Pinoy Katana',
    description:
      'Custom-forged katana, daisho sets, and traditional Filipino blades handcrafted by licensed Filipino blacksmiths. You design it, we forge it.',
    path: '/',
  },
  '/services': {
    title: 'Sword Forging, Refurbishment & Maintenance Services | Pinoy Katana',
    description:
      'Custom sword forging, blade refurbishment, sharpening, and polishing by skilled Filipino swordsmiths. Restore old blades or commission a new one.',
    path: '/services',
  },
  '/products': {
    title:
      'Handmade Katana, Daisho Sets & Custom Blades for Sale | Pinoy Katana',
    description:
      'Browse handcrafted katana, daisho sets, European long swords, traditional Filipino weapons, knives, and practice blades built to your spec.',
    path: '/products',
  },
  '/about': {
    title: 'About Pinoy Katana - Licensed Filipino Swordsmiths',
    description:
      'Licensed and insured Filipino blacksmiths combining traditional Japanese sword-forging with modern craftsmanship. Learn about our process and team.',
    path: '/about',
  },
  '/contact': {
    title: 'Order a Custom Sword | Pinoy Katana Commission Form',
    description:
      'Send your design, dimensions, and finish preferences to commission a custom katana or blade. 50% down payment, 2 month forge time, worldwide shipping.',
    path: '/contact',
  },
}

export function canonicalUrl(path: RoutePath | string) {
  return `${siteUrl}${path === '/' ? '/' : path}`
}

export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl
  }

  return `${siteUrl}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`
}

export function metaForPage(page: PageSeo) {
  const canonical = canonicalUrl(page.path)

  return [
    { title: page.title },
    { name: 'description', content: page.description },
    { name: 'keywords', content: keywordsForPath(page.path) },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: ogBannerUrl },
    { property: 'og:image:width', content: ogBannerWidth },
    { property: 'og:image:height', content: ogBannerHeight },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: ogBannerUrl },
  ]
}

export function linkForPage(page: PageSeo) {
  return [{ rel: 'canonical', href: canonicalUrl(page.path) }]
}

export function jsonLd(script: JsonLdObject) {
  return { 'script:ld+json': script }
}

export function jsonLdScript(script: JsonLdObject) {
  return {
    type: 'application/ld+json',
    children: JSON.stringify(script).replace(/</g, '\\u003c'),
  }
}

export function breadcrumbJsonLd(path: RoutePath): JsonLdObject {
  const crumbs = [{ name: 'Home', url: canonicalUrl('/') }]

  if (path !== '/') {
    const item = navItems.find((navItem) => navItem.to === path)
    crumbs.push({
      name: item?.label === 'Order' ? 'Contact' : item?.label || path.slice(1),
      url: canonicalUrl(path),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

export function organizationJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organizationName,
    alternateName: siteName,
    url: canonicalUrl('/'),
    logo: defaultLogoUrl,
    sameAs: socialProfiles.map((profile) => profile.href),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      areaServed: ['PH', 'Worldwide'],
      availableLanguage: ['en', 'fil'],
    },
  }
}

export function localBusinessJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: organizationName,
    url: canonicalUrl('/'),
    image: ogBannerUrl,
    logo: defaultLogoUrl,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PH',
      addressRegion: 'Philippines',
    },
    sameAs: socialProfiles.map((profile) => profile.href),
    priceRange: '$$',
    areaServed: 'Worldwide',
  }
}

export function productsJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        image: absoluteUrl(product.image),
        description: product.text,
        category: product.category,
        brand: {
          '@type': 'Brand',
          name: siteName,
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/MadeToOrder',
          url: `${canonicalUrl('/contact')}?ref=${product.slug}`,
        },
      },
    })),
  }
}

export function servicesJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        serviceType: service.title,
        description: service.text,
        provider: {
          '@type': 'Organization',
          name: organizationName,
          url: canonicalUrl('/'),
        },
        areaServed: ['Philippines', 'Worldwide'],
      },
    })),
  }
}

export function faqJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: orderFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

function normalizeBaseUrl(url: string) {
  return url.replace(/\/+$/, '')
}

function keywordsForPath(path: RoutePath) {
  const keywords: Record<RoutePath, string> = {
    '/': 'custom katana Philippines, handmade samurai sword, Filipino blacksmith',
    '/services':
      'sword forging services Philippines, blade refurbishment, sword maintenance, sword polishing',
    '/products':
      'handmade katana for sale Philippines, daisho set, European long sword, traditional Filipino weapons, practice sword',
    '/about':
      'Filipino sword maker, licensed swordsmith Philippines, custom blade artisan',
    '/contact':
      'order custom katana Philippines, custom sword request, blade commission Philippines',
  }

  return keywords[path]
}
