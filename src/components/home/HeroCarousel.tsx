import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent as ReactTouchEvent,
} from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { heroSlides } from '../../data/heroSlides'
import { SILK } from '../../lib/motion'
import { HeroSlide } from './HeroSlide'

/** 8 s per slide. The carousel is fully automatic — no visible controls. */
const AUTOPLAY_MS = 8000

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  /* the only thing that halts autoplay: the tab is in the background */
  const [hidden, setHidden] = useState(false)
  const touchStart = useRef<number | null>(null)
  const total = heroSlides.length
  const reduced = useReducedMotion()

  const goTo = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total],
  )
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  /* ---- autoplay — always running --------------------------------------- */
  useEffect(() => {
    if (reduced || hidden) return

    const timer = window.setInterval(next, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [next, hidden, reduced])

  /* ---- don't burn cycles in a hidden tab ------------------------------- */
  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  /* ---- keyboard -------------------------------------------------------- */
  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    }
    if (e.key === 'Home') {
      e.preventDefault()
      goTo(0)
    }
    if (e.key === 'End') {
      e.preventDefault()
      goTo(total - 1)
    }
  }

  /* ---- swipe ----------------------------------------------------------- */
  const onTouchStart = (e: ReactTouchEvent) => {
    touchStart.current = e.touches[0]?.clientX ?? null
  }
  const onTouchEnd = (e: ReactTouchEvent) => {
    const start = touchStart.current
    touchStart.current = null
    if (start === null) return
    const delta = (e.changedTouches[0]?.clientX ?? start) - start
    if (Math.abs(delta) > 48) (delta < 0 ? next : prev)()
  }

  return (
    <section
      id="top"
      aria-roledescription="carousel"
      aria-label="Featured learning at Ihsan Global Quran Academy"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative isolate overflow-hidden outline-none"
    >
      {/* ================= premium background ================= */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7F8F3_0%,#F8F4EA_56%,#F8F4EA_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(72%_54%_at_16%_4%,rgba(221,233,222,0.8),transparent_64%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(52%_46%_at_93%_86%,rgba(6,63,50,0.13),transparent_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(36%_28%_at_76%_0%,rgba(201,164,92,0.16),transparent_72%)]" />
        {/* barely-there geometry — texture, not noise */}
        <div className="pattern-grid absolute inset-0 opacity-[0.03]" />
        {/* dissolve into the cream section below */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </div>

      <div className="shell relative flex min-h-[calc(100svh-2px)] flex-col pb-9 pt-[104px] lg:min-h-[92vh] lg:pb-11 lg:pt-[118px]">
        {/* stacked slides — a single grid cell keeps the layout from shifting */}
        <div className="relative grid flex-1 items-center" id="hero-slides">
          {heroSlides.map((slide, i) => {
            const isActive = i === index
            return (
              <motion.div
                key={slide.id}
                className={`col-start-1 row-start-1 ${
                  isActive ? 'z-[2]' : 'pointer-events-none z-[1]'
                }`}
                initial={false}
                animate={
                  isActive
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: i > index ? 0.98 : 1.02 }
                }
                transition={{ duration: reduced ? 0.001 : 0.9, ease: SILK }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}`}
                aria-hidden={!isActive}
              >
                <HeroSlide slide={slide} active={isActive} index={i} total={total} />
              </motion.div>
            )
          })}

          {/* ===== atmospheric blur seam where the copy meets the film ===== */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-[3%] left-[46%] z-[3] hidden w-[210px] -translate-x-1/2 lg:block"
          >
            <div
              className="absolute inset-0 blur-2xl"
              style={{
                background:
                  'linear-gradient(90deg, rgba(248,244,234,0) 0%, rgba(237,229,213,0.72) 30%, rgba(221,233,222,0.72) 50%, rgba(248,244,234,0.42) 70%, rgba(248,244,234,0) 100%)',
                maskImage: 'linear-gradient(180deg, transparent 0%, #000 24%, #000 76%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(180deg, transparent 0%, #000 24%, #000 76%, transparent 100%)',
              }}
            />
            <div className="anim-sheen absolute inset-0 blur-xl bg-[radial-gradient(44%_36%_at_50%_46%,rgba(201,164,92,0.32),transparent_72%)]" />
          </div>
        </div>

        {/* announcements for assistive tech */}
        <p className="sr-only" aria-live="polite">
          Slide {index + 1} of {total}: {heroSlides[index].videoLabel}
        </p>
      </div>
    </section>
  )
}
