import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeProvider from './components/ThemeProvider'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <Preloader key="preloader" />
            ) : (
              <motion.div
                key="main-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={
                      <>
                        <Hero />
                        <About />
                        <Skills />
                        <Experience />
                        <Projects />
                        <Testimonials />
                        <Blog />
                        <Contact />
                      </>
                    } />
                  </Routes>
                </main>
                <Footer />
                <ScrollToTop />
              </motion.div>
            )}
          </AnimatePresence>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
                border: '1px solid var(--toast-border)',
              },
            }}
          />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App