import gsap from "gsap";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const TRANSITION_ELEMENT_ID = "transition-element";
const ANIMATION_DURATION = 0.72;
const TRAILING_RADIUS_START = 0.34;
const TRAILING_RADIUS_DURATION = ANIMATION_DURATION - TRAILING_RADIUS_START;
const LEADING_RADIUS_DURATION = 0.26;

let activeExitTimeline: gsap.core.Timeline | null = null;

function getTransitionElement(): HTMLElement | null {
  return document.getElementById(TRANSITION_ELEMENT_ID);
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function navigateTo(href: string, router: AppRouterInstance): void {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  router.push(href, { scroll: true });
}

export function animatePageIn(): gsap.core.Timeline | null {
  const element = getTransitionElement();
  if (!element) return null;

  gsap.killTweensOf(element);
  const timeline = gsap.timeline();

  timeline.set(element, {
    autoAlpha: 1,
    xPercent: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  });

  if (prefersReducedMotion()) {
    timeline.set(element, { autoAlpha: 0, xPercent: -100 });
    return timeline;
  }

  timeline
    .to(element, {
      xPercent: -100,
      duration: ANIMATION_DURATION,
      ease: "power3.inOut",
    })
    .to(
      element,
      {
        borderTopRightRadius: "50vh",
        borderBottomRightRadius: "50vh",
        duration: TRAILING_RADIUS_DURATION,
        ease: "power2.out",
      },
      TRAILING_RADIUS_START,
    )
    .set(element, { autoAlpha: 0 });

  return timeline;
}

export function animatePageOut(href: string, router: AppRouterInstance): void {
  if (activeExitTimeline?.isActive()) return;

  const element = getTransitionElement();
  if (!element || prefersReducedMotion()) {
    navigateTo(href, router);
    return;
  }

  gsap.killTweensOf(element);
  activeExitTimeline = gsap.timeline({
    onComplete: () => {
      activeExitTimeline = null;
      navigateTo(href, router);
    },
  });

  activeExitTimeline
    .set(element, {
      autoAlpha: 1,
      xPercent: 100,
      borderTopLeftRadius: "50vh",
      borderBottomLeftRadius: "50vh",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    })
    .to(element, {
      xPercent: 0,
      duration: ANIMATION_DURATION,
      ease: "power3.inOut",
    })
    .to(
      element,
      {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        duration: LEADING_RADIUS_DURATION,
        ease: "power2.out",
      },
      "<0.46",
    );
}
