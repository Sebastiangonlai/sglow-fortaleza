import { MyImagesGrid } from '@/components/MyImgGrid';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ImageComponent from '@/components/ImageComponent';


export default function MediosDePago() {

  return (
    <>
      {/* <PageSEO title="Ofertas y Descuentos - Academia Fortaleza" description="Aprovecha nuestras ofertas y descuentos exclusivos en cursos de conducción." /> */}

      <Breadcrumb
        title="Medios de Pago"
        subtitle="Descubre descuentos y beneficios exclusivos."
        nameUri="Medios de Pago"
        href="nuestros-servicios" />


      {/* NUESTROS CONVENIOS */}
      <div className="container pb-[40px] pt-14 ">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 text-center">
            <h1 className="pb-10 text-3xl font-bold text-[#111928] dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Nuestros Convenios
            </h1>
          </div>
        </div>
        <div className="justify-center flex flex-wrap sm:-m-4 mb-10 md:space-y-6 space-y-6">
          {[{
            src: "/static/images/convenios/inefop.webp", alt: "inefop", width: 62, height: 50, title: "INEFOP",
            description: "15% de descuento en tu curso si estás realizando capacitación a través de INEFOP.",
            link: "https://academiafortaleza.com.uy",
          }, {
            src: "/static/images/convenios/carup.webp", alt: "carup", width: 70, height: 55, title: "CarUp",
            description: "Plan Academia: 3 clases gratis. Clientes CarUp: 15% de descuento en el curso completo.", link: "https://carup.com.uy/afiliaciones/",
          }, {
            src: "/static/images/convenios/inju.webp", alt: "inju", width: 78, height: 50, title: "INJU",
            description: "Con tu Tarjeta Joven accedes a un 15% de descuento en el costo total de nuestros cursos.", link: "https://www.gub.uy/ministerio-desarrollo-social/politicas-y-gestion/convenios/academia-choferes-fortaleza",
          },
          ].map(({ src, alt, width, height, title, description, link }, index) => (
            <div className="p-1 md:w-1/3 flex flex-col text-center items-center" key={index}>
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full border-6 border-gray-100 shadow-md bg-white text-indigo-400 mb-5 shrink-0">
                <ImageComponent iSrc={src} iClassName="rounded-3xl" iWidth={width} iHeight={height} iAlt={alt} />
              </div>
              <div className="grow tracking-wides">
                <h2 className="text-black dark:text-white text-xl title-font font-medium mb-3">
                  {title}
                </h2>
                <p className="text-base text-gray-900 dark:text-white tracking-tight dark:tracking-wides">
                  {description}
                </p>
                {link && (
                  <a aria-label="Informacion" href={link} className="text-base dark:font-medium cursor-pointer font-normal text-indigo-900 hover:text-indigo-700 dark:hover:text-indigo-400 dark:text-indigo-300">
                    Más información &rarr;</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* MEDIOS DE PAGO */}
      <h1 className="pt-20 sm:text-4xl text-3xl font-bold text-center title-font mb-5 text-gray-800 dark:text-white">Medios de Pago</h1>
      <div className="leading-tight tracking-wides">
        <div className="container px-2 my-2 pt-2">
          <div className="flex flex-wrap lg:w-4/5 mx-auto">
            {[
              "Dinero en efectivo",
              "Tarjetas de débito y crédito",
              "Mercado Pago",
              "Depósito o transferencia bancaria",
              "Giros a través de redes de cobranza",
              "Crédito de la casa",
            ].map((text) => (
              <div className="pt-2 px-0.5 sm:w-1/2 w-full" key={text}>
                <div className="hover:bg-indigo-400/10 cursor-pointer rounded flex p-3 items-center border border-zinc-600/50">
                  <svg className="text-indigo-400/60 w-6 h-6 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="font-medium dark:text-white text-black">{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ACEPAMOS TODAS LAS TARJETAS */}
      <h1 className="sm:text-2xl text-xl font-medium text-center title-font pt-10 text-gray-800 dark:text-white">Aceptamos todas las Tarjetas</h1>
      <div className="flex flex-col text-center w-full  pb-6">
        <div className="flex py-4 sm:py-5 rounded-md">
          <div className="mx-auto max-w-7xl px-4 lg:px-3">
            <div className="mx-auto mt-1 grid max-w-lg grid-cols-3 items-center gap-x-2 gap-y-3 sm:max-w-xl sm:grid-cols-6 sm:gap-x-4 lg:gap-x-2 lg:max-w-none lg:grid-cols-9">
              {[
                { src: "/static/images/mediosdepago/brou.webp", alt: "brou" },
                { src: "/static/images/mediosdepago/visa.png", alt: "visa" },
                { src: "/static/images/mediosdepago/oca.png", alt: "oca" },
                { src: "/static/images/mediosdepago/itau.png", alt: "itau" },
                { src: "/static/images/mediosdepago/bbva.png", alt: "bbva" },
                { src: "/static/images/mediosdepago/anda.png", alt: "anda" },
                { src: "/static/images/mediosdepago/maestro.png", alt: "maestro" },
                { src: "/static/images/mediosdepago/master.png", alt: "master" },
                { src: "/static/images/mediosdepago/scotiabank.png", alt: "scotiabank" },
              ].map(({ src, alt }, index) => (
                <MyImagesGrid key={index} imgSrc={src} alt={alt} className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}