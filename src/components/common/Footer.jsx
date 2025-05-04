"use client"
import SocialIcon from "./SocialIcons";

const FooterFortaleza = () => {
  return (
    <footer className="relative z-30 pt-8 pb-3 px-4 dark:bg-[#111928] bg-[#F9FAFB] lg:pt-[70px] lg:pb-[5px] border-t border-violet-200/10">
      <div className="flex flex-wrap justify-center items-start gap-8 max-w-[1200px] mx-auto pb-6">

        <div className="lg:w-1/3 md:w-1/2 w-full">
          <div className="w-full text-center lg:text-left text-gray-900 dark:text-gray-200 font-semibold">
            <LinkGroup className="text-base font-bold" header="Enlaces útiles">
              <NavLink link="/" label="Inicio" />
              <NavLink link="/cursos-personalizados" label="Nuestros Cursos" />
              <NavLink link="/licencia-de-conducir" label="Licencia de Conducir" />
              <NavLink link="/medios-de-pago" label="Promociones" />
              <NavLink link="/test-online" label="Test Online" />
              <NavLink link="/clases-practicas" label="Clases Prácticas" />
            </LinkGroup>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 w-full">
          <div className="w-full text-center lg:text-left text-gray-900 dark:text-gray-200 font-semibold">
            <LinkGroup className="text-base" header="Información">
              <NavLink link="/sobre-nosotros" label="Sobre Nosotros" />
              <NavLink link="/nuestros-servicios" label="Nuestros Servicios" />
              <NavLink link="/preguntas-frecuentes" label="Preguntas Frecuentes" />
              <NavLink link="/coche-escuela" label="Flota de Vehículos" />
              <NavLink link="/galeria-media" label="Galería Multimedia" />
              <NavLink link="/contacto" label="Contacto" />
            </LinkGroup>
          </div>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full text-left lg:text-left mx-4">
          <div className="pb-2 text-gray-900 dark:text-gray-200 font-medium">Suscríbete</div>
          <form className="flex flex-col sm:flex-row items-center w-full">
            <input id="email-input" autoComplete="email-input" className="sm:w-64 w-full rounded-md px-2 py-2.5 border border-gray-500/70 focus:outline-none focus:ring-2 focus:ring-teal-600" name="email" placeholder="Ingresa tu correo electrónico" required type="email" />
            <button type="submit" className="mt-2 sm:ml-3 sm:mt-0 w-full sm:w-28 rounded-md bg-teal-700 hover:bg-teal-800 dark:bg-teal-700 dark:hover:bg-teal-600 px-2 py-2 font-medium text-white sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 dark:ring-offset-black">
              Inscribirse
            </button>
          </form>
          <div className="mt-4">
            <SocialIcon />
          </div>
        </div>
      </div>

      <div className="select-none text-xs pt-2 text-gray-400 font-normal text-center">
        © {new Date().getFullYear()} Academia Fortaleza –{" "}
        <a href="https://sglow.vercel.app/" target="_blank" className="hover:text-gray-200 font-medium text-blue-300" aria-label="Desarrollado por">
          by Sebastián González
        </a>
      </div>

      {/* Decorative SVGs */}
      <div>
        <span className="absolute bottom-0 left-0">
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
        <span className="absolute right-10 top-10 z-[-1]">
          <svg width={75} height={75} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5 0C58.2107 0 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 0 58.2107 0 37.5C0 16.7893 16.7893 0 37.5 0Z" fill="url(#paint0_linear_1179_4)" />
            <defs>
              <linearGradient id="paint0_linear_1179_4" x1="0" y1="37.5" x2="75" y2="37.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#13C296" stopOpacity="0.1" />
                <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default FooterFortaleza;

// Subcomponentes

const LinkGroup = ({ children, header }) => (
  <div className="w-full">
    <p className="mb-1.5 text-base font-semibold text-[#111928] dark:text-white text-center lg:text-left">
      {header}
    </p>
    <ul className="text-sm font-normal">{children}</ul>
  </div>
);

const NavLink = ({ link, label }) => (
  <li>
    <a href={link} className="block text-[15px]/5.5 text-[#637381] dark:text-[#D1D5DB] dark:hover:text-(--color-purple-1) text-center lg:text-left" aria-label={label}>
      {label}
    </a>
  </li>
);
