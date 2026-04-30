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

export default function App() {
  return (
    <div className="bg-ant-black text-white font-archivo scroll-container">
      <NoiseBackground />
      <ScrollProgress />
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
