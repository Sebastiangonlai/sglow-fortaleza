'use client'

import React, { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer'
import Box from '@mui/joy/Box';
import { listImagesSupabase } from '@/api/ImagenService';
import Grid from '@mui/joy/Grid';
import ModalClose from '@mui/joy/ModalClose';
import Modal from '@mui/joy/Modal';
import Sheet from '@mui/joy/Sheet';
import ImageComponent from '../ImageComponent';


const IMG = {
  width: 140,
  height: 180
}

const TabNovedades = ({ cantidad }) => {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [recibidos, setRecibidos] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const resp = await listImagesSupabase({ imgFirst: 0, imgLimit: 1000 });
      setRecibidos(resp);
    };
    fetchDatas();
  }, []);

  const resp = recibidos.slice(0, cantidad);

  const handleOpen = (src, alt) => {
    setImgSrc(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="dark:bg-[#111928] pt-8">
        <div className="overflow-hidden">
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
            {resp.slice().map((item, index) => (
              <div key={index} className="w-full mx-1.5 md:w-1/2 lg:w-1/4">
                <div className="mb-3 overflow-hidden rounded-lg">
                  <Grid item xs={4} sm={4} md={4} onClick={() => handleOpen(`${item}`)}>
                    <ImageComponent key={index} iWidth={140} iHeight={180} iAlt={item} iSrc={item} loading="lazy" iClassName="cursor-pointer object-cover rounded-md focus:touch-pan-x hover:ease-in-out delay-300 border border-zinc-500 select-none overflow-hidden shadow shadow-gray-300 dark:rounded-md dark:border dark:shadow dark:border-zinc-800 dark:shadow-zinc-800 justify-center" />
                  </Grid>
                </div>
              </div>
            ))}
          </div>

          <Modal id="myModal" open={open} onClose={handleClose} className="flex flex-wrap justify-center self-center items-center">
            <Sheet className=" rounded-xl flex" >
              <ModalClose className="close right-3 z-100" aria-label="Close" color="none"
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.70)", color: "#ffff", }}>&times;</ModalClose>
              <ImageComponent iWidth={IMG.width} iHeight={IMG.height} iAlt="Alumnos" id="myImg" iSrc={imgSrc} loading="lazy" iClassName="max-w-[720px] max-h-[640px]object-cover rounded-xl focus:touch-pan-x delay-200 border border-zinc-500 select-none dark:rounded-lg dark:border justify-center" />
            </Sheet>
          </Modal>
        </Box>
      </div>
    </>
  )
}

export default TabNovedades