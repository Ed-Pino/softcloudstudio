"use client"

import { useEffect, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { whatsappLink } from "@/lib/site"
import { AuditRequestForm } from "@/components/audit-request-form"
import type { Locale } from "@/i18n/routing"

// % de cotizaciones muertas que revivimos - tu número de venta
const RECOVERY_RATE = 0.20
const DEAD_RATE = 0.40

type PlanCta = "form" | "whatsapp"

type Plan = {
  name: string
  amount: number
  billing: "oneTime" | "monthly" | "commission"
  features: readonly string[]
  popular: boolean
  ctaType: PlanCta
  hasFromPrefix: boolean
}

const PLANS: Plan[] = [
  {
    name: "audit",
    amount: 0,
    billing: "oneTime",
    features: ["auditQuotes", "auditDead", "auditAnalysis", "auditReport", "auditMeeting"],
    popular: false,
    ctaType: "form",
    hasFromPrefix: false,
  },
  {
    name: "starter",
    amount: 399,
    billing: "monthly",
    features: ["followup3days", "emailsPerWeek", "financingOffer", "weeklyReport", "businessHoursSupport"],
    popular: false,
    ctaType: "whatsapp",
    hasFromPrefix: false,
  },
  {
    name: "optimizer",
    amount: 799,
    billing: "monthly",
    features: [
      "everythingInStarter",
      "followupUnlimited",
      "financingCustom",
      "objectionHandling",
      "biweeklyMeetings",
      "crmIntegration",
    ],
    popular: true,
    ctaType: "whatsapp",
    hasFromPrefix: false,
  },
  {
    name: "scale",
    amount: 15,
    billing: "commission",
    features: ["fullRecoveryTeam", "dedicatedCloser", "financingPartner", "costGovernance", "revenueTracking"],
    popular: false,
    ctaType: "whatsapp",
    hasFromPrefix: true,
  },
]

function getLocaleDefaults(isSpanish: boolean) {
  return {
    currency: isSpanish ? "COP" : "USD",
    // quotes per month
    minQuotes: 20,
    maxQuotes: 500,
    stepQuotes: 10,
    defaultQuotes: 100,
    // ticket promedio
    minTicket: isSpanish ? 1_000_000 : 500,
    maxTicket: isSpanish ? 20_000_000 : 10_000,
    stepTicket: isSpanish ? 500_000 : 100,
    defaultTicket: isSpanish ? 8_000_000 : 2_000,
  }
}

export function RevenioRecovery() {
  const t = useTranslations("revenio")
  const locale = useLocale() as Locale
  const isSpanish = locale === "es"

  const { currency, minQuotes, maxQuotes, stepQuotes, defaultQuotes, minTicket, maxTicket, stepTicket, defaultTicket } =
    getLocaleDefaults(isSpanish)

  const [quotes, setQuotes] = useState(defaultQuotes)
  const [ticket, setTicket] = useState(defaultTicket)

  useEffect(() => {
    const d = getLocaleDefaults(isSpanish)
    setQuotes(d.defaultQuotes)
    setTicket(d.defaultTicket)
  }, [isSpanish])

  const deadQuotes = Math.round(quotes * DEAD_RATE)
  const recoveredQuotes = Math.round(deadQuotes * RECOVERY_RATE)
  const moneyLost = deadQuotes * ticket
  const moneyRecovered = recoveredQuotes * ticket
  const commission = moneyRecovered * 0.15

  const formatMoney = (amount: number) =>
    new Intl.NumberFormat(isSpanish ? "es-CO" : "en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
          💰 {t("badge")}
        </div>
        <h1 className="text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
          {t("title")}
          <span className="text-emerald-500"> {t("guarantee")}</span>
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
          <div className="mt-8 space-y-8">
            <div>
              <label htmlFor="revenio-quotes" className="text-zinc-400">
                {t("quotesPerMonth")}: {quotes}
              </label>
              <input
                id="revenio-quotes"
                type="range"
                min={minQuotes}
                max={maxQuotes}
                step={stepQuotes}
                value={quotes}
                onChange={(e) => setQuotes(Number(e.target.value))}
                className="mt-4 w-full accent-emerald-500"
              />
              <p className="mt-2 text-sm text-zinc-500">{t("deadQuotes", { count: deadQuotes })} - 40%</p>
            </div>

            <div>
              <label htmlFor="revenio-ticket" className="text-zinc-400">
                {t("avgTicket")}: {formatMoney(ticket)}
              </label>
              <input
                id="revenio-ticket"
                type="range"
                min={minTicket}
                max={maxTicket}
                step={stepTicket}
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="mt-4 w-full accent-emerald-500"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-black p-6">
                <p className="text-sm text-zinc-500">{t("moneyLost")}</p>
                <p className="mt-1 text-2xl font-bold">{formatMoney(moneyLost)}</p>
                <p className="text-xs text-zinc-500 mt-1">{deadQuotes} {t("dead")}</p>
              </div>
              <div className="rounded-2xl bg-emerald-500 p-6 text-black">
                <p className="text-sm text-black/60">{t("youRecover")}</p>
                <p className="mt-1 text-3xl font-black">
                  {formatMoney(moneyRecovered)}{t("perMonth")}
                </p>
                <p className="text-xs text-black/70 mt-1">{recoveredQuotes} {t("recovered")}</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-black p-6">
                <p className="text-sm text-zinc-500">{t("ourFee")}</p>
                <p className="mt-1 text-2xl font-bold text-emerald-400">
                  {formatMoney(commission)}
                </p>
                <p className="text-xs text-zinc-500 mt-1">15% {t("onlyIfRecovered")}</p>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-zinc-500">{t("note")}</p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-xl bg-black p-4 border border-zinc-800"><b className="block text-lg">Day 1</b>{t("day1")}</div>
            <div className="rounded-xl bg-black p-4 border border-zinc-800"><b className="block text-lg">Day 2</b>{t("day2")}</div>
            <div className="rounded-xl bg-black p-4 border border-zinc-800"><b className="block text-lg">Day 3</b>{t("day3")}</div>
          </div>

          <div id="audit-request" className="mt-12 border-t border-zinc-800 pt-10">
            <h3 className="text-2xl font-bold">{t("requestAudit")}</h3>
            <AuditRequestForm spend={moneyLost} />
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
                {plan.billing === "commission" ? (
                  <>
                    {t("from")} {plan.amount}% {t("ofRecovered")}
                  </>
                ) : plan.amount === 0 ? (
                  <>{t("free")}</>
                ) : (
                  <>
                    ${plan.amount.toLocaleString("en-US")} USD
                    <span className="text-base font-medium">
                      {t(plan.billing === "oneTime" ? "oneTime" : "perMonth")}
                    </span>
                  </>
                )}
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
                  plan.ctaType === "form"
                    ? "#audit-request"
                    : whatsappLink(
                        t("planWhatsappMessage", { planName: t(plan.name) })
                      )
                }
                target={plan.ctaType === "form" ? undefined : "_blank"}
                rel={plan.ctaType === "form" ? undefined : "noopener noreferrer"}
                className={`mt-8 block rounded-full py-3 text-center font-bold ${
                  plan.popular ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {t(plan.ctaType === "form" ? "requestAudit" : "contactPlan")}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
