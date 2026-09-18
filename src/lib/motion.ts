import gsap from "gsap";

const MOTION_SELECTOR = "[data-motion]";
const MOTION_EASE = "expo.out";

type MotionTarget = HTMLElement;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function elementInside(root: MotionTarget, selector: string): HTMLElement | null {
  return root.querySelector<HTMLElement>(selector);
}

function prepareMotion(root: MotionTarget): void {
  switch (root.dataset.motion) {
    case "hero": {
      const title = elementInside(root, "[data-motion-hero-title]");
      const lead = elementInside(root, "[data-motion-hero-lead]");
      const actions = elementInside(root, "[data-motion-hero-actions]");
      const mark = elementInside(root, "[data-motion-hero-mark]");
      const cue = elementInside(root, "[data-motion-hero-cue]");

      if (title) gsap.set(title, { opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)", filter: "blur(8px)" });
      if (lead) gsap.set(lead, { opacity: 0, y: 16 });
      if (actions) gsap.set(actions, { opacity: 0, y: 14, scale: 0.98 });
      if (mark) gsap.set(mark, { opacity: 0, scale: 0.84, rotate: -5, filter: "blur(10px)", transformOrigin: "50% 50%" });
      if (cue) gsap.set(cue, { opacity: 0, x: 12 });
      break;
    }
    case "intro": {
      const eyebrow = elementInside(root, "[data-motion-intro-eyebrow]");
      const title = elementInside(root, "[data-motion-intro-title]");
      const lead = elementInside(root, "[data-motion-intro-lead]");
      const link = elementInside(root, "[data-motion-intro-link]");
      const rule = elementInside(root, "[data-motion-intro-rule]");

      if (eyebrow) gsap.set(eyebrow, { opacity: 0, x: -18, filter: "blur(6px)" });
      if (title) gsap.set(title, { opacity: 0, y: 22, clipPath: "inset(0 0 100% 0)" });
      if (lead) gsap.set(lead, { opacity: 0, y: 16 });
      if (link) gsap.set(link, { opacity: 0, x: -10 });
      if (rule) gsap.set(rule, { scaleX: 0, transformOrigin: "0% 50%" });
      break;
    }
    case "stagger": {
      const items = Array.from(root.querySelectorAll<HTMLElement>("[data-motion-item]"));
      gsap.set(items, {
        y: 20,
        scale: 0.985,
        rotateX: -3,
        filter: "blur(4px)",
        transformPerspective: 900,
        transformOrigin: "50% 100%",
      });
      break;
    }
    case "cta": {
      const copy = elementInside(root, "[data-motion-cta-copy]");
      const action = elementInside(root, "[data-motion-cta-action]");

      gsap.set(root, { y: 18, filter: "blur(5px)" });
      if (copy) gsap.set(copy, { x: -12 });
      if (action) gsap.set(action, { x: 12, scale: 0.97 });
      break;
    }
    case "carousel": {
      const heading = elementInside(root, "[data-motion-carousel-heading]");
      const track = elementInside(root, "[data-motion-carousel-track]");

      if (heading) gsap.set(heading, { opacity: 0, y: 16 });
      if (track) gsap.set(track, { opacity: 0, x: 28, clipPath: "inset(0 0 0 8% round 1rem)" });
      break;
    }
    case "form":
      gsap.set(root, { y: 22, filter: "blur(6px)" });
      break;
    case "reveal": {
      const direction = root.dataset.motionDirection === "left" ? -1 : 1;
      gsap.set(root, {
        x: direction * 48,
        y: 18,
        scale: 0.985,
        filter: "blur(8px)",
      });
      break;
    }
    default:
      break;
  }
}

function animateHero(root: MotionTarget): gsap.core.Timeline {
  const title = elementInside(root, "[data-motion-hero-title]");
  const lead = elementInside(root, "[data-motion-hero-lead]");
  const actions = elementInside(root, "[data-motion-hero-actions]");
  const mark = elementInside(root, "[data-motion-hero-mark]");
  const cue = elementInside(root, "[data-motion-hero-cue]");
  const timeline = gsap.timeline({ defaults: { ease: MOTION_EASE } });

  if (title) {
    timeline.fromTo(
      title,
      {
        opacity: 0,
        y: 30,
        clipPath: "inset(0 0 100% 0)",
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        filter: "blur(0px)",
        duration: 0.72,
        clearProps: "clipPath,filter,opacity,transform",
      },
    );
  }

  if (lead) {
    timeline.fromTo(
      lead,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.48,
        clearProps: "opacity,transform",
      },
      "-=0.42",
    );
  }

  if (actions) {
    timeline.fromTo(
      actions,
      { opacity: 0, y: 14, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.46,
        clearProps: "opacity,transform",
      },
      "-=0.24",
    );
  }

  if (mark) {
    timeline.fromTo(
      mark,
      {
        opacity: 0,
        scale: 0.84,
        rotate: -5,
        filter: "blur(10px)",
        transformOrigin: "50% 50%",
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        duration: 0.84,
        clearProps: "filter,opacity,transform",
      },
      0.12,
    );
  }

  if (cue) {
    timeline.fromTo(
      cue,
      { opacity: 0, x: 12 },
      {
        opacity: 1,
        x: 0,
        duration: 0.36,
        clearProps: "opacity,transform",
      },
      0.6,
    );
  }

  return timeline;
}

