/* ==========================================================================
   Beam Control — módulo de haces de luz interactivos (vanilla JS, sin deps)
   Uso:
     BeamControl(document.getElementById('mi-contenedor'), {
       image: 'assets/sala-off.png',
       aspect: '1672 / 941',
       sectors: [ ... ]   // ver README
     });
   Cada sector se enciende/apaga de forma independiente al hacer click.
   ========================================================================== */
(function (global) {
  'use strict';

  // Config por defecto (la sala de la demo). Sobreescribible por opts.
  var DEFAULTS = {
    image: 'assets/sala-off.png',
    aspect: '1672 / 941',
    sectors: [
      { deg: '8°',  name: 'Haz estrecho', desc: 'Acento preciso',
        fx: 26, fy: 6, tx: 26, mcy: 74, revW: 9,  revH: 36, bx: 26, by: 90, poolW: 9,  coneW: 5,  coneBot: 68 },
      { deg: '24°', name: 'Haz medio',    desc: 'Equilibrio visual',
        fx: 50, fy: 5, tx: 50, mcy: 72, revW: 15, revH: 34, bx: 50, by: 86, poolW: 16, coneW: 11, coneBot: 70 },
      { deg: '36°', name: 'Haz abierto',  desc: 'Cobertura ambiental',
        fx: 82, fy: 6, tx: 82, mcy: 74, revW: 22, revH: 36, bx: 82, by: 90, poolW: 20, coneW: 18, coneBot: 70 }
    ]
  };

  function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }

  function BeamControl(container, opts) {
    if (!container) throw new Error('BeamControl: contenedor no encontrado');
    opts = opts || {};
    var cfg = {
      image:   opts.image   || DEFAULTS.image,
      aspect:  opts.aspect  || DEFAULTS.aspect,
      sectors: opts.sectors || DEFAULTS.sectors
    };

    container.classList.add('bc-root');
    container.innerHTML = '';

    var stage = el('div', 'bc-stage');
    stage.style.aspectRatio = cfg.aspect;

    var base = el('div', 'bc-base');
    var baseImg = el('img');
    baseImg.src = cfg.image; baseImg.alt = 'Escena en penumbra';
    base.appendChild(baseImg);
    stage.appendChild(base);

    var fx = el('div', 'bc-fx');

    var parts = [];
    cfg.sectors.forEach(function (s, i) {
      // capa de revelado (foto iluminada, enmascarada al objeto+base)
      var rv = el('div', 'bc-reveal');
      var im = el('img'); im.src = cfg.image; im.alt = '';
      rv.appendChild(im);
      var mk = 'radial-gradient(ellipse ' + s.revW + '% ' + s.revH + '% at ' +
               s.tx + '% ' + s.mcy + '%, #fff 0%, #fff 58%, transparent 80%)';
      rv.style.webkitMaskImage = mk; rv.style.maskImage = mk;
      rv.style.webkitMaskRepeat = 'no-repeat'; rv.style.maskRepeat = 'no-repeat';
      stage.appendChild(rv);

      // cono volumétrico (se desvanece antes de tocar el objeto)
      var cn = el('div', 'bc-cone');
      cn.style.left = s.fx + '%'; cn.style.top = s.fy + '%';
      cn.style.width = s.coneW + '%'; cn.style.height = (s.coneBot - s.fy) + '%';
      fx.appendChild(cn);

      // charco de piso (en la base)
      var pl = el('div', 'bc-pool');
      pl.style.left = s.bx + '%'; pl.style.top = s.by + '%';
      pl.style.width = s.poolW + '%'; pl.style.height = (s.poolW * 0.30) + '%';
      fx.appendChild(pl);

      // luminaria (punto de origen)
      var dt = el('div', 'bc-dot');
      dt.style.left = s.fx + '%'; dt.style.top = s.fy + '%';
      fx.appendChild(dt);

      parts.push({ rv: rv, cn: cn, pl: pl, dt: dt, on: false });
    });

    stage.appendChild(fx);

    // divisores entre sectores
    var n = cfg.sectors.length;
    for (var d = 1; d < n; d++) {
      var dv = el('div', 'bc-divider');
      dv.style.left = (100 / n * d) + '%';
      stage.appendChild(dv);
    }

    // columnas clickeables (controles)
    var cols = el('div', 'bc-cols');
    var buttons = [];
    cfg.sectors.forEach(function (s, i) {
      var b = el('button', 'bc-col');
      b.type = 'button';
      b.setAttribute('aria-pressed', 'false');
      b.setAttribute('aria-label', 'Encender haz ' + s.deg + ' ' + s.name);
      b.innerHTML = '<span class="bc-deg">' + s.deg + '</span>' +
                    '<span class="bc-nm">' + s.name + '</span>' +
                    '<span class="bc-ds">' + s.desc + '</span>';
      b.addEventListener('click', function () { toggle(i); });
      cols.appendChild(b);
      buttons.push(b);
    });
    stage.appendChild(cols);
    container.appendChild(stage);

    function glow(i) {
      var lv = [0.8, 0.85, 0.9][Math.min(i, 2)];
      var w = getComputedStyle(container).getPropertyValue('--bc-warm').trim() || '255,240,205';
      return '0 0 ' + (12 + i * 3) + 'px ' + (3 + i) + 'px rgba(' + w + ',' + lv + '),' +
             '0 0 ' + (30 + i * 9) + 'px ' + (10 + i * 3) + 'px rgba(' + w + ',' + (lv - 0.5) + ')';
    }

    function refreshBase() {
      var anyOn = parts.some(function (p) { return p.on; });
      var v = getComputedStyle(container).getPropertyValue(anyOn ? '--bc-base-on' : '--bc-base-idle').trim();
      baseImg.style.filter = 'brightness(' + (v || (anyOn ? 0.24 : 0.38)) + ') contrast(1.06) saturate(.9)';
    }

    function toggle(i) {
      var p = parts[i]; p.on = !p.on;
      p.rv.style.opacity = p.on ? 1 : 0;
      p.cn.style.opacity = p.on ? 1 : 0;
      p.pl.style.opacity = p.on ? 1 : 0;
      p.dt.style.opacity = p.on ? 1 : 0;
      p.dt.style.boxShadow = p.on ? glow(i) : 'none';
      buttons[i].setAttribute('aria-pressed', p.on ? 'true' : 'false');
      refreshBase();
    }

    refreshBase();

    // API pública
    return {
      toggle: toggle,
      set: function (i, on) { if (parts[i].on !== on) toggle(i); },
      allOff: function () { parts.forEach(function (p, i) { if (p.on) toggle(i); }); },
      destroy: function () { container.innerHTML = ''; container.classList.remove('bc-root'); }
    };
  }

  // auto-init: cualquier [data-beam-control] con opciones JSON en data-config
  function auto() {
    document.querySelectorAll('[data-beam-control]').forEach(function (node) {
      var conf = {};
      if (node.getAttribute('data-config')) {
        try { conf = JSON.parse(node.getAttribute('data-config')); } catch (e) {}
      }
      BeamControl(node, conf);
    });
  }
  if (document.readyState !== 'loading') auto();
  else document.addEventListener('DOMContentLoaded', auto);

  global.BeamControl = BeamControl;
})(window);
