"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ParticleFieldProps {
  className?: string;
}

interface Particle {
  angle: number;
  color: string;
  radius: number;
  speed: number;
  vx: number;
  vy: number;
  wander: number;
  wanderSpeed: number;
  x: number;
  y: number;
}

const COLORS = ["#ffd34b", "#ff8a5c", "#ff6f9d", "#b026ff", "#fff3ec"];
const LINK_DISTANCE = 165;
const POINTER_RADIUS = 210;

function steerAngle(current: number, target: number, strength: number) {
  const difference = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  return current + difference * strength;
}

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
      const linkDistance = width < 640 ? 125 : LINK_DISTANCE;
      context.clearRect(0, 0, width, height);

      for (let firstIndex = 0; firstIndex < particles.length; firstIndex += 1) {
        const first = particles[firstIndex];

        for (let secondIndex = firstIndex + 1; secondIndex < particles.length; secondIndex += 1) {
          const second = particles[secondIndex];
          const distanceX = first.x - second.x;
          const distanceY = first.y - second.y;
          const distance = Math.hypot(distanceX, distanceY);

          if (distance > linkDistance) continue;

          const opacity = (1 - distance / linkDistance) * 0.38;
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

      const amount = width < 640
        ? Math.min(44, Math.max(27, Math.round(Math.round((width * height) / 26000) * 1.7)))
        : Math.min(92, Math.max(46, Math.round((width * height) / 14000)));
      const margin = Math.min(72, Math.max(20, Math.min(width, height) * 0.14));
      const spreadX = Math.max(1, width - margin * 2);
      const spreadY = Math.max(1, height - margin * 2);

      particles = Array.from({ length: amount }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.1 + Math.random() * 0.28;

        return {
          angle,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          radius: 1 + Math.random() * 2.2,
          speed,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          wander: Math.random() * Math.PI * 2,
          wanderSpeed: 0.004 + Math.random() * 0.008,
          x: margin + Math.random() * spreadX,
          y: margin + Math.random() * spreadY,
        };
      });

      draw();
    };

    const moveParticles = () => {
      const edgeMargin = Math.min(72, Math.max(20, Math.min(width, height) * 0.14));

      for (const particle of particles) {
        if (!reducedMotion) {
          particle.wander += particle.wanderSpeed;
          particle.angle += Math.sin(particle.wander) * 0.004;

          const nearestEdge = Math.min(particle.x, width - particle.x, particle.y, height - particle.y);
          const edgeSafety = Math.min(1, Math.max(0, nearestEdge / edgeMargin));

          const leftProximity = Math.max(0, 1 - particle.x / edgeMargin);
          const rightProximity = Math.max(0, 1 - (width - particle.x) / edgeMargin);
          const topProximity = Math.max(0, 1 - particle.y / edgeMargin);
          const bottomProximity = Math.max(0, 1 - (height - particle.y) / edgeMargin);

          if (leftProximity > 0) particle.angle = steerAngle(particle.angle, 0, 0.04 + leftProximity * 0.22);
          if (rightProximity > 0) particle.angle = steerAngle(particle.angle, Math.PI, 0.04 + rightProximity * 0.22);
          if (topProximity > 0) particle.angle = steerAngle(particle.angle, Math.PI / 2, 0.04 + topProximity * 0.22);
          if (bottomProximity > 0) particle.angle = steerAngle(particle.angle, -Math.PI / 2, 0.04 + bottomProximity * 0.22);

          const targetVx = Math.cos(particle.angle) * particle.speed;
          const targetVy = Math.sin(particle.angle) * particle.speed;
          particle.vx += (targetVx - particle.vx) * 0.04;
          particle.vy += (targetVy - particle.vy) * 0.04;

          if (pointer.active) {
            const distanceX = particle.x - pointer.x;
            const distanceY = particle.y - pointer.y;
            const distance = Math.hypot(distanceX, distanceY);

            if (distance > 0 && distance < POINTER_RADIUS) {
              const influence = 1 - distance / POINTER_RADIUS;
              const awayX = distanceX / distance;
              const awayY = distanceY / distance;
              const outwardX = awayX < 0 && particle.x < edgeMargin
                ? Math.min(1, particle.x / edgeMargin)
                : awayX > 0 && width - particle.x < edgeMargin
                  ? Math.min(1, (width - particle.x) / edgeMargin)
                  : 1;
              const outwardY = awayY < 0 && particle.y < edgeMargin
                ? Math.min(1, particle.y / edgeMargin)
                : awayY > 0 && height - particle.y < edgeMargin
                  ? Math.min(1, (height - particle.y) / edgeMargin)
                  : 1;
              const impulse = influence * (0.1 + edgeSafety * 0.12);

              particle.vx += awayX * impulse * outwardX;
              particle.vy += awayY * impulse * outwardY;
              particle.angle = steerAngle(particle.angle, Math.atan2(distanceY, distanceX), 0.12 + influence * 0.16);

              const interactionSpeed = particle.speed + influence * 0.85;
              const currentSpeed = Math.hypot(particle.vx, particle.vy);
              if (currentSpeed > interactionSpeed) {
                particle.vx = (particle.vx / currentSpeed) * interactionSpeed;
                particle.vy = (particle.vy / currentSpeed) * interactionSpeed;
              }
            }
          }

          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < particle.radius) {
            particle.x = particle.radius;
            particle.vx = Math.max(Math.abs(particle.vx), particle.speed * 0.25);
            particle.angle = steerAngle(particle.angle, 0, 0.6);
          }
          if (particle.x > width - particle.radius) {
            particle.x = width - particle.radius;
            particle.vx = -Math.max(Math.abs(particle.vx), particle.speed * 0.25);
            particle.angle = steerAngle(particle.angle, Math.PI, 0.6);
          }
          if (particle.y < particle.radius) {
            particle.y = particle.radius;
            particle.vy = Math.max(Math.abs(particle.vy), particle.speed * 0.25);
            particle.angle = steerAngle(particle.angle, Math.PI / 2, 0.6);
          }
          if (particle.y > height - particle.radius) {
            particle.y = height - particle.radius;
            particle.vy = -Math.max(Math.abs(particle.vy), particle.speed * 0.25);
            particle.angle = steerAngle(particle.angle, -Math.PI / 2, 0.6);
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
