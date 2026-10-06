"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { dictionary, Language, TranslationKeys } from "@/data/dictionary";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLanguage = "es",
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  // El idioma lo determina la RUTA (/ = es, /en = en), no localStorage.
  // Así el HTML del servidor ya viene en el idioma correcto (SEO) y no hay
  // desajuste de hidratación. El switch del header navega entre URLs.
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  // Guardamos la preferencia solo como conveniencia (no altera el render SSR).
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("greenray_lang", initialLanguage);
      } catch {
        /* no-op */
      }
    }
  }, [initialLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("greenray_lang", lang);
      } catch {
        /* no-op */
      }
    }
  };

  const t = dictionary[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
