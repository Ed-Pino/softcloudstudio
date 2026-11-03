import { timingSafeEqual } from "node:crypto"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"
import { NextResponse } from "next/server"
import { z } from "zod"
import { createSupabaseAdmin } from "@/lib/supabase-admin"

const findingSchema = z.object({
  resourceId: z.string().trim().min(1).max(200),
  category: z.enum(["ghost_ec2", "unattached_ebs", "idle_rds", "other"]),
  monthlyWaste: z.number().finite().min(0).max(100_000_000),
})

const reportSchema = z.object({
  findings: z.array(findingSchema).max(500),
})

const reportCopy = {
  es: {
    title: "Reporte de optimización AWS",
    company: "Empresa",
    spend: "Gasto mensual analizado",
    generated: "Generado",
    findings: "Hallazgos",
    none: "No se reportaron recursos para este análisis.",
    resource: "Recurso",
    type: "Tipo",
    waste: "Costo estimado evitable por mes",
    categories: {
      ghost_ec2: "Instancia EC2 fantasma",
      unattached_ebs: "Volumen EBS sin adjuntar",
      idle_rds: "Base de datos RDS inactiva",
      other: "Otro recurso",
    },
    disclaimer:
      "Este reporte refleja los hallazgos enviados por el proceso de auditoría. Los ahorros son estimaciones y deben validarse antes de aplicar cambios.",
  },
  en: {
    title: "AWS optimization report",
    company: "Company",
    spend: "Monthly spend analyzed",
    generated: "Generated",
    findings: "Findings",
    none: "No resources were reported for this analysis.",
    resource: "Resource",
    type: "Type",
    waste: "Estimated avoidable monthly cost",
    categories: {
      ghost_ec2: "Ghost EC2 instance",
      unattached_ebs: "Unattached EBS volume",
      idle_rds: "Idle RDS database",
      other: "Other resource",
    },
    disclaimer:
      "This report reflects findings supplied by the audit process. Savings are estimates and must be validated before changes are applied.",
  },
} as const

function isAuthorized(request: Request) {
  const secret = process.env.AUDIT_BOT_SECRET
  const authorization = request.headers.get("authorization")

  if (!secret || !authorization?.startsWith("Bearer ")) return false

  const provided = Buffer.from(authorization.slice("Bearer ".length))
  const expected = Buffer.from(secret)
  return provided.length === expected.length && timingSafeEqual(provided, expected)
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const parsedId = z.string().uuid().safeParse(id)
  if (!parsedId.success) {
    return NextResponse.json({ error: "invalid_audit_id" }, { status: 400 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "invalid_json" }, { status: 400 })
    }
    throw error
  }

  const parsed = reportSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_report" }, { status: 400 })
  }

  const supabase = createSupabaseAdmin()
  if (!supabase) {
    return NextResponse.json(
      { error: "audit_service_not_configured" },
      { status: 503 }
    )
  }

  const { data: audit, error: auditError } = await supabase
    .from("audits")
    .select("id, locale, currency, company, aws_monthly_spend")
    .eq("id", id)
    .single()

  if (auditError || !audit) {
    if (auditError?.code !== "PGRST116") {
      console.error("Could not load AWS audit for report:", auditError?.code)
      return NextResponse.json({ error: "audit_lookup_failed" }, { status: 500 })
    }
    return NextResponse.json({ error: "audit_not_found" }, { status: 404 })
  }

  const locale = audit.locale === "en" ? "en" : "es"
  const copy = reportCopy[locale]
  const pdf = await PDFDocument.create()
  const font = await pdf.embedFont(StandardFonts.Helvetica)
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold)
  let page = pdf.addPage([612, 792])
  let y = 740
  const left = 48
  const currency = audit.currency === "USD" ? "USD" : "COP"
  const formatMoney = (amount: number) =>
    new Intl.NumberFormat(locale === "es" ? "es-CO" : "en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount)

  const drawText = (text: string, size = 11, isBold = false) => {
    if (y < 70) {
      page = pdf.addPage([612, 792])
      y = 740
    }
    page.drawText(text, {
      x: left,
      y,
      size,
      font: isBold ? bold : font,
      color: rgb(0.1, 0.1, 0.12),
      maxWidth: 516,
    })
    y -= size + 12
  }

  drawText(copy.title, 20, true)
  y -= 10
  drawText(`${copy.company}: ${audit.company}`, 12, true)
  drawText(
    `${copy.spend}: ${formatMoney(Number(audit.aws_monthly_spend))}`
  )
  drawText(
    `${copy.generated}: ${new Intl.DateTimeFormat(
      locale === "es" ? "es-CO" : "en-US",
      { dateStyle: "long", timeStyle: "short", timeZone: "UTC" }
    ).format(new Date())}`
  )
  y -= 8
  drawText(copy.findings, 15, true)

  if (parsed.data.findings.length === 0) {
    drawText(copy.none)
  }

  for (const finding of parsed.data.findings) {
    drawText(`${copy.resource}: ${finding.resourceId}`, 11, true)
    drawText(
      `${copy.type}: ${copy.categories[finding.category]}`
    )
    drawText(`${copy.waste}: ${formatMoney(finding.monthlyWaste)}`)
    y -= 4
  }

  y = Math.max(y - 8, 48)
  page.drawText(copy.disclaimer, {
    x: left,
    y,
    size: 9,
    font,
    color: rgb(0.35, 0.35, 0.38),
    maxWidth: 516,
    lineHeight: 13,
  })

  const pdfBytes = await pdf.save()
  const storagePath = `${id}/${Date.now()}.pdf`
  const { error: uploadError } = await supabase.storage
    .from("audit-reports")
    .upload(storagePath, pdfBytes, {
      contentType: "application/pdf",
      upsert: true,
    })

  if (uploadError) {
    console.error("Could not store AWS audit report:", uploadError.message)
    return NextResponse.json({ error: "report_storage_failed" }, { status: 500 })
  }

  const { error: updateError } = await supabase
    .from("audits")
    .update({
      findings: parsed.data.findings,
      report_path: storagePath,
      report_generated_at: new Date().toISOString(),
      status: "completed",
    })
    .eq("id", id)

  if (updateError) {
    console.error("Could not update AWS audit report:", updateError.code)
    return NextResponse.json({ error: "report_update_failed" }, { status: 500 })
  }

  const { data: signedUrl, error: signedUrlError } = await supabase.storage
    .from("audit-reports")
    .createSignedUrl(storagePath, 60 * 60)

  if (signedUrlError) {
    console.error("Could not sign AWS audit report URL:", signedUrlError.message)
    return NextResponse.json({ error: "report_link_failed" }, { status: 500 })
  }

  return NextResponse.json({
    reportUrl: signedUrl.signedUrl,
    expiresInSeconds: 60 * 60,
  })
}
