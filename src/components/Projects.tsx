import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink,
  Github,
  Search,
  ShoppingCart,
  Home,
  TrendingUp,
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
      title: "Kraków Real Estate Price Analysis (2018–2025)",
      description: "Exploratory + predictive analysis of Kraków property prices: cleaning 25k+ listings, feature engineering (price/m², distance-to-center, new build), spatial trends, and an interactive dashboard.",
      category: "Data Analysis",
      technologies: ["Python", "Pandas", "scikit-learn", "GeoPandas", "SQL", "Looker Studio"],
      image: "/articles/price_distribution.png",
      link: "https://github.com/kachowska/krakow-realestate-analysis/blob/main/README.md",
      github: "https://github.com/kachowska/krakow-realestate-analysis",
      featured: true,
      metrics: {
        listings: "25k+",
        accuracy: "85%",
        features: "15+"
      },
      highlights: [
        "Cleaned and analyzed 25,000+ property listings from Kraków",
        "Built predictive models with 85% accuracy for price estimation",
        "Created interactive dashboard with spatial trends visualization",
        "Generated actionable insights for real estate investment decisions"
      ],
      icon: Home,
      color: "from-blue-500 to-indigo-600",
      tags: ["Real Estate", "Python", "Machine Learning", "Geospatial Analysis"],
      dashboard: "https://lookerstudio.google.com/s/l216sC_s_qs"
    },
    {
      id: 2,
      title: "Heart Disease Analysis & Prediction",
      description: "Comprehensive analysis of heart disease risk factors using machine learning to predict cardiovascular disease with interactive Streamlit dashboard for risk assessment.",
      category: "Healthcare Analytics",
      technologies: ["Python", "Streamlit", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      image: "/articles/correlation_matrix.png",
      link: "https://heart-disease-analysis-kp.streamlit.app/",
      github: "https://github.com/kachowska/heart-disease-analysis",
      featured: true,
      metrics: {
        accuracy: "87%",
        patients: "1k+",
        features: "14"
      },
      highlights: [
        "Analyzed 1,000+ patient records for heart disease prediction",
        "Achieved 87% accuracy using ensemble machine learning methods",
        "Built interactive Streamlit dashboard for real-time risk assessment",
        "Identified key risk factors through statistical analysis"
      ],
      icon: TrendingUp,
      color: "from-red-500 to-pink-600",
      tags: ["Healthcare", "Machine Learning", "Streamlit", "Medical Analytics"]
    },
    {
      id: 3,
      title: "Sea Battle (Battleship) — Web Game",
      description: "Turn-based JS game: drag‑and‑drop placement, rotation on click, hit-streak logic, ship reveal on sink, score counter, final win screen; localStorage save and vs. computer.",
      category: "Web Development",
      technologies: ["JavaScript", "HTML/CSS", "Game Logic", "LocalStorage"],
      image: "/assets/sea-battle-demo.png",
      link: "https://kachowska.github.io/sea-battle/",
      github: "https://github.com/kachowska/sea-battle",
      featured: true,
      metrics: {
        gameLogic: "Complete",
        features: "10+",
        responsive: "Yes"
      },
      highlights: [
        "Built complete battleship game with drag-and-drop ship placement",
        "Implemented AI opponent with strategic ship placement",
        "Added localStorage for game state persistence",
        "Created responsive design for mobile and desktop play"
      ],
      icon: Star,
      color: "from-blue-500 to-cyan-600",
      tags: ["JavaScript", "Game Development", "UI/UX", "Interactive"]
    },
    {
      id: 4,
      title: "Olist E-commerce Analysis",
      description: "Comprehensive analysis of Brazilian e-commerce platform data, exploring customer behavior, seller performance, and market trends with interactive visualizations.",
      category: "Business Intelligence",
      technologies: ["Python", "Pandas", "Plotly", "SQL", "Data Visualization"],
      image: "/articles/olist/dashboard_overview.png",
      link: "#",
      github: "#",
      featured: false,
      metrics: {
        orders: "100k+",
        sellers: "3k+",
        insights: "25+"
      },
      highlights: [
        "Analyzed 100,000+ orders from Brazilian e-commerce platform",
        "Identified seasonal trends and customer behavior patterns",
        "Created comprehensive dashboard for business stakeholders",
        "Provided actionable insights for seller optimization"
      ],
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-600",
      tags: ["E-commerce", "Business Analytics", "Data Visualization", "Market Research"]
    },
  ]

  const categories = ['All', 'Data Analysis', 'Healthcare Analytics', 'Web Development', 'Business Intelligence']

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
          <div className="text-center space-y-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-sage-300" />
                <span className="text-xs uppercase tracking-[0.2em] text-sage-400 font-light">
                  Portfolio
                </span>
                <div className="h-px w-12 bg-sage-300" />
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-sage-500 leading-tight mb-6">
                Selected <span className="font-normal">Work</span>
              </h2>
              
              <p className="text-base md:text-lg text-sage-400 max-w-2xl mx-auto leading-relaxed font-light">
                A collection of data analysis projects focused on delivering measurable insights 
                and driving strategic decision-making.
              </p>
            </motion.div>
          </div>

          {/* Featured Projects Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white border border-sage-100 hover:border-sage-200 overflow-hidden transition-all duration-300"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-cream-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Project Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-sage-500 mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sage-400 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-sage-200 text-sage-400 text-xs uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-500 hover:text-sage-400 text-sm uppercase tracking-wider font-medium transition-colors flex items-center gap-2"
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage-400 hover:text-sage-500 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
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
            className="space-y-6 max-w-7xl mx-auto"
          >
            <div className="flex flex-col gap-6">
              {/* Category Filters */}
              <div className="flex items-center gap-3 flex-wrap justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-sage-500 text-cream-50 border border-sage-500'
                        : 'bg-transparent text-sage-400 border border-sage-200 hover:border-sage-300 hover:text-sage-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sage-300" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-white border border-sage-200 focus:border-sage-300 focus:outline-none transition-colors duration-200 w-full text-sage-500 text-sm placeholder:text-sage-300"
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
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="group bg-white border border-sage-100 hover:border-sage-200 overflow-hidden transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ y: -2 }}
                  >
                    {/* Mini Project Image */}
                    <div className="relative h-48 overflow-hidden bg-cream-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-serif text-lg font-light text-sage-500 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-sage-400 line-clamp-2 font-light">
                          {project.description}
                        </p>
                      </div>

                      {/* Mini Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 border border-sage-200 text-sage-400 text-xs uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Mini Actions */}
                      <div className="flex items-center justify-between pt-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sage-500 hover:text-sage-400 font-medium text-xs uppercase tracking-wider flex items-center gap-1 transition-colors"
                        >
                          View
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sage-400 hover:text-sage-500 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
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