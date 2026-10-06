import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE = "https://greenrayled.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Home en ambos idiomas, con alternates hreflang.
  const home: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: `${BASE}/`,
          en: `${BASE}/en`,
        },
      },
    },
  ];

  // Fichas de proyecto publicables, en ambos idiomas.
  const projectEntries: MetadataRoute.Sitemap = projects
    .filter((project) => project.status === "publicable")
    .flatMap((project) => [
      {
        url: `${BASE}/proyectos/${project.slug}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            es: `${BASE}/proyectos/${project.slug}`,
            en: `${BASE}/en/proyectos/${project.slug}`,
          },
        },
      },
    ]);

  return [...home, ...projectEntries];
}
