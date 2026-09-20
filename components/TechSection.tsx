"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const TechIcon = ({ type }: { type: string }) => {
  if (type === "optic") return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="8" />
      <line x1="24" y1="6" x2="24" y2="14" />
      <line x1="24" y1="34" x2="24" y2="42" />
      <line x1="6" y1="24" x2="14" y2="24" />
      <line x1="34" y1="24" x2="42" y2="24" />
    </svg>
  );
  if (type === "beam") return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
      <polygon points="24,8 40,40 8,40" strokeLinejoin="round" />
      <line x1="24" y1="8" x2="24" y2="40" strokeDasharray="3 3" />
    </svg>
  );
  if (type === "rail") return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="6" y="20" width="36" height="4" rx="1" />
      <circle cx="16" cy="22" r="3" />
      <circle cx="32" cy="22" r="3" />
      <line x1="16" y1="25" x2="16" y2="38" />
      <line x1="32" y1="25" x2="32" y2="38" />
    </svg>
  );
  if (type === "temp") return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M12 36 Q24 24 36 12" />
      <circle cx="12" cy="36" r="3" fill="currentColor" />
      <circle cx="36" cy="12" r="3" fill="currentColor" />
      <text x="10" y="44" fontSize="6" fill="currentColor" stroke="none" fontFamily="monospace">2700K</text>
      <text x="30" y="10" fontSize="6" fill="currentColor" stroke="none" fontFamily="monospace">6500K</text>
    </svg>
  );
  return null;
};

export default function TechSection() {
  const { t } = useLanguage();

  return (
    <section className="tech-section" id="tecnologia">
      <div className="tech-header section-shell">
        <p className="micro-label">{t.tech.label}</p>
        <h2 className="tech-title">
          {t.tech.titleLine1}
          <br />
          <em>{t.tech.titleLine2}</em>
        </h2>
        <p className="tech-intro">{t.tech.intro}</p>
      </div>

      <div className="tech-specs section-shell">
        {t.tech.specs.map((spec, i) => (
          <div className="tech-spec" key={i}>
            <div className="tech-spec-icon">
              <TechIcon type={spec.icon} />
            </div>
            <div className="tech-spec-body">
              <h4>{spec.title}</h4>
              <p>{spec.copy}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="tech-rail section-shell">
        <div className="tech-rail-copy">
          <p className="micro-label">{t.tech.railLabel}</p>
          <h3>{t.tech.railTitle}</h3>
          <p>{t.tech.railCopy}</p>
          <p className="tech-rail-claim">{t.tech.railClaim}</p>
        </div>
        {/* Imagen: sistema de riel — Joyería arquitectónica */}
        <div className="tech-rail-media">
          <div className="tech-rail-img-wrap">
            <Image
              src="/images/joya.webp"
              alt="Joyería arquitectónica — sistema de riel ultradelgado · Green Ray LED"
              fill
              unoptimized
              className="tech-rail-img"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
