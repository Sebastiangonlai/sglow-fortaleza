import React, { useState } from 'react';
import ExpandibleCard from '@/components/ExpandibleCard';
import Breadcrumb from '@/components/Breadcrumb';
import SectionPricing from '@/components/section/SectionPricing';
import ButtonSection from '@/components/ButtonSection';
import { URL_PDF } from '@/data/constants';
import Modal from '@mui/joy/Modal';

const LicenciaDeConducir = () => {
  const [openPdf, setOpenPdf] = useState(false);
  const [activa, setActiva] = useState(false);
  const handleOpen = () => {
    setActiva(true);
  };

  return (
    <>
      {/* <PageSEO title="Licencia de Conducir - Academia Fortaleza" description="Todo lo que necesitas saber para obtener tu licencia de conducir de forma rápida y sencilla." /> */}
      <section className="overflow-hidden">
        <Breadcrumb
          title="Licencia de Conducir"
          subtitle="Obtén tu licencia de conducir con nosotros."
          nameUri="Licencia de Conducir"
          href="nuestros-servicios" />
      </section>

      <section className="dark:bg-[#111928] pt-14 pb-4">
        <div className="overflow-hidden">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto max-w-7xl w-full px-4 text-left">
              <h1 className="mb-1 text-3xl font-bold text-[#111928] dark:text-white sm:text-4xl md:text-[35px] md:leading-[1]">
                Cursos a tu medida
              </h1>
              <p className="text-left text-base text-[#637381] dark:text-[#9CA3AF] max-w-[650px]">
                Cursos personalizados y adaptados a las distintas necesidades.
              </p>
            </div>
          </div>
        </div>
        <SectionPricing />
      </section>

      <section className="overflow-hidden dark:bg-[#1f2a37] ">
        <div className="max-w-[80rem] px-4 pb-10 pt-20 lg:py-20 sm:px-6 lg:px-8 lg:pt-20 mx-auto overflow-hidden dark:bg-[#1f2a37]">
          <div className="dark:bg-[#1f2a37] pb-6">
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
                    <span className="mt-0.5 h-5 w-5 flex-shrink-0 flex justify-center items-center rounded-full bg-[#334a61] text-blue-600 dark:bg-blue-600/40 dark:text-blue-400">
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
                    <span className="mt-0.5 h-5 w-5 flex-shrink-0 flex justify-center items-center rounded-full bg-[#334a61] text-blue-600 dark:bg-blue-600/40 dark:text-blue-400">
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
                    <span className="mt-0.5 h-5 w-5 flex-shrink-0 flex justify-center items-center rounded-full bg-[#334a61] text-blue-600 dark:bg-blue-600/40 dark:text-blue-400">
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
      </section>

      <section className="dark:bg-[#111928] pt-20">
        <div className=" overflow-hidden mb-2">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto max-w-7xl w-full px-4 text-left">
              <h4 className="mb-1 text-3xl font-bold text-[#111928] dark:text-white sm:text-4xl md:text-[35px] md:leading-[1]">
                Caracteristicas
              </h4>
              <p className="text-left text-base text-[#637381] dark:text-[#9CA3AF] max-w-[650px]">
                Descubre las ventajas de nuestros cursos.
              </p>
            </div>
          </div>
        </div>
        <ExpandibleCard />
      </section>

      <div className="flex mx-auto justify-center gap-x-2 dark:bg-[#111928]">
        <div className="text-center pt-6 pb-8 overflow-hidden space-x-3 inline-block" >
          <ButtonSection
            namebtn="Todos los Servicios"
            uri="/nuestros-servicios" />
        </div>

        <div className="text-center pt-6 pb-8 overflow-hidden space-x-3 inline-block" >
          <ButtonSection
            namebtn="Medios de Pago"
            uri="/medios-de-pago" />
        </div>
      </div>

      <Modal open={activa} onClose={() => setActiva(false)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <iframe src={openPdf} style={{ width: '90%', maxWidth: '85vw', height: '100%', maxHeight: '95vh', border: 'none' }}
          frameBorder="0" title="PDF Viewer" />
      </Modal>
    </>
  );
};

export default LicenciaDeConducir;