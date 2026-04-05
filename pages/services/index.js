import ServiceSlider from '../../components/ServiceSlider';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';

const Services = () => {
  return (
    <div className='relative h-full bg-primary/30 py-32 flex items-center overflow-hidden'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-2'>
          
          {/* texto */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-8 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'
            >
              Nuestros <span className='text-accent'>servicios</span>
            </motion.h2>

            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              En SoftCraft Bolivia desarrollamos soluciones digitales modernas,
              escalables y adaptadas a las necesidades de cada empresa.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;