"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

/* ──────────────────────────────────────────────────────────────────────────
   Beam Control — módulo de haces de luz interactivos (Green Ray)
   Escena en penumbra (beam-scene-off.webp). Cada columna enciende su haz de
   forma independiente: revela el objeto (máscara elíptica sobre la misma
   escena, más brillante) + cono volumétrico + charco en la base.
   Geometría por sector en % del contenedor; textos vía diccionario (i18n).
   ────────────────────────────────────────────────────────────────────────── */

const SCENE = "/images/beam-scene-off.webp";
const ASPECT = "1672 / 941";

// Geometría de cada haz, en % del contenedor. Origen arriba-izquierda.
// fx/fy = luminaria · tx/mcy + revW/revH = zona revelada · bx/by + poolW = charco
const SECTORS = [
  { deg: "8°",  fx: 26.4, fy: 6, tx: 26.4, mcy: 62, revW: 8,  revH: 26, bx: 26.4, by: 86.8, poolW: 9,  coneW: 4,  coneBot: 68 },
  { deg: "24°", fx: 52,   fy: 5, tx: 52,   mcy: 65, revW: 14, revH: 30, bx: 52,   by: 86.8, poolW: 15, coneW: 10, coneBot: 76 },
  { deg: "36°", fx: 80,   fy: 6, tx: 80,   mcy: 64, revW: 19, revH: 34, bx: 80,   by: 86.8, poolW: 21, coneW: 17, coneBot: 74 },
] as const;

type Sector = (typeof SECTORS)[number];

function revealMask(s: Sector) {
  return `radial-gradient(ellipse ${s.revW}% ${s.revH}% at ${s.tx}% ${s.mcy}%, #fff 0%, #fff 58%, transparent 80%)`;
}

function dotGlow(i: number) {
  const lv = [0.8, 0.85, 0.9][Math.min(i, 2)];
  return (
    `0 0 ${12 + i * 3}px ${3 + i}px rgba(var(--bc-warm),${lv}),` +
    `0 0 ${30 + i * 9}px ${10 + i * 3}px rgba(var(--bc-warm),${lv - 0.5})`
  );
}

export default function BeamControl() {
  const { t, language } = useLanguage();
  const [on, setOn] = useState<boolean[]>([false, false, false]);
  const anyOn = on.some(Boolean);

  const toggle = (i: number) =>
    setOn((prev) => prev.map((v, k) => (k === i ? !v : v)));

  const sectors = t.beam.sectors;

  return (
    <section className="beam-section" id="beam-control" aria-labelledby="beam-title">
      <div className="beam-header section-shell">
        <p className="micro-label">{t.beam.label}</p>
        <h2 className="beam-title" id="beam-title">
          {t.beam.titleLine1}
          <br />
          <em>{t.beam.titleLine2}</em>
        </h2>
      </div>

      <div className="section-shell">
        <div className="bc-root">
          <div className="bc-stage" style={{ aspectRatio: ASPECT }}>
            {/* Base: escena en penumbra */}
            <div
              className="bc-base"
              style={{
                filter: `brightness(${anyOn ? 0.24 : 0.38}) contrast(1.06) saturate(.9)`,
              }}
            >
              <Image
                src={SCENE}
                alt="Green Ray — escena de galería en penumbra"
                fill
                unoptimized
                sizes="(max-width: 1050px) 100vw, 1200px"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Capas de revelado (una por haz) */}
            {SECTORS.map((s, i) => (
              <div
                key={`rev-${s.deg}`}
                className="bc-reveal"
                aria-hidden="true"
                style={{
                  opacity: on[i] ? 1 : 0,
                  maskImage: revealMask(s),
                  WebkitMaskImage: revealMask(s),
                }}
              >
                <Image
                  src={SCENE}
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 1050px) 100vw, 1200px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}

            {/* Conos, charcos y luminarias */}
            <div className="bc-fx" aria-hidden="true">
              {SECTORS.map((s, i) => (
                <div key={`fx-${s.deg}`}>
                  <div
                    className="bc-cone"
                    style={{
                      left: `${s.fx}%`,
                      top: `${s.fy}%`,
                      width: `${s.coneW}%`,
                      height: `${s.coneBot - s.fy}%`,
                      opacity: on[i] ? 1 : 0,
                    }}
                  />
                  <div
                    className="bc-pool"
                    style={{
                      left: `${s.bx}%`,
                      top: `${s.by}%`,
                      width: `${s.poolW}%`,
                      height: `${s.poolW * 0.3}%`,
                      opacity: on[i] ? 1 : 0,
                    }}
                  />
                  <div
                    className="bc-dot"
                    style={{
                      left: `${s.fx}%`,
                      top: `${s.fy}%`,
                      opacity: on[i] ? 1 : 0,
                      boxShadow: on[i] ? dotGlow(i) : "none",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Divisores */}
            {SECTORS.slice(1).map((_, i) => (
              <div
                key={`div-${i}`}
                className="bc-divider"
                aria-hidden="true"
                style={{ left: `${(100 / SECTORS.length) * (i + 1)}%` }}
              />
            ))}

            {/* Controles (columnas clickeables) */}
            <div className="bc-cols">
              {SECTORS.map((s, i) => (
                <button
                  key={`col-${s.deg}`}
                  type="button"
                  className="bc-col"
                  aria-pressed={on[i]}
                  aria-label={`${language === "es" ? "Encender" : "Toggle"} ${s.deg} — ${sectors[i].name}`}
                  onClick={() => toggle(i)}
                >
                  <span className="bc-deg">{s.deg}</span>
                  <span className="bc-nm">{sectors[i].name}</span>
                  <span className="bc-ds">{sectors[i].desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
