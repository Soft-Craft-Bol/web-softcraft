import { motion } from 'framer-motion';
import { WIPE } from './useRouteWipe';

// Barrido de tinta: el papel teñido, dos tintas puras y el papel del tema
// activo, que cierra la pasada. El cambio de página ocurre debajo, ya cubierto.
const bands = ['route-band-1', 'route-band-2', 'route-band-3', 'route-band-4'];

const Transition = () => (
  <div className="route-curtains" aria-hidden="true">
    {bands.map((band, index) => (
      <motion.span
        key={band}
        className={`route-curtain ${band}`}
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        transition={{
          duration: WIPE.duration,
          delay: index * WIPE.stagger,
          ease: [0.65, 0, 0.35, 1],
        }}
      />
    ))}
  </div>
);

export default Transition;
