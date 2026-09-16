"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Miniaturization() {
  const { t } = useLanguage();

  return (
    <section className="mini-section" id="miniaturizacion">
      <div className="mini-inner section-shell">
        {/* Left: image placeholders */}
        <div className="mini-media">
          {/* Main: hand holding a fixture */}
          <div className="perception-img-placeholder mini-placeholder-main" aria-label="Hand holding miniature fixture">
            <div className="perception-img-placeholder-inner">
              <span className="placeholder-label">FOTOGRAFÍA</span>
              <span className="placeholder-desc">Mano / dedo sosteniendo luminaria miniaturizada — tratada como joya</span>
              <span className="placeholder-size">(1000 × 1400 px · portrait · fondo negro o muy oscuro)</span>
            </div>
          </div>
          {/* Secondary: installed result */}
          <div className="perception-img-placeholder mini-placeholder-side" aria-label="Miniature fixture installed">
            <div className="perception-img-placeholder-inner">
              <span className="placeholder-label">FOTOGRAFÍA</span>
              <span className="placeholder-desc">Resultado lumínico — spot instalado + escala real</span>
              <span className="placeholder-size">(1000 × 800 px · landscape o square)</span>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="mini-copy">
          <p className="micro-label">{t.mini.label}</p>
          <h2 className="mini-title">
            {t.mini.titleLine1}
            <br />
            <em>{t.mini.titleLine2}</em>
          </h2>
          <p className="mini-body">{t.mini.copy}</p>
          <p className="mini-claim">{t.mini.claim}</p>

          <div className="mini-stats">
            {t.mini.stats.map((stat, i) => (
              <div className="mini-stat" key={i}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
