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
  components/       # una sección por archivo: Nav, Hero, Services, Why, Process, Cases, ...
  components/illustrations/   # ilustraciones SVG como componentes
  lib/content.ts    # textos, enlaces y datos editables (servicios, pasos, casos, testimonio)
```

## Pendientes (marcados con TODO en `src/lib/content.ts`)

- [ ] Número de WhatsApp real (`site.whatsappNumber`)
- [ ] Casos de éxito reales (reemplazar `[Agrega tu caso]`)
- [ ] Testimonio real y quitar la etiqueta "Testimonio ilustrativo"
- [ ] Enlace del Blog (hoy es `#`)
- [ ] Los botones "→" de cada servicio llevan a `#contacto`; puedes darles destino propio

## Notas técnicas

- **Apilado de tarjetas ("Cómo trabajamos")**: CSS puro con `position: sticky` (`.pinwrap`, `.pinhead`, `.stack`, `.scard`). Las alturas (`--H`, `--ch`, `--d`) están fijas por breakpoint para que todas las tarjetas se suelten a la vez; si cambias a textos más largos, ajusta esos valores.
- **Animaciones**: CSS puro con `@keyframes`; se desactivan con `prefers-reduced-motion`. La entrada de los íconos usa `animation-timeline: view()` y, si el navegador no la soporta, simplemente se ven fijos.
- Nada queda oculto "esperando" a JavaScript: la página es legible sin animaciones.

Ver [DECISIONS.md](DECISIONS.md) para lo que cambió respecto al proyecto original.
