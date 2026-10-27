import { motion } from 'framer-motion'
import { ArrowUpRight, Award, Compass, Cpu, Layers, Sparkles, Terminal } from 'lucide-react'
import { studioTeam } from '../data/content'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal'
import type { PageRoute } from '../components/Navigation'

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="page-view about-page">
      {/* Page Hero */}
      <section className="page-hero section-ink">
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="page-hero-container">
          <ScrollReveal delay={0.04} className="eyebrow">
            <span className="eyebrow-dot" />
            <span>( 04 ) / The Studio & Philosophy</span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="page-title">
              <span className="display-line">Built for brands</span>
              <span className="display-line display-indent">
                <em>ready to be seen.</em>
              </span>
            </h1>
          </ScrollReveal>

          <div className="page-hero-meta">
            <ScrollReveal delay={0.16}>
              <p className="page-subtitle">
                Designy Outlet began with a single drafting table, a pencil, and a conviction: that safe, polite design is the most expensive mistake a brand can make. Today, we shape graphic identities, kinetic reels, and digital worlds with relentless craft.
              </p>
            </ScrollReveal>

            <ScrollStagger className="about-stats-strip" staggerDelay={0.06} delay={0.2}>
              <ScrollStaggerItem className="a-stat">
                <strong>140+</strong>
                <span>Projects Shipped</span>
              </ScrollStaggerItem>
              <ScrollStaggerItem className="a-stat">
                <strong>18</strong>
                <span>Design Honors</span>
              </ScrollStaggerItem>
              <ScrollStaggerItem className="a-stat">
                <strong>98.4%</strong>
                <span>Client Retention</span>
              </ScrollStaggerItem>
              <ScrollStaggerItem className="a-stat">
                <strong>14</strong>
                <span>Countries Reached</span>
              </ScrollStaggerItem>
            </ScrollStagger>
          </div>
        </div>
      </section>

      {/* Philosophy Manifesto Grid */}
      <section className="manifesto-deep-section section-paper">
        <div className="section-head">
          <ScrollReveal>
            <div className="kicker">
              <span>( 04.1 )</span>
              <span>Studio Tenets</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2>
              Four rules we<br />
              <span><i>never break.</i></span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16} className="section-intro">
            <p>
              In an era overflowing with homogenized templates and soulless AI copies, we believe the human hand and deliberate tension are the only things that truly cut through.
            </p>
          </ScrollReveal>
        </div>

        <ScrollStagger className="tenets-grid" staggerDelay={0.1}>
          <ScrollStaggerItem className="tenet-card">
            <span className="tenet-num">01</span>
            <h3>No Generic Templates</h3>
            <p>
              Every letterform, grid alignment, and easing curve is built specifically for your brand’s personality. We don’t re-skin existing themes; we construct fresh visual languages from the ground up.
            </p>
            <div className="tenet-tag">Bespoke By Default</div>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="tenet-card">
            <span className="tenet-num">02</span>
            <h3>Extreme Visual Tension</h3>
            <p>
              Great work thrives on contrast. We pit architectural Swiss grid discipline against raw expressive handwriting, deep basalt ink against high-voltage acid red, and brutalist typography against fluid 3D motion.
            </p>
            <div className="tenet-tag">Dynamic Balance</div>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="tenet-card">
            <span className="tenet-num">03</span>
            <h3>Strategy Meets Subversion</h3>
            <p>
              Aesthetic shock without strategy is just noise. We study market positioning, category conventions, and customer psychology to ensure every bold choice directly advances commercial objectives.
            </p>
            <div className="tenet-tag">Measurable Lift</div>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="tenet-card">
            <span className="tenet-num">04</span>
            <h3>Obsession With The Micro</h3>
            <p>
              The difference between good design and iconic design is in the 100th-of-a-second frame cut, the kerning pair on a billboard, the paper weight of a business card, and the spring physics of a hover state.
            </p>
            <div className="tenet-tag">Zero Compromise</div>
          </ScrollStaggerItem>
        </ScrollStagger>
      </section>

      {/* Visual Studio Showcase Split */}
      <section className="studio-visual-split section-coral">
        <ScrollReveal variant="scale" className="split-imagery">
          <motion.img
            src="/images/image-3.webp"
            alt="Designy Outlet studio craft"
            className="split-photo"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <div className="split-badge">
            <Compass size={16} />
            <span>EST. 2024 // INDIA + EVERYWHERE</span>
          </div>
        </ScrollReveal>

        <div className="split-copy">
          <ScrollReveal>
            <div className="kicker">
              <span>Our Foundation</span>
            </div>
            <h2>
              From the drafting table<br />
              <i>to the digital world.</i>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="split-lead">
              We operate at the exact collision point of physical editorial print and high-velocity digital media. We test posters on 300gsm cotton paper before adapting them into 60fps 3D big reels.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="split-text">
              Our physical workshop houses silkscreen beds, risograph printers, and typography specimen books, alongside ultra-high-performance 3D GPU rendering rigs and motion control suites.
            </p>
          </ScrollReveal>

          <ScrollStagger className="split-badges-row" staggerDelay={0.08} delay={0.2}>
            <ScrollStaggerItem className="mini-badge">
              <Award size={15} />
              <span>Behance Curated 2024</span>
            </ScrollStaggerItem>
            <ScrollStaggerItem className="mini-badge">
              <Terminal size={15} />
              <span>Awwwards Site of the Day</span>
            </ScrollStaggerItem>
            <ScrollStaggerItem className="mini-badge">
              <Layers size={15} />
              <span>Tokyo TDC Recognized</span>
            </ScrollStaggerItem>
          </ScrollStagger>
        </div>
      </section>

      {/* Studio Team & Leadership */}
      <section className="section-paper studio-team-section">
        <div className="section-head">
          <ScrollReveal>
            <div className="kicker">
              <span>( 04.2 )</span>
              <span>The Makers</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2>
              People who care<br />
              <span><i>about every pixel.</i></span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16} className="section-intro">
            <p>
              A focused core of directors, type designers, 3D motion choreographers, and performance strategists who stay hands-on with every client project.
            </p>
          </ScrollReveal>
        </div>

        <ScrollStagger className="team-grid" staggerDelay={0.08}>
          {studioTeam.map((member, idx) => (
            <ScrollStaggerItem key={idx} className="team-card">
              <div className="team-card-header">
                <span className="team-idx">0{idx + 1}</span>
                <span className="team-focus-pill">{member.focus}</span>
              </div>
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </section>

      {/* Software & Craft Hardware Stack */}
      <section className="section-ink studio-tools-section">
        <div className="tools-container">
          <div className="tools-header">
            <ScrollReveal>
              <div className="kicker light">
                <Cpu size={14} />
                <span>Studio Arsenal</span>
              </div>
              <h2>Tools & Production Technologies</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>
                We bring enterprise-grade technical firepower to every project, ensuring seamless integration from creative handoff to live deployment.
              </p>
            </ScrollReveal>
          </div>

          <ScrollStagger className="tools-grid" staggerDelay={0.08}>
            <ScrollStaggerItem className="tool-box">
              <span className="tool-category">3D & MOTION</span>
              <strong>Blender 3D, Cinema 4D, Houdini, Redshift</strong>
              <p>Volumetric physics, chrome raytracing, and fluid simulation.</p>
            </ScrollStaggerItem>
            <ScrollStaggerItem className="tool-box">
              <span className="tool-category">EDITORIAL & TYPE</span>
              <strong>Glyphs 3, InDesign, Illustrator, Risograph ME</strong>
              <p>Bespoke font engineering, vector grid systems, and tactile screenprints.</p>
            </ScrollStaggerItem>
            <ScrollStaggerItem className="tool-box">
              <span className="tool-category">PERFORMANCE & VIDEO</span>
              <strong>After Effects, DaVinci Resolve, CapCut Pro</strong>
              <p>High-conversion thumb-stop video ads and 4K showreels.</p>
            </ScrollStaggerItem>
            <ScrollStaggerItem className="tool-box">
              <span className="tool-category">INTERACTIVE CODE</span>
              <strong>React, Vite, Framer Motion, WebGL</strong>
              <p>Liquid page transitions, micro-animations, and responsive layouts.</p>
            </ScrollStaggerItem>
          </ScrollStagger>
        </div>
      </section>


      {/* Bottom CTA Banner */}
      <section className="cta-banner section-coral">
        <ScrollReveal className="cta-banner-content">
          <div className="kicker">
            <Sparkles size={14} />
            <span>Ready to meet the studio?</span>
          </div>
          <h2>
            Let’s make something<br />
            <i>unforgettable together.</i>
          </h2>
          <p>
            Book a discovery call directly with our Creative Director to talk through your vision, timeline, and deliverables.
          </p>
          <button
            className="cta-huge-btn dark-variant"
            onClick={() => onNavigate('contact')}
          >
            <span>Talk to our team</span>
            <ArrowUpRight size={18} />
          </button>
        </ScrollReveal>
      </section>
    </div>
  )
}
