import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonialsData } from '../data/content'
import { Quote, ArrowLeft, ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ScrollReveal'

interface TestimonialsSectionProps {
  theme?: 'dark' | 'light'
}

export function TestimonialsSection({ theme = 'light' }: TestimonialsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = testimonialsData[activeIdx]

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  return (
    <section className={`testimonials-section ${theme === 'dark' ? 'section-ink' : 'section-paper'}`}>
      <div className="section-head">
        <ScrollReveal>
          <div className="kicker">
            <span>( 04 )</span>
            <span>Verified Client Voices</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2>
            Proof in the<br />
            <span><i>execution.</i></span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16} className="section-intro">
          <p>
            4 leaders who chose not to blend in. Discover how our brand systems, reels, and ad creatives drive measurable commercial lift.
          </p>
        </ScrollReveal>
      </div>

      {/* Main Spotlight Testimonial Card */}
      <ScrollReveal variant="up" delay={0.1} className="testimonial-spotlight">
        <div className="testimonial-grid">
          {/* Client Portrait & Metric */}
          <div className="testimonial-visual">
            <div className="client-avatar-frame">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.avatar}
                  alt={current.name}
                  className="client-portrait"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
              <div className="client-badge">
                <ShieldCheck size={14} className="badge-icon" />
                <span>Verified Partner</span>
              </div>
            </div>

            <div className="client-stat-card">
              <span className="client-stat-value">{current.metric}</span>
              <span className="client-stat-label">{current.metricLabel}</span>
              <div className="client-project-pill">{current.project}</div>
            </div>
          </div>

          {/* Quote & Speaker Information */}
          <div className="testimonial-content">
            <div className="stars-row">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={15} fill="var(--acid)" color="var(--acid)" />
              ))}
              <span className="stars-text">5.0 Client Rating</span>
            </div>

            <div className="quote-body">
              <Quote className="quote-bg-icon" size={64} />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  “{current.quote}”
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="speaker-meta">
              <div className="speaker-name">{current.name}</div>
              <div className="speaker-role">
                {current.role} — <strong>{current.company}</strong>
              </div>
              <div className="speaker-location">{current.location}</div>
            </div>

            {/* Carousel navigation controls */}
            <div className="testimonial-nav">
              <div className="testimonial-dots">
                {testimonialsData.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`testi-dot ${activeIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`View testimonial from ${t.name}`}
                  >
                    <span>0{idx + 1}</span>
                  </button>
                ))}
              </div>

              <div className="testi-arrows">
                <button
                  type="button"
                  className="testi-arrow-btn"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  type="button"
                  className="testi-arrow-btn"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 4 Client Mini Cards Row for instant overview */}
      <ScrollStagger className="client-cards-row" staggerDelay={0.08}>
        {testimonialsData.map((t, index) => (
          <ScrollStaggerItem key={t.id}>
            <div
              className={`client-mini-card ${activeIdx === index ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(index)}
            >
              <img src={t.avatar} alt={t.name} className="mini-avatar" />
              <div className="mini-info">
                <strong>{t.name}</strong>
                <span>{t.company}</span>
                <span className="mini-metric">{t.metric} {t.metricLabel}</span>
              </div>
            </div>
          </ScrollStaggerItem>
        ))}
      </ScrollStagger>
    </section>
  )
}
