"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArrowLink from "@/components/ArrowLink";
import SectionIntro from "@/components/SectionIntro";
import { featuredProjects } from "@/data/projects";
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
      <Hero />

      {/* 01. Productos / Colecciones */}
      <section className="lines-section" id="lineas">
        <div className="section-shell">
          <SectionIntro
            number={t.collections.number}
            label={t.collections.label}
            title={<>{t.collections.titleLine1}<br />{t.collections.titleLine2}</>}
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

      {/* 02. Proyectos Destacados */}
      <section className="projects section-shell" id="proyectos">
        <div className="projects-head">
          <SectionIntro
            number={t.projects.number}
            label={t.projects.label}
            title={<>{t.projects.titleLine1}<br />{t.projects.titleLine2}</>}
            copy={t.projects.copy}
          />
          <ArrowLink href="#proyectos">{t.projects.viewAll}</ArrowLink>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <Link href={`/proyectos/${project.slug}`} className={`project-card project-card-${index + 1}`} key={project.slug}>
              <div className="project-image">
                <Image src={project.cover} alt={project.title} fill sizes="(max-width: 900px) 100vw, 65vw" className="cover-image" />
              </div>
              <div className="project-meta">
                <div><strong>{project.client}</strong><span>{project.location}</span></div>
                <div><span>{project.category}</span><span>{t.projects.viewProject}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 03. Para Profesionales y Residencial */}
      <section className="audiences section-shell" id="profesionales">
        <article className="audience-block">
          <div className="audience-number">{t.audiences.prof.number}</div>
          <p className="micro-label">{t.audiences.prof.label}</p>
          <h2>{t.audiences.prof.titleLine1}<br />{t.audiences.prof.titleLine2}</h2>
          <p>{t.audiences.prof.copy}</p>
          <ul>
            {t.audiences.prof.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ArrowLink href="#contacto">{t.audiences.prof.cta}</ArrowLink>
        </article>
        <article className="audience-block audience-secondary" id="residencial">
          <div className="audience-number">{t.audiences.res.number}</div>
          <p className="micro-label">{t.audiences.res.label}</p>
          <h2>{t.audiences.res.titleLine1}<br />{t.audiences.res.titleLine2}</h2>
          <p>{t.audiences.res.copy}</p>
          <ul>
            {t.audiences.res.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ArrowLink href="#contacto">{t.audiences.res.cta}</ArrowLink>
        </article>
      </section>

      {/* 04. Inspiración: Light + Material */}
      <section className="material-section" id="material">
        <div className="material-media">
          <Image src="/images/light-material.jpg" alt="Light + Material" fill sizes="100vw" className="cover-image" />
          <div className="material-overlay" />
        </div>
        <div className="material-content section-shell">
          <p className="micro-label">{t.material.label}</p>
          <h2>{t.material.titleLine1}<br />{t.material.titleLine2}</h2>
          <p>{t.material.copy}</p>
          <div className="materials-list">
            {t.material.list.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Green Ray: Manifiesto & Custom Made */}
      <section className="manifesto section-shell" id="green-ray">
        <div className="manifesto-grid">
          <SectionIntro
            number={t.manifesto.number}
            label={t.manifesto.label}
            title={<>{t.manifesto.titleLine1}<br />{t.manifesto.titleLine2}</>}
          />
          <div className="manifesto-copy">
            <p className="lead">{t.manifesto.lead}</p>
            <p>{t.manifesto.copy}</p>
            <ArrowLink href="#profesionales">{t.manifesto.cta}</ArrowLink>
          </div>
        </div>
      </section>

      <section className="custom-made section-shell">
        <div className="custom-aside"><span>{t.customMade.number}</span><span>{t.customMade.label}</span></div>
        <div className="custom-main">
          <h2>{t.customMade.titleLine1}<br />{t.customMade.titleLine2}</h2>
          <p>{t.customMade.copy}</p>
          <p className="custom-claim">{t.customMade.claim}</p>
          <ArrowLink href="#contacto">{t.customMade.cta}</ArrowLink>
        </div>
      </section>

      {/* 06. Contacto */}
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
            <a href="#lineas">{t.nav.products}</a>
            <a href="#proyectos">{t.nav.projects}</a>
            <a href="#profesionales">{t.nav.professionals}</a>
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


