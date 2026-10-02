import { Reveal } from '../components/ui/Reveal'
import { frameworkContent } from '../data/framework'

export default function HolisticFramework() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-28 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120vh] bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.12),transparent_70%)]" />
      <div aria-hidden className="pattern-arabesque pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[40rem] w-[40rem] rotate-12 opacity-[0.08]" />
      <div className="shell section-y">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto inline-flex items-center rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-forest shadow-sm backdrop-blur-md">
              {frameworkContent.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-2 mt-6 text-forest">{frameworkContent.title}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede mx-auto mt-5 max-w-3xl">{frameworkContent.description}</p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-8">
          {frameworkContent.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="surface relative overflow-hidden rounded-[2rem] p-8 shadow-soft md:p-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
                  <div className="flex shrink-0 items-center justify-center">
                    <div className="relative grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-gradient-to-br from-forest via-forest-soft to-forest-deep text-2xl font-display text-cream shadow-[0_20px_60px_-30px_rgba(6,63,50,0.9)] md:h-20 md:w-20">
                      {s.number}
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_20%,rgba(229,201,133,0.28),transparent_70%)]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl text-forest md:text-3xl">{s.title}</h2>
                    <p className="mt-2 leading-relaxed text-muted md:text-base">{s.subtitle}</p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {s.focusAreas.map((f) => (
                        <span key={f} className="inline-flex items-center rounded-2xl border border-forest/8 bg-white/95 px-3 py-2 text-sm text-forest shadow-sm">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="surface mx-auto mt-10 max-w-4xl rounded-[2rem] p-8 text-center shadow-lift md:p-10">
            <p className="font-display text-lg leading-relaxed text-forest md:text-xl">{frameworkContent.statement}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
