const cursos = {
  primeraVez: [
    "15 clases + 1 de regalo.",
    "Trámites en IMM.",
    "Material para examen teórico.",
    "Test de evaluación online.",
    "Auto para examen práctico.",
  ],
  intensivo: [
    "5 clases por semana.",
    "Test de evaluación online.",
    "Auto para examen práctico.",
    "Trámites en IMM.",
    "Material para examen teórico.",
  ],
  renovacion: [
    "Renovación para mayores de 75 años.",
    "Test de evaluación online.",
    "Material teórico.",
    "Trámites en IMM.",
    "Auto para examen práctico.",
  ],
};

const IconCheck = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-5 flex-none text-blue-400/90"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M9 12l2 2l4 -4" />
  </svg>
);

const CardCurso = ({ titulo, subtitulo, items, destacado, dark = false }) => {
  return (
    <div className={`flex flex-col justify-between rounded-3xl p-8 ring-1 xl:p-9 
      ${dark ? "bg-slate-950" : "bg-slate-50"} text-slate-200 ring-slate-300/20 dark:bg-[#111928] shadow-xl`}>
      <div>
        <div className="flex items-center justify-between gap-x-4">
          <h3 className="text-lg font-semibold leading-8">{titulo}</h3>
          {destacado && (
            <p className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-500">
              {destacado}
            </p>
          )}
        </div>
        <p className="mt-6 flex justify-center text-5xl font-bold tracking-tight">{subtitulo}</p>
        <ul className="mt-8 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-400">
          {items.map((desc, index) => (
            <li key={index} className="flex gap-x-3">
              <IconCheck />
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <a href="./licencia-de-conducir" className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6
          ${dark ? "text-blue-500 ring-1 ring-inset ring-blue-500 hover:bg-blue-500 hover:text-gray-200"
          : "bg-blue-500 text-gray-100 shadow hover:bg-blue-600"}`}>
        Más información
      </a>
    </div>
  );
};

const SectionPricing = () => {
  return (
    <div className="pb-1">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-4">
          <CardCurso titulo="Categoria A" subtitulo="Intensivo" items={cursos.intensivo} destacado="✨ Nuevo" dark />
          <CardCurso titulo="Primera vez" subtitulo="Categoria A" items={cursos.primeraVez} destacado="🚀 Popular" />
          <CardCurso titulo="Categoria A" subtitulo="Renovación" items={cursos.renovacion} dark />
        </div>
      </div>
    </div>
  );
};

export default SectionPricing;