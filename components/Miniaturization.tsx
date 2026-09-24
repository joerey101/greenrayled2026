"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Corte "primera palabra / resto" — el <br> solo actúa en mobile (ver globals.css)
function firstWordBreak(text: string) {
  const idx = text.indexOf(" ");
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <br className="mini-break-mobile" />
      {text.slice(idx + 1)}
    </>
  );
}

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
            {firstWordBreak(t.mini.titleLine1)}
            <br />
            <em>{firstWordBreak(t.mini.titleLine2)}</em>
          </h2>
          {/* Imagen solo mobile: aparece debajo del título */}
          <div className="mini-img mini-media-mobile">
            <Image
              src="/images/minitura.jpg"
              alt="Green Ray LED — luminaria lineal miniaturizada sostenida en mano"
              fill
              unoptimized
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
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

      {/* Video full-bleed debajo del módulo — mismo tratamiento (completo, responsive, sin recorte) */}
      <div className="mini-video-row">
        <video
          className="mini-video"
          src="/images/Video%20Green%20Ray%20Led%2003.mp4"
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
