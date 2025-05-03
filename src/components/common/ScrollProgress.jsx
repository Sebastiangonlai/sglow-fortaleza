"use client";
import { motion, useScroll, useSpring } from "framer-motion";


export default function ScrollProgress({ height = 8 }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={`fixed top-0 left-0 right-0 z-150`}>
      <motion.div
        className={` origin-left bg-(--color-purple-1)/40 mask-b-from-10% rounded-full`}
        style={{
          scaleX,
          height: height,
        }}
      />
    
    </div>
  );
}
