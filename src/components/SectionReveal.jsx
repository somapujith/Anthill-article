import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

/**
 * SectionReveal — wraps a section and applies scroll-triggered entrance animation.
 * 
 * Props:
 *   - children: The section content
 *   - id: Section id for navigation
 *   - direction: 'up' | 'down' | 'left' | 'right' (default 'up')
 *   - delay: base delay in seconds (default 0)
 *   - className: additional classes
 *   - parallax: if true, adds subtle parallax to background (default false)
 *   - threshold: how much of the section needs to be visible (default 0.15)
 */
export default function SectionReveal({
  children,
  id,
  direction = 'up',
  delay = 0,
  className = '',
  parallax = false,
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  })

  // parallax scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60])

  // direction-based initial offsets
  const directionMap = {
    up:    { x: 0,   y: 50 },
    down:  { x: 0,   y: -50 },
    left:  { x: 60,  y: 0 },
    right: { x: -60, y: 0 },
  }

  const offset = directionMap[direction] || directionMap.up

  return (
    <div
      ref={ref}
      id={id}
      className={`scroll-snap-section ${className}`}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: offset.x,
          y: offset.y,
          filter: 'blur(6px)',
        }}
        animate={isInView ? {
          opacity: 1,
          x: 0,
          y: 0,
          filter: 'blur(0px)',
        } : {
          opacity: 0,
          x: offset.x,
          y: offset.y,
          filter: 'blur(6px)',
        }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={parallax ? { y: parallaxY } : undefined}
      >
        {children}
      </motion.div>
    </div>
  )
}

/**
 * SectionDivider — a visual separator between sections.
 * Draws a horizontal gradient line that fades in on scroll.
 */
export function SectionDivider({ accent = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="scroll-snap-section relative py-2">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`h-px w-full origin-left ${
          accent
            ? 'bg-gradient-to-r from-transparent via-[#e5232c] to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
        }`}
      />
    </div>
  )
}
