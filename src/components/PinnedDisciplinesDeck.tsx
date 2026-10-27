import { useRef, useMemo, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { Check, Plus, ArrowDown, ChevronRight, ChevronLeft, Sparkles, Eye, Play, Radio, Volume2 } from 'lucide-react'
import type { ServicePillar } from '../data/content'

interface PinnedDisciplinesDeckProps {
  pillars: ServicePillar[]
  selectedServices: string[]
  onToggleScope: (serviceTitle: string) => void
  activePillar: number
  setActivePillar: (index: number) => void
}

interface DeckCardProps {
  pillar: ServicePillar
  index: number
  total: number
  scrollYProgress: any
  isActive: boolean
  isSelected: boolean
  onToggleScope: (title: string) => void
  onCardClick: (index: number) => void
  onPrevCard: () => void
  onNextCard: () => void
}

function DeckCardItem({
  pillar,
  index,
  total,
  scrollYProgress,
  isActive,
  isSelected,
  onToggleScope,
  onCardClick,
  onPrevCard,
  onNextCard
}: DeckCardProps) {
  const step = 0.16
  const enterStart = index === 0 ? 0 : (index - 1) * step + 0.08
  const enterEnd = index === 0 ? 0 : index * step
  const exit1Start = index * step + 0.08
  const exit1End = (index + 1) * step
  const exit2Start = (index + 1) * step + 0.08
  const exit2End = (index + 2) * step

  const { inputPoints, yOutputs, scaleOutputs, opacityOutputs } = useMemo(() => {
    if (index === 0) {
      return {
        inputPoints: [0, exit1Start, exit1End, exit2Start, exit2End],
        yOutputs: [0, 0, -12, -12, -24],
        scaleOutputs: [1, 1, 0.98, 0.98, 0.95],
        opacityOutputs: [1, 1, 0.35, 0.35, 0]
      }
    } else if (index < total - 2) {
      return {
        inputPoints: [0, enterStart, enterEnd, exit1Start, exit1End, exit2Start, exit2End],
        yOutputs: [320, 320, 0, 0, -12, -12, -24],
        scaleOutputs: [0.95, 0.95, 1, 1, 0.98, 0.98, 0.95],
        opacityOutputs: [0, 0, 1, 1, 0.35, 0.35, 0]
      }
    } else if (index === total - 2) {
      return {
        inputPoints: [0, enterStart, enterEnd, exit1Start, exit1End],
        yOutputs: [320, 320, 0, 0, -12],
        scaleOutputs: [0.95, 0.95, 1, 1, 0.98],
        opacityOutputs: [0, 0, 1, 1, 0.35]
      }
    } else {
      return {
        inputPoints: [0, enterStart, enterEnd, 1.0],
        yOutputs: [320, 320, 0, 0],
        scaleOutputs: [0.95, 0.95, 1, 1],
        opacityOutputs: [0, 0, 1, 1]
      }
    }
  }, [index, total, enterStart, enterEnd, exit1Start, exit1End, exit2Start, exit2End])

  const y = useTransform(scrollYProgress, inputPoints, yOutputs)
  const scale = useTransform(scrollYProgress, inputPoints, scaleOutputs)
  const opacity = useTransform(scrollYProgress, inputPoints, opacityOutputs)

  return (
    <motion.div
      className={`pinned-deck-card ${isActive ? 'is-active' : ''}`}
      style={{
        y,
        scale,
        opacity,
        zIndex: (index + 1) * 10,
        pointerEvents: isActive ? 'auto' : 'none'
      }}
      onClick={() => onCardClick(index)}
      layout="position"
    >
      {/* Top Meta Header */}
      <div className="card-top-row">
        <div className="card-num-badge">
          <span className="card-num-prefix">//</span>
          <span className="card-num-val">{pillar.number}</span>
          <span className="card-cat-name">{pillar.shortTitle}</span>
        </div>
        <div className="card-meta-chips">
          <span className="card-sprint-chip">
            <Sparkles size={11} className="chip-sparkle" /> {pillar.timeline}
          </span>
          <span className={`card-scope-chip ${isSelected ? 'is-selected' : ''}`}>
            {isSelected ? '✓ In Scope' : 'Spec Ready'}
          </span>
        </div>
      </div>

      {/* Main Title & Evocative Hook */}
      <div className="card-header-main">
        <h3 className="card-heading">{pillar.title}</h3>
        <p className="card-tagline">
          <em>"{pillar.tagline}"</em>
        </p>
      </div>

      {/* Visual Capability Pills (Clean, minimal tags instead of walls of text) */}
      <div className="card-pills-showcase">
        <span className="card-pills-label">Core Deliverables:</span>
        <div className="card-pills-list">
          {pillar.keyPills.map((pill, pIdx) => (
            <span key={pIdx} className="key-pill-chip">
              <span className="pill-dot" />
              <span>{pill}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action & Scope Control */}
      <div className="card-bottom-deck">
        <div className="card-audience-row">
          <span className="aud-label">Best Suited For:</span>
          <span className="aud-text">{pillar.idealFor}</span>
        </div>

        <div className="card-actions-row">
          <button
            type="button"
            className={`deck-add-scope-btn ${isSelected ? 'is-in-scope' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              onToggleScope(pillar.title)
            }}
            aria-label={isSelected ? 'Remove from scope' : 'Add to scope'}
          >
            {isSelected ? (
              <>
                <Check size={14} className="scope-btn-icon" />
                <span>Selected in Scope</span>
              </>
            ) : (
              <>
                <Plus size={14} className="scope-btn-icon" />
                <span>Add to Project Scope</span>
              </>
            )}
          </button>

          {/* Stepper Navigation to easily click without scrolling */}
          <div className="card-stepper-controls">
            <button
              type="button"
              className="stepper-arrow-btn"
              disabled={index === 0}
              onClick={(e) => {
                e.stopPropagation()
                onPrevCard()
              }}
              title="Previous Discipline"
              aria-label="Previous Discipline"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="stepper-indicators">
              {Array.from({ length: total }).map((_, i) => (
                <span
                  key={i}
                  className={`stepper-dot ${i === index ? 'is-active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    onCardClick(i)
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              className="stepper-arrow-btn"
              disabled={index === total - 1}
              onClick={(e) => {
                e.stopPropagation()
                onNextCard()
              }}
              title="Next Discipline"
              aria-label="Next Discipline"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function PinnedDisciplinesDeck({
  pillars,
  selectedServices,
  onToggleScope,
  activePillar,
  setActivePillar
}: PinnedDisciplinesDeckProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll through the pinned track (fast and responsive)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Synchronize active pillar index with scroll position
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    let current = 0
    if (latest < 0.16) current = 0
    else if (latest < 0.33) current = 1
    else if (latest < 0.50) current = 2
    else if (latest < 0.67) current = 3
    else if (latest < 0.84) current = 4
    else current = 5

    if (current !== activePillar) {
      setActivePillar(current)
    }
  })

  // Smooth click navigation to any card in the deck
  const scrollToCard = (index: number) => {
    setActivePillar(index)
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const containerTop = rect.top + scrollTop
    const containerHeight = containerRef.current.offsetHeight
    const windowHeight = window.innerHeight
    const scrollableDistance = containerHeight - windowHeight

    const targetProgresses = [0.03, 0.20, 0.38, 0.55, 0.72, 0.90]
    const targetScrollY = containerTop + targetProgresses[index] * scrollableDistance

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    })
  }

  const handlePrev = () => {
    if (activePillar > 0) {
      scrollToCard(activePillar - 1)
    }
  }

  const handleNext = () => {
    if (activePillar < pillars.length - 1) {
      scrollToCard(activePillar + 1)
    }
  }

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (activePillar < pillars.length - 1) {
          // only if container is within viewport
          const rect = containerRef.current?.getBoundingClientRect()
          if (rect && rect.top <= 100 && rect.bottom >= 100) {
            scrollToCard(activePillar + 1)
          }
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (activePillar > 0) {
          const rect = containerRef.current?.getBoundingClientRect()
          if (rect && rect.top <= 100 && rect.bottom >= 100) {
            scrollToCard(activePillar - 1)
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activePillar, pillars.length])

  const currentPillar = pillars[activePillar] || pillars[0]

  return (
    <section ref={containerRef} className="pinned-disciplines-section" id="disciplines-deck">
      {/* Sticky Viewport Container that freezes while scrolling */}
      <div className="pinned-disciplines-sticky">
        {/* Section Header with Step Counter & Quick Jump Tabs */}
        <div className="pinned-deck-header">
          <div className="header-meta-row">
            <div className="deck-kicker">
              <span className="deck-kicker-num">( 02.1 )</span>
              <span className="deck-kicker-title">The Six Disciplines</span>
              <span className="deck-freeze-indicator">
                <span className="indicator-pulse" />
                STAGE VISUALIZER
              </span>
            </div>

            <div className="deck-counter-badge">
              <span className="counter-current">0{activePillar + 1}</span>
              <span className="counter-slash">/</span>
              <span className="counter-total">06</span>
            </div>
          </div>

          <div className="header-title-row">
            <h2 className="deck-main-title">
              Precision craft. <span><i>Uncompromising taste.</i></span>
            </h2>

            <div className="deck-scroll-guidance">
              <div className="guidance-chip">
                <ArrowDown size={12} className="guidance-icon" />
                <span>
                  {activePillar < 5
                    ? `Scroll or click tabs for 0${activePillar + 2} ${pillars[activePillar + 1]?.shortTitle}`
                    : 'Scroll down to explore Scope Calculator'}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Discipline Tabs & Live Progress Line */}
          <div className="deck-nav-wrapper">
            <div className="deck-pills-row">
              {pillars.map((pillar, idx) => {
                const isActive = activePillar === idx
                const isPast = activePillar > idx

                return (
                  <button
                    key={pillar.number}
                    type="button"
                    className={`deck-tab-pill ${isActive ? 'is-active' : ''} ${isPast ? 'is-past' : ''}`}
                    onClick={() => scrollToCard(idx)}
                    aria-label={`Jump to discipline ${pillar.number}: ${pillar.title}`}
                  >
                    <span className="tab-pill-dot" />
                    <span className="tab-pill-num">{pillar.number}</span>
                    <span className="tab-pill-name">{pillar.shortTitle}</span>
                  </button>
                )
              })}
            </div>

            {/* Continuous hardware-accelerated scroll progress bar */}
            <div className="deck-progress-track">
              <motion.div
                className="deck-progress-fill"
                style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              />
            </div>
          </div>
        </div>

        {/* Pinned Stage Grid: Left = Stacked Clean Cards, Right = High-Res Visual Showcase */}
        <div className="pinned-stage-grid">
          {/* Left Column: Stacked Deck of Cards */}
          <div className="deck-cards-stage">
            {pillars.map((pillar, idx) => (
              <DeckCardItem
                key={pillar.number}
                pillar={pillar}
                index={idx}
                total={pillars.length}
                scrollYProgress={scrollYProgress}
                isActive={activePillar === idx}
                isSelected={selectedServices.includes(pillar.title)}
                onToggleScope={onToggleScope}
                onCardClick={scrollToCard}
                onPrevCard={handlePrev}
                onNextCard={handleNext}
              />
            ))}
          </div>

          {/* Right Column: High-Resolution Cinematic Visual Stage */}
          <div className="deck-visualizer-col">
            <div className="visualizer-terminal">
              {/* Terminal HUD Header */}
              <div className="terminal-header">
                <div className="terminal-title-wrap">
                  <span className="terminal-dot" />
                  <span className="terminal-title">STAGE VISUALIZER // {currentPillar.number}</span>
                </div>
                <div className="terminal-sync-tag">
                  <span className="sync-pulse" />
                  <span>{currentPillar.badgeText}</span>
                </div>
              </div>

              {/* Cinematic Visual Stage Display */}
              <div className="terminal-canvas visual-stage-canvas">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar}
                    className="visual-media-wrapper"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* High-Resolution Media Image */}
                    <img
                      src={currentPillar.image}
                      alt={currentPillar.title}
                      className="visual-hero-image"
                    />
                    <div className="visual-media-vignette" />

                    {/* Discipline-Specific Interactive Visual Enhancements */}
                    {activePillar === 0 && (
                      <div className="visual-overlay-brand">
                        <div className="brand-palette-strip">
                          {currentPillar.colorSwatches?.map((hex, sIdx) => (
                            <div key={sIdx} className="palette-chip" style={{ backgroundColor: hex }}>
                              <span className="palette-hex">{hex}</span>
                            </div>
                          ))}
                        </div>
                        <div className="brand-specimen-watermark">
                          <span>Aa / 01</span>
                          <small>SWISS MONOLITH GRID</small>
                        </div>
                      </div>
                    )}

                    {activePillar === 1 && (
                      <div className="visual-overlay-reel">
                        <div className="reel-play-circle">
                          <Play size={22} className="reel-play-icon" />
                          <div className="pulse-ring-outer" />
                        </div>
                        <div className="reel-audio-meters">
                          <span className="audio-meter-bar bar-1" />
                          <span className="audio-meter-bar bar-2" />
                          <span className="audio-meter-bar bar-3" />
                          <span className="audio-meter-bar bar-4" />
                          <span className="audio-meter-bar bar-5" />
                          <span className="audio-meter-time">00:14 / 01:14 • 4K 60FPS</span>
                        </div>
                      </div>
                    )}

                    {activePillar === 2 && (
                      <div className="visual-overlay-ads">
                        <div className="ads-metric-pill">
                          <span className="metric-arrow">▲</span>
                          <strong>+42%</strong>
                          <span>CVR LIFT</span>
                        </div>
                        <div className="ads-roas-badge">
                          <strong>3.4x</strong>
                          <span>ROAS ON META & TIKTOK</span>
                        </div>
                      </div>
                    )}

                    {activePillar === 3 && (
                      <div className="visual-overlay-art">
                        <div className="art-gallery-seal">
                          <span className="seal-title">LIMITED EXHIBITION</span>
                          <span className="seal-desc">Hand-Pulled Silkscreen</span>
                        </div>
                      </div>
                    )}

                    {activePillar === 4 && (
                      <div className="visual-overlay-web">
                        <div className="web-browser-bar">
                          <div className="browser-dots">
                            <span className="b-dot b-red" />
                            <span className="b-dot b-yellow" />
                            <span className="b-dot b-green" />
                          </div>
                          <span className="browser-url">https://aura.designyoutlet.com</span>
                          <span className="browser-fps">120 FPS</span>
                        </div>
                      </div>
                    )}

                    {activePillar === 5 && (
                      <div className="visual-overlay-packaging">
                        <div className="packaging-spec-tag">
                          <span className="spec-tag-accent">MATTE BASALT</span>
                          <span className="spec-tag-main">HOT FOIL DEBOSS</span>
                        </div>
                      </div>
                    )}

                    {/* Lower Caption Card Bar */}
                    <div className="terminal-caption-card">
                      <div className="caption-tag-row">
                        <span className="caption-discipline-id">DISCIPLINE // 0{activePillar + 1}</span>
                        <span className="caption-status">{currentPillar.visualMetric}</span>
                      </div>
                      <strong className="caption-headline">{currentPillar.sampleProject}</strong>
                      <span className="caption-subtext">{currentPillar.tagline}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Terminal Footer Telemetry */}
              <div className="terminal-footer">
                <div className="footer-spec-col">
                  <span className="spec-label">ESTIMATED CYCLE</span>
                  <strong className="spec-value">{currentPillar.timeline}</strong>
                </div>
                <div className="footer-spec-col text-right">
                  <span className="spec-label">EXECUTION STANDARD</span>
                  <strong className="spec-value">BESPOKE CREATIVE SYSTEM</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom Bar */}
        <div className="pinned-stage-bottom-bar">
          <div className="bottom-bar-left">
            <span className="dot-active" />
            <span>DISCIPLINE 0{activePillar + 1}: {currentPillar.title.toUpperCase()}</span>
          </div>

          <div className="bottom-bar-right">
            <span>
              {activePillar === 5
                ? 'COMPLETED ALL DISCIPLINES — PROCEED TO PROJECT SCOPE'
                : 'USE SCROLL, TABS, OR KEYBOARD ARROWS (← →) TO NAVIGATE'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

