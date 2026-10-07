import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/button"
import { CTA_HREF, GITHUB_URL, LOCATION, SITE_NAME, whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Estudio de desarrollo en Bogotá. Perfil, proceso de trabajo y stack con el que construimos software a la medida, e-commerce e integraciones.",
  alternates: { canonical: "/nosotros" },
}

const PERFIL = [
  "Desarrollo backend en Java con Spring Boot: APIs REST, modelado de datos, autenticación y roles.",
  "Frontend en TypeScript y React, con interfaces de administración pensadas para el día a día del equipo.",
  "Plataformas de e-commerce: catálogo, pagos, inventario y envíos conectados a la operación.",
  "Herramientas internas y automatizaciones que reemplazan trabajo manual.",
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

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Tailwind CSS",
  "OpenAI API",
  "WhatsApp API",
  "Vercel",
]

export default function NosotrosPage() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
          Estudio de desarrollo — {LOCATION}
        </p>
        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          Nosotros
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {SITE_NAME} es un estudio de desarrollo en Bogotá. Somos pocos, sin
          intermediarios y sin capas de cuenta: quien propone el alcance es quien
          escribe el código, y eso se nota en los tiempos y en las decisiones
          técnicas.
        </p>
      </section>

      {/* PERFIL */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Quién está detrás
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Ed Pino — desarrollador full-stack
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-600">
                Desarrollador full-stack en Bogotá, con experiencia en Java y
                Spring Boot, TypeScript y desarrollo frontend. Ha construido APIs
                REST, plataformas de e-commerce y herramientas internas para
                equipos que necesitaban dejar de operar a mano.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-600">
                El código de este sitio y de los proyectos listados está público
                en{" "}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
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
                  className="rounded-2xl border border-zinc-200 bg-white p-8 text-sm leading-relaxed text-zinc-600"
                >
                  {linea}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* POR QUÉ NO VERÁS LOGOS DE CLIENTES */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
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
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Proceso
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {PROCESO.map((etapa) => (
              <div key={etapa.paso}>
                <span className="text-sm text-zinc-400">{etapa.paso}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {etapa.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {etapa.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Stack
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            Herramientas maduras y de código abierto, elegidas por lo que el
            proyecto necesita. Nada exótico que después nadie pueda mantener.
          </p>
          <ul className="mt-10 flex flex-wrap gap-2">
            {STACK.map((tecnologia) => (
              <li
                key={tecnologia}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
              >
                {tecnologia}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
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
                size: "lg",
                className: "rounded-full px-8",
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
              className="text-sm font-medium underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
            >
              Contarles mi caso
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
