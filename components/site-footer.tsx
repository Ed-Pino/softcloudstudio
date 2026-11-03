import { useTranslations } from "next-intl"
import { Logo } from "@/components/logo"
import {
  COPYRIGHT_YEAR,
  GITHUB_URL,
  LOCATION,
  NAV,
  SITE_NAME,
  WHATSAPP_URL,
  whatsappLink,
} from "@/lib/site"
import { Link } from "@/i18n/navigation"

export function SiteFooter() {
  const t = useTranslations("common")
  const SOCIAL = [
    { href: WHATSAPP_URL, label: "WhatsApp", hoverClass: "hover:text-emerald-600" },
    { href: GITHUB_URL, label: "GitHub", hoverClass: "hover:text-indigo-600" },
    { href: whatsappLink(t("footer.whatsappMessage")), label: t("footer.writeUs"), hoverClass: "hover:text-blue-600" },
  ]

  return (
    <footer className="mt-auto border-t border-zinc-200/80 bg-zinc-50/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              {t("footer.tagline")}
              <br />
              <span className="mt-2 inline-flex items-center gap-1.5 font-medium text-zinc-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                {LOCATION}
              </span>
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {t("footer.site")}
            </span>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-600 transition-colors hover:text-indigo-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {t("footer.contact")}
            </span>
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-zinc-600 transition-colors ${item.hoverClass}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 border-t border-zinc-200/60 pt-6 text-xs text-zinc-400">
          © {COPYRIGHT_YEAR} {SITE_NAME} — {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}
