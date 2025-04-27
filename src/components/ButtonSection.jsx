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
    <Block className="col-span-1 md:col-span-1" whileHover={{ rotate: '-2deg', scale: 1.05 }}>
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