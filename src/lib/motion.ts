import type { Variants } from 'framer-motion'

/** Silk easing — calm, editorial, no bounce. */
export const SILK = [0.22, 1, 0.36, 1] as const
export const SILK_IN_OUT = [0.65, 0, 0.35, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: SILK },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: SILK } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.965 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: SILK } },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 42 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: SILK } },
}

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -42 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: SILK } },
}

/**
 * Container that reveals children one after another.
 * Feels composed rather than "cartoon cascade".
 */
export const staggerParent = (stagger = 0.09, delayChildren = 0.05): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

/** Blur-to-sharp reveal used for hero typography. */
export const blurUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: SILK },
  },
}

/** Viewport defaults so every reveal behaves consistently. */
export const viewportOnce = { once: true, amount: 0.25 } as const
