import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { ArrowRight, Clock3, Layers3 } from 'lucide-react'
import { programs } from '../data/programs'

export default function Programs() {
  return (
    <section className="relative isolate overflow-hidden bg-ivory pb-16 pt-24 md:pb-24 md:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(ellipse_at_top,rgba(201,164,92,0.13),transparent_68%)]" />
      <div aria-hidden className="pattern-arabesque pointer-events-none absolute -right-48 top-20 -z-10 h-[36rem] w-[36rem] rotate-12 opacity-[0.055]" />
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center text-gold-deep">
              Learning pathways
            </span>
            <h1 className="display-2 mt-5 text-forest">Explore Our Programs</h1>
            <p className="lede mx-auto mt-5 max-w-3xl">
              Structured learning that connects Qur’an-centred knowledge with reflection, character, and everyday life.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 inline-flex items-center gap-3 border-y border-forest/10 py-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              <span>06 pathways</span>
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
              <span>Beginner to advanced</span>
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={(index % 3) * 0.06} className="h-full">
              <article className="surface group relative flex h-full min-h-[330px] flex-col items-center overflow-hidden rounded-[1.75rem] border border-forest/8 px-6 py-7 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/35 hover:shadow-lift sm:px-7">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                <div className="flex w-full items-center justify-between gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-deep">
                    {program.category}
                  </span>
                  <span className="font-display text-sm tabular-nums text-forest/35">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h2 className="mt-7 font-display text-[1.55rem] leading-tight text-forest">
                  {program.title}
                </h2>
                <p className="mt-3 max-w-sm flex-1 text-sm leading-7 text-muted">
                  {program.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-y border-forest/8 py-3 text-[11px] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.6} />
                    {program.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Layers3 className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.6} />
                    {program.lessons}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
                  <Button href={`/programs/${program.id}`} size="sm" icon={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />}>
                    Explore Program
                  </Button>
                  <Button href="/register" variant="outline" size="sm">
                    Register
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
