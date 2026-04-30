import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const getImpact = (level) => {
  if (level < 20) return { title: 'Uncontrolled Explosion', tag: 'Critical Risk', tagRed: true, outcomes: ['Rapid, unpredictable AI advancement', 'High probability of misalignment events', 'Massive unmanaged economic disruption', 'Surveillance and misuse maximized', 'AGI emergence possible by 2028', 'Outcome: uncertain, potentially catastrophic'] }
  if (level < 40) return { title: 'Loose Oversight', tag: 'High Risk', tagRed: true, outcomes: ['Fast advancement with minimal safeguards', 'Safety research chronically underfunded', 'Regulatory gaps exploited at scale', 'Limited international coordination', 'Benefits concentrated among few', 'Outcome: high inequality, elevated risk'] }
  if (level < 60) return { title: 'Balanced Governance', tag: 'Optimal Range', tagRed: false, outcomes: ['Thoughtful, steady capability growth', 'Safety research well-resourced globally', 'Effective regulatory frameworks active', 'International coordination succeeding', 'Managed economic transition underway', 'Outcome: best achievable scenario'] }
  if (level < 80) return { title: 'Strong Control', tag: 'Conservative', tagRed: false, outcomes: ['Deliberate, careful AI development', 'Comprehensive mandatory safety measures', 'Strict international oversight', 'Progress slower but significantly safer', 'Equitable distribution of benefits', 'Outcome: safe but limits upside'] }
  return { title: 'Maximum Restriction', tag: 'Extreme', tagRed: false, outcomes: ['AI development severely constrained', 'International AI pause enforced', 'Extreme caution dominates policy', 'Minimal risk, minimal benefit', 'Significant innovation opportunity cost', 'Outcome: safest, but very high cost'] }
}

const metrics = [
  { label: 'Innovation Speed', desc: 'Rate of new AI capabilities', fn: (l) => 100 - l },
  { label: 'Safety Level', desc: 'Misalignment risk reduction', fn: (l) => l },
  { label: 'Equity of Access', desc: 'Distribution of AI benefits', fn: (l) => Math.min(100, 20 + l * 0.8) },
  { label: 'Disruption Risk', desc: 'Economic & social upheaval', fn: (l) => Math.max(0, 100 - l) },
]

