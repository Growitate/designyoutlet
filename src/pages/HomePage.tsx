import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, CircleArrowOutUpRight, Plus } from 'lucide-react'
import { projectsData, servicesPillars, type Project } from '../data/content'
import { ProjectModal } from '../components/ProjectModal'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem, ScrollDraftingRule } from '../components/ScrollReveal'
import type { PageRoute } from '../components/Navigation'

interface HomePageProps {
  onNavigate: (page: PageRoute) => void
  introVisible: boolean
}

export function HomePage({ onNavigate, introVisible }: HomePageProps) {
  const heroRef = useRef<HTMLElement>(null)
  const [activeService, setActiveService] = useState(0)
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const pointerX = useMotionValue(0)
  const pointerSpringX = useSpring(pointerX, { stiffness: 90, damping: 20, mass: 0.7 })

  const heroEditorialX = useTransform(pointerSpringX, (cursorX) => Number(cursorX) * 0.35)

  const handleHeroPointer = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 64)
  }

  const selectedProjects = projectsData.slice(0, 4)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="home-view">
      {/* Hero Section */}
      <section
        className={`hero ${introVisible ? 'hero-intro-active' : ''}`}
        id="top"
        ref={heroRef}
        onPointerMove={handleHeroPointer}
        onPointerLeave={() => pointerX.set(0)}
      >
        <div className="hero-noise" />
        <div className="hero-grid" />
        <motion.div
          className="hero-editorial"
          style={{ x: heroEditorialX }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25 }}
        >
          <img src="/images/image-1.webp" alt="Designy Outlet editorial composition" />
        </motion.div>

        <div className="hero-graphics" aria-hidden="true">
          <span className="hero-cross cross-a" />
          <span className="hero-cross cross-b" />
          <span className="hero-particle particle-a" />
          <span className="hero-particle particle-b" />
          <span className="hero-particle particle-c" />
          <motion.div
            className="hero-sweep sweep-a"
            animate={{ rotate: [18, 27, 18], x: [0, 18, 0], opacity: [0.28, 0.62, 0.28] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="hero-sweep sweep-b"
            animate={{ rotate: [-24, -16, -24], x: [0, -24, 0], opacity: [0.18, 0.42, 0.18] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          />
          <motion.div
            className="hero-scanline"
            animate={{ y: ['-20vh', '120vh'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 1 }}
          />
        </div>

        <motion.div className="hero-copy">
          <ScrollReveal className="eyebrow">
            <span className="eyebrow-dot" /> Designy Outlet / Graphic design studio & motion lab
          </ScrollReveal>
          <h1>
            <span className="display-line">Brands that don’t</span>
            <span className="display-line display-indent">
              <em>blend in.</em>
              <span className="display-cursor">_</span>
            </span>
          </h1>
          <div className="hero-bottom">
            <ScrollReveal delay={0.15} className="hero-statement">
              We build identities, 3D big reels, and high-converting ad campaigns<br />
              for brands with something to say.
            </ScrollReveal>
            <ScrollReveal delay={0.25} className="scroll-cue">
              <button
                type="button"
                className="scroll-cue-btn"
                onClick={() => scrollTo('manifesto')}
              >
                <span>Explore our approach</span>
                <ArrowDownRight size={18} />
              </button>
            </ScrollReveal>
          </div>
        </motion.div>

        <div className="hero-microcopy">Scroll / 001 — 006</div>
      </section>

      {/* Marquee Ticker */}
      <section className="ticker-section" aria-label="Designy Outlet statement">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="ticker-item" key={index}>
              Graphic design with a point of view <span>✳</span> Brands that don’t blend in <span>✳</span>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto / Point of View */}
      <section className="manifesto section-paper" id="manifesto">
        <ScrollReveal variant="fade" className="manifesto-aside">
          <span>( 01 )</span>
          <span>Our point of view</span>
        </ScrollReveal>
        <div className="manifesto-content">
          <ScrollReveal delay={0.05}>
            <p className="kicker">Creativity with a strategy</p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <h2>
              Make your brand<br />
              <span>impossible to <i>ignore.</i></span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="manifesto-support">
            <p>
              Good design is more than being louder. We turn ideas into clear, memorable visual systems that people recognise and remember.
            </p>
            <button
              className="text-link"
              onClick={() => onNavigate('about')}
            >
              Our studio story <ArrowUpRight size={15} />
            </button>
          </ScrollReveal>
        </div>
        <div className="manifesto-orbit" aria-hidden="true">
          <div />
          <div />
          <div />
        </div>
      </section>

      {/* Selected Work Preview Section (Linking to 8-case Portfolio) */}
      <section className="work-section section-ink" id="work">
        <div className="section-head">
          <ScrollReveal>
            <p className="kicker light">What we make / 8 Flagship Cases</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2>
              Work that<br />
              <span>shapes culture.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16} className="section-intro light-text">
            <p>
              From cinematic 3D big reels to full branding architectures, experimental brutalist posters, and performance ads.
            </p>
          </ScrollReveal>
        </div>

        <ScrollStagger className="project-stack" staggerDelay={0.12}>
          {selectedProjects.map((project, index) => (
            <ScrollStaggerItem key={project.id}>
              <motion.article
                className={`project-card project-${project.color}`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActiveModalProject(project)}
              >
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.client}</span>
                  <span>{project.tag}</span>
                </div>
                <div className="project-title">
                  <h3>{project.title}</h3>
                  <ArrowUpRight size={24} />
                </div>
                <div className="project-art">
                  <motion.img
                    className="project-photo"
                    src={project.image}
                    alt={project.title}
                    initial={{ scale: 1.05, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="project-coordinate">
                    {String(index + 4).padStart(2, '0')}° 41’ 12” N
                  </div>
                </div>
                <div className="project-footer">
                  <span>Explore case study & deliverables</span>
                  <span className="project-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </motion.article>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>

        <div className="work-foot">
          <ScrollReveal delay={0.1}>
            <button
              type="button"
              className="view-all-work-btn"
              onClick={() => onNavigate('work')}
            >
              <span>Explore All 8 Portfolio Works (Reels, Branding, Artwork, Ads)</span>
              <CircleArrowOutUpRight size={16} />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview Section (Linking to Services page) */}
      <section className="services-section section-paper" id="services">
        <div className="section-head services-head">
          <ScrollReveal>
            <p className="kicker">What we do</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2>
              One eye.<br />
              <span>Many formats.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16} className="section-intro">
            <p>
              Identity, typography, 3D big reels, and performance ad creative working as one visual language.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="up" delay={0.1} className="services-grid">
          <div className="service-list">
            {servicesPillars.slice(0, 4).map((pillar, index) => (
              <button
                className={`service-row ${activeService === index ? 'is-active' : ''}`}
                key={pillar.number}
                onClick={() => setActiveService(index)}
              >
                <span className="service-number">{pillar.number}</span>
                <span className="service-title">{pillar.title}</span>
                <span className="service-description">{pillar.tagline}</span>
                <span className="service-plus">
                  {activeService === index ? <ArrowUpRight size={17} /> : <Plus size={17} />}
                </span>
              </button>
            ))}
          </div>

          <div className="service-stage" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.div
                className="home-service-visual"
                key={activeService}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={servicesPillars[activeService].image}
                  alt={servicesPillars[activeService].title}
                  className="home-service-img"
                />
                <div className="home-service-overlay">
                  <div className="hso-badge">
                    <span className="hso-dot" />
                    <span>{servicesPillars[activeService].badgeText}</span>
                  </div>
                  <div className="hso-info">
                    <strong>{servicesPillars[activeService].sampleProject}</strong>
                    <span>{servicesPillars[activeService].visualMetric}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="stage-caption">DISCIPLINE 0{activeService + 1} // {servicesPillars[activeService].shortTitle.toUpperCase()}</div>
          </div>
        </ScrollReveal>

        <div className="services-foot-link">
          <ScrollReveal delay={0.15}>
            <button
              type="button"
              className="explore-disciplines-btn"
              onClick={() => onNavigate('services')}
            >
              <span>View All 6 Services & Deliverables Matrix</span>
              <ArrowUpRight size={15} />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Studio / About Teaser */}
      <section className="studio-section" id="studio">
        <div className="studio-object" aria-hidden="true">
          <motion.img
            className="studio-photo"
            src="/images/image-3.webp"
            alt="Designy Outlet creative studio process"
            initial={{ opacity: 0, rotate: -3, y: 30 }}
            whileInView={{ opacity: 1, rotate: -2, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="studio-content">
          <ScrollReveal>
            <p className="kicker light">The studio / India + everywhere</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2>
              Built for brands<br />
              <span>ready to be seen.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="studio-copy">
              Designy Outlet began with a graphic designer bringing ideas to life one project at a time. Today, we shape identities, posters, 3D big reels, and high-impact ad campaigns with a belief that great design should be felt before it is explained.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <button
              className="outline-button"
              onClick={() => onNavigate('about')}
            >
              Read full studio story <ArrowUpRight size={15} />
            </button>
          </ScrollReveal>
        </div>
        <div className="studio-index">02 / 06</div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquire={() => {
          setActiveModalProject(null)
          onNavigate('contact')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      />
    </div>
  )
}
