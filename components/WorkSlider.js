import Image from 'next/image';
import Link from 'next/link';
import { HiArrowUpRight, HiCommandLine, HiCpuChip, HiGlobeAlt, HiSparkles } from 'react-icons/hi2';

const workProjects = [
  {
    id: 'finpulse',
    title: 'FinPulse — Plataforma de Gestión Financiera & Criptoactivos',
    category: 'Fintech & Analítica',
    icon: HiCpuChip,
    image: '/thumb3.jpg',
    description:
      'Sistema de alto rendimiento para monitoreo de activos en tiempo real, trazabilidad de operaciones, liquidaciones automáticas y visualización analítica de carteras.',
    impact: 'Consolidación de flujos financieros complejos en una consola unificada y de baja latencia.',
    techStack: ['Next.js', 'TypeScript', 'WebSockets', 'Python', 'Tailwind CSS'],
    liveUrl: '/contact',
  },
  {
    id: 'auravr',
    title: 'AuraVR — Entorno Inmersivo de Visualización y Capacitación',
    category: 'Computación Gráfica & WebXR',
    icon: HiSparkles,
    image: '/thumb2.jpg',
    description:
      'Entorno interactivo para simulaciones 3D, entrenamientos técnicos de precisión y experiencias inmersivas con renderizado optimizado en navegadores modernos.',
    impact: 'Reducción de tiempos de aprendizaje técnico mediante interacción tridimensional interactiva.',
    techStack: ['Three.js', 'React', 'WebGL', 'Node.js', 'Tailwind CSS'],
    liveUrl: '/contact',
  },
  {
    id: 'nexus-crm',
    title: 'Nexus Core — Arquitectura Operativa y CRM Inteligente',
    category: 'Software a Medida & Automatización',
    icon: HiCommandLine,
    image: '/thumb1.jpg',
    description:
      'Plataforma integral de gestión empresarial con pipelines inteligentes, automatización de tareas repetitivas y dashboards directivos conectados a bases de datos operativas.',
    impact: 'Visibilidad completa del ciclo de clientes y automatización de reportes semanales.',
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    liveUrl: '/contact',
  },
  {
    id: 'studiocraft',
    title: 'StudioCraft — Espacio Creativo & Entrega Digital',
    category: 'Plataforma Web & Experiencia de Usuario',
    icon: HiGlobeAlt,
    image: '/thumb4.jpg',
    description:
      'Ecosistema web para estudios creativos con catálogo de proyectos de alta fidelidad, gestión de activos y flujos dinámicos de captación y cierre comercial.',
    impact: 'Incremento en conversión de contactos calificados gracias a una arquitectura visual inmersiva.',
    techStack: ['Next.js', 'Framer Motion', 'Cloudflare', 'Tailwind CSS'],
    liveUrl: '/contact',
  },
];

const WorkSlider = () => {
  return (
    <div className="work-slider-shell">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {workProjects.map((project) => {
          const IconComponent = project.icon;
          return (
            <article
              key={project.id}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-[var(--sc-line)] bg-[var(--sc-surface)] hover:border-[var(--sc-accent)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--sc-selection)]"
            >
              {/* Imagen del proyecto */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--sc-bg-soft)]">
                <Image
                  src={project.image}
                  alt={`Proyecto ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={project.id === 'finpulse'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--sc-surface)] via-transparent to-transparent opacity-80" />

                {/* Badge de categoría */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--sc-bg)]/90 backdrop-blur-md border border-[var(--sc-line)] text-[var(--sc-accent)]">
                  <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Contenido descriptivo */}
              <div className="flex-1 flex flex-col p-6 sm:p-8 justify-between gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--sc-ink)] group-hover:text-[var(--sc-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[var(--sc-muted)]">
                    {project.description}
                  </p>
                  <div className="pt-2 border-t border-[var(--sc-line)]">
                    <p className="text-xs sm:text-sm text-[var(--sc-faint)]">
                      <strong className="text-[var(--sc-ink)] font-semibold">Valor clave: </strong>
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Stack de tecnologías y llamada a acción */}
                <div className="pt-4 border-t border-[var(--sc-line)] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md font-medium bg-[var(--sc-surface-strong)] text-[var(--sc-ink)] border border-[var(--sc-line)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--sc-accent)] hover:text-[var(--sc-accent-hot)] transition-colors"
                  >
                    <span>Conversar solución</span>
                    <HiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default WorkSlider;
