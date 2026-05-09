import type { ReactNode } from 'react'
import { FadeIn } from '#/components/motion/FadeIn'

export const containerClass =
  'mx-auto w-[min(1440px,calc(100%-32px))] md:w-[min(1440px,calc(100%-48px))] 2xl:w-[min(1440px,calc(100%-80px))]'

export function SectionEyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <span className={`font-mono text-xs uppercase ${inverse ? 'text-red-300' : 'text-red-600'}`}>
      {children}
    </span>
  )
}

export function SectionTitle({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <h2
      className={`font-heading text-3xl leading-tight font-semibold uppercase md:text-5xl ${
        inverse ? 'text-white' : 'text-zinc-950'
      }`}
    >
      {children}
    </h2>
  )
}

export function PageIntro({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string
  title: ReactNode
  text: string
  children?: ReactNode
}) {
  return (
    <FadeIn
      as="section"
      className="border-b border-red-100 bg-white py-16 md:py-20"
      distance={12}
    >
      <div className={`${containerClass} grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end`}>
        <div>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <div className="mt-4">
            <h1 className="font-heading text-3xl leading-tight font-semibold uppercase text-zinc-950 md:text-5xl">
              {title}
            </h1>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600">{text}</p>
        </div>
        {children}
      </div>
    </FadeIn>
  )
}

export function FieldLabel({ children }: { children: ReactNode }) {
  return <span className="font-mono text-xs uppercase text-red-600">{children}</span>
}
