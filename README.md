# AgencyMarketingAi

Sitio web de la agencia de marketing **DevCamp**, construido con Astro 7, Tailwind CSS 4 y TypeScript.

La web cubre servicios, casos, nosotros, insights y contacto. Está pensada para una agencia digital local (Guayaquil, Ecuador) que ofrece estrategia, performance, SEO, contenido, web/CRO e IA aplicada al marketing.

## Requisitos

- Node.js 22.12+
- pnpm 12+

## Scripts

```bash
pnpm install
pnpm dev          # modo desarrollo (usa: astro dev --background)
pnpm build        # genera el sitio estático en dist/
pnpm preview      # sirve el build localmente
```

## Estructura

- `src/data/site.ts` — datos del sitio: contacto, navegación, servicios, casos, equipo, testimonios y FAQ.
- `src/content/insights/` — artículos de insights (colección de contenido en Markdown).
- `src/pages/` — páginas y rutas dinámicas (servicios, casos, insights).
- `src/components/` — componentes Astro (Header, Footer, Hero, etc.).

## Datos del sitio

Para cambiar teléfono, correo o ubicación, edita `src/data/site.ts`. Los insights se agregan como archivos `.md` en `src/content/insights/` con frontmatter de `title`, `description`, `date`, `minutes` y `tag`.