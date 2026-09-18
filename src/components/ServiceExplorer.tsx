"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent, PointerEvent, WheelEvent } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { SERVICES } from "@/lib/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const accentText: Record<string, string> = {
  magenta: "text-rose",
  gold: "text-gold",
  coral: "text-coral",
};

const accentSurface: Record<string, string> = {
  magenta: "from-magenta/20 via-panel to-panel",
  gold: "from-gold/18 via-panel to-panel",
  coral: "from-coral/20 via-panel to-panel",
};

const accentBar: Record<string, string> = {
  magenta: "bg-magenta",
  gold: "bg-gold",
  coral: "bg-coral",
};

const COPY_COUNT = 5;
const MIDDLE_COPY = Math.floor(COPY_COUNT / 2);
const INITIAL_RENDER_INDEX = MIDDLE_COPY * SERVICES.length;

const serviceSlides = Array.from({ length: COPY_COUNT }, (_, copyIndex) =>
  SERVICES.map((service, serviceIndex) => ({
    service,
    serviceIndex,
    renderIndex: copyIndex * SERVICES.length + serviceIndex,
  })),
).flat();

function getSlideScrollLeft(track: HTMLDivElement, slide: HTMLElement) {
  const trackRect = track.getBoundingClientRect();
  const slideRect = slide.getBoundingClientRect();

  return Math.max(0, track.scrollLeft + slideRect.left - trackRect.left - track.clientLeft);
}

function getFirstVisibleSlideIndex(track: HTMLDivElement, slides: Array<HTMLElement | null>) {
  const trackRect = track.getBoundingClientRect();
  const leadingEdge = trackRect.left + track.clientLeft + 2;
  let firstIndex = -1;
  let closestDistance = Number.POSITIVE_INFINITY;

  slides.forEach((slide, index) => {
    if (!slide) return;

    const slideRect = slide.getBoundingClientRect();
    if (slideRect.right <= leadingEdge || slideRect.left >= trackRect.right) return;

    const distance = Math.abs(slideRect.left - leadingEdge);
    if (distance < closestDistance) {
      closestDistance = distance;
      firstIndex = index;
    }
  });

  return firstIndex;
}

