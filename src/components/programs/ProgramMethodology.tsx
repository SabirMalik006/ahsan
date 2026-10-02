import { Reveal } from '../ui/Reveal'
import type { Program } from '../../types/program'

export function ProgramMethodology({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-cream/50">
      <div className="shell">
        <Reveal>
          <h2 className="display-3 text-center text-forest">{program.methodology.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {program.methodology.methods.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.03}>
              <div className="surface h-full rounded-[1.75rem] p-7 shadow-soft">
                <h3 className="font-display text-lg text-forest">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{m.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
