import { Reveal } from '../components/ui/Reveal'
import { ProgramHero } from '../components/programs/ProgramHero'
import { ProgramIntro } from '../components/programs/ProgramIntro'
import { ProgramWhy } from '../components/programs/ProgramWhy'
import { ProgramApproach } from '../components/programs/ProgramApproach'
import { ProgramOffer } from '../components/programs/ProgramOffer'
import { ProgramAudience } from '../components/programs/ProgramAudience'
import { ProgramJourney } from '../components/programs/ProgramJourney'
import { ProgramOutcomes } from '../components/programs/ProgramOutcomes'
import { ProgramMethodology } from '../components/programs/ProgramMethodology'
import { ProgramStructure } from '../components/programs/ProgramStructure'
import { ProgramCTA } from '../components/programs/ProgramCTA'
import { quranOnlineAcademy } from '../data/ehsaanPrograms'
import type { Program } from '../types/program'

/** Eligibility + FAQs are rendered here because the shared template has no dedicated components for them. */
function ProgramEligibility({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-cream/60">
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[28rem] w-[28rem] opacity-[0.08] pattern-arabesque" />
      <div className="shell">
        <Reveal>
          <h2 className="display-3 text-center text-forest">{program.eligibility.title}</h2>
        </Reveal>
        <div className="mx-auto mt-8 max-w-3xl">
          <Reveal delay={0.05}>
            <div className="surface rounded-[2rem] p-8 shadow-soft md:p-10">
              <ul className="space-y-3.5">
                {program.eligibility.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 leading-relaxed text-muted">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              {program.eligibility.note && (
                <p className="mt-6 border-t border-forest/10 pt-6 text-sm italic text-forest/80">
                  {program.eligibility.note}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ProgramFAQ({ program }: { program: Program }) {
  return (
    <section className="section-y relative overflow-hidden bg-ivory">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 -z-10 h-[30rem] w-[30rem] rotate-[-8deg] opacity-[0.07] pattern-stars" />
      <div className="shell">
        <Reveal>
          <h2 className="display-3 text-center text-forest">Frequently Asked Questions</h2>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {program.faqs.map((f, i) => (
            <Reveal key={f.question} delay={i * 0.04}>
              <details open={i === 0} className="surface group rounded-[1.5rem] shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-7 py-5 text-forest transition-colors [&::-webkit-details-marker]:hidden md:px-9">
                  <span className="font-display text-lg">{f.question}</span>
                  <span
                    aria-hidden
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/40 text-xl leading-none text-forest transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-7 pb-6 leading-relaxed text-muted md:px-9">{f.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Qur'an Online Academy — full program detail page built with the Universal
 * Program Template components (web-structure doc, sections 05 & 07-A).
 */
export default function QuranAcademy() {
  const program = quranOnlineAcademy
  return (
    <>
      <ProgramHero program={program} />
      <ProgramIntro program={program} />
      <ProgramWhy program={program} />
      <ProgramApproach program={program} />
      <ProgramOffer program={program} />
      <ProgramAudience program={program} />
      <ProgramJourney program={program} />
      <ProgramOutcomes program={program} />
      <ProgramMethodology program={program} />
      <ProgramStructure program={program} />
      <ProgramEligibility program={program} />
      <ProgramFAQ program={program} />
      <ProgramCTA program={program} />
    </>
  )
}
