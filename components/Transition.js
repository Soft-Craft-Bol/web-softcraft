import { motion, AnimatePresence } from 'framer-motion';
import { useTransitionRouter } from './TransitionContext';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const curtains = [
  { id: 'curtain-purple', bg: '#9A0389', zIndex: 94, delay: 0 },
  { id: 'curtain-coral', bg: '#FC354C', zIndex: 93, delay: 0.08 },
  { id: 'curtain-orange', bg: '#FC6819', zIndex: 92, delay: 0.16 },
  { id: 'curtain-gold', bg: '#FCBF02', zIndex: 91, delay: 0.24 },
];

const Transition = () => {
  const { isTransitioning, stage } = useTransitionRouter();
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion || !isTransitioning) {
    return null;
  }

  const isCovering = stage === 'covering';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 9999 }}
    >
      {curtains.map((curtain) => (
        <motion.div
          key={curtain.id}
          className="fixed inset-0 w-full h-full"
          style={{
            backgroundColor: curtain.bg,
            zIndex: curtain.zIndex,
          }}
          initial={{ x: '100%' }}
          animate={{
            x: isCovering ? '0%' : '-100%',
          }}
          transition={{
            duration: 0.38,
            delay: isCovering ? curtain.delay : (0.24 - curtain.delay) * 0.6,
            ease: [0.76, 0, 0.24, 1], // Cubic-bezier suave y contundente
          }}
        />
      ))}
    </div>
  );
};

export default Transition;
