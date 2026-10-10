import { buttonVariants } from "@/components/ui/button"
import { whatsappLink } from "@/lib/site"

const PLANES = [
  {
    nombre: "LAUNCH",
    precio: "1,850",
    periodo: "/mes",
    para: "Para lanzar tu producto o tu web sin frenar al equipo.",
    features: [
      "Lanzamiento de marca y web + CI/CD básico",
      "Hasta 5 páginas o 1 MVP de app",
      "SEO, analítica y despliegue en Vercel",
      "30 días de soporte post-lanzamiento",
    ],
    cta: "Empezar",
    destacado: false,
  },
  {
    nombre: "SCALE",
    precio: "3,500",
    periodo: "/mes",
    para: "Para equipos que están escalando infraestructura.",
    features: [
      "Multi-entorno con Terraform (Infra as Code)",
      "CI/CD y monitoreo 24/7 con alertas",
      "Optimización de costo AWS: -30% garantizado",
      "DevOps dedicado a tu equipo",
      "SLA de respuesta en 48 horas",
    ],
    cta: "Escalar con SoftCloud",
    destacado: true,
  },
  {
    nombre: "DEVOPS RESCUE",
    precio: "1,200",
    periodo: "pago único",
    para: "Para factura AWS alta o deploy roto.",
    features: [
      "Auditoría de emergencia y remediación",
      "Respuesta a incidentes",
      "Endurecimiento de infraestructura y backups",
      "Si no bajo el costo, no cobro",
    ],
    cta: "Pedir rescate",
    destacado: false,
  },
]

export function Pricing() {
  return (
    <section className="border-t border-zinc-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Planes mensuales
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight md:text-4xl">
          Precios claros, sin llamada previa
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
          Si tu caso encaja en uno de estos tres planes, no necesitas agendar
          nada: escríbenos por WhatsApp y arrancamos. Precios en dólares
          (USD), facturación mensual y sin contrato de permanencia.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANES.map((plan) => (
            <div
              key={plan.nombre}
              className={
                plan.destacado
                  ? "flex flex-col rounded-[32px] border border-indigo-300 bg-white p-8 shadow-xl shadow-indigo-500/10 ring-2 ring-indigo-200"
                  : "flex flex-col rounded-[32px] border border-zinc-200/80 bg-zinc-50/60 p-8 shadow-sm"
              }
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-zinc-200 bg-white px-3.5 py-1 font-mono text-xs font-bold tracking-widest text-zinc-700">
                  {plan.nombre}
                </span>
                {plan.destacado ? (
                  <span className="rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold tracking-widest text-white">
                    MÁS ELEGIDO
                  </span>
                ) : null}
              </div>

              <div className="mt-8 flex items-baseline">
                <span className="text-lg font-semibold text-zinc-500">USD</span>
                <span className="ml-2 font-serif text-5xl font-bold leading-none tracking-tight">
                  ${plan.precio}
                </span>
                <span className="ml-2 text-sm text-zinc-500">
                  {plan.periodo}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {plan.para}
              </p>

              <div className="my-8 h-px bg-zinc-200" />

              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm leading-relaxed text-zinc-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(
                  `Hola SoftCloud Studio, me interesa el plan ${plan.nombre}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: plan.destacado ? "whatsapp" : "outline",
                  className: "mt-10 w-full rounded-full py-3.5",
                })}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-zinc-500">
          ¿Tu caso no encaja en un plan mensual? También trabajamos por
          proyecto cerrado, con alcance y precio fijo por escrito:{" "}
          <a
            href={whatsappLink(
              "Hola SoftCloud Studio, quiero cotizar un proyecto cerrado con precio fijo."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-800"
          >
            cuéntanos qué necesitas
          </a>
          .
        </p>
      </div>
    </section>
  )
}
