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

  return (
    <>
      <div id="trabaja-con-nosotros" className=" py-8 lg:py-12 border-t border-stroke dark:border-(--color-border-2)/10 bg-(--color-section-1)">
        <div className="mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-3 w-fit">
          <div className="text-center lg:text-left max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold leading-tight">
              Trabaja con nosotros
            </h2>
            <p className="mt-2 text-base text-[#637381] dark:text-[#9CA3AF]">
              ¿Querés unirte a nuestro equipo de instructores? Completá el formulario y adjuntá tu CV.
            </p>
          </div>
          <div>
            <ButtonTailwind name="Enviar postulación" onClick={handleOpen} color="bg-(--color-section-1)" className="mt-4" />
          </div>
        </div>
      </div>

      <div>
        <Modals id="myModal" open={open} onClose={handleClose} className="flex justify-center self-center px-2">
          <Sheet className="w-fit h-fit rounded-xl">
            <ModalClose
              className="absolute right-3 top-3 z-50 text-white"
              aria-label="Cerrar"
              color="none"
              sx={{ backgroundColor: "transparent", color: "#ffff" }}
            >
              &times;
            </ModalClose>

            <div className="dark:bg-[#0d1117] md:min-w-[440px] p-6 rounded-lg border border-zinc-700 bg-[#111928]">
              <h3 className="text-lg text-center text-white font-semibold mb-4">Formulario de postulación</h3>

              <form
                method="POST"
                action={import.meta.env.VITE_FORMSUBMIT}
                encType="multipart/form-data"
                onSubmit={UploadButton}
              >
                {[
                  { id: "name", name: "Nombre", type: "text", placeholder: "Nombre*", autoComplete: undefined },
                  { id: "telefono", name: "Telefono", type: "text", placeholder: "Teléfono*", autoComplete: undefined },
                  { id: "email", name: "Email", type: "email", placeholder: "Email*", autoComplete: "email" },
                ].map(({ id, ...props }) => (
                  <div className="mb-2" key={id}>
                    <input
                      id={id}
                      className="w-full text-white rounded-md py-1.5 px-4 ring ring-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-300/50 dark:bg-[#0d1117]"
                      required
                      {...props}
                    />
                  </div>
                ))}

                <div className="mb-2">
                  <input                    type="file"                    name="Curriculum"                    accept=".pdf"
                    required                    className="w-full cursor-pointer rounded-md text-sm file:text-sm ring ring-zinc-600 text-[#8c8d96] file:py-1.5 file:px-4 file:border-0 file:rounded-md file:mr-4 file:bg-zinc-800 file:text-zinc-400 dark:file:bg-[#0d1117]"                  />
                </div>

                <div className="mb-2">
                  <textarea
                    id="message"
                    name="Mensaje"
                    placeholder="Mensaje"
                    className="w-full rounded-md py-1.5 px-4 ring ring-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-300/50 dark:bg-[#0d1117]"/>
                </div>

                <div className="mt-4">
                  <button                    type="submit"                    className="w-full rounded-md border border-zinc-600/70 px-4 py-2 text-sm text-white bg-blue-600/20 hover:bg-blue-500/30 transition-colors">
                    Enviar solicitud
                  </button>
                </div>

                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Has recibido una nueva postulación" />
                <input type="hidden" name="_next" value="https://academiafortaleza.com.uy" />
                <input type="hidden" name="_captcha" value="false" />
              </form>
            </div>
          </Sheet>
        </Modals>
      </div>

      
      {/* <div>
        <Modals id="myModal" open={open} onClose={handleClose} className="flex flex-wrap mx-auto justify-center self-center px-2">
          <Sheet className="w-fit h-fit rounded-xl flex">
            <ModalClose className="close right-3 z-100 " aria-label="Close" color="none" sx={{ backgroundColor: "rgba(0, 0, 0, 0.0)", color: "#ffff" }}>&times;</ModalClose>
            <div className="dark:bg-[#0d1117] md:min-w-[440px] p-4 col-span-12 row-span-2 md:col-span-6 col-span-4 rounded-lg border border-zinc-700 bg-[#111928] p-6">
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
            </div>
          </Sheet>
        </Modals>
      </div> */}
    </>
  )
}

export default SectionTrabajaConNosotros;


// const Blocks = ({ className, ...rest }) => {
//   return (
//     <motion.div
//       variants={{
//         initial: { scale: 0.5, y: 50, opacity: 0, },
//         animate: { scale: 1, y: 0, opacity: 1, },
//       }}
//       transition={{ type: "spring", mass: 5, stiffness: 400, damping: 80, }}
//       className={twMerge(
//         "col-span-4 rounded-lg border border-zinc-700 bg-[#111928] p-6",
//         className,
//       )}
//       {...rest}
//     />
//   );
// };

function UploadButton() {
  swal({
    title: "Postulación enviada con exito!\n",
    icon: "success",
    dangerMode: false,
    position: "center",
    timer: 3000,
  })
}