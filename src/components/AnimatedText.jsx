import React, { useState, useEffect } from 'react';

const AnimatedText = ({ title, time, uri }) => {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState('text-white dark:text-white');

  useEffect(() => {
    setVisible(true);
    const showTimer = setInterval(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), 200); // Pequeño delay para reiniciar animación
    }, 8000);

    return () => clearInterval(showTimer);
  }, [title, time]);

  useEffect(() => {
    const colorTimer = setInterval(() => {
      setColor((prev) =>
        prev.includes('#808ae8')
          ? 'text-white dark:text-white'
          : 'text-[#808ae8] dark:text-[#808ae8]'
      );
    }, 8000);

    return () => clearInterval(colorTimer);
  }, []);

  return (
    <div className="container relative">
      <a className="main" href={uri}>
        <div
          className={`mb-2 text-3xl sm:text-4xl md:text-2xl lg:text-4xl font-bold leading-tight tracking-tight cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-700 ease-in-out transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            } ${color}`}
        >
          {title}
        </div>
      </a>
    </div>
  );
};

export default AnimatedText;


// import React, { useState, useCallback, useRef, useEffect } from 'react';
// import { useTransition, animated } from '@react-spring/web';


// const AnimatedText = ({ title, time, uri }) => {
//   const ref = useRef([]);
//   const [items, setItems] = useState([]);
//   const [color, setColor] = useState('dark:text-white'); // Estado para el color inicial

//   const transitions = useTransition(items, {
//     from: {
//       opacity: 0,
//       height: 0,
//       innerHeight: 0,
//       transform: 'perspective(600px) rotateX(0deg)',
//       color: '#10cba2',
//     },
//     enter: [
//       { opacity: 1, height: 40, innerHeight: 40 },
//       { transform: 'perspective(600px) rotateX(180deg)', color: '#10cba2' },
//       { transform: 'perspective(600px) rotateX(0deg)' },
//     ],
//     leave: [{ color: '#4f46e5' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
//     update: { color: '#ffffff' },
//   });

//   const reset = useCallback(() => {
//     ref.current.forEach(clearTimeout);
//     ref.current = [];
//     setItems([]);
//     ref.current.push(setTimeout(() => setItems([title]), time));
//   }, [title, time]);

//   useEffect(() => {
//     reset();

//     // Repetir animación cada 8 segundos
//     const interval = setInterval(() => {
//       reset();
//     }, 8000);

//     // Limpiar intervalos al desmontar el componente
//     return () => {
//       ref.current.forEach(clearTimeout);
//       clearInterval(interval);
//     };
//   }, [reset]);

//   // Efecto separado para cambiar el color cada 8 segundos
//   useEffect(() => {
//     const colorInterval = setInterval(() => {
//       setColor((prevColor) => (prevColor === 'dark:text-white' ? 'dark:text-[#808ae8]' : 'dark:text-white'));
//     }, 8000);

//     // Limpiar intervalo al desmontar el componente
//     return () => {
//       clearInterval(colorInterval);
//     };
//   }, []);

//   return (
//     <div className="container relative">
//       <a className="main" href={uri}>
//         {transitions(({ innerHeight, ...rest }, item) => (
//           <animated.div className="transitionsItem" style={rest}>
//             <animated.div
//               style={{ overflow: 'hidden', height: innerHeight }}
//               className={`mb-2 text-3xl font-bold ${color} dark:text-white text-cyan-900 sm:text-4xl md:text-2xl lg:text-4xl leading-tight tracking-tight cursor-pointer hover:text-blue-700 dark:hover:text-blue-300`}>
//               {item}
//             </animated.div>
//           </animated.div>
//         ))}
//       </a>
//     </div>
//   );
// };

// export default AnimatedText;
