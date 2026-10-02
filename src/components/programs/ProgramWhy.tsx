import { Reveal } from '../ui/Reveal'
import type { Program } from '../../types/program'

export function ProgramWhy({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-cream/60">
      <div aria-hidden className="pointer-events-none absolute right-[-10%] top-0 -z-10 h-[28rem] w-[28rem] opacity-[0.08] pattern-arabesque" />
      <div className="shell">
        <Reveal>
          <h2 className="display-3 text-center text-forest">{program.why.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: program.why.challengeTitle, body: program.why.challenge },
            { title: program.why.responseTitle, body: program.why.response },
            { title: program.why.purposeTitle, body: program.why.purpose },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="surface h-full rounded-[1.75rem] p-8 shadow-soft">
                <h3 className="font-display text-xl text-forest">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
