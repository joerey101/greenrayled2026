"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ArchitecturalIntegration() {
  const { t } = useLanguage();

  return (
    <section className="arch-section" id="integracion">
      <div className="arch-inner">
        {/* Left: copy */}
        <div className="arch-copy section-shell">
          <p className="micro-label">{t.arch.label}</p>
          <h2 className="arch-title">
            {t.arch.titleLine1}
            <br />
            <em className="arch-title-em">{t.arch.titleLine2}</em>
          </h2>
          <p className="arch-body">{t.arch.copy}</p>

          <div className="arch-methods">
            {t.arch.methods.map((method, i) => (
              <div className="arch-method" key={i}>
                <span className="arch-method-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="arch-method-name">{method}</span>
              </div>
            ))}
          </div>

          <p className="arch-claim">{t.arch.claim}</p>
        </div>

        {/* Right: two stacked images (split so mobile shows two blocks) */}
        <div className="arch-media">
          <div className="arch-img-main">
            <Image
              src="/images/122a.jpg"
              alt="Green Ray LED — familia de luminarias lineales y de riel"
              fill
              quality={95}
              sizes="(max-width: 1050px) 100vw, 50vw"
              className="arch-img-real"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="arch-img-main">
            <Image
              src="/images/122b.jpg"
              alt="Green Ray LED — luminarias integradas en cielorraso"
              fill
              quality={95}
              sizes="(max-width: 1050px) 100vw, 50vw"
              className="arch-img-real"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
