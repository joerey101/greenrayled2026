# Green Ray LED — Guía de Control Total del Proyecto

> Documento de referencia para agentes de código (Claude Code, Cursor, Antigravity, etc.).
> Antes de escribir cualquier código, lee este archivo completo.

---

## 1. Qué es este proyecto

**Green Ray LED** es el sitio web oficial de una empresa de iluminación arquitectónica de alta gama con presencia en Argentina, Uruguay y Latinoamérica. El sitio está pensado como herramienta comercial B2B (arquitectos, diseñadores, hotelería, retail, industria) y B2C (residencial premium, Custom Made).

Dirección visual: **quiet luxury + arquitectura + dark interface**.
Referencia estética tomada de Cettiga (lenguaje visual, no estructura de IA).

---

## 2. Stack tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router) | 16.3.4 |
| UI | React | 19.3.0 |
| Tipado | TypeScript (strict) | ^5.9.0 |
| Estilos | CSS nativo (`globals.css`) | — |
| Imágenes | `next/image` con avif/webp | — |
| i18n | Context manual (ES/EN) | — |
| Deploy | Vercel (auto desde main) | — |
| Repo | GitHub | — |

**Sin librerías de UI externas** (no Tailwind, no MUI, no Radix). Todo el diseño es CSS nativo en `app/globals.css`.

---

## 3. Estructura de directorios

```
greenray-web-v1/           ← raíz del proyecto Next.js (aquí correr los comandos)
├── app/
│   ├── globals.css        ← ÚNICA hoja de estilos. Todo el diseño está aquí.
│   ├── layout.tsx         ← Root layout: metadata SEO + LanguageProvider
│   ├── page.tsx           ← Home page (14 secciones, "use client")
│   └── proyectos/
│       └── [slug]/
│           └── page.tsx   ← Ruta dinámica de cada proyecto
├── components/
│   ├── Header.tsx          ← Nav desktop + mobile menu + switch ES/EN
│   ├── Hero.tsx            ← Hero dark con video de fondo
│   ├── ArrowLink.tsx       ← Componente de CTA con flecha
│   ├── SectionIntro.tsx    ← Encabezado de sección (número + label + título)
│   ├── PerceptionSection.tsx  ← Sección 02: Percepción de la luz
│   ├── TechSection.tsx     ← Sección 04: Tecnología LED
│   ├── BeamControl.tsx     ← Sección 05: Control de haz (interactivo)
│   ├── CommercialSection.tsx  ← Sección 07: Retail/Hospitality
│   ├── ArchitecturalIntegration.tsx ← Sección 08: Integración arquitectónica
│   ├── Miniaturization.tsx ← Sección 10: Miniaturización
│   └── ProjectContent.tsx  ← Contenido de ficha de proyecto
├── context/
│   └── LanguageContext.tsx ← Contexto React ES/EN + localStorage
├── data/
│   ├── dictionary.ts       ← TODAS las cadenas de texto ES y EN
│   └── projects.ts         ← Array de proyectos con slug, imágenes y metadata
├── public/
│   └── images/             ← Activos estáticos (jpg, webp, mp4)
├── next.config.ts          ← Config Next.js (formatos avif/webp)
├── tsconfig.json           ← Path alias @/* = ./*
├── package.json
├── .gitignore
├── AGENTS.md               ← Instrucciones auto-generadas por next dev (no borrar)
└── CLAUDE.md               ← Este archivo
```

---

## 4. Levantar el proyecto en local

### Requisitos previos
- Node.js ≥ 20
- npm ≥ 10

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/joerey101/greenrayled2026.git
cd greenrayled2026

# 2. Instalar dependencias
npm install

# 3. Correr el servidor de desarrollo
npm run dev
```

Abre `http://localhost:3000`.

### Comandos disponibles

```bash
npm run dev        # Servidor de desarrollo con hot reload
npm run build      # Build de producción
npm start          # Iniciar build de producción local
npm run typecheck  # Verificar tipado TypeScript sin compilar
```

