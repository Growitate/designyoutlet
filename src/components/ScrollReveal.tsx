import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

export interface ScrollRevealProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  duration?: number
  yOffset?: number
  variant?: 'up' | 'down' | 'fade' | 'scale' | 'slide-right' | 'slide-left'
  once?: boolean
  threshold?: number
}

const getVariants = (variant: string, yOffset: number, duration: number, delay: number): Variants => {
  const ease = [0.22, 1, 0.36, 1] as const

  switch (variant) {
    case 'down':
      return {
        hidden: { opacity: 0, y: -yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease },
        },
      }
    case 'fade':
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration, delay, ease },
        },
      }
    case 'scale':
      return {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration, delay, ease },
        },
      }
    case 'slide-right':
      return {
        hidden: { opacity: 0, x: -yOffset * 1.5 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay, ease },
        },
      }
    case 'slide-left':
      return {
        hidden: { opacity: 0, x: yOffset * 1.5 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay, ease },
        },
      }
    case 'up':
    default:
      return {
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease },
        },
      }
  }
}

export function ScrollReveal({
  children,
  className = '',
  style,
  delay = 0,
  duration = 0.75,
  yOffset = 22,
  variant = 'up',
  once = true,
  threshold = 0.12,
}: ScrollRevealProps) {
  const variants = getVariants(variant, yOffset, duration, delay)

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
    >
      {children}
    </motion.div>
  )
}

export interface ScrollStaggerProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  staggerDelay?: number
  delay?: number
  once?: boolean
  threshold?: number
}

const staggerContainerVariants = (staggerDelay: number, delay: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delay,
    },
  },
})

export function ScrollStagger({
  children,
  className = '',
  style,
  staggerDelay = 0.09,
  delay = 0,
  once = true,
  threshold = 0.08,
}: ScrollStaggerProps) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={staggerContainerVariants(staggerDelay, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
    >
      {children}
    </motion.div>
  )
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export function ScrollStaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  )
}

export function ScrollDraftingRule({
  className = '',
  delay = 0.05,
}: {
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={`scroll-drafting-rule ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}
