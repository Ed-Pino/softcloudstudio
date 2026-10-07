import { cacheLife } from "next/cache"
import type { MetadataRoute } from "next"
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

  const paginas: MetadataRoute.Sitemap = [
    { url: SITE_URL },
    { url: `${SITE_URL}/trabajo` },
    { url: `${SITE_URL}/servicios` },
    { url: `${SITE_URL}/nosotros` },
    { url: `${SITE_URL}/contacto` },
  ].map(({ url }) => ({
    url,
    lastModified: ultimoDeploy,
    changeFrequency: "monthly" as const,
    priority: url === SITE_URL ? 1 : 0.8,
  }))

  const proyectos: MetadataRoute.Sitemap = casos.map((caso) => ({
    url: `${SITE_URL}/trabajo/${caso.slug}`,
    lastModified: ultimoDeploy,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [...paginas, ...proyectos]
}
