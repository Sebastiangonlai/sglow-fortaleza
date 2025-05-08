// // slide | zoom | bounce | flip
import LayoutSection from "@/components/LayoutSection";
import { SlideIn } from "@/components/motion/SlideIn";
import { ZoomIn } from "@/components/motion/ZoomIn";
import { Flip } from "@/components/motion/Flip";
import { Bounce } from "@/components/motion/Bounce";
import { MotionWrapper } from "./motion-wrapper";


const ExampleComponent = () => {
  return (
    <LayoutSection id="demo" className="mx-auto overflow-hidden gap-7" color="bg-(--color-section-1)" >
      {/* <MotionWrapper
        duration={700}
        delay={400}
        animation="warpOverlay" staggerChildren={0.2}> */}
        <MotionWrapper animation="stagger" staggerChildren={0.2}>
        <h1 className="my-15 text-4xl text-white font-bold">Ejemplo de animaciones</h1>
      </MotionWrapper>

      {/* Ejemplo de animación de deslizamiento */}
      <MotionWrapper
        duration={700}
        delay={400}
        animation="stagger" staggerChildren={0.2}>
        <div className="my-2 w-30 h-30 bg-red-500 rounded-md" />
        <div className="my-2 w-30 h-30 bg-blue-500 rounded-md" />
      </MotionWrapper>

      {/*  Ejemplo de animación de rebote */}
      <MotionWrapper animation="spring"
        duration={700}
        delay={400}
        threshold={0.1}
        once={true}
        loop={false}
        className="bg-blue-500 text-white p-5 rounded-md">
        <div className="my-2 w-60 h-20 bg-blue-500 rounded-md" />
        <div className="my-2 w-60 h-20 bg-indigo-500 rounded-md" />
      </MotionWrapper>

      {/* Ejemplo con animación de deslizamiento */}
      <MotionWrapper
        animation="slide"
        direction="up"
        duration={500}
        delay={100}
        threshold={0.1}
        once={false}
        className="bg-blue-500 text-white p-5 rounded-md">
        <h2>Contenido animado al aparecer (slide)</h2>
      </MotionWrapper>

      {/* Ejemplo con animación de zoom */}
      <MotionWrapper
        animation="zoom"
        duration={300}
        delay={200}
        threshold={0.1}
        once={true}
        className="bg-green-500 text-white p-5 rounded-md">
        <h2>Contenido animado al aparecer (zoom)</h2>
      </MotionWrapper>

      {/* Ejemplo con animación de rebote */}
      <MotionWrapper
        animation="bounce"
        duration={1.5}
        threshold={0.1}
        loop={true}
        className="bg-yellow-500 text-white p-5 rounded-md">
        <h2>Contenido animado al aparecer (bounce)</h2>
      </MotionWrapper>

      <SlideIn direction="left">
        <h1 className="text-3xl">Slide desde la izquierda</h1>
      </SlideIn>

      <ZoomIn delay={500} duration={2000} loop>
        <p>Texto que hace zoom al aparecer</p>
      </ZoomIn>

      <Bounce>
        <div className="w-20 h-20 bg-blue-500 rounded-full" />
      </Bounce>

      <div style={{ perspective: 1000 }}>
        <Flip duration={1000} delay={500}>
          <div className="w-30 h-30 bg-red-400" />
        </Flip>
      </div>

    </LayoutSection>
  );
};

export default ExampleComponent;
