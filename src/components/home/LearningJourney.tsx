import { useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { ArrowLeft, ArrowRight, MoveHorizontal } from 'lucide-react'
import { journeyStages } from '../../data/journey'
import { SILK } from '../../lib/motion'
import { Eyebrow } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { EightStar } from '../ui/Ornaments'

/* Geometry shared by the rail and the SVG path so nodes always align. */
const CARD_W = 300
const GAP = 32
const STEP = CARD_W + GAP
const COUNT = journeyStages.length
const VB_W = CARD_W + (COUNT - 1) * STEP
const VB_H = 300
const MID_Y = VB_H / 2
const AMP = 105

const nodeX = (i: number) => CARD_W / 2 + i * STEP

const journeyPath =
  `M ${nodeX(0)} ${MID_Y} ` +
  Array.from({ length: COUNT - 1 }, (_, i) => {
    const from = nodeX(i)
    const to = nodeX(i + 1)
    const controlY = i % 2 === 0 ? MID_Y - AMP : MID_Y + AMP
    return `Q ${(from + to) / 2} ${controlY} ${to} ${MID_Y}`
  }).join(' ')

function NodeDot({ x, at, progress }: { x: number; at: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [Math.max(at - 0.06, 0), at + 0.05], [0.2, 1])

  return (
    <motion.g style={{ opacity }}>
      <circle cx={x} cy={MID_Y} r={12} fill="none" stroke="#E5C985" strokeWidth={1} />
      <circle cx={x} cy={MID_Y} r={5.5} fill="#C9A45C" />
    </motion.g>
  )
}

export function LearningJourney() {
  const railRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: railRef, axis: 'x' })
  const smooth = useSpring(scrollXProgress, { stiffness: 90, damping: 24, mass: 0.4 })
  const pathLength = useTransform(smooth, [0, 1], [0.02, 1])
  const railProgress = useTransform(smooth, [0, 1], [0.08, 1])
  const [atEnd, setAtEnd] = useState(false)

  useMotionValueEvent(smooth, 'change', (v) => setAtEnd(v > 0.985))

  const scrollRail = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * STEP, behavior: 'smooth' })
  }

  return (
    <section id="journey" className="section-y relative overflow-hidden bg-cream">
      <div className="pattern-grid absolute inset-0 opacity-[0.04]" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(221,233,222,0.9),transparent_70%)]"
        aria-hidden
      />

      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal direction="fade">
              <Eyebrow>The Learning Ecosystem</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display-2 mt-5">
                One journey. Many paths.
                <span className="block italic text-forest-soft">One purpose.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede mt-5 max-w-xl">
                Learning here is sequenced, not scattered. Begin at the foundations and
                progress through eight connected stages — each one building on the last, at whatever
                pace your life allows.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16} direction="right" className="lg:pb-3">
            <div className="flex items-center gap-4 rounded-2xl border border-forest/8 bg-white/70 px-5 py-4 backdrop-blur-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-gold-light">
                <EightStar className="h-5 w-5" strokeWidth={1.2} />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg text-forest">Eight stages</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Foundations → Ijāzah</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ================= the journey rail ================= */}
        <div className="relative mt-14 md:mt-20">
          <div
            ref={railRef}
            role="region"
            aria-label="Eight stages of the learning journey"
            tabIndex={0}
            className="no-scrollbar snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-2"
          >
            <div className="relative flex w-max" style={{ gap: GAP }}>
              {/* journey line, drawn by horizontal scroll */}
              <svg
                aria-hidden
                className="pointer-events-none absolute left-0 top-0"
                viewBox={`0 0 ${VB_W} ${VB_H}`}
                preserveAspectRatio="none"
                style={{ width: VB_W, height: '100%' }}
              >
                <path
                  d={journeyPath}
                  fill="none"
                  stroke="#063F32"
                  strokeOpacity={0.12}
                  strokeWidth={1.4}
                  strokeDasharray="6 8"
                  vectorEffect="non-scaling-stroke"
                />
                <motion.path
                  d={journeyPath}
                  fill="none"
                  stroke="url(#journey-gradient)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  pathLength={1}
                  style={{ pathLength }}
                  vectorEffect="non-scaling-stroke"
                />
                <defs>
                  <linearGradient id="journey-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0B5A46" />
                    <stop offset="55%" stopColor="#C9A45C" />
                    <stop offset="100%" stopColor="#E5C985" />
                  </linearGradient>
                </defs>
                {journeyStages.map((stage, i) => (
                  <NodeDot
                    key={stage.number}
                    x={nodeX(i)}
                    at={i / (COUNT - 1)}
                    progress={smooth}
                  />
                ))}
              </svg>

              {journeyStages.map((stage, i) => {
                const Icon = stage.icon
                return (
                  <motion.article
                    key={stage.number}
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, ease: SILK, delay: (i % 4) * 0.08 }}
                    className="group relative shrink-0 snap-start"
                    style={{ width: CARD_W }}
                  >
                    <div className="relative flex h-full flex-col rounded-[26px] border border-forest/8 bg-white/85 p-6 backdrop-blur-sm transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:border-gold/40 group-hover:shadow-[0_34px_60px_-34px_rgba(6,63,50,0.45)]">
                      <div className="pattern-arabesque absolute inset-0 rounded-[26px] opacity-0 transition-opacity duration-700 group-hover:opacity-[0.07]" />

                      <div className="relative flex items-start justify-between">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] rounded-tl-[26px] border border-forest/10 bg-sage/50 text-forest transition-colors duration-500 group-hover:border-gold/40 group-hover:bg-gold/15">
                          <Icon className="h-[22px] w-[22px]" strokeWidth={1.3} />
                        </span>
                        <span className="font-display text-[1.75rem] leading-none text-forest/15 transition-colors duration-500 group-hover:text-gold/60">
                          {stage.number}
                        </span>
                      </div>

                      <h3 className="relative mt-6 font-display text-[1.32rem] text-forest">
                        {stage.title}
                      </h3>
                      <p className="relative mt-2.5 text-[0.875rem] leading-[1.75] text-muted">
                        {stage.description}
                      </p>

                      <span className="relative mt-6 block h-px w-10 bg-gold/60 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-20" />
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>

          {/* rail progress + controls */}
          <div className="mt-9 flex items-center gap-5">
            <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-forest/10">
              <motion.span
                className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-forest-soft via-gold to-gold-light"
                style={{ scaleX: railProgress }}
              />
            </div>

            <p className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted/80 sm:inline-flex">
              <MoveHorizontal className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
              Drag to explore
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollRail(-1)}
                aria-label="Scroll to previous stages"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/12 text-forest/75 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/60"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => scrollRail(1)}
                disabled={atEnd}
                aria-label="Scroll to next stages"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/12 text-forest/75 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/60 disabled:opacity-35"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
