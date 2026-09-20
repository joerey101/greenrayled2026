"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Miniaturization() {
  const { t } = useLanguage();

  return (
    <section className="mini-section" id="miniaturizacion">
      <div className="mini-inner section-shell">
        {/* Left: image */}
        <div className="mini-media">
          <div className="mini-img">
            <Image
              src="/images/minitura.jpg"
              alt="Green Ray LED — luminaria lineal miniaturizada sostenida en mano"
              fill
              unoptimized
              sizes="(max-width: 1050px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
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
