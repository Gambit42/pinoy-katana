import { FadeIn } from '#/components/motion/FadeIn'
import { Stagger, StaggerItem } from '#/components/motion/Stagger'
import { customOrders, orderUses } from './content'
import { RequestFormButton } from './RequestFormDialog'
import { containerClass } from './shared'

export function CommissionSection() {
  return (
    <FadeIn as="section" className="bg-white py-16 md:py-24">
      <div className={containerClass}>
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.34em] text-red-600">
            Custom Orders
          </div>
          <h2 className="mt-6 font-heading text-4xl leading-none font-bold uppercase text-zinc-950 md:text-6xl">
            {customOrders.title}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 font-semibold text-zinc-600">
            {customOrders.text}
          </p>
          <div className="mx-auto mt-10 h-px w-12 bg-zinc-500" />
        </div>

        <div className="border-t-4 border-red-700 bg-black px-6 py-8 text-white md:px-14 md:py-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-2xl leading-none font-bold uppercase md:text-3xl">
                Start Designing Your Custom Blade
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/56">
                Send your concept with complete details. Our skilled Filipino
                blacksmiths will review your request for feasibility, pricing,
                and production schedule.
              </p>
            </div>

            <RequestFormButton className="inline-flex min-h-12 w-full items-center justify-center border border-red-700 bg-red-700 px-8 font-heading text-xs font-bold uppercase text-white no-underline hover:border-white hover:bg-white hover:text-red-700 md:w-auto md:min-w-48">
              Start Order
            </RequestFormButton>
          </div>

          <Stagger className="mt-8 grid gap-3 border-t border-white/15 pt-6 md:grid-cols-5">
            {orderUses.map((item) => (
              <StaggerItem
                className="font-mono text-[10px] uppercase leading-5 text-white/64"
                key={item}
              >
                {item}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </FadeIn>
  )
}
