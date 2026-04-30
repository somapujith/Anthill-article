import { motion } from 'framer-motion'

const letters = "AI Evolution &\nHuman Intervention".split('')

export default function Hero() {
  return (
    <section className="min-h-screen bg-ant-black flex flex-col justify-between px-8 md:px-16 pt-10 pb-12 relative overflow-hidden">

      {/* grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[33%] w-px h-full bg-ant-border/50" />
        <div className="absolute top-0 right-[66%] w-px h-full bg-ant-border/50" />
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
      <div className="flex-1 flex flex-col justify-center relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[11px] font-semibold tracking-[0.3em] text-ant-red uppercase mb-10 flex items-center gap-4"
        >
          <span className="w-8 h-px bg-ant-red inline-block" />
          2020 — 2030
        </motion.div>

        <h1 className="text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.92] tracking-tight mb-10">
          {["AI Evolution", "&", "Human", "Intervention"].map((word, wi) => (
            <motion.span
              key={wi}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + wi * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`block ${word === '&' ? 'text-ant-red' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-ant-muted text-lg font-semibold max-w-xl leading-relaxed"
        >
          A decade that redefined humanity's relationship with artificial intelligence —
          breakthroughs, regulations, risks, and the uncertain road ahead.
        </motion.p>
      </div>

      {/* bottom stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="relative z-10 rounded-3xl p-[1px] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ant-red/20 via-transparent to-ant-red/20 opacity-50" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden divide-x divide-y md:divide-y-0 divide-white/5 shadow-2xl">
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
