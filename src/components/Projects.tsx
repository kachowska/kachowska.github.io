import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink,
  Github,
  Filter,
  Search,
  BarChart3,
  ShoppingCart,
  Home,
  TrendingUp,
  Users,
  Database,
  Eye,
  Star
} from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      id: 1,
      title: "Real Estate Market Analysis",
      description: "Comprehensive analysis of Polish real estate market trends, pricing patterns, and investment opportunities using statistical modeling and data visualization.",
      category: "Market Research",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Statistical Analysis"],
      image: "/articles/price_distribution.png",
      link: "#",
      github: "#",
      featured: true,
      metrics: {
        accuracy: "95%",
        dataPoints: "50k+",
        insights: "12"
      },
      highlights: [
        "Analyzed 50,000+ property listings across all Polish voivodeships",
        "Identified key price drivers and market trends",
        "Created interactive visualizations for stakeholder presentations",
        "Achieved 95% accuracy in price prediction models"
      ],
      icon: Home,
      color: "from-blue-500 to-indigo-600",
      tags: ["Data Analysis", "Real Estate", "Python", "Visualization"]
    },
    {
      id: 2,
      title: "E-commerce Analytics Dashboard",
      description: "Built comprehensive analytics dashboard for Brazilian e-commerce company analyzing customer behavior, sales trends, and operational efficiency.",
      category: "Business Intelligence",
      technologies: ["SQL", "Tableau", "Python", "AWS", "ETL"],
      image: "/articles/olist/dashboard_overview.png",
      link: "#",
      github: "#",
      featured: true,
      metrics: {
        revenue: "$2.3M",
        customers: "100k+",
        efficiency: "40%"
      },
      highlights: [
        "Processed 100k+ customer transactions and order data",
        "Identified $2.3M revenue optimization opportunities",
        "Improved operational efficiency by 40%",
        "Created real-time monitoring dashboards"
      ],
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-600",
      tags: ["Dashboard", "E-commerce", "SQL", "Tableau"]
    },
    {
      id: 3,
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn with 87% accuracy, helping reduce churn rate by 25% through targeted retention strategies.",
      category: "Machine Learning",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "ML"],
      image: "/articles/olist/cohorts.png",
      link: "#",
      github: "#",
      featured: false,
      metrics: {
        accuracy: "87%",
        churnReduction: "25%",
        customers: "50k+"
      },
      highlights: [
        "Developed predictive model with 87% accuracy",
        "Reduced customer churn by 25%",
        "Analyzed 50,000+ customer behavioral patterns",
        "Implemented automated early warning system"
      ],
      icon: Users,
      color: "from-purple-500 to-violet-600",
      tags: ["Machine Learning", "Prediction", "Python", "Churn Analysis"]
    },
    {
      id: 4,
      title: "Sales Performance Analytics",
      description: "Advanced sales analytics platform providing insights into sales team performance, territory analysis, and revenue forecasting.",
      category: "Business Intelligence",
      technologies: ["Power BI", "SQL Server", "DAX", "Excel", "KPI"],
      image: "/articles/olist/weekly.png",
      link: "#",
      github: "#",
      featured: false,
      metrics: {
        teams: "15",
        revenue: "$5M+",
        forecasting: "92%"
      },
      highlights: [
        "Analyzed performance of 15 sales teams",
        "Tracked $5M+ in revenue opportunities",
        "Achieved 92% accuracy in revenue forecasting",
        "Automated weekly performance reports"
      ],
      icon: TrendingUp,
      color: "from-orange-500 to-red-600",
      tags: ["Sales Analytics", "Power BI", "Forecasting", "KPI"]
    },
    {
      id: 5,
      title: "Market Segmentation Study",
      description: "Customer segmentation analysis using clustering algorithms to identify distinct customer groups and optimize marketing strategies.",
      category: "Market Research",
      technologies: ["R", "K-means", "SPSS", "Statistical Analysis", "Clustering"],
      image: "/articles/correlation_matrix.png",
      link: "#",
      github: "#",
      featured: false,
      metrics: {
        segments: "7",
        customers: "75k+",
        conversion: "18%"
      },
      highlights: [
        "Identified 7 distinct customer segments",
        "Analyzed 75,000+ customer profiles",
        "Improved marketing conversion by 18%",
        "Created targeted marketing strategies"
      ],
      icon: Database,
      color: "from-teal-500 to-cyan-600",
      tags: ["Segmentation", "Clustering", "R", "Marketing"]
    },
    {
      id: 6,
      title: "Operational Efficiency Analysis",
      description: "Process optimization study identifying bottlenecks and efficiency improvements in manufacturing operations.",
      category: "Operations",
      technologies: ["Python", "Process Mining", "Tableau", "Statistical Analysis"],
      image: "/articles/area_distribution.png",
      link: "#",
      github: "#",
      featured: false,
      metrics: {
        efficiency: "35%",
        processes: "25",
        savings: "$800k"
      },
      highlights: [
        "Improved operational efficiency by 35%",
        "Analyzed 25 core business processes",
        "Generated $800k in annual savings",
        "Implemented continuous monitoring system"
      ],
      icon: BarChart3,
      color: "from-pink-500 to-rose-600",
      tags: ["Operations", "Process Mining", "Efficiency", "Cost Savings"]
    }
  ]

  const categories = ['All', 'Market Research', 'Business Intelligence', 'Machine Learning', 'Operations']

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = activeFilter === 'All' || project.category === activeFilter
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeFilter, searchTerm])

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="section-padding">
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
                  Portfolio
                </span>
                <div className="w-12 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                Featured{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">
                  Projects
                </span>
              </h2>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed mt-6">
                A showcase of impactful data analysis projects that delivered measurable business value 
                and drove strategic decision-making.
              </p>
            </motion.div>
          </div>

          {/* Featured Projects Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl border border-neutral-100 dark:border-neutral-700 overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${project.color} flex items-center justify-center shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                        <div className="text-sm font-bold text-primary-600 dark:text-primary-400">
                          {value}
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <motion.a
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="p-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Category Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeFilter === category
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 w-64"
                />
              </div>
            </div>

            {/* All Projects Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFilter}-${searchTerm}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="group bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl border border-neutral-100 dark:border-neutral-700 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ y: -3 }}
                  >
                    {/* Mini Project Image */}
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${project.color} flex items-center justify-center`}>
                          <project.icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Mini Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Mini Actions */}
                      <div className="flex items-center justify-between pt-2">
                        <motion.a
                          href={project.link}
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm flex items-center gap-1"
                          whileHover={{ x: 2 }}
                        >
                          View Project
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                        <a
                          href={project.github}
                          className="p-1 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-neutral-500 dark:text-neutral-400">
                  No projects found matching your criteria.
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects