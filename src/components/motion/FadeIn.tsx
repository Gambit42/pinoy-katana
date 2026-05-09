import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type FadeInElement = 'article' | 'div' | 'section'
type FadeInDirection = 'down' | 'left' | 'right' | 'up'

type FadeInProps = {
  as?: FadeInElement
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
  direction?: FadeInDirection
}

const viewport = { once: true, margin: '-80px' }

function getOffset(direction: FadeInDirection, distance: number) {
  if (direction === 'down') {
    return { x: 0, y: -distance }
  }

  if (direction === 'left') {
    return { x: distance, y: 0 }
  }

  if (direction === 'right') {
    return { x: -distance, y: 0 }
  }

  return { x: 0, y: distance }
}

export function FadeIn({
  as = 'div',
  children,
  className,
  delay = 0,
  distance = 18,
  direction = 'up',
}: FadeInProps) {
  const offset = getOffset(direction, distance)
  const motionProps = {
    className,
    initial: { opacity: 0, ...offset },
    transition: { delay, duration: 0.48, ease: [0.22, 1, 0.36, 1] },
    viewport,
    whileInView: { opacity: 1, x: 0, y: 0 },
  }

  if (as === 'section') {
    return <motion.section {...motionProps}>{children}</motion.section>
  }

  if (as === 'article') {
    return <motion.article {...motionProps}>{children}</motion.article>
  }

  return <motion.div {...motionProps}>{children}</motion.div>
}
