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
    <footer className="border-t border-sage-100 bg-cream-50 mt-20">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Name */}
          <div>
            <h3 className="font-serif text-2xl font-light text-sage-500 mb-2">
              Katsiaryna Pukhouskaya
            </h3>
            <p className="text-xs uppercase tracking-wider text-sage-300">
              Data Analyst & Developer
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-6 text-xs uppercase tracking-wider text-sage-400">
              <a href="https://github.com/kachowska" target="_blank" rel="noreferrer" className="hover:text-sage-500 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kachowska" target="_blank" rel="noreferrer" className="hover:text-sage-500 transition-colors">
                LinkedIn
              </a>
              <a href="mailto:pukhouskaya@gmail.com" className="hover:text-sage-500 transition-colors">
                Email
              </a>
            </div>
            <p className="text-xs text-sage-300">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer