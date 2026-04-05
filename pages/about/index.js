import React, { useState } from 'react'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: 'habilidades',
    info: [
      {
        title: 'Desarrollo Web',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'Diseño UI/UX',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'logros',
    info: [
      {
        title: 'Reconocimientos en desarrollo de software',
        stage: '2024 - 2025',
      },
      {
        title: 'Proyectos destacados en innovación tecnológica',
        stage: '2024 - 2025',
      },
    ],
  },
  {
    title: 'experiencia',
    info: [
      {
        title: 'Desarrollo de aplicaciones web y móviles',
        stage: '2024 - 2025',
      },
      {
        title: 'Implementación de soluciones con IA',
        stage: '2025 - Actualidad',
      }
    ],
  },
  {
    title: 'formación',
    info: [
      {
        title: 'Ingeniería en Sistemas / Informática',
        stage: 'En curso / Finalizado',
      },
      {
        title: 'Especialización en Desarrollo Web',
        stage: '2024 - 2025',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counters
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />

      {/*     <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[300px]'
      >
        <Avatar />
      </motion.div> */}

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>

        {/* texto */}
        <div className='flex-1 flex flex-col justify-center py-5'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Impulsamos <span className='text-accent'>innovación digital</span> a través del software.
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            {/* móvil */}
            <span className='block xl:hidden'>
              Desarrollamos software a medida con enfoque en IA para impulsar el crecimiento empresarial...
            </span>

            {/* desktop */}
            <span className='hidden xl:block'>
              En SoftCraft Bolivia desarrollamos soluciones tecnológicas a medida,
              especializándonos en aplicaciones web, móviles e integración de Inteligencia Artificial.
              Nuestro objetivo es ayudar a empresas a crecer mediante tecnología moderna, eficiente y escalable.
            </span>
          </motion.p>

          {/* contadores */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0'
          >
            <div className='flex flex-1 xl:gap-x-6'>

              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:-right-0 after:top-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Años de experiencia
                </div>
              </div>

              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:-right-0 after:top-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Clientes satisfechos
                </div>
              </div>

              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={38} duration={5} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Proyectos completados
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-full after:bg-accent'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                    after:bg-white after:absolute after:-bottom-1 after:left-0 transition-all duration-300`}
                  onClick={() => setIndex(itemIndex)}
                >
                  <h2>{item.title}</h2>
                </div>
              );
            })}
          </div>

          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>

                  <div className='flex gap-x-4'>
                    {item.icons &&
                      item.icons.map((icon, iconIndex) => {
                        return (
                          <div key={iconIndex} className='text-2xl'>
                            {icon}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;