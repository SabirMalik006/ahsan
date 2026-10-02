import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-28 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120vh] bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.12),transparent_70%)]" />
      <div aria-hidden className="pattern-arabesque pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[40rem] w-[40rem] rotate-12 opacity-[0.08]" />
      <div className="shell section-y">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto inline-flex items-center rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-forest shadow-sm backdrop-blur-md">
              Contact Us
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-2 mt-6 text-forest">Get in Touch</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede mx-auto mt-5 max-w-3xl">
              Have a question about our programs, vision or how to get involved? We'd love to hear from you.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="surface flex h-full flex-col rounded-[2rem] p-8 shadow-soft md:p-10">
              <h2 className="font-display text-2xl text-forest">Contact Information</h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-white/95 shadow-sm">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-forest">Email</p>
                    <p className="text-muted">info@ehsaanglobal.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-white/95 shadow-sm">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-forest">Phone</p>
                    <p className="text-muted">+92 (0) 300 0000000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-white/95 shadow-sm">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-forest">Location</p>
                    <p className="text-muted">Online, serving globally</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-8">
                <p className="text-center font-display text-lg leading-relaxed text-forest md:text-xl">
                  Need help choosing a learning path? We are here to answer your questions and help you get started.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="surface flex flex-col rounded-[2rem] p-8 shadow-soft md:p-10">
              <h2 className="font-display text-2xl text-forest">Send Us a Message</h2>
              <div className="mt-6 grid gap-5">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-forest">Full Name</label>
                  <input id="name" type="text" placeholder="Your full name" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-forest">Email Address</label>
                  <input id="email" type="email" placeholder="your@email.com" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-forest">Phone Number</label>
                  <input id="phone" type="tel" placeholder="+92 300 000 0000" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-forest">Message</label>
                  <textarea id="message" rows={5} placeholder="How can we help you?" className="rounded-2xl border border-forest/10 bg-white/95 px-4 py-3 text-forest shadow-sm outline-none ring-gold/40 transition focus:border-gold/60 focus:ring-2" />
                </div>
              </div>
              <div className="mt-6">
                <Button type="submit" size="lg" className="w-full sm:w-auto" icon={<ArrowRight className="h-4 w-4" strokeWidth={1.6} />}>
                  Send Message
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
