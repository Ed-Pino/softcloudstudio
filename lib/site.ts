export const SITE_URL = "https://softcloudstudio.dev"
export const SITE_NAME = "SoftCloud Studio"
export const SITE_TITLE =
  "SoftCloud Studio | Software a la medida, e-commerce y web en Bogotá"
export const SITE_DESCRIPTION =
  "Estudio de desarrollo en Bogotá. Construimos software a la medida, tiendas online, APIs e integraciones con WhatsApp e IA para empresas en Colombia."

export const LOCATION = "Bogotá, Colombia"
export const COPYRIGHT_YEAR = 2026
export const GITHUB_URL = "https://github.com/Ed-Pino"

export const WHATSAPP_NUMBER = "573142533524"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

export const CTA_HREF = whatsappLink(
  "Hola SoftCloud Studio, quiero cotizar un proyecto."
)

export const NAV = [
  { href: "/trabajo", label: "Trabajo" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const

export const STACK = [
  "Java 17",
  "Spring Boot 3",
  "Spring Data JPA",
  "TypeScript",
  "React",
  "Next.js",
  "PWA",
  "PostgreSQL",
  "REST APIs",
  "JWT",
  "AWS",
  "Oracle Cloud",
  "OpenAI API",
  "WhatsApp API",
  "Tailwind CSS",
  "Docker",
  "CI/CD",
  "Vercel",
] as const
