import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ArticlesSection from './components/ArticlesSection'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

/**
 * Раньше здесь были react-router (на одностраничнике без маршрутов), искусственный
 * двухсекундный прелоадер перед первой отрисовкой, блок отзывов с выдуманными людьми
 * и Blog, дублировавший статьи. Всё удалено: маршрутизатор не нужен, прелоадер только
 * задерживал контент, а выдуманные отзывы — репутационный риск.
 *
 * Порядок секций: работа идёт сразу после первого экрана, потому что именно её
 * пришёл смотреть человек по ссылке из резюме или LinkedIn.
 */
export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-900"
      >
        Skip to content
      </a>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <ArticlesSection />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
