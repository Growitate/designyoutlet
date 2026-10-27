import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, Plus, Calculator, Sparkles, Send } from 'lucide-react'
import { servicesPillars } from '../data/content'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal'
import { PinnedDisciplinesDeck } from '../components/PinnedDisciplinesDeck'
import type { PageRoute } from '../components/Navigation'

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void
  onPreselectService?: (serviceName: string) => void
}

export function ServicesPage({ onNavigate, onPreselectService }: ServicesPageProps) {
  const [activePillar, setActivePillar] = useState(0)

  // Interactive Project Scope Estimator state
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Cinematic Big Reels & 3D Motion',
    'Brand Identity & Visual Systems'
  ])

  const toggleServiceInScope = (title: string) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter(s => s !== title))
    } else {
      setSelectedServices([...selectedServices, title])
    }
  }

  const handleBookScope = () => {
    if (onPreselectService && selectedServices.length > 0) {
      onPreselectService(selectedServices.join(', '))
    }
    onNavigate('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="page-view services-page">
      {/* Page Hero */}
      <section className="page-hero section-ink">
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="page-hero-container">
          <ScrollReveal delay={0.04} className="eyebrow">
            <span className="eyebrow-dot" />
            <span>( 02 ) / Capabilities & Disciplines</span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="page-title">
              <span className="display-line">Services that</span>
              <span className="display-line display-indent">
                <em>command attention.</em>
              </span>
            </h1>
          </ScrollReveal>

          <div className="page-hero-meta">
            <ScrollReveal delay={0.16}>
              <p className="page-subtitle">
                We partner with ambitious founders, cultural brands, and high-growth companies. From brand identity systems to cinematic 3D reels and high-converting ad creative, every detail is engineered to win.
              </p>
            </ScrollReveal>

            <ScrollStagger className="hero-stat-badges" staggerDelay={0.08} delay={0.2}>
              <ScrollStaggerItem className="stat-pill">
                <strong>06</strong>
                <span>Core Capabilities</span>
              </ScrollStaggerItem>
              <ScrollStaggerItem className="stat-pill">
                <strong>100%</strong>
                <span>Custom Built</span>
              </ScrollStaggerItem>
              <ScrollStaggerItem className="stat-pill">
                <strong>3-6 Wks</strong>
                <span>Average Sprint</span>
              </ScrollStaggerItem>
              <ScrollStaggerItem className="stat-pill">
                <strong>Global</strong>
                <span>Remote & On-Site</span>
              </ScrollStaggerItem>
            </ScrollStagger>
          </div>
        </div>
      </section>

      {/* Ticker banner */}
      <section className="ticker-section" aria-label="Capabilities ticker">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="ticker-item" key={i}>
              BRAND IDENTITY <span>✳</span> CINEMATIC BIG REELS <span>✳</span> PERFORMANCE ADS <span>✳</span> BRUTALIST ARTWORK <span>✳</span> INTERACTIVE WEB <span>✳</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pinned Frozen Deck: The Six Disciplines */}
      <PinnedDisciplinesDeck
        pillars={servicesPillars}
        selectedServices={selectedServices}
        onToggleScope={toggleServiceInScope}
        activePillar={activePillar}
        setActivePillar={setActivePillar}
      />

      {/* Interactive Scope & Package Builder */}
      <section className="section-coral scope-calculator-section">
        <div className="scope-calc-container">
          <div className="scope-header">
            <ScrollReveal>
              <div className="kicker">
                <Calculator size={14} />
                <span>Interactive Project Planner</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2>
                Build your customized<br />
                <i>agency scope.</i>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p>
                Select the capabilities your brand needs right now. We’ll generate a recommended sprint timeline and transfer your scope directly to our booking calendar.
              </p>
            </ScrollReveal>
          </div>

          <ScrollStagger className="scope-options-grid" staggerDelay={0.06}>
            {servicesPillars.map((p) => {
              const isSelected = selectedServices.includes(p.title)
              return (
                <ScrollStaggerItem key={p.number}>
                  <button
                    type="button"
                    className={`scope-pill-btn ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => toggleServiceInScope(p.title)}
                  >
                    <span className="scope-check">{isSelected ? <Check size={14} /> : <Plus size={14} />}</span>
                    <div className="scope-btn-content">
                      <div className="scope-btn-meta">
                        <span className="scope-btn-num">// {p.number}</span>
                        <span className="scope-btn-time">{p.timeline}</span>
                      </div>
                      <span className="scope-btn-title">{p.title}</span>
                    </div>
                  </button>
                </ScrollStaggerItem>
              )
            })}
          </ScrollStagger>

          <ScrollReveal delay={0.15}>
            <div className="scope-summary-card">
              <div className="summary-left">
                <span className="summary-label">Selected Scope ({selectedServices.length} of {servicesPillars.length} Disciplines):</span>
                <div className="summary-tags">
                  {selectedServices.length > 0 ? (
                    selectedServices.map((title, i) => (
                      <span key={i} className="sum-tag">{title}</span>
                    ))
                  ) : (
                    <span className="sum-tag-empty">No services selected yet — click above to add</span>
                  )}
                </div>
              </div>

              <div className="summary-right">
                <button
                  type="button"
                  className="submit-scope-btn"
                  disabled={selectedServices.length === 0}
                  onClick={handleBookScope}
                >
                  <span>Request Scope Proposal</span>
                  <Send size={15} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4-Stage Studio Process */}
      <section className="section-paper studio-process-section">
        <div className="section-head">
          <ScrollReveal>
            <div className="kicker">
              <span>( 02.2 )</span>
              <span>How We Build</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2>
              Four phases.<br />
              <span><i>Zero guesswork.</i></span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16} className="section-intro">
            <p>
              A high-velocity creative methodology taking raw vision into category-defining reality.
            </p>
          </ScrollReveal>
        </div>

        <ScrollStagger className="process-cards-grid" staggerDelay={0.1}>
          <ScrollStaggerItem className="process-card">
            <div className="process-card-top">
              <span className="process-step">Phase 01</span>
              <span className="process-phase-badge">Strategic Baseline</span>
            </div>
            <h3>Interrogate & Position</h3>
            <p>
              We uncover product tensions, competitor blindspots, and cultural angle. No design begins without strategic clarity.
            </p>
            <div className="process-output">Deliverable: Strategic Brief & Mood Universe</div>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="process-card">
            <div className="process-card-top">
              <span className="process-step">Phase 02</span>
              <span className="process-phase-badge">Visual Exploration</span>
            </div>
            <h3>Diverge & Provoke</h3>
            <p>
              We craft 3 distinctly provocative visual concepts, pushing typography, 3D motion, and color architectures.
            </p>
            <div className="process-output">Deliverable: 3 Visual Territories + Motion Boards</div>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="process-card">
            <div className="process-card-top">
              <span className="process-step">Phase 03</span>
              <span className="process-phase-badge">Production Sprint</span>
            </div>
            <h3>Craft & Engineering</h3>
            <p>
              Once a direction is locked, we build the full system: custom glyphs, debossed finishes, 3D simulations, and cuts.
            </p>
            <div className="process-output">Deliverable: Master Production Assets & 4K Exports</div>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="process-card">
            <div className="process-card-top">
              <span className="process-step">Phase 04</span>
              <span className="process-phase-badge">Global Launch</span>
            </div>
            <h3>Deploy & Dominate</h3>
            <p>
              We hand over open design systems, font licenses, social toolkits, and coordinate your launch day rollout.
            </p>
            <div className="process-output">Deliverable: Complete Guidelines & Asset Archive</div>
          </ScrollStaggerItem>
        </ScrollStagger>
      </section>


      {/* Bottom CTA Banner */}
      <section className="cta-banner section-ink">
        <ScrollReveal className="cta-banner-content">
          <div className="kicker light">
            <Sparkles size={14} />
            <span>Ready for your sprint?</span>
          </div>
          <h2>
            Let’s engineer your brand’s<br />
            <span><i>defining moment.</i></span>
          </h2>
          <p>
            Tell us about your brand, timeline, and vision. We will review your inquiry within 24 hours.
          </p>
          <button
            className="cta-huge-btn"
            onClick={() => onNavigate('contact')}
          >
            <span>Start a conversation</span>
            <ArrowUpRight size={18} />
          </button>
        </ScrollReveal>
      </section>
    </div>
  )
}
