import { useState, useEffect } from 'react'
import { ArrowUp, ArrowUpRight, Copy, Check, Clock, Radio, Mail, Phone } from 'lucide-react'
import type { PageRoute } from './Navigation'

interface FooterProps {
  onNavigate: (page: PageRoute) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const [copied, setCopied] = useState(false)
  const [istTime, setIstTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date()
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now)
        setIstTime(formatted)
      } catch {
        setIstTime('14:30:00')
      }
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNav = (page: PageRoute) => {
    onNavigate(page)
  }

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText('designyoutlet.india@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <footer className="footer-v2" aria-label="Site Footer">
      {/* Background Ambience & Grid */}
      <div className="footer-ambience" aria-hidden="true">
        <div className="footer-glow-radial" />
        <div className="footer-grid-overlay" />
      </div>

      <div className="footer-inner">
        {/* Top Telemetry & Status Ribbon */}
        <div className="footer-telemetry-ribbon">
          <div className="telemetry-beacon">
            <span className="beacon-pulse">
              <span className="beacon-ping" />
              <Radio size={12} className="beacon-icon" />
            </span>
            <span className="beacon-label">STUDIO STATUS:</span>
            <span className="beacon-status">ACCEPTING COMMISSIONS // Q2-Q3 2026</span>
          </div>

          <div className="telemetry-telecom">
            <div className="telemetry-item">
              <Clock size={12} />
              <span>NEW DELHI // {istTime || '14:30:00'} IST</span>
            </div>
            <div className="telemetry-item">
              <span>28° 38’ N, 77° 13’ E // INDIA & GLOBAL REMOTE</span>
            </div>
          </div>
        </div>

        {/* CTA Invitation Strip */}
        <div className="footer-cta-strip">
          <div className="footer-cta-heading">
            <span className="f-kicker">INITIATE COLLABORATION</span>
            <h2>
              Ready to make your brand <em>impossible to ignore</em>?
            </h2>
          </div>
          <div className="footer-cta-action">
            <button
              type="button"
              className="footer-start-project-btn"
              onClick={() => handleNav('contact')}
            >
              <span>Start A Project</span>
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>

        {/* Main 4-Column Editorial Directory */}
        <div className="footer-main-grid">
          {/* Col 1: Studio Identity & Positioning */}
          <div className="footer-col-brand">
            <button
              type="button"
              className="footer-wordmark"
              onClick={() => handleNav('home')}
              aria-label="Designy Outlet Home"
            >
              <span className="footer-wordmark-mark">
                <span />
                <span />
                <span />
              </span>
              <span className="footer-brand-text">
                designy<span className="footer-brand-dot"> outlet.</span>
              </span>
            </button>

            <p className="footer-brand-statement">
              A high-craft graphic design studio & motion laboratory. We engineer identities, 3D big reels, and high-impact visual systems for brands with something to say.
            </p>

            <div className="footer-location-chip">
              <span className="fl-dot" />
              <span>HQ // NEW DELHI, INDIA</span>
              <span className="fl-sep">/</span>
              <span>SERVICING CLIENTS WORLDWIDE</span>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="footer-col-nav">
            <span className="footer-col-header">
              <span className="header-index">01</span>
              <span>// DIRECTORY</span>
            </span>
            <div className="footer-nav-list">
              <button type="button" onClick={() => handleNav('home')}>
                <span className="nav-num">01</span>
                <span className="nav-label">Home</span>
                <ArrowUpRight size={13} className="nav-arrow" />
              </button>
              <button type="button" onClick={() => handleNav('services')}>
                <span className="nav-num">02</span>
                <span className="nav-label">Services & Deliverables</span>
                <ArrowUpRight size={13} className="nav-arrow" />
              </button>
              <button type="button" onClick={() => handleNav('work')}>
                <span className="nav-num">03</span>
                <span className="nav-label">Work & Archive (8 Cases)</span>
                <ArrowUpRight size={13} className="nav-arrow" />
              </button>
              <button type="button" onClick={() => handleNav('about')}>
                <span className="nav-num">04</span>
                <span className="nav-label">About Us & Studio</span>
                <ArrowUpRight size={13} className="nav-arrow" />
              </button>
              <button type="button" onClick={() => handleNav('contact')}>
                <span className="nav-num">05</span>
                <span className="nav-label">Contact & Inquiries</span>
                <ArrowUpRight size={13} className="nav-arrow" />
              </button>
            </div>
          </div>

          {/* Col 3: Disciplines & Capabilities */}
          <div className="footer-col-disciplines">
            <span className="footer-col-header">
              <span className="header-index">02</span>
              <span>// CAPABILITIES</span>
            </span>
            <div className="footer-disciplines-list">
              <button type="button" onClick={() => handleNav('services')}>
                <span>3D Big Reels & CGI</span>
              </button>
              <button type="button" onClick={() => handleNav('services')}>
                <span>Brand Architecture & Identity</span>
              </button>
              <button type="button" onClick={() => handleNav('services')}>
                <span>Kinetic Typography Systems</span>
              </button>
              <button type="button" onClick={() => handleNav('services')}>
                <span>Performance Ad Creative</span>
              </button>
              <button type="button" onClick={() => handleNav('work')}>
                <span>Experimental Brutalist Art</span>
              </button>
              <button type="button" onClick={() => handleNav('services')}>
                <span>Motion Guidelines & Launch</span>
              </button>
            </div>
          </div>

          {/* Col 4: Transmission & Studio Lines */}
          <div className="footer-col-transmission">
            <span className="footer-col-header">
              <span className="header-index">03</span>
              <span>// TRANSMISSION</span>
            </span>

            {/* Direct Email Box with 1-click Copy */}
            <div className="footer-email-card">
              <div className="f-email-meta">
                <Mail size={13} />
                <span>Primary Studio Desk</span>
              </div>
              <div className="f-email-row">
                <a
                  href="mailto:designyoutlet.india@gmail.com"
                  className="f-email-link"
                  title="Send email to Designy Outlet"
                >
                  designyoutlet.india@gmail.com
                </a>
                <button
                  type="button"
                  className={`f-copy-btn ${copied ? 'is-copied' : ''}`}
                  onClick={handleCopyEmail}
                  aria-label="Copy studio email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Telephones */}
            <div className="footer-phones">
              <a href="tel:+916206919461" className="f-phone-link">
                <Phone size={13} />
                <span>+91 6206919461</span>
                <span className="f-phone-tag">IN / WA</span>
              </a>
              <a href="tel:+919804376420" className="f-phone-link">
                <Phone size={13} />
                <span>+91 98043 76420</span>
                <span className="f-phone-tag">DIRECT</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="footer-social-chips">
              <a
                className="f-social-chip"
                href="https://www.instagram.com/designy_outlet/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Instagram</span>
                <ArrowUpRight size={11} />
              </a>
              <a
                className="f-social-chip"
                href="https://www.linkedin.com/company/designy-outlet/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={11} />
              </a>
              <a
                className="f-social-chip"
                href="https://www.behance.net"
                target="_blank"
                rel="noreferrer"
              >
                <span>Behance</span>
                <ArrowUpRight size={11} />
              </a>
              <a
                className="f-social-chip"
                href="https://wa.me/916206919461"
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <ArrowUpRight size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Big Architectural Watermark */}
        <div className="footer-architectural-watermark" aria-hidden="true">
          <span>DESIGNY OUTLET</span>
        </div>

        {/* Bottom Utility Bar */}
        <div className="footer-bottom-utility">
          <div className="footer-copyright-group">
            <div className="footer-copyright">
              <span>© {new Date().getFullYear()} DESIGNY OUTLET.</span>
              <span className="foot-sep">//</span>
              <span>ALL RIGHTS RESERVED.</span>
            </div>

            <a
              href="https://growitate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-built-by-tag"
              title="Built By Growitate"
            >
              <span className="built-by-dot" />
              <span className="built-by-text">Built By Growitate</span>
              <ArrowUpRight size={11} className="built-by-arrow" />
            </a>
          </div>

          <div className="footer-credo">
            <span>DISRUPTION BY DESIGN // NO TEMPLATES ALLOWED</span>
          </div>

          <div className="footer-back-top-wrapper">
            <button
              type="button"
              onClick={scrollToTop}
              className="footer-back-to-top-btn"
              aria-label="Scroll back to top of page"
            >
              <span>Back To Top</span>
              <ArrowUp size={14} className="top-arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
