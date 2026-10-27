import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import type { PageRoute } from './Navigation'

interface PageTransitionProps {
  currentPage: PageRoute
  children: ReactNode
}

interface PageMeta {
  number: string
  label: string
  sublabel: string
}

const pageInfoMap: Record<PageRoute, PageMeta> = {
  home: {
    number: '01',
    label: 'HOME // STUDIO',
    sublabel: 'Brands that don’t blend in.',
  },
  services: {
    number: '02',
    label: 'SERVICES & DISCIPLINES',
    sublabel: 'Brand Systems, 3D Reels & Performance Creatives',
  },
  work: {
    number: '03',
    label: 'SELECTED PORTFOLIO',
    sublabel: '8 Flagship Case Studies & Motion Artifacts',
  },
  about: {
    number: '04',
    label: 'STUDIO MANIFESTO',
    sublabel: 'Philosophy, Process & Creative Direction',
  },
  contact: {
    number: '05',
    label: 'COMMISSION & INQUIRIES',
    sublabel: 'Start a Project / Available for Q4 & 2025',
  },
}

const easeCurve = [0.22, 1, 0.36, 1] as const
const exitCurve = [0.32, 0, 0.67, 0] as const

const curtainVariants = {
  initial: {
    scaleY: 1,
    transformOrigin: 'bottom',
  },
  animate: {
    scaleY: 0,
    transformOrigin: 'top',
    transition: {
      duration: 0.46,
      ease: easeCurve,
      delay: 0.08,
    },
  },
  exit: {
    scaleY: 1,
    transformOrigin: 'bottom',
    transition: {
      duration: 0.34,
      ease: easeCurve,
    },
  },
}

const contentVariants = {
  initial: {
    opacity: 0,
    y: 14,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.46,
      ease: easeCurve,
      delay: 0.14,
    },
    transitionEnd: {
      transform: 'none',
      filter: 'none',
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.22,
      ease: exitCurve,
    },
  },
}

export function PageTransition({ currentPage, children }: PageTransitionProps) {
  const meta = pageInfoMap[currentPage] || pageInfoMap.home

  return (
    <div className="page-transition-wrapper">
      {/* Minimal Architectural Shutter Curtain */}
      <motion.div
        className="page-shutter-curtain"
        variants={curtainVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        aria-hidden="true"
      >
        <div className="shutter-inner">
          <div className="shutter-meta">
            <span className="shutter-dot" />
            <span>DESIGNY OUTLET // {meta.number}</span>
          </div>
          <div className="shutter-title">{meta.label}</div>
          <span className="shutter-sublabel">{meta.sublabel}</span>
          <div className="shutter-line" />
        </div>
      </motion.div>

      {/* Main Page View with Fluid Entrance & Exit */}
      <motion.div
        className="page-content-wrapper"
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </div>
  )
}
