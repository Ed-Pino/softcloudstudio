import Link from "next/link"
import {
  COPYRIGHT_YEAR,
  GITHUB_URL,
  LOCATION,
  NAV,
  SITE_NAME,
  WHATSAPP_URL,
  whatsappLink,
} from "@/lib/site"

const SOCIAL = [
  { href: WHATSAPP_URL, label: "WhatsApp", external: true },
  { href: GITHUB_URL, label: "GitHub", external: true },
  { href: whatsappLink("Hola, quiero hablar de un proyecto."), label: "Escríbenos", external: true },
]

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 font-bold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                SC
              </span>
              <span>{SITE_NAME}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Diseño &amp; Desarrollo
              <br />
              {LOCATION}
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Sitio
            </span>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Contacto
            </span>
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 text-xs text-zinc-500">
          © {COPYRIGHT_YEAR} {SITE_NAME} — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
