import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Play, Eye, Sparkles, Filter } from 'lucide-react'
import { projectsData, type Project } from '../data/content'
import { ProjectModal } from '../components/ProjectModal'
import { BigReelPlayer } from '../components/BigReelPlayer'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal'
import type { PageRoute } from '../components/Navigation'

interface WorkPageProps {
  onNavigate: (page: PageRoute) => void
  onSelectProjectForInquiry?: (title: string) => void
}

type FilterCategory = 'all' | 'reel' | 'branding' | 'artwork' | 'ads'

export function WorkPage({ onNavigate, onSelectProjectForInquiry }: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all')
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const reels = projectsData.filter(p => p.category === 'reel')
  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory)

  const handleInquireFromModal = (projectTitle: string) => {
    if (onSelectProjectForInquiry) {
      onSelectProjectForInquiry(projectTitle)
    }
    onNavigate('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="page-view work-page">
      {/* Page Hero */}
      <section className="page-hero section-ink">
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="page-hero-container">
          <ScrollReveal delay={0.04} className="eyebrow">
            <span className="eyebrow-dot" />
            <span>( 03 ) / Selected Works & Case Studies</span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="page-title">
              <span className="display-line">Work that</span>
              <span className="display-line display-indent">
                <em>shapes culture.</em>
              </span>
            </h1>
          </ScrollReveal>

          <div className="page-hero-meta">
            <ScrollReveal delay={0.16}>
              <p className="page-subtitle">
                8 flagship projects spanning 2 Big Cinematic Reels, 2 Brand Identity Systems, 2 Brutalist Artworks, and 2 High-Performance Ad Campaigns. Every project built with precision, energy, and measurable commercial lift.
              </p>
            </ScrollReveal>

            <ScrollStagger className="portfolio-stats-bar" staggerDelay={0.06} delay={0.2}>
              <ScrollStaggerItem className="p-stat">
                <strong>08</strong>
                <span>Flagship Cases</span>
              </ScrollStaggerItem>
              <ScrollStaggerItem className="p-stat">
                <strong>02</strong>
                <span>Big Reels</span>
              </ScrollStaggerItem>
              <ScrollStaggerItem className="p-stat">
                <strong>02</strong>
                <span>Branding</span>
              </ScrollStaggerItem>
              <ScrollStaggerItem className="p-stat">
                <strong>02</strong>
                <span>Artwork</span>
              </ScrollStaggerItem>
              <ScrollStaggerItem className="p-stat">
                <strong>02</strong>
                <span>Ad Campaigns</span>
              </ScrollStaggerItem>
            </ScrollStagger>
          </div>
        </div>
      </section>

      {/* Featured Big Reels Theater Section */}
      <section className="reels-theater-section section-ink">
        <div className="section-head">
          <ScrollReveal>
            <div className="kicker light">
              <Sparkles size={14} />
              <span>Spotlight Feature // 2 Big Reels</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2>
              Motion in full<br />
              <span><i>velocity.</i></span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16} className="section-intro light-text">
            <p>
              Two high-energy, sound-synced video reel showcases. Hit play to test playback, toggle between widescreen (16:9) and vertical social (9:16), and inspect telemetry scenes.
            </p>
          </ScrollReveal>
        </div>

        <ScrollStagger className="reels-grid" staggerDelay={0.15}>
          {reels.map((reel) => (
            <ScrollStaggerItem key={reel.id} className="reel-showcase-wrapper">
              <BigReelPlayer project={reel} />
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </section>

      {/* Filter Tabs Bar */}
      <section className="portfolio-browser-section section-paper">
        <div className="browser-header">
          <ScrollReveal className="browser-title-wrap">
            <div className="kicker">
              <Filter size={14} />
              <span>Archive Filter</span>
            </div>
            <h2>The Complete 8 Project Archive</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1} variant="fade" className="filter-pill-tabs">
            <button
              type="button"
              className={`filter-tab ${selectedCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Works (8)
            </button>
            <button
              type="button"
              className={`filter-tab ${selectedCategory === 'reel' ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory('reel')}
            >
              Big Reels (2)
            </button>
            <button
              type="button"
              className={`filter-tab ${selectedCategory === 'branding' ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory('branding')}
            >
              Branding (2)
            </button>
            <button
              type="button"
              className={`filter-tab ${selectedCategory === 'artwork' ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory('artwork')}
            >
              Artwork (2)
            </button>
            <button
              type="button"
              className={`filter-tab ${selectedCategory === 'ads' ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory('ads')}
            >
              Ads (2)
            </button>
          </ScrollReveal>
        </div>

        {/* 8 Projects Grid */}
        <motion.div layout className="projects-editorial-grid">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`project-editorial-card card-color-${project.color}`}
                onClick={() => setActiveModalProject(project)}
              >
                {/* Top Meta Bar */}
                <div className="p-card-top">
                  <div className="p-card-index">
                    <span className="p-num">{project.number}</span>
                    <span className="p-cat-badge">{project.categoryLabel}</span>
                  </div>
                  <span className="p-client">{project.client}</span>
                  <span className="p-year">{project.year}</span>
                </div>

                {/* Imagery Stage */}
                <div className="p-card-media-box">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="p-card-image"
                    loading="lazy"
                  />
                  <div className="p-card-hover-overlay">
                    <div className="overlay-badge">
                      {project.category === 'reel' ? (
                        <>
                          <Play size={16} fill="currentColor" /> Play Reel
                        </>
                      ) : (
                        <>
                          <Eye size={16} /> Inspect Case
                        </>
                      )}
                    </div>
                  </div>
                  {project.metrics && (
                    <div className="p-card-metric-tag">
                      {project.metrics}
                    </div>
                  )}
                </div>

                {/* Bottom Content Bar */}
                <div className="p-card-bottom">
                  <div className="p-title-wrap">
                    <h3>{project.title}</h3>
                    <p className="p-tag-line">{project.tag}</p>
                  </div>

                  <div className="p-card-cta">
                    <span>View Case</span>
                    <div className="p-cta-circle">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>

                <div className="p-card-deliv-row">
                  {project.deliverables.slice(0, 3).map((d, dIdx) => (
                    <span key={dIdx} className="deliv-tag">{d}</span>
                  ))}
                  {project.deliverables.length > 3 && (
                    <span className="deliv-tag-more">+{project.deliverables.length - 3}</span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4 Client Testimonials */}
      <TestimonialsSection theme="light" />

      {/* Bottom CTA Banner */}
      <section className="cta-banner section-coral">
        <ScrollReveal className="cta-banner-content">
          <div className="kicker">
            <span>Ready to create your case study?</span>
          </div>
          <h2>
            Let’s build something<br />
            <i>impossible to ignore.</i>
          </h2>
          <p>
            Whether you need a high-octane 3D Big Reel, a complete brand identity system, or high-converting ads, we bring the craft.
          </p>
          <button
            className="cta-huge-btn dark-variant"
            onClick={() => onNavigate('contact')}
          >
            <span>Start a project</span>
            <ArrowUpRight size={18} />
          </button>
        </ScrollReveal>
      </section>

      {/* Modal for detail view */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquire={handleInquireFromModal}
      />
    </div>
  )
}
