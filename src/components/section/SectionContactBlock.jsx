import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";
import { useInView } from "react-intersection-observer";


const ContactBlock = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se activa solo una vez
    threshold: 0.1, // El componente debe estar al menos un 10% visible
  });

  return (
    <div ref={ref} className="container relative bg-transparent px-4 py-4 text-zinc-50" >
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        transition={{ staggerChildren: 0.05, }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4" >
        <SocialsBlock />
        <FormBlock />
        <ContactoBlock />
        <TextBlock />
      </motion.div>
    </div>
  );
};

export default ContactBlock;


const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0, },
        animate: { scale: 1, y: 0, opacity: 1, },
      }}
      transition={{ type: "spring", mass: 5, stiffness: 400, damping: 80, }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-[#111928] p-6",
        className,
      )}
      {...rest}
    />
  );
};


const SocialsBlock = () => (
  <>
    <Block whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="col-span-6 bg-green-600 md:col-span-3 cursor-pointer z-[100]">
      <a href={import.meta.env.VITE_API_WHATSAPP} aria-label="Whatsapp" className="grid h-full place-content-center text-3xl text-white">
        <SiWhatsapp />
      </a>
    </Block>
    <Block whileHover={{ rotate: "2.5deg", scale: 1.1, }}
      className="col-span-6 bg-[#e80071] md:col-span-3 cursor-pointer z-[100]">
      <a href={import.meta.env.VITE_INSTAGRAM} aria-label="Instagram" className="grid h-full place-content-center text-3xl text-white">
        <SiInstagram />
      </a>
    </Block>
    <Block whileHover={{ rotate: "2.5deg", scale: 1.1, }}
      className="col-span-6 bg-[#395498] md:col-span-3 cursor-pointer z-[100]">
      <a href={import.meta.env.VITE_FACEBOOK} aria-label="Facebook" className="grid h-full place-content-center text-3xl text-white">
        <SiFacebook />
      </a>
    </Block>
    <Block whileHover={{ rotate: "2.5deg", scale: 1.1, }}
      className="col-span-6 bg-[#050505]/70 md:col-span-3 cursor-pointer z-[100]">
      <a href={import.meta.env.VITE_WEB} aria-label="Sitio web" className="grid h-full place-content-center text-3xl text-white">
        <TfiWorld />
      </a>
    </Block>
  </>
);


const FormBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 z-[100]">
    <h2 className="pb-4 text-2xl font-medium mx-auto text-center leading-tight">
      Formulario de contacto{" "}
    </h2>

    <form method="POST" action={import.meta.env.VITE_FORMSUBMIT}>
      <div className="relative mb-1.5">
        <input id="name" name="Nombre" type="text" placeholder="Nombre" className="w-full rounded-md py-1.5 ring ring-zinc-600 px-4 focus:border-transparent focus:outline-hidden focus:ring-2 focus:ring-purple-300/50 dark:bg-[#111928]" required />
      </div>

      <div className="relative mb-1.5">
        <input id="telefono" name="Telefono" type="text" placeholder="Telefono"
          className="w-full rounded-md py-1.5 ring ring-zinc-600 px-4 focus:border-transparent focus:outline-hidden focus:ring-2 focus:ring-purple-300/50 dark:bg-[#111928]" required />
      </div>

      <div className="relative mb-1.5">
        <input id="email" name="Email" type="email" placeholder="Email" autoComplete="email" className="w-full rounded-md py-1.5 ring ring-zinc-600 px-4 focus:border-transparent focus:outline-hidden focus:ring-2 focus:ring-purple-300/50 dark:bg-[#111928]" required />
      </div>

      <div className="relative mb-1">
        <textarea id="message" name="Mensaje" type="text" placeholder="Mensaje" className="w-full rounded-md py-1.5 ring ring-zinc-600 px-4 focus:border-transparent focus:outline-hidden focus:ring-2 focus:ring-purple-300/50 dark:bg-[#111928]" />
      </div>
      <div className="relative pt-1">
        <button type="submit" className="w-full flex mx-auto justify-center items-center gap-2 whitespace-nowrap rounded-md py-1.5 ring ring-zinc-600  px-3 text-[16px] font-normal text-zinc-200 transition-colors hover:bg-blue-500/30">
          Enviar mensaje
        </button>
      </div>
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="Formulario de contacto academiafortaleza.com.uy" />
      <input type="hidden" name="_next" value="https://academiafortaleza.com.uy/" />
      <input type="hidden" name="_captcha" value="false" />
    </form>
  </Block>
);


const ContactoBlock = () => (
  <Block className="z-[100] col-span-12 row-span-2 md:col-span-6 flex flex-col justify-center items-left">
    <div className="mb-6 items-center">
      <p className="text-xl leading-tight font-medium">Horario</p>
      <p><a href={import.meta.env.VITE_GOOGLE_REVIEW} aria-label="Horario" className="dark:hover:text-blue-300 flex items-center gap-[10px] text-base font-medium text-gray-400 whitespace-nowrap">Lunes a sábado de 7 a 21hs</a></p>
    </div>

    <div className="mb-6">
      <p className="text-xl leading-tight font-medium">Email</p>
      <p><a href={`mailto:info@academiafortaleza.com.uy`} className="flex items-center gap-[10px] text-base font-medium text-gray-400 dark:hover:text-blue-300 whitespace-nowrap" aria-label="Email">{import.meta.env.VITE_EMAILINFO}</a></p>
    </div>

    <div className="mb-1">
      <p className="text-xl leading-tight font-medium">Teléfono</p>
      <a aria-label="Whatsapp" href={import.meta.env.VITE_API_WHATSAPP} className="flex items-center gap-[10px] text-base font-medium text-gray-400 dark:hover:text-blue-300 whitespace-nowrap">
        {import.meta.env.VITE_PHONE}
      </a>
    </div>
  </Block>
);


const TextBlock = () => (
  <Block className="col-span-12 text-2xl leading-snug">
    {/* <div className="mb-6">
      <InstagramEmbed />
      <ShareWithInstagramButton url={urlToShare} text={textToShare} />
      <FacebookEmbed />
    </div> */}
    <p>
      <span className="text-zinc-400">
        Mantente al tanto de nuestras novedades, eventos y consejos útiles.
      </span>{" "}
      ¡Síguenos en nuestras redes sociales!
    </p>
  </Block>
);


