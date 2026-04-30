import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

/*
 * DESIGN PHILOSOPHY:
 * No orbiting dots. No pulsing rings. No gradient blobs.
 * This is an editorial magazine cover, not a SaaS dashboard.
 * Typography IS the design. Black space IS the decoration.
 * One red accent line. One animation concept. Maximum restraint.
 */

/* ── counter that counts up once ── */
function Count({ to, suffix = '', delay = 1.6 }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    let s = null, raf
    const step = (t) => {
      if (!s) s = t
      const p = Math.min((t - s) / 1800, 1)
      // easeOutExpo
      setV(Math.floor((1 - Math.pow(2, -10 * p)) * to))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    const tm = setTimeout(() => { raf = requestAnimationFrame(step) }, delay * 1000)
    return () => { clearTimeout(tm); cancelAnimationFrame(raf) }
  }, [to, delay])
  return <>{v}{suffix}</>
}

/* ── the only moving element: a single vertical red line that draws itself ── */
function RedLine() {
  return (
    <motion.div
      className="absolute right-[20%] top-0 w-px h-full pointer-events-none z-0 hidden md:block"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: 'top', background: 'linear-gradient(to bottom, transparent 5%, #e5232c 30%, #e5232c 70%, transparent 95%)' }}
    />
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y1   = useTransform(scrollY, [0, 700], [0, 120])
  const fade = useTransform(scrollY, [0, 350], [1, 0])

  return (
    <section id="hero" className="min-h-screen bg-black flex flex-col relative overflow-hidden scroll-snap-section">

      {/* ── the single red vertical line ── */}
      <RedLine />

      {/* ── top nav ── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-between items-center px-8 md:px-16 py-8 relative z-20"
      >
        <img src="/anthill-logo.svg" alt="Anthill Ventures" className="h-8 w-auto opacity-80" />
        <div className="flex items-center gap-6">
          <span className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase hidden md:block">
            Intelligence Review
          </span>
          <div className="w-px h-4 bg-white/10 hidden md:block" />
          <span className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">
            2026
          </span>
        </div>
      </motion.header>

      {/* ── main content area ── */}
      <motion.div
        style={{ y: y1, opacity: fade }}
        className="flex-1 flex flex-col justify-center px-8 md:px-16 pb-16 relative z-10"
      >
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 overflow-hidden"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-[2px] bg-[#e5232c]" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-white/30 uppercase whitespace-nowrap">
              The Decade Report · 2020 — 2030
            </span>
          </div>
        </motion.div>

        {/* ── headline ── */}
        {/* The key creative choice: each word is a separate block with deliberate
            weight and opacity variation, creating a typographic poster effect.
            "AI" is the anchor — huge and white. Other words recede. */}
        <h1 className="mb-12 max-w-5xl">
          {[
            { text: 'AI',           size: 'text-[clamp(5rem,14vw,13rem)]', weight: 'font-black',  color: 'text-white',    delay: 0.4, leading: 'leading-[0.85]' },
            { text: 'Evolution',    size: 'text-[clamp(3rem,8vw,7.5rem)]',  weight: 'font-light',  color: 'text-white/25', delay: 0.55, leading: 'leading-[1]' },
            { text: '&',            size: 'text-[clamp(2rem,4vw,3.5rem)]',  weight: 'font-light',  color: 'text-[#e5232c]',delay: 0.7, leading: 'leading-[1.4]' },
            { text: 'Human',        size: 'text-[clamp(5rem,14vw,13rem)]', weight: 'font-black',  color: 'text-white',    delay: 0.8, leading: 'leading-[0.85]' },
            { text: 'Intervention', size: 'text-[clamp(3rem,8vw,7.5rem)]',  weight: 'font-light',  color: 'text-white/25', delay: 0.95, leading: 'leading-[1]' },
          ].map(({ text, size, weight, color, delay, leading }, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`block ${size} ${weight} ${color} ${leading} tracking-tight`}
            >
              {text}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-white/35 text-base md:text-[17px] font-medium leading-[1.7]">
            A decade that redefined humanity's relationship with artificial intelligence — 
            breakthroughs, regulations, risks, and the uncertain road ahead.
          </p>
        </motion.div>
      </motion.div>

      {/* ── bottom stats rail: full-bleed, stark ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-20 mt-auto shrink-0"
      >
        {/* top edge: a single sharp red line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#e5232c] to-transparent" />

        <div className="grid grid-cols-4">
          {[
            { val: 10,  suf: '',  label: 'Years' },
            { val: 40,  suf: '+', label: 'Milestones' },
            { val: 4,   suf: '',  label: 'Domains' },
            { val: null, display: '∞', label: 'Futures' },
          ].map((s, i) => (
            <div
              key={i}
              className="px-6 md:px-12 py-6 border-r border-white/[0.04] last:border-r-0 group hover:bg-white/[0.015] transition-colors duration-500"
            >
              <p className="text-lg md:text-xl font-black text-white/80 group-hover:text-white transition-colors tabular-nums">
                {s.val !== null ? <Count to={s.val} suffix={s.suf} delay={1.5 + i * 0.1} /> : s.display}
              </p>
              <p className="text-white/15 text-[9px] font-bold tracking-[0.3em] uppercase mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>


    </section>
  )
}
