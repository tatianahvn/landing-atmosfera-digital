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

## Observaciones (sin cambiar)

- En celular el menú del encabezado se acomoda en dos o tres renglones porque no hay menú hamburguesa; funciona, pero ocupa espacio.
- Varios componentes usan estilos en línea (`style={{…}}`); se dejaron así para no alterar el diseño.
