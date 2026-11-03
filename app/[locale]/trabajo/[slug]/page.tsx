import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { getPathname } from "@/i18n/navigation"
import { notFound } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"
import { casos, getCaso, getCategoriaStyle } from "@/lib/casos"
import { getLocalizedCaso, getLocalizedCategory } from "@/lib/casos-translations"
import { jsonLdScript, migasDePan } from "@/lib/schema"
import { SITE_URL, whatsappLink } from "@/lib/site"
import type { Locale } from "@/i18n/routing"

export function generateStaticParams() {
  return casos.map((caso) => ({ slug: caso.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const caso = getCaso(slug)

  if (!caso) {
    return { title: "Proyecto no encontrado" }
  }

  const localized = getLocalizedCaso(caso, locale as Locale)
  const pathname = {
    pathname: "/trabajo/[slug]" as const,
    params: { slug: caso.slug },
  }

  return {
    title: localized.titulo,
    description: localized.resumen,
    alternates: {
      canonical: getPathname({ locale: locale as Locale, href: pathname }),
      languages: {
        es: `${SITE_URL}${getPathname({ locale: "es", href: pathname })}`,
        en: `${SITE_URL}${getPathname({ locale: "en", href: pathname })}`,
      },
    },
    openGraph: {
      title: `${localized.titulo} — ${localized.categoria}`,
      description: localized.resumen,
      type: "article",
    },
  }
}

export default async function CasoPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: localeParam, slug } = await params
  const original = getCaso(slug)

  if (!original) {
    notFound()
  }

  const locale = localeParam as Locale
  const t = await getTranslations({ locale, namespace: "case" })
  const caso = getLocalizedCaso(original, locale)

  const catStyle = getCategoriaStyle(caso.categoria)
  const otros = casos
    .filter((item) => item.slug !== caso.slug)
    .slice(0, 3)
    .map((item) => getLocalizedCaso(item, locale))
  const homePath = getPathname({ locale, href: "/" })
  const workPath = getPathname({ locale, href: "/trabajo" })
  const casePath = getPathname({
    locale,
    href: {
      pathname: "/trabajo/[slug]",
      params: { slug: caso.slug },
    },
  })

  return (
    <main className="relative flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            migasDePan([
              { nombre: locale === "en" ? "Home" : "Inicio", url: `${SITE_URL}${homePath}` },
              { nombre: locale === "en" ? "Work" : "Trabajo", url: `${SITE_URL}${workPath}` },
              {
                nombre: caso.titulo,
                url: `${SITE_URL}${casePath}`,
              },
            ])
          ),
        }}
      />
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-full max-w-6xl -translate-x-1/2 bg-gradient-to-b from-indigo-100/40 via-sky-50/20 to-transparent blur-3xl" />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <Link
          href="/trabajo"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-indigo-600"
        >
          {locale === "en" ? t("back") : "← Volver a todo el trabajo"}
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${catStyle.badge}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${catStyle.dot}`} />
            {getLocalizedCategory(caso.categoria, locale)}
          </span>
          {caso.destacado ? (
            <span className="rounded-full border border-amber-200/80 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
              {locale === "en" ? t("featured") : "Proyecto destacado"}
            </span>
          ) : null}
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 md:text-6xl">
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
              variant: "gradient",
              size: "lg",
              className: "rounded-full px-7 shadow-md shadow-indigo-600/20",
            })}
          >
            {locale === "en" ? t("repository") : "Ver repositorio en GitHub"}
          </a>
          {caso.demo ? (
            <a
              href={caso.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "whatsapp",
                size: "lg",
                className: "rounded-full px-7 shadow-md shadow-emerald-600/20",
              })}
            >
              {t("liveDemo")}
            </a>
          ) : null}
        </div>
      </section>

      <section className="border-t border-zinc-200/80 bg-zinc-50/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr] md:py-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              {locale === "en" ? t("about") : "Sobre el proyecto"}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
              {caso.descripcion}
            </p>

            <h2 className="mt-14 text-2xl font-bold tracking-tight text-zinc-900">
              {locale === "en" ? t("transparency") : "Transparencia"}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-600">
              {caso.transparencia ??
                (locale === "en"
                  ? t("defaultTransparency")
                  : "Este es un proyecto propio de desarrollo, no un trabajo de cliente. Lo publicamos con su código porque preferimos mostrar cómo trabajamos antes que logos que no nos corresponden. Los proyectos de cliente se publican únicamente con autorización expresa.")}
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              {locale === "en" ? t("technical") : "Ficha técnica"}
            </h2>
            <dl className="mt-6 flex flex-col gap-5 text-sm">
              <div>
                <dt className="text-zinc-500">{t("category")}</dt>
                <dd className="mt-1.5 font-semibold text-zinc-800">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${catStyle.badge}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${catStyle.dot}`} />
                    {getLocalizedCategory(caso.categoria, locale)}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">{t("stack")}</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {caso.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200/70 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">{t("repo")}</dt>
                <dd className="mt-1">
                  <a
                    href={caso.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-800 hover:decoration-indigo-600"
                  >
                    {t("viewCode")}
                  </a>
                </dd>
              </div>
              {caso.demo ? (
                <div>
                  <dt className="text-zinc-500">{t("publicDemo")}</dt>
                  <dd className="mt-1">
                    <a
                      href={caso.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-800 hover:decoration-emerald-600"
                    >
                      {t("viewLive")}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-t border-indigo-100/80 bg-gradient-to-b from-white via-indigo-50/20 to-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            {t("similar")}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
            {t("cta")}
          </p>
          <a
            href={whatsappLink(
              t("similarMessage", { project: caso.titulo })
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "whatsapp",
              size: "lg",
              className: "mt-8 rounded-full px-7 shadow-md shadow-emerald-600/20",
            })}
          >
            {t("whatsapp")}
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-200/80 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            {t("otherProjects")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otros.map((item) => {
              const itemStyle = getCategoriaStyle(item.categoria)
              return (
                <Link
                  key={item.slug}
                  href={{
                    pathname: "/trabajo/[slug]",
                    params: { slug: item.slug },
                  }}
                  className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5"
                >
                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${itemStyle.badge}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${itemStyle.dot}`} />
                      {getLocalizedCategory(item.categoria, locale)}
                    </span>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-indigo-600">
                      {item.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                      {item.resumen}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
