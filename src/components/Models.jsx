import { motion } from 'framer-motion'
import { useState } from 'react'

const Models = () => {
  const [selectedModel, setSelectedModel] = useState(null)

  const models = [
    {
      id: 1,
      name: 'Flio Pro V2',
      category: 'Non Registration',
      motor: '1.2 kW',
      battery: '1.5 kWh Graphene',
      range: '50–55 km',
      topSpeed: '50 km/h',
      image: '/images/models/flio-pro-v2.jpg',
    },
    {
      id: 2,
      name: 'Flio Max',
      category: 'Non Registration',
      motor: '2.2 kW',
      battery: '3 kWh LFP',
      range: '120–130 km',
      topSpeed: '50 km/h',
      image: '/images/models/flio-max.jpg',
    },
    {
      id: 3,
      name: 'Flio Neo',
      category: 'Non Registration',
      motor: '2.2 kW',
      battery: '6 kWh LFP',
      range: '240–250 km',
      topSpeed: '50 km/h',
      image: '/images/models/flio-neo.jpg',
    },
    {
      id: 4,
      name: 'Bheem',
      category: 'Registration Required',
      motor: '3 kW',
      battery: '4 kWh LFP',
      range: '140–150 km',
      topSpeed: '65 km/h',
      image: '/images/models/bheem.jpg',
    },
    {
      id: 5,
      name: 'Bheem Lite',
      category: 'Registration Required',
      motor: '3 kW',
      battery: '2 kWh LFP',
      range: '80–90 km',
      topSpeed: '65 km/h',
      image: '/images/models/bheem-lite.jpg',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            Our <span className="gradient-text">Models</span>
          </h2>
          <p className="text-gray-400 text-lg font-sora">Premium Electric Scooters for Every Journey</p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {models.map((model) => (
            <motion.div
              key={model.id}
              variants={itemVariants}
              className="glass rounded-2xl overflow-hidden group hover:glow-accent-strong transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 bg-secondary overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-accent/20 mb-2">Ozotec</div>
                    <div className="text-2xl font-bold text-accent">{model.name}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold font-poppins">{model.name}</h3>
                  <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full font-sora">
                    {model.category}
                  </span>
                </div>

                {/* Specifications Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary rounded-lg p-3">
                    <p className="text-gray-400 text-sm font-sora">Motor</p>
                    <p className="text-accent font-bold font-poppins">{model.motor}</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <p className="text-gray-400 text-sm font-sora">Battery</p>
                    <p className="text-accent font-bold font-poppins text-sm">{model.battery}</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <p className="text-gray-400 text-sm font-sora">Range</p>
                    <p className="text-accent font-bold font-poppins text-sm">{model.range}</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <p className="text-gray-400 text-sm font-sora">Top Speed</p>
                    <p className="text-accent font-bold font-poppins">{model.topSpeed}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <button className="w-full py-2 bg-accent text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 font-poppins">
                    View Details
                  </button>
                  <button className="w-full py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 font-poppins">
                    Book Test Ride
                  </button>
                  <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 font-poppins flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04.885-1.04 2.159 0 1.273.953 2.505 1.085 2.694.132.188 1.861 2.846 4.505 3.986 2.644 1.14 2.644.966 3.122.906.476-.057 1.82-.742 2.074-1.459.255-.717.255-1.329.18-1.464-.074-.135-.272-.212-.57-.212z"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Models