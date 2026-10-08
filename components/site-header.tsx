import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { CTA_HREF, NAV } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-zinc-900 transition-colors hover:text-indigo-600"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 text-xs font-bold text-white shadow-sm shadow-indigo-500/30 transition-transform group-hover:scale-105">
            SC
          </span>
          <span className="font-semibold">
            SoftCloud <span className="text-indigo-600">Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
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

        <div className="flex items-center gap-3">
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "whatsapp",
              className: "rounded-full shadow-sm shadow-emerald-600/20",
            })}
          >
            Hablemos
          </a>

          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:border-indigo-300">
              Menú
            </summary>
            <nav className="absolute right-0 z-50 mt-2 flex w-44 flex-col rounded-xl border border-zinc-200 bg-white p-2 shadow-xl">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
