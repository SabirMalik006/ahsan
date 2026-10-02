import { ArrowRight } from 'lucide-react'
import { philosophyContent } from '../../data/philosophy'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

const learningPath = ['Qur’an', 'Knowledge', 'Tarbiyah', 'Skills', 'Family', 'Society']

export function EducationalPhilosophy() {
  return (
    <section className="section-y relative overflow-hidden bg-cream/60">
      <div className="shell">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow text-gold-deep">{philosophyContent.eyebrow}</span>
            <h2 className="display-3 mt-5 text-forest">{learningPath.join(' → ')}</h2>
            <p className="lede mx-auto mt-5 max-w-3xl">
              Education should connect knowledge with purpose, character, practical skills, family life, and responsible
              participation in society.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {philosophyContent.principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 0.035}>
              <div className="flex items-start gap-3 border-b border-forest/10 py-3 text-forest">
                <span className="font-display text-sm text-gold-deep">{String(index + 1).padStart(2, '0')}</span>
                <span>{principle}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-9 max-w-3xl text-center font-display text-lg leading-relaxed text-forest md:text-xl">
            {philosophyContent.corePrinciple}
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/about-vision" variant="outline" size="sm" icon={<ArrowRight className="h-3.5 w-3.5" />}>
              Discover Our Vision
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}