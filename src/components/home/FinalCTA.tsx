import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '../ui/Button'
import { Eyebrow } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { ArchOutline, EightStar, Particles, Rosette } from '../ui/Ornaments'

export function FinalCTA() {
  const reduced = useReducedMotion()

  return (
    <section id="final-cta" className="relative isolate overflow-hidden bg-forest-deep">
      {/* atmosphere */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(175deg,#042b22_0%,#063f32_52%,#0b5a46_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(52%_60%_at_50%_0%,rgba(229,201,133,0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(46%_50%_at_10%_95%,rgba(19,114,96,0.6),transparent_72%)]" />
        <div className="pattern-stars absolute inset-0 opacity-[0.14]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      {/* decorative arches framing the panel */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-1/2 hidden h-[520px] w-[420px] -translate-y-1/2 lg:block">
        <ArchOutline className="h-full w-full text-gold-light/20" strokeWidth={1} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[520px] w-[420px] -translate-y-1/2 lg:block"
      >
        <ArchOutline className="h-full w-full text-gold-light/20" strokeWidth={1} />
      </div>

      <Rosette
        className={`absolute -right-40 -top-40 h-[520px] w-[520px] text-gold-light/12 ${
          reduced ? '' : 'anim-spin'
        }`}
      />
      <Rosette
        className={`absolute -bottom-48 -left-40 h-[480px] w-[480px] text-cream/[0.06] ${
          reduced ? '' : 'anim-spin-rev'
        }`}
      />
      <Particles count={22} tone="gold" />

      <div className="shell relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-9 inline-flex"
          >
            <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm">
              <EightStar className="h-8 w-8 text-gold-light" strokeWidth={1.1} />
              <span className="absolute inset-0 animate-ping rounded-full border border-gold/25" />
            </span>
          </motion.div>

          <Reveal direction="fade">
            <Eyebrow tone="light" marker={false}>
              Your first step
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="display-1 mt-6 text-cream">
              Begin your journey
              <span className="block italic text-gold-light">with the Qur’an.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="lede mx-auto mt-7 max-w-2xl text-cream/70">
              Explore authentic Islamic learning designed to deepen knowledge, strengthen faith, and
              transform everyday life.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
              <Button
                href="#top"
                size="lg"
                variant="ivory"
                icon={<ArrowRight className="h-4 w-4" strokeWidth={1.6} />}
              >
                Start Learning
              </Button>
              <Button
                href="#programs"
                size="lg"
                variant="ghost"
                className="border border-cream/25 text-cream hover:bg-cream/10 hover:text-white"
                icon={<Play className="h-3.5 w-3.5" strokeWidth={1.8} />}
                iconPosition="left"
              >
                Explore Programs
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-10 font-arabic text-[1.6rem] leading-relaxed text-gold-light/80" lang="ar" dir="rtl">
              وَقُلْ رَبِّ زِدْنِي عِلْمًا
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-cream/45">
              “And say: My Lord, increase me in knowledge.”
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
