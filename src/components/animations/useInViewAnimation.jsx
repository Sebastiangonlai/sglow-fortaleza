import { useEffect, useRef, useState } from "react";

export function useInViewAnimation({ animationClass, delay = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const className = `opacity-0 transition-opacity duration-700 ease-out will-change-transform ${inView ? `${animationClass} ${delay}` : ""
    }`.trim();

  return { ref, className };
}
