import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';
import { useTheme } from './ThemeContext';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const ParticlesContainer = () => {
  const { theme } = useTheme();
  const reducedMotion = usePrefersReducedMotion();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="particle-canvas"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: { enable: false },
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: {
              distance: reducedMotion ? 105 : 180,
              duration: reducedMotion ? 0.2 : 0.4,
            },
          },
        },
        particles: {
          color: { value: theme === 'light' ? ['#9A0389', '#b23046'] : ['#FCBF02', '#FC354C', '#ffffff'] },
          links: {
            color: theme === 'light' ? '#9A0389' : '#fff0d8',
            distance: 145,
            enable: true,
            opacity: theme === 'light' ? 0.18 : 0.25,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            direction: 'none',
            // La versión calmada conserva el movimiento suave solicitado por el dueño.
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: reducedMotion ? 0.22 : 0.8,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: reducedMotion ? 56 : 92,
          },
          opacity: { value: reducedMotion ? { min: 0.2, max: 0.62 } : { min: 0.28, max: 0.86 } },
          shape: { type: 'circle' },
          size: { value: { min: 1.2, max: 3.4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
