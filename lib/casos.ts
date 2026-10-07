// Casos basados en proyectos reales de github.com/Ed-Pino.
// Nada de esto es trabajo de cliente: son proyectos propios, y así se presentan.

export const CATEGORIAS = [
  "Web",
  "E-commerce",
  "API & Backend",
  "IA",
  "Herramientas",
  "Hackathon",
] as const

export type Categoria = (typeof CATEGORIAS)[number]

export type Caso = {
  slug: string
  titulo: string
  categoria: Categoria
  resumen: string
  descripcion: string
  stack: string[]
  repo: string
  demo?: string
  destacado?: boolean
  /** Sustituye el texto de transparencia por defecto (proyecto propio). */
  transparencia?: string
}

export const casos: Caso[] = [
  {
    slug: "gas-solution",
    titulo: "GasSolution",
    categoria: "E-commerce",
    resumen: "E-commerce de productos y servicios de gas combustible",
    descripcion:
      "Plataforma de comercio electrónico para comercializar productos y servicios de gas combustible, pensada para un negocio con operación física y catálogo propio.",
    stack: ["TypeScript", "E-commerce"],
    repo: "https://github.com/Ed-Pino/GasSolution",
    destacado: true,
  },
  {
    slug: "nexo-crm",
    titulo: "NEXO CRM",
    categoria: "API & Backend",
    resumen: "Integración de CRM con WhatsApp y correo electrónico",
    descripcion:
      "Integración que conecta un CRM con los canales donde realmente ocurre la conversación en Colombia: WhatsApp y correo electrónico, para centralizar el seguimiento de clientes en un solo lugar.",
    stack: ["Java", "WhatsApp API", "Email"],
    repo: "https://github.com/Ed-Pino/NEXO-CRM-intgration-WhatsApp-Email",
    destacado: true,
  },
  {
    slug: "ele-video",
    titulo: "EleVideo",
    categoria: "Herramientas",
    resumen:
      "Edición de video: de formato vertical a horizontal y recorte de duración",
    descripcion:
      "Aplicación para editar video: reencuadra piezas de formato vertical a horizontal y ajusta su duración. Proyecto propio para reaprovechar material grabado en distintos formatos.",
    stack: ["TypeScript"],
    repo: "https://github.com/Ed-Pino/EleVideo",
  },
  {
    slug: "videoboost-pro",
    titulo: "Videoboost Pro",
    categoria: "Herramientas",
    resumen: "Conversor de video con demo pública en vivo",
    descripcion:
      "Herramienta web para convertir y procesar video, desplegada y funcionando en producción. Es uno de los dos proyectos del portafolio con demo abierta al público.",
    stack: ["TypeScript", "Netlify"],
    repo: "https://github.com/Ed-Pino/videoboost-pro",
    demo: "https://pro556.netlify.app/",
    destacado: true,
  },
  {
    slug: "dev-portfolio",
    titulo: "Dev Portfolio",
    categoria: "Web",
    resumen: "Portafolio full-stack con arquitectura lista para la nube",
    descripcion:
      "Portafolio profesional construido como aplicación full-stack: frontend en React con TypeScript y backend en Java Spring Boot exponiendo APIs REST.",
    stack: ["React", "TypeScript", "Java", "Spring Boot", "REST"],
    repo: "https://github.com/Ed-Pino/dev-portfolio",
    demo: "https://dev-portfolio-blush-seven.vercel.app/",
    destacado: true,
  },
  {
    slug: "foro-hub-api",
    titulo: "ForoHub API",
    categoria: "API & Backend",
    resumen: "API REST para plataforma de foro con autenticación JWT",
    descripcion:
      "Backend de una plataforma de discusión: operaciones CRUD completas para temas, respuestas y usuarios, protegidas con autenticación basada en JSON Web Tokens. Tiene interfaz de usuario en un repositorio aparte.",
    stack: ["Java", "Spring Boot", "JWT", "REST"],
    repo: "https://github.com/Ed-Pino/ForoHub_API",
    destacado: true,
  },
  {
    slug: "ecomart",
    titulo: "Ecomart",
    categoria: "IA",
    resumen: "App con OpenAI para crear y clasificar productos",
    descripcion:
      "Aplicación conectada a la API de OpenAI con un chat que asiste la creación de productos, su categorización automática y la generación de imágenes.",
    stack: ["Java", "OpenAI API"],
    repo: "https://github.com/Ed-Pino/Ecomart",
    destacado: true,
  },
  {
    slug: "liter-alura",
    titulo: "LiterAlura",
    categoria: "API & Backend",
    resumen: "Consulta de libros clásicos con persistencia en PostgreSQL",
    descripcion:
      "Aplicación de consola en Java que busca, registra y consulta libros clásicos a través de la API de Gutendex, almacenándolos en una base de datos PostgreSQL con Spring Boot.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Gutendex API"],
    repo: "https://github.com/Ed-Pino/LiterAlura",
  },
  {
    slug: "talent-circle",
    titulo: "TalentCircle",
    categoria: "IA",
    resumen: "Automatización de contenido técnico multicanal",
    descripcion:
      "Proyecto para automatizar la curación y publicación de contenido técnico en varios canales —boletín semanal, LinkedIn, Twitter y el feed interno de cada comunidad— reemplazando el trabajo editorial manual.",
    stack: ["Java", "Automatización"],
    repo: "https://github.com/Ed-Pino/TalentCircle",
  },
  {
    slug: "heavy-trucks",
    titulo: "Heavy Trucks",
    categoria: "E-commerce",
    resumen: "E-commerce de repuestos para camiones",
    descripcion:
      "Catálogo y tienda en línea de repuestos para camiones, orientada a un negocio de venta de autopartes.",
    stack: ["HTML", "CSS"],
    repo: "https://github.com/Ed-Pino/Heavy_Trucks",
  },
  {
    slug: "rent4u",
    titulo: "Rent4u",
    categoria: "Web",
    resumen: "Sitio para empresa de alquiler de vehículos",
    descripcion:
      "Sitio web para una compañía de alquiler de vehículos, con presentación de flota y canales de contacto.",
    stack: ["JavaScript"],
    repo: "https://github.com/Ed-Pino/rent4u",
  },
  {
    slug: "sneakers-store",
    titulo: "Sneakers Store",
    categoria: "E-commerce",
    resumen: "Tienda online de sneakers",
    descripcion:
      "Tienda en línea de sneakers: uno de los primeros proyectos de comercio electrónico del portafolio.",
    stack: ["HTML", "CSS"],
    repo: "https://github.com/Ed-Pino/Sneakers_Store",
  },
  {
    slug: "sentiment-analysis",
    titulo: "Análisis de sentimiento",
    categoria: "Hackathon",
    resumen: "API de análisis de sentimiento — hackathon en equipo (Equipo 66)",
    descripcion:
      "Proyecto de equipo para un hackathon: una API de análisis de sentimiento construida y presentada en notebooks. Participé como integrante del Equipo 66 junto a otros desarrolladores, dentro de un plazo fijo de competencia.",
    stack: ["Python", "Jupyter Notebook"],
    repo: "https://github.com/alexander-fq/hackathon-sentiment-analysis",
    transparencia:
      "Esto no es un proyecto propio ni un trabajo de cliente: es un proyecto de equipo para un hackathon. El repositorio original pertenece a otro integrante del Equipo 66 (por eso este enlace apunta a él) y mi fork de trabajo es github.com/Ed-Pino/Sentiment_Analisis. Lo publico como participación en equipo, con el crédito donde corresponde.",
  },
]

export function getCaso(slug: string) {
  return casos.find((c) => c.slug === slug)
}

export const casosDestacados = casos.filter((c) => c.destacado)
