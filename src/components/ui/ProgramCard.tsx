import { ArrowUpRight, Clock, Layers } from 'lucide-react'
import type { Program } from '../../data/programs'
import { ArchOutline, EightStar } from './Ornaments'

const tones: Record<Program['tone'], { bg: string; pattern: string; ink: string; accent: string }> = {
  forest: {
    bg: 'bg-[linear-gradient(155deg,#042b22_0%,#063f32_55%,#0b5a46_100%)]',
    pattern: 'pattern-stars opacity-[0.18]',
    ink: 'text-cream',
    accent: 'text-gold-light',
  },
  cream: {
    bg: 'bg-[linear-gradient(155deg,#f8f4ea_0%,#ede5d5_100%)]',
    pattern: 'pattern-grid opacity-[0.09]',
    ink: 'text-forest',
    accent: 'text-gold-deep',
  },
  sage: {
    bg: 'bg-[linear-gradient(155deg,#dde9de_0%,#c3d5c6_100%)]',
    pattern: 'pattern-arabesque opacity-[0.12]',
    ink: 'text-forest',
    accent: 'text-forest-soft',
  },
  gold: {
    bg: 'bg-[linear-gradient(155deg,#e5c985_0%,#c9a45c_72%,#a8842f_100%)]',
    pattern: 'pattern-grid opacity-[0.12]',
    ink: 'text-forest-deep',
    accent: 'text-forest',
  },
}

/** Abstract, tone-aware visual so no program card ever renders a broken image. */
function ProgramVisual({ tone }: { tone: Program['tone'] }) {
  const t = tones[tone]
  return (
    <div
      className={`relative h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] ${t.bg} ${t.ink}`}
    >
      <div className={`absolute inset-0 ${t.pattern}`} />
      <ArchOutline
        className={`absolute inset-x-[16%] top-[14%] h-[70%] opacity-40 ${t.accent}`}
        strokeWidth={1}
      />
      <div className="absolute inset-x-[26%] bottom-[16%] space-y-1.5 opacity-70">
        <div className="h-[3px] w-[68%] rounded-full bg-current" />
        <div className="h-[3px] w-[92%] rounded-full bg-current opacity-60" />
        <div className="h-[3px] w-[54%] rounded-full bg-current opacity-60" />
      </div>
      <EightStar className={`absolute right-[12%] top-[16%] h-9 w-9 ${t.accent}`} strokeWidth={1.1} />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${tone === 'forest' ? 'from-forest-deep/70' : 'from-black/10'} to-transparent`}
      />
    </div>
  )
}

export function ProgramCard({ program, large = false }: { program: Program; large?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-forest/8 bg-white transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-[0_44px_80px_-44px_rgba(6,63,50,0.45)]">
      <div
        className={
          large ? 'relative min-h-[240px] flex-1 overflow-hidden' : 'relative aspect-[16/11] overflow-hidden'
        }
      >
        <ProgramVisual tone={program.tone} />

        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="rounded-full border border-white/35 bg-white/16 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-cream backdrop-blur-md">
            {program.category}
          </span>
        </div>

        <span className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-forest-deep/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-cream/85 backdrop-blur-md">
          <Layers className="h-3 w-3" strokeWidth={1.6} />
          {program.level}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6 md:p-7">
        <h3
          className={`font-display text-forest ${large ? 'text-[1.7rem] md:text-[2rem]' : 'text-[1.4rem]'}`}
        >
          {program.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.8] text-muted">{program.description}</p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-forest/8 pt-5">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.16em] text-muted/85">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
              {program.duration}
            </span>
            <span className="hidden sm:inline">{program.lessons}</span>
          </div>

          <a
            href="#final-cta"
            className="inline-flex items-center gap-2 text-[0.8125rem] font-medium text-forest transition-colors duration-500 hover:text-forest-soft"
          >
            View program
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-forest/12 transition-all duration-500 group-hover:border-gold/60 group-hover:bg-gold/10">
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.6}
              />
            </span>
          </a>
        </div>
      </div>

      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold-deep via-gold to-gold-light transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
      />
    </article>
  )
}
