import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '#/components/motion/FadeIn'
import { Stagger, StaggerItem } from '#/components/motion/Stagger'
import { products } from './content'
import { ProductCard } from './ProductCard'
import { containerClass } from './shared'

export function CollectionSection() {
  const featuredProducts = products.slice(0, 6)

  return (
    <FadeIn as="section" className="border-b border-red-100 bg-stone-50 py-10 md:py-14">
      <div className={containerClass}>
        <div className="mb-8 flex flex-col gap-5 border-t border-red-200 pt-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-red-600">
              Products
            </div>
            <h2 className="mt-3 font-heading text-3xl leading-none font-bold uppercase text-zinc-950 md:text-5xl">
              Featured Blades
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
              A quick look at our custom blade categories. View the full products page for every
              sword, knife, training, and client-design option.
            </p>
          </div>

          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-zinc-300 bg-white px-5 font-heading text-xs font-bold uppercase text-zinc-950 no-underline hover:border-red-700 hover:text-red-700"
            to="/products"
          >
            View All Products
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <Stagger className="grid gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <StaggerItem className="h-full" key={product.name}>
              <ProductCard actionLabel="Start order" product={product} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </FadeIn>
  )
}
