import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '#/components/motion/FadeIn'
import { Stagger, StaggerItem } from '#/components/motion/Stagger'
import { orderFaqs } from './content'
import { SectionEyebrow, SectionTitle, containerClass } from './shared'

export function FaqSection() {
  const [openItem, setOpenItem] = useState('')

  return (
    <FadeIn
      as="section"
      className="border-t border-zinc-200 bg-white py-16 md:py-24"
    >
      <div
        className={`${containerClass} grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]`}
      >
        <div>
          <SectionEyebrow>FAQs</SectionEyebrow>
          <div className="mt-4">
            <SectionTitle>Order questions, answered.</SectionTitle>
          </div>
        </div>

        <Stagger className="rounded border border-zinc-200 bg-stone-50 px-5">
          {orderFaqs.map((item, index) => (
            <FaqItem
              answer={item.answer}
              isOpen={openItem === `faq-${index}`}
              key={item.question}
              onToggle={() =>
                setOpenItem((current) =>
                  current === `faq-${index}` ? '' : `faq-${index}`,
                )
              }
              question={item.question}
              value={`faq-${index}`}
            />
          ))}
        </Stagger>
      </div>
    </FadeIn>
  )
}

function FaqItem({
  answer,
  isOpen,
  onToggle,
  question,
  value,
}: {
  answer: string
  isOpen: boolean
  onToggle: () => void
  question: string
  value: string
}) {
  return (
    <StaggerItem className="border-b border-zinc-200 last:border-b-0">
      <h3 className="flex">
        <button
          aria-controls={`${value}-panel`}
          aria-expanded={isOpen}
          className="flex flex-1 items-center justify-between gap-4 rounded py-4 text-left font-heading text-base font-bold uppercase text-zinc-950 outline-none hover:text-red-700 focus-visible:ring-3 focus-visible:ring-red-700/20"
          id={`${value}-trigger`}
          onClick={onToggle}
          type="button"
        >
          {question}
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-zinc-500"
          >
            <ChevronDown size={18} />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            aria-labelledby={`${value}-trigger`}
            exit={{ height: 0, opacity: 0 }}
            id={`${value}-panel`}
            initial={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
            role="region"
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pt-0 pb-4 text-sm leading-7 text-zinc-600">
              {answer}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </StaggerItem>
  )
}
