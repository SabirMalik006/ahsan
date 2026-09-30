import { ArrowUpRight, MapPin } from 'lucide-react'
import type { Scholar } from '../../data/programs'
import { ArchOutline, EightStar } from './Ornaments'

/** Portrait placeholder: a framed architectural niche with a figure silhouette. */
function PortraitFrame({ seed, name }: { seed: number; name: string }) {
  const tilt = seed % 2 === 0 ? 1 : -1

  return (
    <div className="relative h-full w-full bg-[linear-gradient(170deg,#063f32_0%,#0b5a46_60%,#137260_100%)]">
      <div className="pattern-stars absolute inset-0 opacity-[0.16]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(229,201,133,0.32),transparent_70%)]" />
      <ArchOutline className="absolute inset-x-[14%] top-[10%] h-[80%] text-gold-light/35" strokeWidth={1} />

      <svg
        viewBox="0 0 120 170"
        aria-label={`Portrait placeholder for ${name}`}
        role="img"
        className="absolute bottom-0 left-1/2 h-[72%] w-auto -translate-x-1/2 text-cream/90"
        style={{ transform: `translateX(-50%) rotate(${tilt * 0.6}deg)` }}
      >
        <circle cx="60" cy="44" r="25" fill="currentColor" opacity="0.95" />
        <path
          d="M60 78c26 0 40 17 43 46l3 46H14l3-46c3-29 17-46 43-46z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>

      <EightStar className="absolute right-[14%] top-[14%] h-6 w-6 text-gold-light/80" strokeWidth={1.2} />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/10 to-transparent" />
    </div>
  )
}

export function ScholarCard({ scholar }: { scholar: Scholar }) {
  return (
    <article className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[26px] rounded-t-[140px] border border-forest/10 shadow-[0_30px_60px_-40px_rgba(6,63,50,0.55)]">
        <div className="h-full w-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
          <PortraitFrame seed={scholar.seed} name={scholar.name} />
        </div>

        {/* hover overlay with the profile teaser */}
        <div className="absolute inset-0 flex translate-y-3 items-end bg-gradient-to-t from-forest-deep/92 via-forest-deep/40 to-transparent p-6 opacity-0 transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[0.8125rem] leading-[1.75] text-cream/85">{scholar.description}</p>
        </div>

        <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-forest-deep/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-gold-light backdrop-blur-md">
          {scholar.specialization}
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[1.28rem] text-forest">{scholar.name}</h3>
          <p className="mt-1 text-[0.8125rem] text-muted">{scholar.title}</p>
          <p className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-muted/75">
            <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
            {scholar.location}
          </p>
        </div>

        <a
          href="#scholars"
          aria-label={`View profile of ${scholar.name}`}
          className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/12 text-forest transition-all duration-500 group-hover:border-gold/60 group-hover:bg-gold/10"
        >
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </a>
      </div>
    </article>
  )
}
