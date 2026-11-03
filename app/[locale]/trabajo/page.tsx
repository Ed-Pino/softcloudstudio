import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { getPathname } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"
import { TrabajoGrid } from "@/components/trabajo-grid"
import { casos } from "@/lib/casos"
import { GITHUB_URL, SITE_URL } from "@/lib/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const canonical = getPathname({ locale: locale as Locale, href: "/trabajo" })
  return {
    title:
      locale === "en"
        ? "Software Development Portfolio | SoftCloud Studio"
        : "Portafolio de desarrollo de software | SoftCloud Studio",
    description:
      locale === "en"
        ? "Explore software projects in e-commerce, APIs, AI integrations, and DevOps. Each case links to its public repository."
        : "Proyectos de desarrollo en e-commerce, APIs, integraciones con WhatsApp e IA, y DevOps. Cada caso enlaza a su repositorio público.",
    alternates: {
      canonical,
      languages: {
        es: `${SITE_URL}${getPathname({ locale: "es", href: "/trabajo" })}`,
        en: `${SITE_URL}${getPathname({ locale: "en", href: "/trabajo" })}`,
      },
    },
  }
}

export default async function TrabajoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const english = locale === "en"

  return (
    <main className="relative flex-1">
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-full max-w-6xl -translate-x-1/2 bg-gradient-to-b from-indigo-100/40 via-sky-50/20 to-transparent blur-3xl" />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-1 text-xs font-medium text-indigo-900 shadow-xs">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          <span>{english ? "Open-source portfolio" : "Portafolio de código"}</span>
        </div>
        <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          {english ? "Projects you can" : "Proyectos que puedes"}{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            {english ? "explore and review" : "abrir y revisar"}
          </span>
          .
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {english
            ? "Each case links to its public repository and, where available, a live demo. These are personal projects—the hackathon entry is identified as team work—with code you can inspect."
            : "Cada caso enlaza a su repositorio público y, cuando existe, a su demo funcionando. La mayoría son proyectos propios de desarrollo —el de hackathon está marcado como trabajo en equipo— y todos se muestran con código incluido, no con capturas."}
        </p>
      </section>

      <section className="border-t border-zinc-200/80 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <TrabajoGrid casos={casos} />

          <p className="mt-12 text-xs text-zinc-500">
            {english ? "Public repositories at" : "Repositorios públicos en"}{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-2 hover:text-indigo-600 hover:decoration-indigo-400"
            >
              github.com/Ed-Pino
            </a>
            . {english
              ? "Client projects are published only with explicit permission."
              : "Los proyectos de cliente se publican solo con autorización expresa."}
          </p>
        </div>
      </section>
    </main>
  )
}
