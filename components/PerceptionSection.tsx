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

      <div className="perception-video-row">
        <video
          className="perception-video"
          src="/images/GLR-light-WEB-FINAL.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}
