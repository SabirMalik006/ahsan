import { Reveal } from '../components/ui/Reveal'
import { philosophyContent } from '../data/philosophy'

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-28 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-[-10%] -z-10 h-[36rem] w-[36rem] opacity-[0.08] pattern-stars" />
      <div className="shell section-y">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto inline-flex items-center rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-forest shadow-sm backdrop-blur-md">
              {philosophyContent.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-3 mt-6 text-forest">{philosophyContent.title}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede mx-auto mt-5 max-w-3xl">{philosophyContent.description}</p>
          </Reveal>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {philosophyContent.principles.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <span className="inline-flex items-center rounded-full border border-gold/40 bg-white/95 px-4 py-1.5 text-sm text-forest shadow-sm backdrop-blur-md">
                  {p}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="surface mx-auto mt-10 max-w-3xl rounded-[2rem] p-8 text-center shadow-soft md:p-10">
            <p className="font-display text-lg leading-relaxed text-forest md:text-xl">{philosophyContent.corePrinciple}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
