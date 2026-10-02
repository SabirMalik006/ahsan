import { Reveal } from '../ui/Reveal'
import type { Program } from '../../types/program'

export function ProgramAudience({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-ivory">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="display-3 text-forest">{program.audience.title}</h2>
          </Reveal>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {program.audience.groups.map((g, i) => (
              <Reveal key={g} delay={i * 0.04}>
                <span className="inline-flex items-center rounded-full border border-forest/10 bg-white/95 px-4 py-1.5 text-sm text-forest shadow-sm">
                  {g}
                </span>
              </Reveal>
            ))}
          </div>
          {program.audience.notes && (
            <Reveal delay={0.08}>
              <p className="lede mt-4">{program.audience.notes}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
