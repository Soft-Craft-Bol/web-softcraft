import Image from 'next/image';
import { HiEnvelope, HiGlobeAlt } from 'react-icons/hi2';

const teamMembers = [
  {
    id: 'alejandro-morales',
    name: 'Alejandro Morales',
    role: 'Lead Software Architect & Co-Founder',
    specialty: 'Arquitectura distribuida, microservicios escalables y diseño de sistemas de alta disponibilidad.',
    avatar: '/t-avt-1.png',
    tags: ['Sistemas Distribuidos', 'Cloud Architecture', 'TypeScript'],
  },
  {
    id: 'mariana-silva',
    name: 'Mariana Silva',
    role: 'Head of Product & UX Design',
    specialty: 'Investigación de usuarios, diseño de interacción, sistemas de diseño y dirección de arte digital.',
    avatar: '/t-avt-2.png',
    tags: ['Design Systems', 'UX Research', 'Product Discovery'],
  },
  {
    id: 'rodrigo-fernandez',
    name: 'Rodrigo Fernández',
    role: 'Senior AI & ML Engineer',
    specialty: 'Modelos de lenguaje aplicados, automatización cognitiva, visión computacional y pipelines de datos.',
    avatar: '/t-avt-3.png',
    tags: ['Machine Learning', 'LLMs', 'Python / PyTorch'],
  },
  {
    id: 'camila-torrico',
    name: 'Camila Torrico',
    role: 'Senior Full Stack Developer',
    specialty: 'Desarrollo de interfaces reactivas, rendimiento frontend, APIs robustas y aplicaciones móviles.',
    avatar: '/avatar.png',
    tags: ['Next.js / React', 'Node.js', 'React Native'],
  },
  {
    id: 'diego-vargas',
    name: 'Diego Vargas',
    role: 'DevOps & Security Specialist',
    specialty: 'Infraestructura como código, pipelines de CI/CD automatizados, contenedores y seguridad en la nube.',
    avatar: '/t-avt-1.png',
    tags: ['Kubernetes', 'Docker', 'AWS / Cloudflare'],
  },
  {
    id: 'elena-navarro',
    name: 'Elena Navarro',
    role: 'Technical Lead & Client Success',
    specialty: 'Gestión ágil de proyectos, aseguramiento continuo de calidad técnica y acompañamiento post-lanzamiento.',
    avatar: '/t-avt-2.png',
    tags: ['QA Automation', 'Scrum / Agile', 'Observabilidad'],
  },
];

const TeamGrid = () => {
  return (
    <div className="team-grid-shell">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {teamMembers.map((member) => (
          <article
            key={member.id}
            className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[var(--sc-line)] bg-[var(--sc-surface)] hover:border-[var(--sc-accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--sc-selection)] relative overflow-hidden"
          >
            {/* Acento decorativo sutil en hover */}
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-[var(--sc-accent)]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[var(--sc-accent)]/15 transition-all duration-500"
              aria-hidden="true"
            />

            <div className="space-y-4 relative z-10">
              {/* Avatar y encabezado de ficha */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[var(--sc-line)] group-hover:border-[var(--sc-accent)] transition-colors flex-shrink-0 bg-[var(--sc-surface-strong)]">
                  <Image
                    src={member.avatar}
                    alt={`Perfil de ${member.name}`}
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--sc-ink)] group-hover:text-[var(--sc-accent)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[var(--sc-accent)]">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Especialidad */}
              <p className="text-sm leading-relaxed text-[var(--sc-muted)]">
                {member.specialty}
              </p>

              {/* Tags de competencias */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-md font-medium bg-[var(--sc-surface-strong)] text-[var(--sc-faint)] border border-[var(--sc-line)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pie de ficha */}
            <div className="pt-5 mt-5 border-t border-[var(--sc-line)] flex items-center justify-between text-xs text-[var(--sc-faint)] relative z-10">
              <span>SoftCraft Engineering</span>
              <span className="inline-flex items-center gap-1 text-[var(--sc-accent)]">
                <HiGlobeAlt className="w-3.5 h-3.5" aria-hidden="true" /> Bolivia
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
