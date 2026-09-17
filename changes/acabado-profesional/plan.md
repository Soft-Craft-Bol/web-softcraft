# Plan acabado-profesional — Acabado profesional y presencia corporativa definitiva

## Módulos afectados
- `app/` (Arquitectura base y enrutamiento): Migración a App Router de Next.js, configuración de layout raíz, providers de tema (claro/oscuro) y viewport responsive → ADDED RF-14, ADDED RF-15.
- `components/transition` (Sistema de cortinas y navegación): Orquestación de transición de ruta con paleta de marca (`9A0389`, `FC6819`, `FCBF02`, `FC354C`), garantizando cobertura de pantalla al 100% previa al desmontaje de contenido y reseteo de scroll → ADDED RF-14.
- `components/layout` (Diseño inmersivo y proporciones de viewport): Diagramación de secciones con proporciones estéticas armónicas ocupando la pantalla completa sin desbordes en móvil y escritorio → ADDED RF-15.
- `components/work` (Portafolio de proyectos): Eliminación de badges de "Demo / ejemplo" y avisos de prototipo; estructuración de casos reales con tecnologías y enlaces → MODIFIED RF-4.
- `components/contact` (Formulario de contacto): Eliminación de disclaimers de "formulario visual"; preservación de validación estricta de inputs sin simular estados falsos de envío → MODIFIED RF-6, MODIFIED RF-8.
- `components/testimonials` (Testimonios): Retiro de avisos defensivos ("sin uso comercial"); estructuración estética de citas, clientes y credibilidad → MODIFIED RF-11.
- `components/team` (Fichas de equipo): Retiro de advertencias de contenido provisional; presentación de fichas con foto/avatar, nombre y rol profesional → MODIFIED RF-12.

## Modelo de datos
- Entidades del frontend (estructuras de datos para presentación corporativa):
  - `ProjectItem`: `{ id: string, title: string, category: string, description: string, techStack: string[], image: string, link: string }` → MODIFIED RF-4.
  - `ContactPayload`: `{ name: string, email: string, subject: string, message: string }` con validación de obligatoriedad y formato de correo → MODIFIED RF-6, MODIFIED RF-8.
  - `TestimonialItem`: `{ id: string, clientName: string, role: string, company: string, quote: string, avatar: string }` → MODIFIED RF-11.
  - `TeamMember`: `{ id: string, name: string, role: string, bio: string, avatar: string, specialties: string[] }` → MODIFIED RF-12.
- Migraciones: ninguna (sitio web estático/cliente sin base de datos ni backend acoplado).
- Invariantes de dominio:
  - Contacto: prohibido emitir alertas de "formulario visual" y prohibido falsear éxito de entrega de backend (MODIFIED RF-6, MODIFIED RF-8).
  - Portafolio, Testimonios y Equipo: cero disclaimers o marcas de prototipo expuestas al usuario visitante (MODIFIED RF-4, MODIFIED RF-11, MODIFIED RF-12).

## Decisiones
- D1 Arquitectura con Next.js App Router: Elijo migrar la base a App Router con dependencias estables actualizadas PORQUE moderniza el proyecto, resuelve dependencias obsoletas y optimiza el control de layouts anidados y transiciones. Descarto mantener Pages Router desactualizado PORQUE perpetuaba problemas de empaquetado y limitaciones en layouts globales acordados para modernización.
- D2 Orquestación de transición con cobertura completa previa al cambio de pantalla: Elijo una cortina animada con framer-motion que cubre completamente la pantalla con los tonos corporativos de SoftCraft (`9A0389`, `FC6819`, `FCBF02`, `FC354C`) antes de cambiar el contenido de la ruta y sincronizar la posición de scroll PORQUE elimina el salto o parpadeo previo que reiniciaba la pantalla a la vista inicial antes de animar. Descarto animaciones simultáneas transparentes PORQUE dejaban al descubierto el salto abrupto del DOM durante la navegación.
- D3 Proporciones de pantalla completa (viewport-filling) adaptativas: Elijo diagramar cada sección con alturas relativas dinámicas (`min-h-[100dvh]` y contenedores flex/grid centrados) PORQUE asegura que los elementos ocupen armónicamente la pantalla en desktop y móvil sin salirse del campo de visión ni generar desbordes horizontales. Descarto alturas fijas rígidas en píxeles PORQUE provocarían cortes en dispositivos móviles o pantallas panorámicas de baja altura.
- D4 Presentación de piezas de portafolio como soluciones comerciales consolidadas: Elijo presentar los proyectos con fichas y descripciones profesionales sin etiquetas de "Demo / ejemplo" ni advertencias PORQUE otorga credibilidad de producción y artesanía al portafolio de SoftCraft. Descarto conservar avisos de muestra preliminar PORQUE degradaban el sitio a la categoría de maqueta escolar o prototipo.
- D5 Formulario de contacto con interfaz de producción sin simulación engañosa de entrega: Elijo presentar el formulario con validación cliente limpia y diseño final listo para conectar, pero manteniendo el botón sin simular éxito de envío hasta contar con backend PORQUE cumple la constitución de no falsear entregas inexistentes y atiende la orden del dueño de suprimir la etiqueta "formulario visual". Descarto simular confirmaciones falsas de entrega PORQUE violaría la regla constitucional 6.

