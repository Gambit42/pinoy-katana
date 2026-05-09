import { Anvil, RefreshCw, Sparkles } from 'lucide-react'
import { FadeIn } from '#/components/motion/FadeIn'
import { Stagger, StaggerItem } from '#/components/motion/Stagger'
import { services } from './content'
import { SectionEyebrow, SectionTitle, containerClass } from './shared'

export function ProtocolsSection() {
  const icons = [Anvil, RefreshCw, Sparkles]

  return (
    <FadeIn as="section" className="py-16 md:py-24">
      <div className={containerClass}>
        <div className="max-w-3xl">
          <SectionEyebrow>Services</SectionEyebrow>
          <div className="mt-4">
            <SectionTitle>
              Handmade swords, refurbishment, and blade care.
            </SectionTitle>
          </div>
        </div>

        <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
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
                <h3 className="mt-5 font-heading text-2xl font-semibold uppercase text-zinc-950">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {service.text}
                </p>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </FadeIn>
  )
}
