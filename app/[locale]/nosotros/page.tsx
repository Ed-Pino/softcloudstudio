import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { getPathname } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import {
  GITHUB_URL,
  LOCATION,
  SITE_NAME,
  STACK,
  whatsappLink,
} from "@/lib/site"
import { SITE_URL } from "@/lib/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const canonical = getPathname({ locale: locale as Locale, href: "/nosotros" })
  return {
    title:
      locale === "en"
        ? "About SoftCloud Studio | Software Development in Bogotá"
        : "Sobre SoftCloud Studio | Desarrollo de software en Bogotá",
    description:
      locale === "en"
        ? "Meet the team, process, and technology behind our custom software, e-commerce, and integrations."
        : "Conoce el equipo, proceso y tecnologías con las que construimos software a la medida, e-commerce e integraciones.",
    alternates: {
      canonical,
      languages: {
        es: `${SITE_URL}${getPathname({ locale: "es", href: "/nosotros" })}`,
        en: `${SITE_URL}${getPathname({ locale: "en", href: "/nosotros" })}`,
      },
    },
  }
}

const PERFIL = [
  "Especialista en backend con Java 17, Spring Boot 3 y Spring Data JPA: APIs RESTful, persistencia en PostgreSQL, autenticación segura con JWT y gestión de roles.",
  "Frontend moderno con React, TypeScript y Next.js: interfaces limpias y Progressive Web Apps (PWA) orientadas a la experiencia de usuario.",
  "Plataformas de e-commerce y finanzas: catálogos transaccionales, operaciones de crédito, órdenes de trabajo y control operativo de campo.",
  "Integración de APIs e IA: automatización con OpenAI, canales de WhatsApp Business y correo para eliminar trabajo manual.",
  "Procesamiento multimedia y herramientas de video: conversión de formatos, recorte y optimización de contenido.",
  "Despliegue y arquitectura en la nube sobre AWS y Oracle Cloud.",
]

const PROCESO = [
  {
    paso: "01",
    titulo: "Diagnóstico",
    texto:
      "Conversamos sobre el problema real, el negocio y lo que ya existe. De ahí sale un alcance honesto, sin inflarlo para vender más.",
  },
  {
    paso: "02",
    titulo: "Propuesta cerrada",
    texto:
      "Entregables, fecha y precio por escrito: proyecto cerrado, 50% al inicio y 50% contra entrega. Sin horas facturadas al aire.",
  },
  {
    paso: "03",
    titulo: "Construcción con entregas semanales",
    texto:
      "Cada semana ves avance funcionando sobre un entorno de pruebas. Ajustamos sobre lo que se ve, no sobre un resumen.",
  },
  {
    paso: "04",
    titulo: "Entrega y soporte",
    texto:
      "El código queda en tus repositorios y 30 días de soporte van incluidos para la puesta en marcha.",
  },
]

const EN_PERFIL = [
  "Backend engineering with Java, Spring, and Spring Data JPA: REST APIs, PostgreSQL persistence, secure JWT authentication, and role management.",
  "Modern frontend development with React, TypeScript, and Next.js, including clean interfaces and user-focused Progressive Web Apps.",
  "E-commerce and finance platforms: transactional catalogs, credit operations, work orders, and field operations management.",
  "API and AI integrations: OpenAI automation, WhatsApp Business, and email to reduce manual work.",
  "Media processing and video tools: format conversion, trimming, and content optimization.",
  "Cloud deployment and architecture on AWS and Oracle Cloud.",
]

const EN_PROCESO = [
  { paso: "01", titulo: "Discovery", texto: "We discuss the real problem, the business, and what already exists. That becomes an honest scope, not an inflated sales pitch." },
  { paso: "02", titulo: "Fixed proposal", texto: "Deliverables, timeline, and price in writing: 50% to start and 50% on delivery. No open-ended hourly billing." },
  { paso: "03", titulo: "Weekly delivery", texto: "Every week you see working progress in a test environment. We refine what you can see, not a status summary." },
  { paso: "04", titulo: "Delivery and support", texto: "The code stays in your repositories, with 30 days of included launch support." },
]

