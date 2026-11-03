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
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <LocalizedLink
          href="/"
          className="group order-1 flex items-center whitespace-nowrap"
        >
          <Logo />
        </LocalizedLink>

        <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-2 text-sm font-medium md:order-2 md:w-auto md:gap-3">
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

        <div className="order-2 flex items-center gap-3 md:order-3">
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
    </header>
  )
}
