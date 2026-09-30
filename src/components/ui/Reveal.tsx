import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { SILK, viewportOnce } from '../../lib/motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: -38 },
  right: { x: 38 },
  fade: {},
  scale: { scale: 0.97 },
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.72,
  className = '',
  as = 'div',
  amount,
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  as?: 'div' | 'li' | 'span' | 'section'
  amount?: number
}) {
  const reduced = useReducedMotion()
  const offset = reduced ? {} : offsets[direction]
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: amount ?? viewportOnce.amount }}
      transition={{ duration: reduced ? 0.001 : duration, ease: SILK, delay: reduced ? 0 : delay }}
    >
      {children}
    </MotionTag>
  )
}
