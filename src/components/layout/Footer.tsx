import { useState } from 'react'
import { Facebook, Instagram, Linkedin, Send, Youtube } from 'lucide-react'
import { footerColumns } from '../../data/navigation'
import { Divider, Particles } from '../ui/Ornaments'
import { Wordmark } from './Logo'

const socials = [
  { label: 'Instagram', icon: Instagram, href: '#footer' },
  { label: 'YouTube', icon: Youtube, href: '#footer' },
  { label: 'LinkedIn', icon: Linkedin, href: '#footer' },
  { label: 'Facebook', icon: Facebook, href: '#footer' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <footer id="footer" className="relative overflow-hidden bg-forest-deep text-cream">
      <div className="pattern-stars absolute inset-0 opacity-[0.12]" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(11,90,70,0.75),transparent_75%)]"
        aria-hidden
      />
      <Particles count={16} tone="cream" className="opacity-60" />

      <div className="shell relative pb-12 pt-20 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_2fr]">
          {/* brand + mission */}
          <div>
            <Wordmark tone="light" />
            <p className="mt-7 max-w-sm text-[0.9375rem] leading-[1.85] text-cream/65">
              Ihsan Global Quran Academy exists to make authentic Islamic knowledge accessible,
              structured and livable — for individuals, families and communities in every part of the
              world.
            </p>

            <div className="mt-9 max-w-sm">
              <label
                htmlFor="newsletter"
                className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-light/85"
              >
                Monthly letter
              </label>
              <form
                className="mt-4 flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] p-1.5 pl-5 backdrop-blur-sm transition-colors duration-500 focus-within:border-gold/60"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (!email) return
                  setSent(true)
                  setEmail('')
                }}
              >
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="h-10 w-full min-w-0 bg-transparent text-sm text-cream outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to the monthly letter"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-forest-deep transition-colors duration-500 hover:bg-gold-light"
                >
                  <Send className="h-4 w-4" strokeWidth={1.7} />
                </button>
              </form>
              <p className="mt-3 h-4 text-xs text-gold-light/80" aria-live="polite">
                {sent ? 'Jazāk Allāhu khayran — please check your inbox.' : ''}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2.5">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold-light"
                >
                  <Icon className="h-[17px] w-[17px]" strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-gold-light/85">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="link-underline text-[0.9375rem] text-cream/70 transition-colors duration-500 hover:text-cream"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Divider className="my-12 opacity-70" />

        <p className="font-arabic text-center text-xl text-gold-light/75" lang="ar" dir="rtl">
          رَبَّنَا زِدْنَا عِلْمًا
        </p>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Ihsan Global Quran Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#footer" className="link-underline hover:text-cream/80">
              Privacy
            </a>
            <a href="#footer" className="link-underline hover:text-cream/80">
              Terms
            </a>
            <span className="hidden items-center gap-2 sm:inline-flex">
              <span className="h-1 w-1 rounded-full bg-gold-light/70" />
              Made with intention
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
