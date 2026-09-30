import type { CSSProperties } from 'react'
import type { Testimonial } from '../../data/programs'
import { EightStar } from './Ornaments'

function Avatar({ name }: { name: string }) {
  return (
    <span
      aria-hidden
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-[linear-gradient(150deg,#dde9de,#c3d5c6)] font-display text-[0.95rem] text-forest"
      title={name}
    >
      {name
        .split(' ')
        .slice(0, 2)
        .map((n) => n[0])
        .join('')}
    </span>
  )
}

export function TestimonialCard({
  testimonial,
  className = '',
}: {
  testimonial: Testimonial
  className?: string
}) {
  return (
    <figure
      className={`group relative flex h-full flex-col rounded-[26px] border border-forest/8 bg-white p-7 transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_36px_66px_-40px_rgba(6,63,50,0.4)] ${className}`}
    >
      <span
        aria-hidden
        className="font-display text-[3.4rem] leading-[0.6] text-gold/35 transition-colors duration-500 group-hover:text-gold/60"
      >
        &ldquo;
      </span>

      <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-[1.9] text-ink/85">
        {testimonial.quote}
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-4 border-t border-forest/8 pt-6">
        <Avatar name={testimonial.name} />
        <div className="min-w-0">
          <p className="truncate font-display text-[1.02rem] text-forest">{testimonial.name}</p>
          <p className="truncate text-[0.75rem] uppercase tracking-[0.14em] text-muted/85">
            {testimonial.role} · {testimonial.location}
          </p>
        </div>
      </figcaption>

      <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-gold-deep/85">
        <EightStar className="h-3 w-3" strokeWidth={1.4} />
        {testimonial.path}
      </span>
    </figure>
  )
}

/** Compact floating card used around the community visual. */
export function FloatingTestimonial({
  testimonial,
  className = '',
  style,
}: {
  testimonial: Testimonial
  className?: string
  style?: CSSProperties
}) {
  return (
    <figure
      style={style}
      className={`w-[270px] rounded-2xl border border-white/50 bg-white/92 p-4 shadow-[0_30px_60px_-36px_rgba(6,63,50,0.55)] backdrop-blur-lg ${className}`}
    >
      <div className="flex items-center gap-3">
        <Avatar name={testimonial.name} />
        <div className="min-w-0">
          <p className="truncate text-[0.8125rem] font-medium text-forest">{testimonial.name}</p>
          <p className="truncate text-[10px] uppercase tracking-[0.14em] text-muted/80">
            {testimonial.path}
          </p>
        </div>
      </div>
      <p className="mt-3 text-[0.8125rem] leading-[1.7] text-muted">
        {testimonial.quote.length > 96 ? `${testimonial.quote.slice(0, 96)}…` : testimonial.quote}
      </p>
    </figure>
  )
}