## Estrategia de tests
- Comandos obligatorios:
  - `npm run lint`: verificación de sintaxis y reglas de Next.js.
  - `npm run build`: compilación de producción para validar la migración completa a App Router sin errores de exportación ni empaquetado.
- Demos manuales requeridas por grupo de RF:
  - MODIFIED RF-4: Navegar a `/proyectos` en 360 px y 1280 px. Verificar que cada proyecto exhibe título, descripción, tecnologías y enlace sin etiquetas de "Demo / ejemplo" ni leyendas de prototipo.
  - MODIFIED RF-6 y MODIFIED RF-8: Navegar a `/contacto` en 360 px y 1280 px. Verificar interfaz sin textos de "formulario visual"; validar mensajes de error al enviar campos vacíos o email inválido; enviar datos válidos y comprobar que no se disparan confirmaciones ficticias ni leyendas de maqueta.
  - MODIFIED RF-11: Navegar a `/testimonios` en 360 px y 1280 px. Verificar tarjetas de testimonios con formato y diseño corporativo, sin avisos de "sin uso comercial".
  - MODIFIED RF-12: Navegar a `/nuestro-equipo` en 360 px y 1280 px. Verificar fichas estructuradas de integrantes con avatar, nombre, rol y especialidad sin avisos de contenido provisional.
  - ADDED RF-14: Navegar consecutivamente entre páginas en tema claro y tema oscuro. Comprobar que la cortina con colores de marca cubre la pantalla por completo antes de revelar la siguiente ruta y reposicionar el scroll, sin saltos visibles previos.
  - ADDED RF-15: Inspeccionar todas las secciones en resoluciones 320, 360, 390, 768 y 1280 px. Comprobar que cada sección ocupa armónicamente la pantalla sin recortes, elementos fuera de vista ni desbordes horizontales.

## Trazabilidad RF
| RF | Parte del plan que lo cubre | Cómo se verifica |
|----|-----------------------------|------------------|
| MODIFIED RF-4 | Módulo `components/work`, D4 | Demo manual en `/proyectos` (sin etiquetas demo ni disclaimers en 360px y 1280px) + `npm run build` |
| MODIFIED RF-6 | Módulo `components/contact`, D5 | Demo manual en `/contacto` (sin texto de formulario visual) + `npm run build` |
| MODIFIED RF-8 | Módulo `components/contact`, D5 | Demo manual en `/contacto` (validación de campos y ausencia de éxito ficticio de backend) + `npm run build` |
| MODIFIED RF-11 | Módulo `components/testimonials`, D4 | Demo manual en `/testimonios` (sin avisos de 'sin uso comercial') + `npm run build` |
| MODIFIED RF-12 | Módulo `components/team`, D4 | Demo manual en `/nuestro-equipo` (fichas completas sin notas provisionales) + `npm run build` |
| ADDED RF-14 | Módulo `components/transition`, D2 | Demo manual de navegación entre rutas en temas claro y oscuro (cortina cubre pantalla completa sin saltos previos de scroll) + `npm run build` |
| ADDED RF-15 | Módulo `components/layout` y `app/`, D3 | Demo manual en matriz 320/360/390/768/1280 px comprobando proporciones armónicas de pantalla completa sin desbordes + `npm run build` |

## Riesgos y fuera de alcance
- Riesgo de compatibilidad de librerías al migrar a App Router (`framer-motion`, `swiper`, `particles`): Mitigación marcando componentes interactivos con directiva `'use client'` y adaptando envolturas necesarias para evitar advertencias de hidratación en Next.js.
- Límite de backend de contacto: El formulario queda con diseño y validaciones de producción listo para conectar, pero sin endpoint de envío ni receptor de correo (fuera de alcance).
- Límite de autenticación y transacciones: No se añaden roles, sesiones de usuario ni pasarelas de pago (fuera de alcance según constitución).
