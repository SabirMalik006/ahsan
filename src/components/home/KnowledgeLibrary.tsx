import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Headphones, FileText, GraduationCap, Sparkles } from 'lucide-react'
import { resourceCategories, resources, type Resource } from '../../data/programs'
import { SILK } from '../../lib/motion'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { EightStar } from '../ui/Ornaments'

const typeIcon: Record<Resource['type'], typeof BookOpen> = {
  Article: FileText,
  Lecture: BookOpen,
  Course: GraduationCap,
  Podcast: Headphones,
  Guide: Sparkles,
}

const typeTone: Record<Resource['type'], string> = {
  Article: 'bg-sage/60 text-forest border-forest/10',
  Lecture: 'bg-cream text-forest border-forest/10',
  Course: 'bg-forest text-cream border-forest',
  Podcast: 'bg-gold/15 text-gold-deep border-gold/35',
  Guide: 'bg-beige/70 text-forest border-forest/10',
}

const TABS = ['All', ...resourceCategories] as const

export function KnowledgeLibrary() {
  const [active, setActive] = useState<(typeof TABS)[number]>('All')

  const visible = useMemo(
    () => (active === 'All' ? resources : resources.filter((r) => r.category === active)),
    [active],
  )

  return (
    <section id="library" className="section-y relative overflow-hidden bg-cream">
      <div className="pattern-grid absolute inset-0 opacity-[0.04]" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(45%_100%_at_70%_0%,rgba(237,229,213,0.95),transparent_70%)]"
      />

      <div className="shell relative">
        <SectionHeading
          eyebrow="Knowledge Library"
          title={
            <>
              Explore
              <span className="italic text-forest-soft"> the library.</span>
            </>
          }
          description="Articles, lectures, podcasts and short guides — a living collection that grows with the community, filed so you can actually find what you need."
          aside={
            <Button
              href="#library"
              variant="outline"
              icon={<ArrowRight className="h-4 w-4" strokeWidth={1.6} />}
            >
              Explore all resources
            </Button>
          }
        />

        {/* category tabs */}
        <Reveal delay={0.1} className="mt-12">
          <div
            role="tablist"
            aria-label="Browse the library by category"
            className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
          >
            {TABS.map((tab) => {
              const isActive = tab === active
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab)}
                  className={`relative shrink-0 rounded-full px-4 py-2.5 text-[0.8125rem] font-medium transition-colors duration-500 ${
                    isActive ? 'text-cream' : 'text-forest/70 hover:text-forest'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="library-tab"
                      className="absolute inset-0 rounded-full bg-forest"
                      transition={{ duration: 0.45, ease: SILK }}
                    />
                  )}
                  <span className="relative whitespace-nowrap">{tab}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* resource grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((resource, i) => {
            const Icon = typeIcon[resource.type]
            return (
              <motion.article
                key={resource.id}
                layout
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: SILK, delay: Math.min(i, 5) * 0.05 }}
                className="group relative flex flex-col rounded-[24px] border border-forest/8 bg-white p-6 transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-[0_36px_66px_-40px_rgba(6,63,50,0.4)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] ${typeTone[resource.type]}`}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                    {resource.type}
                  </span>
                  {resource.isNew && (
                    <span className="text-[10px] uppercase tracking-[0.18em] text-gold-deep">
                      New
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-display text-[1.24rem] leading-[1.3] text-forest">
                  {resource.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.875rem] leading-[1.8] text-muted">
                  {resource.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-forest/8 pt-4">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted/80">
                    {resource.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] text-forest/70 transition-colors duration-500 group-hover:text-forest-soft">
                    Open
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                      strokeWidth={1.6}
                    />
                  </span>
                </div>

                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold-deep via-gold to-gold-light transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                />
              </motion.article>
            )
          })}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <p className="inline-flex items-center gap-3 rounded-full border border-forest/10 bg-white/70 px-6 py-3.5 text-[0.8125rem] text-muted backdrop-blur-sm">
            <EightStar className="h-4 w-4 text-gold" strokeWidth={1.4} />
            <span>
              <span className="font-medium text-forest">{resources.length * 12}+</span> resources across
              seven categories
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
