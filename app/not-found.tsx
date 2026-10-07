import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { CTA_HREF } from "@/lib/site"

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
        Error 404
      </p>
      <h1 className="mt-8 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        Esta página no existe.
      </h1>
      <p className="mt-6 max-w-md leading-relaxed text-zinc-600">
        Puede que el enlace esté roto o que la página se haya movido. Te dejamos
        dos caminos cortos.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/trabajo"
          className={buttonVariants({
            size: "lg",
            className: "rounded-full px-7",
          })}
        >
          Ver trabajo
        </Link>
        <a
          href={CTA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "rounded-full px-7",
          })}
        >
          Escribir por WhatsApp
        </a>
      </div>
    </main>
  )
}
