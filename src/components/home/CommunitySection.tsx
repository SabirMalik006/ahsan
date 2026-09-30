import { HeartHandshake, MessagesSquare, Sprout, Users, UsersRound } from 'lucide-react'
import { testimonials } from '../../data/programs'
import { Eyebrow } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { FloatingTestimonial } from '../ui/TestimonialCard'
import { Particles } from '../ui/Ornaments'
import { SceneFamily } from './HeroVisuals'

const pillars = [
  { label: 'Family learning', icon: Users },
  { label: 'Community circles', icon: UsersRound },
  { label: 'Mentorship', icon: HeartHandshake },
  { label: 'Live discussions', icon: MessagesSquare },
  { label: 'Spiritual growth', icon: Sprout },
]

export function CommunitySection() {
  return (
    <section id="community" className="section-y relative overflow-hidden bg-ivory">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/4 h-96 bg-[radial-gradient(45%_60%_at_85%_50%,rgba(221,233,222,0.7),transparent_70%)]"
      />

      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal direction="fade">
            <Eyebrow marker={false}>Shared Growth</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display-2 mt-5">
              Learning is better when
              <span className="block italic text-forest-soft">we grow together.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede mx-auto mt-5 max-w-2xl">
              Knowledge was never meant to be studied alone. Join study circles, family tracks and
              mentorship spaces where questions are welcome and progress is shared.
            </p>
          </Reveal>
        </div>

        {/* main visual with floating cards */}
        <div className="relative mt-16 md:mt-20">
          <Reveal direction="scale" duration={1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/40 shadow-[0_60px_120px_-60px_rgba(6,63,50,0.55)] sm:aspect-[16/11] sm:rounded-[40px]">
              <SceneFamily />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/15"
              />
              <Particles count={10} tone="cream" className="opacity-50" />
            </div>
          </Reveal>

          {/* desktop floating cards */}
          <div className="anim-float pointer-events-none absolute -left-6 top-10 hidden w-[270px] xl:block">
            <FloatingTestimonial testimonial={testimonials[2]} className="pointer-events-auto" />
          </div>
          <div
            className="anim-float pointer-events-none absolute -right-4 bottom-6 hidden w-[270px] xl:block"
            style={{ animationDelay: '2s' }}
          >
            <FloatingTestimonial testimonial={testimonials[3]} className="pointer-events-auto" />
          </div>

          {/* pillars */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 xl:mt-10">
            {pillars.map(({ label, icon: Icon }, i) => (
              <Reveal key={label} delay={i * 0.06} direction="fade">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-forest/10 bg-white/80 px-4 py-2.5 text-[0.8125rem] text-forest/85 backdrop-blur-sm transition-colors duration-500 hover:border-gold/45">
                  <Icon className="h-4 w-4 text-gold-deep" strokeWidth={1.5} />
                  {label}
                </span>
              </Reveal>
            ))}
          </div>

          {/* mobile testimonials */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:hidden">
            {testimonials.slice(2, 4).map((t) => (
              <FloatingTestimonial key={t.id} testimonial={t} className="w-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
