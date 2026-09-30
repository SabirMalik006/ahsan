import type { ReactNode } from 'react'
import { Eyebrow } from './Badge'
import { Reveal } from './Reveal'

type Align = 'left' | 'center'
type Tone = 'dark' | 'light'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
  aside,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: Align
  tone?: Tone
  className?: string
  aside?: ReactNode
}) {
  const light = tone === 'light'

  return (
    <div
      className={`flex flex-col gap-6 ${
        align === 'center'
          ? 'items-center text-center'
          : aside
            ? 'lg:flex-row lg:items-end lg:justify-between lg:gap-14'
            : ''
      } ${className}`}
    >
      <div className={align === 'center' ? 'max-w-3xl' : 'max-w-2xl'}>
        {eyebrow && (
          <Reveal direction="fade">
            <Eyebrow tone={light ? 'light' : 'gold'}>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Reveal delay={0.06}>
          <h2
            className={`display-2 mt-5 ${light ? 'text-cream' : 'text-forest'}`}
          >
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <p className={`lede mt-5 ${light ? 'text-cream/70' : ''}`}>{description}</p>
          </Reveal>
        )}
      </div>

      {aside && <Reveal delay={0.16} direction="fade" className="shrink-0">{aside}</Reveal>}
    </div>
  )
}
