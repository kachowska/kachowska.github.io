import { motion } from 'framer-motion'
import { Code, Zap } from 'lucide-react'

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-900"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Animated Logo */}
        <motion.div
          className="relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary-500 via-secondary-400 to-accent-500 flex items-center justify-center shadow-2xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Code className="w-10 h-10 text-white" />
          </motion.div>
          
          {/* Orbiting Elements */}
          <motion.div
            className="absolute -inset-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative w-full h-full">
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-secondary-400 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-300 rounded-full"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            Katsiaryna Pukhouskaya
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" />
            Loading portfolio...
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Preloader