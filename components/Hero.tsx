"use client";

import Image from "next/image";
import ArrowLink from "./ArrowLink";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span />{t.hero.eyebrow}</div>
        <h1 id="hero-title">{t.hero.titleLine1}<br /><span>{t.hero.titleLine2}</span></h1>
        <p>{t.hero.description}</p>
        <div className="hero-cta-row">
          <ArrowLink href="#profesionales" inverted>{t.hero.ctaProfessional}</ArrowLink>
          <ArrowLink href="#residencial" inverted>{t.hero.ctaResidential}</ArrowLink>
        </div>
        <div className="hero-index">
          <div><small>01</small><strong>Projects</strong></div>
          <div><small>02</small><strong>High End</strong></div>
          <div><small>03</small><strong>Garden Line</strong></div>
        </div>
      </div>

      <div className="hero-media">
        <Image
          src="/images/viasono-hero.jpg"
          alt="Viasono Buenos Aires"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 58vw"
          className="hero-image"
        />
        <div className="hero-media-shade" />
        <div className="project-stamp">
          <strong>Viasono</strong>
          <span>Buenos Aires · Argentina</span>
          <span>{t.hero.projectCategory}</span>
          <ArrowLink href="/proyectos/viasono-buenos-aires" inverted>{t.hero.viewProject}</ArrowLink>
        </div>
        <div className="hero-counter">01 / 05</div>
      </div>
    </section>
  );
}

