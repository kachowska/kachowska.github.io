import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight,
  BarChart3,
  Database,
  TrendingUp,
  Brain,
  Sparkles
} from 'lucide-react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const roles = [
    "Data Analyst",
    "Business Intelligence Specialist", 
    "Data Visualization Expert",
    "Market Research Analyst"
  ]

  const skills = [
    { icon: BarChart3, name: "Analytics", color: "text-blue-400" },
    { icon: Database, name: "SQL", color: "text-green-400" },
    { icon: TrendingUp, name: "Insights", color: "text-purple-400" },
    { icon: Brain, name: "ML", color: "text-pink-400" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30 dark:opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            className="text-center lg:text-left space-y-8"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Greeting */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-2"
            >
              <motion.p 
                className="text-primary-600 dark:text-primary-400 font-medium text-lg flex items-center justify-center lg:justify-start gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5" />
                Hello, I'm
              </motion.p>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                Katsiaryna{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500">
                  Pukhouskaya
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Role */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="h-16 flex items-center justify-center lg:justify-start"
            >
              <motion.h2 
                key={currentRole}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-700 dark:text-neutral-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Transforming data into actionable insights with{' '}
              <span className="text-primary-600 dark:text-primary-400 font-semibold">5+ years</span>{' '}
              of experience in analytics, business intelligence, and data visualization.
            </motion.p>

            {/* Skills Pills */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-neutral-800/50 backdrop-blur-sm rounded-full border border-white/20 dark:border-neutral-700/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToAbout}
                className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#contact"
                className="group px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com/kachowska"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/katsiaryna-pukhouskaya-0086b8195/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.4)",
                    "0 0 0 20px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 via-secondary-400 to-accent-400 animate-gradient-xy" />
                <div className="absolute inset-2 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center">
                  <img
                    src="/image.png"
                    alt="Katsiaryna Pukhouskaya"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              {/* Floating Data Visualization Elements */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 bg-white dark:bg-neutral-800 rounded-xl shadow-xl flex items-center justify-center"
                  style={{
                    top: `${[10, 20, 80, 70][i]}%`,
                    left: `${[0, 90, 95, 5][i]}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {[BarChart3, Database, TrendingUp, Brain][i]({
                    className: `w-8 h-8 ${['text-blue-500', 'text-green-500', 'text-purple-500', 'text-pink-500'][i]}`
                  })}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero