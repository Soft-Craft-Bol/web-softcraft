import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const GsapEffects = () => {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const routeView = document.querySelector('.route-view');
    const header = document.querySelector('.site-header');
    const logo = header?.querySelector('.brand img');
    const progress = document.querySelector('.scroll-progress');
    const cardCleanups = [];
    const context = gsap.context(() => {
      if (reducedMotion) return;

      if (header) {
        ScrollTrigger.create({
          trigger: document.body,
          start: 'top -24',
          onEnter: () => {
            header.classList.add('is-scrolled');
            if (logo) gsap.to(logo, { scale: 0.92, duration: 0.35, ease: 'power2.out' });
          },
          onLeaveBack: () => {
            header.classList.remove('is-scrolled');
            if (logo) gsap.to(logo, { scale: 1, duration: 0.35, ease: 'power2.out' });
          },
        });
      }

      if (progress) {
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: () => Math.max(document.documentElement.scrollHeight - window.innerHeight, 1),
              scrub: 0.2,
            },
          }
        );
      }

      const ambientOrb = document.querySelector('.site-ambient-orb');
      if (ambientOrb) {
        gsap.to(ambientOrb, {
          xPercent: 4,
          yPercent: 2,
          rotation: 3,
          scale: 1.06,
          duration: 22,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }

      const homeHero = routeView?.querySelector('.home-hero');
      if (homeHero) {
        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
        const heroTitle = homeHero.querySelector('.display-title');
        const heroLead = homeHero.querySelector('.hero-copy .lead');
        const heroActions = homeHero.querySelector('.hero-actions');
        const heroProof = homeHero.querySelector('.hero-proof');
        const heroSignature = homeHero.querySelector('.hero-signature');
        const scrollCue = homeHero.querySelector('.home-scroll-cue');

        if (heroTitle) heroTimeline.from(heroTitle, { y: 48, autoAlpha: 0, duration: 1.05 });
        if (heroLead) heroTimeline.from(heroLead, { y: 24, autoAlpha: 0, duration: 0.78 }, '-=0.72');
        if (heroActions) heroTimeline.from(heroActions, { y: 20, autoAlpha: 0, duration: 0.68 }, '-=0.58');
        if (heroProof) heroTimeline.from(heroProof, { y: 14, autoAlpha: 0, duration: 0.58 }, '-=0.5');
        if (heroSignature) {
          heroTimeline.from(
            heroSignature,
            { scale: 0.72, rotation: -14, autoAlpha: 0, duration: 0.9, ease: 'back.out(1.7)' },
            '-=0.52'
          );
        }
        if (scrollCue) heroTimeline.from(scrollCue, { y: 10, autoAlpha: 0, duration: 0.5 }, '-=0.4');

        const heroGlow = homeHero.querySelector('.home-hero-glow');
        if (heroGlow) {
          gsap.to(heroGlow, {
            xPercent: 2,
            yPercent: 1,
            scale: 1.04,
            duration: 16,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }
      }

      const intro = routeView?.querySelector('.page-intro-section');
      if (intro) {
        const introParts = intro.querySelectorAll('.section-title, .lead, .text-link');
        if (introParts.length) {
          gsap.from(introParts, {
            y: 30,
            autoAlpha: 0,
            duration: 0.78,
            stagger: 0.1,
            ease: 'power3.out',
          });
        }
      }

      const revealTargets = routeView?.querySelectorAll('[data-gsap-reveal], .page-cta, .contact-detail, .contact-form');
      revealTargets?.forEach((element, index) => {
        gsap.from(element, {
          y: 28,
          autoAlpha: 0,
          immediateRender: false,
          duration: 0.72,
          delay: (index % 3) * 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
        });
      });

      const cards = routeView?.querySelectorAll('[data-gsap-card]');
      cards?.forEach((element) => {
        if (window.matchMedia('(pointer: fine)').matches) {
          const moveX = gsap.quickTo(element, '--card-x', { duration: 0.24, ease: 'power3.out' });
          const moveY = gsap.quickTo(element, '--card-y', { duration: 0.24, ease: 'power3.out' });
          const handlePointerEnter = () => {
            element.classList.add('gsap-card-interactive');
            gsap.to(element, { '--card-glow': 0.72, duration: 0.25, ease: 'power2.out' });
          };
          const handlePointerMove = (event) => {
            const bounds = element.getBoundingClientRect();
            moveX(`${((event.clientX - bounds.left) / bounds.width) * 100}%`);
            moveY(`${((event.clientY - bounds.top) / bounds.height) * 100}%`);
          };
          const handlePointerLeave = () => {
            moveX('50%');
            moveY('50%');
            gsap.to(element, {
              '--card-glow': 0,
              duration: 0.4,
              ease: 'power2.out',
              onComplete: () => element.classList.remove('gsap-card-interactive'),
            });
          };

          element.addEventListener('pointerenter', handlePointerEnter);
          element.addEventListener('pointermove', handlePointerMove);
          element.addEventListener('pointerleave', handlePointerLeave);
          cardCleanups.push(() => {
            element.removeEventListener('pointerenter', handlePointerEnter);
            element.removeEventListener('pointermove', handlePointerMove);
            element.removeEventListener('pointerleave', handlePointerLeave);
            element.classList.remove('gsap-card-interactive');
          });
        }
      });
    }, routeView || undefined);

    const frame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(frame);
      cardCleanups.forEach((cleanup) => cleanup());
      context.revert();
      header?.classList.remove('is-scrolled');
      if (logo) gsap.set(logo, { clearProps: 'transform' });
      if (progress) gsap.set(progress, { clearProps: 'transform' });
    };
  }, [router.asPath, reducedMotion]);

  return null;
};

export default GsapEffects;
