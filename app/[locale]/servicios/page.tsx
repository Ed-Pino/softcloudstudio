import { Link } from "@/i18n/navigation"
import { getPathname } from "@/i18n/navigation"
import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { Pricing } from "@/components/pricing"
import { buttonVariants } from "@/components/ui/button"
import { LOCATION, STACK, whatsappLink } from "@/lib/site"
import { SITE_URL } from "@/lib/site"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const canonical = getPathname({
    locale: locale as Locale,
    href: "/servicios",
  })

  return {
    title:
      locale === "en"
        ? "Software Development Services | SoftCloud Studio"
        : "Servicios de desarrollo de software | SoftCloud Studio",
    description:
      locale === "en"
        ? "Custom software, e-commerce, integrations, and DevOps for growing businesses."
        : "Desarrollo web, apps, sistemas a medida, integraciones con IA y DevOps para empresas en Bogotá y Colombia.",
    alternates: {
      canonical,
      languages: {
        es: `${SITE_URL}${getPathname({ locale: "es", href: "/servicios" })}`,
        en: `${SITE_URL}${getPathname({ locale: "en", href: "/servicios" })}`,
      },
    },
  }
}

const SERVICIOS = [
  {
    numero: "01",
    titulo: "Software a la medida",
    texto:
      "Sistemas que se adaptan a la forma real de operar tu negocio, sin forzar procesos ni crear fricción interna.",
    capacidades: ["APIs RESTful y JWT", "PWA y paneles internos", "PostgreSQL", "Java", "Spring"],
    accent: "border-t-indigo-500",
    tag: "bg-indigo-50/80 text-indigo-700 border-indigo-200/60",
  },
  {
    numero: "02",
    titulo: "E-commerce",
    texto:
      "Tiendas conectadas a la operación real: inventario, pagos y envíos, con una experiencia de compra clara y confiable.",
    capacidades: ["Catálogo y variantes", "Carrito y checkout", "Pasarelas de pago", "Inventario", "Envíos"],
    accent: "border-t-emerald-500",
    tag: "bg-emerald-50/80 text-emerald-700 border-emerald-200/60",
  },
  {
    numero: "03",
    titulo: "Web development",
    texto:
      "Diseñamos y desarrollamos sitios modernos, rápidos y orientados a conversión, con una presencia digital sólida y profesional.",
    capacidades: ["Next.js", "TypeScript", "SEO técnico", "Diseño UX/UI", "Landing pages y sitios corporativos"],
    accent: "border-t-cyan-500",
    tag: "bg-cyan-50/80 text-cyan-700 border-cyan-200/60",
  },
  {
    numero: "04",
    titulo: "Integraciones e IA",
    texto:
      "Automatizamos tareas repetitivas y conectamos tus herramientas para ahorrar tiempo y mejorar la operación diaria.",
    capacidades: ["WhatsApp Business", "Correo transaccional", "OpenAI", "Automatización", "Webhooks"],
    accent: "border-t-purple-500",
    tag: "bg-purple-50/80 text-purple-700 border-purple-200/60",
  },
  {
    numero: "05",
    titulo: "DevOps as a Service",
    texto:
      "Acompañamos la parte técnica de producción: infraestructura, despliegues, monitoreo y optimización continua del entorno.",
    capacidades: ["Terraform / IaC", "CI/CD Pipelines", "Docker", "AWS Cost -30%", "Monitoreo 24/7"],
    accent: "border-t-orange-500",
    tag: "bg-orange-50/80 text-orange-700 border-orange-200/60",
  },
  {
    numero: "06",
    titulo: "Data Base Management",
    texto:
      "Diseñamos, optimizamos y mantenemos bases de datos seguras, confiables y preparadas para crecer con tu negocio.",
    capacidades: ["PostgreSQL", "Modelado de datos", "Optimización de consultas", "Backups y recuperación", "Seguridad"],
    accent: "border-t-blue-500",
    tag: "bg-indigo-50/80 text-indigo-700 border-indigo-200/60",
  },
]

