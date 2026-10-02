import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { initiativesContent } from '../data/initiatives'

export default function Initiatives() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-28 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120vh] bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.12),transparent_70%)]" />
      <div aria-hidden className="pattern-arabesque pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[40rem] w-[40rem] rotate-12 opacity-[0.08]" />
      <div className="shell section-y">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto inline-flex items-center rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-forest shadow-sm backdrop-blur-md">
              {initiativesContent.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-2 mt-6 text-forest">{initiativesContent.title}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede mx-auto mt-5 max-w-3xl">{initiativesContent.description}</p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-10">
          {initiativesContent.categories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.05}>
              <div>
                <h2 className="font-display text-2xl text-forest md:text-3xl">{cat.title}</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {cat.initiatives.map((init, i) => (
                    <Reveal key={init.title} delay={i * 0.04}>
                      <div className="surface group relative flex h-full flex-col rounded-[2rem] p-8 shadow-soft transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 md:p-9">
                        <div className="absolute -top-3 left-8 inline-flex items-center rounded-full border border-gold/40 bg-white/95 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-forest shadow-sm">
                          Initiative
                        </div>
                        <h3 className="mt-4 font-display text-2xl text-forest">{init.title}</h3>
                        <p className="mt-1 font-display text-base text-forest/90">{init.subtitle}</p>
                        <p className="mt-3 leading-relaxed text-muted">{init.description}</p>
                        <div className="mt-auto pt-6">
                          <Button href={init.href} variant="outline" size="sm" icon={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />}>
                            {init.cta}
                          </Button>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
