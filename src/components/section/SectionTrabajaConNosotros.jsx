'use client'

import { useState } from 'react';
import Modals from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
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

  const inputClass = "w-full rounded-md py-1.5 px-4 ring ring-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-300/50 dark:bg-[#0d1117]";
  const labelClass = "block text-sm text-zinc-300 mb-1";
  const fileClass = "w-full cursor-pointer rounded-md text-sm ring ring-zinc-600 text-[#8c8d96] file:py-1.5 file:px-4 file:border-0 file:rounded-md file:bg-zinc-800 file:text-zinc-400 dark:file:bg-[#0d1117]";

  return (
    <>
      <div id="trabaja-con-nosotros" className="py-8 lg:py-12 border-t border-stroke dark:border-(--color-border-2)/10 bg-(--color-section-1)">
        <div className="mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4 w-fit">
          <div className="text-center lg:text-left max-w-3xl ">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold leading-tight ">
              Trabaja con nosotros
            </h2>
            <p className="mt-2 text-base text-[#637381] dark:text-[#9CA3AF] leading-tight">
              ¿Querés unirte a nuestro equipo de instructores? Completá el formulario y adjuntá tu CV.
            </p>
          </div>
          <div>
            <ButtonTailwind name="Enviar postulación" onClick={handleOpen} color="bg-(--color-section-1)" className="mt-4" />
          </div>
        </div>
      </div>

        <Modals id="myModal" open={open} onClose={handleClose} className="flex justify-center self-center px-2">
          <Sheet className="w-fit h-fit rounded-2xl">
            <ModalClose className="absolute right-3 top-3 z-50 text-white" aria-label="Cerrar" color="none" sx={{ backgroundColor: "transparent", color: "#ffff" }}>&times;</ModalClose>

            <div className="dark:bg-[#0d1117] md:min-w-[440px] p-5 rounded-xl border border-zinc-700 bg-(--color-section-3)">
              <h3 className="text-lg text-center text-white font-semibold mb-3">Formulario de postulación</h3>
              <form method="POST" action={import.meta.env.VITE_FORMSUBMIT} encType="multipart/form-data" onSubmit={UploadButton}>
                <fieldset className="space-y-2.5">
                  <legend className="sr-only">Datos de postulación</legend>

                  <label htmlFor="name" className={labelClass}>Nombre*</label>
                  <input id="name" name="Nombre" type="text" autoComplete="name" required className={inputClass} />

                  <label htmlFor="telefono" className={labelClass}>Teléfono*</label>
                  <input id="telefono" name="Telefono" type="text" required className={inputClass} />

                  <label htmlFor="email" className={labelClass}>Email*</label>
                  <input id="email" name="Email" type="email" autoComplete="email" required className={inputClass} />

                  <label htmlFor="cv" className={labelClass}>Currículum (.pdf)*</label>
                  <input id="cv" name="Curriculum" type="file" accept=".pdf" required className={fileClass} />

                  <label htmlFor="message" className={labelClass}>Mensaje (opcional)</label>
                  <textarea id="message" name="Mensaje" rows="3" className={inputClass} />

                  <button type="submit" className="w-full mt-1 rounded-md border border-zinc-600/70 px-4 py-2 text-sm text-white bg-blue-600/20 hover:bg-blue-500/30 transition-colors">
                    Enviar solicitud
                  </button>

                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="Has recibido una nueva postulación" />
                  <input type="hidden" name="_next" value="https://academiafortaleza.com.uy" />
                  <input type="hidden" name="_captcha" value="false" />
                </fieldset>
              </form>
            </div>
          </Sheet>
        </Modals>
    </>
  )
}

export default SectionTrabajaConNosotros;

const UploadButton = (e) => {
  e.preventDefault();
  swal({
    title: "Postulación enviada con éxito!\n",
    icon: "success",
    timer: 3000,
    buttons: false,
  });

  e.target.submit(); 
};
