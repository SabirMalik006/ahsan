import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { ArrowRight } from 'lucide-react'
import type { Program } from '../../types/program'

export function ProgramCTA({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-forest-deep text-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(229,201,133,0.16),transparent_70%)]" />
      <div aria-hidden className="pattern-arabesque pointer-events-none absolute -right-40 top-10 -z-10 h-[30rem] w-[30rem] rotate-12 opacity-[0.1]" />
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="display-3 text-cream">{program.cta.title}</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={program.cta.primary.href} size="lg" variant="primary" icon={<ArrowRight className="h-4 w-4" strokeWidth={1.6} />}>
                {program.cta.primary.label}
              </Button>
              <Button href={program.cta.secondary.href} variant="outline" size="lg" className="border-cream/40 text-cream hover:bg-cream/10">
                {program.cta.secondary.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-cream/70">Learn • Grow • Transform</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
