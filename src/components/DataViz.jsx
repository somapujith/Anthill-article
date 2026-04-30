import { motion } from 'framer-motion'
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ComposedChart, Area, AreaChart
} from 'recharts'

const investmentData = [
  { year: '2020', funding: 2.1 },
  { year: '2021', funding: 3.5 },
  { year: '2022', funding: 5.2 },
  { year: '2023', funding: 8.4 },
  { year: '2024', funding: 12.1 },
  { year: '2025', funding: 15.8 }
]

const modelScalingData = [
  { year: '2020', parameters: 175, safety: 45 },
  { year: '2021', parameters: 280, safety: 62 },
  { year: '2022', parameters: 540, safety: 78 },
  { year: '2023', parameters: 1000, safety: 95 },
  { year: '2024', parameters: 1500, safety: 120 },
  { year: '2025', parameters: 2200, safety: 150 }
]

const adoptionData = [
  { category: 'Enterprise', '2022': 12, '2023': 28, '2024': 52 },
  { category: 'Consumer', '2022': 5, '2023': 18, '2024': 42 },
  { category: 'Research', '2022': 35, '2023': 58, '2024': 78 },
  { category: 'Govt', '2022': 8, '2023': 15, '2024': 35 }
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#0a0a0a] border border-[#222] p-4 text-xs font-semibold">
      <p className="text-[#888] mb-3 tracking-widest uppercase text-[10px]">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color }} className="mb-1">{entry.name}: <span className="text-white">{entry.value}</span></p>
      ))}
    </div>
  )
}

export default function DataViz() {
  return (
    <section className="bg-ant-black">
      <div className="px-8 md:px-16 pt-24 pb-16">
        <SectionHeader index="04" title="Data" subtitle="Numbers Behind\nthe Story" description="Quantifying AI's exponential growth trajectory." />

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {/* chart 1 - area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ant-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-ant-red/10 blur-[50px] pointer-events-none" />
            <div className="flex flex-col h-full relative z-10">
              <div className="mb-10">
                <p className="text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-red to-ant-red/50 uppercase mb-3">Chart 01</p>
                <h3 className="text-xl font-bold text-white mb-2">AI Investment Growth</h3>
                <p className="text-white/50 text-xs font-semibold">Global funding in billions USD (2020–2025)</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ant-red to-white/80 drop-shadow-[0_0_10px_rgba(229,35,44,0.3)]">$15.8B</p>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider mt-1">2025 projection</p>
              </div>
              <div className="mt-auto">
                <ResponsiveContainer width="100%" height={180}>
                  <AreaChart data={investmentData}>
                    <defs>
                      <linearGradient id="fundingGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00f0ff" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#00f0ff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="1 6" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="year" stroke="transparent" tick={{ fill: 'rgba(255,255,255,0.3)', fontFamily: 'Archivo', fontWeight: 600, fontSize: 10 }} tickLine={false} />
                    <YAxis stroke="transparent" tick={{ fill: 'rgba(255,255,255,0.3)', fontFamily: 'Archivo', fontWeight: 600, fontSize: 10 }} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="funding" stroke="#00f0ff" strokeWidth={3} fill="url(#fundingGrad)" name="Funding ($B)" dot={{ fill: '#00f0ff', r: 0 }} activeDot={{ r: 6, fill: '#fff', stroke="#00f0ff", strokeWidth: 2 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* chart 2 - bar + line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-[50px] pointer-events-none" />
            <div className="flex flex-col h-full relative z-10">
              <div className="mb-10">
                <p className="text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-ant-muted to-white/30 uppercase mb-3">Chart 02</p>
                <h3 className="text-xl font-bold text-white mb-2">Scale vs Safety</h3>
                <p className="text-white/50 text-xs font-semibold">Parameters (B) and safety papers</p>
              </div>
              <div className="flex gap-4 items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Parameters</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-ant-red" />
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Safety Papers</span>
                </div>
              </div>
              <div className="mt-auto">
                <ResponsiveContainer width="100%" height={180}>
                  <ComposedChart data={modelScalingData}>
                    <CartesianGrid strokeDasharray="1 6" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="year" stroke="transparent" tick={{ fill: 'rgba(255,255,255,0.3)', fontFamily: 'Archivo', fontWeight: 600, fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" stroke="transparent" tick={{ fill: 'rgba(255,255,255,0.3)', fontFamily: 'Archivo', fontWeight: 600, fontSize: 10 }} tickLine={false} width={30} />
                    <YAxis yAxisId="right" orientation="right" stroke="transparent" tick={{ fill: 'rgba(255,255,255,0.3)', fontFamily: 'Archivo', fontWeight: 600, fontSize: 10 }} tickLine={false} width={30} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar yAxisId="left" dataKey="parameters" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.1)" name="Parameters (B)" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="right" type="monotone" dataKey="safety" stroke="#e5232c" strokeWidth={3} name="Safety Papers" dot={{ fill: '#e5232c', r: 0 }} activeDot={{ r: 5, fill: '#fff', strokeWidth: 0 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* chart 3 - grouped bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-ant-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-ant-red/5 blur-[60px] pointer-events-none" />
            <div className="flex flex-col h-full relative z-10">
              <div className="mb-10">
                <p className="text-[10px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30 uppercase mb-3">Chart 03</p>
                <h3 className="text-xl font-bold text-white mb-2">Adoption by Sector</h3>
                <p className="text-white/50 text-xs font-semibold">% of sector using AI (2022–2024)</p>
              </div>
              <div className="flex gap-3 items-center mb-6">
                {['2022', '2023', '2024'].map((y, i) => (
                  <div key={y} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: ['rgba(255,255,255,0.1)', 'rgba(0,240,255,0.5)', '#e5232c'][i] }} />
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider">{y}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={adoptionData} barGap={2}>
                    <CartesianGrid strokeDasharray="1 6" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="category" stroke="transparent" tick={{ fill: 'rgba(255,255,255,0.3)', fontFamily: 'Archivo', fontWeight: 600, fontSize: 10 }} tickLine={false} />
                    <YAxis stroke="transparent" tick={{ fill: 'rgba(255,255,255,0.3)', fontFamily: 'Archivo', fontWeight: 600, fontSize: 10 }} tickLine={false} width={30} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="2022" fill="rgba(255,255,255,0.1)" name="2022" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="2023" fill="rgba(0,240,255,0.5)" name="2023" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="2024" fill="#e5232c" name="2024" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
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
