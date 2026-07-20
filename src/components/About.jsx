import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const About = () => {
  const ref = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-secondary scroll-reveal">
      <motion.div
        ref={ref}
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            About <span className="gradient-text">Vettry E-bikes</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass p-8 md:p-12 rounded-2xl">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sora mb-6">
            Vettry E-bikes is an authorized Ozotec electric vehicle showroom located at{' '}
            <span className="gradient-text font-bold">Siruvani Main Road, Alandhurai, Coimbatore</span>. We
            provide premium electric scooters with reliable performance, modern technology, and excellent
            customer support.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sora">
            Our mission is to make eco-friendly transportation accessible through quality products and
            dependable after-sales service. We believe in empowering our customers with cutting-edge mobility
            solutions that are sustainable, efficient, and stylish.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About