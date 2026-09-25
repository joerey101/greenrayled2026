import styles from "./GreenRayFooter.module.css";

type NavItem = { label: string; href: string };

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Percepción", href: "#percepcion" },
  { label: "Colecciones", href: "#lineas" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Control de luz", href: "#beam-control" },
  { label: "Integración", href: "#integracion" },
];

const REGIONS = ["Argentina", "Uruguay", "Latinoamérica"];

export default function GreenRayFooter({
  navItems = DEFAULT_NAV_ITEMS,
  email = "infoarg@greenrayled.com",
}: {
  navItems?: NavItem[];
  email?: string;
}) {
  return (
    <footer className={styles.footer} id="contacto">
      <div className={styles.lightField} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.topLine}>
          <span>GREEN RAY · LIGHTING SYSTEMS</span>
          <span>ARGENTINA · URUGUAY · LATAM</span>
        </div>

        <section className={styles.hero} aria-labelledby="footer-heading">
          <h2 id="footer-heading" className={styles.heading}>
            WHAT SHOULD
            <br />
            <span>LIGHT</span> DO
            <br />
            FOR YOUR SPACE?
          </h2>

          <div className={styles.heroBottom}>
            <p className={styles.intro}>
              Every project begins with a question. We combine light, optics
              and architecture to define the right answer for each space.
            </p>

            <div className={styles.ctaWrap}>
              <a
                className={styles.cta}
                href={`mailto:${email}`}
                aria-label={`Conversemos por email: ${email}`}
              >
                <span>Conversemos</span>
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
            <p>
              Architectural lighting, precision optics and integrated
              solutions for spaces that demand more from light.
            </p>

            <p className={styles.claim}>
              THINK REGIONAL.
              <br />
              WORK LOCAL.
            </p>
          </div>

          <nav className={styles.navColumn} aria-label="Navegación del footer">
            <div className={styles.label}>EXPLORE</div>

            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.navColumn}>
            <div className={styles.label}>REGION</div>

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
