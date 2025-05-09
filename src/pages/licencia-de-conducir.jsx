"use client";

import { useState } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionPasos from '@/components/section/SectionPasos';
import SectionPricing from '@/components/section/SectionPricing';
import { URL_PDF } from '@/data/constants';


const LicenciaDeConducir = () => {
  const [openPdf, setOpenPdf] = useState(false);
  const [activa, setActiva] = useState(false);
  const handleOpen = () => {
    setActiva(true);
  };
  const primary = { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" };

  return (
    <>
      {/* <PageSEO title="Licencia de Conducir - Academia Fortaleza" description="Todo lo que necesitas saber para obtener tu licencia de conducir de forma rápida y sencilla." /> */}
      <Breadcrumb
        title="Licencia de Conducir"
        subtitle="Obtén tu licencia de conducir con nosotros."
        nameUri="Licencia de Conducir"
        href="nuestros-servicios" />

      <div className="bg-(--color-section-3) overflow-hidden">
        <SectionPasos />
      </div>
      <div className="bg-(--color-section-2) overflow-hidden">
        <div className="max-w-[80rem] px-4 pb-10 pt-20 lg:py-20 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          <div className="pb-6">
            <div className=" overflow-hidden">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="mx-auto max-w-7xl w-full px-4 text-left">
                  <h3 className="mb-1 text-3xl font-bold text-[#111928] dark:text-white sm:text-4xl md:text-[35px] md:leading-[1]">
                    Solicitud
                  </h3>
                  <p className="text-left text-base text-[#637381] dark:text-[#9CA3AF] max-w-[650px]">
                    Licencia de conducir por primera vez hasta 79 años.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div className=" overflow-hidden">
              <img className="rounded-xl" src="/static/images/card/servicio_10.webp" alt="Features Image" width={500} height={500} />
            </div>
            <div className=" mt-10 sm:mt-10 lg:mt-0 overflow-hidden">
              <div className="space-y-5 sm:space-y-8">
                <div className="space-y-2 md:space-y-2">
                  <h2 className="font-semibold text-3xl lg:text-3xl text-gray-200 dark:text-neutral-200">
                    Requisitos
                  </h2>
                  <p className="text-gray-500 dark:text-gray-300">
                    Licencia categoria A para autos y camionetas de hasta 4000 kg.
                  </p>
                </div>

                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 h-5 w-5 shrink-0 flex justify-center items-center rounded-full bg-[#334a61] text-blue-600 dark:bg-blue-600/40 dark:text-blue-400">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 -1 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-300">
                        <span className="font-bold">Cédula de identidad</span> o pasaporte uruguayo (vigente y en buen estado).
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-x-3">
                    <span className="mt-0.5 h-5 w-5 shrink-0 flex justify-center items-center rounded-full bg-[#334a61] text-blue-600 dark:bg-blue-600/40 dark:text-blue-400">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 -1 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="grow">
                      <button className="text-sm sm:text-base text-gray-500 dark:text-neutral-300 text-left">
                        Certificado médico para renovación de licencia, realizado en cualquiera de las <a className="text-blue-800 hover:text-blue-600 dark:hover:text-blue-300 dark:text-blue-400 underline cursor-pointer" onClick={() => { setOpenPdf(URL_PDF.institucionesMedicas), handleOpen(true) }}>instituciones habilitadas.</a>
                      </button>
                    </div>
                  </li>

                  <li className="flex gap-x-3">
                    <span className="mt-0.5 h-5 w-5 shrink-0 flex justify-center items-center rounded-full bg-[#334a61] text-blue-600 dark:bg-blue-600/40 dark:text-blue-400">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 -1 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-300">
                        Pago del trámite &quot;aspirante&quot; (red de cobranza o en Intendencia).
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="bg-white dark:bg-gray-900 antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our work
            </h2>
            <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Crafted with skill and care to help our clients grow their business!
            </p>
          </div>

          <div class="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div class="space-y-4">
              <span
                class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Alphabet Inc.
              </span>
              <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Official website
              </h3>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>
              <a href="#" title=""
                class="text-white bg-blue-3 justify-center hover:bg-blue-3/80 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-blue-3/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-3 dark:hover:bg-blue-3/80 dark:focus:ring-blue-3/90"
                role="button">
                View case study
                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>

            <div class="space-y-4">
              <span
                class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Microsoft Corp.
              </span>
              <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Management system
              </h3>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>
              <a href="#" title=""
                class="text-white bg-blue-3 justify-center hover:bg-blue-3/80 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-3 dark:hover:bg-blue-3/80 dark:focus:ring-blue-3/90"
                role="button">
                View case study
                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>

            <div class="space-y-4">
              <span
                class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Adobe Inc.
              </span>
              <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Logo design
              </h3>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>
              <a href="#" title=""
                class="text-white bg-blue-3 justify-center hover:bg-blue-3/80 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button">
                View case study
                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

     

    </>
  );
};

export default LicenciaDeConducir;