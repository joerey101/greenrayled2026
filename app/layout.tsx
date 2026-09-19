import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Green Ray LED | Architectural Lighting Design",
    template: "%s | Green Ray LED",
  },
  description:
    "Soluciones de iluminación arquitectónica para proyectos comerciales, hospitality, retail, residenciales e industriales. Diseño, tecnología, Custom Made y servicio regional en Latinoamérica.",
  metadataBase: new URL("https://greenrayled.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

