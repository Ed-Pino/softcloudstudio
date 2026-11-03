import { NextResponse } from "next/server"
import { z } from "zod"
import { createSupabaseAdmin } from "@/lib/supabase-admin"

const requestSchema = z.object({
  locale: z.enum(["es", "en"]),
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(254),
  awsMonthlySpend: z.number().finite().positive().max(100_000_000),
  website: z.string().max(0),
})

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "invalid_json" }, { status: 400 })
    }
    throw error
  }

  const parsed = requestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_request", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const { locale, name, company, email, awsMonthlySpend } = parsed.data
  const supabase = createSupabaseAdmin()

  if (!supabase) {
    return NextResponse.json(
      { error: "audit_service_not_configured" },
      { status: 503 }
    )
  }

  const currency = locale === "es" ? "COP" : "USD"
  const vatRate = locale === "es" ? 0.19 : 0

  const { data, error } = await supabase
    .from("audits")
    .insert({
      locale,
      currency,
      vat_rate: vatRate,
      client_name: name,
      company,
      email,
      aws_monthly_spend: awsMonthlySpend,
      estimated_monthly_savings: Math.round(awsMonthlySpend * 0.28 * 100) / 100,
      status: "requested",
    })
    .select("id")
    .single()

  if (error) {
    console.error("Could not save AWS audit request:", error.code)
    return NextResponse.json({ error: "audit_request_failed" }, { status: 500 })
  }

  return NextResponse.json({ auditId: data.id }, { status: 201 })
}
