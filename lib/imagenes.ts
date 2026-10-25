// Capturas de cada proyecto. Los nombres de archivo no siguen los slugs (son
// los que llegaron), así que el mapeo es explícito para no depender de
// renombrar nada.
//
// Imágenes sin caso asociado por ahora: "Ghost Load.png", "Happy Pet.png",
// "softcloud.png" y "starwars.png".
// Casos sin imagen: heavy-trucks, rent4u, sneakers-store y sentiment-analysis.

export const IMAGENES: Record<string, string> = {
  "field-flow": "/fieldflow.png",
  "gas-solution": "/gassolutions.png",
  "nexo-crm": "/nexo.png",
  "videoboost-pro": "/videobost.png",
  "ele-video": "/elevideo.png",
  "dev-portfolio": "/portfolio.jpg",
  "foro-hub-api": "/forohub.png",
  ecomart: "/Ecomart.png",
  "credit-card": "/CreditCard.png",
  "money-exchange-app": "/moneyexchange.png",
  "liter-alura": "/literalura.png",
  "talent-circle": "/talentcircle.png",
  mokepones: "/mokepon.png",
}

export function getImagen(slug: string): string | undefined {
  return IMAGENES[slug]
}
