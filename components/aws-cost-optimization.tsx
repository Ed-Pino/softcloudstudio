"use client"

import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { COPYRIGHT_YEAR, whatsappLink } from "@/lib/site"
import { AuditRequestForm } from "@/components/audit-request-form"
import type { Locale } from "@/i18n/routing"

const PLANS = [
  {
    name: "audit",
    amount: 299,
    billing: "oneTime",
    features: ["auditAccount", "auditScope", "auditAnalysis", "auditReport", "auditMeeting"],
    popular: false,
  },
  {
    name: "starter",
    amount: 399,
    billing: "monthly",
    features: ["monthlyReview", "monthlyActionsTwo", "monthlyReport", "budgetAlerts", "businessHoursSupport"],
    popular: false,
  },
  {
    name: "optimizer",
    amount: 799,
    billing: "monthly",
    features: [
      "everythingInStarter",
      "monthlyActionsSix",
      "resourceReview",
      "gravitonGp3Assessment",
      "agreedTerraformAutomation",
      "biweeklyMeetings",
    ],
    popular: true,
  },
  {
    name: "scale",
    amount: 1499,
    billing: "monthly",
    features: ["multipleAccounts", "advancedAutomation", "commitmentPlanning", "costGovernance", "infrastructureTracking"],
    popular: false,
  },
] as const

export function AwsCostOptimization() {
  const t = useTranslations("aws")
  const locale = useLocale() as Locale
  const isSpanish = locale === "es"
  const currency = isSpanish ? "COP" : "USD"
  const minimumSpend = isSpanish ? 2_000_000 : 500
  const maximumSpend = isSpanish ? 80_000_000 : 20_000
  const step = isSpanish ? 1_000_000 : 100
  const [spend, setSpend] = useState(isSpanish ? 17_000_000 : 4_200)
  const savings = spend * 0.28
  const newBill = spend - savings
  const formatMoney = (amount: number) =>
    new Intl.NumberFormat(isSpanish ? "es-CO" : "en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm text-orange-400">
          🔥 {t("badge")}
        </div>
        <h1 className="text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
          {t("title")}
          <span className="text-orange-500"> {t("guarantee")}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
          {t("description")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#calculator"
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:bg-zinc-200"
          >
            {t("calculate")} →
          </a>
          <a
            href="#plans"
            className="rounded-full border border-zinc-700 px-8 py-4 font-bold transition hover:bg-zinc-900"
          >
            {t("book")}
          </a>
        </div>
        <p className="mt-4 text-sm text-zinc-500">{t("proof")}</p>
      </section>

      <section id="calculator" className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-8 md:p-12">
          <h2 className="text-3xl font-bold">{t("wasting")}</h2>
          <div className="mt-8">
            <label htmlFor="aws-spend" className="text-zinc-400">
              {t("currentSpend")}: {formatMoney(spend)}
            </label>
            <input
              id="aws-spend"
              type="range"
              min={minimumSpend}
              max={maximumSpend}
              step={step}
              value={spend}
              onChange={(event) => setSpend(Number(event.target.value))}
              className="mt-4 w-full accent-orange-500"
            />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-black p-6">
                <p className="text-sm text-zinc-500">{t("currentBill")}</p>
                <p className="mt-1 text-2xl font-bold">{formatMoney(spend)}</p>
              </div>
              <div className="rounded-2xl bg-orange-500 p-6 text-black">
                <p className="text-sm text-black/60">{t("youSave")}</p>
                <p className="mt-1 text-3xl font-black">
                  {formatMoney(savings)}{t("perMonth")}
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-black p-6">
                <p className="text-sm text-zinc-500">{t("newBill")}</p>
                <p className="mt-1 text-2xl font-bold text-green-400">
                  {formatMoney(newBill)}
                </p>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-zinc-500">{t("note")}</p>
          </div>

          <div id="audit-request" className="mt-12 border-t border-zinc-800 pt-10">
            <h3 className="text-2xl font-bold">{t("requestAudit")}</h3>
            <AuditRequestForm spend={spend} />
          </div>
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t("plans")}</h2>
          <p className="mt-4 text-zinc-400">{t("pilotPricingNote")}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[1.5rem] border p-8 ${
              plan.popular
                ? "border-white bg-white text-black"
                : "border-zinc-800 bg-zinc-900"
            }`}
          >
            {plan.popular ? (
              <span className="rounded-full bg-black px-3 py-1 text-xs text-white">
                {t("popular")}
              </span>
            ) : null}
            <h3 className="mt-4 text-2xl font-bold">{t(plan.name)}</h3>
            <p className={`text-sm ${plan.popular ? "text-zinc-600" : "text-zinc-500"}`}>
              {t(`${plan.name}Subtitle`)}
            </p>
            <p className="mt-4 text-3xl font-black">
              {plan.name === "scale" ? `${t("from")} ` : null}
              ${plan.amount.toLocaleString("en-US")} USD
              <span className="text-base font-medium">
                {t(plan.billing === "oneTime" ? "oneTime" : "perMonth")}
              </span>
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span aria-hidden="true">✓</span>
                  <span>{t(feature)}</span>
                </li>
              ))}
            </ul>
            <a
              href={
                plan.name === "audit"
                  ? "#audit-request"
                  : whatsappLink(
                      t("planWhatsappMessage", { planName: t(plan.name) })
                    )
              }
              target={plan.name === "audit" ? undefined : "_blank"}
              rel={plan.name === "audit" ? undefined : "noopener noreferrer"}
              className={`mt-8 block rounded-full py-3 text-center font-bold ${
                plan.popular ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {t(plan.name === "audit" ? "requestAudit" : "contactPlan")}
            </a>
          </div>
        ))}
        </div>
      </section>
      <footer className="py-12 text-center text-sm text-zinc-600">
        © {COPYRIGHT_YEAR} {t("footer")}
      </footer>
    </main>
  )
}
