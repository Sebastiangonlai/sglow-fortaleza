"use client";
import { BackgroundGradient } from "./background-gradient.jsx";


export function CardBackgroundGradient() {

  return (
    <BackgroundGradient className="rounded-[22px] max-w-full p-2 sm:p-2 bg-white dark:bg-[#111827] inset-0 z-50">
      <img src={`/static/images/card/servicio_1.webp`} alt="card vial" className="object-contain rounded-3xl p-2 min-w-full" />
      <p className="text-base font-semibold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 px-3">Mis proyectos</p>
      <p className="text-sm/3 font-medium text-neutral-500 dark:text-neutral-400 px-3">Descripcion web </p>
      <button className="rounded-full m-2 pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-gray-800/60">
        <span>Visualizar</span>
      </button>

      </BackgroundGradient>
      // <div class="mx-8 my-1 rounded-(--card-radius) bg-white/15 p-(--card-padding) outline -outline-offset-1 outline-white/25           [--card-padding:--spacing(1)] [--card-radius:var(--radius-xl)]"    >
      // <div class="flex flex-row items-center justify-center w-full h-full rounded-lg">
      //     <img src={`/static/images/card/servicio_1.webp`} alt="card vial" className="w-80 h-60 rounded-3xl p-2 " />
      //   </div>

      //   <div class="flex flex-col items-center justify-center my-4">
      //     <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Mis proyectos</h2>
      //   </div>
      //   </div>
  );
}

