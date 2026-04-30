import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const timelineData = [
  { year: 2020, title: 'GPT-3 Released', color: '#333', breakthroughs: ['OpenAI releases GPT-3 — 175B parameters', 'Few-shot learning emerges as paradigm', 'DALL-E image generation prototype'], intervention: ['No major AI regulation frameworks', 'Early AI ethics discussions begin'] },
  { year: 2021, title: 'Multimodal Emergence', color: '#3a2020', breakthroughs: ['DALL-E image generation goes public', 'Diffusion models rise rapidly', 'Codex powers GitHub Copilot'], intervention: ['EU AI Act discussions begin', 'First AI ethics guidelines proposed globally'] },
  { year: 2022, title: 'ChatGPT Era Begins', color: '#4a1010', breakthroughs: ['ChatGPT — 100M users in 60 days', 'GPT-3.5 training optimization', 'Stable Diffusion open-sourced'], intervention: ['OpenAI safety research scales', 'Public concerns about AI risks surge'] },
  { year: 2023, title: 'Generative AI Boom', color: '#5a0a0a', breakthroughs: ['GPT-4 released (multimodal)', 'Claude, Gemini, Llama emerge', 'Autonomous AI agents debut'], intervention: ['EU AI Act passed', 'Biden Executive Order on AI', 'Open letter: pause giant AI experiments'] },
  { year: 2024, title: 'Reasoning & Regulation', color: '#6a0808', breakthroughs: ['o1 reasoning models released', 'Custom AI models widespread', 'Real-time voice AI deployed'], intervention: ['Global AI governance frameworks', 'Safety-focused labs receive major funding', 'AI transparency requirements enacted'] },
  { year: 2025, title: 'Intelligence Scaling', color: '#7a0606', breakthroughs: ['Near-human reasoning benchmarks reached', 'Real-time adaptation systems', 'Cross-domain transfer learning'], intervention: ['International AI safety standards', 'Compute oversight begins', 'AI impact assessments mandatory'] },
  { year: 2026, title: 'Autonomous Agents', color: '#8a0505', breakthroughs: ['Fully autonomous agents deployed at scale', 'AI scientists publish research papers', 'Multi-agent coordination systems'], intervention: ['AI workforce transition programs', 'AI liability legal frameworks', 'Safety certification requirements'] },
  { year: 2027, title: 'Human-AI Partnership', color: '#9a0404', breakthroughs: ['Hybrid human-AI research teams', 'AI explainability standards mature', 'Deeply personalized AI assistants'], intervention: ['AI rights discussions begin', 'Global AI safety treaties proposed', 'Mandatory AI impact reporting'] },
  { year: 2028, title: 'Near AGI Threshold', color: '#aa0303', breakthroughs: ['Systems approach general reasoning', 'AI bootstrapping accelerates improvements', 'Scientific discovery acceleration'], intervention: ['AGI safety research becomes urgent', 'International oversight bodies form', 'AI pause debates intensify'] },
  { year: 2029, title: 'Critical Inflection', color: '#c00202', breakthroughs: ['Transformative AI systems emerge', 'AI-driven innovation cycle begins', 'Economic transformation visible'], intervention: ['Strict compute limits debated', 'AI alignment research priority', 'Global coordination protocols signed'] },
  { year: 2030, title: 'New Era', color: '#e5232c', breakthroughs: ['AGI possibility high', 'Human civilization transforms', 'New intelligence paradigm begins'], intervention: ['Humanity-AI alignment critical', 'Global AI governance essential', 'Decisions made now echo for generations'] }
]

