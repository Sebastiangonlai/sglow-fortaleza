import { useState, useEffect } from 'react';


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
      <a className="main" href={uri} aria-label={uri}>
        <h2 className={`mb-2 text-3xl sm:text-4xl md:text-2xl lg:text-4xl font-bold leading-tight tracking-tight cursor-pointer hover:text-blue-700 dark:hover:text-(--color-purple-1) transition-all duration-700 ease-in-out transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${color}`}>
          {title}
        </h2>
      </a>
    </div>
  );
};

export default AnimatedText;