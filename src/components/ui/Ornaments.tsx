import { useMemo } from 'react'

/* --------------------------------------------------------------------------
   Eight-point star — the recurring motif of the brand mark
   -------------------------------------------------------------------------- */
export function EightStar({ className = '', strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden fill="none">
      <path
        d="M50 3l11.6 21.9L84 14l-10.9 22.4L97 50 73.1 63.6 84 86l-22.4-10.9L50 97l-11.6-21.9L14 86l10.9-22.4L3 50l23.9-13.6L14 14l22.4 10.9z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <rect
        x="27"
        y="27"
        width="46"
        height="46"
        transform="rotate(45 50 50)"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.75}
      />
    </svg>
  )
}

/* --------------------------------------------------------------------------
   Interlocking rosette — used behind large visuals
   -------------------------------------------------------------------------- */
export function Rosette({ className = '', strokeWidth = 0.8 }: { className?: string; strokeWidth?: number }) {
  const spokes = Array.from({ length: 12 }, (_, i) => (i * 360) / 12)
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden fill="none">
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth={strokeWidth} />
      {spokes.map((deg) => (
        <ellipse
          key={deg}
          cx="100"
          cy="100"
          rx="62"
          ry="24"
          stroke="currentColor"
          strokeWidth={strokeWidth * 0.7}
          transform={`rotate(${deg} 100 100)`}
        />
      ))}
    </svg>
  )
}

/* --------------------------------------------------------------------------
   Pointed Islamic arch outline (محراب) — frames hero and feature visuals
   -------------------------------------------------------------------------- */
export function ArchOutline({ className = '', strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 240 320" className={className} aria-hidden fill="none" preserveAspectRatio="none">
      <path
        d="M4 316V138C4 66 56 4 120 4s116 62 116 134v178"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}

/* --------------------------------------------------------------------------
   Arabesque divider with a centre medallion
   -------------------------------------------------------------------------- */
export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/45 to-gold/60" />
      <EightStar className="h-3.5 w-3.5 text-gold" strokeWidth={1.4} />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/45 to-gold/60" />
    </div>
  )
}

/* --------------------------------------------------------------------------
   Floating gold particles — deterministic so SSR/CSR stay identical
   -------------------------------------------------------------------------- */
export function Particles({
  count = 18,
  className = '',
  tone = 'gold',
}: {
  count?: number
  className?: string
  tone?: 'gold' | 'cream'
}) {
  const dots = useMemo(() => {
    // Simple deterministic pseudo-random so layout never shifts between renders
    const seeded = (n: number) => {
      const x = Math.sin(n * 127.1) * 43758.5453
      return x - Math.floor(x)
    }
    return Array.from({ length: count }, (_, i) => ({
      left: seeded(i + 1) * 100,
      top: seeded(i + 21) * 100,
      size: 1.5 + seeded(i + 41) * 3.2,
      delay: seeded(i + 61) * 9,
      duration: 9 + seeded(i + 81) * 9,
      opacity: 0.28 + seeded(i + 101) * 0.5,
    }))
  }, [count])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full blur-[0.4px]"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            background: tone === 'gold' ? 'var(--color-gold-light)' : 'var(--color-cream)',
            boxShadow: tone === 'gold' ? '0 0 8px rgba(229,201,133,0.9)' : '0 0 8px rgba(248,244,234,0.8)',
            animation: `drift ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

/* --------------------------------------------------------------------------
   Corner ornament — small arabesque used on cards and panels
   -------------------------------------------------------------------------- */
export function CornerFlourish({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden fill="none">
      <path
        d="M2 2h34C62 2 84 22 88 48"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M2 44C26 44 44 62 44 86" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="34" cy="34" r="3.4" stroke="currentColor" strokeWidth="1" />
      <circle cx="68" cy="22" r="1.8" fill="currentColor" />
      <circle cx="20" cy="68" r="1.8" fill="currentColor" />
    </svg>
  )
}
