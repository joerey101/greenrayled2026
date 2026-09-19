"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArrowLink from "@/components/ArrowLink";
import SectionIntro from "@/components/SectionIntro";
import PerceptionSection from "@/components/PerceptionSection";
import TechSection from "@/components/TechSection";
import BeamControl from "@/components/BeamControl";
import CommercialSection from "@/components/CommercialSection";
import ArchitecturalIntegration from "@/components/ArchitecturalIntegration";
import Miniaturization from "@/components/Miniaturization";
import { useLanguage } from "@/context/LanguageContext";

const lineImages: Record<string, string> = {
  "high-end": "/images/viasono-detail-02.jpg",
  "garden-line": "/images/editorial-01.jpg",
  "architectural": "/images/viasono-detail-03.jpg",
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <Header />

      {/* Hero / Desire */}
      <Hero />

      {/* 01 — Perception of Light */}
      <PerceptionSection />

      {/* 02 — High End / Garden Line / Architectural */}
      <section className="lines-section" id="lineas">
        <div className="section-shell">
          <SectionIntro
            number={t.collections.number}
            label={t.collections.label}
            title={<><span style={{whiteSpace:"nowrap"}}>{t.collections.titleLine1}</span><br />{t.collections.titleLine2}</>}
          />
        </div>
        <div className="line-list">
          {t.collections.items.map((line) => (
            <article className="line-item" key={line.id} id={line.id}>
              <div className="line-image-wrap">
                <Image
                  src={lineImages[line.id] || "/images/viasono-detail-02.jpg"}
                  alt={line.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="cover-image"
                />
              </div>
              <div className="line-copy">
                <div className="line-number">{line.number}</div>
                <h3>{line.title}</h3>
                <p className="line-claim">{line.claim}</p>
                <p>{line.copy}</p>
                <ArrowLink href="#contacto" inverted>{t.collections.explore} {line.title}</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03 — Lighting Technology */}
      <TechSection />

      {/* 04 — Beam Control */}
      <BeamControl />

      {/* 05 — Retail / Hospitality / Commercial */}
      <CommercialSection />

      {/* 06 — Architectural Integration */}
      <ArchitecturalIntegration />

      {/* 07 — Miniaturization */}
      <Miniaturization />

      {/* 08 — Contact / Start a Project */}
      <section className="final-cta" id="contacto">
        <div className="section-shell final-cta-inner">
          <p className="micro-label">{t.finalCta.label}</p>
          <h2>{t.finalCta.titleLine1}<br />{t.finalCta.titleLine2}</h2>
          <ArrowLink href="mailto:info@greenrayled.com" inverted>{t.finalCta.cta}</ArrowLink>
        </div>
      </section>

      <footer className="footer section-shell">
        <div className="footer-brand"><span>GREEN RAY</span><small>{t.footer.subtitle}</small></div>
        <div className="footer-columns">
          <div>
            <small>{t.footer.navigate}</small>
            <a href="#lineas">{t.nav.collections}</a>
            <a href="#tecnologia">{t.nav.technology}</a>
            <a href="#comercial">{t.nav.commercial}</a>
          </div>
          <div>
            <small>{t.footer.region}</small>
            <span>Argentina</span><span>Uruguay</span><span>Latinoamérica</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.regionalTag}</span>
          <span>© {new Date().getFullYear()} {t.footer.rights}</span>
        </div>
      </footer>
    </main>
  );
}
