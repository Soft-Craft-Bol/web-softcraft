import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTransitionRouter } from './TransitionContext';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const curtains = [
  { id: 'curtain-purple', bg: '#9A0389', zIndex: 94 },
  { id: 'curtain-coral', bg: '#FC354C', zIndex: 93 },
  { id: 'curtain-orange', bg: '#FC6819', zIndex: 92 },
  { id: 'curtain-gold', bg: '#FCBF02', zIndex: 91 },
];

const Transition = () => {
  const { isTransitioning, stage } = useTransitionRouter();
  const reducedMotion = usePrefersReducedMotion();
  const rootRef = useRef(null);
  const layerRefs = useRef([]);

  useEffect(() => {
    if (reducedMotion || !isTransitioning) return undefined;

    const context = gsap.context(() => {
      const layers = layerRefs.current.filter(Boolean);

      if (stage === 'covering') {
        gsap.fromTo(
          layers,
          { x: '100%' },
          {
            x: '0%',
            duration: 0.42,
            stagger: 0.07,
            ease: 'power4.inOut',
            overwrite: 'auto',
          }
        );
      }

      if (stage === 'uncovering') {
        gsap.to([...layers].reverse(), {
          x: '-100%',
          duration: 0.42,
          stagger: 0.07,
          ease: 'power4.inOut',
          overwrite: 'auto',
        });
      }
    }, rootRef);

    return () => context.revert();
  }, [isTransitioning, reducedMotion, stage]);

  if (reducedMotion || !isTransitioning) return null;

  return (
    <div ref={rootRef} aria-hidden="true" className="route-gsap-curtains">
      {curtains.map((curtain, index) => (
        <div
          key={curtain.id}
          ref={(element) => {
            layerRefs.current[index] = element;
          }}
          className="route-gsap-curtain"
          style={{ backgroundColor: curtain.bg, zIndex: curtain.zIndex }}
        />
      ))}
    </div>
  );
};

export default Transition;
