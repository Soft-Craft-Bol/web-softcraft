# Tareas acabado-profesional — Acabado profesional y presencia corporativa definitiva

> Fuente: `changes/acabado-profesional/specs/001-sitio-corporativo/spec.md` (RF) + `changes/acabado-profesional/plan.md` (módulos/decisiones). Orden = dependencias.

- [x] T1 Actualizar dependencias y migrar arquitectura base a App Router de Next.js (RF: ADDED RF-15)
  Hecho cuando: `npm run build` compila con éxito la base en App Router y la aplicación monta el layout raíz y providers de tema sin errores.
- [x] T2 Implementar sistema de transiciones con cortina en colores de marca y sincronización de pantalla completa (RF: ADDED RF-14) [bloqueada por: T1]
  Hecho cuando: al navegar entre rutas la cortina con colores corporativos cubre el 100% de la pantalla antes de actualizar contenido y scroll, sin saltos previos visibles, y `npm run build` en verde.
- [x] T3 Ajustar proporciones armónicas de pantalla completa y diseño inmersivo en todas las secciones (RF: ADDED RF-15) [bloqueada por: T1]
  Hecho cuando: en resoluciones 320, 360, 390, 768 y 1280 px cada sección ocupa la pantalla completa de forma equilibrada sin desbordes horizontales ni recortes, y `npm run lint` en verde.
- [x] T4 Actualizar sección de Proyectos eliminando etiquetas de prototipo y presentando casos de portafolio consolidado (RF: MODIFIED RF-4) [bloqueada por: T1]
  Hecho cuando: `/proyectos` muestra las soluciones con título, descripción y tecnologías sin etiquetas de "Demo / ejemplo" ni leyendas de prototipo, y `npm run build` en verde.
- [x] T5 Estructurar secciones de Testimonios y Nuestro equipo con fichas completas y sin avisos defensivos (RF: MODIFIED RF-11, MODIFIED RF-12) [bloqueada por: T1]
  Hecho cuando: `/testimonios` y `/nuestro-equipo` muestran reseñas y perfiles con fotos/avatares, nombres y roles representativos sin textos de "sin uso comercial" ni notas provisionales, y `npm run build` en verde.
- [x] T6 Adecuar formulario de Contacto retirando textos de maqueta y preservando validaciones limpias (RF: MODIFIED RF-6, MODIFIED RF-8) [bloqueada por: T1]
  Hecho cuando: `/contacto` muestra el formulario sin leyendas de "formulario visual", valida campos obligatorios e email en español y mantiene el envío sin simular éxito ficticio, con `npm run lint` en verde.
- [x] T7 Ejecutar verificación integral de calidad visual, navegación responsiva y build final de producción (RF: MODIFIED RF-4, MODIFIED RF-6, MODIFIED RF-8, MODIFIED RF-11, MODIFIED RF-12, ADDED RF-14, ADDED RF-15) [bloqueada por: T2, T3, T4, T5, T6]
  Hecho cuando: `npm run lint` y `npm run build` finalizan en verde y la inspección manual confirma la ausencia total de textos de prototipo y transiciones sincronizadas en temas claro y oscuro.
