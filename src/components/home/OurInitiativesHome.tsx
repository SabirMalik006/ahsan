import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { ArrowRight } from 'lucide-react'

export function OurInitiativesHome() {
  const initiatives = [
    {
      category: 'INDIVIDUAL DEVELOPMENT',
      title: 'Qur’an Online Academy',
      subtitle: 'Qur’an-centred foundational learning',
      description:
        'Qur’an, Arabic, Sunnah, understanding, reflection, and Tarbiyah designed to establish a strong foundation for lifelong learning.',
      href: '/programs/quran-online-academy',
      cta: 'Explore Program',
    },
    {
      category: 'INDIVIDUAL DEVELOPMENT',
      title: 'Seerah & Tarbiyah for Kids',
      subtitle: 'Character Development Through Seerah',
      description:
        'A child-centred learning approach that uses the Seerah of Prophet Muhammad ? to develop character, emotional awareness, values, manners, and practical life skills.',
      href: '/programs/seerah-tarbiyah-kids',
      cta: 'Explore Program',
    },
    {
      category: 'FAMILY DEVELOPMENT',
      title: 'HUMSAFAR',
      subtitle: 'Family & Relationship Education',
      description:
        'An educational pathway addressing pre-marriage preparation, marriage, communication, conflict resolution, family relationships, parenting, and responsible family life.',
      href: '/programs/humsafar',
      cta: 'Explore Program',
    },
    {
      category: 'EDUCATIONAL DEVELOPMENT',
      title: 'Holistic Education Framework',
      subtitle: 'An integrated educational model',
      description:
        'An integrated educational model connecting Qur’an and Sunnah with academic learning, science, character development, practical skills, leadership, and social responsibility.',
      href: '/holistic-framework',
      cta: 'Explore Framework',
    },
    {
      category: 'SOCIAL DEVELOPMENT',
      title: 'Social Awareness & Educational Reform',
      subtitle: 'Education, Awareness & Social Responsibility',
      description:
        'An initiative focused on education, family, youth, character, social responsibility, and constructive educational development.',
      href: '/programs/social-awareness-educational-reform',
      cta: 'Explore Initiative',
    },
  ]

  return (
    <section className="section-y relative overflow-hidden bg-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[40rem] w-[40rem] rotate-12 opacity-[0.08] pattern-arabesque"
      />
      <div className="shell">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto inline-flex items-center rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-forest shadow-sm backdrop-blur-md">
              Our Initiatives
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-3 mt-6 text-forest">Turning the Vision into Action</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede mx-auto mt-5 max-w-3xl">
              Ehsaan Global develops and supports initiatives across different stages and dimensions of human
              development.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {initiatives.map((init, i) => (
            <Reveal key={init.title} delay={i * 0.04}>
              <div className="surface group relative flex h-full flex-col rounded-[2rem] p-8 shadow-soft transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 md:p-9">
                <div className="absolute -top-3 left-8 inline-flex items-center rounded-full border border-gold/40 bg-white/95 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-forest shadow-sm">
                  {init.category}
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
    </section>
  )
}
