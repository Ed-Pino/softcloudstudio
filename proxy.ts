import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

// Skip internal Spanish slugs after next-intl rewrites an English URL to them.
export const config = {
  matcher:
    "/((?!api|_next|_vercel|en/(?:servicios|nosotros|contacto|trabajo)(?:/|$)|.*\\..*).*)",
}
