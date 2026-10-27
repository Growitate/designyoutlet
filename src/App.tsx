import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'

import { Navigation, type PageRoute } from './components/Navigation'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { WorkPage } from './pages/WorkPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PageTransition } from './components/PageTransition'

function BrandIntro({ onDismiss }: { onDismiss: () => void }) {
  return (
    <motion.div
      className="brand-intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onClick={onDismiss}
    >
      <div className="brand-intro-red" />

      <motion.div
        className="intro-paper"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 45, rotate: -3, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="intro-paper-grain" />

        <svg className="intro-paper-svg" viewBox="0 0 900 520" fill="none">
          <defs>
            <filter id="intro-paper-noise">
              <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <clipPath id="intro-write-clip">
              <motion.rect
                x="88"
                y="140"
                height="190"
                initial={{ width: 0 }}
                animate={{ width: 730 }}
                transition={{ duration: 2.3, delay: 0.6, ease: 'easeInOut' }}
              />
            </clipPath>
          </defs>

          <rect width="900" height="520" filter="url(#intro-paper-noise)" opacity=".05" />

          {/* Architectural Drafting Grid */}
          <path className="intro-paper-grid" d="M70 92H830 M70 126H830 M70 160H830 M70 194H830 M70 228H830 M70 262H830 M70 296H830 M70 330H830 M70 364H830 M70 398H830 M70 432H830" />
          <path className="intro-paper-grid" d="M95 70V450 M129 70V450 M163 70V450 M197 70V450 M231 70V450 M265 70V450 M299 70V450 M333 70V450 M367 70V450 M401 70V450 M435 70V450 M469 70V450 M503 70V450 M537 70V450 M571 70V450 M605 70V450 M639 70V450 M673 70V450 M707 70V450 M741 70V450 M775 70V450" />

          {/* Drafting Baseline Guide */}
          <line x1="88" y1="284" x2="800" y2="284" stroke="rgba(227, 0, 17, 0.18)" strokeDasharray="4 4" />

          {/* Brand Handwriting Text (Progressive Clip Reveal) */}
          <g clipPath="url(#intro-write-clip)">
            <text className="intro-brand-writing" x="98" y="274">
              designy outlet.
            </text>
          </g>

          {/* Dynamic Underline Sweep */}
          <motion.path
            className="intro-underline"
            d="M 98 308 C 280 328, 540 320, 804 298"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.85, delay: 2.95, ease: 'easeInOut' }}
          />

          {/* Corner Crop Marks */}
          <path className="intro-paper-crop" d="M58 70H88 M73 55V85 M812 435H842 M827 420V450" />

          {/* Precision Vector Stylus */}
          <motion.g
            initial={{ x: 60, y: 220, opacity: 0, rotate: -26 }}
            animate={{
              x: [60, 98, 175, 255, 345, 435, 520, 605, 690, 755, 765, 98, 450, 804, 850],
              y: [220, 264, 252, 268, 250, 266, 252, 267, 254, 266, 260, 308, 324, 298, 240],
              rotate: [-26, -26, -23, -27, -22, -26, -23, -27, -22, -25, -20, -30, -25, -20, -12],
              opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 4.2,
              delay: 0.15,
              times: [0, 0.11, 0.18, 0.26, 0.34, 0.43, 0.51, 0.6, 0.69, 0.76, 0.8, 0.82, 0.89, 0.95, 1],
              ease: 'easeInOut',
            }}
          >
            <ellipse cx="6" cy="4" rx="12" ry="3.5" fill="rgba(8,8,8,0.24)" filter="blur(1.5px)" />
            <polygon points="0,0 -3,-9 3,-9" fill="#181818" />
            <polygon points="-3,-9 3,-9 6.5,-26 -6.5,-26" fill="#dfbe98" />
            <path d="M-3,-9 Q0,-13 3,-9" stroke="#b08b5f" strokeWidth="0.75" fill="none" />
            <rect x="-6.5" y="-124" width="13" height="98" fill="#e30011" rx="1" />
            <rect x="-2" y="-124" width="4" height="98" fill="#ff4d5a" />
            <rect x="-6.5" y="-124" width="3" height="98" fill="#9e000c" />
            <rect x="-6.5" y="-138" width="13" height="14" fill="#cba24d" rx="1" />
            <line x1="-6.5" y1="-131" x2="6.5" y2="-131" stroke="#876620" strokeWidth="0.9" />
            <path d="M-6.5,-138 Q-6.5,-152 0,-152 Q6.5,-152 6.5,-138 Z" fill="#eeeae3" />
          </motion.g>
        </svg>

        <div className="intro-paper-label">
          <span>DESIGNY OUTLET / 001</span>
          <span>GRAPHIC DESIGN STUDIO // EST. 2024</span>
        </div>
      </motion.div>

      <motion.div
        className="intro-kicker"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <span>DRAWING A POINT OF VIEW</span>
        <i />
      </motion.div>


    </motion.div>
  )
}

