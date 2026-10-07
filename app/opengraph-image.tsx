import { ImageResponse } from "next/og"

export const alt =
  "SoftCloud Studio — Webs que Google ama, apps que tus clientes usan"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Se genera en build time. La fuente por defecto de ImageResponse es Geist,
// la misma del sitio, así que no hace falta cargar ninguna fuente.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          color: "#18181b",
          padding: "72px 80px",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 9999,
              backgroundColor: "#000000",
              color: "#ffffff",
              fontSize: 32,
            }}
          >
            SC
          </div>
          <div style={{ display: "flex", marginLeft: 24, fontSize: 36 }}>
            SoftCloud Studio
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 78,
            lineHeight: 1.15,
            letterSpacing: -2,
          }}
        >
          <div style={{ display: "flex" }}>Webs que Google ama.</div>
          <div style={{ display: "flex", color: "#a1a1aa" }}>
            Apps que tus clientes usan.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 30,
            color: "#52525c",
          }}
        >
          <div style={{ display: "flex" }}>Next.js · Flutter · Bogotá</div>
          <div style={{ display: "flex", color: "#18181b" }}>
            softcloudstudio.dev
          </div>
        </div>
      </div>
    ),
    size
  )
}
