"use client";

import ArrowLink from "./ArrowLink";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero hero--editorial" aria-labelledby="hero-title">
      {/* Background: full black with image placeholder */}
      <div className="hero-bg">
        <div className="hero-bg-placeholder" aria-label="Editorial hero photograph — to be provided">
          <div className="hero-bg-placeholder-inner">
            <span className="placeholder-label">FOTOGRAFÍA EDITORIAL</span>
            <span className="placeholder-desc">
              Primerísimo primer plano · Luz de alta precisión · Fondo negro absoluto
            </span>
            <span className="placeholder-size">(2560 × 1440 px mínimo · formato landscape · fondo negro puro)</span>
          </div>
        </div>
        <div className="hero-bg-overlay" />
      </div>

      {/* Content */}
      <div className="hero-editorial-content section-shell">
        <div className="hero-editorial-top">
          <div className="eyebrow">
            <span />
            {t.hero.eyebrow}
          </div>
        </div>

        <div className="hero-editorial-main">
          <h1 id="hero-title" className="hero-editorial-h1">
            {t.hero.titleLine1}
            <br />
            <span className="hero-editorial-h1-muted">{t.hero.titleLine2}</span>
          </h1>
          <p className="hero-editorial-desc">{t.hero.description}</p>
          <ArrowLink href="#percepcion" inverted className="hero-editorial-cta">
            {t.hero.cta}
          </ArrowLink>
        </div>

        {/* Bottom scroll indicator */}
        <div className="hero-editorial-bottom">
          <div className="hero-scroll-indicator">
            <span className="hero-scroll-line" />
            <span className="hero-scroll-label">scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
