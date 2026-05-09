import { createFileRoute } from '@tanstack/react-router'
import { ClipboardList, Facebook, Instagram } from 'lucide-react'
import { orderSteps, socialProfiles } from '../components/landing/content'
import { RequestFormButton } from '../components/landing/RequestFormDialog'
import { XBrandIcon } from '../components/landing/SocialIcons'
import { PageIntro, containerClass } from '../components/landing/shared'
import { SiteShell } from '../components/landing/SiteShell'
import { FadeIn } from '../components/motion/FadeIn'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  jsonLdScript,
  linkForPage,
  metaForPage,
  pageSeo,
} from '../lib/seo'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: metaForPage(pageSeo['/contact']),
    links: linkForPage(pageSeo['/contact']),
    scripts: [
      jsonLdScript(faqJsonLd()),
      jsonLdScript(breadcrumbJsonLd('/contact')),
    ],
  }),
  component: ContactPage,
})

const socialIcons = {
  Facebook,
  Instagram,
  X: XBrandIcon,
}

function ContactPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Order Process"
        title="Order custom katana Philippines."
        text="Order a custom katana in the Philippines by sending your blade design, dimensions, materials, finish preferences, and intended use for commission review."
      >
        <div className="grid gap-3 rounded border border-zinc-200 bg-white p-5">
          <RequestFormButton className="inline-flex min-h-11 items-center justify-center gap-2 rounded border border-red-700 bg-red-700 px-4 font-heading text-xs font-bold uppercase text-white hover:bg-white hover:text-red-700">
            Start Order
            <ClipboardList size={16} />
          </RequestFormButton>
          <div className="grid grid-cols-3 gap-2">
            {socialProfiles.map((item) => {
              const Icon = socialIcons[item.label]

              return (
                <a
                  aria-label={item.label}
                  className="inline-flex min-h-11 items-center justify-center rounded border border-red-100 text-zinc-950 no-underline hover:border-red-700 hover:bg-red-700 hover:text-white"
                  href={item.href}
                  key={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </PageIntro>

      <FadeIn as="section" className="py-16 md:py-24">
        <div className={containerClass}>
          <div className="mb-10 max-w-3xl">
            <div className="font-mono text-xs uppercase text-red-600">
              How to place an order
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold uppercase text-zinc-950 md:text-5xl">
              Send the design, confirm the quote, then production begins.
            </h2>
          </div>

          <Stagger className="grid gap-5 md:grid-cols-5">
            {orderSteps.map((step, index) => (
              <StaggerItem
                className="rounded border border-zinc-200 bg-white p-5 hover:border-red-200"
                key={step}
              >
                <div className="font-mono text-xs uppercase text-red-600">
                  Step {String(index + 1).padStart(2, '0')}
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{step}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </FadeIn>
    </SiteShell>
  )
}
