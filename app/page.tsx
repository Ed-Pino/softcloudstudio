import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const WHATSAPP_URL = "https://wa.me/573142533524"
const WHATSAPP_QUOTE_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hola SoftCloud Studio, quiero cotizar una página web o una app."
)}`

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* NAV */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center">SC</span>
          SoftCloud Studio
        </div>
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ className: "rounded-full" })}
        >
          Hablemos
        </Link>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Webs que <span className="text-zinc-400">Google ama.</span><br/>
          Apps que tus clientes usan.
        </h1>
        <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto">
          En SoftCloud Studio creamos páginas ultra-rápidas con Next.js 16.4.0 y aplicaciones móviles con Flutter 3.13.0. Posicionamos tu negocio en Google 
          y apps móviles con Flutter. Pack completo para tu negocio en Bogotá.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="#servicios"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full px-8",
            })}
          >
            Ver Portafolio
          </Link>
          <Link
            href={WHATSAPP_QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-full px-8",
            })}
          >
            Cotizar en WhatsApp
          </Link>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border">
            <h3 className="font-bold text-xl">Web Next.js</h3>
            <p className="text-zinc-600 mt-2">Aparece primero en Google. Carga en 0.8s.</p>
            <p className="mt-4 font-bold">Desde $1.2M</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border">
            <h3 className="font-bold text-xl">App Flutter</h3>
            <p className="text-zinc-600 mt-2">Tu negocio en el celular de tu cliente.</p>
            <p className="mt-4 font-bold">Desde $3.5M</p>
          </div>
          <div className="bg-black text-white p-8 rounded-2xl">
            <h3 className="font-bold text-xl">Pack Total</h3>
            <p className="text-zinc-400 mt-2">Web + App conectadas. La mejor oferta.</p>
            <p className="mt-4 font-bold">Desde $4.5M</p>
          </div>
        </div>
      </section>
    </main>
  )
}