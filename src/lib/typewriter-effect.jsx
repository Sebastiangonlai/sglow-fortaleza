"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


export const TypewriterEffectSmooth = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(` `),
    };
  });

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            (<div key={`word-${idx}`} className="">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-[#111928]`, word.className)}>
                  {" "}{char}
                </span>
              ))}
            </div>)
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 ", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%", }}
        whileInView={{ width: "fit-content", }}
        transition={{ duration: 2, ease: "linear", delay: 0.5, }}>
        <div className="text-4xl sm:text-4xl md:text-5xl lg:text:6xl xl:text-7xl font-bold" style={{ whiteSpace: "nowrap", }}>
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", }}
        className={cn("block rounded-sm w-[4px] h-8 sm:h-9 md:h-12 xl:h-16 md:-my-1 xl:my-0 bg-blue-500", cursorClassName)}></motion.span>
    </div>
  );
};
