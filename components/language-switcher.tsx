"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import type { Locale } from "@/i18n/routing"

const PATH_SEGMENTS: Record<Locale, Record<string, string>> = {
  es: {
    services: "servicios",
    about: "nosotros",
    contact: "contacto",
    work: "trabajo",
  },
  en: {
    servicios: "services",
    nosotros: "about",
    contacto: "contact",
    trabajo: "work",
  },
}

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const t = useTranslations("common")
  const targetLocale: Locale = locale === "es" ? "en" : "es"
  const segments = pathname.split("/").filter(Boolean).slice(1)

  if (segments.length > 0) {
    segments[0] = PATH_SEGMENTS[targetLocale][segments[0]] ?? segments[0]
  }

  const targetPath = `/${targetLocale}${segments.length ? `/${segments.join("/")}` : ""}`

  return (
    <Link
      href={targetPath}
      hrefLang={targetLocale}
      aria-label={`${t("language")}: ${targetLocale.toUpperCase()}`}
      className="rounded-full border border-zinc-200 px-3 py-2 text-xs font-semibold tracking-wide text-zinc-700 transition-colors hover:border-indigo-300 hover:text-indigo-600"
    >
      {targetLocale.toUpperCase()}
    </Link>
  )
}
