import React, { StrictMode, useState } from 'react';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles'
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Grid from '@mui/joy/Grid';
import ImageComponent from '@/components/ImageComponent';
import Breadcrumb from "@/components/Breadcrumb";
import Modal from '@mui/joy/Modal';
import { RiSteering2Fill } from "react-icons/ri";
import { LuCircleParking, LuConstruction } from "react-icons/lu";
import { IoDocumentOutline } from "react-icons/io5";
import { BsSignStop, BsSignStopLights } from "react-icons/bs";
import { URL_PDF } from '@/data/constants';
// import PageSEO from '@/components/SEO';


const TestOnline = () => {
  const [openPdf, setOpenPdf] = useState(false);
  const [activa, setActiva] = useState(false);

  const handleOpen = () => {
    setActiva(true);
  };

  const handleClose = () => {
    setActiva(false);
  };

  return (
    <>
      {/* <PageSEO title="Test Online - Academia Fortaleza" description="Practica con nuestro test online y prepárate para el examen teórico de la licencia de conducir." /> */}

      <div className="dark:bg-[#111928]">
        <StrictMode>
          <StyledEngineProvider injectFirst>

            <Breadcrumb
              title="Examen Teórico"
              subtitle="Prepárate para tu examen teórico."
              nameUri="Teórico"
              href="nuestros-servicios" />

            <CssVarsProvider>
              <section className="body-font overflow-hidden pt-4">
                <div className="container py-5 mx-auto">
                  <div className="flex flex-col text-center w-full mb-15">
                    <h1 className='text-xl font-semibold text-blue-200 pt-4'>Evaluación online</h1>
                    <p className="lg:w-2/3 mx-auto text-base text-gray-800 dark:text-gray-300">Selecciona una versión para comenzar.</p>
                    <div className="flex flex-col text-center mb-3 pt-1"></div>
                    <div className="select-none flex space-x-1 mx-auto w-full justify-center overflow-hidden ">
                      <button className="flex w-[105px] h-[40px] cursor-pointer rounded-lg border-[0.1rem] border-slate-300 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-[#111928] dark:hover:border-blue-600 text-sm items-center justify-center " onClick={() => window.location.href = '/pruebas/prueba-teorico'}
                      >
                        Versión 1
                        <a className="rotate-90 h-5 w-4 rounded-full cursor-pointer flex justify-center hover:scale-110">
                          <Icon />
                        </a>
                      </button>
                      <button className="flex w-[105px] h-[40px] cursor-pointer rounded-lg border-[0.1rem] border-slate-300 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-[#111928] dark:hover:border-blue-600 text-sm items-center justify-center " onClick={() => window.location.href = '/pruebas/prueba-teorico-dos'}>
                        Versión 2
                        <a className="rotate-90 h-5 w-4 rounded-full cursor-pointer flex justify-center hover:scale-110">
                          <Icon />
                        </a>
                      </button>
                      <button className="flex w-[105px] h-[40px] cursor-pointer rounded-lg border-[0.1rem] border-slate-300 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-[#111928] dark:hover:border-blue-600 text-sm items-center justify-center " onClick={() => window.location.href = '/pruebas/prueba-teorico-tres'}>
                        Versión 3
                        <a className="rotate-90 h-5 w-4 rounded-full cursor-pointer flex justify-center hover:scale-110">
                          <Icon />
                        </a>
                      </button>
                      <button className="flex w-[105px] h-[40px] cursor-pointer rounded-lg border-[0.1rem] border-slate-300 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-[#111928] dark:hover:border-blue-600 text-sm items-center justify-center " onClick={() => window.location.href = '/pruebas/prueba-teorico-cuatro'}>
                        Versión 4
                        <a className="rotate-90 h-5 w-4 rounded-full cursor-pointer flex justify-center hover:scale-110">
                          <Icon />
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="body-font text-center space-y-3 pt-5 wow fadeInUp">
                <h1 className='text-xl font-semibold text-blue-200'>Material IMM</h1>
                <Stack className="mx-auto justify-center" direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 3, md: 4 }}>
                  <Grid container className="justify-center space-x-2">
                    <button onClick={() => { setOpenPdf(URL_PDF.teoricoAcademia), handleOpen(true) }}>
                      <Card className="bg-[#111928]/10 dark:hover:border dark:hover:border-blue-600 dark:text-white dark:border-slate-300/20" orientation="horizontal" variant="outlined" sx={{ width: 340 }}>
                        <CardOverflow>
                          <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <ImageComponent iSrc="/static/doc/portada.webp" iAlt="Téorico IMM" loading="lazy" iWidth={100} iHeight={100} />
                          </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                          <Typography className="dark:text-white" fontWeight="md">Téorico IMM</Typography>
                          <Typography level="body-sm" className="dark:text-gray-300">Guia nacional de conducción</Typography>
                        </CardContent>
                      </Card>
                    </button>
                  </Grid>

                  <Grid container className="justify-center space-x-2">
                    <button onClick={() => { setOpenPdf(URL_PDF.protocoloActuacion), handleOpen(true) }}>
                      <Card className="bg-[#111928]/10 dark:hover:border dark:hover:border-blue-600 dark:text-white dark:border-slate-300/20" orientation="horizontal" variant="outlined" sx={{ width: 340 }}>
                        <CardOverflow>
                          <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <ImageComponent iSrc="/static/images/card/servicio_2.webp" iAlt="Examen Practico" loading="lazy" iWidth={100} iHeight={100} />
                          </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                          <Typography className="dark:text-white" fontWeight="md">Examen Practico</Typography>
                          <Typography level="body-sm" className="dark:text-gray-300">Protocolo exámenes prácticos</Typography>
                        </CardContent>
                      </Card>
                    </button>
                  </Grid>
                </Stack>
              </section>

              <section className="text-blue-200 body-font wow fadeInUp">
                <div className="lg:w-2/2 md:w-1/1 mx-auto px-4 pt-8 justify-center items-center">
                  {/* <Stack className="mx-auto justify-center" direction={{ xs: 'column', sm: 'column' }} spacing={{ xs: 2, sm: 4, md: 5 }}> */}
                  <Stack className="mx-auto justify-center" direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 3, md: 4 }}>
                    <div className="text-center space-y-3">
                      <h1 className='text-xl font-semibold'>Material de apoyo</h1>
                      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <button className="max-w-md h-[64px] cursor-pointer rounded-lg border-[0.1rem] border-slate-300 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-[#111928] dark:hover:border-blue-600" onClick={() => { setOpenPdf(URL_PDF.senalesReglamentarias), handleOpen(true) }}>
                          <div className="flex w-full items-center justify-between px-4 py-5">
                            <div className="flex items-center justify-start gap-2 text-slate-900 dark:text-slate-200">
                              <BsSignStopLights className="text-gray-200 h-6 w-6 -mt-0.5" />
                              <h2 className="inline-flex text-base text-sw sm:text-sm tracking-wide">Señales de tránsito</h2>
                            </div>
                            <div className="text-slate-900 dark:text-slate-200">
                              <IconArrow />
                            </div>
                          </div>
                        </button>

                        <button className="max-w-md h-[64px] cursor-pointer rounded-lg border-[0.1rem] border-slate-300 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-[#111928] dark:hover:border-blue-600" onClick={() => { setOpenPdf(URL_PDF.factoresRiesgo), handleOpen(true) }}>
                          <div className="flex w-full items-center justify-between px-4 py-5">
                            <div className="flex items-center justify-start gap-2 text-slate-900 dark:text-slate-200">
                              <RiSteering2Fill className="text-gray-200 h-6 w-6 -mt-0.5" />
                              <h2 className="inline-flex text-base text-sw sm:text-sm tracking-wide">Factores de riesgo</h2>
                            </div>
                            <div className="text-slate-900 dark:text-slate-200">
                              <IconArrow />
                            </div>
                          </div>
                        </button>

                        <button className="max-w-md h-[64px] cursor-pointer rounded-lg border-[0.1rem] border-slate-300 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-[#111928] dark:hover:border-blue-600" onClick={() => { setOpenPdf(URL_PDF.estacionarSeguro), handleOpen(true) }}>
                          <div className="flex w-full items-center justify-between px-4 py-5">
                            <div className="flex items-center justify-start gap-2 text-slate-900 dark:text-slate-200">
                              <LuConstruction className="text-gray-200 h-6 w-6 -mt-0.5" />
                              <h2 className="inline-flex text-base text-sw sm:text-sm  tracking-wide">Como estacionar</h2>
                            </div>
                            <div className="text-slate-900 dark:text-slate-200">
                              <IconArrow />
                            </div>
                          </div>
                        </button>

                        <button className="max-w-md h-[64px] cursor-pointer rounded-lg border-[0.1rem] border-slate-300 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-[#111928] dark:hover:border-blue-600" onClick={() => { setOpenPdf(URL_PDF.teoricoAcademia), handleOpen(true) }}>
                          <div className="flex w-full items-center justify-between px-4 py-5">
                            <div className="flex items-center justify-start gap-2 text-slate-900 dark:text-slate-200">
                              <LuCircleParking className="text-gray-200 h-6 w-6 -mt-0.5" />
                              <h2 className="inline-flex text-base text-sw sm:text-sm  tracking-wide">Examén teórico</h2>
                            </div>
                            <div className="text-slate-900 dark:text-slate-200">
                              <IconArrow />
                            </div>
                          </div>
                        </button>

                        <button className="max-w-md h-[64px] cursor-pointer rounded-lg border-[0.1rem] border-slate-300 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-[#111928] dark:hover:border-blue-600" onClick={() => { setOpenPdf(URL_PDF.senalesAnexo), handleOpen(true) }}>
                          <div className="flex w-full items-center justify-between px-4 py-5">
                            <div className="flex items-center justify-start gap-2 text-slate-900 dark:text-slate-200">
                              <BsSignStop className="text-gray-200 h-6 w-6 -mt-0.5" />
                              <h2 className="inline-flex text-base text-sw sm:text-sm  tracking-wide">Señales anexo</h2>
                            </div>
                            <div className="text-slate-900 dark:text-slate-200">
                              <IconArrow />
                            </div>
                          </div>
                        </button>

                        <button className="max-w-md h-[64px] cursor-pointer rounded-lg border-[0.1rem] border-slate-300 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-[#111928] dark:hover:border-blue-600" onClick={() => { setOpenPdf(URL_PDF.glosario), handleOpen(true) }}>
                          <div className="flex w-full items-center justify-between px-4 py-5">
                            <div className="flex items-center justify-start gap-2 text-slate-900 dark:text-slate-200">
                              <IoDocumentOutline className="text-gray-200 h-6 w-6 -mt-0.5" />
                              <h2 className="inline-flex text-base text-sw sm:text-sm  tracking-wide">Glosario</h2>
                            </div>
                            <div className="text-slate-900 dark:text-slate-200">
                              <IconArrow />
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>


                  </Stack>
                </div>
              </section>

              <section className='max-w-[500px] justify-center mx-auto pt-10 py-2'>
                <h1 className='text-xl font-semibold text-blue-200 text-center mb-3'>Aprende Jugando</h1>
                <Grid container className="justify-center">
                  <button onClick={() => window.location.href = '/juego-preguntas-examen'} >
                    <Card className="bg-[#111928]/10 dark:hover:border dark:hover:border-blue-600 dark:text-white dark:border-slate-300/20" orientation="horizontal" variant="outlined" sx={{ width: 340 }}>
                      <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 90 }}>
                          <ImageComponent
                            iSrc="/static/images/game/icojuego.png"
                            iAlt="Examen Practico"
                            loading="lazy" iWidth={90} iHeight={90} />
                        </AspectRatio>
                      </CardOverflow>
                      <CardContent>
                        <Typography className="dark:text-white" fontWeight="md">Juega con nosotros</Typography>
                        <Typography level="body-sm" className="dark:text-gray-300">Preguntas de examen teorico</Typography>
                      </CardContent>
                    </Card>
                  </button>
                </Grid>
              </section>

              <Modal open={activa} onClose={() => setActiva(false)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <iframe
                  src={openPdf}
                  style={{ width: '90%', maxWidth: '95vw', height: '100%', maxHeight: '96vh' }}
                  frameBorder="0"
                  type="application/pdf"
                  title="PDF Viewer" />
              </Modal>
            </CssVarsProvider>
          </StyledEngineProvider>
        </StrictMode>
      </div >
    </>
  )
}

export default TestOnline;

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" id="Arrows-Button-Up--Streamline-Micro" height="10" width="10">
      <path fill="#9fd3ff" d="M9.794 6.608 5.887 2.49a1.254 1.254 0 0 0 -1.782 0.01L0.208 6.6A0.755 0.755 0 0 0 1.3 7.64l3.523 -3.71a0.249 0.249 0 0 1 0.362 0l3.522 3.713a0.75 0.75 0 1 0 1.087 -1.034Z" strokeWidth="1">
      </path>
    </svg>
  );
}

const IconArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l14 0"></path>
      <path d="M15 16l4 -4"></path>
      <path d="M15 8l4 4"></path>
    </svg>
  );
}
