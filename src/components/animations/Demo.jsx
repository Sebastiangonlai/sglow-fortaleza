import AnimatedBox from "@/components/animations/AnimatedBox";


function App() {
  return (
    <section className="flex flex-col mx-auto min-h-screen max-w-fit space-y-4 pt-28">
      <h1 className="text-4xl font-bold animate-slide-up py-6">Academia Fortaleza</h1>

      <AnimatedBox animationClass="animate-fade-in-left" delay="0.5s">
        <div className="bg-destructive p-8 rounded-lg shadow">Desde la izquierda</div>
      </AnimatedBox>

      <AnimatedBox animationClass="animate-fade-in-right" delay="0.5s">
        <div className="bg-rose-400 p-8 rounded-lg shadow">Desde la derecha</div>
      </AnimatedBox>

      <AnimatedBox animationClass="animate-fade-in-up" delay="0.5s" >
        <div className="bg-ring p-8 rounded-lg shadow">Caja animada desde abajo</div>
      </AnimatedBox>

      <AnimatedBox animationClass="animate-zoom-in" delay="0.5s" duration="1s">
        <div className="bg-purple-color p-8 rounded-lg shadow">Zoom + fade</div>
      </AnimatedBox>
    </section>
  );
}

export default App;
