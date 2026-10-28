# Decisiones

Registro de decisiones tomadas donde el encargo era ambiguo o había que elegir.

## Origen

- Proyecto nuevo creado con `create-next-app` 16.4.2 a partir de `atmosfera-next.zip`. El diseño, los textos, los componentes y `globals.css` se conservan tal cual; solo cambió la base del proyecto.

## Cambios respecto al ZIP

- **Mismas convenciones que `estetica-landing` y `salon-azul-landing`**: pnpm, código dentro de `src/` (alias `@/*` → `src/*`), ESLint con `eslint-config-next` + Prettier, scripts `lint`, `typecheck`, `format` y `tsconfig` con `noUncheckedIndexedAccess`.
- **Exportación estática** (`output: "export"`, `trailingSlash`): la landing no necesita servidor y se despliega en Vercel, Netlify o Cloudflare Pages. `pnpm start` sirve `out/`.
- **Fuentes con `next/font/google`** en lugar de `@fontsource`: mismas familias (Figtree y Plus Jakarta Sans), autohospedadas en build, con fuentes de respaldo ajustadas para evitar saltos de diseño. `globals.css` las toma de las variables `--font-figtree` y `--font-jakarta`.
- **Sin Tailwind**: el diseño original es CSS propio y no gana nada con migrarlo.
- Se quitaron `cacheComponents` y `partialPrefetching` que trae la plantilla, porque no aportan en un sitio exportado.
- **Favicon** `src/app/icon.svg` hecho con el logo, en lugar del ícono de Next.
- `lang="es-MX"`, `themeColor` y `formatDetection` en el layout.

- **Menú hamburguesa en celular** (a petición): hasta 760 px el `<nav>` de escritorio se oculta y aparece un botón que despliega un panel bajo el encabezado con los enlaces y el botón Contacto. Es la única isla cliente (`src/components/MobileMenu.tsx`); el resto sigue siendo componente de servidor. Se cierra al elegir un enlace, con Esc (el foco vuelve al botón), al tocar fuera o al agrandar la ventana a escritorio. Enlaces de 48 px de alto y texto de 16 px para el dedo. La animación del panel y del ícono se apaga con `prefers-reduced-motion`.

- **Tema oscuro con botón para cambiar** (a petición: "todo oscuro de azul"). Los colores que cambian con el tema son variables en `:root` (claro) y `[data-theme="dark"]` (oscuro) al inicio de `globals.css`. El oscuro usa solo azules profundos de la paleta: fondo `#0A1530`, tarjetas `#10204A`, hero `#0C1A3C`, footer `#06102A`. Texto `#EAF1FB` (15.9:1), texto secundario `#A9BCDA` (8.2:1 sobre tarjeta), acento `#7FA8F0` (7.5:1) y botones `#2F6FD0` con texto blanco (4.9:1, AA). Las secciones que ya eran oscuras (Por qué, Proceso, Contacto) no cambian.
  - **Primera visita**: sigue el tema del sistema (`prefers-color-scheme`). Al usar el botón, la elección se guarda en `localStorage` y se respeta en las siguientes visitas.
  - **Sin parpadeo**: un script en línea en `<head>` (`src/lib/theme.ts`) pone `data-theme` en `<html>` antes de pintar, como recomienda la guía de Next «Preventing flash before hydration». El botón (`ThemeToggle.tsx`) lee el tema con `useSyncExternalStore` para no provocar errores de hidratación, y dibuja sol y luna; el CSS muestra el que toca.
  - **Ilustración del hero**: se queda igual que en el tema claro (a petición), con sus tarjetas blancas. Los íconos de servicios y las ilustraciones del proceso tampoco cambian.
  - Sin JavaScript la página se ve en tema claro.

