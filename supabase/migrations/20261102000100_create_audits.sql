create table if not exists public.audits (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  locale text not null check (locale in ('es', 'en')),
  currency text not null check (currency in ('COP', 'USD')),
  vat_rate numeric(4, 3) not null,
  client_name text not null,
  company text not null,
  email text not null,
  aws_monthly_spend numeric(14, 2) not null check (aws_monthly_spend > 0),
  estimated_monthly_savings numeric(14, 2) not null check (estimated_monthly_savings >= 0),
  status text not null default 'requested'
    check (status in ('requested', 'processing', 'completed', 'failed')),
  findings jsonb not null default '[]'::jsonb,
  report_path text,
  report_generated_at timestamptz,
  check (
    (locale = 'es' and currency = 'COP' and vat_rate = 0.19)
    or (locale = 'en' and currency = 'USD' and vat_rate = 0)
  )
);

alter table public.audits enable row level security;

insert into storage.buckets (id, name, public)
values ('audit-reports', 'audit-reports', false)
on conflict (id) do nothing;
