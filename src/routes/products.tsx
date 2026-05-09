import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Boxes } from 'lucide-react'
import {
  imageSources,
  orderUses,
  products,
} from '../components/landing/content'
import { ProductCard } from '../components/landing/ProductCard'
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
  productsJsonLd,
} from '../lib/seo'

export const Route = createFileRoute('/products')({
  head: () => ({
    meta: metaForPage(pageSeo['/products']),
    links: linkForPage(pageSeo['/products']),
    scripts: [
      jsonLdScript(productsJsonLd()),
      jsonLdScript(breadcrumbJsonLd('/products')),
    ],
  }),
  component: ProductsPage,
})

function ProductsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Products"
        title="Handmade katana for sale Philippines."
        text="Browse handmade katana for sale in the Philippines, daisho sets, European long swords, traditional Filipino weapons, knives, and practice blades built to your design specifications."
      >
        <div className="rounded border border-zinc-200 bg-white p-5">
          <Boxes className="text-red-700" size={26} />
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            Fully custom-made swords and knives are available, with bulk orders
            eligible for discounts.
          </p>
        </div>
      </PageIntro>

      <FadeIn as="section" className="py-16 md:py-24">
        <Stagger
          className={`${containerClass} grid gap-5 md:grid-cols-2 lg:grid-cols-3`}
        >
          {products.map((product) => (
            <StaggerItem className="h-full" key={product.name}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>

      <FadeIn
        as="section"
        className="border-t border-zinc-200 bg-white py-16 md:py-24"
      >
        <div className={containerClass}>
          <div className="mb-10 border-l-4 border-red-700 pl-5">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-red-600">
              Use Cases & Fulfillment
            </div>
            <h2 className="mt-2 font-heading text-3xl leading-none font-bold uppercase text-zinc-950 md:text-4xl">
              Built for collectors, training, display, and bulk orders.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600">
              Forged in the Philippines and shipped worldwide, each commission
              is reviewed for safe handling, practical use, display quality, and
              delivery requirements.
            </p>
          </div>

          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            <StaggerItem className="lg:col-span-7">
              <UseCasePanel
                action="Start Order"
                category="Cat. 01"
                image={imageSources.blueBackdrop}
                title={orderUses[0]}
                variant="feature"
              >
                Custom blades and props for cosplay, costume builds, character
                concepts, and visual presentation.
              </UseCasePanel>
            </StaggerItem>

            <StaggerItem className="lg:col-span-5">
              <UseCasePanel
                action="View Products"
                category="Cat. 02"
                title={orderUses[2]}
              >
                Souvenir and display pieces crafted for collectors, gifts,
                shelves, desks, and presentation spaces.
              </UseCasePanel>
            </StaggerItem>

            <StaggerItem className="lg:col-span-4">
              <UseCasePanel
                action="Inquire Now"
                category="Cat. 03"
                title={orderUses[3]}
              >
                Bulk orders are welcome and eligible for discounts depending on
                quantity, design, and production requirements.
              </UseCasePanel>
            </StaggerItem>

            <StaggerItem className="lg:col-span-5">
              <UseCasePanel
                action="Explore Gear"
                category="Cat. 04"
                image={imageSources.fieldBlade}
                title={orderUses[1]}
                variant="wide"
              >
                Unsharpened blades for martial arts training, practice handling,
                choreography, and safer repeated use.
              </UseCasePanel>
            </StaggerItem>

            <StaggerItem className="lg:col-span-3">
              <UseCasePanel
                action="Request Quote"
                category="Cat. 05"
                title={orderUses[4]}
              >
                Finished orders can be shipped nationwide and worldwide, with
                shipping fees settled before delivery.
              </UseCasePanel>
            </StaggerItem>
          </Stagger>
        </div>
      </FadeIn>
    </SiteShell>
  )
}

function UseCasePanel({
  action,
  category,
  children,
  image,
  title,
  variant = 'text',
}: {
  action: string
  category: string
  children: string
  image?: string
  title: string
  variant?: 'feature' | 'text' | 'wide'
}) {
  const hasImage = Boolean(image)

  return (
    <article
      className={`relative flex min-h-[280px] overflow-hidden border border-zinc-200 ${
        variant === 'feature'
          ? 'bg-zinc-950 text-white'
          : variant === 'wide'
            ? 'bg-zinc-950 text-white'
            : 'bg-stone-50 text-zinc-950'
      }`}
    >
      {hasImage ? (
        <>
          <img
            alt={`${title} custom blade category made in the Philippines`}
            className="absolute inset-0 h-full w-full object-cover"
            height={720}
            loading="lazy"
            src={image}
            width={1280}
          />
          <div className="absolute inset-0 bg-zinc-950/72" />
        </>
      ) : null}

      <div className="relative z-10 flex min-h-full w-full flex-col p-7">
        <div
          className={`font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${
            hasImage ? 'text-white/68' : 'text-red-600'
          }`}
        >
          {category}
        </div>
        <div className="mt-auto max-w-xl">
          <h3 className="font-heading text-2xl font-bold uppercase">{title}</h3>
          <p
            className={`mt-4 text-sm leading-7 ${hasImage ? 'text-white/72' : 'text-zinc-600'}`}
          >
            {children}
          </p>
          <RequestFormButton
            className={`mt-6 inline-flex min-h-10 items-center justify-center gap-2 border px-4 font-heading text-[11px] font-bold uppercase ${
              hasImage
                ? 'border-white bg-white text-zinc-950 hover:border-red-700 hover:bg-red-700 hover:text-white'
                : 'border-zinc-200 bg-white text-zinc-950 hover:border-red-700 hover:text-red-700'
            }`}
          >
            {action}
            <ArrowRight size={14} />
          </RequestFormButton>
        </div>
      </div>
    </article>
  )
}
