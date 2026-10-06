import type { Metadata } from "next";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://greenrayled.com"),
  title: {
    default: "Green Ray LED | Iluminación arquitectónica de alta gama",
    template: "%s | Green Ray LED",
  },
  description:
    "Soluciones de iluminación arquitectónica para proyectos comerciales, hospitality, retail, residenciales e industriales. Diseño, tecnología, Custom Made y servicio regional en Latinoamérica.",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      "es-AR": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    url: "https://greenrayled.com/",
    siteName: "Green Ray LED",
    title: "Green Ray LED | Iluminación arquitectónica de alta gama",
    description:
      "Iluminación arquitectónica de alta gama. Diseño, tecnología y Custom Made con servicio regional en Latinoamérica.",
  },
};

export default function EsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <LanguageProvider initialLanguage="es">{children}</LanguageProvider>
      </body>
    </html>
  );
}
