import { motion } from 'framer-motion'

export default function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-6 mb-16">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[11px] font-semibold tracking-[0.3em] text-ant-red uppercase"
      >
        {number && <span className="text-ant-border mr-3">{number}</span>}
        {label}
      </motion.span>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 h-px bg-ant-border origin-left"
      />
    </div>
  )
}
