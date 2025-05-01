import "@/components/animations/animations.css";

import { useInViewAnimation } from "./useInViewAnimation";

export default function AnimatedBox({ children, animationClass, delay = "0s", duration = "0.8s" }) {
  const { ref, className } = useInViewAnimation({ animationClass, delay });

  return (
    <section ref={ref} className={className}
      style={{ animationDelay: delay, animationDuration: duration, opacity: 0 }}>
      {children}
    </section>
  );
}
