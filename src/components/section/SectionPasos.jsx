
const steps = [
  {
    title: 'Coordina el Horario',
    description: 'Contacta con nosotros para coordinar el horario de tus clases.',
    icon: '📅',
  }, {
    title: 'Presenta la Documentación',
    description: 'Asegúrate de tener toda la documentación necesaria para comenzar.',
    icon: '📄',
  }, {
    title: 'Comienza tus Clases',
    description: 'Inicia tus clases teóricas y prácticas con nuestros instructores.',
    icon: '🚗',
  },
];

const StepsToStart = () => {
  return (
    <div className="py-24 bg-gray-100 dark:bg-[#111928]">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-900 dark:text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">Pasos para Comenzar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1f2a37] dark:border dark:border-gray-700 rounded-xl shadow-md dark:shadow-none p-8 text-center transition transform hover:scale-[1.03] hover:shadow-md hover:shadow-indigo-900/30 dark:hover:shadow-indigo-500/10">
              <div className="text-5xl mb-5 opacity-90">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{step.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsToStart;