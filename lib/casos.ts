// Casos basados en proyectos reales de github.com/Ed-Pino.
// Nada de esto es trabajo de cliente: son proyectos propios, y así se presentan.

export const CATEGORIAS = [
  "Web",
  "E-commerce",
  "API & Backend",
  "IA",
  "Herramientas",
  "Finanzas",
  "Hackathon",
] as const

export type Categoria = (typeof CATEGORIAS)[number]

export type CategoriaStyle = {
  badge: string
  activeBtn: string
  hoverBtn: string
  dot: string
}

export const CATEGORIA_STYLES: Record<Categoria | "Todos", CategoriaStyle> = {
  Todos: {
    badge: "bg-zinc-100 text-zinc-700 border-zinc-200/80",
    activeBtn: "bg-zinc-900 text-white shadow-sm shadow-zinc-900/20",
    hoverBtn: "hover:border-zinc-400 hover:text-zinc-900",
    dot: "bg-zinc-500",
  },
  "API & Backend": {
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    activeBtn: "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30",
    hoverBtn: "hover:border-indigo-300 hover:text-indigo-600",
    dot: "bg-indigo-500",
  },
  "E-commerce": {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    activeBtn: "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30",
    hoverBtn: "hover:border-emerald-300 hover:text-emerald-600",
    dot: "bg-emerald-500",
  },
  IA: {
    badge: "bg-purple-50 text-purple-700 border-purple-200/80",
    activeBtn: "bg-purple-600 text-white shadow-sm shadow-purple-600/30",
    hoverBtn: "hover:border-purple-300 hover:text-purple-600",
    dot: "bg-purple-500",
  },
  Herramientas: {
    badge: "bg-rose-50 text-rose-700 border-rose-200/80",
    activeBtn: "bg-rose-600 text-white shadow-sm shadow-rose-600/30",
    hoverBtn: "hover:border-rose-300 hover:text-rose-600",
    dot: "bg-rose-500",
  },
  Finanzas: {
    badge: "bg-amber-50 text-amber-800 border-amber-200/80",
    activeBtn: "bg-amber-600 text-white shadow-sm shadow-amber-600/30",
    hoverBtn: "hover:border-amber-300 hover:text-amber-700",
    dot: "bg-amber-500",
  },
  Web: {
    badge: "bg-sky-50 text-sky-700 border-sky-200/80",
    activeBtn: "bg-sky-600 text-white shadow-sm shadow-sky-600/30",
    hoverBtn: "hover:border-sky-300 hover:text-sky-600",
    dot: "bg-sky-500",
  },
  Hackathon: {
    badge: "bg-orange-50 text-orange-700 border-orange-200/80",
    activeBtn: "bg-orange-600 text-white shadow-sm shadow-orange-600/30",
    hoverBtn: "hover:border-orange-300 hover:text-orange-600",
    dot: "bg-orange-500",
  },
}