- **«Casos de éxito» pasó a «Demos para explorar»** (a petición): en lugar de casos sin datos reales, la sección muestra ejemplos funcionando para que el cliente vea secciones, funciones, calidad y diseño. Son 3 tarjetas: **Atmósfera Digital** (en lugar de Taller mecánico; es esta misma página, etiqueta «Estás aquí»), **Salón y belleza** (antes «Estética y belleza»; enlace a https://landing-salon-demo.vercel.app/, abre en otra pestaña) y **Salud** («Próximamente»: consultorio dental y laboratorio clínico, sin enlace). Se quitaron Tienda de alimentos y Boutique de ropa porque la sección queda en tres espacios. Las demos se editan en `demos` de `src/lib/content.ts` (`status`: `here`, `live` o `soon`). El enlace del menú pasó a «Demos» (`#demos`).
  - Cada tarjeta lleva una descripción corta y etiquetas con lo que incluye. Para Salón y belleza solo se listan funciones que ya tiene `salon-azul-landing` (servicios con precios, galería, citas por WhatsApp, mapa y horarios).

- **Capturas en las demos** (a petición): las tarjetas de Atmósfera Digital y Salón y belleza muestran una captura del inicio de cada sitio que ocupa todo el ancho y alto del espacio de imagen, bajo una barra de ventana estilo macOS (botones rojo, amarillo y verde, barra de direcciones con el dominio de la demo publicada y la etiqueta «Estás aquí» / «Demo en vivo» a la derecha, para que no tape la captura). Se ve la parte de arriba de la página; sin zoom propio en la imagen, solo el efecto de elevación de la tarjeta. La barra cambia de color con el tema (`--browser-bar`). Se tomaron con Chrome sin interfaz a 1440 × 900 (Atmósfera desde el build estático, en tema claro) y se guardaron en `public/demos/` como WebP de 960 × 600 (27 KB y 39 KB). Salud conserva el ícono hasta tener su demo. Como el sitio se exporta estático, `next/image` va con `images.unoptimized` y carga diferida. Si cambia el diseño de una demo, hay que volver a tomar su captura.

- **«Demos para explorar» pasó a «Proyectos y demos»** (a petición), para mezclar trabajo real con ejemplos. Cuatro tarjetas en dos columnas (una en tableta y celular), primero los clientes:
  - **Constructora en USA** (https://calnorthex.com/): el proyecto productivo para un cliente. El título es genérico (a petición) y el nombre, Calnorthex Concrete, va en la descripción. La captura muestra el inicio con la tercera imagen del carrusel (la obra con cimbra), tomada con Chrome sin interfaz deteniendo el carrusel en esa imagen. Enlace «Visitar sitio».
  - **Clínica dental** (antes «Consultorio dental»): cliente en cartera, sitio en preparación (citas en línea, servicios, mapa, galería y horarios). Ícono de diente hasta tener captura; reemplaza a la tarjeta «Salud».
  - **Salón y belleza** y **Atmósfera Digital**: las demos de antes.
  - **Una sola etiqueta por tarjeta**: «• Cliente» (viñeta verde) o «• Demo» (viñeta azul), en una píldora arriba a la derecha dentro de la imagen, al doble del tamaño anterior para que se lea sobre las capturas. El estado lo indica el enlace de abajo («Visitar sitio», «Ver demo», «Recorre esta página» o «En preparación»).
  - **Marco homologado**: todas las tarjetas, incluidas las que no tienen captura (clínica dental e invitación), llevan la misma barra de ventana estilo macOS: tres botones y un buscador vacío, sin URL (a petición).
  - **Tarjeta de invitación «Tu nueva página web»** al final de la sección: el siguiente proyecto puede ser el del visitante, con botón «Agenda una asesoría gratuita» que abre WhatsApp (mismo enlace que la sección de contacto). Sustituye al enlace «¿Quieres una para tu negocio? Hablemos», que quedaba repetido. Textos en `invite` de `content.ts`.
  - **Tarjetas más pequeñas** (a petición, 3/4): tres columnas en escritorio (~340 px cada una), dos en tableta y una en celular. Con cinco tarjetas, la última fila queda con dos.
  - El menú y el ancla pasaron de «Demos» (`#demos`) a «Proyectos» (`#proyectos`). En `content.ts` cada tarjeta tiene `kind` (`client` o `demo`) y `link` (`here`, `external` o `soon`).

- **Botones en las tarjetas de proyectos** (a petición: el enlace casi no se distinguía): «Visitar sitio», «Ver demo», «Recorre esta página» y «Agenda una asesoría gratuita» usan el mismo botón relleno de la página (`.btn`), en tamaño compacto (`.dcta`). «En preparación» queda como píldora punteada para que no parezca algo en lo que se puede hacer clic.

## Observaciones (sin cambiar)

- Varios componentes usan estilos en línea (`style={{…}}`); se dejaron así para no alterar el diseño.