function getInitialPageFromUrl(): PageRoute {
  if (typeof window === 'undefined') return 'home'
  const path = window.location.pathname.toLowerCase()
  if (path.includes('services')) return 'services'
  if (path.includes('work') || path.includes('portfolio')) return 'work'
  if (path.includes('about')) return 'about'
  if (path.includes('contact')) return 'contact'
  return 'home'
}

function getPageTitle(page: PageRoute): string {
  switch (page) {
    case 'services':
      return 'Services & Deliverables — Designy Outlet'
    case 'work':
      return 'Work & Portfolio (8 Cases) — Designy Outlet'
    case 'about':
      return 'About Us & Studio Manifesto — Designy Outlet'
    case 'contact':
      return 'Contact & Inquiries — Designy Outlet'
    default:
      return 'Designy Outlet — Brands that don’t blend in.'
  }
}

function getPagePath(page: PageRoute): string {
  switch (page) {
    case 'services': return '/services'
    case 'work': return '/work'
    case 'about': return '/about'
    case 'contact': return '/contact'
    default: return '/'
  }
}

export function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialPageFromUrl)
  const [menuOpen, setMenuOpen] = useState(false)
  const [introVisible, setIntroVisible] = useState(true)
  const [introKey, setIntroKey] = useState(0)
  const [preselectedService, setPreselectedService] = useState('')

  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 })

  // Synchronize browser history and document title
  const navigateTo = (page: PageRoute, pushState = true) => {
    if (page === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setCurrentPage(page)
    document.title = getPageTitle(page)
    if (pushState && typeof window !== 'undefined') {
      window.history.pushState({ page }, '', getPagePath(page))
    }
  }

  // Cleanly reset scroll position to top when switching pages
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [currentPage])

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (e.state && e.state.page) {
        setCurrentPage(e.state.page)
      } else {
        setCurrentPage(getInitialPageFromUrl())
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIntroVisible(false)
    }
    window.addEventListener('keydown', handleKeyDown)

    // Complete intro after 4.6s
    const timer = window.setTimeout(() => setIntroVisible(false), 4600)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.clearTimeout(timer)
    }
  }, [introVisible, introKey])

  return (
    <div className="site-shell">
      {/* Intro Animation */}
      <AnimatePresence mode="wait">
        {introVisible && <BrandIntro key={introKey} onDismiss={() => setIntroVisible(false)} />}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div className="progress-line" style={{ scaleX: smoothProgress }} />

      {/* Global Navigation */}
      <Navigation
        currentPage={currentPage}
        onNavigate={navigateTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Active Page View with Architectural Shutter Curtain Transition */}
      <main>
        <AnimatePresence mode="wait">
          <PageTransition key={currentPage} currentPage={currentPage}>
            {currentPage === 'home' && (
              <HomePage
                onNavigate={navigateTo}
                introVisible={introVisible}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={navigateTo}
                onPreselectService={(svc) => setPreselectedService(svc)}
              />
            )}

            {currentPage === 'work' && (
              <WorkPage
                onNavigate={navigateTo}
                onSelectProjectForInquiry={(title) => setPreselectedService(`Inquiry for project: ${title}`)}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={navigateTo}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                initialService={preselectedService}
              />
            )}
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
      />
    </div>
  )
}

export default App
