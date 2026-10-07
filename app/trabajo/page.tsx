import type { Metadata } from "next"
import { TrabajoGrid } from "@/components/trabajo-grid"
import { casos } from "@/lib/casos"
import { GITHUB_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Trabajo",
  description:
    "Proyectos de desarrollo de SoftCloud Studio: e-commerce, APIs REST, integraciones con WhatsApp e IA. Código y demos públicas.",
  alternates: { canonical: "/trabajo" },
}

export default function TrabajoPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
          Trabajo
        </p>
        <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          Proyectos que puedes abrir y revisar.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          Cada caso enlaza a su repositorio público y, cuando existe, a su demo
          funcionando. Son proyectos propios de desarrollo: los mostramos con
          código incluido, no con capturas.
        </p>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <TrabajoGrid casos={casos} />

          <p className="mt-8 text-xs text-zinc-500">
            Repositorios públicos en{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-900"
            >
              github.com/Ed-Pino
            </a>
            . Los proyectos de cliente se publican solo con autorización expresa.
          </p>
        </div>
      </section>
    </main>
  )
}
