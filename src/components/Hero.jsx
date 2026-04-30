import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

const letters = "AI Evolution &\nHuman Intervention".split('')

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  
  // Parallax on scroll
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  // Mouse tracking parallax
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 40
      const y = (e.clientY / innerHeight - 0.5) * 40
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="min-h-screen bg-ant-black flex flex-col justify-between px-8 md:px-16 pt-10 pb-12 relative overflow-hidden">

      {/* Background Image */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute -inset-10 pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img src="/images/hero_bg.png" alt="Neural Core" className="w-full h-full object-cover" />
      </motion.div>

      {/* dynamic grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <motion.div 
          className="absolute top-0 right-[33%] w-[2px] h-full bg-gradient-to-b from-transparent via-ant-cyan to-transparent opacity-50"
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute top-0 right-[66%] w-[2px] h-full bg-gradient-to-b from-transparent via-ant-red to-transparent opacity-50"
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 2 }}
        />
      </div>

      {/* top bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center relative z-10"
      >
        <img src="/anthill-logo.svg" alt="Anthill Ventures" className="h-9 w-auto" />
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-ant-red"
          />
          <span className="text-ant-muted text-[11px] font-semibold tracking-[0.25em] uppercase">Research Article · 2026</span>
        </div>
      </motion.div>

      {/* main title */}
      <motion.div style={{ y: y1, opacity }} className="flex-1 flex flex-col justify-center relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[11px] font-bold tracking-[0.3em] text-ant-cyan uppercase mb-10 flex items-center gap-4 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
        >
          <span className="w-8 h-px bg-ant-cyan inline-block shadow-[0_0_10px_#00f0ff]" />
          2020 — 2030
        </motion.div>

        <motion.h1 
          className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.92] tracking-tight mb-10 relative perspective-1000"
          style={{ x: mouseX, y: mouseY }}
        >
          {["AI Evolution", "&", "Human", "Intervention"].map((word, wi) => (
            <motion.span
              key={wi}
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.4 + wi * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`block ${word === '&' ? 'text-transparent bg-clip-text bg-gradient-to-r from-ant-red to-ant-cyan drop-shadow-[0_0_20px_rgba(229,35,44,0.3)]' : 'text-white drop-shadow-lg'}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-white/60 text-lg font-medium max-w-xl leading-relaxed"
        >
          A decade that redefined humanity's relationship with artificial intelligence —
          breakthroughs, regulations, risks, and the uncertain road ahead.
        </motion.p>
      </motion.div>

      {/* bottom stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="relative z-10 rounded-3xl p-[1px] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ant-red/20 via-transparent to-ant-red/20 opacity-50" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 relative bg-[#000000]/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden divide-x divide-y md:divide-y-0 divide-white/5 shadow-2xl">
          {[
            { value: '10', label: 'Years Covered' },
            { value: '40+', label: 'AI Milestones' },
            { value: '4', label: 'Core Domains' },
            { value: '∞', label: 'Possible Futures' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 group hover:bg-white/[0.03] transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-ant-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 mb-2 group-hover:from-ant-red group-hover:to-white transition-all duration-300 drop-shadow-md">{stat.value}</p>
              <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-white/70 transition-colors duration-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 right-16 hidden md:flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-ant-red" />
          <span className="text-ant-red text-[10px] font-semibold tracking-[0.3em] uppercase rotate-90 origin-center mt-2">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
