import { motion } from 'framer-motion'

const WhyChoose = () => {
  const reasons = [
    { icon: '💎', title: 'Premium Quality', description: 'World-class engineering and materials' },
    { icon: '🔋', title: 'Long Battery Life', description: 'Advanced battery technology for durability' },
    { icon: '⚡', title: 'LFP & Graphene Battery', description: 'Latest battery technology for efficiency' },
    { icon: '🔧', title: 'Low Maintenance', description: 'Simple and cost-effective upkeep' },
    { icon: '🌱', title: 'Eco Friendly', description: 'Zero emissions for a sustainable future' },
    { icon: '⚙️', title: 'Advanced Motors', description: 'High-performance motor technology' },
    { icon: '👨‍🔧', title: 'Reliable Service', description: 'Excellent after-sales support' },
    { icon: '⚡', title: 'Energy Efficient', description: 'Maximum range with minimal charging' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-secondary scroll-reveal">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Why Choose <span className="gradient-text">Ozotec</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-6 text-center hover:glow-accent-strong transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm font-sora">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhyChoose