import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-sage-100 bg-cream-50/95 backdrop-blur-sm"
    >
      <div className="container flex items-center justify-between py-5">
        <a href="#" className="font-serif text-xl font-light text-sage-500 tracking-tight hover:text-sage-400 transition-colors">
          KP
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider text-sage-400">
          <a href="#projects" className="hover:text-sage-500 transition-colors">Work</a>
          <a href="#articles" className="hover:text-sage-500 transition-colors">Writing</a>
          <a href="#about" className="hover:text-sage-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-sage-500 transition-colors">Contact</a>
        </nav>
      </div>
    </motion.header>
  )
}