> **IMPORTANTE:** El `AGENTS.md` es regenerado automáticamente por `next dev`. No lo borres ni lo incluyas en commits como cambio intencional.

---

## 5. Conexión con GitHub

- **Repositorio:** `https://github.com/joerey101/greenrayled2026`
- **Rama principal:** `main`
- **Usuario:** `joerey101`
- **Remote name:** `origin`
- **Visibilidad:** privado

### Historial de commits relevantes

| Hash | Descripción |
|---|---|
| `a7e0566` | `feat(v2)`: home completa con las 14 secciones (commit actual/HEAD) |
| `a97c335` | fix navegación: orden DOM = orden de menú |
| `aae7ae7` | fix mobile: menú hamburguesa, z-index, fondo sólido |
| `ecdbdeb` | Initial release V1 con soporte i18n ES/EN |

### Flujo de trabajo con Git

```bash
# Ver estado
git status

# Agregar cambios
git add .

# Commitear (usar conventional commits)
git commit -m "feat(component): descripción"

# Subir a GitHub (esto dispara el deploy automático en Vercel)
git push origin main
```

**Convención de commits usada en el proyecto:**
- `feat(scope):` — nueva funcionalidad
- `fix(scope):` — corrección de bug
- `style(scope):` — cambios de CSS/diseño
- `refactor(scope):` — refactor sin cambio funcional
- `content:` — actualización de textos o imágenes

---

## 6. Deploy en Vercel (producción en vivo)

### Configuración

- **Plataforma:** Vercel
- **Framework detectado:** Next.js (automático)
- **Branch de deploy:** `main` → cada `git push` a `main` dispara un deploy automático
- **Build command:** `next build` (automático, no configurar manualmente)
- **Output directory:** `.next` (automático)
- **URL de producción:** `https://greenrayled.com` (dominio configurado en Vercel)
- **Variables de entorno:** **ninguna requerida en V1**

### Cómo funciona el ciclo completo

```
Editar código local
    ↓
git add + git commit
    ↓
git push origin main
    ↓
GitHub recibe el push
    ↓
Vercel detecta el push vía webhook
    ↓
Vercel corre `next build`
    ↓
Deploy automático a producción
    ↓
Sitio en vivo en greenrayled.com
```

### Preview deployments

Vercel también genera **URLs de preview** para cualquier rama que no sea `main`. Para usarlas:

```bash
git checkout -b feature/nombre-de-la-feature
# hacer cambios...
git push origin feature/nombre-de-la-feature
# Vercel genera una URL temporal: https://greenrayled2026-xxxx.vercel.app
```

### Sin configurar manualmente en Vercel

No hay `vercel.json` en el proyecto. Next.js en Vercel no lo necesita. Si se requiere customizar headers, rewrites o redirects en el futuro, crear `vercel.json` en la raíz o usar `next.config.ts`.

---

## 7. Sistema de internacionalización (i18n)

El sitio soporta **Español (ES)** e **Inglés (EN)** sin librerías externas.

### Cómo funciona

1. **`data/dictionary.ts`** — contiene todas las cadenas de texto en ambos idiomas. Tipo `TranslationKeys` define la estructura completa.
2. **`context/LanguageContext.tsx`** — `LanguageProvider` envuelve toda la app en `layout.tsx`. Persiste la elección en `localStorage` con la clave `greenray_lang`.
3. **`useLanguage()`** — hook que expone `{ language, setLanguage, t }`. El objeto `t` contiene todas las traducciones del idioma activo.
4. **`Header.tsx`** — botones ES/EN para cambiar el idioma en tiempo real.

### Agregar o editar textos

**Siempre editar `data/dictionary.ts`**, nunca hardcodear strings en componentes.

```typescript
// Estructura del diccionario
export const dictionary: Record<Language, TranslationKeys> = {
  es: { nav: { products: "Productos", ... }, ... },
  en: { nav: { products: "Products", ... }, ... },
};
```

