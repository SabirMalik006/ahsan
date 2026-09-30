import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroCarousel } from './components/home/HeroCarousel'
import { LearningJourney } from './components/home/LearningJourney'
import { WhyChooseUs } from './components/home/WhyChooseUs'
import { ProgramsSection } from './components/home/ProgramsSection'
import { ImmersiveFeature } from './components/home/ImmersiveFeature'
import { ScholarsSection } from './components/home/ScholarsSection'
import { KnowledgeLibrary } from './components/home/KnowledgeLibrary'
import { CommunitySection } from './components/home/CommunitySection'
import { Testimonials } from './components/home/Testimonials'
import { StatsSection } from './components/home/StatsSection'
import { FinalCTA } from './components/home/FinalCTA'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ivory">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <HeroCarousel />
        <LearningJourney />
        <WhyChooseUs />
        <ProgramsSection />
        <ImmersiveFeature />
        <ScholarsSection />
        <KnowledgeLibrary />
        <CommunitySection />
        <Testimonials />
        <StatsSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
