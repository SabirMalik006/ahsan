/**
 * Brand mark + wordmark.
 * The emblem is the academy's own logo artwork; the wordmark carries the
 * full name with the programme line beneath it.
 */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${className}`}>
      <img
        src="/assets/logo/ihsan-mark-192.png"
        alt=""
        width={192}
        height={192}
        className="h-full w-full object-contain"
        aria-hidden
      />
    </span>
  )
}

export function Wordmark({ className = '', tone = 'dark' }: { className?: string; tone?: 'dark' | 'light' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9" />
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap font-display text-[0.95rem] tracking-[0.005em] ${
            tone === 'dark' ? 'text-forest' : 'text-cream'
          }`}
        >
          Ihsan Global Quran Academy
        </span>
        <span
          className={`mt-[3px] whitespace-nowrap text-[8.5px] font-medium uppercase tracking-[0.26em] ${
            tone === 'dark' ? 'text-gold-deep' : 'text-gold-light/85'
          }`}
        >
          Online Quran Education
        </span>
      </span>
    </span>
  )
}
