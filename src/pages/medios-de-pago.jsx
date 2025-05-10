import { MyImagesGrid } from '@/components/ui/MyImgGrid';
import Breadcrumb from '@/components/ui/Breadcrumb';
import LayoutSection from '@/components/LayoutSection';
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

      <LayoutSection size="auto" color="bg-section-3" className="pt-10">
        {/* NUESTROS CONVENIOS */}
        <div className="container pb-16 pt-14">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#111928] dark:text-white leading-tight">
              Nuestros Convenios
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                src: "/static/images/convenios/inefop.webp",
                alt: "inefop",
                width: 62,
                height: 50,
                title: "INEFOP",
                description: "15% de descuento en tu curso si estás realizando capacitación a través de INEFOP.",
                link: "https://academiafortaleza.com.uy",
              }, {
                src: "/static/images/convenios/carup.webp",
                alt: "carup",
                width: 70,
                height: 55,
                title: "CarUp",
                description: "Plan Academia: 3 clases gratis. Clientes CarUp: 15% de descuento en el curso completo.",
                link: "https://carup.com.uy/afiliaciones/",
              }, {
                src: "/static/images/convenios/inju.webp",
                alt: "inju",
                width: 78,
                height: 50,
                title: "INJU",
                description: "Con tu Tarjeta Joven accedes a un 15% de descuento en el costo total de nuestros cursos.",
                link: "https://www.gub.uy/ministerio-desarrollo-social/politicas-y-gestion/convenios/academia-choferes-fortaleza",
              },
            ].map(({ src, alt, width, height, title, description, link }, index) => (
              <div key={index} className="bg-blue-500/20 dark:bg-border-1 rounded-xl ring-2 ring-border-2/20 p-6 md:w-[300px] flex flex-col items-center text-center transition hover:scale-105 cursor-pointer">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-4 shadow-sm">
                  <ImageComponent iSrc={src} iClassName="rounded-full" iWidth={width} iHeight={height} iAlt={alt} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">{description}</p>
                {link && (
                  <a href={link} className="text-sm font-medium text-purple-2 hover:text-purple-1 transition">
                    Más información &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* MEDIOS DE PAGO */}
        <h1 className="pt-20 sm:text-4xl text-3xl font-bold text-center title-font mb-6 text-gray-800 dark:text-white">
          Medios de Pago
        </h1>
        <div className="container px-4 pb-10 cursor-pointer">
          <div className="grid gap-3 sm:grid-cols-2 max-w-4xl mx-auto">
            {[
              "Dinero en efectivo",
              "Tarjetas de débito y crédito",
              "Mercado Pago",
              "Depósito o transferencia bancaria",
              "Giros a través de redes de cobranza",
              "Crédito de la casa",
            ].map((text) => (
              <div key={text} className="flex items-center gap-4 border border-zinc-300 dark:border-zinc-600 rounded-xl p-4 transition hover:bg-indigo-50 dark:hover:bg-indigo-400/10">
                <svg
                  className="text-indigo-500 dark:text-indigo-300 w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="text-gray-800 dark:text-white font-medium">{text}</span>
              </div>
            ))}
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
      </LayoutSection>
    </>
  )
}