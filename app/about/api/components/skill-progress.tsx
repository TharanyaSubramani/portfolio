'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SkillProgressProps {
  name: string
  percentage: number
}

export function SkillProgress({ name, percentage }: SkillProgressProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-gray-800 font-medium">{name}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-purple-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
