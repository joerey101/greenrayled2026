"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ArrowLink from "./ArrowLink";

const VERTICALS = [
  { id: "retail", icon: "◈" },
  { id: "gastronomy", icon: "◈" },
  { id: "hospitality", icon: "◈" },
  { id: "corporate", icon: "◈" },
];

// Fotos reales por índice de proyecto (el resto muestra placeholder)
const PROJECT_IMAGES: Record<number, string> = {
  0: "/images/charo_light.webp",     // Charo
  1: "/images/MC%20AOTA.jpg",        // McDonald's
  2: "/images/Viasono%20BA%2002.jpg", // Viasono
};

export default function CommercialSection() {
  const { t } = useLanguage();

  return (
    <section className="commercial-section" id="comercial">
      <div className="commercial-header section-shell">
        <p className="micro-label">{t.commercial.label}</p>
        <h2 className="commercial-title">
          {t.commercial.titleLine1}
          <br />
          <span className="commercial-title-muted">{t.commercial.titleLine2}</span>
        </h2>
        <p className="commercial-intro">{t.commercial.intro}</p>
      </div>

      {/* Verticals list */}
      <div className="commercial-verticals section-shell">
        {t.commercial.verticals.map((v, i) => (
          <div className="commercial-vertical" key={i}>
            <span className="commercial-vertical-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="commercial-vertical-name">{v.name}</span>
            <span className="commercial-vertical-copy">{v.copy}</span>
          </div>
        ))}
      </div>

      {/* Projects grid — placeholders for Charo, McDonald's, etc. */}
      <div className="commercial-projects section-shell">
        {t.commercial.projects.map((proj, i) => {
          const img = PROJECT_IMAGES[i];
          const minHeight = i === 0 ? "600px" : "280px";
          return (
          <div className={`commercial-project-card commercial-project-card-${i + 1}`} key={i}>
            {/* Foto real si existe; si no, placeholder */}
            <div
              className="commercial-project-img"
              style={img ? { position: "relative", minHeight } : undefined}
            >
              {img ? (
                <Image
                  src={img}
                  alt={proj.name}
                  fill
                  quality={85}
                  unoptimized
                  sizes="(max-width: 1050px) 100vw, 60vw"
                  className="cover-image"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="perception-img-placeholder" aria-label={`Project image: ${proj.name}`}>
                  <div className="perception-img-placeholder-inner">
                    <span className="placeholder-label">FOTOGRAFÍA</span>
                    <span className="placeholder-desc">{proj.imageHint}</span>
                    <span className="placeholder-size">(1200 × 800 px · landscape)</span>
                  </div>
                </div>
              )}
            </div>
            <div className="commercial-project-meta">
              <strong>{proj.name}</strong>
              <span>{proj.location}</span>
              <span className="commercial-project-tag">{proj.tag}</span>
            </div>
          </div>
          );
        })}
      </div>

      <div className="commercial-footer section-shell">
        <p className="commercial-validation">{t.commercial.validation}</p>
        <ArrowLink href="#contacto">{t.commercial.cta}</ArrowLink>
      </div>
    </section>
  );
}
