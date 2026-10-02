import { Reveal } from '../ui/Reveal'
import type { Program } from '../../types/program'

export function ProgramOffer({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-cream/50">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 -z-10 h-[28rem] w-[28rem] rotate-12 opacity-[0.07] pattern-grid" />
      <div className="shell">
        <Reveal>
          <h2 className="display-3 text-center text-forest">{program.offer.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {program.offer.components.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.03}>
              <div className="surface group relative h-full rounded-[1.75rem] p-7 shadow-soft transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1">
                <div className="absolute -top-3 left-7 inline-flex items-center rounded-full border border-gold/40 bg-white/95 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-forest shadow-sm">
                  Component
                </div>
                <h3 className="mt-4 font-display text-lg text-forest">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
