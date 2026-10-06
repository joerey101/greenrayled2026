import type { Metadata } from "next";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://greenrayled.com"),
  title: {
    default: "Green Ray LED | Architectural Lighting Design",
    template: "%s | Green Ray LED",
  },
  description:
    "High-end architectural lighting for commercial, hospitality, retail, residential and industrial projects. Design, technology, Custom Made and regional service across Latin America.",
  alternates: {
    canonical: "/en",
    languages: {
      es: "/",
      "es-AR": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_AR"],
    url: "https://greenrayled.com/en",
    siteName: "Green Ray LED",
    title: "Green Ray LED | Architectural Lighting Design",
    description:
      "High-end architectural lighting. Design, technology and Custom Made with regional service across Latin America.",
  },
};

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <LanguageProvider initialLanguage="en">{children}</LanguageProvider>
      </body>
    </html>
  );
}
