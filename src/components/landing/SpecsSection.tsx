import { FadeIn } from '#/components/motion/FadeIn'
import { Stagger, StaggerItem } from '#/components/motion/Stagger'
import { bladeLineup } from './content'
import { SectionEyebrow, SectionTitle, containerClass } from './shared'

export function SpecsSection() {
  return (
    <FadeIn as="section" className="border-y border-zinc-200 bg-stone-100 py-16 md:py-24">
      <div className={`${containerClass} grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]`}>
        <div>
          <SectionEyebrow>Blade Line-Up</SectionEyebrow>
          <div className="mt-4">
            <SectionTitle>Wide range of custom swords and blades.</SectionTitle>
          </div>
        </div>
        <Stagger className="grid gap-3 md:grid-cols-2">
          {bladeLineup.map((item) => (
            <StaggerItem
              className="rounded border border-zinc-200 bg-white px-5 py-4 font-mono text-xs uppercase text-zinc-700"
              key={item}
            >
              {item}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </FadeIn>
  )
}
