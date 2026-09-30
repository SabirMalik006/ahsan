import { ArrowRight } from 'lucide-react'
import { scholars } from '../../data/programs'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ScholarCard } from '../ui/ScholarCard'
import { Divider } from '../ui/Ornaments'

export function ScholarsSection() {
  return (
    <section id="scholars" className="section-y relative overflow-hidden bg-ivory">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(50%_100%_at_20%_100%,rgba(221,233,222,0.85),transparent_70%)]"
      />

      <div className="shell relative">
        <SectionHeading
          eyebrow="The Teachers"
          title={
            <>
              Learn from those who
              <span className="block italic text-forest-soft">carry the tradition.</span>
            </>
          }
          description="Every instructor at Ihsan Global teaches within a recognised tradition of scholarship, with an emphasis on clarity, evidence and practical application."
          aside={
            <Button
              href="#journey"
              variant="outline"
              icon={<ArrowRight className="h-4 w-4" strokeWidth={1.6} />}
            >
              View all teachers
            </Button>
          }
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:mt-18 lg:grid-cols-4 lg:gap-7">
          {scholars.map((scholar, i) => (
            <Reveal key={scholar.id} delay={i * 0.08}>
              <ScholarCard scholar={scholar} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div className="rounded-[28px] border border-forest/8 bg-white/70 px-7 py-7 backdrop-blur-sm md:px-10">
            <Divider className="mb-7 opacity-70" />
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { k: 'Traditional ijāzah', v: 'Chains of transmission preserved' },
                { k: 'Scholar-reviewed', v: 'Every syllabus verified before release' },
                { k: 'Live circles', v: 'Weekly questions answered in person' },
              ].map((item) => (
                <div key={item.k}>
                  <p className="font-display text-[1.05rem] text-forest">{item.k}</p>
                  <p className="mt-1.5 text-[0.875rem] text-muted">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
