"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ParticleFieldProps {
  className?: string;
}

interface Particle {
  baseVx: number;
  baseVy: number;
  color: string;
  radius: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
}

const COLORS = ["#ffd34b", "#ff8a5c", "#ff6f9d", "#b026ff", "#fff3ec"];
const LINK_DISTANCE = 165;

/** Red de puntos ligera inspirada en la antigua configuración de tsParticles. */
export default function ParticleField({ className = "" }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext("2d");

    if (!canvas || !host || !context) return undefined;

    let width = 0;
    let height = 0;
    let deviceScale = 1;
    let particles: Particle[] = [];
    let animationFrame = 0;
    let isVisible = true;
    const pointer = { active: false, x: 0, y: 0 };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let firstIndex = 0; firstIndex < particles.length; firstIndex += 1) {
        const first = particles[firstIndex];

        for (let secondIndex = firstIndex + 1; secondIndex < particles.length; secondIndex += 1) {
          const second = particles[secondIndex];
          const distanceX = first.x - second.x;
          const distanceY = first.y - second.y;
          const distance = Math.hypot(distanceX, distanceY);

          if (distance > LINK_DISTANCE) continue;

          const opacity = (1 - distance / LINK_DISTANCE) * 0.38;
          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(second.x, second.y);
          context.strokeStyle = `rgba(255, 211, 75, ${opacity})`;
          context.lineWidth = 0.75;
          context.stroke();
        }
      }

      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.globalAlpha = 0.84;
        context.fill();
      }

      context.globalAlpha = 1;
    };

    const seed = () => {
      width = Math.max(host.clientWidth, 1);
      height = Math.max(host.clientHeight, 1);
      deviceScale = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * deviceScale);
      canvas.height = Math.floor(height * deviceScale);
      context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);

      const amount = Math.min(92, Math.max(46, Math.round((width * height) / 14000)));
      particles = Array.from({ length: amount }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.1 + Math.random() * 0.28;

        return {
          baseVx: Math.cos(angle) * speed,
          baseVy: Math.sin(angle) * speed,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          radius: 1 + Math.random() * 2.2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          x: Math.random() * width,
          y: Math.random() * height,
        };
      });

      draw();
    };

    const moveParticles = () => {
      for (const particle of particles) {
        if (pointer.active) {
          const distanceX = particle.x - pointer.x;
          const distanceY = particle.y - pointer.y;
          const distance = Math.hypot(distanceX, distanceY);

          if (distance > 0 && distance < 170) {
            const force = ((170 - distance) / 170) * 0.26;
            particle.vx += (distanceX / distance) * force;
            particle.vy += (distanceY / distance) * force;
          }
        }

        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vx = particle.vx * 0.985 + particle.baseVx * 0.015;
          particle.vy = particle.vy * 0.985 + particle.baseVy * 0.015;

          if (particle.x < 0 || particle.x > width) {
            particle.vx *= -1;
            particle.x = Math.max(0, Math.min(width, particle.x));
          }
          if (particle.y < 0 || particle.y > height) {
            particle.vy *= -1;
            particle.y = Math.max(0, Math.min(height, particle.y));
          }
        }
      }
    };

    const loop = () => {
      if (isVisible && !document.hidden) {
        moveParticles();
        draw();
      }
      animationFrame = window.requestAnimationFrame(loop);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      pointer.active = inside;
      if (!inside) return;

      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;

      if (reducedMotion) {
        moveParticles();
        draw();
      }
    };

    const resetPointer = () => {
      pointer.active = false;
    };

    const resizeObserver = new ResizeObserver(seed);
    resizeObserver.observe(host);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", resetPointer);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    visibilityObserver.observe(host);

    seed();
    if (!reducedMotion) animationFrame = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", resetPointer);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none block h-full w-full ${className}`} />;
}