const CONDICIONES = [
  { titulo: "Proyecto cerrado con precio fijo", texto: "Definimos alcance y precio por escrito antes de escribir código. Lo acordado es lo que pagas." },
  { titulo: "50% al inicio y 50% contra entrega", texto: "Dos pagos: uno para arrancar y otro cuando el proyecto está entregado y funcionando." },
  { titulo: "Sin horas facturadas al aire", texto: "No cobramos bolsas de horas ni recargos imprevistos. Si algo se sale del alcance, lo conversamos antes." },
  { titulo: "Entregas semanales sobre pruebas", texto: "Cada semana ves avance funcionando en un entorno de pruebas. No esperas al final." },
  { titulo: "El código queda en tus repositorios", texto: "Entrega en tus repos. Sin dependencias ni cajas negras: el software es tuyo." },
  { titulo: "30 días de soporte incluidos", texto: "Acompañamos la puesta en marcha y resolvemos ajustes durante 30 días." },
]

const EN_SERVICIOS = [
  {
    numero: "01",
    titulo: "Custom software",
    texto: "Systems shaped around how your business works, without forcing processes or adding friction.",
    capacidades: ["REST APIs and JWT", "PWAs and internal tools", "PostgreSQL", "Java", "Spring"],
    accent: "border-t-indigo-500",
    tag: "bg-indigo-50/80 text-indigo-700 border-indigo-200/60",
  },
  {
    numero: "02",
    titulo: "E-commerce",
    texto: "Online stores connected to real operations: inventory, payments, and shipping.",
    capacidades: ["Catalogs and variants", "Cart and checkout", "Payment gateways", "Inventory", "Shipping"],
    accent: "border-t-emerald-500",
    tag: "bg-emerald-50/80 text-emerald-700 border-emerald-200/60",
  },
  {
    numero: "03",
    titulo: "Web development",
    texto: "Modern, fast, conversion-focused websites that give your brand a strong digital presence.",
    capacidades: ["Next.js", "TypeScript", "Technical SEO", "UX/UI design", "Landing and business websites"],
    accent: "border-t-cyan-500",
    tag: "bg-cyan-50/80 text-cyan-700 border-cyan-200/60",
  },
  {
    numero: "04",
    titulo: "Integrations and AI",
    texto: "We automate repetitive work and connect your tools to save time and improve daily operations.",
    capacidades: ["WhatsApp Business", "Transactional email", "OpenAI", "Automation", "Webhooks"],
    accent: "border-t-purple-500",
    tag: "bg-purple-50/80 text-purple-700 border-purple-200/60",
  },
  {
    numero: "05",
    titulo: "DevOps as a Service",
    texto: "Production support for infrastructure, deployments, monitoring, and continuous optimization.",
    capacidades: ["Terraform / IaC", "CI/CD pipelines", "Docker", "AWS cost optimization", "24/7 monitoring"],
    accent: "border-t-orange-500",
    tag: "bg-orange-50/80 text-orange-700 border-orange-200/60",
  },
  {
    numero: "06",
    titulo: "Data Base Management",
    texto:
      "We design, optimize, and maintain secure, reliable databases built to grow with your business.",
    capacidades: ["PostgreSQL", "Data modeling", "Query optimization", "Backup and recovery", "Security"],
    accent: "border-t-blue-500",
    tag: "bg-indigo-50/80 text-indigo-700 border-indigo-200/60",
  },
]

const EN_CONDICIONES = [
  { titulo: "Fixed project price", texto: "We agree on scope and price in writing before coding starts. The agreed price is what you pay." },
  { titulo: "50% upfront, 50% on delivery", texto: "Two payments: one to start and one when the project is delivered and working." },
  { titulo: "No open-ended hourly billing", texto: "No hour bundles or surprise charges. If scope changes, we discuss it first." },
  { titulo: "Weekly demos", texto: "Every week you see working progress in a test environment. No waiting until the end." },
  { titulo: "Code lives in your repositories", texto: "We deliver to your repositories. No lock-in or black boxes: the software is yours." },
  { titulo: "30 days of included support", texto: "We help with launch and resolve adjustments for 30 days." },
]

