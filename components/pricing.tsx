import { buttonVariants } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"
import { whatsappLink } from "@/lib/site"

const PLANS = [
  {
    name: "LAUNCH",
    key: "launch",
    amount: 1850,
    featuresKey: "launchFeatures",
    ctaKey: "start",
    featured: false,
  },
  {
    name: "SCALE",
    key: "scale",
    amount: 3500,
    featuresKey: "scaleFeatures",
    ctaKey: "scaleCta",
    featured: true,
  },
  {
    name: "DEVOPS RESCUE",
    key: "rescue",
    amount: 1200,
    featuresKey: "rescueFeatures",
    ctaKey: "rescueCta",
    featured: false,
  },
] as const

export function Pricing() {
  const t = useTranslations("pricing")
  const locale = useLocale()
  const copPerUsd = Number(process.env.COP_PER_USD_RATE)
  const hasCopRate = Number.isFinite(copPerUsd) && copPerUsd > 0

  const formatPrice = (usdAmount: number) => {
    if (locale === "es") {
      if (!hasCopRate) return t("quoteInCop")
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }).format(usdAmount * copPerUsd)
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(usdAmount)
  }

  const getFeatures = (key: string) => {
    const features = t.raw(`plans.${key}`)
    if (!Array.isArray(features) || !features.every((item) => typeof item === "string")) {
      throw new Error(`Invalid pricing features message: plans.${key}`)
    }
    return features
  }

  return (
    <section className="border-t border-zinc-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          {t("eyebrow")}
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
          {t("description")}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "flex flex-col rounded-[32px] border border-indigo-300 bg-white p-8 shadow-xl shadow-indigo-500/10 ring-2 ring-indigo-200"
                  : "flex flex-col rounded-[32px] border border-zinc-200/80 bg-zinc-50/60 p-8 shadow-sm"
              }
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-zinc-200 bg-white px-3.5 py-1 font-mono text-xs font-bold tracking-widest text-zinc-700">
                  {plan.name}
                </span>
                {plan.featured ? (
                  <span className="rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold tracking-widest text-white">
                    {t("featured")}
                  </span>
                ) : null}
              </div>

              <div className="mt-8 flex flex-wrap items-baseline gap-2">
                <span className="font-serif text-3xl font-bold leading-tight tracking-tight">
                  {formatPrice(plan.amount)}
                </span>
                <span className="text-sm text-zinc-500">
                  {plan.key === "rescue" ? t("periodOneTime") : t("periodMonth")}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {t(`plans.${plan.key}`)}
              </p>

              <div className="my-8 h-px bg-zinc-200" />

              <ul className="flex flex-1 flex-col gap-3">
                {getFeatures(plan.featuresKey).map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm leading-relaxed text-zinc-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(
                  t("plans.whatsappMessage", { planName: plan.name })
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: plan.featured ? "whatsapp" : "outline",
                  className: "mt-10 w-full rounded-full py-3.5",
                })}
              >
                {t(`plans.${plan.ctaKey}`)}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-zinc-500">
          {t("plans.contact")}{" "}
          <a
            href={whatsappLink(
              locale === "es"
                ? "Hola SoftCloud Studio, quiero cotizar un proyecto cerrado en COP."
                : "Hi SoftCloud Studio, I'd like a fixed-scope project quote in USD."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-800"
          >
            {t("plans.contactLink")}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
