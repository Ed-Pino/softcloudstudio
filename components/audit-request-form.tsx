"use client"

import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import type { Locale } from "@/i18n/routing"

export function AuditRequestForm({ spend }: { spend: number }) {
  const t = useTranslations("aws")
  const locale = useLocale() as Locale
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  )

  async function submitRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      locale,
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      awsMonthlySpend: spend,
      website: formData.get("website") ?? "",
    }

    try {
      const response = await fetch("/api/audits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        setStatus("error")
        return
      }

      setStatus("success")
      form.reset()
    } catch (error) {
      console.error("Could not submit AWS audit request:", error)
      setStatus("error")
    }
  }

  return (
    <form
      className="mt-8 grid gap-4 sm:grid-cols-2"
      onSubmit={submitRequest}
      aria-describedby="audit-request-status audit-request-privacy"
    >
      <label className="grid gap-1.5 text-sm text-zinc-300">
        {t("name")}
        <input
          required
          maxLength={120}
          name="name"
          autoComplete="name"
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none focus:border-orange-500"
        />
      </label>
      <label className="grid gap-1.5 text-sm text-zinc-300">
        {t("company")}
        <input
          required
          maxLength={160}
          name="company"
          autoComplete="organization"
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none focus:border-orange-500"
        />
      </label>
      <label className="grid gap-1.5 text-sm text-zinc-300 sm:col-span-2">
        {t("email")}
        <input
          required
          maxLength={254}
          name="email"
          type="email"
          autoComplete="email"
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none focus:border-orange-500"
        />
      </label>
      <label
        aria-hidden="true"
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
      >
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-orange-500 px-7 py-4 text-center font-black text-black transition hover:bg-orange-400 disabled:cursor-wait disabled:opacity-60 sm:col-span-2"
      >
        {status === "submitting" ? t("submitting") : t("submit")}
      </button>
      <p
        id="audit-request-status"
        aria-live="polite"
        className="text-center text-sm text-zinc-300 sm:col-span-2"
      >
        {status === "success" ? t("success") : null}
        {status === "error" ? t("error") : null}
      </p>
      <p id="audit-request-privacy" className="text-center text-xs text-zinc-500 sm:col-span-2">
        {t("privacy")}
      </p>
    </form>
  )
}
