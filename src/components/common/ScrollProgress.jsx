"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";


export default function ScrollProgress({
  color = "bg-primary",
  height = 4,
  position = "top",
  showPercentage = false,
  percentagePosition = "end",
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const positionClass = position === "top" ? "top-0" : "bottom-0";

  let percentagePositionClass = "right-4";
  if (percentagePosition === "start") {
    percentagePositionClass = "left-4";
  } else if (percentagePosition === "center") {
    percentagePositionClass = "left-1/2 -translate-x-1/2";
  }

  return (
    <div className={`fixed ${positionClass} left-0 right-0 z-150`}>
      <motion.div
        className={`${color} origin-left`}
        style={{
          scaleX,
          height: height,
        }}
      />
      {showPercentage && (
        <div className={`absolute ${percentagePositionClass} -mt-8 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium`}>
          {percentage}%
        </div>
      )}
    </div>
  );
}
