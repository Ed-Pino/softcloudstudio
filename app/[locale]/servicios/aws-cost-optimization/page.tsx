import type { Metadata } from "next"
import { getPathname } from "@/i18n/navigation"
import { AwsCostOptimization } from "@/components/aws-cost-optimization"
import type { Locale } from "@/i18n/routing"
import { SITE_URL } from "@/lib/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEnglish = locale === "en"
  const esPath = getPathname({
    locale: "es",
    href: "/servicios/aws-cost-optimization",
  })
  const enPath = getPathname({
    locale: "en",
    href: "/servicios/aws-cost-optimization",
  })
  const canonical = getPathname({
    locale: locale as Locale,
    href: "/servicios/aws-cost-optimization",
  })

  return {
    title: isEnglish
      ? "AWS Cost Optimization | SoftCloud Studio"
      : "Optimización de costos AWS | SoftCloud Studio",
    description: isEnglish
      ? "Explore pilot pricing for an AWS Cost Audit and ongoing FinOps support."
      : "Conoce las tarifas piloto para una auditoría de costos AWS y acompañamiento FinOps.",
    alternates: {
      canonical,
      languages: {
        es: `${SITE_URL}${esPath}`,
        en: `${SITE_URL}${enPath}`,
      },
    },
  }
}

export default function AwsCostOptimizationPage() {
  return <AwsCostOptimization />
}
