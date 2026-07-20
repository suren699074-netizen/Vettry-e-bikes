import { motion } from 'framer-motion'
import { useState } from 'react'

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const galleryItems = [
    { id: 1, category: 'Vehicles', title: 'Flio Pro V2 Showcase' },
    { id: 2, category: 'Vehicles', title: 'Flio Max Performance' },
    { id: 3, category: 'Showroom', title: 'Showroom Display' },
    { id: 4, category: 'Service', title: 'Service Center' },
    { id: 5, category: 'Delivery', title: 'Customer Delivery' },
    { id: 6, category: 'Vehicles', title: 'Bheem Premium' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-primary scroll-reveal">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Showroom <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg font-sora">Experience our premium collection</p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative h-64 md:h-72 rounded-xl overflow-hidden cursor-pointer group"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🛴</div>
                    <div className="text-2xl font-bold text-accent">{item.title}</div>
                  </div>
                </div>
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-accent text-primary font-bold rounded-full font-poppins">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Gallery