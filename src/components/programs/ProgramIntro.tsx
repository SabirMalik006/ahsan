import { Reveal } from '../ui/Reveal'
import type { Program } from '../../types/program'

export function ProgramIntro({ program }: { program: Program }) {
  return (
    <section id="introduction" className="section-y relative overflow-hidden bg-ivory">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-[-10%] -z-10 h-[30rem] w-[30rem] rotate-[-8deg] opacity-[0.07] pattern-stars" />
      <div className="shell">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="display-3 text-center text-forest">{program.introduction.title}</h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {program.introduction.content.map((c, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="lede text-center md:text-left">{c}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
