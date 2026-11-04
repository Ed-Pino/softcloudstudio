import { useTranslations } from "next-intl"
import { buttonVariants } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { NAV, whatsappLink } from "@/lib/site"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Link as LocalizedLink } from "@/i18n/navigation"

export function SiteHeader() {
  const t = useTranslations("common")

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-3 md:justify-start">
            <LocalizedLink
              href="/"
              className="group flex items-center whitespace-nowrap"
            >
              <Logo />
            </LocalizedLink>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium md:gap-3">
            {NAV.map((item) => (
              <LocalizedLink
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-zinc-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
              >
                {t(`navigation.${item.label}`)}
              </LocalizedLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href={whatsappLink(t("footer.whatsappMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "whatsapp",
                className: "rounded-full shadow-sm shadow-emerald-600/20",
              })}
            >
              {t("headerCta")}
            </a>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href={whatsappLink(t("footer.whatsappMessage"))}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "whatsapp",
              className: "flex-1 rounded-full px-4 shadow-sm shadow-emerald-600/20",
            })}
          >
            {t("headerCta")}
          </a>
        </div>
      </div>
    </header>
  )
}
