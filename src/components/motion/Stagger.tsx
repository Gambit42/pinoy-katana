import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type StaggerElement = 'div' | 'nav'
type StaggerItemElement = 'article' | 'div' | 'li'

type StaggerProps = {
  as?: StaggerElement
  children: ReactNode
  className?: string
  delayChildren?: number
}

type StaggerItemProps = {
  as?: StaggerItemElement
  children: ReactNode
  className?: string
  hoverLift?: boolean
}

const viewport = { once: true, margin: '-80px' }

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export function Stagger({
  as = 'div',
  children,
  className,
  delayChildren = 0,
}: StaggerProps) {
  const motionProps = {
    className,
    initial: 'hidden',
    variants: {
      hidden: {},
      show: {
        transition: { delayChildren, staggerChildren: 0.08 },
      },
    },
    viewport,
    whileInView: 'show',
  }

  if (as === 'nav') {
    return <motion.nav {...motionProps}>{children}</motion.nav>
  }

  return <motion.div {...motionProps}>{children}</motion.div>
}

export function StaggerItem({
  as = 'div',
  children,
  className,
  hoverLift = false,
}: StaggerItemProps) {
  const motionProps = {
    className,
    transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
    variants: staggerItemVariants,
    whileHover: hoverLift
      ? { boxShadow: '0 18px 40px rgba(24, 24, 27, 0.12)', y: -4 }
      : undefined,
  }

  if (as === 'article') {
    return <motion.article {...motionProps}>{children}</motion.article>
  }

  if (as === 'li') {
    return <motion.li {...motionProps}>{children}</motion.li>
  }

  return <motion.div {...motionProps}>{children}</motion.div>
}
