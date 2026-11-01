"use client";

import { useState } from "react";

export default function AwsCostOptimizationPage() {
  const [spend, setSpend] = useState(4200);
  const saving = spend * 0.28;
  const newBill = spend - saving;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm text-orange-400">
          🔥 Powered by Ghost-Load Tech • SoftCloudStudio
        </div>
        <h1 className="text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
          Cut your AWS bill by
          <span className="text-orange-500"> 20-30%</span>
          <br /> guaranteed.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
          Same performance. Lower cost. We audit your AWS in 48h.
          If we don&apos;t save you, you don&apos;t pay.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#calculator"
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:bg-zinc-200"
          >
            Calculate My Savings →
          </a>
          <a
            href="https://cal.com/softcloudstudio"
            className="rounded-full border border-zinc-700 px-8 py-4 font-bold transition hover:bg-zinc-900"
          >
            Book Free Audit
          </a>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Used by SaaS from SF to Madrid. No code changes required.
        </p>
      </section>

      <section id="calculator" className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-8 md:p-12">
          <h2 className="text-3xl font-bold">How much are you wasting?</h2>
          <div className="mt-8">
            <label className="text-zinc-400">
              Current AWS Monthly Spend: ${spend.toLocaleString()}
            </label>
            <input
              type="range"
              min={500}
              max={20000}
              step={100}
              value={spend}
              onChange={(e) => setSpend(Number(e.target.value))}
              className="mt-4 w-full accent-orange-500"
            />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-black p-6">
                <p className="text-sm text-zinc-500">Current Bill</p>
                <p className="mt-1 text-2xl font-bold">${spend.toLocaleString()}</p>
              </div>
              <div className="rounded-2xl bg-orange-500 p-6 text-black">
                <p className="text-sm text-black/60">You Save (avg 28%)</p>
                <p className="mt-1 text-3xl font-black">
                  ${saving.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-black p-6">
                <p className="text-sm text-zinc-500">New Bill</p>
                <p className="mt-1 text-2xl font-bold text-green-400">
                  ${newBill.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>
            <a
              href="https://buy.stripe.com/YOUR_LINK"
              className="mt-8 block w-full rounded-full bg-orange-500 py-4 text-center text-lg font-black text-black transition hover:bg-orange-400"
            >
              Get My ${saving.toLocaleString(undefined, { maximumFractionDigits: 0 })} Back → Start Free Audit
            </a>
            <p className="mt-3 text-center text-xs text-zinc-500">
              48h audit • No credit card • VAT 0% for non-CO companies
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        {[
          {
            name: "Starter",
            price: "$499/mo",
            for: "AWS < $2k/mo",
            feat: ["Monthly cost review", "2 rightsizing actions", "Slack support"],
          },
          {
            name: "Optimizer",
            price: "$1,200/mo",
            for: "Most Popular",
            feat: [
              "Everything in Starter",
              "Unlimited rightsizing",
              "Graviton + GP3 migration",
              "Weekly report (Ghost-Load PDF)",
            ],
            pop: true,
          },
          {
            name: "Scale",
            price: "$2,500/mo",
            for: "AWS > $10k/mo",
            feat: [
              "Everything in Optimizer",
              "24/7 FinOps on-call",
              "Terraform automation",
              "Reserved Instances planning",
            ],
          },
        ].map((p) => (
          <div
            key={p.name}
            className={`rounded-[1.5rem] border p-8 ${
              p.pop ? "scale-105 border-white bg-white text-black" : "border-zinc-800 bg-zinc-900"
            }`}
          >
            {p.pop && (
              <span className="rounded-full bg-black px-3 py-1 text-xs text-white">
                MOST POPULAR
              </span>
            )}
            <h3 className="mt-4 text-2xl font-bold">{p.name}</h3>
            <p className={`text-sm ${p.pop ? "text-zinc-600" : "text-zinc-500"}`}>{p.for}</p>
            <p className="mt-4 text-4xl font-black">{p.price}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {p.feat.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <a
              href="https://buy.stripe.com/YOUR_LINK"
              className={`mt-8 block rounded-full py-3 text-center font-bold ${
                p.pop ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Start Free Audit
            </a>
          </div>
        ))}
      </section>

      <footer className="py-12 text-center text-sm text-zinc-600">
        © 2026 SoftCloudStudio SAS • Bogotá • Serving founders worldwide • VAT 0% Export
      </footer>
    </main>
  );
}
