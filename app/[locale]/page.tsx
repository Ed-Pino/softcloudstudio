import Image from "next/image"
import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { getPathname } from "@/i18n/navigation"
import { buttonVariants } from "@/components/ui/button"
import { casos } from "@/lib/casos"
import {
  getLocalizedCaso,
  getLocalizedCategory,
} from "@/lib/casos-translations"
import { getImagen } from "@/lib/imagenes"
import { whatsappLink } from "@/lib/site"
import { SITE_URL } from "@/lib/site"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "home" })
  const canonical = getPathname({ locale: locale as Locale, href: "/" })

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical,
      languages: {
        es: `${SITE_URL}${getPathname({ locale: "es", href: "/" })}`,
        en: `${SITE_URL}${getPathname({ locale: "en", href: "/" })}`,
      },
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: requestedLocale } = await params
  setRequestLocale(requestedLocale)
  const locale = requestedLocale as Locale
  const t = await getTranslations({ locale, namespace: "home" })
  const proyectosDestacados = casos
    .slice(0, 6)
    .map((caso) => getLocalizedCaso(caso, locale))
  const quoteUrl = whatsappLink(t("whatsappMessage"))

  return (
    <main className="min-h-screen bg-[#020d1f]">
      <section className="relative isolate min-h-[min(760px,calc(100svh-5rem))] overflow-hidden border-b border-white/10 bg-[#020d1f] text-white">
        <Image
          src="/cloud.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_center] lg:object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_#020817_0%,_rgba(2,8,23,0.98)_24%,_rgba(2,8,23,0.84)_39%,_rgba(2,8,23,0.2)_73%,_rgba(2,8,23,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_48%,_transparent_20%,_rgba(2,8,23,0.12)_72%,_rgba(2,8,23,0.42)_100%)]" />

        <div className="relative mx-auto flex min-h-[min(760px,calc(100svh-5rem))] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-[620px] lg:max-w-[480px]">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
              {t("eyebrow")}
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("titleLead")} <span className="text-slate-300">{t("titleHighlight")}</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="/trabajo"
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-full px-8 border border-cyan-400/40 bg-cyan-500 text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:bg-cyan-400",
                })}
              >
                {t("projects")}
              </Link>
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-full border-white/20 bg-white/5 px-8 text-white hover:bg-white/10",
                })}
              >
                {t("whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-zinc-50 py-20 text-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
              {t("services")}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              {t("servicesTitle")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
              <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {t("webLabel")}
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900">{t("webTitle")}</h3>
              <p className="mt-3 text-zinc-600">
                {t("webDescription")}
              </p>
              <p className="mt-6 text-lg font-semibold text-zinc-900">{t("webPrice")}</p>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {t("appsLabel")}
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900">{t("appsTitle")}</h3>
              <p className="mt-3 text-zinc-600">
                {t("appsDescription")}
              </p>
              <p className="mt-6 text-lg font-semibold text-zinc-900">{t("appsPrice")}</p>
            </div>

            <div className="rounded-[28px] bg-zinc-950 p-8 text-white shadow-sm">
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-200">
                {t("platformsLabel")}
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">{t("platformsTitle")}</h3>
              <p className="mt-3 text-zinc-300">
                {t("platformsDescription")}
              </p>
              <p className="mt-6 text-lg font-semibold text-white">{t("platformsPrice")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-zinc-900">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              {t("portfolio")}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              {t("recentProjects")}
            </h2>
          </div>

          <Link
            href="/trabajo"
            className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-indigo-600 hover:decoration-indigo-400"
          >
            {t("allProjects")}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {proyectosDestacados.map((caso) => {
            const imageSrc = getImagen(caso.slug)

            return (
              <Link
                key={caso.slug}
                href={{
                  pathname: "/trabajo/[slug]",
                  params: { slug: caso.slug },
                }}
                className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={`${locale === "en" ? "Project" : "Proyecto"} ${caso.titulo}`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-zinc-100 text-xs uppercase tracking-[0.25em] text-zinc-500">
                      {getLocalizedCategory(caso.categoria, locale)}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-700">
                      {getLocalizedCategory(caso.categoria, locale)}
                    </span>
                    {caso.destacado ? (
                      <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                        {t("featured")}
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
            {t("ready")}
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
            {t("ctaTitle")}
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full px-8 bg-white text-zinc-950 hover:bg-zinc-200",
              })}
            >
              {t("quote")}
            </a>
            <Link
              href="/trabajo"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-full px-8 border-white/30 text-white hover:bg-white/5",
              })}
            >
              {t("moreProjects")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
