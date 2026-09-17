import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import usePrefersReducedMotion from './usePrefersReducedMotion';

export const TransitionContext = createContext({
  isTransitioning: false,
  stage: 'idle', // 'idle' | 'covering' | 'uncovering'
  navigateTo: () => {},
});

export const TransitionProvider = ({ children }) => {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [stage, setStage] = useState('idle');

  const navigateTo = useCallback(
    (targetHref) => {
      if (
        !targetHref ||
        targetHref.startsWith('#') ||
        targetHref.startsWith('mailto:') ||
        targetHref.startsWith('tel:') ||
        targetHref.startsWith('http://') ||
        targetHref.startsWith('https://')
      ) {
        return;
      }

      const currentClean = router?.asPath?.split('?')[0]?.replace(/\/$/, '') || '/';
      const targetClean = targetHref.split('?')[0]?.replace(/\/$/, '') || '/';

      if (currentClean === targetClean) {
        return;
      }

      if (reducedMotion) {
        router.push(targetHref);
        window.scrollTo(0, 0);
        return;
      }

      // Iniciar cobertura de cortina
      setIsTransitioning(true);
      setStage('covering');

      // Tiempo para que las cortinas cubran totalmente la pantalla (350ms)
      setTimeout(() => {
        // Ejecutar cambio de ruta con scroll deshabilitado de Next.js
        router.push(targetHref, undefined, { scroll: false }).then(() => {
          // Resetear el scroll mientras la pantalla está 100% cubierta
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

          // Breve respiro y destapar la cortina
          setTimeout(() => {
            setStage('uncovering');
            setTimeout(() => {
              setIsTransitioning(false);
              setStage('idle');
            }, 360);
          }, 80);
        });
      }, 360);
    },
    [router, reducedMotion]
  );

  // Interceptar clics en todos los enlaces internos
  useEffect(() => {
    const handleAnchorClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const target = anchor.getAttribute('target');

      if (
        !href ||
        target === '_blank' ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('http://') ||
        href.startsWith('https://')
      ) {
        return;
      }

      event.preventDefault();
      navigateTo(href);
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [navigateTo]);

  return (
    <TransitionContext.Provider value={{ isTransitioning, stage, navigateTo }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionRouter = () => useContext(TransitionContext);
export default TransitionProvider;
