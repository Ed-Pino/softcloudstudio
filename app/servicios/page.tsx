import Link from "next/link"
import type { Metadata } from "next"
import { Pricing } from "@/components/pricing"
import { buttonVariants } from "@/components/ui/button"
import { CTA_HREF, LOCATION, STACK, whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Desarrollo de software a la medida en Bogotá",
  description:
    "Desarrollo de software a la medida, e-commerce, integraciones con IA y DevOps en Bogotá. Proyecto cerrado con precio fijo, entregas semanales y 30 días de soporte.",
  alternates: { canonical: "/servicios" },
}

const SERVICIOS = [
  {
    numero: "01",
    titulo: "Software a la medida",
    texto:
      "Sistemas que se ajustan a cómo opera tu empresa, no al revés. Backend, panel de administración y APIs para dejar de sostener procesos en hojas de cálculo.",
    capacidades: ["APIs RESTful y JWT", "PWA y paneles internos", "PostgreSQL", "Java 17 / Spring Boot 3", "Next.js / TypeScript"],
    accent: "border-t-indigo-500",
    tag: "bg-indigo-50/80 text-indigo-700 border-indigo-200/60",
  },
  {
    numero: "02",
    titulo: "E-commerce",
    texto:
      "Tiendas conectadas a la operación real: inventario, pagos y envíos. No una vitrina que hay que mantener a mano.",
    capacidades: ["Catálogo y variantes", "Carrito y checkout", "Pasarelas de pago", "Inventario", "Envíos"],
    accent: "border-t-emerald-500",
    tag: "bg-emerald-50/80 text-emerald-700 border-emerald-200/60",
  },
  {
    numero: "03",
    titulo: "Web development",
    texto:
      "Diseñamos y construimos sitios web modernos, rápidos y enfocados en conversiones. Cada proyecto combina estrategia visual, experiencia de usuario y desarrollo listo para crecer.",
    capacidades: ["Next.js", "TypeScript", "SEO técnico", "Diseño UX/UI", "Landing pages y sitios corporativos"],
    accent: "border-t-cyan-500",
    tag: "bg-cyan-50/80 text-cyan-700 border-cyan-200/60",
  },
  {
    numero: "04",
    titulo: "Integraciones e IA",
    texto:
      "Automatizamos lo manual: mensajes, notificaciones, reportes. Conectamos tus herramientas y sumamos IA donde ahorra tiempo de verdad.",
    capacidades: ["WhatsApp Business", "Correo transaccional", "OpenAI", "Automatización", "Webhooks"],
    accent: "border-t-purple-500",
    tag: "bg-purple-50/80 text-purple-700 border-purple-200/60",
  },
  {
    numero: "05",
    titulo: "DevOps as a Service",
    texto:
      "NUEVO: De git push a producción sin miedo. Infra as Code, CI/CD, monitoreo y optimización de factura AWS.",
    capacidades: ["Terraform / IaC", "CI/CD Pipelines", "Docker", "AWS Cost -30%", "Monitoreo 24/7"],
    accent: "border-t-orange-500",
    tag: "bg-orange-50/80 text-orange-700 border-orange-200/60",
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

export default function ServiciosPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-full max-w-6xl -translate-x-1/2 bg-gradient-to-b from-indigo-100/40 via-sky-50/20 to-transparent blur-3xl" />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-1 text-xs font-medium text-indigo-900">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          <span>Servicios — {LOCATION}</span>
        </div>
        <h1 className="mt-8 max-w-4xl font-serif text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          Servicios de{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            desarrollo y DevOps
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          Estudio full-stack + DevOps: construimos software a la medida, e-commerce e integraciones.
          Backend Java/Spring Boot, frontend Next.js y <strong>DevOps que escala de MVP a millones.</strong>
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "whatsapp", size: "lg", className: "rounded-full px-7 shadow-md" })}>
            Cotizar mi proyecto
          </a>
          <Link href="/trabajo" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-7" })}>
            Ver trabajo
          </Link>
        </div>
      </section>

      <section className="border-t border-zinc-200/80 bg-[#F8F8F7]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Cinco formas en que podemos trabajar juntos</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {SERVICIOS.map((s) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Tecnologías</p>
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
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Cómo trabajamos y cómo cobramos</h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">Las mismas reglas para todos. Por escrito desde el primer mensaje.</p>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CONDICIONES.map((c) => (
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
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> DevOps Rescue disponible
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-3xl font-bold leading-tight md:text-5xl">Cuéntanos qué necesitas y te decimos alcance y precio.</h2>
            <p className="mt-6 max-w-xl text-zinc-400">Respondemos el mismo día hábil. Si tu factura AWS duele, la auditamos gratis y te decimos cuánto puedes ahorrar.</p>
          </div>
          <div className="flex flex-col gap-4 md:items-start">
            <a href={CTA_HREF} target="_blank" className="rounded-full bg-white px-8 py-4 text-center font-semibold text-black hover:bg-zinc-200">Escribir por WhatsApp</a>
            <a href={whatsappLink("Hola, quiero una auditoría DevOps gratis de mi infra")} target="_blank" className="text-sm font-semibold underline decoration-white/30 underline-offset-4 hover:text-zinc-200">Auditoría DevOps gratis</a>
          </div>
        </div>
      </section>
    </main>
  )
}
