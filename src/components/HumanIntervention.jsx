import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const interventions = [
  {
    number: '01',
    category: 'AI Ethics',
    icon: '◎',
    items: ['Bias detection & mitigation frameworks', 'Fairness standards in AI systems', 'Transparency & explainability mandates', 'Privacy-preserving AI techniques', 'Data governance & consent protocols'],
  },
  {
    number: '02',
    category: 'Government Regulation',
    icon: '◻',
    items: ['EU AI Act (2024) — comprehensive framework', 'Biden Executive Order on AI safety', 'Data protection & privacy laws', 'AI liability legal frameworks', 'Algorithmic auditing requirements'],
  },
  {
    number: '03',
    category: 'AI Safety Research',
    icon: '△',
    items: ['AGI safety & alignment research', 'AI interpretability & transparency', 'Robustness & adversarial testing', 'Constitutional AI training', 'Safety certification systems'],
  }
]

const comparisonData = [
  { aspect: 'Oversight', uncontrolled: 'None', controlled: 'Comprehensive' },
  { aspect: 'Transparency', uncontrolled: 'Black box', controlled: 'Explainable' },
  { aspect: 'Safety', uncontrolled: 'High risk', controlled: 'Mitigated' },
  { aspect: 'Bias', uncontrolled: 'Unchecked', controlled: 'Monitored' },
  { aspect: 'Jobs Impact', uncontrolled: 'Chaotic', controlled: 'Managed' },
  { aspect: 'Speed', uncontrolled: 'Unrestrained', controlled: 'Sustainable' },
]

export default function HumanIntervention() {
  const [active, setActive] = useState(0)
  const [showComparison, setShowComparison] = useState(false)

  return (
    <section className="bg-ant-black relative">
      <div className="px-8 md:px-16 pt-24 pb-16">
        <SectionHeader index="03" title="Human Intervention" subtitle={"Society's Response\nto AI Growth"} description="How governments, researchers, and institutions shape AI's trajectory." />

        {/* 3-column interactive cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 relative">
          {interventions.map((int, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(active === i ? -1 : i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`text-left p-10 transition-all duration-500 group border rounded-2xl relative overflow-hidden ${
                active === i 
                  ? 'bg-gradient-to-br from-ant-red/20 to-black border-ant-red/50 shadow-[0_0_30px_rgba(229,35,44,0.15)]' 
                  : 'bg-[#000000] border-white/5 hover:border-white/10 hover:bg-[#111]'
              }`}
            >
              {/* Background glow for active state */}
              {active === i && (
                <div className="absolute inset-0 bg-ant-red/10 blur-3xl pointer-events-none" />
              )}
              
              <div className="flex items-start justify-between mb-8 relative z-10">
                <span className={`text-2xl transition-colors duration-500 ${active === i ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'text-ant-red group-hover:text-white'}`}>{int.icon}</span>
                <span className={`text-[10px] font-semibold tracking-[0.25em] transition-colors duration-500 ${active === i ? 'text-white/80' : 'text-ant-muted'}`}>{int.number}</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 relative z-10 transition-colors duration-500 ${active === i ? 'text-white' : 'text-white/90'}`}>{int.category}</h3>
              <p className={`text-sm font-medium relative z-10 transition-colors duration-500 ${active === i ? 'text-ant-red' : 'text-ant-muted group-hover:text-white/50'}`}>
                {active === i ? 'Collapse ←' : 'Explore →'}
              </p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active >= 0 && interventions[active] && (
            <motion.div
              key={active}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-16"
            >
              <div className="relative rounded-2xl overflow-hidden p-[1px] group">
                <div className="absolute inset-0 bg-gradient-to-r from-ant-red/0 via-ant-red/40 to-ant-red/0 opacity-30 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse" />
                <div className="relative bg-[#0d0d0d]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-10 shadow-2xl">
                  {/* Glowing orbital dot effect */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-ant-red/20 blur-[50px] rounded-full pointer-events-none" />
                  
                  <p className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 text-[10px] font-bold tracking-[0.4em] uppercase mb-10">
                    {interventions[active].category}
                    <span className="absolute -bottom-2 left-0 w-8 h-px bg-ant-red" />
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 relative z-10">
                    {interventions[active].items.map((item, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: j * 0.07 }}
                        className="flex gap-5 group/item cursor-default"
                      >
                        <span className="text-ant-red font-bold text-sm shrink-0 group-hover/item:text-white transition-colors duration-300">0{j + 1}</span>
                        <span className="text-white/80 font-medium text-sm leading-snug group-hover/item:text-white transition-colors duration-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* comparison toggle */}
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="group flex items-center gap-6 mb-8 w-full mt-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 font-bold text-xl group-hover:from-ant-red group-hover:to-ant-red/70 transition-all duration-300">
            Uncontrolled vs Controlled AI
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent group-hover:from-ant-red/30 transition-all duration-300" />
          <motion.div
            animate={{ rotate: showComparison ? 45 : 0 }}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-[#000000] text-ant-red text-2xl group-hover:border-ant-red/50 group-hover:shadow-[0_0_15px_rgba(229,35,44,0.3)] transition-all duration-300"
          >
            +
          </motion.div>
        </button>

        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="rounded-2xl border border-white/5 overflow-hidden shadow-2xl bg-[#000000]/50 backdrop-blur-xl">
                <div className="grid md:grid-cols-12 bg-black/40 border-b border-white/5">
                  <div className="md:col-span-4 p-6">
                    <p className="text-ant-muted text-[10px] font-bold tracking-[0.3em] uppercase">Dimension</p>
                  </div>
                  <div className="md:col-span-4 p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-ant-red/10 to-transparent opacity-20 pointer-events-none" />
                    <p className="text-ant-red text-[10px] font-bold tracking-[0.3em] uppercase relative z-10">Uncontrolled</p>
                  </div>
                  <div className="md:col-span-4 p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                    <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase relative z-10">Controlled</p>
                  </div>
                </div>

                <div className="divide-y divide-white/5">
                  {comparisonData.map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="grid md:grid-cols-12 group hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="md:col-span-4 p-5 font-semibold text-white/90 border-r border-white/5">{row.aspect}</div>
                      <div className="md:col-span-4 p-5 font-semibold text-ant-red/60 border-r border-white/5 group-hover:text-ant-red transition-colors">{row.uncontrolled}</div>
                      <div className="md:col-span-4 p-5 font-semibold text-white/50 group-hover:text-white transition-colors">{row.controlled}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
