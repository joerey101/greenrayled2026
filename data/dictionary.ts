export type Language = "es" | "en";

export type TranslationKeys = {
  nav: {
    products: string;
    projects: string;
    professionals: string;
    inspiration: string;
    greenRay: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaProfessional: string;
    ctaResidential: string;
    viewProject: string;
    projectCategory: string;
  };
  manifesto: {
    number: string;
    label: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    copy: string;
    cta: string;
  };
  audiences: {
    prof: {
      number: string;
      label: string;
      titleLine1: string;
      titleLine2: string;
      copy: string;
      items: string[];
      cta: string;
    };
    res: {
      number: string;
      label: string;
      titleLine1: string;
      titleLine2: string;
      copy: string;
      items: string[];
      cta: string;
    };
  };
  collections: {
    number: string;
    label: string;
    titleLine1: string;
    titleLine2: string;
    explore: string;
    items: Array<{
      id: string;
      number: string;
      title: string;
      claim: string;
      copy: string;
    }>;
  };
  projects: {
    number: string;
    label: string;
    titleLine1: string;
    titleLine2: string;
    copy: string;
    viewAll: string;
    viewProject: string;
  };
  material: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    copy: string;
    list: string[];
  };
  customMade: {
    number: string;
    label: string;
    titleLine1: string;
    titleLine2: string;
    copy: string;
    claim: string;
    cta: string;
  };
  finalCta: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    cta: string;
  };
  footer: {
    subtitle: string;
    navigate: string;
    region: string;
    regionalTag: string;
    rights: string;
  };
  projectDetail: {
    back: string;
    scopeLabel: string;
    nextLabel: string;
    nextTitleLine1: string;
    nextTitleLine2: string;
    startProject: string;
  };
};

