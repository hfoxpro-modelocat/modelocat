import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HomePage from './HomePage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import PartnersPage from './pages/PartnersPage'
import BlogPage from './pages/BlogPage'
import BlogArticlePage from './pages/BlogArticlePage'
import './App.css'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre-nos', label: 'Sobre Nós' },
    { path: '/modelo-cat', label: 'Modelo CAT™' },
    { path: '/programas', label: 'Programas' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/parceiros', label: 'Parceiros' },
    { path: '/blog', label: 'Blog' },
    { path: '/impacto', label: 'Impacto' },
    { path: '/contacto', label: 'Contacto' }
  ]

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0E0E10]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#E2B94B]">
            Modelo CAT™
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              
              // Para links internos da homepage
              if (item.path === '/' || ['modelo-cat', 'programas', 'impacto', 'contacto'].some(s => item.path.includes(s))) {
                if (location.pathname === '/') {
                  return (
                    <button
                      key={item.path}
                      onClick={() => scrollToSection(item.path.replace('/', '') || 'home')}
                      className={`text-sm transition-colors ${
                        isActive ? 'text-[#E2B94B]' : 'text-white hover:text-[#E2B94B]'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                }
                return (
                  <Link
                    key={item.path}
                    to="/"
                    className="text-sm text-white hover:text-[#E2B94B] transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              }
              
              // Para páginas separadas
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm transition-colors ${
                    isActive ? 'text-[#E2B94B]' : 'text-white hover:text-[#E2B94B]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              to="/contacto"
              className="px-6 py-2 bg-[#E2B94B] text-black rounded-lg hover:bg-[#E2B94B]/80 transition-colors font-semibold"
            >
              Agendar Diagnóstico
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-white hover:text-[#E2B94B] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#0E0E10]">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/sobre-nos" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
          <Route path="/parceiros" element={<PageTransition><PartnersPage /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogArticlePage /></PageTransition>} />
          <Route path="*" element={<PageTransition><HomePage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  )
}

