import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function ScrollAnimation({ description, duration = 0.8, delay = 0.3, rootMargin = '10px 10px 3px 10px', effect, transition }) {
  const [ref, inView] = useInView({
    initialInView: false,
    triggerOnce: true, // La animación se activa solo una vez
    threshold: 0.2, // El componente debe estar al menos un 10% visible
    rootMargin: rootMargin
  });

  return (
    <div className="select-none cursor-pointer items-center transition duration-500 ease-in">
      <motion.div
        ref={ref}
        initial={effect.initial}
        animate={inView ? { ...effect.animate, duration: duration, delay: delay } : effect.initial}
        transition={transition || { duration: duration, delay: delay, ease: 'easeInOut' }}>
        {description}
      </motion.div>
    </div>
  );
}

ScrollAnimation.propTypes = {
  description: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  rootMargin: PropTypes.string,
  effect: PropTypes.shape({
    initial: PropTypes.object.isRequired,
    animate: PropTypes.object.isRequired,
  }).isRequired,
  transition: PropTypes.object,
};

export { ScrollAnimation };