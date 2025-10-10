import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  BarChart3,
  Database,
  Code,
  Brain,
  Palette,
  Settings,
  TrendingUp,
  Users,
  Cloud,
  Shield
} from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Technical')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const categories = ['Technical', 'Analytical', 'Tools', 'Soft Skills']

  const skillsData = {
    Technical: [
      { name: 'Python', level: 90, icon: Code, color: 'from-blue-500 to-blue-600' },
      { name: 'SQL', level: 95, icon: Database, color: 'from-green-500 to-green-600' },
      { name: 'R', level: 85, icon: BarChart3, color: 'from-purple-500 to-purple-600' },
      { name: 'JavaScript', level: 75, icon: Code, color: 'from-yellow-500 to-yellow-600' },
      { name: 'Machine Learning', level: 80, icon: Brain, color: 'from-pink-500 to-pink-600' },
      { name: 'Statistics', level: 90, icon: TrendingUp, color: 'from-red-500 to-red-600' }
    ],
    Analytical: [
      { name: 'Data Mining', level: 88, icon: Database, color: 'from-indigo-500 to-indigo-600' },
      { name: 'Statistical Analysis', level: 92, icon: BarChart3, color: 'from-teal-500 to-teal-600' },
      { name: 'Predictive Modeling', level: 85, icon: Brain, color: 'from-orange-500 to-orange-600' },
      { name: 'A/B Testing', level: 80, icon: TrendingUp, color: 'from-emerald-500 to-emerald-600' },
      { name: 'Market Research', level: 90, icon: Users, color: 'from-cyan-500 to-cyan-600' },
      { name: 'Business Intelligence', level: 87, icon: Shield, color: 'from-violet-500 to-violet-600' }
    ],
    Tools: [
      { name: 'Tableau', level: 92, icon: Palette, color: 'from-blue-500 to-indigo-600' },
      { name: 'Power BI', level: 88, icon: BarChart3, color: 'from-yellow-500 to-orange-600' },
      { name: 'Excel', level: 95, icon: Settings, color: 'from-green-500 to-emerald-600' },
      { name: 'Jupyter', level: 85, icon: Code, color: 'from-orange-500 to-red-600' },
      { name: 'AWS', level: 70, icon: Cloud, color: 'from-blue-400 to-blue-600' },
      { name: 'Git', level: 82, icon: Settings, color: 'from-gray-500 to-gray-700' }
    ],
    'Soft Skills': [
      { name: 'Communication', level: 95, icon: Users, color: 'from-pink-500 to-rose-600' },
      { name: 'Problem Solving', level: 90, icon: Brain, color: 'from-purple-500 to-indigo-600' },
      { name: 'Leadership', level: 85, icon: TrendingUp, color: 'from-blue-500 to-cyan-600' },
      { name: 'Project Management', level: 88, icon: Settings, color: 'from-green-500 to-teal-600' },
      { name: 'Critical Thinking', level: 92, icon: Brain, color: 'from-orange-500 to-amber-600' },
      { name: 'Collaboration', level: 90, icon: Users, color: 'from-violet-500 to-purple-600' }
    ]
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                <span className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                  Skills & Expertise
                </span>
                <div className="w-12 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                My Technical{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">
                  Arsenal
                </span>
              </h2>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed mt-6">
                A comprehensive toolkit built through years of hands-on experience in data analysis, 
                business intelligence, and strategic decision-making.
              </p>
            </motion.div>
          </div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-xl border border-neutral-100 dark:border-neutral-700 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="space-y-4">
                  {/* Skill Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {skill.level}% Proficiency
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: 0.8 + index * 0.1, 
                          duration: 1, 
                          ease: "easeOut" 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center">
              Recent Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Google Analytics Certified',
                'Tableau Desktop Specialist',
                'AWS Cloud Practitioner',
                'Python for Data Science'
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  className="bg-white dark:bg-neutral-800 p-4 rounded-xl text-center shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {cert}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills