"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

export interface ScrollTriggerSectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  onEnterView?: () => void
  onExitView?: () => void
  triggerOnce?: boolean
  id?: string
}

export const ScrollTriggerSection: React.FC<ScrollTriggerSectionProps> = ({
  children,
  className = "",
  threshold = 0.5,
  onEnterView,
  onExitView,
  triggerOnce = false,
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
  })

  React.useEffect(() => {
    if (isInView) {
      onEnterView?.()
    } else {
      onExitView?.()
    }
  }, [isInView, onEnterView, onExitView])

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0.6 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}
