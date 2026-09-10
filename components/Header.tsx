"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    [t.nav.products, "#lineas"],
    [t.nav.projects, "#proyectos"],
    [t.nav.professionals, "#profesionales"],
    [t.nav.inspiration, "#material"],
    [t.nav.greenRay, "#green-ray"],
  ] as const;

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Green Ray">
        <span className="brand-name">GREEN RAY</span>
        <span className="brand-dot" aria-hidden="true" />
      </Link>

      <nav className="desktop-nav" aria-label={t.nav.products}>
        {navItems.map(([label, href]) => (
          <Link key={label} href={href}>{label}</Link>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-switch" aria-label="Language switch">
          <button
            type="button"
            className={language === "es" ? "active" : ""}
            onClick={() => setLanguage("es")}
            style={{ background: "none", border: "none", font: "inherit", cursor: "pointer", padding: 0 }}
          >
            ES
          </button>
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
            style={{ background: "none", border: "none", font: "inherit", cursor: "pointer", padding: 0 }}
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
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              <small>0{index + 1}</small>{label}
            </Link>
          ))}
          <Link href="#contacto" onClick={() => setOpen(false)}>
            <small>06</small>{t.nav.contact}
          </Link>
        </nav>
      </div>
    </header>
  );
}

