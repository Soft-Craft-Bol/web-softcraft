---
name: SoftCraft Bolivia
description: Color en movimiento, software a medida y una personalidad audaz en dos temas.
colors:
  magenta-block: "#850477"
  magenta-logo: "#9a0389"
  coral-block: "#fc7790"
  yellow-block: "#fcbf02"
  yellow-hover: "#ffd65c"
  orange-logo: "#fc6819"
  red-logo: "#fc354c"
  dark-bg: "#180d19"
  dark-bg-soft: "#251225"
  dark-surface: "#321b30"
  dark-surface-strong: "#41233b"
  dark-ink: "#fff6ec"
  dark-muted: "#dcc8d5"
  dark-faint: "#baa4b7"
  dark-accent: "#ff9761"
  dark-pink: "#ff839b"
  light-bg: "#fff5ea"
  light-bg-soft: "#f8e6dc"
  light-surface: "#fffaf5"
  light-surface-strong: "#f3ddd9"
  light-ink: "#291127"
  light-muted: "#654354"
  light-faint: "#725365"
  light-accent: "#a6310c"
  light-accent-hot: "#855600"
  light-pink: "#aa1948"
typography:
  display:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(3rem, 7.3vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 4.8rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Sora, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.8
  button:
    fontFamily: "Sora, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
  nav:
    fontFamily: "Sora, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    letterSpacing: "0.02em"
rounded:
  button: "8px"
  field: "0.7rem"
  toggle: "999px"
spacing:
  button: "0.8rem 1.35rem"
  field: "0.8rem 0.9rem"
  block: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.yellow-block}"
    textColor: "{colors.light-ink}"
    rounded: "{rounded.button}"
    padding: "{spacing.button}"
    typography: "{typography.button}"
  button-primary-hover:
    backgroundColor: "{colors.yellow-hover}"
    textColor: "{colors.light-ink}"
  button-secondary:
    backgroundColor: "var(--sc-bg)"
    textColor: "var(--sc-ink)"
    rounded: "{rounded.button}"
    padding: "{spacing.button}"
  input-field:
    backgroundColor: "transparent"
    textColor: "var(--sc-ink)"
    rounded: "{rounded.field}"
    padding: "{spacing.field}"
  signal-card:
    backgroundColor: "{colors.yellow-block}"
    textColor: "{colors.light-ink}"
    padding: "{spacing.block}"
  nav-item-active:
    textColor: "var(--sc-ink)"
  category-stamp:
    backgroundColor: "{colors.yellow-block}"
    textColor: "{colors.light-ink}"
    padding: "0.45rem 0.65rem"
---

# Design System: SoftCraft Bolivia

## Overview

**Creative North Star: "El Taller de Color en Movimiento"**

SoftCraft se expresa como un taller de color en movimiento: tipografía ancha, manchas originales y superficies de magenta, coral y amarillo sobre ciruela o crema. La personalidad es audaz, activa y cercana; el color construye composición, ritmo y jerarquía, además de señalar acciones.

La identidad compartida permite páginas con estructuras diferentes. El logo permanece intacto y ambos temas conservan la energía de marca. El mundo monocromo naranja/azul oscuro y el panel orbital artificial del Home son referencias rechazadas por el usuario.

Documento extraído del código activo el 17 de septiembre de 2026. Autoridad de estilos: `pages/_app.js` importa primero `styles/globals.css` y después `styles/personality.css`; las sobreescrituras de este último y los selectores contextuales determinan el resultado. Se consultaron PRODUCT.md, la constitución y la spec 001. Este documento sustituye las reglas visuales anteriores; no modifica producto ni constituye una certificación de accesibilidad.

**Key Characteristics:**

- Color en superficies amplias, sin cuota de señal escasa.
- Titulares compactos y grandes; cuerpo de lectura más pausada.
- Asimetría, bandas y manchas orgánicas con controles claros.
- Partículas interactivas como atmósfera del Home.

## Colors

Paleta cálida multicolor: magenta profundo y luminoso, coral, amarillo solar y neutros teñidos de ciruela.

### Primary

- **Magenta bloque** y **Magenta logo**: manifiesto, bandas, iconos, tarjetas y atmósfera; el magenta tiene presencia estructural.
- **Amarillo bloque**: CTA principal, cabecera de Proyectos, tarjetas y banda de contacto. Su texto usa tinta ciruela; el hover del botón usa amarillo más claro.

### Secondary

- **Coral bloque**: cabecera de Nosotros, bandas de equipo, tarjetas y remate del formulario.
- **Rojo logo**: manchas, partículas y subrayado activo de navegación.

### Tertiary

- **Naranja logo**: participa en la mezcla del fondo original, sin monopolizar acciones ni superficies.
- **Acentos de tema**: melocotón y rosa en oscuro; terracota y frambuesa en claro. El amarillo de texto se oscurece en tema claro mediante el acento caliente, sin recolorear los bloques amarillos.

