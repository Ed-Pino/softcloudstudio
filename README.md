# SoftCloud Studio

<p align="center">
  <a href="https://softcloudstudio.dev" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/SoftCloud-Studio-0F172A?style=for-the-badge&logo=next.js&logoColor=white" alt="SoftCloud Studio" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Status-Active-22C55E?style=flat-square" alt="Active status" />
</p>

<p align="center">
  <strong>Build smarter digital products for modern businesses.</strong><br />
  Software a la medida, comercio digital, integraciones y automatización para empresas.
</p>

## Overview

SoftCloud Studio is a product and software studio helping companies turn operational pain into scalable digital solutions. We design and build modern web experiences, internal systems, e-commerce platforms, automation flows, and API integrations that connect the real business to the technology behind it.

Our focus is simple: create products that are useful, fast, measurable, and ready for growth.

## Why SoftCloud Studio

- Product thinking from day one
- Clear architecture and maintainable code
- Fast delivery with business-oriented milestones
- Multi-channel digital experiences
- Integration with WhatsApp, email, AI tools, and cloud services
- Obsession with usability and conversion

## Core services

### 1. Custom software

Internal tools, business apps, dashboards, CRMs, inventory systems, workflows, and operational platforms tailored to real business needs.

### 2. E-commerce

Online stores with a strong focus on conversion, UX, product presentation, checkout flow, payments, and digital sales experience.

### 3. Integrations & automation

Connect your systems with WhatsApp, email, APIs, cloud services, data platforms, and AI-powered automations to remove repetitive work.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Base UI
- Lucide React
- ESLint
- Node.js 20+

## Project structure

```text
.
├── app/
│   ├── [locale]/
│   ├── api/audits/
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ui/
│   ├── audit-request-form.tsx
│   ├── language-switcher.tsx
│   ├── pricing.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   └── trabajo-grid.tsx
├── i18n/
├── messages/
│   ├── en.json
│   └── es.json
├── lib/
│   ├── casos.ts
│   ├── schema.ts
│   ├── site.ts
│   └── utils.ts
├── supabase/migrations/
├── proxy.ts
├── public/
├── .gitignore
├── AGENTS.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── package-lock.json
```

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

### Bilingual routes

The site uses `next-intl` with a required locale prefix and translated route slugs:

- Spanish: `/es`, `/es/servicios`, `/es/servicios/aws-cost-optimization`, `/es/contacto`, `/es/trabajo`
- English: `/en`, `/en/services`, `/en/services/aws-cost-optimization`, `/en/contact`, `/en/work`

Translations live in `messages/es.json` and `messages/en.json`. Add or update keys in both files when changing shared localized content. The language switcher keeps the equivalent page when switching locales.

### AWS audit requests and reports

The AWS calculator collects a contact request through `POST /api/audits`. To enable persistence, configure these server-side environment variables (never expose the service-role key to the browser):

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
AUDIT_BOT_SECRET=...
COP_PER_USD_RATE=
```

Apply the SQL migration in `supabase/migrations/` to create the `audits` table and the private `audit-reports` Storage bucket. Set `COP_PER_USD_RATE` to the current COP-per-USD rate before showing converted Spanish-language plan prices; without it, the site asks for a COP quote instead of inventing a conversion.

The request API accepts `locale`, `name`, `company`, `email`, `awsMonthlySpend`, and the empty honeypot field `website`. It stores locale, currency, VAT rate, and estimated savings with the request. The current product rule maps `es` to COP/19% and `en` to USD/0%; language is not proof of tax jurisdiction or export eligibility, so verify the applicable tax treatment for each invoice.

An external audit process can submit localized findings to `POST /api/audits/{id}/report` using `Authorization: Bearer $AUDIT_BOT_SECRET` and a JSON body such as:

```json
{
  "findings": [
    {
      "resourceId": "resource-id",
      "category": "ghost_ec2",
      "monthlyWaste": 125.5
    }
  ]
}
```

Supported categories are `ghost_ec2`, `unattached_ebs`, `idle_rds`, and `other`. The endpoint creates a Spanish or English PDF based on the saved audit locale, stores it in the private bucket, and returns a signed download URL that expires after one hour. This repository implements request storage and report generation; it does not include an AWS scanner or bot, which must be connected separately. Never send AWS credentials or access keys through the website.

### Production build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Business model

This repository represents the digital presence and product experience of SoftCloud Studio. It is designed as a modern, conversion-focused marketing and portfolio site that communicates expertise, showcases selected work, and drives high-intent business conversations.

## Contact

- Website: https://softcloudstudio.dev
- GitHub: https://github.com/Ed-Pino
- WhatsApp: https://wa.me/573142533524

## Mission

We help businesses move faster with better digital systems, cleaner experiences, and technology that actually supports growth.

---

Built for product-minded companies and ambitious digital transformation.
