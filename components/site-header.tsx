import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { CTA_HREF, NAV } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Link
          href="/"
          className="group order-1 flex items-center gap-2.5 whitespace-nowrap font-bold tracking-tight text-zinc-900 transition-colors hover:text-indigo-600"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 text-xs font-bold text-white shadow-sm shadow-indigo-500/30 transition-transform group-hover:scale-105">
            SC
          </span>
          <span className="font-semibold">
            SoftCloud <span className="text-indigo-600">Studio</span>
          </span>
        </Link>

        <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-2 text-sm font-medium md:order-2 md:w-auto md:gap-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-zinc-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="order-2 flex items-center gap-3 md:order-3">
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
        </div>
      </div>
    </header>
  )
}
