'use client'

import React, { useState } from 'react';
// import { useInView } from 'react-intersection-observer'
import Box from '@mui/joy/Box';
import { GetUltimasImagenes } from '../admin/imagenes/ImagenService';
import Grid from '@mui/joy/Grid';
import ModalClose from '@mui/joy/ModalClose';
import Modal from '@mui/joy/Modal';
import Sheet from '@mui/joy/Sheet';
import ImageComponent from '../ImageComponent';


const IMG = {
  width: 640,
  height: 480
}

const TabNovedades = ({ cantidad }) => {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  // const [caption, setCaption] = useState([]);

  // const [refGid, inViewGid] = useInView({
  //   threshold: 0,
  //   triggerOnce: true,
  //   initialInView: true,
  //   scale: [1, 1.5, 1],
  //   rootMargin: '100px 100px 30px 100px'
  // });

  const handleOpen = (src, alt) => {
    setImgSrc(src);
    // setCaption(alt);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mostrarImagenes = GetUltimasImagenes(cantidad);


  return (
    <>
      <section className="dark:bg-[#111928] pt-8">
        <div className="wow fadeIn overflow-hidden" data-wow-delay=".30s" data-wow-duration="3s">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="mb-1 text-3xl font-bold text-[#111928] dark:text-white sm:text-4xl md:text-[35px] md:leading-[1.2]">
                  Recién Graduados
                </h1>
                <p className="mb-2 text-base text-[#637381] dark:text-[#9CA3AF] mx-auto max-w-[650px]">
                  Felicita a nuestros alumnos graduados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="select-none cursor-pointer flex flex-wrap py-4 space-y-6 justify-center" >
        {/* </div> sx={{ width: 270, height: 200, flexGrow: 1, boxShadow: 'sm', borderColor: 'grey' }}> */}
        <Box className="grid gap-x-4 gap-y-3 text-center items-center">
          <div className="flex flex-wrap justify-center ">
            {mostrarImagenes.slice().reverse().map((item, index) => (
              <div key={index} className="w-full mx-1.5 md:w-1/2 lg:w-1/4">
                <div className="mb-3 overflow-hidden rounded-lg">
                  <Grid item xs={4} sm={4} md={4} onClick={() => handleOpen(`${item}`)}>
                    <ImageComponent key={index} iWidth={320} iHeight={320} iAlt="Alumnos graduados" iSrc={item} loading="lazy" iClassName="cursor-pointer w-full h-[250px] object-cover rounded-md focus:touch-pan-x hover:ease-in-out delay-300 border border-zinc-500 select-none overflow-hidden shadow-sm shadow-gray-300 dark:rounded-md dark:border dark:shadow-sm dark:border-zinc-800 dark:shadow-zinc-800 justify-center" />
                  </Grid>
                </div>
              </div>
              // <motion.div key={item} ref={refGid}
              //   initial="hidden" animate={inViewGid ? "visible" : "hidden"}
              //   whileInView={{ scale: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}
              //   transition={{ type: 'keyframes', times: [0, 0.5, 1], duration: 0.5 }}
              //   variants={{ hidden: { opacity: 1, y: 0, scale: 1 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              //   className="select-none flex flex-col">

              //   <Grid item xs={4} sm={4} md={4} onClick={() => handleOpen(`${item}`, "Mensaje caption!!!")}>
              //     <Image key={index} width={320} height={320} alt="Alumnos" src={item} loading="lazy"
              //       className="object-cover rounded-md focus:touch-pan-x hover:ease-in-out delay-300 border border-zinc-500 select-none overflow-hidden shadow-sm shadow-gray-300 dark:rounded-md dark:border dark:shadow-sm dark:border-zinc-800 dark:shadow-zinc-800 justify-center" />
              //   </Grid>
              // </motion.div>
            ))}
          </div>

          {/* <Modal open={open} onClose={handleClose}>
          <Sheet>
            <div id="myModal" className="modal-content" >
              <ModalClose className="close">&times;</ModalClose>
              <Image width={IMG.width} height={IMG.height} alt="Alumnos" id="myImg" src={imgSrc} loading="lazy" className="object-cover rounded-xl focus:touch-pan-x delay-200 border border-zinc-500 select-none dark:rounded-xl dark:border justify-center" />
              <div id="caption" className="text-center text-gray-900 dark:text-white">{caption}</div>
              </div>
              </Sheet>
              </Modal> */}

          <Modal id="myModal" open={open} onClose={handleClose} className="flex flex-wrap justify-center self-center">
            <Sheet className="w-fit h-fit rounded-xl flex" >
              <ModalClose className="close right-0 dark:bg-[#111928]/70 dark:hover:bg-[#111928]/70" variant='solid' color='neutral'>&times;</ModalClose>
              <ImageComponent iWidth={IMG.width} iHeight={IMG.height} iAlt="Alumnos" id="myImg" iSrc={imgSrc} loading="lazy" iClassName="object-cover rounded-xl focus:touch-pan-x delay-200 border border-zinc-500 select-none dark:rounded-lg dark:border justify-center" />
            </Sheet>
          </Modal>
          {/* {cantidad === 6 && <Link href="/galeria-media" className="text-base text-primary-800 hover:text-primary-600 dark:hover:text-primary-300 dark:text-primary-400">
          Mostrar todo &rarr;
        </Link>} */}
        </Box>
      </div>
    </>
  )
}

export default TabNovedades


