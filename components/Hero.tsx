"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ArrowLink from "./ArrowLink";
import { useLanguage } from "@/context/LanguageContext";

// Slides del hero. Para sumar más fotos, agregá objetos a este array.
const HERO_SLIDES = [
  {
    src: "/images/hero-labios.png",
    alt: "Green Ray LED — Luz de alta precisión sobre primer plano editorial",
  },
  {
    src: "/images/design-01.jpg",
    alt: "Green Ray LED — Iluminación arquitectónica en living de diseño",
  },
];

const SLIDE_INTERVAL = 6000; // ms entre transiciones

export default function Hero() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (HERO_SLIDES.length < 2) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // respeta usuarios con movimiento reducido
    }
    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero hero--editorial" aria-labelledby="hero-title">
      {/* Background: slider de imágenes editoriales con auto-loop */}
      <div className="hero-bg">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide${i === active ? " is-active" : ""}`}
            aria-hidden={i === active ? undefined : true}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              quality={85}
              sizes="100vw"
              unoptimized
              className="hero-bg-img"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        ))}
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
