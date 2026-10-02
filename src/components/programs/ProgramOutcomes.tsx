import { Reveal } from '../ui/Reveal'
import type { Program } from '../../types/program'

export function ProgramOutcomes({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-ivory">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-[-15%] -z-10 h-[30rem] w-[30rem] opacity-[0.07] pattern-stars" />
      <div className="shell">
        <Reveal>
          <h2 className="display-3 text-center text-forest">{program.outcomes.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {program.outcomes.outcomes.map((o, i) => (
            <Reveal key={o.category} delay={i * 0.05}>
              <div className="surface h-full rounded-[1.75rem] p-8 shadow-soft">
                <h3 className="font-display text-xl text-forest">{o.category}</h3>
                <ul className="mt-4 space-y-2.5 text-muted">
                  {o.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
