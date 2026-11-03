import { Link } from "@/i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import { buttonVariants } from "@/components/ui/button"
import { whatsappLink } from "@/lib/site"

export default function NotFound() {
  const t = useTranslations("site")
  const english = useLocale() === "en"

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
        Error 404
      </p>
      <h1 className="mt-8 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        {t("notFoundTitle")}
      </h1>
      <p className="mt-6 max-w-md leading-relaxed text-zinc-600">
        {t("notFoundText")}
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/trabajo"
          className={buttonVariants({
            size: "lg",
            className: "rounded-full px-7",
          })}
        >
          {t("backToWork")}
        </Link>
        <a
          href={whatsappLink(
            english
              ? "Hi, I need help finding a page on SoftCloud Studio."
              : t("notFoundMessage")
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "rounded-full px-7",
          })}
        >
          {t("writeWhatsApp")}
        </a>
      </div>
    </main>
  )
}
