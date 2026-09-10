# Green Ray LED — Web V1

Starter funcional del nuevo sitio Green Ray LED. Dirección visual: arquitectura + quiet luxury + interfaz dark, tomando Cettiga como referencia de lenguaje visual sin replicar su arquitectura de información.

## Stack

- Next.js 16.3.4 (App Router)
- React 19.3
- TypeScript
- CSS nativo
- `next/image`
- Preparado para Vercel

## Estado de esta versión

- Home responsive completa
- Hero dark basado en proyecto real de Viasono Buenos Aires
- Header desktop/mobile
- Bifurcación B2B / residencial
- High End / Garden Line / Architectural
- Selected Projects
- Light + Material
- Custom Made
- CTA final y footer
- Rutas dinámicas de proyectos: `/proyectos/[slug]`
- Metadata SEO base

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Build de producción

```bash
npm run build
npm start
```

## Deploy en Vercel

1. Crear un repositorio GitHub y subir esta carpeta.
2. En Vercel: Add New → Project.
3. Importar el repositorio.
4. Framework detectado: Next.js.
5. Build command: `next build` (automático).
6. Deploy.

No se requieren variables de entorno en esta V1.

## Estructura

```text
app/
  page.tsx
  layout.tsx
  globals.css
  proyectos/[slug]/page.tsx
components/
  Header.tsx
  Hero.tsx
  ArrowLink.tsx
  SectionIntro.tsx
data/
  projects.ts
public/images/
```

## Antes de publicar

- Sustituir wordmark tipográfico por logo SVG oficial.
- Confirmar email definitivo de contacto.
- Reemplazar imágenes editoriales temporales por material cuyo cliente/alcance esté validado.
- Cargar el set completo de Viasono, McDonald's y demás proyectos publicables.
- Definir comportamiento ES/EN; el switch está maquetado pero todavía no cambia el locale.
- Incorporar formulario real de proyectos.
- Validar autorización de publicación de cliente, ubicación y fotografías de cada caso.

## Próxima fase recomendada

1. Cerrar logo/tipografía.
2. Incorporar portfolio completo validado.
3. Crear catálogo de productos/colecciones.
4. Implementar ES/EN.
5. Añadir transiciones finas y motion después de validar performance.
6. Lighthouse / Core Web Vitals / metadata social.

### Nota editorial sobre imágenes

Las imágenes de la segunda carpeta compartida se usan únicamente como apoyo visual/editorial en esta V1. No se atribuyen a un cliente o proyecto mientras identidad, ubicación y alcance no estén validados. La única ficha de proyecto enlazada en esta entrega es Viasono Buenos Aires, que sí está respaldada por la documentación maestra.
