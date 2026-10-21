import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'primary' | 'gold' | 'outline' | 'ghost' | 'ivory'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-medium tracking-[0.01em] whitespace-nowrap transition-[transform,background-color,color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-royal-purple text-white shadow-[0_12px_28px_rgba(100,46,124,.28)] hover:bg-deep-plum hover:shadow-[0_12px_28px_rgba(100,46,124,.28)]',
  gold:
    'bg-aqua-light text-ink shadow-[0_12px_28px_rgba(140,226,239,.35)] hover:bg-mist-blue',
  outline:
    'border border-royal-purple/20 text-royal-purple hover:border-periwinkle/70 hover:bg-periwinkle/[0.04] hover:text-deep-plum',
  ghost: 'text-ink/80 hover:text-ink hover:bg-bg-soft/[0.05]',
  ivory:
    'bg-bg-soft/95 text-ink border-border-line shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] hover:bg-white',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-[0.8125rem]',
  md: 'h-12 px-6 text-[0.875rem]',
  lg: 'h-14 px-8 text-[0.9375rem]',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps & Omit<ComponentPropsWithoutRef<'button'>, keyof CommonProps> & { href?: undefined }
type ButtonAsLink = CommonProps & Omit<ComponentPropsWithoutRef<'a'>, keyof CommonProps> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    < >
      {icon && iconPosition === 'left' && (
        <span
          className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:-translate-x-0.5"
        >
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span
          className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1"
        >
          {icon}
        </span>
      )}
    </ >
  )

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink
    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonAsButton)}>
      {content}
    </button>
  )
}