export type Project = {
  slug: string;
  client: string;
  title: string;
  location: string;
  category: string;
  statement: string;
  statementEn?: string;
  description: string;
  descriptionEn?: string;
  scope: string[];
  scopeEn?: string[];
  cover: string;
  images: string[];
  status: "publicable" | "validate";
};

export const projects: Project[] = [
  {
    slug: "viasono-buenos-aires",
    client: "Viasono",
    title: "Viasono Buenos Aires",
    location: "Buenos Aires · Argentina",
    category: "Retail / High End",
    statement: "Luz, materialidad y producto como una sola experiencia.",
    statementEn: "Light, materiality, and product as a unified experience.",
    description:
      "Green Ray acompañó el proyecto Viasono Buenos Aires hasta su entrega y continuó trabajando sobre necesidades adicionales de producto. La iluminación acompaña la arquitectura y la materialidad con una presencia controlada, generando profundidad sin competir con el interiorismo.",
    descriptionEn:
      "Green Ray accompanied the Viasono Buenos Aires project through completion and continued providing bespoke product solutions. The lighting complements the architecture and material texture with controlled presence, creating depth without competing with the interior design.",
    scope: ["Proyecto entregado", "Gestión de producto", "Coordinación", "Adicionales posteriores"],
    scopeEn: ["Delivered project", "Product management", "Coordination", "Post-completion additions"],
    cover: "/images/viasono-hero.jpg",
    images: [
      "/images/viasono-detail-01.jpg",
      "/images/viasono-detail-02.jpg",
      "/images/viasono-detail-03.jpg"
    ],
    status: "publicable"
  }
];

export const featuredProjects = projects.filter((project) => project.status === "publicable");

