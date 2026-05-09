import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Stagger, StaggerItem } from '#/components/motion/Stagger'
import { homepage, imageSources } from './content'
import { RequestFormButton } from './RequestFormDialog'
import { SectionEyebrow, containerClass } from './shared'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 86])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section
      className="relative min-h-[640px] overflow-hidden bg-zinc-950 text-white"
      ref={sectionRef}
    >
      <div className="absolute inset-0">
        <motion.img
          alt="Custom katana Philippines banner with handcrafted blade"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          height={941}
          src={imageSources.hero}
          style={{ scale: imageScale, y: imageY }}
          width={1672}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.78)_0%,rgba(9,9,11,0.56)_44%,rgba(9,9,11,0.2)_100%)]" />
      </div>

      <div
        className={`${containerClass} relative z-10 flex min-h-[640px] items-end py-12 md:py-16`}
      >
        <Stagger className="max-w-3xl" delayChildren={0.12}>
          <StaggerItem>
            <SectionEyebrow inverse>{homepage.eyebrow}</SectionEyebrow>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-5 font-heading text-5xl leading-none font-bold uppercase md:text-7xl">
              {homepage.title}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 text-lg leading-8 text-white/84">
              {homepage.intro}
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
              {homepage.body}
            </p>
          </StaggerItem>

          <StaggerItem className="mt-8 flex flex-col gap-3 sm:flex-row">
            <RequestFormButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-red-700 bg-red-700 px-6 font-heading text-sm font-bold uppercase text-white no-underline hover:border-white hover:bg-white hover:text-red-700">
              Order Now
              <ArrowRight size={17} />
            </RequestFormButton>
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/50 bg-white/10 px-6 font-heading text-sm font-bold uppercase text-white no-underline hover:border-red-700 hover:bg-red-700 hover:text-white"
              to="/products"
            >
              View Products
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}
