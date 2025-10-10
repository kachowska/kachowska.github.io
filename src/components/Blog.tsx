import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Filter,
  BookOpen,
  TrendingUp,
  BarChart3,
  Database,
  Brain,
  Tag
} from 'lucide-react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const categories = ['All', 'Data Analysis', 'Machine Learning', 'Business Intelligence', 'Market Research']

  const articles = [
    {
      id: 1,
      title: "Predicting Real Estate Prices: A Machine Learning Approach",
      excerpt: "Deep dive into how machine learning algorithms can accurately predict property values using market data, location factors, and economic indicators.",
      category: "Machine Learning",
      readTime: "8 min",
      date: "2024-01-15",
      featured: true,
      image: "/articles/price_distribution.png",
      tags: ["Python", "ML", "Real Estate", "Prediction"],
      icon: Brain,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 2,
      title: "E-commerce Analytics: Understanding Customer Behavior",
      excerpt: "Comprehensive analysis of customer journey, purchase patterns, and retention strategies using real e-commerce data from Brazilian marketplace.",
      category: "Business Intelligence",
      readTime: "12 min",
      date: "2024-01-08",
      featured: true,
      image: "/articles/olist/dashboard_overview.png",
      tags: ["E-commerce", "Customer Analytics", "Tableau", "SQL"],
      icon: BarChart3,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Statistical Methods for Market Research",
      excerpt: "Essential statistical techniques for conducting effective market research, from survey design to hypothesis testing and result interpretation.",
      category: "Market Research",
      readTime: "10 min",
      date: "2024-01-02",
      featured: false,
      image: "/articles/correlation_matrix.png",
      tags: ["Statistics", "Market Research", "R", "Survey Analysis"],
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      title: "Building Interactive Dashboards with Tableau",
      excerpt: "Step-by-step guide to creating compelling data visualizations and interactive dashboards that drive business decisions.",
      category: "Data Analysis",
      readTime: "15 min",
      date: "2023-12-28",
      featured: false,
      image: "/articles/olist/geo.png",
      tags: ["Tableau", "Visualization", "Dashboard", "BI"],
      icon: BarChart3,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "SQL for Data Analysis: Advanced Techniques",
      excerpt: "Master advanced SQL techniques for data analysis including window functions, CTEs, and performance optimization strategies.",
      category: "Data Analysis",
      readTime: "18 min",
      date: "2023-12-20",
      featured: false,
      image: "/articles/median_price_per_m2.png",
      tags: ["SQL", "Database", "Query Optimization", "Data Analysis"],
      icon: Database,
      color: "from-teal-500 to-green-600"
    },
    {
      id: 6,
      title: "Customer Segmentation Using Clustering Algorithms",
      excerpt: "Practical guide to customer segmentation using K-means and hierarchical clustering with real business applications.",
      category: "Machine Learning",
      readTime: "14 min",
      date: "2023-12-15",
      featured: false,
      image: "/articles/area_distribution.png",
      tags: ["Clustering", "Segmentation", "Python", "Unsupervised Learning"],
      icon: Brain,
      color: "from-pink-500 to-rose-600"
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter(article => article.featured)

  return (
    <section id="blog" className="section-padding">
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
                  Blog & Insights
                </span>
                <div className="w-12 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                Latest{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">
                  Articles
                </span>
              </h2>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed mt-6">
                Sharing insights, tutorials, and best practices in data analysis, 
                machine learning, and business intelligence.
              </p>
            </motion.div>
          </div>

          {/* Featured Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                className="group bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl border border-neutral-100 dark:border-neutral-700 overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${article.color} flex items-center justify-center shadow-lg`}>
                      <article.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-neutral-800 dark:text-neutral-200 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} read</span>
                    </div>
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs">
                      {article.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <motion.a
                    href={`#article-${article.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group-hover:gap-3 transition-all duration-200"
                    whileHover={{ x: 5 }}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Search and Filters */}
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
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
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
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 w-64"
                />
              </div>
            </div>

            {/* All Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="group bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl border border-neutral-100 dark:border-neutral-700 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -3 }}
                >
                  {/* Mini Article Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${article.color} flex items-center justify-center`}>
                        <article.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>

                    <div>
                      <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Mini Tags */}
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded text-xs flex items-center gap-1"
                        >
                          <Tag className="w-2 h-2" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <motion.a
                      href={`#article-${article.id}`}
                      className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                      whileHover={{ x: 2 }}
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </motion.a>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800 text-center"
          >
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="w-16 h-16 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full mx-auto flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                Stay Updated
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Get the latest insights and tutorials delivered directly to your inbox. 
                No spam, just valuable content for data professionals.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
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
        </motion.div>
      </div>
    </section>
  )
}

export default Blog