export default function Interactive() {
  const [level, setLevel] = useState(50)
  const [revealed, setRevealed] = useState(false)
  const impact = getImpact(level)

  return (
    <section className="bg-ant-black">
      <div className="px-8 md:px-16 pt-24 pb-16">
        <SectionHeader index="07" title="Simulation" subtitle="What If?" description="Adjust the governance level — model different AI futures and their projected consequences." />

        <div className="relative rounded-3xl p-[1px] overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-br from-ant-red/30 via-transparent to-ant-red/10 opacity-30 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse" />
          
          <div className="grid md:grid-cols-12 gap-0 relative bg-[#000000]/90 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden">
            {/* Glowing orbital dot effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-ant-red/10 blur-[100px] pointer-events-none" />

            {/* controls */}
            <div className="md:col-span-5 p-10 md:p-14 bg-black/40 border-b md:border-b-0 md:border-r border-white/5 relative z-10">
              <p className="text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-muted to-white/30 uppercase mb-10">Governance Level</p>

              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-[clamp(3rem,8vw,5rem)] font-bold text-transparent bg-clip-text bg-gradient-to-br from-ant-red to-white drop-shadow-[0_0_15px_rgba(229,35,44,0.4)] leading-none">{level}</p>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider mt-2">out of 100</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-lg">{level < 20 ? 'Uncontrolled' : level < 40 ? 'Loose' : level < 60 ? 'Balanced' : level < 80 ? 'Strong' : 'Maximum'}</p>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider mt-1">Current mode</p>
                </div>
              </div>

              <div className="relative w-full h-2 rounded-full bg-white/5 mb-14 overflow-visible">
                <input
                  type="range" min="0" max="100" value={level}
                  onChange={(e) => { setLevel(parseInt(e.target.value)); setRevealed(false) }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div 
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-ant-red/50 to-ant-red shadow-[0_0_10px_rgba(229,35,44,0.5)] pointer-events-none"
                  style={{ width: `${level}%` }}
                />
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] border-2 border-ant-red pointer-events-none transition-transform"
                  style={{ left: `calc(${level}% - 10px)` }}
                />
              </div>

              <div className="space-y-8 mb-12">
                {metrics.map((m, i) => {
                  const val = Math.round(m.fn(level))
                  return (
                    <div key={i} className="group/metric">
                      <div className="flex justify-between items-baseline mb-3">
                        <div>
                          <p className="text-sm font-bold text-white group-hover/metric:text-ant-red transition-colors">{m.label}</p>
                          <p className="text-[10px] font-bold tracking-wide text-white/40 mt-1">{m.desc}</p>
                        </div>
                        <span className="text-white/90 font-bold">{val}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          animate={{ width: `${val}%` }}
                          transition={{ duration: 0.4 }}
                          className={`h-full ${val > 50 ? 'bg-gradient-to-r from-white/20 to-white/60' : 'bg-gradient-to-r from-ant-red/40 to-ant-red shadow-[0_0_8px_rgba(229,35,44,0.5)]'}`}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              <button
                onClick={() => setRevealed(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-ant-red to-ant-red/80 hover:from-ant-red hover:to-ant-red text-white font-bold transition-all shadow-[0_0_20px_rgba(229,35,44,0.3)] hover:shadow-[0_0_30px_rgba(229,35,44,0.5)] active:scale-[0.98] text-sm tracking-wider uppercase"
              >
                GENERATE FORECAST →
              </button>
            </div>

            {/* output */}
            <div className="md:col-span-7 bg-transparent p-10 md:p-14 relative overflow-hidden z-10 flex flex-col justify-center">
              {/* large bg level */}
              <div className="absolute -right-10 -bottom-10 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none leading-none tracking-tighter">
                {level}
              </div>

              <AnimatePresence mode="wait">
                {!revealed ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col justify-center items-center text-center min-h-[400px] relative z-10"
                  >
                    <div className="p-8 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-ant-cyan/10 animate-pulse mix-blend-overlay" />
                      <div className="flex gap-2 items-end h-12 relative z-10">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div 
                            key={i} 
                            className={`w-3 rounded-t-sm transition-all duration-300 ${i <= Math.ceil(level / 20) ? 'bg-gradient-to-t from-ant-cyan/50 to-ant-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]' : 'bg-white/10'}`}
                            style={{ height: `${i * 20}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/80 font-bold text-xl mb-3">Set governance level, then generate forecast.</p>
                    <p className="text-white/40 font-medium text-sm">Drag the slider to explore different futures.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, filter: 'blur(10px) hue-rotate(90deg)' }}
                    animate={{ opacity: 1, filter: 'blur(0px) hue-rotate(0deg)' }}
                    exit={{ opacity: 0, filter: 'blur(10px) hue-rotate(-90deg)' }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="min-h-[400px] relative z-10"
                  >
                    <div className="flex items-start justify-between mb-12">
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-cyan to-white/30 uppercase mb-3">Projected Scenario</p>
                        <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md leading-tight">{impact.title}</h3>
                      </div>
                      <span className={`text-[10px] font-bold tracking-[0.2em] uppercase rounded-full px-5 py-2.5 shadow-lg backdrop-blur-md border ${impact.tagRed ? 'border-ant-red/50 bg-ant-red/10 text-ant-red shadow-[0_0_15px_rgba(229,35,44,0.3)]' : 'border-ant-cyan/50 bg-ant-cyan/10 text-ant-cyan shadow-[0_0_15px_rgba(0,240,255,0.3)]'}`}>
                        {impact.tag}
                      </span>
                    </div>

                    <ul className="space-y-6">
                      {impact.outcomes.map((outcome, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20, color: '#00f0ff' }}
                          animate={{ opacity: 1, x: 0, color: i === impact.outcomes.length - 1 ? (impact.tagRed ? '#e5232c' : '#00f0ff') : '#e6e6e6' }}
                          transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                          className={`flex gap-5 font-bold ${i === impact.outcomes.length - 1 ? 'mt-10 pt-8 border-t border-white/10 text-xl drop-shadow-md' : 'text-lg'}`}
                        >
                          <span className={`shrink-0 mt-0.5 ${impact.tagRed ? 'text-ant-red' : 'text-ant-cyan'}`}>→</span>
                          {outcome}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ index, title, subtitle, description }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-[11px] font-semibold tracking-[0.3em] text-ant-red uppercase">{index}</span>
        <div className="flex-1 h-px bg-ant-border" />
        <span className="text-[11px] font-semibold tracking-[0.3em] text-ant-muted uppercase">{title}</span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-semibold mb-4 whitespace-pre-line"
      >
        {subtitle}
      </motion.h2>
      {description && <p className="text-ant-muted font-semibold text-lg">{description}</p>}
    </div>
  )
}
