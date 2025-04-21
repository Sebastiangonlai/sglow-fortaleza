'use client';
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ButtonSection from '@/components/BtnSection';
import ImageComponent from '@/components/ImageComponent';
import Link from '@/components/Link';


const imgalumnos = [
  { srcalum: "/static/images/alumnos/alumno20.webp" },
  { srcalum: "/static/images/alumnos/alumno21.webp" },
  { srcalum: "/static/images/alumnos/alumno22.webp" },
  { srcalum: "/static/images/alumnos/alumno23.webp" },
  { srcalum: "/static/images/alumnos/alumno24.webp" },
  { srcalum: "/static/images/alumnos/alumno25.webp" },
  { srcalum: "/static/images/alumnos/alumno26.webp" },
  { srcalum: "/static/images/alumnos/alumno27.webp" },
  { srcalum: "/static/images/alumnos/alumno28.webp" },
];

const SectionGraduadosFortaleza = () => {
  const groups = [];

  // Divide los productos en grupos de 3
  for (let i = 0; i < imgalumnos.length; i += 3) {
    groups.push(imgalumnos.slice(i, i + 3));
  }

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Ajustar la configuración del resorte para un desplazamiento más fluido
  const springConfig = {
    // stiffness: 300, damping: 50, bounce: 10, mass: 2,
    stiffness: 100, damping: 20, bounce: 0.25,
  };
  const translateX = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 500]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -500]), springConfig);
  // const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.3, 0.5]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-100, 0]), springConfig);

  return (
    <>
      <div ref={ref} className="h-full pb-4 py-5 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
        <Header />
        <motion.div style={{ rotateZ, translateY, opacity }}>
          {groups.map((group, index) => (
            <motion.div
              className={`flex ${index % 2 === 0 ? 'flex-row-reverse space-x-reverse' : 'flex-row'} ml-8 mb-8 lg:ml-8 lg:mb-8`}
              key={index}>
              {group.map((product, idx) => (
                <ProductCard key={idx.srcalum} product={product} translate={index % 2 === 0 ? translateX : translateXReverse} />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ButtonSection
        namebtn="Fotos de nuestros graduados"
        uri="/galeria-media" />
    </>
  );
};

export default SectionGraduadosFortaleza;


export const Header = () => {
  return (
    <div className="max-w-7xl absolute mx-auto py-40 md:py-40 px-4 w-full left-0 top-0 z-[100]">
      <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
        Nuestros <br /> Graduados
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-3 lg:mt-4 dark:text-neutral-300 tracking-tight leading-tight">
        Nuestro mayor orgullo es ver a nuestros alumnos obtener su libreta y cumplir su meta.
      </p>
      <Link className="inline-flex items-center gap-x-2 text-blue-500 decoration-2 dark:hover:text-blue-300 focus:outline-none font-medium dark:text-blue-300 text-[20px]" href="/galeria-media">
        Ver más <Icon />
      </Link>
    </div>
  );
};


export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate, }}
      transition={{ duration: 1 }}
      // whileHover={{ y: -20, }}
      key={product}
      className="group/product h-[17rem] w-[20rem] lg:h-96 lg:w-[40rem] ml-6 relative flex-shrink-0">
      <ImageComponent iSrc={product.srcalum} iClassName="object-cover object-left-top absolute h-full w-full inset-0 rounded-3xl" iAlt="Licencia de conducir"
        iWidth={300} iHeight={300} />
    </motion.div>
  );
};


const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -1 11 11" id="Arrows-Button-Right--Streamline-Micro" height="14" width="14"><path fill="#8ec1fc" d="M7.499 4.104 3.399 0.208A0.755 0.755 0 0 0 2.359 1.3L6.07 4.823a0.249 0.249 0 0 1 0 0.362L2.359 8.707a0.75 0.75 0 1 0 1.033 1.087l4.117 -3.907a1.255 1.255 0 0 0 -0.01 -1.782Z" strokeWidth="1"></path></svg>
  );
}
