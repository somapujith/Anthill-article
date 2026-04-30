import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-ant-black border-t border-ant-border">
      <div className="px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <img src="/anthill-logo.svg" alt="Anthill Ventures" className="h-8 w-auto mb-8" />
            <p className="text-ant-muted font-semibold leading-relaxed text-lg max-w-md">
              We help fearless founders with a strong purpose to impact a billion people by building
              powerful companies for the consumer of the new and next, now.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] font-semibold tracking-[0.3em] text-ant-red uppercase mb-6">Sections</p>
            <ul className="space-y-3">
              {[['01', 'Timeline'], ['02', 'AI Evolution'], ['03', 'Human Intervention'], ['04', 'Data'], ['05', 'Future Predictions'], ['06', 'Impact'], ['07', 'Simulation']].map(([n, label]) => (
                <li key={n} className="flex gap-4 items-center group">
                  <span className="text-ant-border text-xs font-semibold">{n}</span>
                  <a href={`#${label.toLowerCase().replace(' ', '-')}`} className="text-ant-muted font-semibold text-sm hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] font-semibold tracking-[0.3em] text-ant-red uppercase mb-6">Further Reading</p>
            <ul className="space-y-3">
              {['AI Safety Institute', 'Center for AI Safety', 'Future of Life Institute', 'OpenAI Research', 'Anthropic Research', 'DeepMind Safety'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ant-muted font-semibold text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-px bg-ant-red transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ant-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-ant-muted text-sm font-semibold">
            © 2026 Anthill Ventures. AI Evolution Research Article.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-ant-red text-sm font-semibold hover:text-white transition-colors flex items-center gap-2"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </button>
        </div>
      </div>

      <div className="border-t border-ant-border px-8 md:px-16 py-6 bg-ant-gray/10">
        <p className="text-ant-border text-sm font-semibold leading-relaxed">
          <span className="text-white">Note: </span>
          Future predictions are probabilistic, not deterministic. Data reflects best available research as of 2025.
          This article is intended for educational and strategic planning purposes.
        </p>
      </div>
    </footer>
  )
}
