import { motion, useReducedMotion } from 'framer-motion';

const transitionVariants = {
  initial: { x: '100%' },
  animate: { x: '0%' },
  exit: { x: ['0%', '100%'] },
};

const Transition = () => {
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0.01 : 0.6;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="route-curtain route-curtain-one"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: reducedMotion ? 0 : 0.2, ease: 'easeInOut', duration }}
      />
      <motion.div
        aria-hidden="true"
        className="route-curtain route-curtain-two"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: reducedMotion ? 0 : 0.4, ease: 'easeInOut', duration }}
      />
      <motion.div
        aria-hidden="true"
        className="route-curtain route-curtain-three"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: reducedMotion ? 0 : 0.6, ease: 'easeInOut', duration }}
      />
    </>
  );
};

export default Transition;
