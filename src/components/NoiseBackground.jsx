export default function NoiseBackground() {
  return (
    <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none mix-blend-overlay">
      <svg className="w-full h-full opacity-50">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  )
}