export function getCategoriaStyle(cat: string): CategoriaStyle {
  return CATEGORIA_STYLES[cat as Categoria] || CATEGORIA_STYLES.Todos
}

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
    slug: "field-flow",
    titulo: "FieldFlow",
    categoria: "API & Backend",
    resumen:
      "Plataforma full-stack y PWA para gestión integral de servicios técnicos",
    descripcion:
      "Plataforma empresarial para gestión y digitalización de servicios técnicos en campo: administración de órdenes de trabajo, seguimiento de estados en tiempo real, checklists dinámicos, captura de evidencia fotográfica y firma digital. Backend robusto en Java 17 y Spring Boot 3 con frontend PWA en React y TypeScript.",
    stack: ["Java 17", "Spring Boot 3", "React", "TypeScript", "PWA"],
    repo: "https://github.com/Ed-Pino/FieldFlow",
    destacado: true,
  },
  {
    slug: "gas-solution",
    titulo: "GasSolution",
    categoria: "E-commerce",
    resumen: "E-commerce de productos y servicios de gas combustible",
    descripcion:
      "Plataforma de comercio electrónico para comercializar productos y servicios de gas combustible, pensada para un negocio con operación física y catálogo propio.",
    stack: ["TypeScript", "React", "E-commerce"],
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
    slug: "videoboost-pro",
    titulo: "Videoboost Pro",
    categoria: "Herramientas",
    resumen: "Conversor y procesador de video web con demo pública en vivo",
    descripcion:
      "Herramienta web moderna para convertir y procesar video, recortar duración y optimizar formatos multimedia, desplegada y funcionando en producción.",
    stack: ["TypeScript", "Video Processing", "Netlify"],
    repo: "https://github.com/Ed-Pino/videoboost-pro",
    demo: "https://pro556.netlify.app/",
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
    stack: ["TypeScript", "Video Processing"],
    repo: "https://github.com/Ed-Pino/EleVideo",
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
    resumen: "API RESTful para foro con autenticación JWT y operaciones CRUD",
    descripcion:
      "Backend robusto de una plataforma de discusión: operaciones CRUD completas para temas, respuestas y usuarios, protegidas con autenticación basada en JSON Web Tokens (JWT) y Spring Boot. Cuenta con interfaz de usuario en un repositorio complementario.",
    stack: ["Java 17", "Spring Boot 3", "JWT", "REST", "PostgreSQL"],
    repo: "https://github.com/Ed-Pino/ForoHub_API",
    destacado: true,
  },
  {
    slug: "ecomart",
    titulo: "Ecomart",
    categoria: "IA",
    resumen: "App de e-commerce con OpenAI para crear y clasificar productos",
    descripcion:
      "Aplicación con backend en Java conectada a la API de OpenAI con un chat interactivo que asiste la creación ágil de productos, categorización automática y generación de imágenes.",
    stack: ["Java", "OpenAI API", "E-commerce"],
    repo: "https://github.com/Ed-Pino/Ecomart",
    destacado: true,
  },
  {
    slug: "credit-card",
    titulo: "CreditCard",
    categoria: "Finanzas",
    resumen: "Sistema de gestión de operaciones de crédito y lógica financiera",
    descripcion:
      "Sistema desarrollado en Java enfocado en la administración de operaciones crediticias, cálculo financiero, validación de transacciones y reglas de negocio.",
    stack: ["Java", "Finanzas", "Lógica de negocio"],
    repo: "https://github.com/Ed-Pino/CreditCard",
  },
  {
    slug: "money-exchange-app",
    titulo: "MoneyExchangeApp",
    categoria: "Finanzas",
    resumen: "Aplicación de cambio y conversión de divisas en tiempo real",
    descripcion:
      "Herramienta en Java para el cálculo y conversión de divisas internacionales consumiendo APIs de tasas de cambio actualizadas y formateo monetario.",
    stack: ["Java", "APIs", "Finanzas"],
    repo: "https://github.com/Ed-Pino/MoneyExchangeApp",
  },
  {
    slug: "liter-alura",
    titulo: "LiterAlura",
    categoria: "API & Backend",
    resumen: "Consulta de libros clásicos con persistencia en PostgreSQL",
    descripcion:
      "Aplicación en Java con Spring Boot que busca, registra y analiza libros clásicos a través de la API de Gutendex, almacenándolos en PostgreSQL con consultas personalizadas.",
    stack: ["Java 17", "Spring Boot 3", "PostgreSQL", "Gutendex API"],
    repo: "https://github.com/Ed-Pino/LiterAlura",
  },
  {
    slug: "talent-circle",
    titulo: "TalentCircle",
    categoria: "IA",
    resumen: "Automatización de contenido técnico y distribución multicanal",
    descripcion:
      "Plataforma de publicación técnica con integración multi-canal (newsletter, LinkedIn, Twitter) y community feed para automatizar la distribución de contenido y reemplazar el trabajo manual.",
    stack: ["Java", "Automatización", "APIs"],
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
    slug: "mokepones",
    titulo: "Mokepones",
    categoria: "Web",
    resumen: "Juego interactivo de combate por turnos en el navegador",
    descripcion:
      "Juego web interactivo desarrollado en JavaScript puro con mecánicas de combate por turnos, selección de personajes y manipulación dinámica del DOM.",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Ed-Pino/Mokepones",
  },
  {
    slug: "sentiment-analysis",
    titulo: "Análisis de sentimiento",
    categoria: "Hackathon",
    resumen: "API y análisis de sentimiento con Machine Learning — hackathon en equipo",
    descripcion:
      "Proyecto de equipo para un hackathon: una API de análisis de sentimiento construida y presentada en notebooks con Machine Learning. Participé como integrante del Equipo 66 junto a otros desarrolladores, dentro de un plazo fijo de competencia.",
    stack: ["Python", "Jupyter Notebook", "Machine Learning"],
    repo: "https://github.com/alexander-fq/hackathon-sentiment-analysis",
    transparencia:
      "Esto no es un proyecto propio ni un trabajo de cliente: es un proyecto de equipo para un hackathon. El repositorio original pertenece a otro integrante del Equipo 66 (por eso este enlace apunta a él) y mi fork de trabajo es github.com/Ed-Pino/Sentiment_Analisis. Lo publico como participación en equipo, con el crédito donde corresponde.",
  },
]

export function getCaso(slug: string) {
  return casos.find((c) => c.slug === slug)
}

export const casosDestacados = casos.filter((c) => c.destacado)