### Neutral

Los prefijos `dark-` y `light-` del frontmatter registran los valores efectivos de `--sc-bg`, `--sc-bg-soft`, `--sc-surface`, `--sc-surface-strong`, `--sc-ink`, `--sc-muted` y `--sc-faint`. Ciruela y crema son los lienzos, no filtros monocromos sobre la marca. Los encabezados de color fijan parejas locales de tinta y fondo incluso cuando cambia el tema. Los bordes semitransparentes permanecen definidos en globals.css.

**The Color Construye Rule.** El color puede ocupar una sección completa; la legibilidad se resuelve en cada pareja de fondo y texto, sin imponer un acento único.

## Typography

**Display Font:** Sora, con sans-serif de respaldo.  
**Body Font:** Sora, con sans-serif de respaldo.

La fuente se carga en Layout con pesos 300–800. Titulares semibold, interletrado compacto y altura de línea cercana a uno dan presencia; los párrafos usan tinta secundaria y una lectura más abierta. No se prescribe cuerpo light ni opacidad al 60%: eso pertenece al documento anterior.

- **Display:** el rol del frontmatter corresponde al Home, con anchura máxima de 15ch y bloque de texto de hasta 900px. Bajo 640px pasa a `clamp(2.6rem, 11.5vw, 4.5rem)`.
- **Headline:** base compartida de títulos; las páginas tienen variaciones reales de tamaño y medida, no una jerarquía idéntica obligatoria.
- **Body:** medida general de hasta 65ch; lead del Home de 48ch, tamaño fluido hasta 1.16rem y 1rem en móvil estrecho.
- **Button / Nav:** pesos y tamaños extraídos de controles; las etiquetas pequeñas no son una licencia para reducir información esencial.

## Layout

Contenedor centrado de hasta 1180px: margen total de 2rem por defecto, 4rem desde 768px y 1.5rem bajo 640px. Secciones con padding vertical fluido `clamp(5rem, 9vw, 8.5rem)`; las introducciones y secciones especiales tienen ajustes propios. Breakpoints configurados: 640, 768, 960 y 1200px.

Header sticky con espacio propio, altura mínima 78px y 72px bajo 960px. Navegación horizontal en escritorio y panel de dos columnas en móvil. El contenido determina el scroll vertical; clipping decorativo no debe ocultar contenido ni focos.

Inventario observado, no plantilla obligatoria para nuevas páginas:

| Superficie | Composición implementada |
| --- | --- |
| Inicio | Hero tipográfico ancho de una columna, manchas y fondo original; tres bloques de servicios con desfase central; resumen de proceso y banda de contacto. |
| Servicios | Introducción magenta y catálogo desplegable; tres columnas de información por servicio en escritorio. |
| Proyectos | Introducción amarilla y galería 1.15fr/0.85fr; piezas pares desplazadas 6rem. Una columna y sin desfase bajo 640px. |
| Nosotros | Introducción coral, manifiesto magenta inclinado y capacidades; valores escalonados. En móvil estrecho se eliminan inclinación y escalonado. |
| Equipo | Introducción centrada y bandas alternadas amarillo/coral/magenta; anchura 88%, 95% bajo 960px y 100% bajo 640px. |
| Proceso | Introducción con orden visual propio; lista numerada, expectativa y explicación en filas. Tres columnas pasan a dos en móvil. |
| Testimonios | Introducción magenta centrada, contenido con aviso y tratamiento de cita; no aval comercial. |
| Contacto | Introducción magenta, datos y formulario; el formulario se apila bajo 960px. |

## Elevation & Depth

Profundidad por color, superposición y escala. El header conserva blur de 18px; el Home combina gradientes radiales, el asset original y partículas. No se ha extraído una escala de sombras para los componentes activos: esto describe el estado actual y no impone una prohibición universal de sombras.

**The Capas con Lectura Rule.** Las manchas y las partículas acompañan al contenido; ninguna capa decorativa debe impedir leer, navegar o pulsar una acción.

El fondo del Home respira en 18s con ease-in-out y alternate; el asset `/bg-explosion.png` usa screen/opacidad 0.3 en oscuro y multiply/opacidad 0.12 en claro. Un velo local sostiene la lectura. Los parámetros de movimiento y breakpoints se guardan en el sidecar, no como primitivas del frontmatter.

## Shapes

Contraste entre bloques rectangulares, controles de esquinas suaves y manchas orgánicas. Botones con radio 8px; campos 0.7rem; toggles redondos e iconos de servicios circulares. El formulario remata en esquinas inferiores de 16px bajo una franja coral de 8px.

