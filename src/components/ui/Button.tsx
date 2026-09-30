import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'primary' | 'gold' | 'outline' | 'ghost' | 'ivory'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-medium tracking-[0.01em] whitespace-nowrap transition-[transform,background-color,color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-forest text-cream shadow-[0_16px_36px_-22px_rgba(6,63,50,0.85)] hover:bg-forest-soft hover:shadow-[0_22px_44px_-20px_rgba(6,63,50,0.7)]',
  gold: 'bg-gold text-forest-deep shadow-[0_16px_34px_-20px_rgba(201,164,92,1)] hover:bg-gold-light',
  outline:
    'border border-forest/20 text-forest hover:border-gold/70 hover:bg-forest/[0.04] hover:text-forest-deep',
  ghost: 'text-forest/80 hover:text-forest hover:bg-forest/[0.05]',
  ivory:
    'bg-cream/95 text-forest border border-cream shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] hover:bg-white',
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

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof CommonProps> & { href?: undefined }

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof CommonProps> & { href: string }

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
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1">
          {icon}
        </span>
      )}
    </>
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
