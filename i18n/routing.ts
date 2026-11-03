import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/servicios": {
      es: "/servicios",
      en: "/services",
    },
    "/servicios/aws-cost-optimization": {
      es: "/servicios/aws-cost-optimization",
      en: "/services/aws-cost-optimization",
    },
    "/nosotros": {
      es: "/nosotros",
      en: "/about",
    },
    "/contacto": {
      es: "/contacto",
      en: "/contact",
    },
    "/trabajo": {
      es: "/trabajo",
      en: "/work",
    },
    "/trabajo/[slug]": {
      es: "/trabajo/[slug]",
      en: "/work/[slug]",
    },
  },
})

export type Locale = (typeof routing.locales)[number]
