import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/programs'
import { Eyebrow } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { TestimonialCard } from '../ui/TestimonialCard'
import { Divider, EightStar } from '../ui/Ornaments'

const [featured, ...rest] = testimonials

export function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null)

  const scrollRail = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <section className="section-y relative overflow-hidden bg-cream">
      <div className="pattern-arabesque absolute inset-0 opacity-[0.05]" aria-hidden />

      <div className="shell relative">
        {/* ---------- featured testimonial ---------- */}
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal direction="left">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(201,164,92,0.28),transparent_70%)] blur-xl"
              />
              <Quote className="h-10 w-10 text-gold/60" strokeWidth={1.2} />
              <blockquote className="mt-7 font-display text-[1.7rem] leading-[1.42] text-forest md:text-[2.15rem]">
                “Knowledge changed the way I understood my faith — and eventually the way I lived
                it.”
              </blockquote>

              <figcaption className="mt-9 flex items-center gap-4">
                <span
                  aria-hidden
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-[linear-gradient(150deg,#dde9de,#c3d5c6)] font-display text-[1.1rem] text-forest"
                >
                  AR
                </span>
                <div>
                  <p className="font-display text-[1.15rem] text-forest">{featured.name}</p>
                  <p className="text-[0.8125rem] text-muted">
                    {featured.role} · {featured.location}
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-gold-deep/85">
                    <EightStar className="h-3 w-3" strokeWidth={1.4} />
                    {featured.path}
                  </p>
                </div>
              </figcaption>

              <Divider className="mt-10 max-w-md opacity-70" />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {rest.slice(0, 2).map((t, i) => (
              <Reveal key={t.id} delay={0.08 * i} direction="right">
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
            <Reveal delay={0.16} direction="right" className="sm:col-span-2">
              <div className="flex items-center justify-between gap-6 rounded-[26px] border border-forest/8 bg-[linear-gradient(120deg,#063f32,#0b5a46)] px-7 py-6">
                <div>
                  <p className="font-display text-[1.3rem] text-cream">
                    4.9 average learner rating
                  </p>
                  <p className="mt-1 text-[0.8125rem] text-cream/65">
                    From 2,400+ reviews across 30 countries
                  </p>
                </div>
                <div className="hidden shrink-0 items-center gap-1 sm:flex" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <EightStar key={i} className="h-4 w-4 text-gold-light" strokeWidth={1.3} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------- slider of smaller voices ---------- */}
        <div className="mt-20 md:mt-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Reveal direction="fade">
                <Eyebrow>Voices from the community</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h3 className="display-3 mt-4 max-w-xl">
                  Learners, families and teachers — in their own words.
                </h3>
              </Reveal>
            </div>

            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollRail(-1)}
                aria-label="Scroll to previous testimonials"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/12 text-forest/75 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/60"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => scrollRail(1)}
                aria-label="Scroll to next testimonials"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/12 text-forest/75 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/60"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div
            ref={railRef}
            role="region"
            aria-label="More learner testimonials"
            tabIndex={0}
            className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2"
          >
            {testimonials.map((t) => (
              <div key={`rail-${t.id}`} className="w-[300px] shrink-0 snap-start sm:w-[340px]">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
