'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ImageComponent from '@/components/ImageComponent';
import Link from '@/components/Link';
import LayoutSection from "@/components/LayoutSection";
import ButtonTailwind from "@/components/ui/ButtonTailwind";


const imgalumnos = [
  { id: 1, srcalum: "/static/images/alumnos/alumno20.webp" },
  { id: 2, srcalum: "/static/images/alumnos/alumno21.webp" },
  { id: 3, srcalum: "/static/images/alumnos/alumno22.webp" },
  { id: 4, srcalum: "/static/images/alumnos/alumno23.webp" },
  { id: 5, srcalum: "/static/images/alumnos/alumno24.webp" },
  { id: 6, srcalum: "/static/images/alumnos/alumno25.webp" },
  { id: 7, srcalum: "/static/images/alumnos/alumno26.webp" },
  { id: 8, srcalum: "/static/images/alumnos/alumno27.webp" },
  { id: 9, srcalum: "/static/images/alumnos/alumno28.webp" },
];

const SectionGraduados = () => {
  const groups = [];

  for (let i = 0; i < imgalumnos.length; i += 3) {
    groups.push(imgalumnos.slice(i, i + 3));
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = {
    stiffness: 100, damping: 30,
  };
  const translateX = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 300]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -300]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.3, 0.5]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-80, 0]), springConfig);

  return (
    <LayoutSection id="graduados" className="pb-7 py-5 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <div ref={ref}>
        <Header />
        <motion.div style={{ rotateZ, translateY, opacity }}>
          {groups.map((group, index) => (
            <motion.div className={`flex ${index % 2 === 0 ? 'flex-row-reverse space-x-reverse' : 'flex-row'} ml-8 mb-8 lg:ml-2 lg:mb-8`}
              key={index}>
              {group.map((product) => (
                <ProductCard key={product.id} product={product} translate={index % 2 === 0 ? translateX : translateXReverse} />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ButtonTailwind name="Fotos de nuestros graduados" uri="galeria-media" />
    </LayoutSection>
  );
};

export default SectionGraduados;


export const Header = () => {
  return (
    <div className="max-w-7xl absolute mx-auto py-40 md:py-50 px-4 w-full left-0 top-0 z-[100]">
      <p className="text-4xl md:text-6xl font-bold dark:text-white text-shadow-sm/50">
        Nuestros <br /> Graduados
      </p>
      <p className="max-w-2xl text-base md:text-xl mt-3 lg:mt-4 dark:text-neutral-300 tracking-tight leading-tight text-shadow-sm/50">
        Nuestro mayor orgullo es ver a nuestros alumnos obtener su libreta y cumplir su meta.
      </p>
      <Link className="inline-flex items-center gap-x-2 text-blue-500 decoration-2 dark:hover:text-blue-300 focus:outline-hidden font-medium dark:text-blue-300 text-[20px]" href="/galeria-media">
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
      className="h-[17rem] w-[20rem] lg:h-90 lg:w-[40rem] ml-6 relative shrink-0">
      <ImageComponent iSrc={product.srcalum} iClassName="object-cover object-left-top absolute h-full w-full inset-0 rounded-3xl" iAlt={`Licencia de conducir ${product.id}`} iWidth={30} iHeight={25} />
    </motion.div>
  );
};

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -1 11 11" id="Arrows-Button-Right--Streamline-Micro" height="14" width="14"><path fill="#8ec1fc" d="M7.499 4.104 3.399 0.208A0.755 0.755 0 0 0 2.359 1.3L6.07 4.823a0.249 0.249 0 0 1 0 0.362L2.359 8.707a0.75 0.75 0 1 0 1.033 1.087l4.117 -3.907a1.255 1.255 0 0 0 -0.01 -1.782Z" strokeWidth="1"></path></svg>
  );
}
