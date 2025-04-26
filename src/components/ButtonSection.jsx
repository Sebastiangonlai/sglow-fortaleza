import React from 'react'
import { twMerge } from "tailwind-merge";
import { motion } from 'framer-motion'


const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 20, opacity: 0, },
        animate: { scale: 1, y: 0, opacity: 1, },
      }}
      transition={{ type: "spring", mass: 5, stiffness: 400, damping: 80, }}
      className={twMerge(
        "rounded-full bg-transparent p-2 w-fit mx-auto items-center justify-center align-center",
        className,
      )}
      {...rest}
    />
  );
};


const ButtonSection = ({ namebtn, uri }) => {

  const url = "" + uri;
  return (
    <a href={url} aria-label="Más información sobre cómo obtener tu licencia de conducir">
    <Block className="col-span-1 md:col-span-1" whileHover={{ rotate: '-2deg', scale: 1.1 }}>
      <button className={`relative flex items-center z-10 cursor-pointer rounded-2xl text-base text-normal shadow-sm  bg-transparent hover:bg-[#4f46e5]/20 text-white/80 py-2 px-3 ring-1 ring-[#8265ac]/60`}>
        {namebtn}
        <svg fill="none" height="20" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
      </Block>
    </a>
  )
}


export default ButtonSection


// // <div className="animate__animated animate__zoomIn animate__delay-2s text-center lg:pb-10 pb-6 whitespace-nowrap">
// //   <div className="inline-block border shadow-sm rounded-full dark:border-[#4B5563]/20 ">
// {/* <button className="py-2 px-4 flex items-center gap-x-1 cursor-pointer" aria-label={namebtn} href={uri} onClick={(e) => { e.preventDefault(); window.location.href = url; }}>
//           <p className="text-gray-400 dark:text-neutral-300 dark:hover:text-blue-300 text-[12px] md:text-[12px] lg:text-[14px] font-medium ">
//             {namebtn}
//           </p> */}

// {/* <p className="inline-flex items-center  text-blue-500 decoration-2 dark:hover:text-blue-300 focus:outline-none font-medium dark:text-blue-300" > */ }
// {/* <svg className="shrink-0 size-4 mt-0.5" viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Square-Top-Down--Streamline-Solar-Ar" height="14" width="14">
//               <path d="m8.125 6.875 5.625 -5.625m0 0h-3.339875M13.75 1.25v3.33984375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
//               </path>
//               <path d="M13.75 7.5c0 2.94625 0 4.4194375 -0.9153125 5.3346875C11.9194375 13.75 10.44625 13.75 7.5 13.75c-2.94628125 0 -4.41941875 0 -5.33470625 -0.9153125C1.25 11.9194375 1.25 10.44625 1.25 7.5c0 -2.94628125 0 -4.41941875 0.91529375 -5.33470625C3.0805812500000003 1.25 4.55371875 1.25 7.5 1.25" stroke="currentColor" strokeLinecap="round" strokeWidth="1"></path>
//             </svg> */}

// {/* <svg fill="none" height="21" viewBox="0 0 22 22" width="21" xmlns="http://www.w3.org/2000/svg" className="inline-flex items-center  text-blue-500 decoration-2 dark:hover:text-blue-300 focus:outline-none font-medium dark:text-blue-300">
//               <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
//             </svg>
//         </button> */}

// {/* </div>
//     </div> */}