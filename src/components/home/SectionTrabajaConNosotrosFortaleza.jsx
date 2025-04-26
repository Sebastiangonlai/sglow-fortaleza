'use client'

import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";
import Modals from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { motion } from "framer-motion";
import Sheet from '@mui/joy/Sheet';
import swal from 'sweetalert';


const SectionTrabajaConNosotrosFortaleza = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="bg-white py-[20px] lg:py-[50px] px-2 dark:bg-[#182341] border-t border-b border-stroke dark:border-[#1F2A37]/30 ">
        <div className="flex mx-auto justify-center items-center px-1 sm:container">
          <div className="items-center justify-between lg:border-b border-stroke dark:border-slate-600/80 md:flex py-2">
            <div className="overflow-hidden">
              <div className="flex flex-wrap items-center">
                <div className="mx-auto max-w-7xl w-full lg:px-2 lg:text-left text-center">
                  <h1 className="pb-2 text-2xl font-bold text-[#111928] dark:text-white sm:text-3xl md:text-[35px] md:leading-[1]">
                    Trabaja con nosotros
                  </h1>
                  <p className="lg:text-left text-center text-base text-[#637381] dark:text-[#9CA3AF] leading-tight">
                    ¿Querés unirte a nuestro equipo de instructores? Completá el siguiente formulario y adjuntá tu CV.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:flex-none flex mx-auto justify-center items-center pt-5 lg:pt-4  lg:flex  pl-2 md:mt-0 ">
              <button aria-label="Postulate" onClick={handleOpen} className="inline-block py-2 lg:py-2 px-5 lg:mr-6 text-white text-[14px] font-medium bg-[#4338ca]/70 duration-150 hover:bg-[#4338ca]/50 rounded-full shadow-sm hover:shadow-sm whitespace-nowrap items-center">
                Enviar postulación
              </button>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Modals id="myModal" open={open} onClose={handleClose} className="flex flex-wrap mx-auto justify-center self-center px-2">
          <Sheet className="w-fit h-fit rounded-xl flex">
            <ModalClose className="right-3 dark:bg-[#0d1117]/70 dark:hover:bg-[#111928]/70 z-100" variant='solid' color='neutral'>&times;</ModalClose>
            <Blocks className="dark:bg-[#0d1117] md:min-w-[440px] p-4 col-span-12 row-span-2 md:col-span-6">
              <h3 className="text-[17px] mx-auto text-center text-white">Formulario de postulación</h3>
              <form method="POST" action={import.meta.env.VITE_FORMSUBMIT} enctype="multipart/form-data" onSubmit={UploadButton}>

                <div className="relative mb-1.5 pt-3">
                  <input id="name" name="Nombre" type="text" placeholder="Nombre*" className="w-full text-white rounded-md border-zinc-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:bg-[#0d1117]" required />
                </div>

                <div className="relative mb-1.5">
                  <input id="telefono" name="Telefono" type="text" placeholder="Telefono*"
                    className="w-full text-white rounded-md border-zinc-600 focus:border-transparent px-4 focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:bg-[#0d1117]" required />
                </div>

                <div className="relative mb-1.5">
                  <input id="email" name="Email" type="email" placeholder="Email*" autoComplete="email" className="w-full text-white rounded-md  border-zinc-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:bg-[#0d1117]" required />
                </div>

                <div className="relative mb-1.5">
                  <input type='file' name="Curriculum" accept=".pdf" className='w-full cursor-pointer rounded-md text-sm file:text-base border border-zinc-600 text-gray-500 outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600/50 file:border-r file:border-solid file:border-zinc-600 dark:file:border-zinc-600 dark:file:bg-[#0d1117] file:py-1.5 file:px-4 file:text-gray-500 dark:file:text-gray-500' required />
                </div>

                <div className="relative mb-1">
                  <textarea id="message" name="Mensaje" type="text" placeholder="Mensaje" className="w-full rounded-md border-zinc-600 text-white px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:bg-[#0d1117]" />
                </div>

                <div className="relative mb-1.5 pt-1">
                  <button type="submit" className="w-full flex mx-auto justify-center items-center gap-2 whitespace-nowrap rounded-full border border-zinc-600/70 px-3 py-1.5 text-[16px] font-normal text-zinc-200 transition-colors bg-blue-600/20 hover:bg-blue-600/70">Enviar solicitud</button>
                </div>

                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Has recibido una nueva postulación" />
                <input type="hidden" name="_next" value="https://academiafortaleza.com.uy" />
                <input type="hidden" name="_captcha" value="false" />
              </form>
            </Blocks>
          </Sheet>
        </Modals>
      </div>
    </>
  )
}

export default SectionTrabajaConNosotrosFortaleza;


const Blocks = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0, },
        animate: { scale: 1, y: 0, opacity: 1, },
      }}
      transition={{ type: "spring", mass: 5, stiffness: 400, damping: 80, }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-[#111928] p-6",
        className,
      )}
      {...rest}
    />
  );
};

function UploadButton() {
  swal({
    title: "Postulación enviada con exito!\n",
    icon: "success",
    dangerMode: false,
    position: "center",
    timer: 3000,
  })
}

