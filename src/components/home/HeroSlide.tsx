import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { HeroSlide as HeroSlideData } from '../../data/heroSlides'
import { SILK, blurUp, staggerParent } from '../../lib/motion'
import { HeroVideo } from '../ui/HeroVideo'
import { ArchOutline, EightStar, Rosette } from '../ui/Ornaments'
import { SceneFamily, SceneLibrary, SceneQuran } from './HeroVisuals'

const scenes = {
  quran: SceneQuran,
  library: SceneLibrary,
  family: SceneFamily,
} as const

/* --------------------------------------------------------------------------
   CTA — squared-soft geometry (16–18px), never a pill
   -------------------------------------------------------------------------- */
function HeroCta({
  href,
  children,
  variant,
  tabIndex,
}: {
  href: string
  children: ReactNode
  variant: 'primary' | 'secondary'
  tabIndex?: number
}) {
  const base =
    'group/cta inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[18px] px-7 text-[0.9rem] font-medium tracking-[0.01em] transition-[transform,background-color,color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0'
  const look =
    variant === 'primary'
      ? 'bg-forest text-cream shadow-[0_18px_38px_-22px_rgba(6,63,50,0.85)] hover:bg-forest-soft hover:shadow-[0_24px_46px_-22px_rgba(6,63,50,0.7)]'
      : 'border border-forest/20 bg-cream/40 text-forest hover:border-gold/70 hover:bg-forest/[0.04] hover:text-forest-deep'

  return (
    <a href={href} tabIndex={tabIndex} className={`${base} ${look}`}>
      {children}
      {variant === 'primary' ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-1"
          strokeWidth={1.6}
        />
      ) : null}
    </a>
  )
}

/* --------------------------------------------------------------------------
   One slide — 42 / 58 editorial split, video dominant
   -------------------------------------------------------------------------- */
export function HeroSlide({
  slide,
  active,
  index,
  total,
}: {
  slide: HeroSlideData
  active: boolean
  index: number
  total: number
}) {
  const reduced = useReducedMotion()
  const Scene = scenes[slide.scene]

  const textVariants = reduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.001 } } }
    : blurUp

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-10 xl:gap-16">
      {/* ================= LEFT — compact editorial content ================= */}
      <motion.div
        variants={staggerParent(0.085, 0.08)}
        initial="hidden"
        animate={active ? 'show' : 'hidden'}
        className="order-1 max-w-[34rem] lg:max-w-none"
      >
        <motion.div variants={textVariants} className="flex items-center gap-3">
          <EightStar className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.5} />
          <span className="h-px w-9 bg-gradient-to-r from-gold/70 to-transparent" aria-hidden />
          <span className="eyebrow text-gold-deep">{slide.eyebrow}</span>
        </motion.div>

        <h1 className="hero-display mt-6 text-forest">
          {slide.titleLines.map((line, i) => (
            <motion.span
              key={line}
              variants={textVariants}
              className={`block ${
                slide.emphasisLastLine && i === slide.titleLines.length - 1
                  ? 'mt-1 italic text-forest-soft'
                  : ''
              }`}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={textVariants}
          className="mt-6 max-w-[33rem] text-[1.0625rem] leading-[1.75] text-muted"
        >
          {slide.description}
        </motion.p>

        <motion.div
          variants={textVariants}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <HeroCta href={slide.primaryCta.href} variant="primary" tabIndex={active ? 0 : -1}>
            {slide.primaryCta.label}
          </HeroCta>
          <HeroCta href={slide.secondaryCta.href} variant="secondary" tabIndex={active ? 0 : -1}>
            {slide.secondaryCta.label}
          </HeroCta>
        </motion.div>

        <motion.p
          variants={textVariants}
          className="mt-7 flex items-center gap-2.5 text-[0.8125rem] text-muted"
        >
          <EightStar className="h-3 w-3 shrink-0 text-gold/80" strokeWidth={1.6} />
          {slide.meta}
        </motion.p>
      </motion.div>

      {/* ================= RIGHT — cinematic video installation ================= */}
      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.965, y: 24 }}
        animate={active ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.985, y: 10 }}
        transition={{ duration: reduced ? 0.001 : 1.05, ease: SILK }}
        className="order-2 relative"
      >
        {/* offset deep-green architectural panel */}
        <div
          aria-hidden
          className="absolute -bottom-10 -left-5 -right-5 top-8 rounded-[40px] border border-forest/10 bg-[linear-gradient(180deg,rgba(6,63,50,0.07),rgba(6,63,50,0.015))] lg:-left-6 lg:-right-7"
        />
        {/* pointed arch outline */}
        <ArchOutline
          className="absolute -right-5 -top-6 h-[112%] w-[116%] text-gold/30 lg:-right-7"
          strokeWidth={1.1}
        />
        <Rosette className="anim-spin absolute -left-9 -top-10 h-56 w-56 text-gold/15" />
        <Rosette className="anim-spin-rev absolute -bottom-20 -right-10 h-64 w-64 text-forest/[0.07]" />

        {/* the frame */}
        <div className="relative h-[336px] w-full overflow-hidden rounded-[26px] shadow-[0_60px_120px_-55px_rgba(4,43,34,0.72)] ring-1 ring-inset ring-white/25 sm:h-[380px] lg:h-[clamp(430px,56vh,600px)] lg:rounded-[30px]">
          <HeroVideo
            src={slide.video.src}
            poster={slide.video.poster}
            active={active}
            label={slide.caption}
            fallback={<Scene />}
          />

          {/* cinematic scrim — keeps the footage readable, never dims it */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,43,34,0.32)_0%,rgba(4,43,34,0)_28%,rgba(4,43,34,0)_60%,rgba(4,43,34,0.40)_100%)]"
          />
          {/* soft haze on the copy side — the film dissolves into the blur seam */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-[22%] bg-[linear-gradient(90deg,rgba(248,244,234,0.42)_0%,rgba(248,244,234,0.16)_46%,rgba(248,244,234,0)_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/12"
          />

          {/* tiny technical label */}
          <p className="absolute left-5 top-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-cream/80 sm:left-6 sm:top-6">
            <span className="h-1 w-1 rounded-full bg-gold-light" aria-hidden />
            {slide.videoLabel}
          </p>

          {/* counter tied to the carousel */}
          <p className="absolute bottom-5 right-5 text-[10px] uppercase tabular-nums tracking-[0.22em] text-cream/70 sm:bottom-6 sm:right-6">
            {String(index + 1).padStart(2, '0')}
            <span className="mx-1 text-cream/40">/</span>
            {String(total).padStart(2, '0')}
          </p>
        </div>

        {/* floating glass badge — overlaps the frame */}
        <motion.div
          animate={reduced ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity }}
          className="absolute -bottom-5 left-0 flex items-center gap-3 rounded-[18px] border border-white/70 bg-white/[0.86] px-4 py-3 shadow-[0_28px_60px_-32px_rgba(6,63,50,0.62)] backdrop-blur-md sm:-left-5"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-[12px] border border-gold/35 bg-gold/12">
            <EightStar className="h-4 w-4 text-gold-deep" strokeWidth={1.2} />
          </span>
          <span className="font-display text-[0.95rem] leading-tight text-forest">
            {slide.badge}
          </span>
        </motion.div>

        {/* short gold hairline */}
        <div
          aria-hidden
          className="absolute -bottom-2 right-8 hidden h-px w-24 bg-gradient-to-r from-transparent via-gold/70 to-transparent lg:block"
        />
      </motion.div>
    </div>
  )
}
