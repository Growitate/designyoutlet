import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, Calendar, TrendingUp } from 'lucide-react'
import type { Project } from '../data/content'
import { BigReelPlayer } from './BigReelPlayer'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
  onInquire: (projectTitle: string) => void
}

export function ProjectModal({ project, onClose, onInquire }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="project-modal-backdrop" onClick={onClose}>
        <motion.div
          className="project-modal-window"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header">
            <div className="modal-header-meta">
              <span className="modal-index">{project.number} // 08</span>
              <span className="modal-category">{project.categoryLabel}</span>
              <span className="modal-client">{project.client}</span>
            </div>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          <div className="modal-body">
            {/* Visual showcase: if it's a big reel, embed BigReelPlayer; otherwise showcase image */}
            <div className="modal-media-wrap">
              {project.category === 'reel' ? (
                <BigReelPlayer project={project} />
              ) : (
                <div className="modal-image-stage">
                  <img src={project.image} alt={project.title} className="modal-featured-img" />
                  <div className="modal-image-watermark">
                    <span>{project.title}</span>
                    <i>{project.tag}</i>
                  </div>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="modal-content-grid">
              <div className="modal-content-main">
                <p className="modal-headline">{project.headline}</p>
                <div className="modal-prose">
                  <p>{project.description}</p>
                </div>

                {project.metrics && (
                  <div className="modal-metric-card">
                    <TrendingUp size={20} className="metric-icon" />
                    <div>
                      <strong>{project.metrics}</strong>
                      <span>Verified Campaign Impact & Reach</span>
                    </div>
                  </div>
                )}

                <div className="modal-deliverables-section">
                  <h4><Layers size={14} /> Deliverables & Tangible Outputs</h4>
                  <ul className="modal-deliv-list">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-content-sidebar">
                <div className="sidebar-group">
                  <span className="sidebar-label"><Calendar size={12} /> Timeline & Year</span>
                  <strong className="sidebar-value">{project.year} // {project.duration || 'Sprint'}</strong>
                </div>

                {project.tools && (
                  <div className="sidebar-group">
                    <span className="sidebar-label"><Cpu size={12} /> Software & Craft Stack</span>
                    <div className="tools-pills">
                      {project.tools.map((t, idx) => (
                        <span key={idx} className="tool-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="sidebar-cta-card">
                  <h4>Inspired by this?</h4>
                  <p>We can engineer a tailored visual system or motion reel for your brand.</p>
                  <button
                    className="modal-inquire-btn"
                    onClick={() => {
                      onClose()
                      onInquire(project.title)
                    }}
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
