import type { IconType } from "react-icons";
import {
  HiBolt,
  HiCommandLine,
  HiCpuChip,
  HiDevicePhoneMobile,
  HiGlobeAlt,
  HiRocketLaunch,
  HiServerStack,
  HiSparkles,
  HiWrenchScrewdriver,
} from "react-icons/hi2";

/* Canales de contacto del negocio. */
export const CONTACT = {
  email: "softcraft2024@gmail.com",
  phoneDisplay: "+591 71486093",
  phoneHref: "tel:+59171486093",
  whatsappHref: "https://wa.me/59171486093",
  city: "Cochabamba, Bolivia",
} as const;

export interface NavItem {
  name: string;
  path: string;
}

export const NAV: NavItem[] = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/services" },
  { name: "Proyectos", path: "/work" },
  { name: "Nosotros", path: "/about" },
  { name: "Equipo", path: "/team" },
  { name: "Proceso", path: "/process" },
  { name: "Testimonios", path: "/testimonials" },
  { name: "Contacto", path: "/contact" },
];

export type ServiceAccent = "magenta" | "gold" | "coral";

export interface Service {
  title: string;
  icon: IconType;
  problem: string;
  includes: string;
  benefit: string;
  accent: ServiceAccent;
}

export const SERVICES: Service[] = [
  {
    title: "Desarrollo Web",
    icon: HiGlobeAlt,
    problem: "Necesitas una presencia o un sistema web alineado con tu negocio.",
    includes: "Arquitectura de contenido, interfaz y desarrollo web.",
    benefit: "Una experiencia digital clara para visitantes y equipos.",
    accent: "magenta",
  },
  {
    title: "Apps Móviles",
    icon: HiDevicePhoneMobile,
    problem: "La experiencia de tus usuarios necesita llegar al contexto móvil.",
    includes: "Diseño de flujo, desarrollo móvil y acompañamiento inicial.",
    benefit: "Una solución pensada para el día a día del usuario.",
    accent: "gold",
  },
  {
    title: "Software a Medida",
    icon: HiCommandLine,
    problem: "Las herramientas genéricas no reflejan la forma real de trabajar.",
    includes: "Comprensión del problema, flujos, desarrollo y ajustes según alcance.",
    benefit: "Un producto construido alrededor de tu operación.",
    accent: "coral",
  },
  {
    title: "Inteligencia Artificial",
    icon: HiRocketLaunch,
    problem: "Tienes tareas repetitivas o información difícil de procesar manualmente.",
    includes: "Exploración del caso, integración de IA y revisión de uso responsable.",
    benefit: "Claridad para decidir dónde la IA sí aporta valor.",
    accent: "magenta",
  },
  {
    title: "Automatización",
    icon: HiBolt,
    problem: "Un proceso manual tiene demasiados pasos y poca visibilidad.",
    includes: "Mapeo del flujo, automatización de tareas y validación del recorrido.",
    benefit: "Un proceso más ordenado y fácil de seguir.",
    accent: "gold",
  },
  {
    title: "DevOps e Infraestructura",
    icon: HiServerStack,
    problem: "Tus entornos y despliegues necesitan orden y continuidad.",
    includes: "Configuración, despliegue y acompañamiento técnico según alcance.",
    benefit: "Una base preparada para operar y evolucionar.",
    accent: "coral",
  },
  {
    title: "Soporte Técnico",
    icon: HiWrenchScrewdriver,
    problem: "Un sistema necesita mantenimiento, atención y mejoras después de publicar.",
    includes: "Mantenimiento, asistencia y mejoras continuas.",
    benefit: "Acompañamiento para que la solución siga siendo útil.",
    accent: "magenta",
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  icon: IconType;
  image: string;
  description: string;
  impact: string;
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "finpulse",
    title: "FinPulse — Gestión Financiera & Criptoactivos",
    category: "Fintech & Analítica",
    icon: HiCpuChip,
    image: "/thumb3.jpg",
    description:
      "Sistema de alto rendimiento para monitoreo de activos en tiempo real, trazabilidad de operaciones y visualización analítica de carteras.",
    impact: "Flujos financieros complejos en una consola unificada de baja latencia.",
    stack: ["Next.js", "TypeScript", "WebSockets", "Python"],
  },
  {
    id: "auravr",
    title: "AuraVR — Visualización Inmersiva",
    category: "Gráfica & WebXR",
    icon: HiSparkles,
    image: "/thumb2.jpg",
    description:
      "Entorno interactivo para simulaciones 3D y entrenamientos técnicos con renderizado optimizado en navegadores modernos.",
    impact: "Menos tiempo de aprendizaje técnico con interacción tridimensional.",
    stack: ["Three.js", "React", "WebGL", "Node.js"],
  },
  {
    id: "nexus",
    title: "Nexus Core — CRM Inteligente",
    category: "Software a Medida",
    icon: HiCommandLine,
    image: "/thumb1.jpg",
    description:
      "Plataforma de gestión con pipelines inteligentes, automatización de tareas repetitivas y tableros conectados a la operación.",
    impact: "Visibilidad total del ciclo de clientes y reportes automatizados.",
    stack: ["React", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    id: "studiocraft",
    title: "StudioCraft — Espacio Creativo",
    category: "Plataforma Web & UX",
    icon: HiGlobeAlt,
    image: "/thumb4.jpg",
    description:
      "Ecosistema web para estudios creativos con catálogo de alta fidelidad y flujos de captación y cierre comercial.",
    impact: "Más contactos calificados con una arquitectura visual inmersiva.",
    stack: ["Next.js", "Framer Motion", "Cloudflare"],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  tags: string[];
}

export const TEAM: TeamMember[] = [
  {
    name: "Arq. de Software",
    role: "Liderazgo técnico",
    specialty: "Arquitectura distribuida y diseño de sistemas de alta disponibilidad.",
    tags: ["Sistemas Distribuidos", "Cloud", "TypeScript"],
  },
  {
    name: "Diseño de Producto",
    role: "UX y dirección de arte",
    specialty: "Investigación de usuarios, sistemas de diseño e interacción.",
    tags: ["Design Systems", "UX Research", "Discovery"],
  },
  {
    name: "Ingeniería IA",
    role: "ML aplicado",
    specialty: "Modelos de lenguaje, automatización cognitiva y datos.",
    tags: ["Machine Learning", "LLMs", "Python"],
  },
  {
    name: "Desarrollo Full Stack",
    role: "Web y móvil",
    specialty: "Interfaces reactivas, APIs robustas y aplicaciones móviles.",
    tags: ["Next.js", "Node.js", "React Native"],
  },
  {
    name: "DevOps & Seguridad",
    role: "Infraestructura",
    specialty: "IaC, CI/CD, contenedores y seguridad en la nube.",
    tags: ["Kubernetes", "Docker", "AWS"],
  },
  {
    name: "Calidad & Cliente",
    role: "QA y éxito del cliente",
    specialty: "Aseguramiento continuo y acompañamiento post-lanzamiento.",
    tags: ["QA Automation", "Agile", "Observabilidad"],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  expect: string;
}

export const PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Conversación inicial",
    description: "Mapeamos objetivos, contexto y preguntas abiertas para entender qué vale la pena resolver.",
    expect: "Un punto de partida compartido.",
  },
  {
    number: "02",
    title: "Análisis y asesoría",
    description: "Leemos el problema desde lo técnico y proponemos alternativas de trabajo posibles.",
    expect: "Criterio para elegir el siguiente paso.",
  },
  {
    number: "03",
    title: "Planificación estratégica",
    description: "Conversamos alcance, prioridades y una ruta que mantenga visibles las decisiones.",
    expect: "Un mapa de trabajo entendible.",
  },
  {
    number: "04",
    title: "Desarrollo",
    description: "Construimos avances revisables y dejamos espacio real para el feedback del proyecto.",
    expect: "Progreso visible y conversable.",
  },
  {
    number: "05",
    title: "Implementación",
    description: "Preparamos la puesta en marcha y verificamos el recorrido según el alcance acordado.",
    expect: "Una transición acompañada.",
  },
  {
    number: "06",
    title: "Soporte y mejora continua",
    description: "Mantenemos, corregimos y mejoramos la solución cuando el uso real abre nuevas preguntas.",
    expect: "Continuidad después de publicar.",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Mendoza",
    role: "Director de Operaciones",
    company: "LogisticsHub Latam",
    quote:
      "SoftCraft entendió la complejidad de nuestra operación desde la primera reunión. El software a medida redujo nuestros tiempos de despacho y nos dio trazabilidad en tiempo real.",
  },
  {
    name: "Valeria Rocha",
    role: "Co-Founder & CEO",
    company: "FinNova Technologies",
    quote:
      "Buscábamos un equipo que pensara el producto con nosotros. Su IA práctica combinada con una UX impecable transformó la retención de nuestros clientes.",
  },
  {
    name: "Marcelo Quiroga",
    role: "Gerente de Tecnología",
    company: "InnovaCorp",
    quote:
      "El rigor técnico y la transparencia en cada etapa nos dieron tranquilidad. La migración a la nube fue fluida, sin interrupciones y con soporte continuo.",
  },
  {
    name: "Sofía Benítez",
    role: "Directora de Producto",
    company: "MedConnect Global",
    quote:
      "Transformaron procesos manuales engorrosos en una aplicación intuitiva y robusta que nuestro personal adoptó en cuestión de días.",
  },
];

export const CAPABILITIES = [
  {
    title: "Web y móvil",
    description: "Interfaces veloces y accesibles para la interacción real de tus usuarios.",
  },
  {
    title: "Arquitectura a medida",
    description: "Backends robustos y datos modelados para la operación diaria.",
  },
  {
    title: "IA y automatización",
    description: "Lenguaje, visión y flujos automatizados con uso responsable.",
  },
  {
    title: "Infraestructura y soporte",
    description: "Nube, monitoreo y acompañamiento después del lanzamiento.",
  },
];

export const VALUES = [
  {
    index: "01",
    title: "Entender antes de programar",
    description: "La claridad del desafío orienta la arquitectura. Nada de complejidad sin justificación real.",
  },
  {
    index: "02",
    title: "Transparencia continua",
    description: "Cada entrega y ajuste de alcance se conversa con avances funcionales.",
  },
  {
    index: "03",
    title: "Acompañamiento real",
    description: "La salida a producción es el inicio: soporte continuo para mantener el sistema vivo.",
  },
];

export const TECH_MARQUEE = [
  "Next.js",
  "TypeScript",
  "React Native",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Three.js",
  "WebGL",
  "AWS",
  "Tailwind CSS",
  "Node.js",
];
