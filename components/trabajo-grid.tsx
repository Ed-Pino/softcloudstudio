"use client"

import { useState } from "react"
import Link from "next/link"
import { CATEGORIAS, getCategoriaStyle, type Caso } from "@/lib/casos"

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
          const catStyle = getCategoriaStyle(opcion)
          return (
            <button
              key={opcion}
              type="button"
              onClick={() => setFiltro(opcion)}
              aria-pressed={activo}
              className={
                activo
                  ? `rounded-full px-4 py-1.5 text-sm font-medium transition-all ${catStyle.activeBtn}`
                  : `rounded-full border border-zinc-200/80 bg-white px-4 py-1.5 text-sm text-zinc-600 transition-all ${catStyle.hoverBtn}`
              }
            >
              <span className="inline-flex items-center gap-1.5">
                {opcion !== TODOS ? (
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      activo ? "bg-white" : catStyle.dot
                    }`}
                  />
                ) : null}
                {opcion}
              </span>
              <span
                className={`ml-2 text-xs ${
                  activo ? "text-white/80" : "text-zinc-400"
                }`}
              >
                {contar(opcion)}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibles.map((caso) => {
          const catStyle = getCategoriaStyle(caso.categoria)
          return (
            <Link
              key={caso.slug}
              href={`/trabajo/${caso.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${catStyle.badge}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${catStyle.dot}`} />
                    {caso.categoria}
                  </span>
                  {caso.destacado ? (
                    <span className="rounded-full border border-amber-200/80 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
                      Destacado
                    </span>
                  ) : null}
                </div>

                <h2 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-indigo-600">
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
                    className="rounded-full border border-zinc-100 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-600 transition-colors group-hover:border-indigo-100 group-hover:bg-indigo-50/40"
                  >
                    {tech}
                  </span>
                ))}
                {caso.demo ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Demo en vivo
                  </span>
                ) : null}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
