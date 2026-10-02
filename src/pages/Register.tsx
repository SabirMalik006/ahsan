import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { programs } from '../data/programs'

export default function Register() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-28 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120vh] bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.12),transparent_70%)]" />
      <div aria-hidden className="pattern-arabesque pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[40rem] w-[40rem] rotate-12 opacity-[0.08]" />
      <div className="shell section-y">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto inline-flex items-center rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-forest shadow-sm backdrop-blur-md">
              Register
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-2 mt-6 text-forest">Register Now</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede mx-auto mt-5 max-w-3xl">
              Begin your journey towards knowledge, growth, character and meaningful development with EHSAAN GLOBAL.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <form className="surface mx-auto mt-12 max-w-3xl rounded-[2rem] p-8 shadow-soft md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="firstName" className="text-sm font-medium text-forest">First Name</label>
                <input id="firstName" type="text" placeholder="First Name" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="lastName" className="text-sm font-medium text-forest">Last Name</label>
                <input id="lastName" type="text" placeholder="Last Name" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2" />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-forest">Email Address</label>
                <input id="email" type="email" placeholder="your@email.com" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2" />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <label htmlFor="phone" className="text-sm font-medium text-forest">Phone Number</label>
                <input id="phone" type="tel" placeholder="+92 300 000 0000" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2" />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <label htmlFor="program" className="text-sm font-medium text-forest">Select Program</label>
                <select id="program" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2">
                  <option value="">Select a program</option>
                  {programs.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2 md:col-span-2">
                <label htmlFor="age" className="text-sm font-medium text-forest">Age Group</label>
                <input id="age" type="text" placeholder="e.g. Child (5-12), Teen (13-18), Adult" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2" />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-forest">Additional Information</label>
                <textarea id="message" rows={5} placeholder="Any questions or details you'd like to share" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2" />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <Button type="submit" size="lg" icon={<ArrowRight className="h-4 w-4" strokeWidth={1.6} />}>
                Submit Registration
              </Button>
            </div>
            <p className="mt-6 text-center text-xs uppercase tracking-[0.22em] text-muted/70">Learn | Grow | Transform</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
