import { stats } from '../../data/programs'
import { Counter } from '../ui/Counter'
import { Reveal } from '../ui/Reveal'

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-forest/8 bg-ivory">
      <div className="pattern-grid absolute inset-0 opacity-[0.04]" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(55%_120%_at_50%_-10%,rgba(221,233,222,0.9),transparent_70%)]"
      />

      <div className="shell relative py-16 md:py-20">
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.09}
              direction="fade"
              className={`lg:px-10 ${i > 0 ? 'lg:border-l lg:border-forest/10' : ''}`}
            >
              <dt className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-deep">
                {stat.label}
              </dt>
              <dd>
                <p className="mt-4 font-display text-[2.6rem] leading-[1] text-forest md:text-[3.4rem]">
                  <Counter value={stat.value} />
                  <span className="text-gold">{stat.suffix}</span>
                </p>
                <p className="mt-4 max-w-[15rem] text-[0.875rem] leading-[1.7] text-muted">
                  {stat.detail}
                </p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