/* Carrusel accesible con desplazamiento nativo, gesto táctil y recorrido circular. */
export default function ServiceExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const currentRenderIndexRef = useRef(INITIAL_RENDER_INDEX);
  const isInitialisedRef = useRef(false);
  const scrollFrameRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const pointerStartXRef = useRef(0);
  const pointerStartYRef = useRef(0);
  const pointerMovedRef = useRef(false);
  const wheelLockRef = useRef(false);
  const wheelTimeoutRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);
  const reducedMotion = usePrefersReducedMotion();
  const current = SERVICES[activeIndex];

  const scrollToRenderIndex = useCallback(
    (renderIndex: number, behavior: ScrollBehavior = reducedMotion ? "auto" : "smooth", focusSlide = false) => {
      const track = trackRef.current;
      const slide = slideRefs.current[renderIndex];
      if (!track || !slide) return;

      const logicalIndex = renderIndex % SERVICES.length;
      currentRenderIndexRef.current = renderIndex;
      setActiveIndex(logicalIndex);
      track.scrollTo({ left: getSlideScrollLeft(track, slide), behavior });

      if (focusSlide) {
        window.requestAnimationFrame(() => slide.focus({ preventScroll: true }));
      }
    },
    [reducedMotion],
  );

  const handleTrackScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || scrollFrameRef.current !== null) return;

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      const renderIndex = getFirstVisibleSlideIndex(track, slideRefs.current);
      if (renderIndex < 0) return;

      currentRenderIndexRef.current = renderIndex;
      setActiveIndex(renderIndex % SERVICES.length);

      const atLeadingCopy = renderIndex < SERVICES.length;
      const atTrailingCopy = renderIndex >= (COPY_COUNT - 1) * SERVICES.length;
      if (!isInitialisedRef.current || (!atLeadingCopy && !atTrailingCopy)) return;

      const targetRenderIndex = MIDDLE_COPY * SERVICES.length + (renderIndex % SERVICES.length);
      const targetSlide = slideRefs.current[targetRenderIndex];
      if (!targetSlide) return;

      track.scrollTo({ left: getSlideScrollLeft(track, targetSlide), behavior: "auto" });
      currentRenderIndexRef.current = targetRenderIndex;
      setActiveIndex(targetRenderIndex % SERVICES.length);
    });
  }, []);

  const moveBy = useCallback(
    (amount: -1 | 1, focusSlide = false) => {
      let targetRenderIndex = currentRenderIndexRef.current + amount;
      let behavior: ScrollBehavior | undefined;

      if (targetRenderIndex < 0 || targetRenderIndex >= serviceSlides.length) {
        targetRenderIndex = MIDDLE_COPY * SERVICES.length + ((targetRenderIndex % SERVICES.length) + SERVICES.length) % SERVICES.length;
        behavior = "auto";
      }

      scrollToRenderIndex(targetRenderIndex, behavior, focusSlide);
    },
    [scrollToRenderIndex],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const initialFrame = window.requestAnimationFrame(() => {
      scrollToRenderIndex(INITIAL_RENDER_INDEX, "auto");
      isInitialisedRef.current = true;
      handleTrackScroll();
    });

    return () => {
      window.cancelAnimationFrame(initialFrame);
      if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
      if (wheelTimeoutRef.current !== null) window.clearTimeout(wheelTimeoutRef.current);
      scrollFrameRef.current = null;
      wheelTimeoutRef.current = null;
      isInitialisedRef.current = false;
    };
  }, [handleTrackScroll, scrollToRenderIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (isInitialisedRef.current && !isInteractingRef.current && !document.hidden) moveBy(1);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [moveBy]);

  const scrollToService = (index: number, focusSlide = false) => {
    const logicalIndex = (index + SERVICES.length) % SERVICES.length;
    const currentRenderIndex = currentRenderIndexRef.current;
    const candidates = Array.from({ length: COPY_COUNT }, (_, copyIndex) => copyIndex * SERVICES.length + logicalIndex);
    const nearestRenderIndex = candidates.reduce((closest, candidate) =>
      Math.abs(candidate - currentRenderIndex) < Math.abs(closest - currentRenderIndex) ? candidate : closest,
    );

    scrollToRenderIndex(nearestRenderIndex, undefined, focusSlide);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    pointerIdRef.current = event.pointerId;
    pointerStartXRef.current = event.clientX;
    pointerStartYRef.current = event.clientY;
    pointerMovedRef.current = false;
    isInteractingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerId !== pointerIdRef.current) return;

    const deltaX = event.clientX - pointerStartXRef.current;
    const deltaY = event.clientY - pointerStartYRef.current;
    if (!pointerMovedRef.current && Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 12) {
      pointerIdRef.current = null;
      isInteractingRef.current = false;
      return;
    }

    if (Math.abs(deltaX) > 10) {
      pointerMovedRef.current = true;
      event.preventDefault();
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerId !== pointerIdRef.current) return;

    const deltaX = event.clientX - pointerStartXRef.current;
    const shouldMove = pointerMovedRef.current && Math.abs(deltaX) >= 36;
    pointerIdRef.current = null;
    pointerMovedRef.current = false;
    isInteractingRef.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (shouldMove) moveBy(deltaX < 0 ? 1 : -1);
  };

  const handlePointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerId !== pointerIdRef.current) return;

    pointerIdRef.current = null;
    pointerMovedRef.current = false;
    isInteractingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const horizontalDelta = Math.abs(event.deltaX) >= Math.abs(event.deltaY) ? event.deltaX : event.shiftKey ? event.deltaY : 0;
    if (horizontalDelta === 0) return;

    event.preventDefault();
    if (wheelLockRef.current) return;

    wheelLockRef.current = true;
    isInteractingRef.current = true;
    moveBy(horizontalDelta > 0 ? 1 : -1);
    wheelTimeoutRef.current = window.setTimeout(() => {
      wheelLockRef.current = false;
      isInteractingRef.current = false;
      wheelTimeoutRef.current = null;
    }, 450);
  };

  const handleFocusCapture = () => {
    isInteractingRef.current = true;
  };

  const handleBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) isInteractingRef.current = false;
  };

  const handleTrackKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveBy(1, true);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveBy(-1, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      scrollToService(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      scrollToService(SERVICES.length - 1, true);
    }
  };

  return (
    <div className="space-y-7" onFocusCapture={handleFocusCapture} onBlurCapture={handleBlurCapture}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="max-w-[18ch] text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
          Empieza por lo que más te quita tiempo.
        </h2>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-dim">
          {String(activeIndex + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
        </p>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label="Servicios de SoftCraft"
        aria-roledescription="carrusel"
        tabIndex={0}
        onKeyDown={handleTrackKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onWheel={handleWheel}
        onScroll={handleTrackScroll}
        className="service-track isolate flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-hidden overscroll-x-contain px-1 pb-3 pr-8 select-none touch-pan-y lg:pr-1"
      >
        {serviceSlides.map(({ service, serviceIndex, renderIndex }) => {
          const Icon = service.icon;

          return (
            <article
              key={`${service.title}-${renderIndex}`}
              ref={(element) => {
                slideRefs.current[renderIndex] = element;
              }}
              data-service-slide
              data-service-index={serviceIndex}
              data-render-index={renderIndex}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${service.title}, ${serviceIndex + 1} de ${SERVICES.length}`}
              tabIndex={-1}
              className={`relative w-[calc(100%_-_1rem)] min-w-[calc(100%_-_1rem)] flex-none snap-start overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br p-6 sm:w-[calc(100%_-_3rem)] sm:min-w-[calc(100%_-_3rem)] sm:p-9 lg:w-[calc((100%_-_2rem)_/_3)] lg:min-w-[calc((100%_-_2rem)_/_3)] lg:p-5 ${accentSurface[service.accent]}`}
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${accentBar[service.accent]}`} />
              <div className="grid gap-8 lg:gap-5">
                <div className="space-y-6 lg:space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-abyss/35 ${accentText[service.accent]} lg:h-12 lg:w-12 lg:rounded-xl`}>
                      <Icon aria-hidden="true" className="h-7 w-7 lg:h-6 lg:w-6" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-dim">
                      {String(serviceIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-cream sm:text-4xl lg:text-2xl xl:text-3xl">{service.title}</h3>
                    <p className={`mt-5 font-mono text-[0.68rem] uppercase tracking-[0.14em] lg:mt-4 ${accentText[service.accent]}`}>
                      Qué resuelve
                    </p>
                    <p className="mt-2 max-w-[38ch] text-base leading-relaxed text-haze lg:text-sm xl:text-base">{service.problem}</p>
                  </div>
                </div>

                <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-4">
                  <div className="border-t border-white/20 pt-4 lg:pt-3">
                    <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold">Qué incluye</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-cream lg:text-[0.84rem] xl:text-sm">{service.includes}</dd>
                  </div>
                  <div className="border-t border-white/20 pt-4 lg:pt-3">
                    <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold">Qué ganas</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-cream lg:text-[0.84rem] xl:text-sm">{service.benefit}</dd>
                  </div>
                </dl>
              </div>
            </article>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Mostrando {current.title}, {activeIndex + 1} de {SERVICES.length}.
      </p>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-1" aria-label="Ir a un servicio">
          {SERVICES.map((service, index) => (
            <button
              key={service.title}
              type="button"
              aria-label={`Mostrar ${service.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => scrollToService(index)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full focus-visible:outline-none"
            >
              <span
                aria-hidden="true"
                className={`block rounded-full transition-all ${index === activeIndex ? "h-2.5 w-8 bg-gold" : "h-2.5 w-2.5 bg-white/20 hover:bg-white/45"}`}
              />
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Servicio anterior"
            onClick={() => moveBy(-1)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <HiArrowLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Siguiente servicio"
            onClick={() => moveBy(1)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <HiArrowRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
