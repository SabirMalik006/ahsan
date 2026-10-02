import { Reveal } from '../ui/Reveal'
import type { Program } from '../../types/program'

export function ProgramApproach({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-ivory">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="display-3 text-forest">{program.approach.title}</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="lede mt-4">{program.approach.description}</p>
          </Reveal>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {program.approach.pillars.map((p, i) => (
            <Reveal key={p} delay={i * 0.04}>
              <span className="inline-flex items-center rounded-full border border-gold/40 bg-white/90 px-4 py-1.5 text-sm text-forest shadow-sm backdrop-blur-md">
                {p}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
