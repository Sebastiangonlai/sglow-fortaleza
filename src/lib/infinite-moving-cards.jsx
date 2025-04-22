"use client";
import { cn } from "./utils";
import React, { useEffect, useState } from "react";
// import Image from 'next/image';


export const InfiniteMovingCards = ({ items, direction = "left", speed = "fast", pauseOnHover = true, className }) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <>
            <div ref={containerRef}
                className={cn("scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_2%,white_98%,transparent)]", className)}>
                <ul ref={scrollerRef}
                    className={cn(
                        " flex min-w-full shrink-0 gap-4 pt-2 w-max flex-nowrap",
                        start && "animate-scroll ",
                        pauseOnHover && "hover:[animation-play-state:paused]"
                    )}>
                    {items.map((item, index) => (
                        <li className="w-[350px] max-w-full flex rounded-2xl md:w-[450px] lg:w-[450px] lg:h-[400px]"
                            style={{ background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)", }}
                            key={index}>
                            <blockquote>
                                <div className="rounded-xl bg-white px-2 py-[30px] shadow-testimonial dark:bg-[#111928] sm:px-[30px] cursor-pointer select-none">
                                    <div className="h-[20px] w-[20px] mb-[18px] flex items-center gap-[2px]">
                                        <img src="/static/images/svg/icon-star.svg" alt="star icon" width={20} height={20} />
                                        <img src="/static/images/svg/icon-star.svg" alt="star icon" width={20} height={20} />
                                        <img src="/static/images/svg/icon-star.svg" alt="star icon" width={20} height={20} />
                                        <img src="/static/images/svg/icon-star.svg" alt="star icon" width={20} height={20} />
                                        <img src="/static/images/svg/icon-star.svg" alt="star icon" width={20} height={20} />
                                    </div>
                                    <p className="mb-4 text-base text-[#637381] dark:text-[#9CA3AF] leading-tight tracking-tight">
                                        {item.quote}
                                    </p>
                                    <a href="#" className="flex items-center gap-4">
                                        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                                            <img src={item.imgQua} alt="author" className="h-[50px] w-[50px] overflow-hidden rounded-full" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-[#111928] dark:text-white">{item.author}</h3>
                                        </div>
                                    </a>
                                </div>
                            </blockquote>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};



{/* <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
                                <span
                                className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                            <span className="flex flex-col gap-1">
                                    <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                                        {item.name}
                                        </span>
                                    <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                                    {item.title}
                                    </span>
                                    </span>
                                    </div> */}