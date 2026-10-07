import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/button"
import { CTA_HREF, GITHUB_URL, LOCATION, whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué necesitas y respondemos el mismo día hábil por WhatsApp. Desarrollo de software a la medida, e-commerce e integraciones en Bogotá, Colombia.",
  alternates: { canonical: "/contacto" },
}

const CHECKLIST = [
  {
    titulo: "Qué necesitas resolver",
    texto:
      "El problema concreto, no la solución que imaginas. “Perdemos pedidos entre WhatsApp y el inventario” dice más que “quiero una app”.",
  },
  {
    titulo: "Si ya existe un sistema o una web actual",
    texto:
      "Si hay un sistema, una tienda o una plantilla en uso, dinos cuál. Cambia por completo la forma de abordar el trabajo.",
  },
  {
    titulo: "Para cuándo lo necesitas",
    texto:
      "Una fecha objetivo, aunque sea aproximada. Nos sirve para decirte con honestidad si llegamos o no.",
  },
  {
    titulo: "Si tienes un rango de inversión en mente",
    texto:
      "Un rango, no una cifra exacta. Ayuda a proponer un alcance realista desde el primer mensaje.",
  },
]

const PASOS = [
  {
    paso: "01",
    titulo: "Respuesta por WhatsApp",
    texto:
      "Leemos tu mensaje y contestamos el mismo día hábil, con preguntas concretas si falta algo.",
  },
  {
    paso: "02",
    titulo: "Llamada de diagnóstico si hace falta",
    texto:
      "Si el proyecto lo amerita, agendamos una llamada corta para entender el proceso completo. Sin presentaciones de una hora.",
  },
  {
    paso: "03",
    titulo: "Propuesta escrita",
    texto:
      "Recibes alcance, fecha de entrega y precio en un documento. Proyecto cerrado, 50% al inicio y 50% contra entrega.",
  },
]

export default function ContactoPage() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
          Contacto — {LOCATION}
        </p>
        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          Hablemos
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          Cuéntanos qué necesitas y respondemos el mismo día hábil. Sin
          formularios que nadie lee ni respuestas automáticas: escribes y contesta
          la persona que va a construir el software.
        </p>
        <div className="mt-10">
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full px-10 py-6 text-base",
            })}
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      {/* QUÉ INCLUIR EN TU PRIMER MENSAJE */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            Qué incluir en tu primer mensaje
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            Con estos cuatro puntos podemos darte una idea de alcance y precio sin
            una reunión larga. Si alguno no lo tienes claro todavía, no es
            problema: lo resolvemos conversando.
          </p>
          <ul className="mt-14 grid gap-8 md:grid-cols-2">
            {CHECKLIST.map((item, index) => (
              <li
                key={item.titulo}
                className="rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                  {`0${index + 1}`}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {item.texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CANALES */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Canales
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            Estos son los canales que atendemos de verdad. No publicamos correos
            ni teléfonos que nadie revisa.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold tracking-tight">WhatsApp</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                El canal más rápido. Es donde llegan las cotizaciones y donde
                respondemos el mismo día hábil.
              </p>
              <a
                href={CTA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-medium underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
              >
                Abrir WhatsApp
              </a>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold tracking-tight">GitHub</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Código público de los proyectos de este portafolio. La mejor
                muestra de cómo escribimos y estructuramos software.
              </p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-medium underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
              >
                Ver repositorios
              </a>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold tracking-tight">Ubicación</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Trabajamos desde {LOCATION}, con clientes en todo el país. La
                operación es remota y las reuniones se agendan por WhatsApp.
              </p>
              <span className="mt-6 inline-block rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
                {LOCATION}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO SEGUIMOS */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Cómo seguimos
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {PASOS.map((item) => (
              <div key={item.paso}>
                <span className="text-sm text-zinc-400">{item.paso}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl leading-relaxed text-zinc-600">
            Si tu proyecto no es para nosotros, también te lo diremos en ese
            primer mensaje.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Escríbenos ahora y te respondemos hoy.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            Un mensaje con lo que necesitas es suficiente para empezar.
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
              Hablemos por WhatsApp
            </a>
            <a
              href={whatsappLink(
                "Hola SoftCloud Studio, les cuento qué necesito:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
            >
              Mensaje con el checklist completo
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