export default function Timeline() {
  const [selected, setSelected] = useState(2022)
  const current = timelineData.find(d => d.year === selected)
  const idx = timelineData.findIndex(d => d.year === selected)

  return (
    <section id="timeline" className="bg-ant-black relative overflow-hidden scroll-snap-section">
      {/* large year watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-semibold text-white/[0.02] select-none pointer-events-none leading-none pr-8">
        {selected}
      </div>

      <div className="px-8 md:px-16 pt-24 pb-16 relative z-10">
        <SectionHeader index="01" title="Timeline" subtitle="A Decade of Progress" description="Select a year — explore what changed in AI and how humanity responded." />

        {/* horizontal year scrubber */}
        <div className="relative mb-20 py-4">
          {/* progress track */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 rounded-full overflow-hidden" />
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-ant-red via-ant-cyan to-ant-red -translate-y-1/2 rounded-full shadow-[0_0_15px_rgba(229,35,44,0.6)] origin-left"
            animate={{ width: `${(idx / (timelineData.length - 1)) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <div className="relative flex justify-between items-center z-10">
            {timelineData.map((item, i) => (
              <button
                key={item.year}
                onClick={() => setSelected(item.year)}
                className="flex flex-col items-center gap-4 group relative"
              >
                <motion.div
                  animate={{
                    width: selected === item.year ? 20 : 12,
                    height: selected === item.year ? 20 : 12,
                    backgroundColor: selected === item.year ? '#fff' : i <= idx ? '#e5232c' : '#1e1e1e',
                  }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-full flex-shrink-0 transition-shadow duration-300 ${selected === item.year ? 'shadow-[0_0_20px_#fff]' : i <= idx ? 'shadow-[0_0_10px_#e5232c]' : 'group-hover:bg-white/20'}`}
                />
                <span className={`absolute top-8 text-[11px] font-bold tracking-widest transition-all duration-300 hidden md:block ${selected === item.year ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-110' : i <= idx ? 'text-ant-red' : 'text-white/30 group-hover:text-white/70'}`}>
                  {item.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* mobile year pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-12 md:hidden">
          {timelineData.map((item) => (
            <button
              key={item.year}
              onClick={() => setSelected(item.year)}
              className={`flex-shrink-0 px-4 py-2 text-xs font-semibold border transition-colors ${selected === item.year ? 'bg-ant-red border-ant-red text-white' : 'border-ant-border text-ant-muted'}`}
            >
              {item.year}
            </button>
          ))}
        </div>

        {/* content panel */}
        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={current.year}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-3xl overflow-hidden p-[1px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-ant-red/30 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="grid md:grid-cols-12 gap-0 relative bg-[#000000] border border-white/5 rounded-3xl overflow-hidden shadow-2xl group/timeline">
                  {/* Background Image with hover parallax/opacity */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-black/80 z-10 transition-opacity duration-700 group-hover/timeline:bg-black/60" />
                    <motion.img 
                      src="/images/timeline_bg.png" 
                      className="w-full h-full object-cover mix-blend-luminosity opacity-20 group-hover/timeline:opacity-40 transition-all duration-700" 
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  {/* Glowing orbital dot effect */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-ant-red/10 blur-[100px] pointer-events-none z-0" />
                  
                  {/* year column */}
                  <div className="md:col-span-3 p-10 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between relative z-10"
                    style={{ background: `linear-gradient(135deg, rgba(0,0,0,0) 0%, ${current.color}11 100%)` }}
                  >
                    <div>
                      <p className="text-[clamp(4rem,8vw,6rem)] font-bold text-transparent bg-clip-text bg-gradient-to-b from-ant-red to-ant-red/40 leading-none mb-4 drop-shadow-[0_0_15px_rgba(229,35,44,0.3)]">{current.year}</p>
                      <p className="text-xl font-semibold text-white/90">{current.title}</p>
                    </div>
                    <div className="mt-8 hidden md:block">
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelected(Math.max(2020, selected - 1))}
                          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-[#000000] text-ant-muted text-sm hover:border-ant-red/50 hover:text-ant-red hover:shadow-[0_0_15px_rgba(229,35,44,0.3)] transition-all duration-300"
                        >
                          ←
                        </button>
                        <button
                          onClick={() => setSelected(Math.min(2030, selected + 1))}
                          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-[#000000] text-ant-muted text-sm hover:border-ant-red/50 hover:text-ant-red hover:shadow-[0_0_15px_rgba(229,35,44,0.3)] transition-all duration-300"
                        >
                          →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* breakthroughs */}
                  <div className="md:col-span-5 p-10 border-b md:border-b-0 md:border-r border-white/5 relative z-10 bg-black/20">
                    <p className="text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-muted to-white/30 uppercase mb-8">Breakthroughs</p>
                    <ul className="space-y-6">
                      {current.breakthroughs.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex gap-5 group/item cursor-default"
                        >
                          <span className="text-ant-red font-bold shrink-0 mt-0.5 group-hover/item:text-white transition-colors duration-300">0{i + 1}</span>
                          <span className="text-white/80 font-medium leading-snug group-hover/item:text-white transition-colors duration-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* intervention */}
                  <div className="md:col-span-4 p-10 relative z-10 bg-black/40">
                    <p className="text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-muted to-white/30 uppercase mb-8">Human Intervention</p>
                    <ul className="space-y-6">
                      {current.intervention.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.1 }}
                          className="flex gap-5 group/item cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 mt-2 group-hover/item:bg-ant-red transition-colors duration-300" />
                          <span className="text-ant-muted font-medium leading-snug group-hover/item:text-white/80 transition-colors duration-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
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
        className="text-4xl md:text-6xl font-semibold mb-4"
      >
        {subtitle}
      </motion.h2>
      {description && <p className="text-ant-muted font-semibold text-lg">{description}</p>}
    </div>
  )
}
