import type { ReactNode } from 'react'

type Tone = 'gold' | 'sage' | 'cream' | 'glass' | 'dark' | 'outline'

const tones: Record<Tone, string> = {
  gold: 'border-gold/40 bg-gold/12 text-gold-deep',
  sage: 'border-forest/10 bg-sage/60 text-forest',
  cream: 'border-forest/10 bg-cream text-forest',
  glass: 'border-white/40 bg-white/14 text-cream backdrop-blur-md',
  dark: 'border-forest/15 bg-forest text-cream',
  outline: 'border-forest/18 bg-transparent text-muted',
}

export function Badge({
  children,
  tone = 'cream',
  icon,
  className = '',
}: {
  children: ReactNode
  tone?: Tone
  icon?: ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] ${tones[tone]} ${className}`}
    >
      {icon}
      {children}
    </span>
  )
}

/** Eyebrow — uppercase tracked label with a small gold marker. */
export function Eyebrow({
  children,
  className = '',
  marker = true,
  tone = 'gold',
}: {
  children: ReactNode
  className?: string
  marker?: boolean
  tone?: 'gold' | 'light'
}) {
  return (
    <span
      className={`eyebrow ${tone === 'gold' ? 'text-gold-deep' : 'text-gold-light'} ${className}`}
    >
      {marker && (
        <span
          aria-hidden
          className={`inline-block h-px w-6 ${tone === 'gold' ? 'bg-gold' : 'bg-gold-light/70'}`}
        />
      )}
      {children}
    </span>
  )
}
