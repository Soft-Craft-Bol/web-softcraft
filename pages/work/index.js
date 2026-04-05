import WorkSlider from '../../components/WorkSlider';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';

const Work = () => {
  return (
    <div className='relative min-h-screen bg-primary/30 py-20 flex items-center overflow-hidden mt-8 xl:mt-0'>
      <Circles />
      <div className='hidden xl:block'>
        <Bulb />
      </div>

      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-10 items-center'>
          
          {/* texto */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:w-[30%] text-center xl:text-left'
          >
            <h2 className='h2 mb-6'>
              Nuestros <span className='text-accent'>proyectos</span>
            </h2>

            <p className='text-white/70 max-w-[400px] mx-auto xl:mx-0'>
              Descubre algunos de nuestros trabajos más recientes,
              donde combinamos diseño, desarrollo e innovación tecnológica.
            </p>
          </motion.div>

          {/* slider */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:w-[65%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;