# Atmósfera Digital — Landing

Landing page de la agencia, hecha con **Next.js 16 (App Router) + React 19 + TypeScript**. Sin librerías de UI ni de animación: todo es CSS y SVG en línea. Se exporta como sitio estático (`out/`).

## Empezar

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # exporta el sitio estático en out/
pnpm start        # sirve out/ localmente
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit
pnpm format       # Prettier
```

## Estructura

```
src/
  app/
    layout.tsx      # metadatos y fuentes (next/font: Figtree + Plus Jakarta Sans)
    page.tsx        # arma las secciones en orden
    globals.css     # todos los estilos y animaciones
    icon.svg        # favicon (el logo)
  components/       # una sección por archivo: Nav, Hero, Services, Why, Process, Demos, ...
  components/illustrations/   # ilustraciones SVG como componentes
  lib/content.ts    # textos, enlaces y datos editables (servicios, pasos, demos, testimonio)
```

## Pendientes (marcados con TODO en `src/lib/content.ts`)

- [ ] Número de WhatsApp real (`site.whatsappNumber`)
- [ ] Demo de salud (consultorio dental y laboratorio clínico): cambiar `status` a `"live"`, poner `href` y agregar su captura en `public/demos/` (`image`) cuando exista
- [ ] Testimonio real y quitar la etiqueta "Testimonio ilustrativo"
- [ ] Enlace del Blog (hoy es `#`)
- [ ] Los botones "→" de cada servicio llevan a `#contacto`; puedes darles destino propio

## Notas técnicas

- **Apilado de tarjetas ("Cómo trabajamos")**: CSS puro con `position: sticky` (`.pinwrap`, `.pinhead`, `.stack`, `.scard`). Las alturas (`--H`, `--ch`, `--d`) están fijas por breakpoint para que todas las tarjetas se suelten a la vez; si cambias a textos más largos, ajusta esos valores.
- **Animaciones**: CSS puro con `@keyframes`; se desactivan con `prefers-reduced-motion`. La entrada de los íconos usa `animation-timeline: view()` y, si el navegador no la soporta, simplemente se ven fijos.
- **Tema claro/oscuro**: los colores que cambian están como variables al inicio de `globals.css` (`:root` y `[data-theme="dark"]`). Botón en `ThemeToggle.tsx`; el script que evita el parpadeo está en `src/lib/theme.ts`.
- Nada queda oculto "esperando" a JavaScript: la página es legible sin animaciones.

Ver [DECISIONS.md](DECISIONS.md) para lo que cambió respecto al proyecto original.
