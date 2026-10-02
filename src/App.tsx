import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutVision from './pages/AboutVision'
import Philosophy from './pages/Philosophy'
import HolisticFramework from './pages/HolisticFramework'
import Initiatives from './pages/Initiatives'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import Contact from './pages/Contact'
import Register from './pages/Register'

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-vision" element={<AboutVision />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/holistic-framework" element={<HolisticFramework />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
