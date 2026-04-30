import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const predictions = [
  { year: 2025, title: 'Near-Human Reasoning', description: 'AI systems match expert-level reasoning in specialized domains. Bar exams, medical diagnosis, code review.', probability: 85, impact: 'High', impactColor: 'text-white' },
  { year: 2026, title: 'Autonomous Agents', description: 'Fully autonomous AI agents operate on complex multi-step tasks without human supervision.', probability: 75, impact: 'Critical', impactColor: 'text-yellow-400' },
  { year: 2027, title: 'AI-Assisted Science', description: 'AI systems co-author academic research and accelerate scientific discovery across fields.', probability: 70, impact: 'Transformative', impactColor: 'text-orange-400' },
  { year: 2028, title: 'Economic Disruption', description: 'AI automates 30–40% of current job functions. Labor markets structurally transform.', probability: 80, impact: 'Severe', impactColor: 'text-ant-red' },
  { year: 2029, title: 'AGI Possibility', description: 'First systems potentially demonstrating general artificial intelligence emerge from leading labs.', probability: 40, impact: 'Existential', impactColor: 'text-ant-red' },
  { year: 2030, title: 'New Era Begins', description: 'Human-AI civilization reaches a structural, irreversible transition point.', probability: 35, impact: 'Unknown', impactColor: 'text-ant-muted' }
]

const scenarios = [
  { name: 'Optimistic', points: ['Strong safety oversight globally enforced', 'Benefits widely distributed to all', 'Human-AI partnership model dominates', 'New jobs created at scale', 'International coordination achieved'] },
  { name: 'Realistic', points: ['Mixed outcomes across regions and sectors', 'Some inequality increase unavoidable', 'Gradual job transformation, not replacement', 'Imperfect but functional safety measures', 'Uneven global adoption and access'] },
  { name: 'Pessimistic', points: ['Uncontrolled AI expansion by bad actors', 'Extreme economic inequality surge', 'Mass job displacement without transition', 'AI misalignment risks materialize', 'Power concentrated in very few hands'] }
]

export default function FuturePredictions() {
  const [hoveredRow, setHoveredRow] = useState(null)
  const [selectedScenario, setSelectedScenario] = useState('Realistic')

  return (
    <section className="bg-ant-black">
      <div className="px-8 md:px-16 pt-24 pb-16">
        <SectionHeader index="05" title="Future Predictions" subtitle="What Comes Next" description="Key milestones projected between 2025 and 2030." />

        {/* milestone table */}
        <div className="rounded-3xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl mb-24 overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ant-red/10 blur-[100px] pointer-events-none" />
          
          {/* header */}
          <div className="grid grid-cols-12 border-b border-white/5 bg-black/40 relative z-10">
            <div className="col-span-2 p-6 text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-muted to-white/30 uppercase">Year</div>
            <div className="col-span-5 p-6 border-l border-white/5 text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-muted to-white/30 uppercase">Milestone</div>
            <div className="col-span-3 p-6 border-l border-white/5 text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-muted to-white/30 uppercase hidden md:block">Probability</div>
            <div className="col-span-5 md:col-span-2 p-6 border-l border-white/5 text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-muted to-white/30 uppercase text-right">Impact</div>
          </div>

          <div className="relative z-10 divide-y divide-white/5">
            {predictions.map((pred, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`grid grid-cols-12 transition-all duration-300 cursor-default group hover:bg-white/[0.02]`}
              >
                <div className="col-span-2 p-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-ant-red to-white drop-shadow-md text-lg">{pred.year}</div>
                <div className="col-span-5 p-6 border-l border-white/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-ant-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <p className="font-bold text-white mb-1 group-hover:text-ant-red transition-colors duration-300 relative z-10">{pred.title}</p>
                  <AnimatePresence>
                    {hoveredRow === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-white/60 text-sm font-medium mt-2 leading-relaxed relative z-10"
                      >
                        {pred.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="col-span-3 p-6 border-l border-white/5 hidden md:flex items-center">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pred.probability}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-ant-red/50 to-ant-red shadow-[0_0_10px_rgba(229,35,44,0.5)]"
                      />
                    </div>
                    <span className="text-white/80 text-sm font-bold shrink-0">{pred.probability}%</span>
                  </div>
                </div>
                <div className={`col-span-5 md:col-span-2 p-6 border-l border-white/5 font-bold text-right flex items-center justify-end ${pred.impactColor} drop-shadow-md`}>
                  {pred.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* scenarios */}
        <h3 className="text-3xl font-bold mb-10 text-white drop-shadow-md">Possible Futures — Choose a Scenario</h3>
        
        <div className="relative rounded-3xl p-[1px] mb-8 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-ant-red/30 via-transparent to-ant-red/30 opacity-40 group-hover:opacity-80 transition-opacity duration-1000 animate-pulse" />
          <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {scenarios.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setSelectedScenario(s.name)}
                  className={`p-10 text-left transition-all duration-500 relative overflow-hidden group/btn ${selectedScenario === s.name ? 'bg-white/[0.02]' : 'hover:bg-white/[0.02]'}`}
                >
                  {selectedScenario === s.name && (
                    <motion.div layoutId="scenario-bg" className="absolute inset-0 bg-gradient-to-b from-ant-red/10 to-transparent border-t-2 border-ant-red" style={{ zIndex: -1 }} />
                  )}
                  <div className={`w-12 h-1 mb-8 rounded-full transition-all duration-500 ${selectedScenario === s.name ? 'bg-ant-red shadow-[0_0_10px_rgba(229,35,44,0.8)]' : 'bg-white/10 group-hover/btn:bg-white/30'}`} />
                  <p className={`text-2xl font-bold transition-colors duration-300 ${selectedScenario === s.name ? 'text-white' : 'text-white/60 group-hover/btn:text-white/90'}`}>{s.name}</p>
                  <p className={`text-xs font-bold tracking-widest uppercase mt-3 transition-colors duration-300 ${selectedScenario === s.name ? 'text-ant-red' : 'text-white/30 group-hover/btn:text-white/50'}`}>
                    {selectedScenario === s.name ? 'Active scenario' : 'Select →'}
                  </p>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {scenarios.filter(s => s.name === selectedScenario).map(s => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black/40 border-t border-white/5 p-10 md:p-14 relative"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-ant-red/5 blur-[80px] pointer-events-none" />
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 relative z-10">
                    {s.points.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex gap-5 group/item cursor-default"
                      >
                        <span className="text-ant-red font-bold shrink-0 mt-0.5 group-hover/item:text-white transition-colors duration-300 text-lg">0{i + 1}</span>
                        <span className="text-white/80 font-medium leading-snug group-hover/item:text-white transition-colors duration-300">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
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
