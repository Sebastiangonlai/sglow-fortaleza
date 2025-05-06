
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
    <div className="py-30 bg-gray-100 dark:bg-transparent">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-900 dark:text-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-tight ">Pasos para Comenzar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 bg-black/20 border border-gray-100/20 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsToStart;