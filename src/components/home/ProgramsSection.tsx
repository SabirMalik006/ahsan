import { ArrowRight } from 'lucide-react'
import { programs } from '../../data/programs'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ProgramCard } from '../ui/ProgramCard'
import { Button } from '../ui/Button'

/** Masonry spans — a large feature cell, two supporting cells, then a trio. */
const spans = [
  'lg:col-span-3 lg:row-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
]

export function ProgramsSection() {
  return (
    <section id="programs" className="section-y relative overflow-hidden bg-cream">
      <div className="pattern-arabesque absolute inset-0 opacity-[0.05]" aria-hidden />

      <div className="shell relative">
        <SectionHeading
          eyebrow="Programs & Learning Paths"
          title={
            <>
              Explore your path
              <span className="block italic text-forest-soft">of learning.</span>
            </>
          }
          description="Six flagship programs, each broken into sequenced courses. Start where you are — every path is written for real lives, not for the classroom alone."
          aside={
            <Button
              href="#library"
              variant="outline"
              icon={<ArrowRight className="h-4 w-4" strokeWidth={1.6} />}
            >
              Browse all 100+ courses
            </Button>
          }
        />

        <div className="mt-14 grid gap-6 md:mt-18 lg:grid-cols-6">
          {programs.map((program, i) => (
            <Reveal
              key={program.id}
              delay={(i % 3) * 0.08}
              className={`${spans[i] ?? 'lg:col-span-2'} h-full`}
            >
              <ProgramCard program={program} large={program.featured} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
