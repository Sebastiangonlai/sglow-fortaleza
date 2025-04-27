// import { twMerge } from "tailwind-merge";
// import { motion } from 'framer-motion'


// const Block = ({ className, ...rest }) => {
//   return (
//     <motion.div
//       variants={{
//         initial: { scale: 0.5, y: 20, opacity: 0, },
//         animate: { scale: 1, y: 0, opacity: 1, },
//       }}
//       transition={{ type: "spring", mass: 5, stiffness: 400, damping: 80, }}
//       className={twMerge(
//         "rounded-full w-fit mx-auto items-center justify-center align-center",
//         className,
//       )}
//       {...rest}
//     />
//   );
// };
// const buttonStyles = "group relative flex items-center z-10 cursor-pointer rounded-2xl text-sm shadow-sm bg-transparent hover:bg-[#4f46e5]/20 text-white/80 py-2 px-3 ring-1 ring-[#8265ac]/20";
// const textStyles = "text-sm font-medium text-[#4f46e5] dark:text-white/80 text-shadow-sm";
// const svgStyles = "transition-transform duration-200 ease-in-out group-hover:translate-x-1";


// const ButtonSection = ({ namebtn, uri }) => {
//   const url = "" + uri;
//   return (
//     <a href={url} aria-label="Más información sobre cómo obtener tu licencia de conducir">
//       <Block className="col-span-1 md:col-span-1" whileHover={{ rotate: '-2deg', scale: 1.05 }}>
//         {/* <button className="group relative flex items-center z-10 cursor-pointer rounded-2xl text-sm shadow-sm bg-transparent hover:bg-[#4f46e5]/20 text-white/80 py-2 px-3 ring-1 ring-[#8265ac]/20"> */}

//           <button className={twMerge(buttonStyles)}>
//           <p className="text-sm font-medium text-[#4f46e5] dark:text-white/80 text-shadow-sm">
//             {namebtn}
//           </p>
//           <svg
//             className="transition-transform duration-200 ease-in-out group-hover:translate-x-1"
//             fill="none"
//             height="20"
//             viewBox="0 0 22 22"
//             width="20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M10.75 8.75L14.25 12L10.75 15.25"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//             />
//           </svg>
//         </button>
//       </Block>
//     </a>
//   )
// }


// export default ButtonSection

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";


const Block = ({ className, whileHover, ...rest }) => {
  return (
    <motion.div
      whileHover={whileHover}
      variants={{
        initial: { scale: 0.5, y: 20, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{ type: "spring", mass: 5, stiffness: 400, damping: 80 }}
      className={twMerge("rounded-full w-fit mx-auto items-center justify-center align-center",
        className
      )}
      {...rest}
    />
  );
};


const buttonStyles = "group relative flex items-center z-10 cursor-pointer rounded-2xl text-sm shadow-sm bg-transparent hover:bg-[#4f46e5]/20 text-white/80 py-2 px-3 ring-1 ring-[#8265ac]/20";
const textStyles = "text-sm font-medium text-[#4f46e5] dark:text-white/80 text-shadow-sm";
const svgStyles = "transition-transform duration-200 ease-in-out group-hover:translate-x-1";


const ButtonSection = ({ namebtn, uri }) => {
  const ariaLabel = `Más información sobre ${namebtn}`;

  return (
    <a href={uri} passHref aria-label={ariaLabel}>
      <Block className="col-span-1 md:col-span-1" whileHover={{ rotate: "-2deg", scale: 1.05 }}>
        <button className={twMerge(buttonStyles)}>
          <p className={twMerge(textStyles)}>{namebtn}</p>
          <svg
            className={twMerge(svgStyles)}
            fill="none"
            height="20"
            viewBox="0 0 22 22"
            width="20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2" />
          </svg>
        </button>
      </Block>
    </a>
  );
};

export default ButtonSection;