### Estado actual del switch

El switch ES/EN **está implementado y funcional** (cambia el idioma en tiempo real). Las traducciones EN están completas en el diccionario. Las rutas dinámicas de proyectos también tienen campos `descriptionEn`, `statementEn`, `scopeEn`.

---

## 8. Sistema de proyectos

### Cómo agregar un proyecto nuevo

Editar `data/projects.ts`:

```typescript
{
  slug: "nombre-del-proyecto",         // URL: /proyectos/nombre-del-proyecto
  client: "Nombre del Cliente",
  title: "Título completo del proyecto",
  location: "Ciudad · País",
  category: "Retail / High End",
  statement: "Frase editorial en español.",
  statementEn: "Editorial phrase in English.",
  description: "Descripción larga en español.",
  descriptionEn: "Long description in English.",
  scope: ["Item 1", "Item 2"],         // Alcance en español
  scopeEn: ["Item 1", "Item 2"],       // Alcance en inglés
  cover: "/images/nombre-hero.jpg",    // Imagen principal (carpeta public/images/)
  images: [
    "/images/nombre-detail-01.jpg",
    "/images/nombre-detail-02.jpg",
  ],
  status: "publicable",                // "publicable" | "validate"
}
```

Solo los proyectos con `status: "publicable"` aparecen en la grilla del home (filtrado por `featuredProjects`).

### Imágenes recomendadas

| Uso | Tamaño sugerido | Formato |
|---|---|---|
| Hero de proyecto (`cover`) | 1600×1000 px | jpg / webp |
| Detalle de proyecto | 1600×1200 px | jpg / webp |
| Hero del home | 1920×1080 px | jpg / webp |
| Video background | 1920×1080 px | mp4 (H.264) |

Colocar todos los activos en `public/images/`. Next.js los sirve optimizados vía `next/image`.

---

## 9. Componentes y secciones del Home

El home (`app/page.tsx`) está compuesto por **14 secciones** en orden:

| # | ID anchor | Componente / código | Descripción |
|---|---|---|---|
| 01 | — | `<Hero />` | Hero dark con video K24-4K, CTA bifurcado B2B/B2C |
| 02 | — | `<PerceptionSection />` | Percepción de la luz — 5 conceptos |
| 03 | `#lineas` | inline en page.tsx | Colecciones: High End / Garden Line / Architectural |
| 04 | `#tecnologia` | `<TechSection />` | Specs técnicas + Rail LED |
| 05 | — | `<BeamControl />` | Control de haz (BeamControl interactivo) |
| 06 | `#proyectos` | inline en page.tsx | Selected Projects (grilla dinámica desde `projects.ts`) |
| 07 | `#comercial` | `<CommercialSection />` | Retail / Hospitality / Commercial |
| 08 | — | `<ArchitecturalIntegration />` | Integración arquitectónica |
| 09 | `#material` | inline en page.tsx | Light + Material (imagen fullscreen + lista) |
| 10 | — | `<Miniaturization />` | Miniaturización |
| 11 | — | inline en page.tsx | Custom Made |
| 12 | `#profesionales` | inline en page.tsx | Audiencias B2B + Residencial |
| 13 | `#green-ray` | inline en page.tsx | Manifiesto / filosofía Green Ray |
| 14 | `#contacto` | inline en page.tsx | CTA final + Footer |

---

## 10. CSS y diseño

**Un solo archivo:** `app/globals.css` (aprox. 43 KB).

### Sistema de diseño

- **Paleta:** dark mode base (`#0a0a0a`, `#111`, `#1a1a1a`) con blanco roto y dorados/champagne para acentos.
- **Tipografía:** fuentes del sistema (stack serif/sans-serif). Considerar agregar Google Fonts (Outfit, Inter) en una próxima iteración.
- **Grid:** CSS Grid nativo y Flexbox. No hay librerías de grid.
- **Responsive:** breakpoints en CSS con `@media`. El diseño es mobile-first en la mayoría de secciones.
- **Animaciones:** micro-animaciones con CSS transitions y `@keyframes`. No se usa GSAP ni Framer Motion en V1.

