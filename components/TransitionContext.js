import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
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
  const timersRef = useRef([]);
  const isNavigatingRef = useRef(false);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const schedule = useCallback((callback, delay) => {
    const timer = window.setTimeout(() => {
      timersRef.current = timersRef.current.filter((activeTimer) => activeTimer !== timer);
      callback();
    }, delay);
    timersRef.current.push(timer);
    return timer;
  }, []);

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

      if (isNavigatingRef.current) {
        return;
      }

      if (reducedMotion) {
        router.push(targetHref);
        window.scrollTo(0, 0);
        return;
      }

      isNavigatingRef.current = true;
      setIsTransitioning(true);
      setStage('covering');

      schedule(() => {
        router
          .push(targetHref, undefined, { scroll: false })
          .then(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

            schedule(() => {
              setStage('uncovering');
              schedule(() => {
                setIsTransitioning(false);
                setStage('idle');
                isNavigatingRef.current = false;
              }, 360);
            }, 80);
          })
          .catch(() => {
            setIsTransitioning(false);
            setStage('idle');
            isNavigatingRef.current = false;
          });
      }, 360);
    },
    [router, reducedMotion, schedule]
  );

  useEffect(() => () => clearTimers(), [clearTimers]);

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

    // Ejecutar antes del manejador interno de Next Link para conservar la cortina.
    document.addEventListener('click', handleAnchorClick, true);
    return () => document.removeEventListener('click', handleAnchorClick, true);
  }, [navigateTo]);

  return (
    <TransitionContext.Provider value={{ isTransitioning, stage, navigateTo }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionRouter = () => useContext(TransitionContext);
export default TransitionProvider;
