import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import type { products } from './content'

type Product = (typeof products)[number]

type ProductCardProps = {
  actionLabel?: string
  product: Product
}

const cardClass =
  'flex h-full flex-col rounded border border-zinc-200 bg-white text-zinc-950 no-underline outline-none hover:border-red-200 focus-visible:border-red-700 focus-visible:ring-3 focus-visible:ring-red-700/20'

const cardContent = (product: Product, actionLabel: string) => (
  <>
    <div className="aspect-[16/9] overflow-hidden bg-zinc-200">
      <motion.img
        alt={product.alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        height={720}
        loading="lazy"
        src={product.image}
        width={1280}
      />
    </div>
    <div className="flex flex-1 flex-col p-4">
      <div className="h-[120px] overflow-hidden">
        <h2 className="font-heading text-2xl leading-tight font-semibold uppercase text-zinc-950">
          {product.name}
        </h2>
        <p className="mt-2 text-sm leading-7 text-zinc-600">{product.text}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-2 pt-3 font-mono text-xs uppercase text-red-700">
        {actionLabel}
        <ArrowRight size={15} />
      </span>
    </div>
  </>
)

export function ProductCard({
  actionLabel = 'Request this product',
  product,
}: ProductCardProps) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 18 }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      viewport={{ once: true, margin: '-80px' }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ boxShadow: '0 18px 40px rgba(24, 24, 27, 0.12)', y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        className={`group ${cardClass}`}
        search={{ ref: product.slug }}
        to="/contact"
      >
        {cardContent(product, actionLabel)}
      </Link>
    </motion.div>
  )
}
