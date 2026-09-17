# Delta Spec 001 — Sitio corporativo SoftCraft (Change: acabado-profesional)

## Contexto y objetivo
Este cambio transforma el sitio de una presentación que aún exhibe disclaimers y advertencias de prototipo ("formulario visual", "sin uso comercial", tags de "Demo / ejemplo") en una presencia corporativa consolidada, creíble y con alto nivel de artesanía visual (craftsmanship). Se depuran todas las leyendas defensivas en proyectos, equipo, testimonios y contacto; se corrigen los defectos de las transiciones de página (sincronización del cambio de vista/scroll bajo la cortina y fidelidad cromática con la paleta de marca); se establecen proporciones estéticas de pantalla completa sin desbordes; y se moderniza la arquitectura técnica a Next.js App Router.

## Historias de usuario afectadas
- MODIFIED H2 (era H2 en verdad): Como visitante quiero ver el portafolio de proyectos y el proceso de trabajo como soluciones consolidadas de SoftCraft para confiar en su capacidad antes de contactar.
- MODIFIED H3 (era H3 en verdad): Como visitante quiero solicitar contacto mediante un formulario profesional y limpio o por WhatsApp para iniciar una conversación sobre mi proyecto sin encontrar advertencias de prototipo.
- MODIFIED H4 (era H4 en verdad): Como visitante quiero conocer al equipo de SoftCraft con fichas y roles representativos estructurados estéticamente para entender quién respalda el servicio.
- ADDED H7: Como visitante quiero experimentar transiciones de página fluidas y armónicas acordes a la identidad de marca, sin parpadeos ni reseteos bruscos de pantalla antes de que ocurra la animación.
- ADDED H8: Como visitante quiero que cada sección mantenga una composición visual armónica que ocupe y respete la pantalla de forma balanceada tanto en escritorio como en dispositivos móviles.

## Requisitos funcionales (EARS)

- MODIFIED RF-4 (era RF-4 en verdad): CUANDO el visitante abre Proyectos, EL SISTEMA muestra las piezas como proyectos reales de portafolio con su título, descripción de solución, tecnologías y enlace o vista detallada, retirando explícitamente etiquetas de "Demo", "Ejemplo" o advertencias que afirmen que no representan resultados publicados. POR QUÉ: presentar el trabajo con seriedad y credibilidad comercial.
- MODIFIED RF-6 (era RF-6 en verdad): CUANDO el visitante abre Contacto, EL SISTEMA muestra el formulario de contacto con sus campos rotulados de forma profesional junto a correo, teléfono, dirección y WhatsApp +591 71486093, sin incluir textos, badges o advertencias que declaren que es un "formulario visual" o una maqueta. POR QUÉ: proyectar una interfaz terminada y lista para producción.
- MODIFIED RF-8 (era RF-8 en verdad): CUANDO el visitante pulsa enviar en el formulario de contacto con datos válidos, EL SISTEMA mantiene el botón sin simular éxito ni errores ficticios de backend mientras el servicio de entrega no esté conectado, manteniendo la interfaz limpia y libre de leyendas de prototipo. POR QUÉ: evitar engañar al usuario con confirmaciones falsas respetando el diseño definitivo.
- MODIFIED RF-11 (era RF-11 en verdad): CUANDO el visitante abre Testimonios, EL SISTEMA muestra testimonios presentados con nombre, cargo, empresa y reseña estilizada en formato de carrusel/tarjetas, sin mostrar avisos de "sin uso comercial" ni leyendas de revisión pendiente. POR QUÉ: exhibir la sección en formato completo y profesional.
- MODIFIED RF-12 (era RF-12 en verdad): CUANDO el visitante abre Nuestro equipo, EL SISTEMA muestra fichas de integrantes con fotografía/avatar estilizado, nombre completo, rol profesional y síntesis de especialidad, sin avisos defensivos ni notas de contenido provisional. POR QUÉ: ofrecer una presentación corporativa fidedigna y armónica.
- ADDED RF-14: CUANDO el visitante navega entre páginas, EL SISTEMA ejecuta una animación de cortina utilizando los colores corporativos de la marca (`9A0389`, `FC6819`, `FCBF02`, `FC354C`) y sincroniza el cambio de ruta y la posición de scroll de modo que la vista anterior se oculte por completo antes de revelar la nueva página, impidiendo cualquier salto o reseteo visible previo de scroll. POR QUÉ: eliminar defectos visuales de navegación y garantizar una experiencia fluida de alta calidad.
- ADDED RF-15: MIENTRAS el visitante visualiza cualquier sección del sitio, EL SISTEMA presenta los elementos en proporciones de pantalla completa estructuradas armónicamente, garantizando que el contenido principal encaje dentro del área visible sin desbordes no intencionados ni cortes abruptos, tanto en pantallas de escritorio como en dispositivos móviles. POR QUÉ: brindar una experiencia inmersiva con atención al detalle y artesanía visual.

## Requisitos no funcionales
- MODIFIED RNF-Arquitectura: Migración arquitectónica hacia Next.js con App Router y dependencias actualizadas en versiones estables.
- MODIFIED RNF-Transiciones: Las cortinas y animaciones de transición de navegación respetan estrictamente la paleta de la marca (`9A0389`, `000000`, `FC6819`, `FCBF02`, `FC354C`) en ambos temas (claro/oscuro) y respetan `prefers-reduced-motion`.
- MODIFIED RNF-Composición: Diagramación basada en proporciones áureas/armónicas y aprovechamiento balanceado del viewport en resoluciones de 320, 360, 390, 768 y 1280 px.

## Casos límite
- Navegación rápida entre enlaces mientras la cortina está activa: el sistema completa la transición a la última ruta solicitada sin solapar cortinas ni desfasar la posición de scroll.
- Pantallas con alturas reducidas (e.g. móvil apaisado): la sección ajusta sus proporciones manteniendo el contenido legible mediante scroll vertical fluido sin superposición de elementos fijos.
- Formulario de contacto con campos incompletos: validación en línea de campos requeridos y formato de email sin simulación de envío ni leyendas de prototipo.

## Fuera de alcance
- Conexión e integración con backend real (envío SMTP, webhook o base de datos) para entrega del formulario.
- Autenticación de usuarios, perfiles, panel administrativo, ventas o pasarelas de pago.
- Modificación del imagotipo/logotipo institucional de SoftCraft.

## Criterios de finalización
- `npm run lint` y `npm run build` ejecutados exitosamente en la nueva base App Router.
- Verificación visual de eliminación de disclaimers en Proyectos (sin tags demo), Testimonios (sin aviso comercial), Equipo (fichas completas sin notas provisionales) y Contacto (sin texto de formulario visual).
- Verificación de transición de páginas: cortina con colores de marca cubriendo la pantalla antes del swap de contenido y scroll, sin saltos visibles en 360 px y 1280 px.
- Verificación de proporciones de viewport y adaptabilidad responsive en 320, 360, 390, 768 y 1280 px en temas claro y oscuro.
