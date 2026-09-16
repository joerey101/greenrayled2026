"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ArchitecturalIntegration() {
  const { t } = useLanguage();

  return (
    <section className="arch-section" id="integracion">
      <div className="arch-inner">
        {/* Left: copy */}
        <div className="arch-copy section-shell">
          <p className="micro-label">{t.arch.label}</p>
          <h2 className="arch-title">
            {t.arch.titleLine1}
            <br />
            <em className="arch-title-em">{t.arch.titleLine2}</em>
          </h2>
          <p className="arch-body">{t.arch.copy}</p>

          <div className="arch-methods">
            {t.arch.methods.map((method, i) => (
              <div className="arch-method" key={i}>
                <span className="arch-method-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="arch-method-name">{method}</span>
              </div>
            ))}
          </div>

          <p className="arch-claim">{t.arch.claim}</p>
        </div>

        {/* Right: image placeholder */}
        <div className="arch-media">
          <div className="perception-img-placeholder arch-placeholder" aria-label="Architectural integration photography">
            <div className="perception-img-placeholder-inner">
              <span className="placeholder-label">FOTOGRAFÍA</span>
              <span className="placeholder-desc">Luminaria embutida / integrada en arquitectura — detalle de desaparición</span>
              <span className="placeholder-size">(1400 × 1000 px · landscape o portrait · negros profundos)</span>
            </div>
          </div>
          <div className="perception-img-placeholder arch-placeholder arch-placeholder--secondary" aria-label="Architectural integration detail">
            <div className="perception-img-placeholder-inner">
              <span className="placeholder-label">FOTOGRAFÍA / ESQUEMA</span>
              <span className="placeholder-desc">Sección / corte técnico de integración</span>
              <span className="placeholder-size">(1400 × 700 px · landscape · puede ser dibujo técnico)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