export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const english = locale === "en"
  const servicios = english ? EN_SERVICIOS : SERVICIOS
  const condiciones = english ? EN_CONDICIONES : CONDICIONES

  return (
    <main className="flex-1 bg-white">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-full max-w-6xl -translate-x-1/2 bg-gradient-to-b from-indigo-100/40 via-sky-50/20 to-transparent blur-3xl" />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-1 text-xs font-medium text-indigo-900">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          <span>{english ? `Services — ${LOCATION}` : `Servicios — ${LOCATION}`}</span>
        </div>
        <h1 className="mt-8 max-w-4xl font-serif text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          {english
            ? "Software development for businesses ready to grow."
            : "Desarrollo de software para empresas que quieren crecer."}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {english
            ? "Full-stack development and DevOps: custom software, e-commerce, and integrations. Java and Spring backends, Next.js frontends, and "
            : "Estudio full-stack + DevOps: construimos software a la medida, e-commerce e integraciones. Backend con Java y Spring, frontend con Next.js y "}
          <strong>
            {english
              ? "DevOps that scales with your business."
              : "DevOps que escala con tu negocio."}
          </strong>
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={whatsappLink(english ? "Hi, I'd like a software project quote." : "Hola, quiero cotizar un proyecto de software.")} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "whatsapp", size: "lg", className: "rounded-full px-7 shadow-md" })}>
            {english ? "Get a project quote" : "Cotizar mi proyecto"}
          </a>
          <Link href="/trabajo" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-7" })}>
            {english ? "View our work" : "Ver trabajo"}
          </Link>
        </div>
      </section>

      <section className="border-t border-zinc-200/80 bg-[#F8F8F7]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
            {english ? "Six ways we can help" : "Seis maneras de acompañarte"}
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s) => (
              <div key={s.titulo} className={`flex flex-col rounded-[32px] border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${s.accent} border-t-4`}>
                <span className="font-mono text-sm font-bold text-indigo-600">{s.numero}</span>
                <h3 className="mt-4 text-xl font-bold tracking-tight">{s.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{s.texto}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.capacidades.map((c) => (<li key={c} className={`rounded-full border px-3 py-1 text-xs font-medium ${s.tag}`}>{c}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {english ? "Technologies" : "Tecnologías"}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight md:text-4xl">Stack</h2>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {STACK.map((t) => (
              <li key={t} className="rounded-full border border-zinc-200/80 bg-zinc-50 px-3.5 py-1 text-xs font-medium text-zinc-700 hover:border-indigo-300 hover:text-indigo-600">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t bg-zinc-50/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
            {english ? "How we work and how we charge" : "Cómo trabajamos y cómo cobramos"}
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            {english
              ? "The same rules for everyone, in writing from the first message."
              : "Las mismas reglas para todos. Por escrito desde el primer mensaje."}
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {condiciones.map((c) => (
              <div key={c.titulo} className="rounded-[24px] border bg-white p-7 shadow-sm hover:border-indigo-200">
                <h3 className="text-[17px] font-bold tracking-tight">{c.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      <section className="border-t bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {english ? "DevOps Rescue available" : "DevOps Rescue disponible"}
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-3xl font-bold leading-tight md:text-5xl">
              {english
                ? "Tell us what you need. We'll define the scope and price."
                : "Cuéntanos qué necesitas y te decimos alcance y precio."}
            </h2>
            <p className="mt-6 max-w-xl text-zinc-400">
              {english
                ? "We reply within one business day. If your AWS bill is too high, we'll audit it and estimate your savings."
                : "Respondemos el mismo día hábil. Si tu factura AWS duele, la auditamos gratis y te decimos cuánto puedes ahorrar."}
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-start">
            <a href={whatsappLink(english ? "Hi, I'd like to discuss a project." : "Hola, quiero hablar de un proyecto.")} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-8 py-4 text-center font-semibold text-black hover:bg-zinc-200">
              {english ? "Message us on WhatsApp" : "Escribir por WhatsApp"}
            </a>
            <a href={whatsappLink(english ? "Hi, I'd like a free DevOps audit." : "Hola, quiero una auditoría DevOps gratis de mi infraestructura.")} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline decoration-white/30 underline-offset-4 hover:text-white">
              {english ? "Request a free audit" : "Solicitar auditoría gratis"}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
