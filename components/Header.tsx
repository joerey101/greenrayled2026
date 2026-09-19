"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

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
      <Link href="/" className="brand" aria-label="Green Ray LED">
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
          <a href="mailto:info@greenrayled.com" className="mobile-menu-email">info@greenrayled.com</a>
        </div>
      </div>
    </header>
  );
}
