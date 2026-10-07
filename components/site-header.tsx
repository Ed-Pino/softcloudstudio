import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { CTA_HREF, NAV } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
            SC
          </span>
          <span>SoftCloud Studio</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
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

        <div className="flex items-center gap-2">
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ className: "rounded-full" })}
          >
            Hablemos
          </a>

          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700">
              Menú
            </summary>
            <nav className="absolute right-0 z-50 mt-2 flex w-44 flex-col rounded-xl border border-zinc-200 bg-white p-2 shadow-lg">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
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
