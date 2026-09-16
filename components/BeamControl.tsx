"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const BEAMS = [
  {
    angle: "8°",
    label: "Narrow",
    labelEs: "Estrecho",
    spread: 18,   // % of container width for the beam cone
    intensity: 1,
    description: "Concentración máxima. Haz preciso para acentuar un objeto o superficie con mínima dispersión.",
    descriptionEn: "Maximum concentration. Precise beam to accentuate an object or surface with minimal scatter.",
  },
  {
    angle: "24°",
    label: "Medium",
    labelEs: "Medio",
    spread: 40,
    intensity: 0.82,
    description: "Equilibrio entre concentración y cobertura. Ideal para iluminar zonas de trabajo o mostrar superficies.",
    descriptionEn: "Balance between concentration and coverage. Ideal for task lighting or showcasing surfaces.",
  },
  {
    angle: "36°",
    label: "Wide",
    labelEs: "Amplio",
    spread: 62,
    intensity: 0.65,
    description: "Cobertura generosa. Crea atmósfera difusa y uniforme sobre áreas amplias.",
    descriptionEn: "Generous coverage. Creates soft, even atmosphere over broad areas.",
  },
];

export default function BeamControl() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(1);
  const beam = BEAMS[active];

  return (
    <section className="beam-section" id="beam-control">
      <div className="beam-header section-shell">
        <p className="micro-label">{t.beam.label}</p>
        <h2 className="beam-title">
          {t.beam.titleLine1}
          <br />
          <em>{t.beam.titleLine2}</em>
        </h2>
      </div>

      <div className="beam-stage-wrap section-shell">
        {/* Visual simulation */}
        <div className="beam-stage" aria-label={`Beam aperture ${beam.angle}`}>
          {/* Fixture dot */}
          <div className="beam-fixture">
            <div className="beam-fixture-dot" />
          </div>

          {/* Light cone */}
          <div
            className="beam-cone"
            style={{ "--beam-spread": `${beam.spread}%`, "--beam-opacity": beam.intensity } as React.CSSProperties}
          />

          {/* Pool of light */}
          <div
            className="beam-pool"
            style={{ "--beam-spread": `${beam.spread}%`, "--beam-opacity": beam.intensity } as React.CSSProperties}
          />

          {/* Angle annotation */}
          <div className="beam-angle-label">{beam.angle}</div>
        </div>

        {/* Controls */}
        <div className="beam-controls">
          <div className="beam-selector">
            {BEAMS.map((b, i) => (
              <button
                key={b.angle}
                type="button"
                className={`beam-btn${active === i ? " is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <span className="beam-btn-angle">{b.angle}</span>
                <span className="beam-btn-label">{language === "es" ? b.labelEs : b.label}</span>
              </button>
            ))}
          </div>

          <div className="beam-info">
            <p className="beam-desc">
              {language === "es" ? beam.description : beam.descriptionEn}
            </p>
            <div className="beam-photometry">
              {/* Schematic photometric curve */}
              <svg
                viewBox="0 0 120 80"
                className="photometry-svg"
                aria-label={`Photometric curve ${beam.angle}`}
              >
                <line x1="60" y1="0" x2="60" y2="80" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
                <line x1="0" y1="60" x2="120" y2="60" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
                <path
                  d={getPhotometryCurve(beam.spread)}
                  fill="rgba(153,193,61,.15)"
                  stroke="#99c13d"
                  strokeWidth="1.5"
                  style={{ transition: "d 0.5s ease" }}
                />
                <text x="60" y="74" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,.4)">
                  {beam.angle}
                </text>
              </svg>
              <p className="photometry-label">{t.beam.photometryLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getPhotometryCurve(spread: number): string {
  // Generates a simple polar-curve-style shape based on spread amount
  const s = spread / 100; // normalize 0–1
  const cx = 60, cy = 60;
  const r = 45 * s;
  // Teardrop shape pointing up from center
  const points: [number, number][] = [];
  for (let deg = -90; deg <= 90; deg += 5) {
    const rad = (deg * Math.PI) / 180;
    // Lambertian-ish falloff: cos^n
    const cosV = Math.cos(rad);
    const n = 1 / (s + 0.01); // narrower spread = sharper falloff
    const intensity = Math.max(0, Math.pow(Math.abs(cosV), n));
    const rx = cx + r * intensity * Math.sin(rad);
    const ry = cy - r * intensity * Math.abs(cosV);
    points.push([rx, ry]);
  }
  // Mirror for full curve
  const left = points.map(([x, y]) => [2 * cx - x, y] as [number, number]);
  const all = [...left.reverse(), ...points];
  const d =
    "M " +
    all.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L ") +
    " Z";
  return d;
}
