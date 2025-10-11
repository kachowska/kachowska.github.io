import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Freelance",
      period: "2023 - Present",
      description: "Specialized in real estate market analysis, e-commerce analytics, and healthcare data insights using Python, SQL, and visualization tools.",
      skills: ["Python", "SQL", "Tableau", "Looker Studio", "Statistical Analysis"]
    },
    {
      title: "Research Analyst", 
      company: "Academic Projects",
      period: "2022 - 2023",
      description: "Conducted comprehensive research on Polish real estate market trends and developed predictive models for property valuation.",
      skills: ["Data Mining", "Machine Learning", "Market Research", "Statistical Modeling"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Experience
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My professional journey in data analysis and research
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
