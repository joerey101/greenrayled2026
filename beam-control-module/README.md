# Beam Control — módulo de haces de luz interactivos

Módulo web autónomo para **Green Ray**. Muestra una escena en penumbra y permite
**encender haces de luz de forma independiente** (8° / 24° / 36°): cada click
ilumina su objeto, baja el cono desde la luminaria y apoya el charco de luz en la
base. Pensado como demostración del efecto de la apertura de haz sobre el espacio.

Sin dependencias, sin build. HTML + CSS + JS puro → se integra en cualquier stack
(React/Next, Vue, WordPress, HTML plano).

---

## 1. Archivos

```
beam-control/
├── index.html          Demo mínima (solo el módulo, sin encabezados)
├── beam-control.css    Estilos (scoped con prefijo .bc-)
├── beam-control.js     Lógica (vanilla, sin dependencias)
├── assets/
│   └── sala-off.png    Imagen base: la sala APAGADA/en penumbra
└── README.md
```

## 2. Uso rápido

Incluí el CSS y el JS, poné un contenedor vacío y montá el módulo:

```html
<link rel="stylesheet" href="beam-control.css">
<!-- opcional: la tipografía Geist -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&display=swap">

<div id="beam" style="width:100%"></div>

<script src="beam-control.js"></script>
<script>
  BeamControl(document.getElementById('beam'), {
    image: 'assets/sala-off.png',
    aspect: '1672 / 941'
  });
</script>
```

O declarativo, sin escribir JS de montaje:

```html
<div data-beam-control data-config='{"image":"assets/sala-off.png","aspect":"1672 / 941"}'></div>
<script src="beam-control.js"></script>
```

Abrí `index.html` con un servidor local (no con doble click, por las rutas):

```bash
cd beam-control
python3 -m http.server 8000     # luego http://localhost:8000
```

## 3. Opciones de configuración

`BeamControl(contenedor, opciones)` acepta:

| Opción    | Tipo   | Default        | Descripción |
|-----------|--------|----------------|-------------|
| `image`   | string | `assets/sala-off.png` | Ruta de la imagen base (la sala apagada). |
| `aspect`  | string | `'1672 / 941'` | `aspect-ratio` del escenario (ancho/alto de tu imagen). |
| `sectors` | array  | 3 sectores     | Definición de cada haz (ver abajo). |

### Objeto `sector`

Todas las posiciones son **porcentajes del contenedor** (0–100). El origen es la
esquina **superior izquierda**; `x` crece a la derecha, `y` hacia abajo.

| Campo     | Qué es |
|-----------|--------|
| `deg`     | Etiqueta del ángulo, ej. `'8°'`. |
| `name`    | Título del haz, ej. `'Haz estrecho'`. |
| `desc`    | Subtítulo, ej. `'Acento preciso'`. |
| `fx`,`fy` | Posición de la **luminaria** (vértice del cono / punto de origen). |
| `tx`,`mcy`| Centro de la **zona iluminada** (revelado) sobre el objeto. |
| `revW`,`revH` | Tamaño (radios %) de la elipse de revelado. Más grande = más área encendida. |
| `bx`,`by` | Centro del **charco de luz** en el piso (la BASE del objeto/pedestal). |
| `poolW`   | Ancho del charco (%). El alto se calcula proporcional. |
| `coneW`   | Ancho del cono en su base (%). Chico = haz estrecho (8°), grande = abierto (36°). |
| `coneBot` | `y` donde termina/desvanece el cono (para que no “vele” el objeto). |

Ejemplo (los valores actuales de la demo):

