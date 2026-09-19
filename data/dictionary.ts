export type Language = "es" | "en";

export type TranslationKeys = {
  nav: {
    menu: string;
    perception: string;
    collections: string;
    technology: string;
    beam: string;
    commercial: string;
    integration: string;
    miniaturization: string;
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
    cta: string;
  };
  perception: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    quote: string;
    concepts: Array<{ verb: string; copy: string }>;
  };
  tech: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    specs: Array<{ icon: string; title: string; copy: string }>;
    railLabel: string;
    railTitle: string;
    railCopy: string;
    railClaim: string;
  };
  beam: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    photometryLabel: string;
    sectors: Array<{ name: string; desc: string }>;
  };
  commercial: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    verticals: Array<{ name: string; copy: string }>;
    projects: Array<{ name: string; location: string; tag: string; imageHint: string }>;
    validation: string;
    cta: string;
  };
  arch: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    copy: string;
    methods: string[];
    claim: string;
  };
  mini: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    copy: string;
    claim: string;
    stats: Array<{ value: string; label: string }>;
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
      menu: "Menú",
      perception: "Percepción",
      collections: "Colecciones",
      technology: "Tecnología",
      beam: "Beam Control",
      commercial: "Comercial",
      integration: "Integración",
      miniaturization: "Miniaturización",
      contact: "Contacto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      eyebrow: "Light designed to be experienced.",
      titleLine1: "LIGHT, DESIGNED",
      titleLine2: "TO BE FELT.",
      description: "Diseñamos la luz. Transformamos la experiencia.",
      ctaProfessional: "Soy profesional / empresa",
      ctaResidential: "Quiero iluminar mi espacio",
      viewProject: "Ver proyecto",
      projectCategory: "Retail / High End",
      cta: "Explore Green Ray",
    },
    perception: {
      label: "01 · Perception of Light",
      titleLine1: "La luz no es solo iluminación.",
      titleLine2: "Es arquitectura invisible.",
      quote: "Light that whispers luxury.",
      concepts: [
        { verb: "Revela", copy: "Saca a la superficie la textura, el relieve y el carácter de cada material." },
        { verb: "Recorta", copy: "Define bordes. Separa el objeto del fondo. Crea presencia donde antes no había nada." },
        { verb: "Profundiza", copy: "Genera distancia dentro del mismo espacio. El volumen aparece donde antes había planitud." },
        { verb: "Dirige", copy: "La mirada sigue la luz. Sin palabras, sin señales. La jerarquía visual la construye el haz." },
        { verb: "Modifica", copy: "Un mismo espacio con diferente luz es un espacio diferente. La percepción cambia completamente." },
        { verb: "Crea atmósfera", copy: "La temperatura del color, la intensidad y la dirección generan estados emocionales concretos." },
      ],
    },
    tech: {
      label: "03 · Lighting Technology",
      titleLine1: "Detrás del diseño,",
      titleLine2: "existe ingeniería.",
      intro: "No ocultamos la parte técnica. La convertimos en contenido visual.",
      specs: [
        { icon: "optic", title: "Óptica de precisión", copy: "Lentes intercambiables con aperturas controladas desde 8° hasta 60°. Cada óptica define un comportamiento lumínico específico." },
        { icon: "beam", title: "Control del haz", copy: "La apertura determina la concentración, el diámetro y la intensidad percibida. No todos los spots son iguales." },
        { icon: "temp", title: "Temperatura de color", copy: "De 2700K a 6500K. Cada espacio requiere una temperatura distinta para revelar correctamente sus materiales." },
        { icon: "rail", title: "Sistemas de riel", copy: "Ultradelgados, magnéticos o de inducción. Flexibilidad total en la instalación con presencia física mínima." },
      ],
      railLabel: "Rail Systems",
      railTitle: "Joyería arquitectónica.",
      railCopy: "Los sistemas de riel de nueva generación permiten reconfigurar la iluminación de un espacio sin obra. Ultradelgados, elegantes, con conexión magnética.",
      railClaim: "Technology as precision. Architecture as canvas.",
    },
    beam: {
      label: "04 · Beam Control",
      titleLine1: "Una fuente de luz.",
      titleLine2: "Infinitas escenas",
      photometryLabel: "Curva fotométrica",
      sectors: [
        { name: "Haz estrecho", desc: "Acento preciso" },
        { name: "Haz medio", desc: "Equilibrio visual" },
        { name: "Haz abierto", desc: "Cobertura ambiental" },
      ],
    },
    commercial: {
      label: "05 · Retail / Hospitality / Commercial",
      titleLine1: "La luz tiene una función",
      titleLine2: "concreta sobre el negocio.",
      intro: "Green Ray no trabaja solamente arquitectura residencial o jardines. Trabaja espacios donde la luz impacta directamente sobre la experiencia de compra, el producto y la percepción de marca.",
      verticals: [
        { name: "Retail", copy: "Iluminación de producto, vitrinas y recorrido. La luz guía la atención hacia lo que debe venderse." },
        { name: "Gastronomía", copy: "Ambiente, materialidad y temperatura. La iluminación transforma la experiencia de cada mesa." },
        { name: "Hotelería", copy: "Desde el lobby hasta las habitaciones. Luz que construye la identidad de la marca." },
        { name: "Corporativo", copy: "Espacios de trabajo, salas de reunión y áreas de representación. Calidad de luz que impacta en la productividad." },
      ],
      projects: [
        { name: "Charo", location: "Buenos Aires · Argentina", tag: "Gastronomía / Hospitality", imageHint: "Ambiente Charo — profundidad, calidez, contraste" },
        { name: "McDonald's", location: "Argentina", tag: "Global Brand / Commercial", imageHint: "Espacio McDonald's — estándar internacional, iluminación comercial" },
        { name: "Viasono", location: "Buenos Aires · Argentina", tag: "Retail / High End", imageHint: "Viasono — producto, materialidad, luz controlada" },
      ],
      validation: "Green Ray trabaja con marcas globales aplicando estándares internacionales de iluminación.",
      cta: "Desarrollar un proyecto comercial",
    },
    arch: {
      label: "06 · Architectural Integration",
      titleLine1: "La luminaria desaparece.",
      titleLine2: "La arquitectura permanece.",
      copy: "La integración completa de la luminaria dentro de la arquitectura es uno de los valores fundamentales de Green Ray. No se trata de poner focos. Se trata de construir luz desde adentro.",
      methods: [
        "Embutida en cielorraso",
        "Enrasada",
        "Sobre riel",
        "Integrada en yeso",
        "Montaje superficial",
        "Sistema magnético",
      ],
      claim: "The fixture disappears. The architecture remains.",
    },
    mini: {
      label: "07 · Miniaturization",
      titleLine1: "Máxima capacidad lumínica.",
      titleLine2: "Mínima presencia física.",
      copy: "Las luminarias de nueva generación alcanzan potencias y calidades de luz extraordinarias en formatos extremadamente reducidos. El tamaño deja de ser una limitación. La precisión se convierte en argumento de diseño.",
      claim: "Small by design. Powerful by engineering.",
      stats: [
        { value: "< 28mm", label: "Diámetro de apertura" },
        { value: "95+", label: "CRI — Índice de reproducción cromática" },
        { value: "8°", label: "Apertura mínima disponible" },
      ],
    },
    manifesto: {
      number: "12",
      label: "Green Ray Philosophy",
      titleLine1: "La luz no sólo ilumina.",
      titleLine2: "Construye la forma en que vivimos un espacio.",
      lead: "Revela materiales. Define volúmenes. Crea profundidad. Dirige la mirada. Construye intimidad.",
      copy: "En Green Ray entendemos la iluminación como parte de la arquitectura: una herramienta para transformar la percepción y la experiencia de cada proyecto.",
      cta: "Conocer Green Ray",
    },
    audiences: {
      prof: {
        number: "11",
        label: "Para profesionales & empresas",
        titleLine1: "Your architecture.",
        titleLine2: "Our light.",
        copy: "Arquitectura, interiorismo, real estate, retail, gastronomía, hotelería, oficinas e industria.",
        items: ["Lighting Design", "Especificación", "Custom Made", "Provisión", "Soporte en obra"],
        cta: "Desarrollar un proyecto",
      },
      res: {
        number: "11",
        label: "Para tu casa",
        titleLine1: "La luz correcta",
        titleLine2: "cambia cómo vivís.",
        copy: "Interiores, jardines, terrazas, galerías, fachadas y espacios de encuentro.",
        items: ["Asesoramiento", "High End", "Garden Line", "Selección de luminarias", "Soluciones a medida"],
        cta: "Iluminar mi espacio",
      },
    },
    collections: {
      number: "02",
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
      number: "06",
      label: "Selected projects",
      titleLine1: "La luz se entiende mejor",
      titleLine2: "cuando sucede.",
      copy: "Una selección de proyectos donde diseño, producto, servicio y ejecución se convierten en una experiencia concreta.",
      viewAll: "Ver todos los proyectos",
      viewProject: "View project ↗",
    },
    material: {
      label: "08 · Light + Material",
      titleLine1: "Light reveals.",
      titleLine2: "Material responds.",
      copy: "La luz cambia según la superficie que encuentra. Diseñamos esa interacción para que cada material conserve su carácter y gane profundidad.",
      list: ["Wood", "Stone", "Metal", "Concrete", "Textile", "Glass", "Vegetation"],
    },
    customMade: {
      number: "10",
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
      menu: "Menu",
      perception: "Perception",
      collections: "Collections",
      technology: "Technology",
      beam: "Beam Control",
      commercial: "Commercial",
      integration: "Integration",
      miniaturization: "Miniaturization",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Light designed to be experienced.",
      titleLine1: "LIGHT, DESIGNED",
      titleLine2: "TO BE FELT.",
      description: "We design light. We transform the experience.",
      ctaProfessional: "I'm a professional / company",
      ctaResidential: "I want to illuminate my space",
      viewProject: "View project",
      projectCategory: "Retail / High End",
      cta: "Explore Green Ray",
    },
    perception: {
      label: "01 · Perception of Light",
      titleLine1: "Light is not just illumination.",
      titleLine2: "It is invisible architecture.",
      quote: "Light that whispers luxury.",
      concepts: [
        { verb: "Reveals", copy: "Brings texture, relief, and the character of each material to the surface." },
        { verb: "Cuts", copy: "Defines edges. Separates object from background. Creates presence where there was nothing." },
        { verb: "Deepens", copy: "Creates distance within the same space. Volume appears where flatness once existed." },
        { verb: "Directs", copy: "The gaze follows light. Without words, without signals. The beam builds visual hierarchy." },
        { verb: "Transforms", copy: "The same space with different light is a different space. Perception changes completely." },
        { verb: "Creates mood", copy: "Color temperature, intensity, and direction generate concrete emotional states." },
      ],
    },
    tech: {
      label: "03 · Lighting Technology",
      titleLine1: "Behind the design,",
      titleLine2: "there is engineering.",
      intro: "We don't hide the technical side. We turn it into visual content.",
      specs: [
        { icon: "optic", title: "Precision optics", copy: "Interchangeable lenses with controlled apertures from 8° to 60°. Each optic defines a specific light behavior." },
        { icon: "beam", title: "Beam control", copy: "Aperture determines concentration, diameter, and perceived intensity. Not all spots are the same." },
        { icon: "temp", title: "Color temperature", copy: "From 2700K to 6500K. Each space requires a different temperature to correctly reveal its materials." },
        { icon: "rail", title: "Rail systems", copy: "Ultra-thin, magnetic, or inductive. Full installation flexibility with minimal physical presence." },
      ],
      railLabel: "Rail Systems",
      railTitle: "Architectural jewelry.",
      railCopy: "Next-generation rail systems allow spaces to be reconfigured without construction. Ultra-thin, elegant, with magnetic connection.",
      railClaim: "Technology as precision. Architecture as canvas.",
    },
    beam: {
      label: "04 · Beam Control",
      titleLine1: "One light source.",
      titleLine2: "Infinite scenes",
      photometryLabel: "Photometric curve",
      sectors: [
        { name: "Narrow beam", desc: "Precise accent" },
        { name: "Medium beam", desc: "Visual balance" },
        { name: "Wide beam", desc: "Ambient coverage" },
      ],
    },
    commercial: {
      label: "05 · Retail / Hospitality / Commercial",
      titleLine1: "Light has a concrete function",
      titleLine2: "within the business.",
      intro: "Green Ray doesn't only work residential architecture or gardens. We work spaces where light directly impacts the shopping experience, the product, and brand perception.",
      verticals: [
        { name: "Retail", copy: "Product, display, and circulation lighting. Light guides attention to what needs to be sold." },
        { name: "Gastronomy", copy: "Mood, materiality, and temperature. Lighting transforms the experience at every table." },
        { name: "Hospitality", copy: "From lobby to rooms. Light that builds brand identity." },
        { name: "Corporate", copy: "Workspaces, meeting rooms, and representation areas. Light quality that impacts productivity." },
      ],
      projects: [
        { name: "Charo", location: "Buenos Aires · Argentina", tag: "Gastronomy / Hospitality", imageHint: "Charo atmosphere — depth, warmth, contrast" },
        { name: "McDonald's", location: "Argentina", tag: "Global Brand / Commercial", imageHint: "McDonald's space — international standards, commercial lighting" },
        { name: "Viasono", location: "Buenos Aires · Argentina", tag: "Retail / High End", imageHint: "Viasono — product, materiality, controlled light" },
      ],
      validation: "Green Ray works with global brands applying international lighting standards.",
      cta: "Develop a commercial project",
    },
    arch: {
      label: "06 · Architectural Integration",
      titleLine1: "The fixture disappears.",
      titleLine2: "The architecture remains.",
      copy: "The complete integration of the fixture within architecture is one of Green Ray's fundamental values. It's not about installing spotlights. It's about building light from within.",
      methods: [
        "Recessed in ceiling",
        "Flush-mounted",
        "On rail",
        "Integrated in plaster",
        "Surface-mounted",
        "Magnetic system",
      ],
      claim: "The fixture disappears. The architecture remains.",
    },
    mini: {
      label: "07 · Miniaturization",
      titleLine1: "Maximum light output.",
      titleLine2: "Minimum physical presence.",
      copy: "Next-generation fixtures achieve extraordinary light power and quality in extremely reduced formats. Size is no longer a limitation. Precision becomes a design argument.",
      claim: "Small by design. Powerful by engineering.",
      stats: [
        { value: "< 28mm", label: "Opening diameter" },
        { value: "95+", label: "CRI — Color rendering index" },
        { value: "8°", label: "Minimum available aperture" },
      ],
    },
    manifesto: {
      number: "12",
      label: "Green Ray Philosophy",
      titleLine1: "Light does not merely illuminate.",
      titleLine2: "It shapes the way we experience space.",
      lead: "It reveals materials. Defines volumes. Creates depth. Directs focus. Builds intimacy.",
      copy: "At Green Ray, we treat lighting as an integral component of architecture: a powerful tool to transform perception and elevate spatial experience.",
      cta: "Discover Green Ray",
    },
    audiences: {
      prof: {
        number: "11",
        label: "For professionals & companies",
        titleLine1: "Your architecture.",
        titleLine2: "Our light.",
        copy: "Architecture, interior design, real estate, retail, gastronomy, hospitality, offices, and industrial.",
        items: ["Lighting Design", "Specification", "Custom Made", "Supply", "On-site support"],
        cta: "Develop a project",
      },
      res: {
        number: "11",
        label: "For your home",
        titleLine1: "The right light",
        titleLine2: "changes how you live.",
        copy: "Interiors, gardens, terraces, loggias, facades, and gathering spaces.",
        items: ["Consulting", "High End", "Garden Line", "Fixture selection", "Bespoke solutions"],
        cta: "Illuminate my space",
      },
    },
    collections: {
      number: "02",
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
      number: "06",
      label: "Selected projects",
      titleLine1: "Light is best understood",
      titleLine2: "when it happens.",
      copy: "A curated selection of projects where design, product, service, and execution turn into a tangible experience.",
      viewAll: "View all projects",
      viewProject: "View project ↗",
    },
    material: {
      label: "08 · Light + Material",
      titleLine1: "Light reveals.",
      titleLine2: "Material responds.",
      copy: "Light adapts to the surface it encounters. We design this interaction so that each material keeps its character while gaining depth.",
      list: ["Wood", "Stone", "Metal", "Concrete", "Textile", "Glass", "Vegetation"],
    },
    customMade: {
      number: "10",
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
