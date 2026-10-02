import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'
import { visionContent } from '../data/vision'

export default function AboutVision() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-28 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120vh] bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.12),transparent_70%)]" />
      <div aria-hidden className="pattern-arabesque pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[40rem] w-[40rem] rotate-12 opacity-[0.08]" />
      <div className="shell section-y">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto inline-flex items-center rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-forest shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
              {visionContent.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-2 mt-6 text-forest">{visionContent.title}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 font-display text-lg text-forest/90 md:text-xl">{visionContent.tagline}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mx-auto mt-5 max-w-3xl">{visionContent.description}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {visionContent.sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="surface h-full rounded-[2rem] p-8 shadow-soft md:p-10">
                <h2 className="font-display text-2xl text-forest md:text-3xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{s.description}</p>
                {s.points && (
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 rounded-2xl border border-forest/8 bg-white/90 px-3 py-2 text-sm text-forest shadow-sm">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="relative mx-auto mt-12 max-w-3xl text-center"
        >
          <div className="surface arch-top mx-auto px-6 py-8 shadow-lift md:px-10 md:py-10">
            <p className="font-display text-xl leading-relaxed text-forest md:text-2xl">
              Our Lord, grant us joy through our families, and make us examples for the mindful.
            </p>
            <p className="mt-3 text-xs text-muted/80">Surah Al-Furqan, 25:74</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
