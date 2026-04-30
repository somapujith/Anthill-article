import { useState } from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import AIEvolution from './components/AIEvolution'
import HumanIntervention from './components/HumanIntervention'
import DataViz from './components/DataViz'
import FuturePredictions from './components/FuturePredictions'
import Impact from './components/Impact'
import Interactive from './components/Interactive'
import Footer from './components/Footer'

import ScrollProgress from './components/ScrollProgress'
import NoiseBackground from './components/NoiseBackground'
import { toggleAudio, getAudioState } from './utils/audio'

export default function App() {
  const [audioEnabled, setAudioEnabled] = useState(false)

  const handleToggleAudio = () => {
    setAudioEnabled(toggleAudio())
  }
  return (
    <div className="bg-ant-black text-white font-archivo">
      <NoiseBackground />
      <ScrollProgress />
      
      <button 
        onClick={handleToggleAudio}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[100] w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-xs font-bold transition-all duration-300 hover:border-ant-red hover:shadow-[0_0_15px_rgba(229,35,44,0.5)]"
      >
        {audioEnabled ? (
          <span className="text-ant-cyan">ON</span>
        ) : (
          <span className="text-white/50">OFF</span>
        )}
      </button>

      <Hero />
      <Timeline />
      <AIEvolution />
      <HumanIntervention />
      <DataViz />
      <FuturePredictions />
      <Impact />
      <Interactive />
      <Footer />
    </div>
  )
}
