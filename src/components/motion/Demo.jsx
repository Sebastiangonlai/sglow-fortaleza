// slide | zoom | bounce | flip
import { SlideIn } from "@/components/motion/SlideIn";
import { ZoomIn } from "@/components/motion/ZoomIn";
import { Flip } from "@/components/motion/Flip";
import { Bounce } from "@/components/motion/Bounce";

function Demo() {
  return (
    <section className="overflow-hidden bg-blue-800 gap-14">
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
          <div className="w-90 h-90 bg-red-400" />
        </Flip>
      </div>
    </section>
  );
}

export default Demo;
