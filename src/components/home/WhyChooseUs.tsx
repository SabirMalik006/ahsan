import { features, type Feature } from '../../data/journey'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { CornerFlourish, EightStar } from '../ui/Ornaments'

const spanClasses: Record<Feature['span'], string> = {
  wide: 'lg:col-span-8',
  tall: 'lg:col-span-4 lg:row-span-2',
  default: 'lg:col-span-4',
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon
  const isTall = feature.span === 'tall'
  const isWide = feature.span === 'wide'

  return (
    <Reveal
      direction="up"
      delay={(index % 3) * 0.08}
      className={`group ${spanClasses[feature.span]}`}
    >
      <article
        className={`relative flex h-full overflow-hidden rounded-[28px] border border-forest/8 bg-white p-7 transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-[0_40px_80px_-42px_rgba(6,63,50,0.4)] md:p-9 ${
          isTall ? 'flex-col' : isWide ? 'flex-col justify-between sm:flex-row sm:items-end sm:gap-10' : 'flex-col'
        }`}
      >
        {/* pattern becomes visible on hover */}
        <div
          aria-hidden
          className={`absolute inset-0 opacity-[0.035] transition-opacity duration-[900ms] group-hover:opacity-[0.09] ${
            isWide ? 'pattern-stars' : 'pattern-grid'
          }`}
        />
        <CornerFlourish className="absolute -right-2 -top-2 h-24 w-24 text-gold/30 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <div className={isWide ? 'relative sm:max-w-md' : 'relative'}>
          <div className="flex items-center justify-between">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-[18px] rounded-tl-[30px] border border-forest/10 bg-sage/45 text-forest transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-gold/45 group-hover:bg-gold/15 group-hover:rotate-[6deg]">
              <Icon className="h-6 w-6" strokeWidth={1.25} />
            </span>
            {!isWide && (
              <span className="font-display text-2xl text-forest/12 transition-colors duration-700 group-hover:text-gold/50">
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
          </div>

          <h3 className="mt-7 font-display text-[1.5rem] text-forest md:text-[1.7rem]">
            {feature.title}
          </h3>
          <p className="mt-3 max-w-md text-[0.9375rem] leading-[1.85] text-muted">
            {feature.description}
          </p>
        </div>

        {isWide && feature.stat && (
          <div className="relative mt-8 flex items-center gap-3 border-t border-forest/8 pt-6 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <EightStar className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.3} />
            <span className="font-display text-[1.05rem] italic text-forest-soft">{feature.stat}</span>
          </div>
        )}

        {isTall && (
          <div className="relative mt-auto pt-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              8 progressive stages
            </div>
          </div>
        )}

        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold-deep via-gold to-gold-light transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
        />
      </article>
    </Reveal>
  )
}

export function WhyChooseUs() {
  return (
    <section id="why" className="section-y relative overflow-hidden bg-ivory">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(50%_100%_at_80%_0%,rgba(237,229,213,0.9),transparent_70%)]"
      />

      <div className="shell relative">
        <SectionHeading
          eyebrow="Why Ihsan Global"
          title={
            <>
              Beyond learning.
              <span className="block italic text-forest-soft">Toward transformation.</span>
            </>
          }
          description="A platform built by people who study, teach and live this knowledge — designed so that what you learn on screen shows up in how you pray, work and treat the people around you."
        />

        <div className="mt-14 grid gap-5 md:mt-18 md:gap-6 lg:grid-cols-12">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
