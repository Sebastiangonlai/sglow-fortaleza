'use client'
import React, { useState } from 'react';
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

export function TabAlumnos() {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Items por pagina.
  const totalItems = 120;  // Cantidad total de imágenes.

  const totalPages = Math.ceil(totalItems / itemsPerPage); // Cantidad total de páginas.
  const imagesUrl = GetUltimasImagenes(totalItems);

  // Calcular las imágenes que se mostrarán en cada pagina.
  const lastItem = imagesUrl.length - (currentPage * itemsPerPage);
  const firstItem = (lastItem - itemsPerPage);
  const showImages = imagesUrl.slice(firstItem + 6, lastItem + 6);


  const handleOpen = (src) => {
    setImgSrc(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // Funcion para manejar el cambio de página.
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Función para crear un rango de números de páginas a mostrar en el paginador.
  const getPageNumbers = () => {
    const maxPageNumbersToShow = 5; // Máximo de números de páginas a mostrar.
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    if (endPage - startPage + 1 < maxPageNumbersToShow) {
      startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  return (
    <>
      <section className="dark:bg-[#111928] pt-8">
        <div className="wow fadeIn overflow-hidden" data-wow-delay=".30s" data-wow-duration="3s">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center">
                <h2 className="mb-1 text-3xl font-bold text-[#111928] dark:text-white sm:text-4xl md:text-[35px] md:leading-[1.2]">
                  Nuestros Graduados
                </h2>
                <p className="mb-2 text-base text-[#637381] dark:text-[#9CA3AF] mx-auto max-w-[650px]">
                  Es un orgullo celebrar cientos de licencias otorgadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-14 pb-10 lg:pt-[14px] lg:pb-10 dark:bg-[#111928]">
        <div className="wow fadeIn overflow-hidden p-2" data-wow-delay=".30s" data-wow-duration="3s">

          {/* Mostrar imágenes de la página actual */}
          <div className="flex flex-wrap justify-center ">
            {showImages.slice().reverse().map((item, index) => (
              <div key={index} className="w-full mx-1.5 md:w-1/2 lg:w-1/4">
                <div className="mb-3 overflow-hidden rounded-lg">
                  <Grid item xs={4} sm={4} md={4} onClick={() => handleOpen(`${item}`)}>
                    <ImageComponent key={index} iWidth={320} iHeight={320} iAlt="Alumnos graduados" iSrc={item} loading="lazy" iClassName="cursor-pointer w-full h-[250px] object-cover rounded-md focus:touch-pan-x hover:ease-in-out delay-300 border border-zinc-500 select-none overflow-hidden shadow-sm shadow-gray-300 dark:rounded-md dark:border dark:shadow-sm dark:border-zinc-800 dark:shadow-zinc-800 justify-center" />
                  </Grid>
                </div>
              </div>
            ))}
          </div>


          <Modal id="myModal" open={open} onClose={handleClose} className="flex flex-wrap justify-center self-center">
            <Sheet className="w-fit h-fit rounded-xl flex" >
              <ModalClose className="close right-0 dark:bg-[#111928]/70 dark:hover:bg-[#111928]/70" variant='solid' color='neutral'>&times;</ModalClose>
              <ImageComponent iWidth={IMG.width} iHeight={IMG.height} iAlt="Alumnos" id="myImg" iSrc={imgSrc} loading="lazy" iClassName="object-cover rounded-xl focus:touch-pan-x delay-200 border border-zinc-500 select-none dark:rounded-lg dark:border justify-center" />
            </Sheet>
          </Modal>

          <div className="bg-white py-10 text-center dark:bg-[#111928]">
            <div className="inline-flex gap-1 rounded-full border border-stroke p-2 dark:border-white/10">
              <ul className="flex items-center gap-1">

                {/* Botón para ir a la primera página */}
                <li className='hidden sm:hidden md:flex lg:flex'>
                  <button className="flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-[#111928] hover:bg-blue-2 dark:text-white dark:hover:bg-blue/20" onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" id="Chevron-Left-Pipe--Streamline-Tabler" height="22" width="22"><path d="M4.375 3.75v7.5" strokeWidth="1.2"></path><path d="m11.25 3.75 -3.75 3.75 3.75 3.75" strokeWidth="1.2"></path></svg>
                  </button>
                </li>

                {/* Botón para retroceder una página */}
                <li>
                  <button className="flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-[#111928] hover:bg-blue-2 dark:text-white dark:hover:bg-blue/20" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" id="Chevron-Left--Streamline-Tabler" height="22" width="22"><path d="m9.375 3.75 -3.75 3.75 3.75 3.75" strokeWidth="1.2"></path>
                    </svg>
                  </button>
                </li>

                {/* Números de páginas */}
                {getPageNumbers().map((pageNumber) => (
                  <li key={pageNumber}>
                    <button onClick={() => handlePageChange(pageNumber)}
                      className={`flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-[#111928] hover:bg-blue dark:text-white dark:hover:bg-blue/20 ${currentPage === pageNumber ? 'dark:bg-blue/20 dark:font-semibold' : 'text-[#637381] dark:text-[#9CA3AF]'}`}>
                      {pageNumber}
                    </button>
                  </li>
                ))}

                {/* Botón para avanzar una página */}
                <li>
                  <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
                    className="flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-[#111928] hover:bg-[#F3F4F6] dark:text-white dark:hover:bg-blue/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" id="Chevron-Right-Pipe--Streamline-Tabler" height="22" width="22"><path d="m5.625 3.75 3.75 3.75 -3.75 3.75" strokeWidth="1.2"></path>
                    </svg>
                  </button>
                </li>

                {/* Botón para ir a la última página */}
                <li className='hidden sm:hidden md:flex lg:flex'>
                  <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}
                    className="flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-[#111928] hover:bg-blue-2 dark:text-white dark:hover:bg-blue/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" id="Chevron-Right-Pipe--Streamline-Tabler" height="22" width="22"><path d="m3.75 3.75 3.75 3.75 -3.75 3.75" strokeWidth="1.2"></path><path d="M10.625 3.125v8.125" strokeWidth="1.2"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
