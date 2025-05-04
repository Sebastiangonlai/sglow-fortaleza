"use client";
import { cn } from "./utils";
import { useEffect, useRef, useState } from "react";


export const InfiniteMovingCards = ({ items, direction = "left", speed = "fast", pauseOnHover = true, className }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
          scrollerRef.current.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );

      setStart(true);
    }
  }, [direction, speed]);

  return (
      <div ref={containerRef}
        className={cn("scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_2%,white_98%,transparent)]", className)}>
      <ul ref={scrollerRef} className={cn(
        "flex min-w-full shrink-0 gap-4 pt-2 w-max flex-nowrap",
        start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}>
          {items.map((item, index) => (
          <li key={index}
            className="w-[350px] max-w-full flex rounded-2xl md:w-[450px] lg:w-[450px] lg:h-[400px]"
            style={{ background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))" }}>
              <blockquote>
              <div className="rounded-xl bg-white px-2 py-8 shadow-testimonial dark:bg-[#111928] sm:px-8 cursor-pointer select-none">
                <div className="flex mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/static/images/svg/icon-star.svg"
                      alt="star icon"
                      width={20}
                      height={20}
                      className="inline-block"
                    />
                  ))}
                  </div>
                <p className="mb-4 text-base text-[#637381] dark:text-[#9CA3AF] leading-tight tracking-tight">
                    {item.quote}
                  </p>
                <a href="#" className="flex items-center gap-4" aria-label={item.author}>
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                    <img src={item.imgQua} alt={item.altQua} className="h-[50px] w-[50px] rounded-full" />
                    </div>
                    <div>
                    <p className="text-sm font-semibold text-[#111928] dark:text-white">{item.author}</p>
                    </div>
                  </a>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
  );
};
