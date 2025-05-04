import { twMerge } from "tailwind-merge";


const ButtonTailwind = ({ name, uri, color = "--color-section-3" }, className) => {
  const ariaLabel = `Más información sobre ${name}`;

  return (
    <div className="h-2 mx-auto justify-center items-center" >
      <a href={uri} aria-label={ariaLabel}
        className={twMerge(
          "relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none  focus:ring-offset-slate-50",
          className,
        )}>

        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-40" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-(${color}) px-4 py-1 text-sm font-medium text-white/70 backdrop-blur-3xl`}>
          {name}
        </span>
      </a>
    </div>
  );
}


export default ButtonTailwind;
