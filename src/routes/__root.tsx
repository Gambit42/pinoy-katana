import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { SiteShell } from '#/components/landing/SiteShell'
import { containerClass } from '#/components/landing/shared'
import { MotionProvider } from '#/components/motion/MotionProvider'
import {
  canonicalUrl,
  heroImageUrl,
  ogBannerHeight,
  ogBannerUrl,
  ogBannerWidth,
  organizationName,
  pageSeo,
  siteName,
} from '#/lib/seo'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: pageSeo['/'].title,
      },
      {
        name: 'description',
        content: pageSeo['/'].description,
      },
      {
        name: 'robots',
        content: 'index,follow',
      },
      {
        name: 'theme-color',
        content: '#000000',
      },
      {
        name: 'author',
        content: organizationName,
      },
      {
        property: 'og:site_name',
        content: siteName,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:locale',
        content: 'en_PH',
      },
      {
        property: 'og:image',
        content: ogBannerUrl,
      },
      {
        property: 'og:image:width',
        content: ogBannerWidth,
      },
      {
        property: 'og:image:height',
        content: ogBannerHeight,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:image',
        content: ogBannerUrl,
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/katana-logo.png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/katana-logo.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      {
        rel: 'canonical',
        href: canonicalUrl('/'),
      },
      {
        rel: 'preload',
        as: 'image',
        href: heroImageUrl,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  component: Outlet,
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PH">
      <head>
        <HeadContent />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

function NotFoundPage() {
  return (
    <SiteShell>
      <section className="border-b border-red-100 bg-white py-16 md:py-24">
        <div className={`${containerClass} max-w-3xl`}>
          <div className="font-mono text-xs uppercase text-red-600">404</div>
          <h1 className="mt-4 font-heading text-4xl leading-tight font-bold uppercase text-zinc-950 md:text-6xl">
            Page not found
          </h1>
          <p className="mt-5 text-base leading-8 text-zinc-600">
            The page may have moved. Continue with our handmade katana
            collection or start a custom blade request.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded border border-red-700 bg-red-700 px-6 font-heading text-sm font-bold uppercase text-white no-underline hover:bg-white hover:text-red-700"
              to="/products"
            >
              View Products
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded border border-zinc-300 bg-white px-6 font-heading text-sm font-bold uppercase text-zinc-950 no-underline hover:border-red-700 hover:text-red-700"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
