import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import usePrefersReducedMotion from './usePrefersReducedMotion';

// Tiempos del barrido de tinta. Un solo lugar manda: la pantalla se libera justo
// cuando la última capa termina de cubrir el viewport.
export const WIPE = {
  duration: 0.46,
  stagger: 0.045,
  cover: 360,
};

// El cambio de ruta no debe devolver la pantalla al inicio antes de cubrir.
// Mientras el barrido tapa, el scroll queda fijo en su sitio y el salto al
// inicio ocurre detrás de la tinta.
const useRouteWipe = () => {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();
  const [wipeKey, setWipeKey] = useState(0);
  const startRef = useRef(0);
  const timers = useRef([]);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const html = document.documentElement;
    const clearTimers = () => {
      timers.current.forEach(window.clearTimeout);
      timers.current = [];
    };

    const lock = () => {
      const offset = window.scrollY;
      html.style.setProperty('--sc-lock-offset', `-${offset}px`);
      html.classList.add('is-wiping');
    };

    const release = () => {
      const previous = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      html.classList.remove('is-wiping');
      html.style.removeProperty('--sc-lock-offset');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      html.style.scrollBehavior = previous;
      // Segundo paso: algunos navegadores restauran el scroll después del
      // reflujo que provoca devolver el body al flujo normal.
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
    };

    const onStart = (url) => {
      if (url && url.split('#')[0] === router.asPath.split('#')[0]) return;

      clearTimers();
      startRef.current = Date.now();
      lock();
      setWipeKey((value) => value + 1);
      timers.current.push(window.setTimeout(release, WIPE.cover));
    };

    const onSettled = () => {
      const elapsed = Date.now() - startRef.current;
      const remaining = Math.max(0, WIPE.cover - elapsed);
      clearTimers();
      timers.current.push(window.setTimeout(release, remaining));
    };

    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onSettled);
    router.events.on('routeChangeError', onSettled);

    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onSettled);
      router.events.off('routeChangeError', onSettled);
      clearTimers();
      html.classList.remove('is-wiping');
      html.style.removeProperty('--sc-lock-offset');
    };
  }, [router.events, router.asPath, reducedMotion]);

  return { wipeKey, reducedMotion };
};

export default useRouteWipe;
