// // slide | zoom | bounce | flip
import { SlideIn } from "@/components/motion/SlideIn";
import { ZoomIn } from "@/components/motion/ZoomIn";
import { Flip } from "@/components/motion/Flip";
import { Bounce } from "@/components/motion/Bounce";

import { MotionWrapper } from "./motion-wrapper";

const ExampleComponent = () => {
  return (
    <section className="p-10 space-y-6">
      {/* Ejemplo con animación de deslizamiento */}
      <MotionWrapper
        animation="slide"
        direction="up"
        duration={500}
        delay={100}
        threshold={0.1}
        once={false}
        className="bg-blue-500 text-white p-5 rounded-md"      >
        <h2>Contenido animado al aparecer (slide)</h2>
      </MotionWrapper>

      {/* Ejemplo con animación de zoom */}
      <MotionWrapper
        animation="zoom"
        duration={300}
        delay={200}
        threshold={0.1}
        once={true}
        className="mt-10 bg-green-500 text-white p-5 rounded-md"      >
        <h2>Contenido animado al aparecer (zoom)</h2>
      </MotionWrapper>

      {/* Ejemplo con animación de rebote */}
      <MotionWrapper
        animation="bounce"
        duration={1.5}
        threshold={0.1}
        loop={true}
        className="mt-10 bg-yellow-500 text-white p-5 rounded-md">
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

    </section>
  );
};

export default ExampleComponent;
