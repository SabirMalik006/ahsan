import { Reveal } from '../ui/Reveal'
import type { Program } from '../../types/program'

export function ProgramStructure({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-ivory">
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-[-10%] -z-10 h-[26rem] w-[26rem] opacity-[0.08] pattern-arabesque" />
      <div className="shell">
        <Reveal>
          <h2 className="display-3 text-center text-forest">{program.structure.title}</h2>
        </Reveal>
        <div className="mt-10 mx-auto max-w-3xl">
          <div className="surface divide-y divide-forest/8 overflow-hidden rounded-[2rem] shadow-soft">
            {program.structure.items.map((it, i) => (
              <Reveal key={it.label} delay={i * 0.03}>
                <div className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
                  <span className="font-medium text-forest">{it.label}</span>
                  <span className="text-muted">{it.value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
