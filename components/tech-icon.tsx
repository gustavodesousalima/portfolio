'use client'

import { channel } from 'diagnostics_channel'

interface TechIconProps {
  name: string;
  children: React.ReactNode;
}
import { motion } from 'framer-motion'


export function TechIcon({ name, children}: TechIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-2 p-4"
    >
      <div className={`p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-white/20 transition-colors`}>
        {children}
      </div>
      <span className="text-sm text-gray-400">{name}</span>
    </motion.div>
  )
}