export const dictionary: Record<Language, TranslationKeys> = {
  es: {
    nav: {
      products: "Productos",
      projects: "Proyectos",
      professionals: "Profesionales",
      inspiration: "Inspiración",
      greenRay: "Green Ray",
      contact: "Contacto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      eyebrow: "Light designed to be experienced.",
      titleLine1: "Diseñamos la luz.",
      titleLine2: "Transformamos la experiencia.",
      description:
        "Iluminación para proyectos, marcas y espacios que hacés propios. Desde arquitectura, retail y hospitality hasta residencias, jardines y terrazas.",
      ctaProfessional: "Soy profesional / empresa",
      ctaResidential: "Quiero iluminar mi espacio",
      viewProject: "Ver proyecto",
      projectCategory: "Retail / High End",
    },
    manifesto: {
      number: "05",
      label: "Our point of view",
      titleLine1: "La luz no sólo ilumina.",
      titleLine2: "Construye la forma en que vivimos un espacio.",
      lead: "Revela materiales. Define volúmenes. Crea profundidad. Dirige la mirada. Construye intimidad.",
      copy: "En Green Ray entendemos la iluminación como parte de la arquitectura: una herramienta para transformar la percepción y la experiencia de cada proyecto.",
      cta: "Conocer Green Ray",
    },
    audiences: {
      prof: {
        number: "03",
        label: "Para profesionales & empresas",
        titleLine1: "Your architecture.",
        titleLine2: "Our light.",
        copy: "Arquitectura, interiorismo, real estate, retail, gastronomía, hotelería, oficinas e industria.",
        items: ["Lighting Design", "Especificación", "Custom Made", "Provisión", "Soporte en obra"],
        cta: "Desarrollar un proyecto",
      },
      res: {
        number: "03",
        label: "Para tu casa",
        titleLine1: "La luz correcta",
        titleLine2: "cambia cómo vivís.",
        copy: "Interiores, jardines, terrazas, galerías, fachadas y espacios de encuentro.",
        items: ["Asesoramiento", "High End", "Garden Line", "Selección de luminarias", "Soluciones a medida"],
        cta: "Iluminar mi espacio",
      },
    },
    collections: {
      number: "01",
      label: "Collections",
      titleLine1: "Una solución para cada forma",
      titleLine2: "de habitar la luz.",
      explore: "Explorar",
      items: [
        {
          id: "high-end",
          number: "01",
          title: "High End",
          claim: "Light becomes part of the architecture.",
          copy: "Diseño depurado, calidad de luz y precisión óptica para espacios donde cada detalle importa.",
        },
        {
          id: "garden-line",
          number: "02",
          title: "Garden Line",
          claim: "Light the landscape. Keep the night.",
          copy: "Iluminación exterior en capas para jardines, terrazas, fachadas, senderos y paisajes.",
        },
        {
          id: "architectural",
          number: "03",
          title: "Architectural",
          claim: "The fixture disappears. The architecture remains.",
          copy: "Soluciones que se integran al espacio y dirigen la atención hacia aquello que realmente importa.",
        },
      ],
    },
    projects: {
      number: "02",
      label: "Selected projects",
      titleLine1: "La luz se entiende mejor",
      titleLine2: "cuando sucede.",
      copy: "Una selección de proyectos donde diseño, producto, servicio y ejecución se convierten en una experiencia concreta.",
      viewAll: "Ver todos los proyectos",
      viewProject: "View project ↗",
    },
    material: {
      label: "04 · Light + Material",
      titleLine1: "Light reveals.",
      titleLine2: "Material responds.",
      copy: "La luz cambia según la superficie que encuentra. Diseñamos esa interacción para que cada material conserve su carácter y gane profundidad.",
      list: ["Wood", "Stone", "Metal", "Concrete", "Textile", "Vegetation"],
    },
    customMade: {
      number: "05",
      label: "Custom Made",
      titleLine1: "Algunos proyectos necesitan",
      titleLine2: "una solución que todavía no existe.",
      copy: "Adaptamos dimensiones, ópticas, temperatura de color, potencia, terminaciones e integración según el proyecto.",
      claim: "Designed around your project.",
      cta: "Desarrollar una solución",
    },

    finalCta: {
      label: "Every project starts with a conversation.",
      titleLine1: "What should light do",
      titleLine2: "for your space?",
      cta: "Empezar un proyecto",
    },
    footer: {
      subtitle: "Lighting Design · Technology · Experience",
      navigate: "Navegación",
      region: "Región",
      regionalTag: "Think regional. Work local.",
      rights: "Green Ray LED",
    },
    projectDetail: {
      back: "← Proyectos",
      scopeLabel: "Alcance del proyecto",
      nextLabel: "Siguiente paso",
      nextTitleLine1: "Every project starts",
      nextTitleLine2: "with a conversation.",
      startProject: "Iniciar un proyecto",
    },
  },
  en: {
    nav: {
      products: "Products",
      projects: "Projects",
      professionals: "Professionals",
      inspiration: "Inspiration",
      greenRay: "Green Ray",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Light designed to be experienced.",
      titleLine1: "We design light.",
      titleLine2: "We transform the experience.",
      description:
        "Lighting for projects, brands, and spaces you make your own. From architecture, retail, and hospitality to residences, gardens, and terraces.",
      ctaProfessional: "I'm a professional / company",
      ctaResidential: "I want to illuminate my space",
      viewProject: "View project",
      projectCategory: "Retail / High End",
    },
    manifesto: {
      number: "05",
      label: "Our point of view",
      titleLine1: "Light does not merely illuminate.",
      titleLine2: "It shapes the way we experience space.",
      lead: "It reveals materials. Defines volumes. Creates depth. Directs focus. Builds intimacy.",
      copy: "At Green Ray, we treat lighting as an integral component of architecture: a powerful tool to transform perception and elevate spatial experience.",
      cta: "Discover Green Ray",
    },
    audiences: {
      prof: {
        number: "03",
        label: "For professionals & companies",
        titleLine1: "Your architecture.",
        titleLine2: "Our light.",
        copy: "Architecture, interior design, real estate, retail, gastronomy, hospitality, offices, and industrial.",
        items: ["Lighting Design", "Specification", "Custom Made", "Supply", "On-site support"],
        cta: "Develop a project",
      },
      res: {
        number: "03",
        label: "For your home",
        titleLine1: "The right light",
        titleLine2: "changes how you live.",
        copy: "Interiors, gardens, terraces, loggias, facades, and gathering spaces.",
        items: ["Consulting", "High End", "Garden Line", "Fixture selection", "Bespoke solutions"],
        cta: "Illuminate my space",
      },
    },
    collections: {
      number: "01",
      label: "Collections",
      titleLine1: "A solution for every way",
      titleLine2: "of inhabiting light.",
      explore: "Explore",
      items: [
        {
          id: "high-end",
          number: "01",
          title: "High End",
          claim: "Light becomes part of the architecture.",
          copy: "Refined design, light quality, and optical precision for spaces where every detail matters.",
        },
        {
          id: "garden-line",
          number: "02",
          title: "Garden Line",
          claim: "Light the landscape. Keep the night.",
          copy: "Layered exterior lighting for gardens, terraces, facades, pathways, and landscapes.",
        },
        {
          id: "architectural",
          number: "03",
          title: "Architectural",
          claim: "The fixture disappears. The architecture remains.",
          copy: "Solutions that seamlessly integrate into the space and direct attention to what truly matters.",
        },
      ],
    },
    projects: {
      number: "02",
      label: "Selected projects",
      titleLine1: "Light is best understood",
      titleLine2: "when it happens.",
      copy: "A curated selection of projects where design, product, service, and execution turn into a tangible experience.",
      viewAll: "View all projects",
      viewProject: "View project ↗",
    },
    material: {
      label: "04 · Light + Material",
      titleLine1: "Light reveals.",
      titleLine2: "Material responds.",
      copy: "Light adapts to the surface it encounters. We design this interaction so that each material keeps its character while gaining depth.",
      list: ["Wood", "Stone", "Metal", "Concrete", "Textile", "Vegetation"],
    },
    customMade: {
      number: "05",
      label: "Custom Made",
      titleLine1: "Some projects require",
      titleLine2: "a solution that does not exist yet.",
      copy: "We tailor dimensions, optics, color temperature, power, finishes, and architectural integration to match your vision.",
      claim: "Designed around your project.",
      cta: "Develop a bespoke solution",
    },

    finalCta: {
      label: "Every project starts with a conversation.",
      titleLine1: "What should light do",
      titleLine2: "for your space?",
      cta: "Start a project",
    },
    footer: {
      subtitle: "Lighting Design · Technology · Experience",
      navigate: "Navigation",
      region: "Region",
      regionalTag: "Think regional. Work local.",
      rights: "Green Ray LED",
    },
    projectDetail: {
      back: "← Projects",
      scopeLabel: "Project scope",
      nextLabel: "Next step",
      nextTitleLine1: "Every project starts",
      nextTitleLine2: "with a conversation.",
      startProject: "Start a project",
    },
  },
};

