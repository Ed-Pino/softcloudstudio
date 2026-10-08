import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/button"
import {
  CTA_HREF,
  GITHUB_URL,
  LOCATION,
  SITE_NAME,
  STACK,
  whatsappLink,
} from "@/lib/site"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Estudio de desarrollo en Bogotá. Perfil, proceso de trabajo y stack con el que construimos software a la medida, e-commerce e integraciones.",
  alternates: { canonical: "/nosotros" },
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

export default function NosotrosPage() {
  return (
    <main className="relative flex-1">
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-full max-w-6xl -translate-x-1/2 bg-gradient-to-b from-indigo-100/40 via-sky-50/20 to-transparent blur-3xl" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-1 text-xs font-medium text-indigo-900 shadow-xs">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          <span>Estudio de desarrollo — {LOCATION}</span>
        </div>
        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          Sobre{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            SoftCloud Studio
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {SITE_NAME} es un estudio de desarrollo en Bogotá. Somos pocos, sin
          intermediarios y sin capas de cuenta: quien propone el alcance es quien
          escribe el código, y eso se nota en los tiempos y en las decisiones
          técnicas.
        </p>
      </section>

      {/* PERFIL */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Equipo &amp; Experiencia
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Quién está detrás
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                Ed Pino — desarrollador full-stack
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-600">
                Desarrollador full-stack en Bogotá especializado en el ecosistema Java (Java 17, Spring Boot 3, Spring Data JPA) y frontend moderno con React y TypeScript. Con experiencia en plataformas de gestión operativa (PWA), e-commerce, procesamiento multimedia e integraciones avanzadas con OpenAI y WhatsApp.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-600">
                El código de este sitio y de los proyectos listados está público
                en{" "}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-4 transition-colors hover:text-indigo-800 hover:decoration-indigo-600"
                >
                  GitHub
                </a>
                . Es la forma más rápida de saber cómo trabajamos antes de
                contratarnos.
              </p>
            </div>
            <ul className="grid content-start gap-4">
              {PERFIL.map((linea) => (
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
            Transparencia
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            Por qué no verás logos de clientes aquí
          </h2>
          <div className="mt-8 max-w-2xl space-y-4">
            <p className="leading-relaxed text-zinc-600">
              Porque no los tenemos. El portafolio de este sitio son proyectos
              propios: software que construimos, publicamos y mantenemos
              nosotros, con su código abierto y su repositorio enlazado. Son
              trabajos reales y verificables, simplemente no son encargos de
              cliente.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Preferimos mostrar código que puedas leer antes que una fila de
              logos que no nos corresponden. Un logo en una página de inicio no
              dice nada sobre cómo se escribió ese software, quién lo mantiene ni
              qué pasó cuando algo se rompió.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Cuando un proyecto de cliente tenga permiso para publicarse,
              aparecerá aquí con su nombre, su contexto y las decisiones técnicas
              detrás. Hasta entonces, este portafolio es exactamente lo que
              parece: nuestro propio trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Metodología
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Proceso
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {PROCESO.map((etapa) => (
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
            Ecosistema
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Stack
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            Herramientas maduras y de código abierto, elegidas por lo que el
            proyecto necesita. Nada exótico que después nadie pueda mantener.
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
            Sin intermediarios
          </div>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Si tu proyecto encaja con lo que hacemos, hablemos.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            Cuéntanos qué necesitas y te respondemos el mismo día hábil con una
            idea clara de alcance, fecha y precio.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "whatsapp",
                size: "lg",
                className: "rounded-full px-8 shadow-lg shadow-emerald-600/25",
              })}
            >
              Escribir por WhatsApp
            </a>
            <a
              href={whatsappLink(
                "Hola SoftCloud Studio, quiero contarles sobre un proyecto."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-indigo-600 hover:decoration-indigo-400"
            >
              Contarles mi caso →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
