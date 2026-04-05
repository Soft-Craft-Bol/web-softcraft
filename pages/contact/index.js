import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import Circles from '../../components/Circles';
import ContactImg from '../../components/ContactImg';

const Contact = () => {
  return (
    <div className='relative min-h-screen bg-primary/30 py-16 md:py-20 xl:py-2 flex items-start xl:items-center overflow-y-auto xl:overflow-hidden'>
      {/* decoraciones */}
      <div className='hidden md:block'>
        <Circles />
      </div>
      <div className='hidden xl:block'>
        <ContactImg />
      </div>

      <div className='container mx-auto relative z-20 px-4 sm:px-6 lg:px-8 py-10 xl:py-0'>
        <div className='flex flex-col xl:flex-row gap-6 xl:gap-16 items-stretch xl:items-center'>

          {/* info solo desktop/tablet */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:block w-full xl:w-[31%] text-left'
          >
            <h2 className='h2 mb-6 text-accent'>
              contacto
            </h2>

            <p className='max-w-[500px] mb-8 text-white/70 leading-relaxed'>
              En SoftCraft Bolivia estamos listos para ayudarte a transformar tus
              ideas en soluciones digitales reales. Cuéntanos sobre tu proyecto y
              nos pondremos en contacto contigo.
            </p>

            <div className='space-y-4 text-white/80'>
              <div className='bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm'>
                <span className='text-accent font-semibold'>Email:</span>{' '}
                softcraft2024@gmail.com
              </div>

              <div className='bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm'>
                <span className='text-accent font-semibold'>Celular:</span>{' '}
                +591 71486093
              </div>

              <div className='bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm'>
                <span className='text-accent font-semibold'>Dirección:</span>{' '}
                Cochabamba, Bolivia
              </div>
            </div>
          </motion.div>

          {/* form */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:w-[60%] mx-auto'
          >
            <form className='
              bg-white/5 border border-white/10 rounded-2xl 
                p-4 sm:p-6 md:p-8 backdrop-blur-md 
                space-y-4 sm:space-y-5
                h-[63vh] overflow-y-auto xl:h-auto xl:overflow-visible mt-12 xl:mt-2
                '>
              {/* título móvil */}
              <div className='xl:hidden text-center mb-2'>
                <h2 className='text-2xl sm:text-3xl font-bold text-accent mb-2'>
                  Contáctanos
                </h2>
                <p className='text-sm sm:text-base text-white/70 leading-relaxed'>
                  Cuéntanos sobre tu proyecto y te responderemos pronto.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5'>
                <div>
                  <label className='block text-sm text-white/70 mb-2'>
                    Nombre
                  </label>
                  <input
                    type='text'
                    placeholder='Ingresa tu nombre'
                    className='w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder:text-white/40 outline-none focus:border-accent transition-all duration-300'
                  />
                </div>

                <div>
                  <label className='block text-sm text-white/70 mb-2'>
                    Correo electrónico
                  </label>
                  <input
                    type='email'
                    placeholder='Ingresa tu correo'
                    className='w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder:text-white/40 outline-none focus:border-accent transition-all duration-300'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5'>
                <div>
                  <label className='block text-sm text-white/70 mb-2'>
                    Teléfono
                  </label>
                  <input
                    type='tel'
                    placeholder='Ingresa tu número'
                    className='w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder:text-white/40 outline-none focus:border-accent transition-all duration-300'
                  />
                </div>

                <div>
                  <label className='block text-sm text-white/70 mb-2'>
                    Tipo de proyecto
                  </label>
                  <select
                    className='w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white outline-none focus:border-accent transition-all duration-300'
                    defaultValue=''
                  >
                    <option value='' disabled>
                      Seleccione tipo de proyecto
                    </option>
                    <option value='desarrollo-web'>Desarrollo Web</option>
                    <option value='app-movil'>Aplicación Móvil</option>
                    <option value='software-medida'>Software a Medida</option>
                    <option value='inteligencia-artificial'>Inteligencia Artificial</option>
                    <option value='automatizacion'>Automatización de Procesos</option>
                    <option value='devops'>DevOps e Infraestructura</option>
                    <option value='soporte'>Soporte y Mantenimiento</option>
                  </select>
                </div>
              </div>

              <div>
                <label className='block text-sm text-white/70 mb-2'>
                  Mensaje
                </label>
                <textarea
                  rows='5'
                  placeholder='Cuéntanos sobre tu proyecto...'
                  className='w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder:text-white/40 outline-none focus:border-accent transition-all duration-300 resize-none'
                ></textarea>
              </div>

              {/* info rápida en móvil */}
              <div className='xl:hidden space-y-3 text-sm text-white/80'>
                <div className='bg-white/5 border border-white/10 rounded-xl p-3'>
                  <span className='text-accent font-semibold'>Email:</span> softcraft2024@gmail.com
                </div>
                <div className='bg-white/5 border border-white/10 rounded-xl p-3'>
                  <span className='text-accent font-semibold'>Celular:</span> +591 71486093
                </div>
                <div className='bg-white/5 border border-white/10 rounded-xl p-3'>
                  <span className='text-accent font-semibold'>Dirección:</span> Cochabamba, Bolivia
                </div>
              </div>

              <button
                type='submit'
                className='w-full sm:w-full md:w-auto bg-accent text-primary font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300'
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;