"use client";

import Breadcrumb from '@/components/Breadcrumb';
import ImageComponent from '@/components/ImageComponent';
import { ParallaxScrollSecond } from "../lib/parallax-scroll-2";


const features2 = [
  {
    icon:
      <svg fill="currentColor" strokeWidth="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1.8em" width="1.8em" className="overflow: visible; color: currentcolor;"><path d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9l2.513-6.702A2 2 0 0 1 6.386 4h11.228a2 2 0 0 1 1.873 1.298L22 12v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1ZM4.136 12h15.728l-2.25-6H6.386l-2.25 6ZM6.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
      </svg>,
    title: "Fácil manejo",
    desc: "Excelente maniobrabilidad y eficiencia."
  }, {
    icon:
      <svg fill="currentColor" strokeWidth="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1.8em" width="1.8em" className="overflow: visible; color: currentcolor;"><path d="m20.772 13.155-1.368-4.104A2.995 2.995 0 0 0 16.559 7H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2.001 2.001 0 0 0 2 15v3c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 22 18v-3c0-.831-.507-1.542-1.228-1.845zM7.441 9h9.117a1 1 0 0 1 .949.684L18.613 13H5.387l1.105-3.316c.137-.409.519-.684.949-.684zM5.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 18zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 18zM5.277 5c.347.595.985 1 1.723 1s1.376-.405 1.723-1h6.555c.346.595.984 1 1.722 1s1.376-.405 1.723-1H17V3h1.723c-.347-.595-.985-1-1.723-1s-1.376.405-1.723 1H8.723C8.376 2.405 7.738 2 7 2s-1.376.405-1.723 1H7v2H5.277z"></path></svg>,
    title: "Mantenimiento regular",
    desc: "Vehículos siempre en perfectas condiciones."
  }, {
    icon:
      <svg fill="currentColor" strokeWidth="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1.8em" width="1.8em" className="overflow: visible; color: currentcolor;"><path d="m12 17-5.877 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.865.55-5.23 4.48 1.598 6.7L12 17Z"></path></svg>,
    title: "Confort y tecnología",
    desc: "Equipados con sistemas avanzados y cómodos interiores."
  },
]

const images = [
  "/static/images/vehiculo/flota-fortaleza2.webp",
  "/static/images/vehiculo/flota-fortaleza4.webp",
  "/static/images/vehiculo/flota-fortaleza3.webp",
  "/static/images/vehiculo/flota-fortaleza1.webp",
  "/static/images/vehiculo/1.webp",
  "/static/images/vehiculo/2.webp",
];


const NuestrosVeiculos = () => {
  return (
    <>
      <Breadcrumb
        title="Flota de Vehículos"
        subtitle="Flota moderna para una experiencia de aprendizaje óptima."
        nameUri="Flota de Vehículos"
        href="coche-escuela" />

      <section className="pt-16">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-200 gap-16 justify-center md:px-8 lg:flex">
          <div>
            <div className="max-w-xl space-y-3">
              <p className="text-gray-100 text-2xl font-bold sm:text-4xl">
                Hyundai HB20
              </p>
              <p>Autos modernos y seguros, ideales para aprender a conducir.</p>
            </div>
            <div className="mt-8 max-w-lg lg:max-w-none">
              <ul className="space-y-4">
                {features2.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4">
                    <div className="flex-none w-12 h-12 bg-black/20 border border-gray-100/20 text-gray-900 dark:text-gray-100 rounded-lg flex items-center justify-center tracking-tight leading-tight">
                      {item.icon}
                    </div>
                    <div>
                      <h2 className="text-lg text-gray-100 font-semibold">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 p-4">
            <ImageComponent iWidth={430} iHeight={430} iAlt="Licencia de conducir" iSrc="/static/images/vehiculo/nuestros-autos-sm.webp" loading="lazy" iClassName="object-cover rounded-xl focus:touch-pan-x delay-200 border border-zinc-700 select-none dark:rounded-lg dark:border justify-center items-center" />
          </div>
        </div>
      </section>
      <div className="min-w-screen min-h-screen mx-auto px-4 text-gray-200 gap-6 justify-between md:px-8 lg:flex">
        <ParallaxScrollSecond images={images} />
      </div>
    </>
  );
};

export default NuestrosVeiculos;