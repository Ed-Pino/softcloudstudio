export const SITE_NAME = "SoftCloudStudio"
export const SITE_DESCRIPTION =
  "Diseñamos sitios web, apps y sistemas a medida para empresas que quieren vender más, operar mejor y crecer con tecnología sólida."
export const SITE_URL = "https://softcloudstudio.dev"
export const COPYRIGHT_YEAR = new Date().getFullYear()
export const LOCATION = "Bogotá, Colombia"
export const GITHUB_URL = "https://github.com/softcloudstudio"
export const WHATSAPP_NUMBER = "573001234567"
export const WHATSAPP_URL = "https://wa.me/573001234567"
export const CTA_HREF = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hola SoftCloudStudio"
)}`

export const NAV = [
  { href: "/", label: "home" },
  { href: "/trabajo", label: "work" },
  { href: "/servicios/aws-cost-optimization", label: "aws" },
  { href: "/servicios", label: "services" },
  { href: "/nosotros", label: "about" },
  { href: "/contacto", label: "contact" },
] as const

export const STACK = [
  "Java",
  "Python",
  "Spring",
  "JPA",
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
  "Terraform",
  "Docker",
  "CI/CD",
  "Vercel",
] as const

export function whatsappLink(message: string = "Hola SoftCloudStudio") {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}
