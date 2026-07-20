import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'Models', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  const socialLinks = [
    { icon: 'Instagram', url: 'https://instagram.com/vettrye.bikes' },
    { icon: 'Facebook', url: '#' },
    { icon: 'Twitter', url: '#' },
    { icon: 'YouTube', url: '#' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="bg-secondary border-t border-accent/20">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold font-poppins mb-2">
              Vettry <span className="gradient-text">E-bikes</span>
            </h3>
            <p className="text-gray-400 text-sm font-sora mb-4">
              Authorized Ozotec Electric Vehicle Dealer
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent/20 text-accent hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center font-bold"
                >
                  {link.icon.charAt(0)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold font-poppins mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors duration-300 font-sora"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold font-poppins mb-6">Info</h4>
            <p className="text-gray-400 text-sm font-sora mb-4">
              <strong>Phone:</strong> 9994598837
            </p>
            <p className="text-gray-400 text-sm font-sora mb-4">
              <strong>Email:</strong> Vettrykrishnomoorthy@gmail.com
            </p>
            <p className="text-gray-400 text-sm font-sora">
              <strong>Hours:</strong> Mon - Sun, 10am - 6pm
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-accent/20 mb-8"></div>

        {/* Bottom Footer */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm font-sora">
            © {currentYear} Vettry E-bikes. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm font-sora mt-4 md:mt-0">
            Designed & Developed with <span className="text-accent">❤️</span> for Ozotec
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer