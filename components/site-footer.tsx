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
  { href: WHATSAPP_URL, label: "WhatsApp", external: true, hoverClass: "hover:text-emerald-600" },
  { href: GITHUB_URL, label: "GitHub", external: true, hoverClass: "hover:text-indigo-600" },
  { href: whatsappLink("Hola, quiero hablar de un proyecto."), label: "Escríbenos", external: true, hoverClass: "hover:text-blue-600" },
]

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200/80 bg-zinc-50/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 font-bold tracking-tight text-zinc-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 text-xs font-bold text-white shadow-sm shadow-indigo-500/25">
                SC
              </span>
              <span>
                SoftCloud <span className="text-indigo-600">Studio</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Diseño &amp; Desarrollo de Software
              <br />
              <span className="mt-2 inline-flex items-center gap-1.5 font-medium text-zinc-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                {LOCATION}
              </span>
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Sitio
            </span>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-600 transition-colors hover:text-indigo-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Contacto
            </span>
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`text-zinc-600 transition-colors ${item.hoverClass}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 border-t border-zinc-200/60 pt-6 text-xs text-zinc-400">
          © {COPYRIGHT_YEAR} {SITE_NAME} — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
