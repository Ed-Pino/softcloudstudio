import Link from "next/link"
import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/button"
import { casos, casosDestacados } from "@/lib/casos"
import { CTA_HREF, GITHUB_URL, LOCATION, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site"

export const metadata: Metadata = {
  // absolute para que no se le aplique la plantilla "%s | SoftCloud Studio"
  // del layout y quede el título duplicado en la home.
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
}

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

const PILARES = [
  {
    titulo: "Software a la medida",
    texto:
      "Sistemas internos, paneles de administración y APIs REST en Java y Spring Boot, con frontend en Next.js y TypeScript.",
    items: ["APIs REST", "Paneles internos", "Autenticación", "Bases de datos"],
  },
  {
    titulo: "E-commerce",
    texto:
      "Tiendas en línea con catálogo, carrito y pago, conectadas al inventario y a la operación real del negocio.",
    items: ["Catálogo", "Pagos", "Inventario", "Envíos"],
  },
  {
    titulo: "Integraciones e IA",
    texto:
      "Conectamos tu operación con WhatsApp, correo y modelos de IA para automatizar lo que hoy se hace a mano.",
    items: ["WhatsApp Business", "Email", "OpenAI", "Automatización"],
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
    <main className="flex-1">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
          Estudio de desarrollo — {LOCATION}
        </p>
        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          Construimos software a la medida, tiendas online e integraciones
          para empresas en Colombia.
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
              size: "lg",
              className: "rounded-full px-7",
            })}
          >
            Hablemos por WhatsApp
          </a>
          <Link
            href="/trabajo"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-full px-7",
            })}
          >
            Ver trabajo
          </Link>
        </div>
      </section>

      {/* STACK */}
      <section className="overflow-hidden border-y border-zinc-200 bg-zinc-50 py-6">
        <div className="flex w-max animate-marquee items-center gap-12 pl-6 text-sm text-zinc-500">
          {[...STACK, ...STACK].map((item, i) => (
            <span key={`${item}-${i}`} className="whitespace-nowrap">
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
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {PILARES.map((pilar) => (
            <div key={pilar.titulo} className="flex flex-col">
              <h3 className="text-xl font-semibold tracking-tight">
                {pilar.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {pilar.texto}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {pilar.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
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
          className="mt-12 inline-block text-sm font-medium underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
        >
          Ver todos los servicios
        </Link>
      </section>

      {/* TRABAJO */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Trabajo seleccionado
            </h2>
            <Link
              href="/trabajo"
              className="text-sm font-medium underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
            >
              Ver los {casos.length} proyectos
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-3">
            {casosDestacados.map((caso) => (
              <Link
                key={caso.slug}
                href={`/trabajo/${caso.slug}`}
                className="group flex flex-col justify-between bg-white p-8 transition-colors hover:bg-zinc-50"
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {caso.categoria}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {caso.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {caso.resumen}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {caso.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Proyectos propios de desarrollo. Cada caso enlaza a su repositorio
            público en{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-900"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Un proceso sin sorpresas
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {PROCESO.map((etapa) => (
              <div key={etapa.paso}>
                <span className="text-sm text-zinc-400">{etapa.paso}</span>
                <h3 className="mt-3 font-semibold tracking-tight">
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
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
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
              size: "lg",
              className: "mt-10 rounded-full px-8",
            })}
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
