import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { FadeIn } from '../components/motion/FadeIn'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import { aboutSections, imageSources } from '../components/landing/content'
import { RequestFormButton } from '../components/landing/RequestFormDialog'
import { PageIntro, containerClass } from '../components/landing/shared'
import { SiteShell } from '../components/landing/SiteShell'
import {
  breadcrumbJsonLd,
  jsonLdScript,
  linkForPage,
  metaForPage,
  pageSeo,
} from '../lib/seo'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: metaForPage(pageSeo['/about']),
    links: linkForPage(pageSeo['/about']),
    scripts: [jsonLdScript(breadcrumbJsonLd('/about'))],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="About Us"
        title="Filipino sword maker."
        text="Samurai Katana Swords Philippines is a Filipino sword maker specializing in handcrafted custom swords, katana commissions, and blades built around your ideas and specifications."
      >
        <div className="rounded border border-zinc-200 bg-white p-5">
          <BadgeCheck className="text-red-700" size={26} />
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            Licensed, insured, and focused on craftsmanship, safety, and
            customer satisfaction.
          </p>
        </div>
      </PageIntro>

      <FadeIn as="section" className="py-16 md:py-24">
        <div
          className={`${containerClass} grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]`}
        >
          <Stagger className="grid gap-5">
            <StaggerItem>
              <img
                alt="Handcrafted katana displayed on a stand by Filipino sword makers"
                className="h-[360px] w-full rounded object-cover md:h-[520px]"
                height={1040}
                loading="lazy"
                src={imageSources.displayStand}
                width={720}
              />
            </StaggerItem>
            <StaggerItem>
              <img
                alt="Closeup of custom katana blade craftsmanship"
                className="h-[220px] w-full rounded object-cover"
                height={440}
                loading="lazy"
                src={imageSources.bladeCloseup}
                width={720}
              />
            </StaggerItem>
          </Stagger>

          <Stagger className="grid gap-5">
            {aboutSections.map((section) => (
              <StaggerItem
                as="article"
                className="rounded border border-zinc-200 bg-white p-6 hover:border-red-200"
                key={section.title}
              >
                <h2 className="font-heading text-2xl font-semibold uppercase text-zinc-950">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {section.text}
                </p>
              </StaggerItem>
            ))}
            <StaggerItem>
              <RequestFormButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-red-700 bg-red-700 px-6 font-heading text-sm font-bold uppercase text-white no-underline hover:bg-white hover:text-red-700">
                Start a custom order
                <ArrowRight size={16} />
              </RequestFormButton>
            </StaggerItem>
          </Stagger>
        </div>
      </FadeIn>
    </SiteShell>
  )
}
