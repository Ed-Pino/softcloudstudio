import { cacheLife } from "next/cache"
import type { MetadataRoute } from "next"
import { getPathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { casos } from "@/lib/casos"
import { SITE_URL } from "@/lib/site"

// "use cache" + cacheLife("max") son necesarios con cacheComponents: true
// (next.config.ts). Sin ellos, `new Date()` es un valor no determinista y
// Next renderiza el sitemap en cada request, devolviendo la fecha actual a
// Google en cada rastreo en vez de la fecha real del último deploy.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache"
  cacheLife("max")

  const ultimoDeploy = new Date()

  const routeDefinitions = [
    { href: "/" as const, priority: 1 },
    { href: "/trabajo" as const, priority: 0.8 },
    { href: "/servicios" as const, priority: 0.8 },
    { href: "/nosotros" as const, priority: 0.7 },
    { href: "/contacto" as const, priority: 0.7 },
    { href: "/servicios/aws-cost-optimization" as const, priority: 0.8 },
  ]

  const pages: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    routeDefinitions.map(({ href, priority }) => ({
      url: `${SITE_URL}${getPathname({ locale, href })}`,
      lastModified: ultimoDeploy,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((alternateLocale) => [
            alternateLocale,
            `${SITE_URL}${getPathname({ locale: alternateLocale, href })}`,
          ])
        ),
      },
    }))
  )

  const projects: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    casos.map((caso) => {
      const href = {
        pathname: "/trabajo/[slug]" as const,
        params: { slug: caso.slug },
      }

      return {
        url: `${SITE_URL}${getPathname({ locale, href })}`,
        lastModified: ultimoDeploy,
        changeFrequency: "yearly" as const,
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((alternateLocale) => [
              alternateLocale,
              `${SITE_URL}${getPathname({ locale: alternateLocale, href })}`,
            ])
          ),
        },
      }
    })
  )

  return [...pages, ...projects]
}
