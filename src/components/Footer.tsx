import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
  Code,
  BarChart3,
  MapPin,
  Phone
} from 'lucide-react'

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Data Analysis',
    'Business Intelligence',
    'Machine Learning',
    'Market Research',
    'Dashboard Development',
    'Consulting'
  ]

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/kachowska',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/katsiaryna-pukhouskaya-0086b8195/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:katsiaryna.pukhouskaya@email.com',
      label: 'Email',
      color: 'hover:text-green-400'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-neutral-900 text-neutral-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-16 pb-8"
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Katsiaryna Pukhouskaya</h3>
                  <p className="text-neutral-400 text-sm">Data Analyst & BI Specialist</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-400 leading-relaxed max-w-md">
                Transforming complex data into actionable insights that drive business growth. 
                Specializing in analytics, visualization, and strategic decision-making support.
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <MapPin className="w-4 h-4" />
                  <span>Remote / Available Worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:katsiaryna.pukhouskaya@email.com" className="hover:text-primary-400 transition-colors duration-200">
                    katsiaryna.pukhouskaya@email.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+15551234567" className="hover:text-primary-400 transition-colors duration-200">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-neutral-800 rounded-xl ${social.color} transition-all duration-300 hover:bg-neutral-700 hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-sm block py-1"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-neutral-400 text-sm block py-1">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 rounded-2xl p-8 mb-12 border border-primary-800/30"
          >
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
              <p className="text-neutral-300">
                Get the latest insights and updates on data analysis trends, tools, and best practices.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-neutral-400 transition-colors duration-200"
                />
                <motion.button
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-800"
          >
            <div className="flex items-center gap-2 text-neutral-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Katsiaryna Pukhouskaya. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-500" />
            </div>

            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-lg transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm">Back to top</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer