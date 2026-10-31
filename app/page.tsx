import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { casos } from "@/lib/casos"
import { getImagen } from "@/lib/imagenes"

const WHATSAPP_URL = "https://wa.me/573142533524"
const WHATSAPP_QUOTE_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hola SoftCloud Studio, quiero cotizar una página web o una app."
)}`

export default function Home() {
  const proyectosDestacados = casos.slice(0, 6)

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* NAV */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center">SC</span>
          SoftCloud Studio
        </div>
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ className: "rounded-full" })}
        >
          Hablemos
        </Link>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Webs que <span className="text-zinc-400">Google ama.</span><br/>
          Apps que tus clientes usan.
        </h1>
        <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto">
          En SoftCloud Studio creamos páginas ultra-rápidas con Next.js 16.4.0 y aplicaciones móviles con Flutter 3.13.0. Posicionamos tu negocio en Google
          y apps móviles con Flutter. Pack completo para tu negocio en Bogotá.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/trabajo"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full px-8",
            })}
          >
            Ver Portafolio
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
            Cotizar en WhatsApp
          </Link>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border">
            <h3 className="font-bold text-xl">Web Next.js</h3>
            <p className="text-zinc-600 mt-2">Aparece primero en Google. Carga en 0.8s.</p>
            <p className="mt-4 font-bold">Desde $1.2M</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border">
            <h3 className="font-bold text-xl">App Flutter</h3>
            <p className="text-zinc-600 mt-2">Tu negocio en el celular de tu cliente.</p>
            <p className="mt-4 font-bold">Desde $3.5M</p>
          </div>
          <div className="bg-black text-white p-8 rounded-2xl">
            <h3 className="font-bold text-xl">Pack Total</h3>
            <p className="text-zinc-400 mt-2">Web + App conectadas. La mejor oferta.</p>
            <p className="mt-4 font-bold">Desde $4.5M</p>
          </div>
        </div>
      </section>

      {/* PORTAFOLIO DESTACADO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Portafolio
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
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
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {caso.resumen}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">
            ¿Listo para convertir ideas en negocio?
          </p>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight">
            Te ayudamos a lanzar una web, app o sistema que genere resultados.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-zinc-300">
            Desde MVP hasta plataformas complejas con automatización, CRM, e-commerce y herramientas internas para operaciones más inteligentes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
