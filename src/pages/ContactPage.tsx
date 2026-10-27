import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles, Mail, Phone, MapPin, CheckCircle2, Plus, Minus, ArrowUpRight, MessageSquare } from 'lucide-react'
import { studioFaqs } from '../data/content'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal'

interface ContactPageProps {
  initialService?: string
}

export function ContactPage({ initialService = '' }: ContactPageProps) {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>(
    initialService ? [initialService] : ['Branding Identity System', 'Big Reel (2x)']
  )
  const [selectedBudget, setSelectedBudget] = useState('$5,000 – $15,000')
  const [selectedTimeline, setSelectedTimeline] = useState('Within 1 Month')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [sent, setSent] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  useEffect(() => {
    if (initialService && !selectedDisciplines.includes(initialService)) {
      setSelectedDisciplines(prev => [...prev, initialService])
    }
  }, [initialService])

  const toggleDiscipline = (item: string) => {
    if (selectedDisciplines.includes(item)) {
      setSelectedDisciplines(selectedDisciplines.filter(d => d !== item))
    } else {
      setSelectedDisciplines([...selectedDisciplines, item])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  const disciplinesList = [
    'Brand Identity System',
    'Big Cinematic Reel (2x)',
    'Performance Ads Suite (2x)',
    'Brutalist Artwork & Posters (2x)',
    'Interactive Web Architecture',
    'Full Creative Retainer'
  ]

  const budgets = [
    '< $5,000',
    '$5,000 – $15,000',
    '$15,000 – $35,000',
    '$35,000+'
  ]

  const timelines = [
    'Immediate (1-2 Wks)',
    'Within 1 Month',
    'Within 2-3 Months',
    'Flexible / Planning'
  ]

  return (
    <div className="page-view contact-page">
      {/* Page Hero */}
      <section className="page-hero section-coral">
        <div className="contact-shape shape-a" />
        <div className="contact-shape shape-b" />
        <div className="page-hero-container">
          <ScrollReveal delay={0.04} className="eyebrow">
            <span className="eyebrow-dot" />
            <span>( 05 ) / Inquiries & Collaboration</span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="page-title">
              <span className="display-line">Let’s build</span>
              <span className="display-line display-indent">
                <i>something bold.</i>
              </span>
            </h1>
          </ScrollReveal>

          <div className="page-hero-meta">
            <ScrollReveal delay={0.16}>
              <p className="page-subtitle">
                We are currently booking brand identity sprints, 3D big reels, performance ad campaigns, and custom web builds. Fill out the project brief below or reach out directly.
              </p>
            </ScrollReveal>

            <ScrollStagger className="contact-quick-badges" staggerDelay={0.07} delay={0.2}>
              <ScrollStaggerItem>
                <a href="mailto:designyoutlet.india@gmail.com" className="contact-badge-link">
                  <Mail size={14} /> designyoutlet.india@gmail.com
                </a>
              </ScrollStaggerItem>
              <ScrollStaggerItem>
                <a href="tel:+916206919461" className="contact-badge-link">
                  <Phone size={14} /> +91 6206919461
                </a>
              </ScrollStaggerItem>
              <ScrollStaggerItem>
                <span className="contact-badge-link">
                  <MapPin size={14} /> India & Global Remote
                </span>
              </ScrollStaggerItem>
            </ScrollStagger>
          </div>
        </div>
      </section>

      {/* Main Interactive Inquiry Form & Sidebar */}
      <section className="section-paper contact-form-section">
        <div className="contact-split-grid">
          {/* Left: Interactive Form */}
          <div className="inquiry-form-wrap">
            <div className="form-head">
              <h2>Project Scope & Inquiry</h2>
              <p>Select your required capabilities and provide basic project context.</p>
            </div>

            {sent ? (
              <motion.div
                className="inquiry-success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="success-icon-wrap">
                  <Sparkles size={36} />
                </div>
                <h3>Inquiry Received // Ticket #DO-8492</h3>
                <p>
                  Thank you, <strong>{formData.name || 'there'}</strong>. We have logged your request for <strong>{formData.company || 'your brand'}</strong>.
                </p>

                <div className="success-summary">
                  <div className="sum-row">
                    <span>Selected Services:</span>
                    <strong>{selectedDisciplines.join(', ') || 'Custom Project'}</strong>
                  </div>
                  <div className="sum-row">
                    <span>Target Budget:</span>
                    <strong>{selectedBudget}</strong>
                  </div>
                  <div className="sum-row">
                    <span>Anticipated Timeline:</span>
                    <strong>{selectedTimeline}</strong>
                  </div>
                  <div className="sum-row">
                    <span>Estimated First Reply:</span>
                    <strong>Within 24 Hours (IST / GMT)</strong>
                  </div>
                </div>

                <div className="success-actions">
                  <a
                    href="https://wa.me/916206919461"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-btn"
                  >
                    <MessageSquare size={16} />
                    <span>Quick Chat on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    className="reset-form-btn"
                    onClick={() => setSent(false)}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form className="interactive-brief-form" onSubmit={handleSubmit}>
                {/* 1. Disciplines Selection */}
                <div className="form-block">
                  <span className="block-number">01 // What disciplines do you need?</span>
                  <div className="chips-grid">
                    {disciplinesList.map((item) => {
                      const isSel = selectedDisciplines.includes(item)
                      return (
                        <button
                          key={item}
                          type="button"
                          className={`chip-btn ${isSel ? 'is-active' : ''}`}
                          onClick={() => toggleDiscipline(item)}
                        >
                          <span className="chip-indicator">
                            {isSel ? <CheckCircle2 size={13} /> : <Plus size={13} />}
                          </span>
                          <span>{item}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 2. Budget Selection */}
                <div className="form-block">
                  <span className="block-number">02 // Anticipated project budget</span>
                  <div className="radio-pills-row">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        className={`radio-pill-btn ${selectedBudget === b ? 'is-active' : ''}`}
                        onClick={() => setSelectedBudget(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Timeline Selection */}
                <div className="form-block">
                  <span className="block-number">03 // Desired launch timeline</span>
                  <div className="radio-pills-row">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`radio-pill-btn ${selectedTimeline === t ? 'is-active' : ''}`}
                        onClick={() => setSelectedTimeline(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Contact Details */}
                <div className="form-block">
                  <span className="block-number">04 // Your details</span>
                  <div className="fields-grid">
                    <label className="field-group">
                      <span>Your Name *</span>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </label>

                    <label className="field-group">
                      <span>Work Email *</span>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </label>

                    <label className="field-group">
                      <span>Brand / Organization</span>
                      <input
                        type="text"
                        placeholder="e.g. Acme Studio"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </label>

                    <label className="field-group">
                      <span>Phone / WhatsApp</span>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </label>

                    <label className="field-group full-width">
                      <span>What are we making? *</span>
                      <textarea
                        required
                        rows={3}
                        placeholder="Tell us about your brand, what makes it unique, and what success looks like for this engagement..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </label>
                  </div>
                </div>

                <button type="submit" className="submit-inquiry-btn">
                  <span>Transmit Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right: Studio Direct Channels & Office Info */}
          <ScrollStagger className="contact-sidebar" staggerDelay={0.1}>
            <ScrollStaggerItem className="sidebar-card direct-channels-card">
              <h3>Direct Channels</h3>
              <p>For urgent press, keynote talks, or immediate production inquiries:</p>

              <div className="channel-list">
                <a href="mailto:designyoutlet.india@gmail.com" className="channel-item">
                  <Mail size={16} className="channel-icon" />
                  <div>
                    <span className="c-label">Primary Studio Email</span>
                    <strong>designyoutlet.india@gmail.com</strong>
                  </div>
                </a>

                <a href="tel:+916206919461" className="channel-item">
                  <Phone size={16} className="channel-icon" />
                  <div>
                    <span className="c-label">Phone & WhatsApp (India)</span>
                    <strong>+91 6206919461</strong>
                  </div>
                </a>

                <a href="tel:+919804376420" className="channel-item">
                  <Phone size={16} className="channel-icon" />
                  <div>
                    <span className="c-label">Secondary Line</span>
                    <strong>+91 98043 76420</strong>
                  </div>
                </a>
              </div>
            </ScrollStaggerItem>

            <ScrollStaggerItem className="sidebar-card studio-operating-card">
              <h3>Studio Hours</h3>
              <div className="hours-row">
                <span>Monday — Friday:</span>
                <strong>10:00 — 19:00 IST</strong>
              </div>
              <div className="hours-row">
                <span>Timezone Support:</span>
                <strong>EST / GMT / SGT / JST</strong>
              </div>
              <div className="hours-row">
                <span>Average Response Time:</span>
                <strong>&lt; 24 Hours</strong>
              </div>
            </ScrollStaggerItem>

            <ScrollStaggerItem className="sidebar-card social-connect-card">
              <h3>Social Networks</h3>
              <div className="social-links-grid">
                <a
                  href="https://www.instagram.com/designy_outlet/"
                  target="_blank"
                  rel="noreferrer"
                  className="soc-btn"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://www.linkedin.com/company/designy-outlet/"
                  target="_blank"
                  rel="noreferrer"
                  className="soc-btn"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="soc-btn"
                >
                  <span>Behance</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </ScrollStaggerItem>
          </ScrollStagger>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="section-ink contact-faq-section">
        <div className="section-head">
          <ScrollReveal>
            <div className="kicker light">
              <span>( 05.1 )</span>
              <span>Frequently Asked Questions</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2>
              Everything you need<br />
              <span><i>to know.</i></span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16} className="section-intro light-text">
            <p>Clear answers to common questions about timelines, pricing structures, deliverables, and international collaborations.</p>
          </ScrollReveal>
        </div>

        <ScrollStagger className="faqs-accordion-list" staggerDelay={0.08}>
          {studioFaqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx
            return (
              <ScrollStaggerItem key={idx}>
                <div
                  className={`faq-item ${isOpen ? 'is-open' : ''}`}
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                >
                  <div className="faq-question">
                    <span className="faq-num">0{idx + 1}</span>
                    <h4>{faq.question}</h4>
                    <button type="button" className="faq-toggle-icon" aria-label="Toggle answer">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </button>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="faq-answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollStaggerItem>
            )
          })}
        </ScrollStagger>
      </section>
    </div>
  )
}
