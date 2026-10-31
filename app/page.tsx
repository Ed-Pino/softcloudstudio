import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { casos } from "@/lib/casos"
import { getImagen } from "@/lib/imagenes"

const WHATSAPP_URL = "https://wa.me/573142533524"
const WHATSAPP_QUOTE_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hola SoftCloud Studio, quiero cotizar una página web, una app o un sistema a medida."
)}`

export default function Home() {
  const proyectosDestacados = casos.slice(0, 6)

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center md:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-600">
          SoftCloud Studio
        </p>
        <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
          Software que <span className="text-zinc-500">genera resultados.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
          Diseñamos sitios web, apps y sistemas a medida para empresas que quieren vender más,
          operar mejor y crecer con tecnología sólida.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/trabajo"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full px-8",
            })}
          >
            Ver proyectos
          </Link>
          <Link
            href={WHATSAPP_QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-full px-8",
            })}
          >
            Hablemos por WhatsApp
          </Link>
        </div>
      </section>

      <section id="servicios" className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
              Servicios
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Tecnología que acompaña el crecimiento de tu negocio.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
              <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-700">
                Web
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">Sitios y tiendas que convierten</h3>
              <p className="mt-3 text-zinc-600">
                Estrategia, UX y desarrollo para que tu marca se vea fuerte y venda con claridad.
              </p>
              <p className="mt-6 text-lg font-semibold text-zinc-900">Desde $1.2M</p>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                App
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">Apps que acompañan a tus clientes</h3>
              <p className="mt-3 text-zinc-600">
                Experiencias móviles pensadas para engagement, servicio y crecimiento operativo.
              </p>
              <p className="mt-6 text-lg font-semibold text-zinc-900">Desde $3.5M</p>
            </div>

            <div className="rounded-[28px] bg-zinc-950 p-8 text-white shadow-sm">
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-200">
                Plataformas
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">Sistemas y automatizaciones</h3>
              <p className="mt-3 text-zinc-300">
                Backoffice, dashboards, integraciones y automatizaciones que hacen más eficiente tu operación.
              </p>
              <p className="mt-6 text-lg font-semibold text-white">Desde $4.5M</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Portafolio
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Proyectos recientes
            </h2>
          </div>

          <Link
            href="/trabajo"
            className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-indigo-600 hover:decoration-indigo-400"
          >
            Ver todos
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {proyectosDestacados.map((caso) => {
            const imageSrc = getImagen(caso.slug)

            return (
              <Link
                key={caso.slug}
                href={`/trabajo/${caso.slug}`}
                className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={`Proyecto ${caso.titulo}`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-zinc-100 text-xs uppercase tracking-[0.25em] text-zinc-500">
                      {caso.categoria}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-700">
                      {caso.categoria}
                    </span>
                    {caso.destacado ? (
                      <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                        Destacado
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 group-hover:text-indigo-600">
                    {caso.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{caso.resumen}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">
            ¿Listo para crecer?
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
            Te ayudamos a convertir una idea en una ventaja competitiva.
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={WHATSAPP_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full px-8 bg-white text-zinc-950 hover:bg-zinc-200",
              })}
            >
              Solicitar cotización
            </Link>
            <Link
              href="/trabajo"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-full px-8 border-white/30 text-white hover:bg-white/5",
              })}
            >
              Ver más proyectos
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
