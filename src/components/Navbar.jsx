import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg" />
          <span className="font-bold text-lg">AI Evolution</span>
        </div>

        <div className="flex gap-6 items-center">
          <a href="#timeline" className="text-sm hover:text-blue-400 transition">Timeline</a>
          <a href="#evolution" className="text-sm hover:text-blue-400 transition">Evolution</a>
          <a href="#impact" className="text-sm hover:text-blue-400 transition">Impact</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-white/10 rounded-lg transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
