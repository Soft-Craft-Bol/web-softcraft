import ProcessSlider from '../../components/ProcessSlider';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';

const Testimonials = () => {
  return (
    <div className='relative min-h-screen bg-primary/30 py-20 flex items-center overflow-hidden'>
      <Circles />
      <div className='hidden xl:block'>
        <Bulb />
      </div>

      <div className='container mx-auto relative z-20'>
        <div className='flex flex-col xl:flex-row gap-10 xl:gap-16 items-center'>
          
          {/* texto */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:w-[30%] text-center xl:text-left'
          >
            <h2 className='h2 mb-6'>
              Nuestro <span className='text-accent'>proceso</span>
            </h2>

            <p className='text-white/70 max-w-[400px] mx-auto xl:mx-0 leading-relaxed'>
              En SoftCraft Bolivia seguimos una metodología clara y estructurada
              para convertir ideas en soluciones digitales funcionales, escalables y de alto impacto.
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
            <ProcessSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;