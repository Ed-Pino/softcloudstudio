"use client"
import { motion } from "framer-motion"

const tiers = [
  {
    name: "LAUNCH",
    price: "$1,850",
    suffix: "/mo",
    desc: "For startups getting off the ground",
    features: [
      "Brand & website launch + CI/CD básico",
      "Hasta 5 páginas / 1 app MVP",
      "SEO + Analytics + Vercel deploy",
      "30 días soporte post-launch",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "SCALE",
    price: "$3,500",
    suffix: "/mo",
    desc: "For growing teams scaling infrastructure",
    features: [
      "Multi-env + Terraform + K8s",
      "CI/CD & monitoring 24/7 + alertas",
      "Optimización costo AWS -30% garantizado",
      "Dev + DevOps dedicado - mismo timezone USA",
      "48h response SLA",
    ],
    cta: "Start scaling",
    popular: true,
  },
  {
    name: "DEVOPS RESCUE",
    price: "$1,200",
    suffix: " one-time",
    desc: "Para factura AWS alta / deploy roto",
    features: [
      "Emergency audit & remediation",
      "Incident response & on-call",
      "Infra hardening & backups",
      "Si no bajo costo, no cobro",
    ],
    cta: "Book a rescue",
    popular: false,
  },
]

export function PricingANML() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="text-center"
        >
          <p className="tracking-[0.3em] text-xs">SOFT CLOUD STUDIO — AGENCY —</p>
          <h2 className="font-serif text-[56px] md:text-[84px] leading-none mt-8">Pricing</h2>
          <p className="mt-6 text-neutral-600 max-w-[600px] mx-auto text-[16px]">
            Simple, transparent pricing for teams building modern cloud products.
            No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ clipPath: "inset(10% 0% 90% 0%)", y: 50, opacity: 0 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.15, ease: [0.77, 0, 0.175, 1] }}
              className={`rounded-[32px] p-8 md:p-10 flex flex-col ${
                tier.popular? "bg-[#E8DDD6]" : "bg-[#F5EEE9]"
              }`}
            >
              <div className="flex justify-between items-start">
                <span className={`px-4 py-1 rounded-full text-[12px] tracking-widest ${tier.popular? "bg-white" : "bg-[#E8DDD6]"}`}>
                  {tier.name}
                </span>
                {tier.popular && (
                  <span className="bg-[#9C8A75] text-white px-4 py-1 rounded-full text-[11px] tracking-widest">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <div className="mt-8 font-serif text-[56px] leading-none">
                {tier.price}
                <span className="text-[18px] font-sans ml-1 tracking-normal">{tier.suffix}</span>
              </div>
              <p className="mt-3 text-[14px]">{tier.desc}</p>

              <div className="h-[1px] bg-black/10 my-8" />

              <ul className="space-y-3 flex-1">
                {tier.features.map(f => (
                  <li key={f} className="text-[14px] leading-[1.4]">• {f}</li>
                ))}
              </ul>

              <button
                className={`w-full mt-10 rounded-full py-3.5 text-[15px] transition ${
                  tier.popular? "bg-black text-white hover:bg-neutral-800" : "border border-black hover:bg-black hover:text-white"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-10 text-[13px] text-neutral-500">
          All plans include free consultation • Custom add-ons available • Annual billing saves 15%
        </p>
      </div>
    </section>
  )
}
