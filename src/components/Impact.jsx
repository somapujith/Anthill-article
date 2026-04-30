import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const impacts = {
  positive: [
    { title: 'Medical Breakthroughs', description: 'AlphaFold solved protein folding — a 50-year problem — in months. AI accelerates drug discovery, diagnosis, and personalized treatment at scale.', metric: '200x', metricLabel: 'faster drug discovery' },
    { title: 'Scientific Discovery', description: 'AI systems model climate, simulate physics, and uncover biological patterns that would take human researchers decades to find manually.', metric: '40+', metricLabel: 'Nobel-adjacent AI discoveries' },
    { title: 'Economic Growth', description: 'New industries emerge, productivity gains compound, and sectors previously inaccessible to automation see radical efficiency improvements.', metric: '$4.4T', metricLabel: 'potential annual GDP boost' },
    { title: 'Global Accessibility', description: 'AI translation, real-time accessibility tools, and personalized education systems reach communities that historically lacked quality resources.', metric: '1B+', metricLabel: 'people newly reached' },
    { title: 'Creative Amplification', description: 'AI becomes a force multiplier for human creativity — enabling artists, writers, musicians, and developers to produce at unprecedented scale.', metric: '10x', metricLabel: 'creative output capacity' },
    { title: 'Climate Action', description: 'AI optimizes energy grids, discovers new materials for batteries and solar cells, and models climate systems to inform policy decisions.', metric: '30%', metricLabel: 'energy optimization potential' },
  ],
  negative: [
    { title: 'Job Displacement', description: 'Knowledge workers face automation at unprecedented scale. White-collar roles — legal, accounting, coding — are disrupted faster than new opportunities emerge.', metric: '85M', metricLabel: 'jobs disrupted by 2025' },
    { title: 'Wealth Concentration', description: 'AI infrastructure ownership concentrates economic power. The gap between AI-capable and AI-excluded populations widens dramatically and rapidly.', metric: 'Top 1%', metricLabel: 'capture most AI gains' },
    { title: 'Misinformation Crisis', description: 'Photorealistic deepfakes, AI-written propaganda, and synthetic media erode shared reality and democratic institutions at global scale.', metric: '4B+', metricLabel: 'people exposed to AI disinfo' },
    { title: 'Privacy Erosion', description: 'AI-powered surveillance normalizes biometric tracking. Anonymity in public spaces becomes technically impossible for ordinary citizens.', metric: '1B+', metricLabel: 'under AI surveillance' },
    { title: 'Autonomous Weapons', description: 'AI-powered military systems create new categories of conflict. Accountability gaps widen as machines make lethal decisions faster than humans can intervene.', metric: '50+', metricLabel: 'nations developing AI weapons' },
    { title: 'Alignment Risk', description: 'AI systems optimizing for proxy goals diverge from human values in subtle, hard-to-detect ways. At sufficient capability, this becomes an existential concern.', metric: 'Unknown', metricLabel: 'probability at AGI scale' },
  ]
}

export default function Impact() {
  const [view, setView] = useState('positive')
  const [hovered, setHovered] = useState(null)

  return (
    <section id="impact" className="bg-ant-black">
      <div className="px-8 md:px-16 pt-24 pb-16">
        <SectionHeader index="06" title="Impact & Risks" subtitle={"The Dual Nature\nof AI"} description="Tremendous benefits and serious risks exist in the same system." />

        {/* toggle */}
        <div className="flex gap-2 p-1.5 bg-[#000000]/80 backdrop-blur-xl border border-white/10 rounded-full mb-16 w-fit shadow-xl relative z-10">
          <button
            onClick={() => setView('positive')}
            className={`px-8 py-3.5 font-bold text-sm transition-all duration-300 rounded-full relative overflow-hidden group ${view === 'positive' ? 'text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'text-white/50 hover:text-white/90'}`}
          >
            {view === 'positive' && (
              <motion.div layoutId="impact-toggle" className="absolute inset-0 bg-white/10 border border-white/20 rounded-full" style={{ zIndex: -1 }} />
            )}
            <span className="relative z-10">Positive Impact</span>
          </button>
          <button
            onClick={() => setView('negative')}
            className={`px-8 py-3.5 font-bold text-sm transition-all duration-300 rounded-full relative overflow-hidden group ${view === 'negative' ? 'text-white shadow-[0_0_15px_rgba(229,35,44,0.4)]' : 'text-white/50 hover:text-white/90'}`}
          >
            {view === 'negative' && (
              <motion.div layoutId="impact-toggle" className="absolute inset-0 bg-ant-red/20 border border-ant-red/50 rounded-full" style={{ zIndex: -1 }} />
            )}
            <span className="relative z-10">Risks & Challenges</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
          >
            {/* Background glow based on view */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[120px] pointer-events-none transition-colors duration-1000 ${view === 'positive' ? 'bg-white/5' : 'bg-ant-red/10'}`} />

            {impacts[view].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`bg-[#000000]/80 backdrop-blur-xl border border-white/5 p-10 rounded-3xl transition-all duration-500 cursor-default relative overflow-hidden group shadow-lg ${hovered === i ? 'bg-white/[0.03] border-white/10 -translate-y-1 shadow-2xl' : ''}`}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${view === 'positive' ? 'from-white/5 to-transparent' : 'from-ant-red/10 to-transparent'}`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-1 mb-8 rounded-full transition-all duration-500 ${view === 'positive' ? 'bg-white/50 group-hover:bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-ant-red/50 group-hover:bg-ant-red shadow-[0_0_10px_rgba(229,35,44,0.5)]'} ${hovered === i ? 'h-16' : 'h-8'}`} />
                  
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className={`text-sm font-medium leading-relaxed mb-8 transition-colors duration-300 ${hovered === i ? 'text-white/90' : 'text-white/60'}`}>{item.description}</p>
                  
                  <div className="border-t border-white/10 pt-6 mt-auto">
                    <p className={`text-3xl font-bold drop-shadow-md ${view === 'positive' ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70' : 'text-transparent bg-clip-text bg-gradient-to-r from-ant-red to-ant-red/70'}`}>{item.metric}</p>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider mt-2">{item.metricLabel}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* quote block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ant-red/10 to-transparent rounded-3xl blur-xl" />
          <div className="relative border-l-4 border-ant-red bg-gradient-to-r from-[#000000]/90 to-transparent backdrop-blur-md rounded-r-3xl p-10 md:p-14">
            <p className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl text-white drop-shadow-md">
              "The outcome isn't determined by AI itself — it's determined by the choices humanity makes
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ant-red to-white ml-2">in the next five years.</span>"
            </p>
            <p className="text-white/50 text-sm font-bold tracking-widest uppercase mt-8 flex items-center gap-4">
              <span className="w-8 h-px bg-ant-red" />
              AI Evolution Research Article, 2026
            </p>
          </div>
        </motion.div>
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