```js
BeamControl(el, {
  image: 'assets/sala-off.png',
  aspect: '1672 / 941',
  sectors: [
    { deg:'8°',  name:'Haz estrecho', desc:'Acento preciso',
      fx:26, fy:6, tx:26, mcy:74, revW:9,  revH:36, bx:26, by:90, poolW:9,  coneW:5,  coneBot:68 },
    { deg:'24°', name:'Haz medio',    desc:'Equilibrio visual',
      fx:50, fy:5, tx:50, mcy:72, revW:15, revH:34, bx:50, by:86, poolW:16, coneW:11, coneBot:70 },
    { deg:'36°', name:'Haz abierto',  desc:'Cobertura ambiental',
      fx:82, fy:6, tx:82, mcy:74, revW:22, revH:36, bx:82, by:90, poolW:20, coneW:18, coneBot:70 }
  ]
});
```

> El módulo soporta **cualquier cantidad de sectores** (no solo 3). Los divisores
> y las columnas clickeables se reparten en partes iguales según `sectors.length`.

## 4. API (valor de retorno)

```js
var bc = BeamControl(el, {...});
bc.set(0, true);   // enciende el sector 0
bc.toggle(1);      // alterna el sector 1
bc.allOff();       // apaga todo
bc.destroy();      // limpia el DOM
```

## 5. Tematización (CSS custom properties)

Sobre `.bc-root` (el contenedor) podés ajustar sin tocar el CSS:

```css
#beam{
  --bc-warm: 255, 240, 205;   /* color del haz en RGB (~3000K). Ej cálido: 255,224,170 */
  --bc-base-idle: .38;        /* brillo de la sala con todo apagado (tenue) */
  --bc-base-on: .24;          /* brillo de la sala con focos prendidos (contraste) */
  --bc-reveal-filter: brightness(2.5) contrast(1.18) saturate(1.05) sepia(.10);
  --bc-bronze: #C5A06A;       /* acento de marca */
}
```

## 6. Cambiar la imagen / reubicar las luces

1. Reemplazá `assets/sala-off.png` por tu foto (la escena **apagada**).
2. Ajustá `aspect` al ancho/alto real de esa imagen.
3. Reubicá cada haz con las coordenadas `%` del sector: `fx/fy` (luminaria),
   `tx/mcy` + `revW/revH` (zona iluminada) y `bx/by` + `poolW` (charco en la base).

Tip: abrí las DevTools y andá probando valores en vivo; son todos `%`, muy rápidos de tantear.

## 7. Uso en React / Next

```jsx
import { useEffect, useRef } from 'react';
import './beam-control.css';

export default function BeamControlBlock() {
  const ref = useRef(null);
  useEffect(() => {
    let inst;
    import('./beam-control.js').then(() => {
      inst = window.BeamControl(ref.current, { image: '/beam/sala-off.png', aspect: '1672 / 941' });
    });
    return () => inst && inst.destroy();
  }, []);
  return <div ref={ref} style={{ width: '100%' }} />;
}
```

(Serví `beam-control.js` y la imagen desde `public/`, o portá el JS a un módulo ESM.)

## 8. Cómo funciona (y sus límites)

- **Técnica:** la escena apagada es la base (oscurecida). Cada haz revela una copia
  **más brillante** de esa misma imagen dentro de una máscara elíptica, y superpone
  un cono volumétrico + un charco de piso dibujados por código. Todo programático:
  **no depende de una imagen “encendida”**.
- **Límite conocido:** este método *ilumina* pero **no genera sombras proyectadas
  nuevas** (la nariz no proyecta sombra, etc.), porque parte de una foto plana.

### Upgrade opcional a luz + sombras reales (idéntico al render de referencia)

Si tenés la escena **encendida** en el **mismo encuadre exacto** que la apagada
(una foto por foco, o una con los tres prendidos), se puede cambiar la capa de
revelado para que use esa imagen ON en vez de brillar la OFF. Como las sombras ya
están “horneadas” en la foto encendida, **aparecen solas**. Es un cambio menor en
el CSS/JS (apuntar `img.src` de la capa `.bc-reveal` a la versión ON). Avisá si
conseguís ese par y lo dejo listo.

---

**Green Ray · Beam Control** — módulo de demostración de apertura de haz.
