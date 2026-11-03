import {
  GITHUB_URL,
  LOCATION,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site"

const IMAGEN_OG = `${SITE_URL}/opengraph-image`

// Teléfono en formato E.164 a partir del número de WhatsApp publicado.
const TELEFONO = `+${WHATSAPP_NUMBER}`

const SERVICIOS = [
  {
    nombre: "Desarrollo de software a la medida",
    descripcion:
      "Sistemas internos, paneles de administración y APIs REST en Java y Spring Boot, con frontend en Next.js y TypeScript.",
  },
  {
    nombre: "E-commerce",
    descripcion:
      "Tiendas en línea con catálogo, carrito, pasarelas de pago, inventario y envíos conectados a la operación del negocio.",
  },
  {
    nombre: "Integraciones e IA",
    descripcion:
      "Integración con WhatsApp Business, correo transaccional, OpenAI y automatización de tareas repetitivas.",
  },
  {
    nombre: "DevOps",
    descripcion:
      "Infraestructura como código con Terraform, pipelines CI/CD, monitoreo y optimización de costos en AWS.",
  },
]

/**
 * Nodo de organización. Es un ProfessionalService (subtipo de LocalBusiness)
 * porque el negocio presta servicios y opera desde Bogotá.
 *
 * Solo se declaran datos verificables: no se inventa dirección exacta ni
 * horarios. Añadir streetAddress y openingHours mejoraría el marcado local.
 */
export const serviceOrganization = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  image: IMAGEN_OG,
  logo: IMAGEN_OG,
  telephone: TELEFONO,
  priceRange: "$$",
  currenciesAccepted: "USD, COP",
  areaServed: [
    { "@type": "City", name: "Bogotá" },
    { "@type": "Country", name: "Colombia" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  sameAs: [GITHUB_URL],
  knowsAbout: [
    "Desarrollo de software a la medida",
    "Comercio electrónico",
    "APIs REST",
    "Integración con WhatsApp",
    "Automatización con IA",
    "DevOps",
    "Terraform",
    "AWS",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `Servicios de ${SITE_NAME}`,
    itemListElement: SERVICIOS.map((servicio) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: servicio.nombre,
        description: servicio.descripcion,
        areaServed: { "@type": "City", name: "Bogotá" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  },
}

export const sitioWeb = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "es-CO",
  publisher: { "@id": `${SITE_URL}/#organization` },
}

/** Grafo que se inyecta una sola vez en el layout raíz. */
export const grafoSitio = {
  "@context": "https://schema.org",
  "@graph": [serviceOrganization, sitioWeb],
}

/** Migas de pan para las páginas de caso: habilita el rich result de Google. */
export function migasDePan(items: { nombre: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.nombre,
      item: item.url,
    })),
  }
}

/** Serializa para el <script type="application/ld+json">. */
export function jsonLdScript(datos: unknown) {
  return JSON.stringify(datos).replace(/</g, "\\u003c")
}

export const UBICACION = LOCATION
