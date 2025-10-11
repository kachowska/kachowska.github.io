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
    <section id="skills" className="container section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-sage-300" />
            <span className="text-xs uppercase tracking-[0.2em] text-sage-400 font-light">
              Expertise
            </span>
            <div className="h-px w-12 bg-sage-300" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-sage-500">Skills</h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {skills.map(s => (
            <span 
              key={s} 
              className="px-4 py-2 border border-sage-200 text-sage-500 text-sm font-light hover:border-sage-300 transition-colors"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-serif text-2xl font-light text-sage-500 mb-6">Languages</h3>
          <ul className="space-y-2 text-sage-400 font-light">
            <li>English — B2</li>
            <li>Polish — C1</li>
            <li>Russian — Native</li>
            <li>Belarusian — Native</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills