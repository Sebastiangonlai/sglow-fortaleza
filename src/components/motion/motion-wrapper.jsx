"use client"
// import { motion } from "framer-motion"
// import PropTypes from "prop-types";
// import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from "react"


export const MotionWrapper = ({
  children,
  animation = "fade", // fade | slide | scale | rotate | flip | bounce | stagger
  direction = "up",
  duration = 0.6,
  delay = 0.6,
  threshold = 0.1,
  once = false,
  className = "",
  staggerChildren = 0.1,
  staggerDirection = 1,
  customVariants,
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const getVariants = () => {
    if (customVariants) return customVariants

    const transition = {
      duration,
      delay,
      when: "beforeChildren",
      staggerChildren: animation === "stagger" ? staggerChildren : 0,
      staggerDirection,
    }

    const base = {
      hidden: {},
      visible: { transition },
    }

    const directions = {
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      rotate: direction === "left" ? -90 : 90,
      rotateX: ["up", "down"].includes(direction) ? 90 : 0,
      rotateY: ["left", "right"].includes(direction) ? 90 : 0,
    }

    switch (animation) {
      case "fade":
        return {
          ...base,
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition },
        }
      case "slide":
        return {
          ...base,
          hidden: { opacity: 0, x: directions.x, y: directions.y },
          visible: { opacity: 1, x: 0, y: 0, transition },
        }
      case "scale":
        return {
          ...base,
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition },
        }
      case "rotate":
        return {
          ...base,
          hidden: { opacity: 0, rotate: directions.rotate },
          visible: { opacity: 1, rotate: 0, transition },
        }
      case "flip":
        return {
          ...base,
          hidden: { opacity: 0, rotateX: directions.rotateX, rotateY: directions.rotateY },
          visible: { opacity: 1, rotateX: 0, rotateY: 0, transition },
        }
      case "bounce":
        return {
          ...base,
          hidden: { opacity: 0, y: directions.y },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          },
        }
      case "stagger":
        return {
          ...base,
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition },
        }
      default:
        return base
    }
  }

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          controls.start("visible")
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsInView(false)
          controls.start("hidden")
        }
      },
      {
        threshold,
        rootMargin: "0px"

        // rootMargin: "0px 0px -100px 0px",
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [controls, once, threshold])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
      aria-hidden={!isInView}
    >
      {children}
    </motion.div>
  )
}


// MotionWrapper.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
//   variants: PropTypes.object,
//   loop: PropTypes.bool,
//   once: PropTypes.bool, // lo podés usar si querés desactivar el observer tras la primera animación
//   threshold: PropTypes.number,
//   exit: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.object,
//   ]),
//   ariaHidden: PropTypes.bool,
//   transition: PropTypes.object,
// };

// export default MotionWrapper;

// export const MotionWrapper = ({
//   children,
//   animation = "slide", // slide | zoom | bounce | flip | stagger | spring
//   direction = "up",
//   duration = 800,
//   delay = 500,
//   threshold = 0.1,
//   once = false,
//   loop = false,
//   staggerChildren = 0.1, // New prop for stagger
//   className = "",
// }) => {

//   const baseTransition = {
//     duration: duration / 1000,
//     delay: delay / 1000,
//     ease: "easeOut",
//     ...(loop ? { repeat: Infinity, repeatType: "loop" } : {}),
//   }

//   const variants = {
//     slide: {
//       hidden: {
//         opacity: 0,
//         y: direction === "up" ? 10 : direction === "down" ? -10 : 0,
//         x: direction === "left" ? 10 : direction === "right" ? -10 : 0,
//       },
//       visible: {
//         opacity: 1, x: 0, y: 0,
//         transition: baseTransition,
//       },
//     },
//     zoom: {
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: { opacity: 1, scale: 1, transition: baseTransition },
//     },
//     bounce: {
//       hidden: { opacity: 0, y: 0 },
//       visible: {
//         opacity: 1,
//         y: [0, -20, 0, -10, 0],
//         transition: {
//           ...baseTransition,
//           duration: 1.5,
//         },
//       },
//     },
//     flip: {
//       hidden: { opacity: 0, rotateY: -90, transformPerspective: 1000 },
//       visible: {
//         opacity: 1,
//         rotateY: 0,
//         transformPerspective: 1000,
//         transition: {
//           ...baseTransition,
//         },
//       },
//     },
//     stagger: {  // New stagger animation
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1, y: 0,
//         transition: {
//           ...baseTransition,
//           staggerChildren,
//         },
//       },
//     },
//     spring: {  // New spring animation
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//           type: "spring",
//           stiffness: 300,
//           damping: 25,
//         },
//       },
//     },
//     warpOverlay: {  // New warp overlay animation
//       hidden: { opacity: 0, scale: 0.9, rotate: -5 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         rotate: 0,
//         transition: {
//           ...baseTransition,
//           ease: "easeInOut",
//         },
//       },
//     },
//   }

//   return (
//     <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once, amount: threshold }}
//     variants={variants[animation]}
//     className={className}>
//       {children}
//     </motion.div>
//   )
// }

// if (import.meta.env.MODE === 'development') {
//   MotionWrapper.propTypes = {
//     children: PropTypes.node.isRequired,
//     animation: PropTypes.oneOf(["slide", "zoom", "bounce", "flip", "stagger", "spring", "warpOverlay"]),
//     direction: PropTypes.oneOf(["up", "down", "left", "right"]),
//     duration: PropTypes.number,
//     delay: PropTypes.number,
//     threshold: PropTypes.number,
//     once: PropTypes.bool,
//     loop: PropTypes.bool,
//     staggerChildren: PropTypes.number, // New prop for stagger
//     className: PropTypes.string,
//   };
// }


// "use client"
// import { motion } from "framer-motion"
// import PropTypes from "prop-types";

// export const MotionWrapper = ({
//   children,
//   animation = "slide", // slide | zoom | bounce | flip
//   direction = "up",
//   duration = 800,
//   delay = 500,
//   threshold = 0.1,
//   once = false,
//   loop = false,
//   className = "",
// }) => {

//   const baseTransition = {
//     duration: duration / 1000,
//     delay: delay / 1000,
//     ease: "easeOut",
//     ...(loop ? { repeat: Infinity, repeatType: "loop" } : {}),
//   }

//   const variants = {
//     slide: {
//       hidden: {
//         opacity: 0,
//         y: direction === "up" ? 10 : direction === "down" ? -10 : 0,
//         x: direction === "left" ? 10 : direction === "right" ? -10 : 0,
//       },
//       visible: {
//         opacity: 1, x: 0, y: 0,
//         transition: baseTransition,
//       },
//     },
//     zoom: {
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: { opacity: 1, scale: 1, transition: baseTransition },
//     },
//     bounce: {
//       hidden: { opacity: 0, y: 0 },
//       visible: {
//         opacity: 1,
//         y: [0, -20, 0, -10, 0],
//         transition: {
//           ...baseTransition,
//           duration: 1.5,
//         },
//       },
//     },
//     flip: {
//       hidden: { opacity: 0, rotateY: -90, transformPerspective: 1000 },
//       visible: {
//         opacity: 1,
//         rotateY: 0,
//         transformPerspective: 1000,
//         transition: {
//           ...baseTransition,
//         },
//       },
//     }
//   }

//   return (
//     <motion.div
//       className={className}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once, amount: threshold }}
//       variants={variants[animation]} >
//       {children}
//     </motion.div>
//   )
// }

// if (import.meta.env.MODE === 'development') {
//   MotionWrapper.propTypes = {
//     children: PropTypes.node.isRequired,
//     animation: PropTypes.oneOf(["slide", "zoom", "bounce", "flip"]),
//     direction: PropTypes.oneOf(["up", "down", "left", "right"]),
//     duration: PropTypes.number,
//     delay: PropTypes.number,
//     threshold: PropTypes.number,
//     once: PropTypes.bool,
//     loop: PropTypes.bool,
//     className: PropTypes.string,
//   };
// }

// // whileHover={scalevar.visible} // desktop
// // whileTap={scalevar.visible} // mobile press