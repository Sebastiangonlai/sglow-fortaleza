// import PropTypes from 'prop-types';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';


// function ScrollAnimation({ description, duration = 1, delay = 0.3, rootMargin = '10px 10px 3px 10px', effect, transition, className = '' }) {
//   const [ref, inView] = useInView({
//     initialInView: false,
//     triggerOnce: true, // Se activa solo una vez
//     threshold: 0.2, // 20% visible se activa
//     rootMargin: rootMargin
//   });

//   return (
//     <div className={`select-none cursor-pointer transition duration-500 ease-in ${className}`}>
//       <motion.div
//         ref={ref}
//         initial={effect.initial}
//         animate={inView ? effect.animate : effect.initial}
//         transition={transition || { duration, delay, ease: 'easeInOut' }}>
//         {description}
//       </motion.div>
//     </div>
//   );
// }



// ScrollAnimation.propTypes = {
//   description: PropTypes.node.isRequired,
//   duration: PropTypes.number,
//   delay: PropTypes.number,
//   rootMargin: PropTypes.string,
//   effect: PropTypes.shape({
//     initial: PropTypes.object.isRequired,
//     animate: PropTypes.object.isRequired,
//   }).isRequired,
//   transition: PropTypes.object,
// };

// export { ScrollAnimation };

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function ScrollAnimation({
  description,
  duration = 1,
  delay = 0.2,
  effect,
  transition,
  className = '',
  hoverEffect = { scale: 1.1 },
  tapEffect = { scale: 0.9 },
  whileFocus = { scale: 1.05 },
}) {
  return (
    <div className={`select-none cursor-pointer transition duration-500 ease-in ${className}`}>
      <motion.div
        initial={effect.initial}
        whileInView={effect.animate}
        whileHover={hoverEffect}
        whileTap={tapEffect}
        whileFocus={whileFocus}
        viewport={{ once: true, amount: 0.2 }}
        transition={transition || { duration, delay, ease: 'easeInOut' }}>
        {description}
      </motion.div>
    </div>
  );
}

ScrollAnimation.propTypes = {
  description: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  effect: PropTypes.shape({
    initial: PropTypes.object.isRequired,
    animate: PropTypes.object.isRequired,
  }).isRequired,
  transition: PropTypes.object,
  className: PropTypes.string,
  hoverEffect: PropTypes.object,
  tapEffect: PropTypes.object,
};

export { ScrollAnimation };
