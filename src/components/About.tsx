import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Award, 
  BookOpen, 
  Coffee, 
  Globe, 
  Heart, 
  Lightbulb,
  Target,
  Users,
  Zap
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const stats = [
    { number: "5+", label: "Years Experience", icon: Zap },
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "20+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Certifications", icon: Award }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new tools and methodologies to solve complex data challenges."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely excited about turning data into stories that drive business decisions."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Focused on creating solutions that make a real difference for businesses and users."
    }
  ]

  return (
    <section id="about" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                <span className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                  About Me
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                Turning Data Into{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">
                  Actionable Insights
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
            >
              <p>
                I'm a passionate data analyst with over 5 years of experience transforming complex datasets 
                into clear, actionable insights that drive business growth. My journey began with a fascination 
                for patterns and stories hidden within data.
              </p>
              
              <p>
                Specializing in business intelligence, market research, and data visualization, I've helped 
                organizations across various industries make data-driven decisions that resulted in significant 
                improvements in efficiency and revenue.
              </p>

              <p>
                When I'm not diving deep into datasets, you'll find me exploring new analytical tools, 
                contributing to open-source projects, or sharing insights with the data community.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid sm:grid-cols-3 gap-6"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  className="text-center space-y-3"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats & Visual */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Personal Touch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    Fun Fact
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    I've analyzed everything from real estate market trends to e-commerce behavior patterns. 
                    My favorite project involved predicting customer churn using machine learning - 
                    it saved a company 20% in revenue!
                  </p>
                  <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Continuous Learner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span>Data Enthusiast</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About