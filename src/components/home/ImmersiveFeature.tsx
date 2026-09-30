import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { stats } from '../../data/programs'
import { Button } from '../ui/Button'
import { Eyebrow } from '../ui/Badge'
import { Counter } from '../ui/Counter'
import { Reveal } from '../ui/Reveal'
import { ArchOutline, EightStar, Particles, Rosette } from '../ui/Ornaments'

/** Layered 3D composition — CSS transforms only, no WebGL cost. */
function DepthInstallation() {
  const reduced = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" style={{ perspective: 1100 }}>
      <div
        className="anim-float absolute inset-0"
        style={{ transformStyle: 'preserve-3d' }}
        aria-hidden
      >
        {/* halo */}
        <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(229,201,133,0.35),transparent_72%)] blur-2xl" />

        {/* rotating rosette layers at different depths */}
        <Rosette
          className={`absolute inset-0 text-gold/35 ${reduced ? '' : 'anim-spin'}`}
          strokeWidth={0.6}
        />
        <div style={{ transform: 'translateZ(48px)' }} className="absolute inset-[12%]">
          <Rosette className={`h-full w-full text-gold-light/45 ${reduced ? '' : 'anim-spin-rev'}`} strokeWidth={0.7} />
        </div>

        {/* arch rings stacked in depth */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute"
            style={{ inset: `${14 + i * 7}% ${18 + i * 6}% ${10 + i * 5}%`, transform: `translateZ(${i * 34}px)` }}
          >
            <ArchOutline className="h-full w-full text-cream/25" strokeWidth={0.9} />
          </div>
        ))}

        {/* central open book, gently rotating */}
        <motion.div
          className="absolute left-1/2 top-[52%] w-[62%] -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(90px)' }}
          animate={reduced ? undefined : { rotateY: [-7, 7, -7] }}
          transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity }}
        >
          <div className="relative flex h-[130px] w-full">
            {(['left', 'right'] as const).map((side) => (
              <div
                key={side}
                className={`relative h-full w-1/2 overflow-hidden border-gold/40 ${
                  side === 'left'
                    ? 'origin-right rounded-l-[6px] border-y border-l [transform:rotateY(22deg)]'
                    : 'origin-left rounded-r-[6px] border-y border-r [transform:rotateY(-22deg)]'
                }`}
                style={{
                  backgroundImage:
                    side === 'left'
                      ? 'linear-gradient(100deg,#f2ead9,#f8f4ea_65%,#e6dcc6)'
                      : 'linear-gradient(260deg,#f2ead9,#f8f4ea_65%,#e6dcc6)',
                }}
              >
                <div
                  className="absolute inset-3 opacity-45"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(to bottom, rgba(16,34,29,0.16) 0 1px, transparent 1px 9px)',
                  }}
                />
                <div
                  className={`absolute inset-y-0 w-[24%] ${
                    side === 'left'
                      ? 'right-0 bg-[linear-gradient(270deg,rgba(6,63,50,0.25),transparent)]'
                      : 'left-0 bg-[linear-gradient(90deg,rgba(6,63,50,0.25),transparent)]'
                  }`}
                />
              </div>
            ))}
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-forest-deep/70" />
          </div>
          <div className="absolute inset-x-[12%] -bottom-6 h-6 rounded-[50%] bg-black/40 blur-xl" />
        </motion.div>

        {/* floating gold accents */}
        <div
          className="anim-float absolute right-[6%] top-[14%]"
          style={{ transform: 'translateZ(120px)', animationDelay: '1.2s' }}
        >
          <EightStar className="h-10 w-10 text-gold-light" strokeWidth={1} />
        </div>
        <div
          className="anim-float absolute bottom-[16%] left-[4%]"
          style={{ transform: 'translateZ(70px)', animationDelay: '2.4s' }}
        >
          <EightStar className="h-6 w-6 text-gold-light/80" strokeWidth={1.2} />
        </div>
      </div>

      <Particles count={16} tone="cream" className="opacity-70" />
    </div>
  )
}

export function ImmersiveFeature() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep py-24 md:py-32">
      {/* deep green atmosphere */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#042b22_0%,#063f32_48%,#042b22_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_50%_at_78%_30%,rgba(11,90,70,0.85),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_12%_88%,rgba(201,164,92,0.18),transparent_70%)]" />
        <div className="pattern-grid absolute inset-0 opacity-[0.06]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cream/8 to-transparent" />
      </div>

      <div className="shell relative grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
        <div>
          <Reveal direction="fade">
            <Eyebrow tone="light">The Purpose of Knowledge</Eyebrow>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="display-2 mt-5 text-cream">
              Knowledge becomes powerful
              <span className="block italic text-gold-light">when it shapes life.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="lede mt-6 max-w-xl text-cream/70">
              Scholarship is not measured by how much you can recall, but by how it orders your
              character, your household and your contribution. Every course at Ihsan Global is
              written with that end in view — the classroom is only the beginning.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#final-cta" variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" strokeWidth={1.6} />}>
                Begin your journey
              </Button>
              <Button
                href="#scholars"
                variant="ghost"
                size="lg"
                className="text-cream/80 hover:bg-cream/8 hover:text-cream"
              >
                Meet our scholars
              </Button>
            </div>
          </Reveal>

          {/* animated statistics */}
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-cream/12 pt-10 sm:grid-cols-4 sm:gap-x-6">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.08 * i} direction="fade">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <p className="font-display text-[2.1rem] leading-none text-gold-light md:text-[2.6rem]">
                    <Counter value={stat.value} />
                    <span>{stat.suffix}</span>
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-cream/60">
                    {stat.label}
                  </p>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal direction="scale" duration={1} className="order-first lg:order-none">
          <DepthInstallation />
        </Reveal>
      </div>
    </section>
  )
}