function animateIntro(root: MotionTarget): gsap.core.Timeline {
  const eyebrow = elementInside(root, "[data-motion-intro-eyebrow]");
  const title = elementInside(root, "[data-motion-intro-title]");
  const lead = elementInside(root, "[data-motion-intro-lead]");
  const link = elementInside(root, "[data-motion-intro-link]");
  const rule = elementInside(root, "[data-motion-intro-rule]");
  const timeline = gsap.timeline({ defaults: { ease: MOTION_EASE } });

  if (eyebrow) {
    timeline.fromTo(
      eyebrow,
      { opacity: 0, x: -18, filter: "blur(6px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.38,
        clearProps: "filter,opacity,transform",
      },
    );
  }

  if (title) {
    timeline.fromTo(
      title,
      { opacity: 0, y: 22, clipPath: "inset(0 0 100% 0)" },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration: 0.68,
        clearProps: "clipPath,opacity,transform",
      },
      eyebrow ? "-=0.16" : 0,
    );
  }

  if (lead) {
    timeline.fromTo(
      lead,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.48,
        clearProps: "opacity,transform",
      },
      "-=0.38",
    );
  }

  if (link) {
    timeline.fromTo(
      link,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.38,
        clearProps: "opacity,transform",
      },
      "-=0.24",
    );
  }

  if (rule) {
    timeline.fromTo(
      rule,
      { scaleX: 0, transformOrigin: "0% 50%" },
      {
        scaleX: 1,
        duration: 0.48,
        clearProps: "transform",
      },
      "-=0.38",
    );
  }

  return timeline;
}

function animateStagger(root: MotionTarget): gsap.core.Timeline {
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-motion-item]"));
  const timeline = gsap.timeline({ defaults: { ease: MOTION_EASE } });

  if (items.length === 0) return timeline;

  timeline.to(items, {
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    duration: 0.52,
    stagger: { each: 0.075, from: "start" },
    clearProps: "filter,transform",
  });

  return timeline;
}

function animateCta(root: MotionTarget): gsap.core.Timeline {
  const copy = elementInside(root, "[data-motion-cta-copy]");
  const action = elementInside(root, "[data-motion-cta-action]");
  const timeline = gsap.timeline({ defaults: { ease: MOTION_EASE } });

  timeline.to(root, {
    y: 0,
    filter: "blur(0px)",
    duration: 0.68,
    clearProps: "filter,transform",
  });

  if (copy) {
    timeline.to(
      copy,
      { x: 0, duration: 0.42, clearProps: "transform" },
      "-=0.42",
    );
  }

  if (action) {
    timeline.to(
      action,
      { x: 0, scale: 1, duration: 0.44, clearProps: "transform" },
      "-=0.3",
    );
  }

  return timeline;
}

function animateCarousel(root: MotionTarget): gsap.core.Timeline {
  const heading = elementInside(root, "[data-motion-carousel-heading]");
  const track = elementInside(root, "[data-motion-carousel-track]");
  const timeline = gsap.timeline({ defaults: { ease: MOTION_EASE } });

  if (heading) {
    timeline.fromTo(
      heading,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        clearProps: "opacity,transform",
      },
    );
  }

  if (track) {
    timeline.fromTo(
      track,
      {
        opacity: 0,
        x: 28,
        clipPath: "inset(0 0 0 8% round 1rem)",
      },
      {
        opacity: 1,
        x: 0,
        clipPath: "inset(0 0 0 0% round 1rem)",
        duration: 0.72,
        clearProps: "clipPath,opacity,transform",
      },
      "-=0.22",
    );
  }

  return timeline;
}

function animatePanel(root: MotionTarget): gsap.core.Timeline {
  const isReveal = root.dataset.motion === "reveal";

  return gsap
    .timeline({ defaults: { ease: MOTION_EASE } })
    .to(root, {
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: isReveal ? 0.78 : 0.62,
      delay: isReveal ? 0.12 : 0,
      clearProps: "filter,transform",
    });
}

function createMotion(target: MotionTarget): gsap.core.Timeline {
  switch (target.dataset.motion) {
    case "hero":
      return animateHero(target);
    case "intro":
      return animateIntro(target);
    case "stagger":
      return animateStagger(target);
    case "cta":
      return animateCta(target);
    case "carousel":
      return animateCarousel(target);
    case "form":
    case "reveal":
      return animatePanel(target);
    default:
      return gsap.timeline();
  }
}

export function animatePageContent(): () => void {
  if (prefersReducedMotion()) return () => undefined;

  const main = document.querySelector<HTMLElement>("main");
  if (!main || !("IntersectionObserver" in window)) return () => undefined;

  const targets = Array.from(main.querySelectorAll<MotionTarget>(MOTION_SELECTOR));
  const timelines = new Set<gsap.core.Timeline>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target as MotionTarget;
        if (target.dataset.motionPlayed === "true") return;

        target.dataset.motionPlayed = "true";
        observer.unobserve(target);
        const timeline = createMotion(target);
        timelines.add(timeline);
        timeline.eventCallback("onComplete", () => timelines.delete(timeline));
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  targets.forEach(prepareMotion);
  targets.forEach((target) => observer.observe(target));

  return () => {
    observer.disconnect();
    timelines.forEach((timeline) => timeline.kill());
    targets.forEach((target) => delete target.dataset.motionPlayed);
  };
}
