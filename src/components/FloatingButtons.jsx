import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const whatsappNumber = '919994598837'
  const whatsappMessage = 'Hi Vettry E-bikes, I would like to know more about your electric scooters.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  }

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:bg-green-700 transition-all duration-300"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        title="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04.885-1.04 2.159 0 1.273.953 2.505 1.085 2.694.132.188 1.861 2.846 4.505 3.986 2.644 1.14 2.644.966 3.122.906.476-.057 1.82-.742 2.074-1.459.255-.717.255-1.329.18-1.464-.074-.135-.272-.212-.57-.212z" />
        </svg>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919994598837"
        className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-primary shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 glow-accent-strong"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        title="Call Us"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-accent shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-300 border border-accent/30"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            title="Back to Top"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14s1.5 1.5 5 1.5 5-1.5 5-1.5m0-4V6m0 0l-2 2m2-2l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FloatingButtons