import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  {
    number: '01',
    title: 'Natural Language\nProcessing',
    short: 'NLP',
    description: 'Large language models redefined human-machine communication. From GPT-3 to reasoning models, AI now understands context, nuance, and intent at near-human levels.',
    tags: ['ChatGPT', 'Claude', 'Gemini', 'o1 Reasoning'],
    stat: '175B → 2T+',
    statLabel: 'Parameters (2020→2025)'
  },
  {
    number: '02',
    title: 'Computer\nVision',
    short: 'Vision',
    description: 'Image understanding and generation reached superhuman accuracy. Diffusion models produce photorealistic content at scale. Real-time detection reshapes industries.',
    tags: ['DALL-E 3', 'Stable Diffusion', 'Vision Transformers', 'Detection'],
    stat: '96.2%',
    statLabel: 'ImageNet accuracy (2024)'
  },
  {
    number: '03',
    title: 'Autonomous\nSystems',
    short: 'Autonomy',
    description: 'AI agents make independent decisions across complex environments — self-driving vehicles, autonomous research assistants, and multi-agent coordination systems.',
    tags: ['Self-Driving', 'Robotics', 'AI Agents', 'Multi-Agent'],
    stat: '10M+',
    statLabel: 'Autonomous miles driven'
  },
  {
    number: '04',
    title: 'Reasoning\n& Logic',
    short: 'Reasoning',
    description: 'Mathematical proofs, scientific discovery, and strategic planning become AI capabilities. Chain-of-thought enables complex multi-step problem solving with verifiable outputs.',
    tags: ['Math Proofs', 'Scientific Discovery', 'Planning', 'Causal Inference'],
    stat: '90th %ile',
    statLabel: 'Bar exam performance (2024)'
  },
]

export default function AIEvolution() {
  const [active, setActive] = useState(0)

  return (
    <section id="evolution" className="bg-ant-black relative overflow-hidden">
      <div className="px-8 md:px-16 pt-24 pb-16 relative z-10">
        <SectionHeader index="02" title="AI Evolution" subtitle={"Four Pillars of\nAdvancement"} description="The domains driving AI's exponential capability growth." />

        <div className="relative rounded-3xl p-[1px] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-ant-red/30 via-transparent to-ant-red/10 opacity-30 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse" />
          <div className="grid md:grid-cols-12 gap-0 relative bg-[#000000]/90 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl min-h-[520px]">
            {/* Glowing orbital dot effect */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-ant-red/10 blur-[100px] pointer-events-none" />

            {/* sidebar tabs */}
            <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-white/5 flex md:flex-col bg-black/40 relative z-10">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex-1 md:flex-none p-5 md:p-8 text-left border-b border-white/5 last:border-b-0 transition-all group/btn relative overflow-hidden ${active === i ? 'bg-white/[0.02]' : 'hover:bg-white/[0.02]'}`}
                >
                  {active === i && (
                    <motion.div layoutId="tab-bg-evo" className="absolute inset-0 bg-gradient-to-r from-ant-red/20 to-transparent border-l-2 border-ant-red" style={{ zIndex: -1 }} />
                  )}
                  <span className={`block text-[10px] font-bold tracking-[0.25em] uppercase mb-2 transition-colors duration-300 ${active === i ? 'text-ant-red drop-shadow-[0_0_8px_rgba(229,35,44,0.8)]' : 'text-ant-muted group-hover/btn:text-ant-red/70'}`}>{cat.number}</span>
                  <span className={`font-semibold text-sm md:text-base transition-colors duration-300 ${active === i ? 'text-white' : 'text-white/50 group-hover/btn:text-white/90'}`}>
                    <span className="md:hidden">{cat.short}</span>
                    <span className="hidden md:block whitespace-pre-line">{cat.title}</span>
                  </span>
                </button>
              ))}
            </div>

            {/* content panel */}
            <div className="md:col-span-9 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full p-10 md:p-14 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-muted to-white/30 uppercase mb-6">{categories[active].number} / 04</p>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 whitespace-pre-line text-white drop-shadow-md">{categories[active].title}</h3>
                    <p className="text-white/70 font-medium leading-relaxed text-lg max-w-xl">{categories[active].description}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-3 mb-10">
                      {categories[active].tags.map((tag, j) => (
                        <motion.span
                          key={j}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: j * 0.07 }}
                          className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/80 hover:border-ant-red/50 hover:bg-ant-red/10 hover:text-white transition-all duration-300 cursor-default shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="border-t border-white/5 pt-8 flex gap-12 relative">
                      <div>
                        <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ant-red to-white drop-shadow-[0_0_15px_rgba(229,35,44,0.4)]">{categories[active].stat}</p>
                        <p className="text-ant-muted text-xs font-semibold mt-2 tracking-wide uppercase">{categories[active].statLabel}</p>
                      </div>
                      <div className="w-px bg-gradient-to-b from-white/10 to-transparent" />
                      <div className="flex items-end gap-2">
                        {[40, 55, 62, 75, 88, 95].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: h * 0.6 }}
                            transition={{ delay: i * 0.06, duration: 0.4 }}
                            style={{ height: h * 0.6 }}
                            className={`w-5 rounded-t-sm ${i === 5 ? 'bg-gradient-to-t from-ant-red/50 to-ant-red shadow-[0_0_10px_rgba(229,35,44,0.5)]' : 'bg-white/10'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
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
