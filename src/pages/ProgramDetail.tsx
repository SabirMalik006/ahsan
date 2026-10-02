import { useParams } from 'react-router-dom'
import { Reveal } from '../components/ui/Reveal'
import { getProgramBySlug } from '../data/programs'
import { Button } from '../components/ui/Button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ProgramDetail() {
  const { slug } = useParams()
  const program = slug ? getProgramBySlug(slug) : undefined

  if (!program) {
    return (
      <section className="section-y relative overflow-hidden bg-ivory pt-28 md:pt-36">
        <div className="shell text-center">
          <Reveal>
            <h1 className="display-3 text-forest">Program Not Found</h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="lede mt-4">The program you're looking for doesn't exist.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6">
              <Button href="/programs" variant="outline" icon={<ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} />}>
                Back to Programs
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="section-y relative overflow-hidden bg-ivory pt-28 md:pt-36">
      <div className="shell">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow text-gold-deep">{program.category}</p>
            <h1 className="display-2 mt-4 text-forest">{program.title}</h1>
            <p className="lede mt-6">{program.description}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <dl className="mt-10 grid grid-cols-1 gap-4 border-y border-forest/10 py-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Level</dt>
                <dd className="mt-2 font-display text-lg text-forest">{program.level}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Duration</dt>
                <dd className="mt-2 font-display text-lg text-forest">{program.duration}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Lessons</dt>
                <dd className="mt-2 font-display text-lg text-forest">{program.lessons}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/register" icon={<ArrowRight className="h-4 w-4" />}>
                Register for this program
              </Button>
              <Button href="/programs" variant="outline" icon={<ArrowLeft className="h-4 w-4" />} iconPosition="left">
                All Programs
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
