"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname() || "/";

  // El idioma lo define la URL: / = español, /en = inglés.
  // El switch NAVEGA a la URL del otro idioma (clave para SEO/hreflang),
  // conservando la misma página (p. ej. /proyectos/x ↔ /en/proyectos/x).
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const basePath = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const esHref = basePath;
  const enHref = basePath === "/" ? "/en" : `/en${basePath}`;
  const current: "es" | "en" = isEn ? "en" : "es";

  // Navegación dura: fuerza el layout correcto (<html lang>) y el SSR del idioma.
  const goTo = (href: string) => {
    if (typeof window !== "undefined") window.location.assign(href);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    [t.nav.perception, "#percepcion"],
    [t.nav.collections, "#lineas"],
    [t.nav.technology, "#tecnologia"],
    [t.nav.beam, "#beam-control"],
    [t.nav.commercial, "#comercial"],
    [t.nav.integration, "#integracion"],
    [t.nav.miniaturization, "#miniaturizacion"],
  ] as const;

  return (
    <header className="site-header">
      <Link href={isEn ? "/en" : "/"} className="brand" aria-label="Green Ray LED">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/greenled-white.svg"
          alt="Green Ray LED"
          className="brand-logo"
          width={183}
          height={22}
        />
      </Link>

      <nav className="desktop-nav" aria-label={t.nav.menu}>
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-switch" role="group" aria-label="Idioma / Language">
          <button
            type="button"
            className={current === "es" ? "active" : ""}
            aria-pressed={current === "es"}
            onClick={() => goTo(esHref)}
          >
            ES
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            className={current === "en" ? "active" : ""}
            aria-pressed={current === "en"}
            onClick={() => goTo(enHref)}
          >
            EN
          </button>
        </div>
        <Link href="#contacto" className="header-contact">{t.nav.contact}</Link>
        <button
          type="button"
          className={`menu-button ${open ? "is-open" : ""}`}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label={t.nav.menu}>
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              <span>{label}</span>
            </Link>
          ))}
          <Link href="#contacto" className="mobile-contact-link" onClick={() => setOpen(false)}>
            <span>{t.nav.contact}</span>
          </Link>
        </nav>
        <div className="mobile-menu-footer">
          <div className="mobile-lang-switch" role="group" aria-label="Idioma / Language">
            <button
              type="button"
              className={current === "es" ? "active" : ""}
              aria-pressed={current === "es"}
              onClick={() => goTo(esHref)}
            >
              ES
            </button>
            <button
              type="button"
              className={current === "en" ? "active" : ""}
              aria-pressed={current === "en"}
              onClick={() => goTo(enHref)}
            >
              EN
            </button>
          </div>
          <a href="mailto:contact@greenrayled.com" className="mobile-menu-email">contact@greenrayled.com</a>
        </div>
      </div>
    </header>
  );
}
