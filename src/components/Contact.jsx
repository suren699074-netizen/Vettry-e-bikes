import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [contactType, setContactType] = useState('call')

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

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      details: ['Siruvani Main Road', 'Alandhurai, Coimbatore', '641101'],
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['9994598837', '8778242505'],
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['Vettrykrishnomoorthy@gmail.com'],
    },
    {
      icon: '📱',
      title: 'Instagram',
      details: ['@vettrye.bikes'],
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-primary scroll-reveal">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg font-sora">Visit us or reach out anytime</p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-6 text-center hover:glow-accent-strong transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold font-poppins mb-3">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-300 text-sm font-sora">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Google Map */}
        <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-96 glass p-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5697829547987!2d76.96023!3d10.93332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7edc7eaeaaaab%3A0x123456789!2sVettry%20E-bikes!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact