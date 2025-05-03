import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function ScrollAnimation({
  description,
  duration = 1,
  delay = 0.2,
  effect,
  transition,
  hoverEffect,
  className = '',
}) {
  return (
    <div className={`select-none cursor-pointer transition duration-500 ease-in ${className}`}>
      <motion.div
        initial={effect.initial}
        whileInView={effect.animate}
        whileHover={hoverEffect}
        whileTap={hoverEffect}
        whileFocus={hoverEffect}
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
  whileFocus: PropTypes.object,
  tapEffect: PropTypes.object,
};

export { ScrollAnimation };
