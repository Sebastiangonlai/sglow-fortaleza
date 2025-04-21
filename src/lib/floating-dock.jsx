
import React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsHeadset } from "react-icons/bs";
import { MdClose } from "react-icons/md";


export const FloatingDock = ({ items, mobileClassName }) => {
  return (
    <FloatingDockMobile items={items} className={mobileClassName} />
  );
};


const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    (<div className={cn("relative block md:flex ", className)}>
      <AnimatePresence>
        {open && (
          <motion.div layoutId="nav" className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, }}
                exit={{
                  opacity: 0, y: 10,
                  transition: { delay: idx * 0.05, },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}>
                <div href={item.href} key={item.title} className="h-10 w-10 rounded-full bg-gray-50 dark:bg-blue-700 dark:hover:ring-2 dark:hover:ring-blue-400 flex items-center justify-center dark:ring-1 dark:ring-blue-500 cursor-pointer">
                  <div className="h-4 w-4">{item.icon}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(!open)}>
        {open ?
          <>
            <div className="h-10 w-10 rounded-full bg-gray-50 dark:bg-[#1F2A37] dark:ring-1 dark:ring-blue-400 dark:hover:ring-blue-500 flex items-center justify-center">
              <MdClose className="h-5 w-5 text-neutral-100 dark:text-white" />
            </div>
          </>
          :
          <>
            <div className="h-10 w-10 p-1 rounded-full bg-gray-50 dark:bg-blue-700 dark:hover:ring-1 dark:hover:ring-blue-400 flex items-center justify-center dark:ring-1 dark:ring-blue-500">
              <BsHeadset className="h-5 w-5 text-neutral-100 dark:text-white" />
            </div>
          </>
        }
        {/* <BsHeadset className="h-5 w-5 text-neutral-100 dark:text-neutral-100" /> */}
      </button>
    </div>)
  );
};

