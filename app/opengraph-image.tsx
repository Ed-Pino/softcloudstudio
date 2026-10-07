import { ImageResponse } from "next/og"

export const alt =
  "SoftCloud Studio — Software a la medida, e-commerce e integraciones en Bogotá"
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
            fontSize: 72,
            lineHeight: 1.15,
            letterSpacing: -2,
          }}
        >
          <div style={{ display: "flex" }}>Software a la medida,</div>
          <div style={{ display: "flex", color: "#a1a1aa" }}>
            e-commerce e integraciones.
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
          <div style={{ display: "flex" }}>
            Java · Next.js · WhatsApp API · IA
          </div>
          <div style={{ display: "flex", color: "#18181b" }}>
            softcloudstudio.dev
          </div>
        </div>
      </div>
    ),
    size
  )
}
