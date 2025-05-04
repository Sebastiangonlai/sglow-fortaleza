"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export interface ParallaxScrollProps {
  children: React.ReactNode
  speed?: number
  direction?: "vertical" | "horizontal"
  className?: string
  offset?: [number, number]
}

export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  speed = 0.5,
  direction = "vertical",
  className = "",
  offset = [-100, 100],
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const isVertical = direction === "vertical"

  // Calculate transform based on direction
  const transform = useTransform(scrollYProgress, [0, 1], isVertical ? [offset[0] * speed, offset[1] * speed] : [0, 0])

  const horizontalTransform = useTransform(
    scrollYProgress,
    [0, 1],
    !isVertical ? [offset[0] * speed, offset[1] * speed] : [0, 0],
  )

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y: isVertical ? transform : 0,
          x: !isVertical ? horizontalTransform : 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
