import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    // Animated background gradient
    gsap.fromTo(
      containerRef.current,
      { backgroundPosition: '0% 50%' },
      {
        backgroundPosition: '100% 50%',
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    )

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
    )

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4 }
    )

    // Buttons animation
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6 }
    )
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary"
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-poppins leading-tight"
          variants={itemVariants}
        >
          Drive the Future with
          <span className="block gradient-text mt-4">Ozotec</span>
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-sora"
          variants={itemVariants}
        >
          Premium Electric Mobility for Everyday Life
        </motion.p>

        <motion.div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <button className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 glow-accent-strong font-poppins text-lg">
            Explore Models
          </button>
          <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-105 font-poppins text-lg">
            Book Test Ride
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero