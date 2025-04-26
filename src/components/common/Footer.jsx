import React from "react";
// import Link from "@/components/Link";
// import { IconosReact } from "@/components/social-icons";
// import {  SiInstagram, SiWhatsapp } from "react-icons/si";
// import { TfiEmail } from "react-icons/tfi";


const FooterFortaleza = () => {
  return (
    <>
      <footer className="relative z-30 pt-10 pb-1 dark:bg-[#111928] bg-[#F9FAFB] lg:pt-[75px] lg:pb-[5px] select-none leading-tight justify-center lg:justify-center" >
        <div className="container flex flex-wrap justify-center max-w-[1200px] pb-6 truncate">
          <div className="lg:w-1/3 md:w-1/3 w-full">
            <div className="pb-1 text-gray-900 dark:text-gray-200 text-base font-semibold text-center lg:text-left">
              <LinkGroup className="text-base font-bold" header="Enlaces útiles">
                <NavLink link="/" className="text-base font-semibold text-[#111928] dark:text-white dark:hover:text-blue-300" label="Inicio" />
                <NavLink link="/cursos-personalizados" label="Nuestros Cursos" />
                <NavLink link="/licencia-de-conducir" label="Licencia de Conducir" />
                <NavLink link="/medios-de-pago" label="Promociones" />
                <NavLink link="/test-online" label="Test Online" />
                <NavLink link="/clases-practicas" label="Clases Practicas" />
              </LinkGroup>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 w-full justify-center">
            <div className="pb-2 text-gray-900 dark:text-gray-200 text-base font-semibold text-center lg:text-left">
              <LinkGroup className="text-base font-bold" header="Información">
                <NavLink link="/sobre-nosotros" className="flex mb-1 font-semibold text-base cursor-pointer text-[#111928] dark:text-white dark:hover:text-blue-300 justify-center lg:justify-start" label="Sobre Nosotros" />
                <NavLink link="/nuestros-servicios" label="Nuestros Servicios" />
                <NavLink link="/preguntas-frecuentes" label="Preguntas Frecuentes" />
                <NavLink link="/coche-escuela" label="Flota de Vehículos" />
                <NavLink link="/galeria-media" label="Galería Multimedia" />
                <NavLink link="/contacto" label="Contacto" />
              </LinkGroup>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full lg:px-0 px-8">
            <div className="pb-2 text-gray-900 dark:text-gray-200 font-semibold">Suscríbete</div>
            <form className="flex flex-col sm:flex-row">
              <div>
                <label className="sr-only" htmlFor="email-input">
                  Email
                </label>
                <input id="email-input" autoComplete="email-input" className="w-full sm:w-64 rounded-md px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-600 dark:bg-transparent" name="email" placeholder='Ingresa tu correo electrónico' required type="email" />
              </div>
              <div className="mt-2 rounded-md shadow-sm sm:ml-3 sm:mt-0">
                <button className={`w-full rounded-md bg-teal-700 dark:bg-teal-700 hover:bg-teal-800 dark:hover:bg-teal-600 px-2 py-2 font-medium text-white sm:py-2.5 sm:w-28 ${`subscribed ? 'cursor-default' : 'hover:bg-teal-700 dark:hover:bg-teal-400'`} focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 dark:ring-offset-black `} type="submit">
                  Inscribirse
                </button>
              </div>
            </form>

            {/* <div className="-mt-3 text-center lg:text-left text-base font-semibold px-1">
              Seguinos &ensp;&ensp;
              <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-center">
                <div className="inline-flex lg:ml-auto lg:mt-2 mt-1 w-full justify-center md:justify-start md:w-auto">
                  <div className="pt-4 flex justify-center lg:justify-start">
                    <ul className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-center">
                      <li className="inline-flex lg:ml-auto lg:mt-2 mt-1 w-full justify-center md:justify-start md:w-auto">
                        <TfiEmail kind="email" href={`mailto:info@academiafortaleza.com.uy`} aria-label="Email" />
                      </li>
                      <li className="inline-flex lg:ml-auto lg:mt-2 mt-1 w-full justify-center md:justify-start md:w-auto">
                        <SiInstagram kind="instagram" href={import.meta.env.VITE_INSTAGRAM} aria-label="Instagram" />
                      </li>
                      <li className="inline-flex lg:ml-auto lg:mt-2 mt-1 w-full justify-center md:justify-start md:w-auto">
                        <SiWhatsapp kind="facebook" href={import.meta.env.VITE_FACEBOOK} aria-label="Facebook" />
                      </li>
                      <li className="inline-flex lg:ml-auto lg:mt-2 mt-1 w-full justify-center md:justify-start md:w-auto">
                        <SiWhatsapp kind="whatsapp" href={import.meta.env.VITE_API_WHATSAPP} aria-label="WhatsApp" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="select-none text-xs pt-6 text-gray-400 font-normal text-center">© Copyright {`${new Date().getFullYear()}`}&ensp;Academia Fortaleza&ensp;-<a href="https://sglow.vercel.app/" target="_blank" className="hover:text-gray-200 font-medium text-blue-300" aria-label="Desarrollado por">
          &ensp;by Sebastián González
        </a>
        </div>

        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg width={217} height={229} viewBox="0 0 217 229" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z" fill="url(#paint0_linear_1179_5)" />
              <defs>
                <linearGradient id="paint0_linear_1179_5" x1="76.5" y1={281} x2="76.5" y2="1.22829e-05" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3056D3" stopOpacity="0.12" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1] wow animate__fadeInDown" >
            <svg width={75} height={75} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z" fill="url(#paint0_linear_1179_4)" />
              <defs>
                <linearGradient id="paint0_linear_1179_4" x1="-1.63917e-06" y1="37.5" x2={75} y2="37.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#13C296" stopOpacity="0.1" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterFortaleza;


const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="mb-2 w-full">
          <h4 className="flex mb-1 text-base font-normal cursor-pointer text-[#111928] dark:text-white dark:hover:text-blue-300 justify-center lg:justify-start">
            {header}
          </h4>
           <ul className="text-sm font-normal">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a href={link} className="flex lg:w-[200px] justify-center lg:justify-start text-[15px] pb-[0.5px] text-[#637381] dark:hover:text-blue-300 dark:text-[#D1D5DB]" aria-label={label}>
        {label}
      </a>
    </li>
  );
};
