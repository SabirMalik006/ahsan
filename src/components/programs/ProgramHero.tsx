import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SILK } from '../../lib/motion'
import type { Program } from '../../types/program'

export function ProgramHero({ program }: { program: Program }) {
  return (
    <section className="relative overflow-hidden bg-ivory pt-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120vh] bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.12),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pattern-arabesque pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[40rem] w-[40rem] rotate-12 opacity-[0.08]"
      />
      <div className="shell section-y pb-10 md:pb-14">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto inline-flex items-center rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-forest shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
              {program.categoryLabel}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-2 mt-6 text-forest">{program.name}</h1>
          </Reveal>
          {program.heroTagline && (
            <Reveal delay={0.08}>
              <p className="mt-4 font-display text-lg text-forest/90 md:text-xl">{program.heroTagline}</p>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <p className="lede mx-auto mt-5 max-w-3xl">{program.heroDescription}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={program.primaryCta.href} size="lg" icon={<ArrowRight className="h-4 w-4" strokeWidth={1.6} />}>
                {program.primaryCta.label}
              </Button>
              <Button href={program.secondaryCta.href} variant="outline" size="lg">
                {program.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: SILK }}
            className="relative mx-auto mt-10 max-w-3xl"
          >
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-b from-gold/14 via-transparent to-transparent blur-2xl" />
            <div className="surface arch-top mx-auto flex items-center justify-center px-6 py-6 text-center shadow-lift md:px-10 md:py-8">
              <p className="font-display text-xl leading-relaxed text-forest md:text-2xl">
                I did not create jinn and humankind except to worship Me.
              </p>
            </div>
            <p className="mt-3 text-xs text-muted/80">Surah Adh-Dhariyat, 51:56</p>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  )
}
