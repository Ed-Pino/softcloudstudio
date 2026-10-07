import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"
import { casos, getCaso } from "@/lib/casos"
import { whatsappLink } from "@/lib/site"

export function generateStaticParams() {
  return casos.map((caso) => ({ slug: caso.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caso = getCaso(slug)

  if (!caso) {
    return { title: "Proyecto no encontrado" }
  }

  return {
    title: caso.titulo,
    description: caso.resumen,
    alternates: { canonical: `/trabajo/${caso.slug}` },
    openGraph: {
      title: `${caso.titulo} — ${caso.categoria}`,
      description: caso.resumen,
      type: "article",
    },
  }
}

export default async function CasoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caso = getCaso(slug)

  if (!caso) {
    notFound()
  }

  const otros = casos.filter((item) => item.slug !== caso.slug).slice(0, 3)

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <Link
          href="/trabajo"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
        >
          ← Todo el trabajo
        </Link>

        <p className="mt-10 text-xs uppercase tracking-[0.25em] text-zinc-400">
          {caso.categoria}
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          {caso.titulo}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {caso.resumen}.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={caso.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full px-7",
            })}
          >
            Ver repositorio
          </a>
          {caso.demo ? (
            <a
              href={caso.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-full px-7",
              })}
            >
              Abrir demo en vivo
            </a>
          ) : null}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr] md:py-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Sobre el proyecto
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-zinc-600">
              {caso.descripcion}
            </p>

            <h2 className="mt-14 text-2xl font-bold tracking-tight">
              Transparencia
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-zinc-600">
              Este es un proyecto propio de desarrollo, no un trabajo de
              cliente. Lo publicamos con su código porque preferimos mostrar
              cómo trabajamos antes que logos que no nos corresponden. Los
              proyectos de cliente se publican únicamente con autorización
              expresa.
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Ficha
            </h2>
            <dl className="mt-6 flex flex-col gap-5 text-sm">
              <div>
                <dt className="text-zinc-500">Categoría</dt>
                <dd className="mt-1 font-medium">{caso.categoria}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {caso.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Repositorio</dt>
                <dd className="mt-1">
                  <a
                    href={caso.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                  >
                    Código en GitHub
                  </a>
                </dd>
              </div>
              {caso.demo ? (
                <div>
                  <dt className="text-zinc-500">Demo</dt>
                  <dd className="mt-1">
                    <a
                      href={caso.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                    >
                      Ver funcionando
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold tracking-tight">
            ¿Tienes algo parecido en mente?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
            Cuéntanos qué necesitas y te decimos con franqueza si podemos
            ayudarte, en cuánto tiempo y con qué alcance.
          </p>
          <a
            href={whatsappLink(
              `Hola SoftCloud Studio, vi el proyecto ${caso.titulo} y quiero algo parecido.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              size: "lg",
              className: "mt-8 rounded-full px-7",
            })}
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold tracking-tight">Otros proyectos</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-3">
            {otros.map((item) => (
              <Link
                key={item.slug}
                href={`/trabajo/${item.slug}`}
                className="flex flex-col justify-between bg-white p-8 transition-colors hover:bg-zinc-50"
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {item.categoria}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {item.resumen}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
