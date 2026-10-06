"use client";

import styles from "./GreenRayFooter.module.css";
import { useLanguage } from "@/context/LanguageContext";

const REGIONS = ["Argentina", "Uruguay", "Latinoamérica"];

export default function GreenRayFooter({
  email = "contact@greenrayled.com",
}: {
  email?: string;
}) {
  const { t } = useLanguage();

  // Nav del footer: mismas rutas que el header, con etiquetas traducidas.
  const navItems = [
    { label: t.nav.perception, href: "#percepcion" },
    { label: t.nav.collections, href: "#lineas" },
    { label: t.nav.technology, href: "#tecnologia" },
    { label: t.nav.beam, href: "#beam-control" },
    { label: t.nav.integration, href: "#integracion" },
  ];

  return (
    <footer className={styles.footer} id="contacto">
      <div className={styles.lightField} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.topLine}>
          <span>{t.footer.systems}</span>
          <span>{t.footer.regionsTop}</span>
        </div>

        <section className={styles.hero} aria-labelledby="footer-heading">
          <h2 id="footer-heading" className={styles.heading}>
            {t.footer.headingA} <span>{t.footer.headingAccent}</span> {t.footer.headingB}
          </h2>

          <div className={styles.heroBottom}>
            <p className={styles.intro}>{t.footer.intro}</p>

            <div className={styles.ctaWrap}>
              <a
                className={styles.cta}
                href={`mailto:${email}`}
                aria-label={`${t.footer.cta} — ${email}`}
              >
                <span>{t.footer.cta}</span>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.meta}>
          <div className={styles.brand}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/greenled-white.svg"
              alt="Green Ray LED"
              className={styles.brandLogo}
              width={196}
              height={24}
            />
            <p>{t.footer.brand}</p>

            <p className={styles.claim}>
              {t.footer.claimL1}
              <br />
              {t.footer.claimL2}
            </p>
          </div>

          <nav className={styles.navColumn} aria-label={t.footer.explore}>
            <div className={styles.label}>{t.footer.explore}</div>

            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.navColumn}>
            <div className={styles.label}>{t.footer.region}</div>

            {REGIONS.map((region) => (
              <span key={region}>{region}</span>
            ))}

            {/* © + redes: al fondo de la columna, a la misma altura que "WORK LOCAL." */}
            <div className={styles.legal}>
              <span>© 2026 GREEN RAY LED</span>

              <div className={styles.social}>
                <a href="#" aria-label="Instagram de Green Ray LED">
                  INSTAGRAM ↗
                </a>

                <a href="#" aria-label="LinkedIn de Green Ray LED">
                  LINKEDIN ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
