# Change acabado-profesional — Acabado profesional y presencia corporativa definitiva

## Por qué
El sitio actual transmite sensación de maqueta o prototipo debido a etiquetas y avisos defensivos explícitos ("formulario visual", "sin uso comercial", advertencias de demos), ausencia de fichas creíbles para equipo y testimonios, y transiciones entre páginas defectuosas que resetean la pantalla al inicio antes de cubrirla o usan colores desconectados de la paleta institucional.

Además, la disposición visual actual no aprovecha proporciones armónicas de pantalla completa ni logra transmitir el nivel de detalle y artesanía visual esperado de una compañía de desarrollo de software e inteligencia artificial de alto nivel, requiriendo modernizar su base estructural y visual a estándares de producción.

## Qué cambia
- Eliminación de disclaimers y advertencias de prototipo: se retiran todas las leyendas que indiquen "formulario visual", avisos de "sin uso comercial" en testimonios y tags de "Demo / ejemplo" en proyectos.
- Proyectos presentados como portafolio corporativo real y consolidado.
- Testimonios y equipo presentados con estructura completa, estilizada y creíble (fotos, nombres y roles representativos con alta estética).
- Formulario de contacto con interfaz limpia y lista para conectar, manteniendo comportamiento sobrio sin alertas de maqueta.
- Transición entre páginas pulida y armónica: el telón de animación utiliza la paleta de marca y cubre la pantalla de forma continua antes del reemplazo del contenido y del scroll, eliminando saltos o parpadeos prematuros.
- Composición estética y proporciones inmersivas: cada sección adopta un diseño balanceado que aprovecha el espacio de pantalla, con jerarquía visual y adaptabilidad impecable tanto en dispositivos móviles como en escritorio.
- Modernización de la arquitectura hacia App Router y dependencias actualizadas.

## Alcance
- Specs afectadas: `specs/001-sitio-corporativo/` (modifica la presentación de proyectos, equipo, testimonios, formulario de contacto, transiciones y arquitectura general).
- Código probable: arquitectura y configuración del framework, transiciones y animaciones de ruta, componentes de presentación (inicio, servicios, proceso, proyectos, testimonios, equipo, contacto) y estilos globales de diseño y proporciones.

## Fuera de alcance
- Conexión real con backend o servicios externos para recepción y entrega de mensajes del formulario (permanece preparado a nivel de interfaz sin acción de envío observable).
- Creación de autenticación, portal de usuarios, inventario, comercio electrónico o pasarelas de pago.
- Modificación del logotipo institucional de SoftCraft.

## Enfoque propuesto
- Depurar la narrativa visual retirando todo rastro de texto de prototipo y configurando contenidos de muestra con alta calidad estética y credibilidad comercial.
- Sincronizar el ciclo de vida de la transición de páginas para que la cortina visual oculte el cambio de ruta y de scroll de manera fluida y con la gama cromática oficial de SoftCraft.
- Reestructurar el layout de cada vista para que adopte proporciones armónicas que ocupen la pantalla coherentemente y ofrezcan una experiencia inmersiva y pulida en cualquier dispositivo.
- Migrar de forma limpia la base técnica hacia Next.js con App Router asegurando paridad funcional y consistencia de estilos.

## Dudas abiertas
- Sin dudas: listo para updatespec.
