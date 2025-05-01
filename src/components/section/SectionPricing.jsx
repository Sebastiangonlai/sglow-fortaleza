import React from 'react';


const SectionPricing = () => {
  const itemCursos = [
    { desc: "15 clases + 1 de regalo." },
    { desc: "Trámites en IMM." },
    { desc: "Material para examen teórico." },
    { desc: "Test de evaluación online." },
    { desc: "Auto para examen práctico." },
  ];

  const itemCursos2 = [
    { desc: "5 clases por semana." },
    { desc: "Test de evaluación online." },
    { desc: "Auto para examen practico." },
    { desc: "Trámites en IMM." },
    { desc: "Material para examen teórico." },
  ];

  const itemCursos3 = [
    { desc: "Renovación para mayores de 75 años." },
    { desc: "Test de evaluación online." },
    { desc: "Material teórico." },
    { desc: "Trámites en IMM." },
    { desc: "Auto para examen práctico." },
  ];

  return (
    <>
      <div className="bg-slate-50 dark:bg-[#111928] pb-10 pt-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-4">
            <div className="flex flex-col justify-between rounded-3xl bg-slate-50 p-8 text-slate-900 ring-1 ring-slate-300 dark:bg-[#111928] dark:text-slate-200 dark:ring-slate-300/20 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id="tier-enterprise" className="text-lg font-semibold leading-8">
                    Categoria A
                  </h3>
                  <p className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-500">
                    ✨ Nuevo
                  </p>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1 justify-center">
                  <span className="text-5xl text-center font-bold tracking-tight">Intensivo</span>
                  {/* <span className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-400">/curso</span> */}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-400">
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-400">
                    {itemCursos2.map((element, index) => (
                      <li className="flex gap-x-3" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-5 flex-none text-blue-500"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                          <path d="M9 12l2 2l4 -4"></path>
                        </svg>
                        {element.desc}
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <a href="./licencia-de-conducir" aria-describedby="tier-starter" className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-blue-500 ring-1 ring-inset ring-blue-500 hover:bg-blue-500 hover:text-gray-200">Más información</a>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-slate-50 p-8 text-slate-900 ring-1 ring-slate-300 dark:bg-[#111928] dark:text-slate-200 dark:ring-slate-300/20 lg:z-10 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id="tier-enterprise" className="text-lg font-semibold leading-8">
                    Primera vez
                  </h3>
                  <p className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-500">
                    🚀 Popular
                  </p>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1 justify-center">
                  <span className="text-5xl text-center font-bold tracking-tight">Categoria A</span>
                  {/* <span className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-400">/curso</span> */}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-400">
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-400">
                    {itemCursos.map((element, index) => (
                      <li className="flex gap-x-3" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-5 flex-none text-blue-500"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                          <path d="M9 12l2 2l4 -4"></path>
                        </svg>
                        {element.desc}
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <a href="./licencia-de-conducir" aria-describedby="tier-pro" className="mt-8 block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold leading-6 text-gray-100 shadow hover:bg-blue-600">Más información</a>
            </div>
            <div className="flex flex-col justify-between rounded-3xl bg-slate-50 p-8 text-slate-900 ring-1 ring-slate-300 dark:bg-[#111928] dark:text-slate-200 dark:ring-slate-300/20 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id="tier-enterprise" className="text-lg font-semibold leading-8">
                    Categoria A
                  </h3>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1 justify-center">
                  <span className="text-5xl text-center font-bold tracking-tight">Renovación</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-400">
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-400">
                    {itemCursos3.map((element, index) => (
                      <li className="flex gap-x-3" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-5 flex-none text-blue-500"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                          <path d="M9 12l2 2l4 -4"></path>
                        </svg>
                        {element.desc}
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <a href="./licencia-de-conducir" aria-describedby="tier-enterprise" className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-blue-500 ring-1 ring-inset ring-blue-500 hover:bg-blue-500 hover:text-gray-200">Más información</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionPricing;