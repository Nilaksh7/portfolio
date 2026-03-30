import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import AchievementsEducation from './components/AchievementsEducation'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise-bg bg-[#0a0a0f] min-h-screen text-[#e2e8f0]">
      <Navbar />
      <main>
        <Hero />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e2a] to-transparent" />
        </div>

        <About />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e2a] to-transparent" />
        </div>

        <Skills />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e2a] to-transparent" />
        </div>

        <Projects />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e2a] to-transparent" />
        </div>

        <Experience />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e2a] to-transparent" />
        </div>

        <AchievementsEducation />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e2a] to-transparent" />
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}
