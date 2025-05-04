"use client"
import { motion } from "framer-motion"


export const MotionWrapper = ({
  children,
  animation = "slide", // slide | zoom | bounce | flip
  direction = "up",
  duration = 400,
  delay = 200,
  threshold = 0.1,
  once = false,
  loop = false,
  className = "",
}) => {

  const baseTransition = {
    duration: duration / 1000,
    delay: delay / 1000,
    ease: "easeOut",
    ...(loop ? { repeat: Infinity, repeatType: "loop" } : {}),
  }

  const variants = {
    slide: {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
        x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      },
      visible: {
        opacity: 1, x: 0, y: 0,
        transition: baseTransition,
      },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: baseTransition },
    },
    bounce: {
      hidden: { opacity: 0, y: 0 },
      visible: {
        opacity: 1,
        y: [0, -20, 0, -10, 0],
        transition: {
          ...baseTransition,
          duration: 1.5,
        },
      },
    },
    flip: {
      hidden: { opacity: 0, rotateY: -90, transformPerspective: 1000 },
      visible: {
        opacity: 1,
        rotateY: 0,
        transformPerspective: 1000,
        transition: {
          ...baseTransition,
        },
      },
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants[animation]} >
      {children}
    </motion.div>

  )
}