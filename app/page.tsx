import Link from "next/link"
import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/button"
import { casos, casosDestacados, getCategoriaStyle } from "@/lib/casos"
import {
  CTA_HREF,
  GITHUB_URL,
  LOCATION,
  SITE_DESCRIPTION,
  SITE_TITLE,
  STACK,
} from "@/lib/site"

export const metadata: Metadata = {
  // absolute para que no se le aplique la plantilla "%s | SoftCloud Studio"
  // del layout y quede el título duplicado en la home.
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
}

const PILARES = [
  {
    titulo: "Software a la medida",
    texto:
      "Sistemas internos, PWAs operativas, paneles de administración y APIs REST en Java 17 y Spring Boot 3, con frontend en React y TypeScript.",
    items: ["Java 17 & Spring Boot", "APIs REST & JWT", "PWA & Paneles", "PostgreSQL"],
    accentBorder: "border-t-indigo-500",
    tagClass: "bg-indigo-50/80 text-indigo-700 border-indigo-200/60",
  },
  {
    titulo: "E-commerce",
    texto:
      "Tiendas en línea con catálogo, carrito y pago, conectadas al inventario y a la operación real del negocio.",
    items: ["Catálogo", "Pagos", "Inventario", "Envíos"],
    accentBorder: "border-t-emerald-500",
    tagClass: "bg-emerald-50/80 text-emerald-700 border-emerald-200/60",
  },
  {
    titulo: "Integraciones e IA",
    texto:
      "Conectamos tu operación con WhatsApp, correo y modelos de IA para automatizar lo que hoy se hace a mano.",
    items: ["WhatsApp Business", "Email", "OpenAI", "Automatización"],
    accentBorder: "border-t-purple-500",
    tagClass: "bg-purple-50/80 text-purple-700 border-purple-200/60",
  },
]

const PROCESO = [
  {
    paso: "01",
    titulo: "Diagnóstico",
    texto: "Una llamada para entender el negocio, el problema real y qué se puede resolver sin inflar el alcance.",
  },
  {
    paso: "02",
    titulo: "Propuesta cerrada",
    texto: "Alcance, entregables, fechas y precio fijos por escrito. Sin sorpresas ni horas facturadas al aire.",
  },
  {
    paso: "03",
    titulo: "Construcción",
    texto: "Entregas cada semana sobre un entorno de pruebas para que veas el avance, no un resumen al final.",
  },
  {
    paso: "04",
    titulo: "Entrega y soporte",
    texto: "El código queda en tus repositorios, documentado, con 30 días de acompañamiento incluidos.",
  },
]

export default function Home() {
  return (
    <main className="relative flex-1">
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-full max-w-6xl -translate-x-1/2 bg-gradient-to-b from-indigo-100/50 via-sky-50/30 to-transparent blur-3xl" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-1 text-xs font-medium text-indigo-900 shadow-xs">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
          <span>Estudio de desarrollo — {LOCATION}</span>
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          Construimos{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            software a la medida
          </span>
          , tiendas online e integraciones para empresas en Colombia.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          Somos un estudio full-stack. Backend en Java y Spring Boot, frontend
          en Next.js y TypeScript, e integraciones con WhatsApp, correo y
          modelos de IA.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "whatsapp",
              size: "lg",
              className: "rounded-full px-7 shadow-md shadow-emerald-600/20",
            })}
          >
            Hablemos por WhatsApp
          </a>
          <Link
            href="/trabajo"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-full px-7 transition-colors hover:border-indigo-300 hover:text-indigo-600",
            })}
          >
            Ver trabajo
          </Link>
        </div>
      </section>

      {/* STACK MARQUEE */}
      <section className="overflow-hidden border-y border-indigo-100/70 bg-gradient-to-r from-zinc-50 via-indigo-50/30 to-zinc-50 py-5">
        <div className="flex w-max animate-marquee items-center gap-4 pl-4 text-sm">
          {[...STACK, ...STACK].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex whitespace-nowrap rounded-full border border-zinc-200/80 bg-white px-3.5 py-1 text-xs font-medium text-zinc-700 shadow-xs transition-colors hover:border-indigo-300 hover:text-indigo-600"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Tres formas en que podemos trabajar juntos
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PILARES.map((pilar) => (
            <div
              key={pilar.titulo}
              className={`flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 ${pilar.accentBorder} border-t-4`}
            >
              <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                {pilar.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {pilar.texto}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {pilar.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${pilar.tagClass}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          href="/servicios"
          className="mt-12 inline-block text-sm font-semibold text-indigo-600 underline decoration-indigo-300 underline-offset-4 transition-colors hover:text-indigo-800 hover:decoration-indigo-600"
        >
          Ver todos los servicios →
        </Link>
      </section>

      {/* TRABAJO */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Portafolio real
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Trabajo seleccionado
              </h2>
            </div>
            <Link
              href="/trabajo"
              className="text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-indigo-600 hover:decoration-indigo-400"
            >
              Ver los {casos.length} proyectos →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {casosDestacados.map((caso) => {
              const catStyle = getCategoriaStyle(caso.categoria)
              return (
                <Link
                  key={caso.slug}
                  href={`/trabajo/${caso.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${catStyle.badge}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${catStyle.dot}`} />
                        {caso.categoria}
                      </span>
                      {caso.destacado ? (
                        <span className="rounded-full border border-amber-200/80 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
                          Destacado
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-indigo-600">
                      {caso.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                      {caso.resumen}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {caso.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-100 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-600 transition-colors group-hover:border-indigo-100 group-hover:bg-indigo-50/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {caso.demo ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                        Demo
                      </span>
                    ) : null}
                  </div>
                </Link>
              )
            })}
          </div>

          <p className="mt-8 text-xs text-zinc-500">
            Proyectos propios de desarrollo. Cada caso enlaza a su repositorio
            público en{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-2 hover:text-indigo-600 hover:decoration-indigo-400"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-t border-zinc-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Metodología
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Un proceso sin sorpresas
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {PROCESO.map((etapa) => (
              <div
                key={etapa.paso}
                className="rounded-2xl border border-zinc-200/70 bg-zinc-50/50 p-6 transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50/20"
              >
                <span className="font-mono text-xs font-bold text-indigo-600">
                  {etapa.paso}
                </span>
                <h3 className="mt-3 font-bold tracking-tight text-zinc-900">
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

      {/* CTA */}
      <section className="border-t border-indigo-100/80 bg-gradient-to-b from-indigo-50/40 via-white to-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-medium text-emerald-800">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Respuesta el mismo día hábil
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Cuéntanos qué necesitas y te decimos si podemos ayudarte.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-zinc-600">
            Respondemos por WhatsApp el mismo día hábil, con una idea clara de
            alcance y precio.
          </p>
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "whatsapp",
              size: "lg",
              className: "mt-10 rounded-full px-8 shadow-lg shadow-emerald-600/25",
            })}
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
