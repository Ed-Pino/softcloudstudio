import { cacheLife } from "next/cache"
import type { MetadataRoute } from "next"

// "use cache" + cacheLife("max") son necesarios con cacheComponents: true
// (next.config.ts). Sin ellos, `new Date()` es un valor no determinista y
// Next renderiza el sitemap en cada request, devolviendo la fecha actual a
// Google en cada rastreo en vez de la fecha real del último deploy.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache"
  cacheLife("max")

  return [
    {
      url: "https://softcloudstudio.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