### Convención de naming en CSS

```css
/* Secciones: nombre-section */
.lines-section {}
.material-section {}

/* Shell contenedor: section-shell */
.section-shell {}

/* Elementos dentro: nombre-elemento */
.line-item {}
.line-copy {}
.project-card {}
```

---

## 11. Alias de paths (TypeScript)

El proyecto usa `@/` como alias para la raíz:

```typescript
import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
```

Configurado en `tsconfig.json`:
```json
"paths": { "@/*": ["./*"] }
```

---

## 12. Lo que NO está implementado todavía (próximas fases)

| Item | Estado | Notas |
|---|---|---|
| Logo SVG oficial | Pendiente | Actualmente es wordmark tipográfico "GREEN RAY" |
| Formulario de contacto real | Pendiente | CTA actual es `mailto:` |
| Portfolio completo | Pendiente | Solo Viasono Buenos Aires publicable |
| Lighthouse / Core Web Vitals | Pendiente | Optimizar antes de publicar |
| Metadata social (OG, Twitter) | Pendiente | Solo metadata base |
| Transiciones entre páginas | Pendiente | Agregar después de validar performance |
| Catálogo de productos | No iniciado | Fase siguiente |
| Analytics | No iniciado | Vercel Analytics o GA4 |

---

## 13. Consideraciones editoriales y legales (importante)

- Las imágenes editoriales en `public/images/` son provisorias. **No publicar como portfolio** hasta validar autorización del cliente, ubicación y fotografías.
- El único proyecto actualmente publicable es **Viasono Buenos Aires** (documentación validada).
- Los proyectos marcados con `status: "validate"` (Charo, McDonald's, etc.) no deben enlazarse públicamente hasta confirmar autorización.
- El email de contacto actual es `info@greenrayled.com` — confirmar antes de lanzar.

---

## 14. Variables de entorno

**No hay variables de entorno en V1.** El archivo `.env` y `.env.local` están en el `.gitignore`. Si en el futuro se agregan:

1. Crear `.env.local` en la raíz (nunca commitear).
2. En Vercel: Settings → Environment Variables → agregar con el mismo nombre.
3. Para variables expuestas al cliente: prefijo `NEXT_PUBLIC_`.

---

## 15. Troubleshooting frecuente

### `next dev` genera cambios en AGENTS.md

Normal. `next dev` regenera `AGENTS.md` automáticamente. No borrar ese archivo; es parte del mecanismo de Next.js 16.

### Hydration mismatch warnings

`<body suppressHydrationWarning>` ya está configurado en `layout.tsx`. Si aparecen warnings nuevos, verificar que no haya código dependiente del browser (como `window` o `localStorage`) corriendo en el servidor sin guard `typeof window !== "undefined"`.

### Imágenes con `next/image` sin tamaño definido

Siempre pasar `fill` + `sizes` o `width`/`height`. Las imágenes de `public/images/` no requieren dominio configurado (son locales).

### El switch de idioma no persiste al recargar

El idioma se guarda en `localStorage` con la clave `greenray_lang`. Si en SSR se ve el idioma por defecto (ES) un frame antes de hidratar, es comportamiento esperado.

### Error de build en TypeScript

Correr `npm run typecheck` antes de pushear. El modo strict está habilitado.

---

## 16. Checklist antes de cada push a main

- [ ] `npm run typecheck` sin errores
- [ ] `npm run build` local exitoso
- [ ] Verificar en `http://localhost:3000` que todo renderiza
- [ ] Revisar mobile (DevTools responsive mode)
- [ ] Confirmar que no hay imágenes hardcodeadas fuera de `public/images/`
- [ ] No commitear `node_modules/`, `.next/`, `.DS_Store`, `tsconfig.tsbuildinfo`

---

*Última actualización del documento: septiembre 2026.*
