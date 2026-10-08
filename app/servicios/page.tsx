import Link from "next/link"
import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/button"
import { CTA_HREF, LOCATION, STACK, whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Software a la medida, e-commerce e integraciones con IA para empresas en Colombia. Proyecto cerrado, precio fijo por escrito y entregas semanales.",
  alternates: { canonical: "/servicios" },
}

const SERVICIOS = [
  {
    numero: "01",
    titulo: "Software a la medida",
    texto:
      "Sistemas que se ajustan a cómo opera tu empresa, no al revés. Construimos el backend, el panel de administración y las APIs para que tu equipo deje de sostener procesos en hojas de cálculo y correos.",
    capacidades: [
      "APIs RESTful y JWT",
      "PWA y paneles internos",
      "Modelado en PostgreSQL",
      "Java 17 y Spring Boot 3",
      "Integración con sistemas existentes",
      "Despliegue en AWS y Oracle Cloud",
    ],
  },
  {
    numero: "02",
    titulo: "E-commerce",
    texto:
      "Tiendas en línea conectadas a la operación real: el inventario que descuentas, los pagos que concilias y los envíos que despachas. No una vitrina que hay que mantener a mano por fuera.",
    capacidades: [
      "Catálogo y variantes",
      "Carrito y checkout",
      "Pasarelas de pago",
      "Inventario",
      "Envíos",
    ],
  },
  {
    numero: "03",
    titulo: "Integraciones e IA",
    texto:
      "Automatizamos lo que hoy se hace a mano: mensajes, notificaciones, reportes y tareas repetitivas. Conectamos las herramientas que ya usas y sumamos IA donde de verdad ahorra tiempo.",
    capacidades: [
      "WhatsApp Business",
      "Correo transaccional",
      "OpenAI",
      "Automatización de tareas",
      "Webhooks",
    ],
  },
]

const CONDICIONES = [
  {
    titulo: "Proyecto cerrado con precio fijo",
    texto:
      "Definimos el alcance y el precio por escrito antes de escribir código. Lo que acordamos es lo que pagas, sin renegociar a mitad de camino.",
  },
  {
    titulo: "50% al inicio y 50% contra entrega",
    texto:
      "Dos pagos: uno para arrancar y otro cuando el proyecto está entregado y funcionando.",
  },
  {
    titulo: "Sin horas facturadas al aire",
    texto:
      "No cobramos bolsas de horas ni recargos imprevistos. Si algo se sale del alcance, lo conversamos antes, no en la factura.",
  },
  {
    titulo: "Entregas semanales sobre pruebas",
    texto:
      "Cada semana ves avance funcionando en un entorno de pruebas. No esperas al final para saber cómo va.",
  },
  {
    titulo: "El código queda en tus repositorios",
    texto:
      "El proyecto se entrega en los repositorios de tu empresa. Sin dependencias ni cajas negras: el software es tuyo.",
  },
  {
    titulo: "30 días de soporte incluidos",
    texto:
      "Después de la entrega acompañamos la puesta en marcha y resolvemos ajustes durante 30 días.",
  },
]

export default function ServiciosPage() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-full max-w-6xl -translate-x-1/2 bg-gradient-to-b from-indigo-100/40 via-sky-50/20 to-transparent blur-3xl" />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-1 text-xs font-medium text-indigo-900 shadow-xs">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          <span>Servicios — {LOCATION}</span>
        </div>
        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          Servicios de{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            desarrollo y software
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          Somos un estudio full-stack: construimos software a la medida,
          e-commerce e integraciones para empresas en Colombia. Backend en Java
          y Spring Boot, frontend en Next.js y TypeScript, y automatización donde
          hoy hay trabajo manual.
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
            Cotizar mi proyecto
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

      {/* SERVICIOS */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Tres formas en que podemos trabajar juntos
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {SERVICIOS.map((servicio, idx) => {
              const borderColors = [
                "border-t-indigo-500",
                "border-t-emerald-500",
                "border-t-purple-500",
              ]
              const tagStyles = [
                "bg-indigo-50/80 text-indigo-700 border-indigo-200/60",
                "bg-emerald-50/80 text-emerald-700 border-emerald-200/60",
                "bg-purple-50/80 text-purple-700 border-purple-200/60",
              ]
              return (
                <div
                  key={servicio.titulo}
                  className={`flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 ${borderColors[idx]} border-t-4`}
                >
                  <span className="font-mono text-sm font-bold text-indigo-600">
                    {servicio.numero}
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900">
                    {servicio.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {servicio.texto}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {servicio.capacidades.map((capacidad) => (
                      <li
                        key={capacidad}
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${tagStyles[idx]}`}
                      >
                        {capacidad}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
          <p className="mt-10 max-w-2xl leading-relaxed text-zinc-600">
            Si tu caso no encaja en ninguno de los tres, escríbenos igual: te
            decimos con franqueza si podemos resolverlo o si te conviene otro
            proveedor.
          </p>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-zinc-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Tecnologías probadas
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Stack
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            Trabajamos con herramientas maduras y de código abierto, elegidas por
            lo que el proyecto necesita y no por moda. Esto es lo que usamos con
            más frecuencia.
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

      {/* CÓMO TRABAJAMOS Y CÓMO COBRAMOS */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Claridad comercial
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Cómo trabajamos y cómo cobramos
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            Las reglas son las mismas para todos los proyectos. Preferimos
            dejarlas por escrito desde el primer mensaje, antes de hablar de
            dinero.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CONDICIONES.map((condicion) => (
              <div
                key={condicion.titulo}
                className="rounded-2xl border border-zinc-200/70 bg-white p-7 shadow-xs transition-all hover:border-indigo-200"
              >
                <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                  {condicion.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {condicion.texto}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl leading-relaxed text-zinc-600">
            El precio depende del alcance de cada proyecto, así que no publicamos
            tarifas genéricas: lo definimos contigo en la propuesta. Si necesitas
            una fecha comprometida, acordamos la fecha de entrega en la propuesta.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-indigo-100/80 bg-gradient-to-b from-indigo-50/40 via-white to-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-medium text-emerald-800">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Propuesta sin costo
          </div>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Cuéntanos qué necesitas y te decimos el alcance y el precio.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            Respondemos el mismo día hábil por WhatsApp, con una propuesta escrita
            cuando el proyecto lo amerita.
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
                "Hola SoftCloud Studio, quiero saber si pueden construir un sistema a la medida."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-indigo-600 hover:decoration-indigo-400"
            >
              Tengo un sistema interno en mente →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
