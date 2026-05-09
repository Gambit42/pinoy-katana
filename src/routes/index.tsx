import { createFileRoute } from '@tanstack/react-router'
import { KatanaLandingPage } from '../components/landing/KatanaLandingPage'
import {
  breadcrumbJsonLd,
  jsonLdScript,
  linkForPage,
  localBusinessJsonLd,
  metaForPage,
  organizationJsonLd,
  pageSeo,
} from '../lib/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: metaForPage(pageSeo['/']),
    links: linkForPage(pageSeo['/']),
    scripts: [
      jsonLdScript(localBusinessJsonLd()),
      jsonLdScript(organizationJsonLd()),
      jsonLdScript(breadcrumbJsonLd('/')),
    ],
  }),
  component: Home,
})

function Home() {
  return <KatanaLandingPage />
}