La firma amarilla del Home es un enlace orgánico inclinado −5 grados, que se endereza al hover; no es un diagrama orbital ni una insignia que rota continuamente. El manifiesto inclinado es otra expresión localizada, no una regla de inclinar todas las tarjetas.

## Components

### Buttons

Primario amarillo con tinta ciruela, mínimo 52px de alto, padding y tipografía del frontmatter. Hover: amarillo más claro y desplazamiento vertical de −3px, transición 220ms. Secundario con fondo del tema y borde fuerte; en el hero tiene pareja local de ciruela y crema. En la banda amarilla el CTA usa magenta. No reemplazar estas variantes contextuales por un único naranja.

Foco general: contorno de 3px con acento caliente y separación de 4px. Enlaces de texto subrayados con mínimo 44px, cambio de color y separación de icono al hover.

### Cards / Containers

Los bloques de servicios del Home son enlaces completos con padding 2rem, colores alternados y flecha. Mínimo 290px en escritorio, 210px bajo 960px. El bloque magenta tiene un desfase propio que se elimina en móvil. Las bandas del equipo muestran capacidades, no fichas verificadas de personas.

### Inputs / Fields

Campos con etiqueta asociada, borde fuerte del tema, fondo transparente y altura mínima 52px. Textarea de mínimo 160px con redimensión vertical. Foco cambia borde a acento; globals.css conserva un tinte naranja tenue. Error usa el rosa del tema y mensaje asociado. El formulario es visual: no documentar éxito, entrega ni estados de backend.

### Navigation

Texto e iconos visibles, tinta secundaria en reposo; activo con tinta principal y subrayado rojo del logo. Hover e iconos usan el acento del tema. Toggle de tema con mínimo 44px en ambos ejes. Menú móvil bajo 960px con enlaces de mínimo 48px. Las redes pertenecen al pie.

### Catálogo, galería y secuencia

Aunque mantienen nombres de archivo terminados en Slider, ServiceSlider usa `details/summary` nativos (primer servicio abierto; varios pueden estar abiertos), WorkSlider contiene una galería de cuatro proyectos y ProcessSlider una lista ordenada de seis etapas. No describirlos como carruseles ni prometer autoplay.

Servicios alterna iconos magenta/amarillo/coral y gira el signo + al abrir; foco de summary de 3px y separación 5px. Proyectos muestra sello de categoría con fondo amarillo bloque y tinta ciruela clara del frontmatter en ambos temas, imagen con recorte de cubierta y zoom de hover de 1.035; el sello es informativo, no un filtro. Se retiraron del marcado las etiquetas work-category y footer-kicker; sus selectores residuales no definen componentes activos. Proceso mantiene numeración, descripción y expectativa disponibles sin interacción.

### Home y partículas

El Home renderiza fondo, campo de partículas, texto, acciones y firma orgánica; no renderiza panel orbital. El CSS muerto de hero-visual, órbitas y consola fue retirado de globals.css y no forma parte del sistema. ParticlesContainer detecta hover en window y aplica repulsión; el canvas deja pasar los clics. En oscuro usa amarillo, rojo y blanco; en claro magenta y rojo apagado, con enlaces de baja opacidad.

Movimiento reducido: CSS detiene la respiración del fondo y acorta transiciones; las cortinas pasan de 0.6s a 0.01s sin retrasos. Las partículas **siguen moviéndose y respondiendo**: velocidad 0.22 frente a 0.8 y cantidad 56 frente a 92. No describir esta variante como estática ni usar su existencia como prueba de accesibilidad completa; requiere revisión del comportamiento real.

Las tres cortinas púrpuras siguen en Transition y globals.css como transición de ruta; no gobiernan la paleta de superficies.

## Do's and Don'ts

### Do:

- **Do** Usar los colores del logo y sus variantes implementadas para bloques, manchas y acciones.
- **Do** Conservar composiciones distintas por página y el logo intacto.
- **Do** Mantener etiquetas en español, foco visible y objetivos táctiles de al menos 44 px.
- **Do** Comprobar ambos temas, teclado, zoom 200% y anchos 320/360/390/768/1280 antes de afirmar conformidad.

### Don't:

- **Don't** Restablecer señal escasa, naranja único o fondos azul oscuro como identidad global.
- **Don't** Reintroducir el panel orbital artificial del Home ni confundirlo con las partículas conservadas.
- **Don't** Convertir las clases sin uso o los defectos de contraste, recorte y movimiento en reglas de diseño.
- **Don't** Presentar proyectos o bandas de capacidades como resultados comerciales o personas verificadas.
- **Don't** Simular entrega o confirmación del formulario.

El sidecar contiene muestras aisladas, metadatos y rampas tonales sintéticas para el panel; estas rampas no son nuevos tokens de producción. Esta extracción registra código y decisiones, no legitima recortes, contraste insuficiente ni estados inaccesibles.
