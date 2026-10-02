import { HeroCarousel } from '../components/home/HeroCarousel'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { EducationalPhilosophy } from '../components/home/EducationalPhilosophy'
import { HolisticFrameworkHome } from '../components/home/HolisticFrameworkHome'
import { OurInitiativesHome } from '../components/home/OurInitiativesHome'
import { FinalCTA } from '../components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <WhyChooseUs />
      <EducationalPhilosophy />
      <HolisticFrameworkHome />
      <OurInitiativesHome />
      <FinalCTA />
    </>
  )
}
