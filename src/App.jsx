import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Models from './components/Models'
import WhyChoose from './components/WhyChoose'
import Gallery from './components/Gallery'
import TestRide from './components/TestRide'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import { initializeAnimations } from './utils/animations'

function App() {
  useEffect(() => {
    initializeAnimations()
  }, [])

  return (
    <div className="bg-primary text-light overflow-x-hidden">
      <Hero />
      <About />
      <Models />
      <WhyChoose />
      <Gallery />
      <TestRide />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App