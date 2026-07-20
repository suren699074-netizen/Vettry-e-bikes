import { motion } from 'framer-motion'
import { useState } from 'react'

const TestRide = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: '',
    date: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', phone: '', model: '', date: '' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-secondary scroll-reveal">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Book Your <span className="gradient-text">Test Ride</span>
          </h2>
          <p className="text-gray-400 text-lg font-sora">Experience the future of mobility</p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold font-poppins mb-2 text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/50 border border-accent/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-accent transition-colors duration-300 font-sora"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold font-poppins mb-2 text-gray-300">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/50 border border-accent/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-accent transition-colors duration-300 font-sora"
                placeholder="+91 9994598837"
              />
            </div>

            <div>
              <label className="block text-sm font-bold font-poppins mb-2 text-gray-300">Preferred Model</label>
              <select
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/50 border border-accent/30 rounded-lg text-light focus:outline-none focus:border-accent transition-colors duration-300 font-sora"
              >
                <option value="">Select a model</option>
                <option value="Flio Pro V2">Flio Pro V2</option>
                <option value="Flio Max">Flio Max</option>
                <option value="Flio Neo">Flio Neo</option>
                <option value="Bheem">Bheem</option>
                <option value="Bheem Lite">Bheem Lite</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold font-poppins mb-2 text-gray-300">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/50 border border-accent/30 rounded-lg text-light focus:outline-none focus:border-accent transition-colors duration-300 font-sora"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-poppins text-lg glow-accent-strong"
            >
              {submitted ? '✓ Booking Submitted!' : 'Book Test Ride'}
            </button>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-accent/20 border border-accent rounded-lg text-center text-accent font-poppins"
            >
              Thank you! We'll contact you shortly to confirm your test ride.
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default TestRide