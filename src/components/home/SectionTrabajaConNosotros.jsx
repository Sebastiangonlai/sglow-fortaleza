'use client'

import { useState } from 'react';
import { twMerge } from "tailwind-merge";
import Modals from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { motion } from "framer-motion";
import Sheet from '@mui/joy/Sheet';
import ButtonTailwind from '@/components/ui/ButtonTailwind';
import swal from 'sweetalert';


const SectionTrabajaConNosotros = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div id="trabaja-con-nosotros" className="py-[20px] lg:py-[50px] border-t border-b border-stroke dark:border-[#1F2A37]/30 bg-(--color-section-1) min-w-screen">
        <div className="flex mx-auto justify-center items-center  sm:container">
          <div className="items-center justify-between lg:border-b border-stroke dark:border-slate-600/80 md:flex py-2">
            <div className="flex flex-wrap items-center">
              <div className="mx-auto max-w-7xl w-full lg:text-left text-center">
                <p className="pb-1.5 text-2xl font-bold text-[#111928] dark:text-white sm:text-3xl md:text-[32px] md:leading-[1]">
                  Trabaja con nosotros
                </p>
                <p className="lg:text-left text-center text-base text-[#637381] dark:text-[#9CA3AF] leading-tight">
                  ¿Querés unirte a nuestro equipo de instructores? Completá el siguiente formulario y adjuntá tu CV.
                </p>
              </div>
            </div>
            <button className="lg:flex-none flex mx-auto justify-center items-center pt-5 lg:pt-4 lg:flex pl-2 md:mt-0 py-4" aria-label="Postulate" onClick={handleOpen}>
              <ButtonTailwind name="Enviar postulación" color="bg-(--color-section-1)" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <Modals id="myModal" open={open} onClose={handleClose} className="flex flex-wrap mx-auto justify-center self-center px-2">
          <Sheet className="w-fit h-fit rounded-xl flex">
            <ModalClose className="close right-3 z-100 " aria-label="Close" color="none" sx={{ backgroundColor: "rgba(0, 0, 0, 0.0)", color: "#ffff" }}>&times;</ModalClose>
            <Blocks className="dark:bg-[#0d1117] md:min-w-[440px] p-4 col-span-12 row-span-2 md:col-span-6">
              <h3 className="text-[17px] mx-auto text-center text-white">Formulario de postulación</h3>
              <form method="POST" action={`import.meta.env.VITE_FORMSUBMIT`} enctype="multipart/form-data" onSubmit={UploadButton}>

                <div className="relative mb-1.5 pt-3">
                  <input id="name" name="Nombre" type="text" placeholder="Nombre*" className="w-full text-white rounded-md py-1.5 ring ring-zinc-600 px-4 focus:border-transparent focus:outline-hidden focus:ring-2 focus:ring-purple-300/50 dark:bg-[#0d1117]" required />
                </div>

                <div className="relative mb-1.5">
                  <input id="telefono" name="Telefono" type="text" placeholder="Telefono*"
                    className="w-full text-white rounded-md py-1.5 ring ring-zinc-600 focus:border-transparent px-4 focus:outline-hidden focus:ring-2 focus:ring-purple-300/50 dark:bg-[#0d1117]" required />
                </div>

                <div className="relative mb-1.5">
                  <input id="email" name="Email" type="email" placeholder="Email*" autoComplete="email" className="w-full text-white rounded-md py-1.5 ring ring-zinc-600 px-4 focus:border-transparent focus:outline-hidden focus:ring-2 focus:ring-purple-300/50 dark:bg-[#0d1117]" required />
                </div>

                <div className="relative mb-1.5">
                  <input type='file' name="Curriculum" accept=".pdf" className='w-full cursor-pointer rounded-md text-[14px] file:text-[14px] py-0.5 ring ring-zinc-600 text-[#8c8d96] outline-hidden transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 focus:border-transparent focus:outline-hidden focus:ring-1 focus:ring-purple-300/50 file:border-r file:border-solid file:border-[#8c8d96] dark:file:border-zinc-700 dark:file:bg-[#0d1117] file:py-1.5 file:px-4 file:text-zinc-500 dark:file:text-[#8c8d96]' required />
                </div>

                <div className="relative mb-1">
                  <textarea id="message" name="Mensaje" type="text" placeholder="Mensaje" className="w-full rounded-md py-1.5 ring ring-zinc-600 text-white px-4 focus:outline-hidden focus:ring-2 focus:ring-purple-300/50 dark:bg-[#0d1117]" />
                </div>

                <div className="relative mb-1.5 pt-1">
                  <button type="submit" className="w-full flex mx-auto justify-center items-center gap-2 whitespace-nowrap rounded-md border border-zinc-600/70 px-3 py-1.5 text-[14px] font-normal text-zinc-200 transition-colors bg-blue-600/20 hover:bg-blue-500/30">Enviar solicitud</button>
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

export default SectionTrabajaConNosotros;


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