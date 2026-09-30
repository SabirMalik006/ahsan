import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight, Menu, Search, X } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { Button } from '../ui/Button'
import { Wordmark } from './Logo'
import { SILK } from '../../lib/motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* reading progress */}
        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className="h-[2px] origin-left bg-gradient-to-r from-gold via-gold-light to-gold-deep"
        />

        <div className="shell">
          <nav
            aria-label="Primary"
            className={`mt-3 flex items-center justify-between gap-4 rounded-full border px-3 py-2.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-5 md:py-3 ${
              scrolled
                ? 'border-forest/8 bg-white/72 shadow-[0_18px_40px_-28px_rgba(6,63,50,0.5)] backdrop-blur-xl backdrop-saturate-150'
                : 'border-transparent bg-transparent'
            }`}
          >
            <a href="#top" className="shrink-0 rounded-full" aria-label="Ihsan Global Quran Academy — home">
              <Wordmark />
            </a>

            <ul className="hidden items-center gap-1 xl:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group relative inline-flex items-center rounded-full px-3.5 py-2 text-[0.8125rem] font-medium text-forest/75 transition-colors duration-500 hover:text-forest xl:px-4"
                  >
                    {link.label}
                    <span className="absolute inset-x-3.5 bottom-1 h-px scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1.5 md:gap-2">
              <button
                type="button"
                aria-label="Search the platform"
                className="hidden h-10 w-10 items-center justify-center rounded-full text-forest/70 transition-colors duration-500 hover:bg-forest/[0.06] hover:text-forest md:inline-flex"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={1.4} />
              </button>

              <a
                href="#final-cta"
                className="hidden rounded-full px-3.5 py-2 text-[0.8125rem] font-medium text-forest/80 transition-colors duration-500 hover:text-forest md:inline-block"
              >
                Login
              </a>

              {/* wrapped so the display utility can win over Button's own `inline-flex` */}
              <span className="hidden sm:inline-flex">
                <Button
                  href="#final-cta"
                  size="sm"
                  variant="primary"
                  icon={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />}
                >
                  Start Learning
                </Button>
              </span>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={open}
                aria-controls="mobile-nav"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/12 bg-white/70 text-forest backdrop-blur-md transition-colors duration-500 hover:border-gold/60 xl:hidden"
              >
                <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: SILK }}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-forest-deep/45 backdrop-blur-sm"
            />

            <motion.aside
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.55, ease: SILK }}
              className="absolute inset-y-0 right-0 flex w-[86%] max-w-[400px] flex-col overflow-y-auto border-l border-gold/20 bg-ivory px-7 pb-10 pt-7 shadow-[-30px_0_70px_-40px_rgba(6,63,50,0.6)]"
            >
              <div className="flex items-center justify-between">
                <Wordmark />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/12 text-forest transition-colors duration-500 hover:border-gold/60"
                >
                  <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </button>
              </div>

              <ul className="mt-10 flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease: SILK }}
                    className="border-b border-forest/8"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 font-display text-[1.35rem] text-forest transition-colors duration-400 hover:text-forest-soft"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto space-y-4 pt-10">
                <Button href="#final-cta" size="lg" className="w-full" onClick={() => setOpen(false)}>
                  Start Learning
                </Button>
                <Button
                  href="#programs"
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Explore Programs
                </Button>
                <p className="pt-2 text-center text-xs uppercase tracking-[0.22em] text-muted/70">
                  Learn · Grow · Transform
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
