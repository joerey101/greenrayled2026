"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ArrowLink from "@/components/ArrowLink";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectContent({ project }: { project: Project }) {
  const { language, t } = useLanguage();

  const statement = language === "en" && project.statementEn ? project.statementEn : project.statement;
  const description = language === "en" && project.descriptionEn ? project.descriptionEn : project.description;
  const scope = language === "en" && project.scopeEn ? project.scopeEn : project.scope;

  return (
    <main className="project-page">
      <Header />
      <section className="project-hero">
        <Image src={project.cover} alt={project.title} fill priority sizes="100vw" className="cover-image" />
        <div className="project-hero-overlay" />
        <div className="project-hero-copy section-shell">
          <Link href="/#proyectos" className="back-link">{t.projectDetail.back}</Link>
          <p className="micro-label">{project.client} · {project.location}</p>
          <h1>{project.title}</h1>
          <p className="project-statement">{statement}</p>
        </div>
      </section>

      <section className="project-story section-shell">
        <div>
          <p className="micro-label">{t.projectDetail.scopeLabel}</p>
          <ul>{scope.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h2>{statement}</h2>
          <p>{description}</p>
        </div>
      </section>

      <section className="project-gallery section-shell">
        {project.images.map((src, index) => (
          <div className={`gallery-item gallery-${index + 1}`} key={src}>
            <Image src={src} alt={`${project.title} — ${index + 1}`} fill sizes="(max-width: 900px) 100vw, 70vw" className="cover-image" />
          </div>
        ))}
      </section>

      <section className="project-next section-shell">
        <p className="micro-label">{t.projectDetail.nextLabel}</p>
        <h2>{t.projectDetail.nextTitleLine1}<br />{t.projectDetail.nextTitleLine2}</h2>
        <ArrowLink href="mailto:info@greenrayled.com">{t.projectDetail.startProject}</ArrowLink>
      </section>
    </main>
  );
}
