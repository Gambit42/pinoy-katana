import { Link, createFileRoute } from '@tanstack/react-router'
import { Anvil, ArrowRight, RefreshCw, Sparkles } from 'lucide-react'
import {
  customOrders,
  imageSources,
  orderSteps,
  services,
} from '../components/landing/content'
import { RequestFormButton } from '../components/landing/RequestFormDialog'
import { PageIntro, containerClass } from '../components/landing/shared'
import { SiteShell } from '../components/landing/SiteShell'
import { FadeIn } from '../components/motion/FadeIn'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import {
  breadcrumbJsonLd,
  jsonLdScript,
  linkForPage,
  metaForPage,
  pageSeo,
  servicesJsonLd,
} from '../lib/seo'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: metaForPage(pageSeo['/services']),
    links: linkForPage(pageSeo['/services']),
    scripts: [
      jsonLdScript(servicesJsonLd()),
      jsonLdScript(breadcrumbJsonLd('/services')),
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  const icons = [Anvil, RefreshCw, Sparkles]

  return (
    <SiteShell>
      <PageIntro
        eyebrow="Services"
        title="Sword forging services Philippines."
        text="Our sword forging services in the Philippines cover custom handmade swords, blade refurbishment, sharpening, polishing, and long-term maintenance for blades you already own."
      >
        <RequestFormButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-red-700 bg-red-700 px-5 font-heading text-sm font-bold uppercase text-white no-underline hover:bg-white hover:text-red-700">
          Start Order
          <ArrowRight size={16} />
        </RequestFormButton>
      </PageIntro>

      <FadeIn as="section" className="py-16 md:py-24">
        <Stagger className={`${containerClass} grid gap-5 md:grid-cols-3`}>
          {services.map((service, index) => {
            const Icon = icons[index]

            return (
              <StaggerItem
                as="article"
                className="rounded border border-zinc-200 bg-white p-6 hover:border-red-200"
                hoverLift
                key={service.title}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded bg-red-50 text-red-700">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 font-heading text-2xl font-semibold uppercase text-zinc-950">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {service.text}
                </p>
                <p className="mt-5 border-t border-red-100 pt-4 font-mono text-xs uppercase text-red-600">
                  {service.action}
                </p>
              </StaggerItem>
            )
          })}
        </Stagger>
      </FadeIn>

      <FadeIn
        as="section"
        className="border-y border-zinc-200 bg-white py-16 md:py-24"
      >
        <Stagger
          className={`${containerClass} grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]`}
        >
          <StaggerItem>
            <div className="font-mono text-xs uppercase text-red-600">
              Custom Orders
            </div>
            <h2 className="mt-4 font-heading text-4xl leading-tight font-semibold uppercase text-zinc-950">
              {customOrders.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              {customOrders.text}
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              {customOrders.detail}
            </p>
            <Link
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 border border-zinc-300 bg-white px-5 font-heading text-xs font-bold uppercase text-zinc-950 no-underline hover:border-red-700 hover:text-red-700"
              to="/products"
            >
              Browse blade options
              <ArrowRight size={15} />
            </Link>
            <div className="mt-8 aspect-[21/8] overflow-hidden border border-zinc-200 bg-zinc-200">
              <img
                alt="Custom katana sword design prepared for Filipino blacksmith forging"
                className="h-full w-full object-cover"
                height={640}
                loading="lazy"
                src={imageSources.customBlade}
                width={1680}
              />
            </div>
          </StaggerItem>

          <StaggerItem className="rounded border border-zinc-200 bg-stone-50 p-6">
            <h3 className="font-heading text-2xl font-semibold uppercase text-zinc-950">
              How to place an order
            </h3>
            <div className="mt-5 grid gap-4">
              {orderSteps.map((step, index) => (
                <div
                  className="grid gap-2 border-t border-zinc-200 pt-4 first:border-t-0 first:pt-0"
                  key={step}
                >
                  <span className="font-mono text-xs uppercase text-red-600">
                    Step {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-7 text-zinc-600">{step}</p>
                </div>
              ))}
            </div>
          </StaggerItem>
        </Stagger>
      </FadeIn>
    </SiteShell>
  )
}
