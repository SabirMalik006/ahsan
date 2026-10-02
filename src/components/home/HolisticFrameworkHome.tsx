import { Reveal } from '../ui/Reveal'

export function HolisticFrameworkHome() {
  const steps = [
    {
      number: 1,
      title: 'Qur’an & Tarbiyah',
      subtitle: 'Building the foundations of faith, identity, purpose, character, values, and personal responsibility.',
      focusAreas: [
        'Qur’an',
        'Sunnah',
        'Islamic worldview',
        'Character development',
        'Tazkiyah',
        'Purpose and identity',
        'Emotional and moral development',
      ],
    },
    {
      number: 2,
      title: 'Integrated Academic & Scientific Learning',
      subtitle: 'Connecting academic learning and scientific inquiry with a meaningful worldview and responsible human development.',
      focusAreas: [
        'Academic knowledge',
        'Science',
        'Critical thinking',
        'Research',
        'Problem solving',
        'Creativity',
        'Intellectual development',
      ],
    },
    {
      number: 3,
      title: 'Skills, Leadership & Social Responsibility',
      subtitle: 'Transforming knowledge into practical ability, leadership, service, and responsible participation in society.',
      focusAreas: [
        'Life skills',
        'Professional skills',
        'Leadership',
        'Communication',
        'Entrepreneurship',
        'Community service',
        'Social responsibility',
      ],
    },
  ]

  return (
    <section className="section-y relative overflow-hidden bg-cream/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120vh] bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.12),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pattern-arabesque pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[40rem] w-[40rem] rotate-12 opacity-[0.08]"
      />

      <div className="shell">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto inline-flex items-center rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-forest shadow-sm backdrop-blur-md">
              Our Holistic Education Framework
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-3 mt-6 text-forest">Reimagining the Educational Journey</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede mx-auto mt-5 max-w-3xl">
              Our Holistic Education Framework seeks to connect Qur’an, Sunnah, academic knowledge, science, character
              development, practical skills, leadership, and social responsibility into one integrated educational
              journey.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="surface relative overflow-hidden rounded-[2rem] p-8 shadow-soft md:p-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
                  <div className="flex shrink-0 items-center justify-center">
                    <div className="relative grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-gradient-to-br from-forest via-forest-soft to-forest-deep text-2xl font-display text-cream shadow-[0_20px_60px_-30px_rgba(6,63,50,0.9)] md:h-20 md:w-20">
                      STEP {s.number}
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_20%,rgba(229,201,133,0.28),transparent_70%)]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-forest md:text-3xl">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted md:text-base">{s.subtitle}</p>
                    <div className="mt-5">
                      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-forest/70">Focus Areas:</p>
                      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        {s.focusAreas.map((f) => (
                          <span key={f} className="inline-flex items-center rounded-2xl border border-forest/8 bg-white/95 px-3 py-2 text-sm text-forest shadow-sm">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="surface mx-auto mt-10 max-w-4xl rounded-[2rem] p-8 text-center shadow-lift md:p-10">
            <h3 className="font-display text-lg text-forest md:text-xl">Framework Statement</h3>
            <p className="mt-3 font-display text-lg leading-relaxed text-forest md:text-xl">
              From knowledge to character. From character to capability. From capability to service. From individual
              development to social transformation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
