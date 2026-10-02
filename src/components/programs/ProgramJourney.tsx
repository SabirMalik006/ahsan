import { Reveal } from '../ui/Reveal'
import type { Program } from '../../types/program'

export function ProgramJourney({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-cream/60">
      <div aria-hidden className="pointer-events-none absolute right-[-20%] top-10 -z-10 h-[30rem] w-[30rem] opacity-[0.08] pattern-arabesque" />
      <div className="shell">
        <Reveal>
          <h2 className="display-3 text-center text-forest">{program.learningJourney.title}</h2>
        </Reveal>
        <div className="mt-10 space-y-6">
          {program.learningJourney.stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="surface relative overflow-hidden rounded-[2rem] p-8 shadow-soft md:p-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                  <div className="flex shrink-0 items-center justify-center">
                    <div className="relative grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-gradient-to-br from-forest via-forest-soft to-forest-deep text-2xl font-display text-cream shadow-[0_20px_60px_-30px_rgba(6,63,50,0.9)] md:h-20 md:w-20">
                      {s.number}
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_20%,rgba(229,201,133,0.28),transparent_70%)]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-forest">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{s.description}</p>
                    {s.focusAreas.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.focusAreas.map((f) => (
                          <span key={f} className="inline-flex items-center rounded-full border border-forest/10 bg-white/95 px-3 py-1 text-xs text-forest shadow-sm">
                            {f}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