export default async function NosotrosPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const english = locale === "en"
  const perfil = english ? EN_PERFIL : PERFIL
  const proceso = english ? EN_PROCESO : PROCESO

  return (
    <main className="relative flex-1">
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-full max-w-6xl -translate-x-1/2 bg-gradient-to-b from-indigo-100/40 via-sky-50/20 to-transparent blur-3xl" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-1 text-xs font-medium text-indigo-900 shadow-xs">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          <span>
            {english ? `Software studio — ${LOCATION}` : `Estudio de desarrollo — ${LOCATION}`}
          </span>
        </div>
        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          {english ? "About" : "Sobre"}{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            SoftCloud Studio
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {english
            ? `${SITE_NAME} is a software studio in Bogotá. We are a small team without account layers or middlemen: the person who scopes the work is the person who writes the code, which shows in our timelines and technical decisions.`
            : `${SITE_NAME} es un estudio de desarrollo en Bogotá. Somos pocos, sin intermediarios y sin capas de cuenta: quien propone el alcance es quien escribe el código, y eso se nota en los tiempos y en las decisiones técnicas.`}
        </p>
      </section>

      {/* PERFIL */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {english ? "Team & Experience" : "Equipo & Experiencia"}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {english ? "Who is behind the work" : "Quién está detrás"}
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                {english ? "Ed Pino — full-stack developer" : "Ed Pino — desarrollador full-stack"}
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-600">
                {english
                  ? "Full-stack developer in Bogotá focused on Java, Spring, and Spring Data JPA, with a modern React and TypeScript frontend. Experienced in operations platforms, PWAs, e-commerce, media processing, and OpenAI and WhatsApp integrations."
                  : "Desarrollador full-stack en Bogotá especializado en el ecosistema Java, Spring y Spring Data JPA y frontend moderno con React y TypeScript. Con experiencia en plataformas de gestión operativa (PWA), e-commerce, procesamiento multimedia e integraciones avanzadas con OpenAI y WhatsApp."}
              </p>
              <p className="mt-4 leading-relaxed text-zinc-600">
                {english
                  ? "The code for this site and the listed projects is public on "
                  : "El código de este sitio y de los proyectos listados está público en "}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-4 transition-colors hover:text-indigo-800 hover:decoration-indigo-600"
                >
                  GitHub
                </a>
                {english
                  ? ". It's the quickest way to see how we work before hiring us."
                  : ". Es la forma más rápida de saber cómo trabajamos antes de contratarnos."}
              </p>
            </div>
            <ul className="grid content-start gap-4">
              {perfil.map((linea) => (
                <li
                  key={linea}
                  className="rounded-2xl border border-zinc-200/80 bg-white p-6 text-sm leading-relaxed text-zinc-600 shadow-xs transition-all hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-500/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
                    <span>{linea}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* POR QUÉ NO VERÁS LOGOS DE CLIENTES */}
      <section className="border-t border-zinc-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {english ? "Transparency" : "Transparencia"}
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            {english ? "Why you won't see client logos here" : "Por qué no verás logos de clientes aquí"}
          </h2>
          <div className="mt-8 max-w-2xl space-y-4">
            <p className="leading-relaxed text-zinc-600">
              {english
                ? "Because we don't have any to claim. This portfolio contains our own projects: software we build, publish, and maintain, with open code and linked repositories. They are real, verifiable projects, just not client commissions."
                : "Porque no los tenemos. El portafolio de este sitio son proyectos propios: software que construimos, publicamos y mantenemos nosotros, con su código abierto y su repositorio enlazado. Son trabajos reales y verificables, simplemente no son encargos de cliente."}
            </p>
            <p className="leading-relaxed text-zinc-600">
              {english
                ? "We'd rather show code you can read than a row of logos that aren't ours. A homepage logo says nothing about how software was built, who maintains it, or what happens when something breaks."
                : "Preferimos mostrar código que puedas leer antes que una fila de logos que no nos corresponden. Un logo en una página de inicio no dice nada sobre cómo se escribió ese software, quién lo mantiene ni qué pasó cuando algo se rompió."}
            </p>
            <p className="leading-relaxed text-zinc-600">
              {english
                ? "When a client project has permission to be published, we'll share its name, context, and the technical decisions behind it. Until then, this portfolio is exactly what it looks like: our own work."
                : "Cuando un proyecto de cliente tenga permiso para publicarse, aparecerá aquí con su nombre, su contexto y las decisiones técnicas detrás. Hasta entonces, este portafolio es exactamente lo que parece: nuestro propio trabajo."}
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {english ? "Method" : "Metodología"}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {english ? "Process" : "Proceso"}
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {proceso.map((etapa) => (
              <div
                key={etapa.paso}
                className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-xs transition-all hover:border-indigo-200"
              >
                <span className="font-mono text-xs font-bold text-indigo-600">{etapa.paso}</span>
                <h3 className="mt-3 text-lg font-bold tracking-tight text-zinc-900">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {etapa.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-zinc-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {english ? "Technology" : "Ecosistema"}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Stack
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            {english
              ? "Mature, open-source tools selected for what each project needs. Nothing exotic that no one can maintain later."
              : "Herramientas maduras y de código abierto, elegidas por lo que el proyecto necesita. Nada exótico que después nadie pueda mantener."}
          </p>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {STACK.map((tecnologia) => (
              <li
                key={tecnologia}
                className="rounded-full border border-zinc-200/80 bg-zinc-50 px-3.5 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-indigo-300 hover:text-indigo-600"
              >
                {tecnologia}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-indigo-100/80 bg-gradient-to-b from-indigo-50/40 via-white to-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-medium text-emerald-800">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            {english ? "No middlemen" : "Sin intermediarios"}
          </div>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            {english ? "If your project fits what we do, let's talk." : "Si tu proyecto encaja con lo que hacemos, hablemos."}
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            {english
              ? "Tell us what you need and we'll reply within one business day with a clear scope, timeline, and price."
              : "Cuéntanos qué necesitas y te respondemos el mismo día hábil con una idea clara de alcance, fecha y precio."}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={whatsappLink(english ? "Hi, I'd like to discuss a software project." : "Hola SoftCloud Studio, quiero hablar de un proyecto de software.")}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "whatsapp",
                size: "lg",
                className: "rounded-full px-8 shadow-lg shadow-emerald-600/25",
              })}
            >
              {english ? "Message us on WhatsApp" : "Escribir por WhatsApp"}
            </a>
            <a
              href={whatsappLink(
                english
                  ? "Hi SoftCloud Studio, I'd like to tell you about a project."
                  : "Hola SoftCloud Studio, quiero contarles sobre un proyecto."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-indigo-600 hover:decoration-indigo-400"
            >
              {english ? "Tell us about it →" : "Contarles mi caso →"}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
