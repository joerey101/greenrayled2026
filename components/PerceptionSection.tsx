"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PerceptionSection() {
  const { t } = useLanguage();

  const concepts = t.perception.concepts;

  return (
    <section className="perception-section" id="percepcion">
      <div className="perception-top section-shell">
        <p className="micro-label perception-label">{t.perception.label}</p>
        <h2 className="perception-title">
          {t.perception.titleLine1}
          <br />
          <span className="perception-title-muted">{t.perception.titleLine2}</span>
        </h2>
      </div>

      <div className="perception-concepts section-shell">
        {concepts.map((c, i) => (
          <div className="perception-concept" key={i}>
            <div className="perception-concept-num">{String(i + 1).padStart(2, "0")}</div>
            <div className="perception-concept-body">
              <h3>{c.verb}</h3>
              <p>{c.copy}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="perception-image-row">
        {/* Placeholder para foto editorial de alto contraste */}
        <div className="perception-img-placeholder" aria-label="Editorial photograph — light revealing depth">
          <div className="perception-img-placeholder-inner">
            <span className="placeholder-label">FOTOGRAFÍA</span>
            <span className="placeholder-desc">Luz revelando profundidad / bordes / volumen</span>
            <span className="placeholder-size">(2400 × 1400 px · landscape · alto contraste)</span>
          </div>
        </div>
        <div className="perception-img-side">
          <div className="perception-quote">
            <blockquote>{t.perception.quote}</blockquote>
          </div>
          {/* Placeholder secundario */}
          <div className="perception-img-placeholder perception-img-placeholder--small" aria-label="Editorial photograph — light and material">
            <div className="perception-img-placeholder-inner">
              <span className="placeholder-label">FOTOGRAFÍA</span>
              <span className="placeholder-desc">Detalle de material + luz</span>
              <span className="placeholder-size">(1200 × 900 px · portrait o square)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
