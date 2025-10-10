import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award,
  ChevronRight
} from 'lucide-react'

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const experiences = [
    {
      id: 0,
      title: "Senior Data Analyst",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading data-driven decision making for a rapidly growing SaaS company with 500+ employees.",
      achievements: [
        "Increased customer retention by 25% through predictive analytics and churn modeling",
        "Built automated reporting dashboards reducing manual work by 40 hours/week",
        "Led cross-functional team of 8 members to implement company-wide BI strategy",
        "Developed real-time monitoring systems for key business metrics"
      ],
      technologies: ["Python", "SQL", "Tableau", "AWS", "Machine Learning"],
      metrics: {
        impact: "25% retention increase",
        efficiency: "40h/week saved",
        team: "8 members led"
      }
    },
    {
      id: 1,
      title: "Data Analyst",
      company: "MarketInsights Inc",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Specialized in market research and consumer behavior analysis for Fortune 500 clients.",
      achievements: [
        "Conducted comprehensive market analysis for 15+ major brands",
        "Identified $2M revenue opportunity through customer segmentation analysis",
        "Created interactive dashboards for C-level executives",
        "Mentored 3 junior analysts and established best practices"
      ],
      technologies: ["R", "SPSS", "Power BI", "Excel", "Survey Design"],
      metrics: {
        revenue: "$2M identified",
        clients: "15+ brands",
        mentoring: "3 junior analysts"
      }
    },
    {
      id: 2,
      title: "Junior Business Analyst",
      company: "DataDriven Consulting",
      location: "Boston, MA",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Focused on business intelligence and operational analytics for small to medium enterprises.",
      achievements: [
        "Automated 80% of monthly reporting processes using Python scripts",
        "Improved forecast accuracy by 15% through advanced statistical modeling",
        "Collaborated with 5 different departments to streamline data collection",
        "Reduced data processing time from days to hours"
      ],
      technologies: ["Python", "SQL", "Excel", "Pandas", "Matplotlib"],
      metrics: {
        automation: "80% of reports",
        accuracy: "15% improvement",
        time: "Days to hours"
      }
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Analytics Plus",
      location: "Remote",
      period: "2018 - 2019",
      type: "Internship",
      description: "Gained hands-on experience in data science and machine learning applications.",
      achievements: [
        "Developed sentiment analysis model with 85% accuracy",
        "Created customer lifetime value prediction models",
        "Assisted in A/B testing framework implementation",
        "Contributed to open-source data visualization library"
      ],
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Jupyter", "Git"],
      metrics: {
        accuracy: "85% model accuracy",
        projects: "4 ML projects",
        opensource: "1 contribution"
      }
    }
  ]

  return (
    <section id="experience" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
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
                  Professional Journey
                </span>
                <div className="w-12 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                My{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">
                  Experience
                </span>
              </h2>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed mt-6">
                A journey of continuous growth, from data science intern to senior analyst, 
                driving business impact through data-driven insights.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-2"
            >
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.id}
                  onClick={() => setActiveExperience(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeExperience === index
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                  }`}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{exp.title}</h3>
                      <p className={`text-sm ${
                        activeExperience === index 
                          ? 'text-primary-100' 
                          : 'text-neutral-500 dark:text-neutral-400'
                      }`}>
                        {exp.company}
                      </p>
                      <p className={`text-xs ${
                        activeExperience === index 
                          ? 'text-primary-200' 
                          : 'text-neutral-400 dark:text-neutral-500'
                      }`}>
                        {exp.period}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      activeExperience === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Experience Details */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeExperience}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-700"
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                          {experiences[activeExperience].title}
                        </h3>
                        <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{experiences[activeExperience].company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{experiences[activeExperience].location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                          <Calendar className="w-4 h-4" />
                          <span>{experiences[activeExperience].period}</span>
                          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs">
                            {experiences[activeExperience].type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {experiences[activeExperience].description}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(experiences[activeExperience].metrics).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        className="text-center p-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                          {value}
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experiences[activeExperience].achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeExperience].technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.2 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience