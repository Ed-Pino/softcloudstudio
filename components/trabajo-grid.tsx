"use client"

import { useState } from "react"
import Link from "next/link"
import { CATEGORIAS, type Caso } from "@/lib/casos"

const TODOS = "Todos" as const

export function TrabajoGrid({ casos }: { casos: Caso[] }) {
  const [filtro, setFiltro] = useState<(typeof CATEGORIAS)[number] | typeof TODOS>(
    TODOS
  )

  const opciones = [TODOS, ...CATEGORIAS]
  const visibles =
    filtro === TODOS ? casos : casos.filter((caso) => caso.categoria === filtro)

  const contar = (opcion: (typeof opciones)[number]) =>
    opcion === TODOS
      ? casos.length
      : casos.filter((caso) => caso.categoria === opcion).length

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {opciones.map((opcion) => {
          const activo = filtro === opcion
          return (
            <button
              key={opcion}
              type="button"
              onClick={() => setFiltro(opcion)}
              aria-pressed={activo}
              className={
                activo
                  ? "rounded-full bg-zinc-900 px-4 py-1.5 text-sm text-white"
                  : "rounded-full border border-zinc-200 px-4 py-1.5 text-sm text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900"
              }
            >
              {opcion}
              <span className="ml-1.5 text-zinc-400">{contar(opcion)}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-3">
        {visibles.map((caso) => (
          <Link
            key={caso.slug}
            href={`/trabajo/${caso.slug}`}
            className="group flex flex-col justify-between bg-white p-8 transition-colors hover:bg-zinc-50"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                {caso.categoria}
              </span>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">
                {caso.titulo}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {caso.resumen}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {caso.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600"
                >
                  {tech}
                </span>
              ))}
              {caso.demo ? (
                <span className="rounded-full border border-zinc-900 px-2.5 py-1 text-xs text-zinc-900">
                  Demo en vivo
                </span>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
