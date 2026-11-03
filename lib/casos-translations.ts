import type { Caso } from "@/lib/casos"
import type { Locale } from "@/i18n/routing"

const translations: Record<
  string,
  Pick<Caso, "resumen" | "descripcion"> & { transparencia?: string }
> = {
  "field-flow": {
    resumen: "Full-stack platform and PWA for end-to-end field service management",
    descripcion:
      "Business platform for managing and digitizing field services: work orders, real-time status tracking, dynamic checklists, photo evidence, and digital signatures. Built with a Java and Spring Boot backend and a React and TypeScript PWA frontend.",
  },
  "gas-solution": {
    resumen: "E-commerce for fuel gas products and services",
    descripcion:
      "E-commerce platform for selling fuel gas products and services, designed for a business with physical operations and its own catalog.",
  },
  "nexo-crm": {
    resumen: "CRM integration with WhatsApp and email",
    descripcion:
      "Integration connecting a CRM with the channels where customer conversations happen in Colombia: WhatsApp and email, bringing customer follow-up together in one place.",
  },
  "videoboost-pro": {
    resumen: "Web video converter and processor with a live public demo",
    descripcion:
      "Modern web tool to convert and process video, trim clips, and optimize media formats, deployed and running in production.",
  },
  "ele-video": {
    resumen: "Video editing: portrait-to-landscape reframing and duration trimming",
    descripcion:
      "Video editing app that reframes portrait footage to landscape and adjusts clip duration. A personal project for reusing recorded material across formats.",
  },
  "dev-portfolio": {
    resumen: "Full-stack portfolio with a cloud-ready architecture",
    descripcion:
      "Professional portfolio built as a full-stack application: a React and TypeScript frontend with a Java Spring Boot backend exposing REST APIs.",
  },
  "foro-hub-api": {
    resumen: "REST API for a forum with JWT authentication and CRUD operations",
    descripcion:
      "Robust backend for a discussion platform with complete CRUD operations for topics, replies, and users, protected by JSON Web Token authentication and Spring Boot. The interface is available in a complementary repository.",
  },
  ecomart: {
    resumen: "E-commerce app using OpenAI to create and categorize products",
    descripcion:
      "Java backend connected to the OpenAI API, with an interactive chat that assists product creation, automatic categorization, and image generation.",
  },
  "credit-card": {
    resumen: "Credit operations management and financial business rules",
    descripcion:
      "Java system focused on managing credit operations, financial calculations, transaction validation, and business rules.",
  },
  "money-exchange-app": {
    resumen: "Real-time currency exchange and conversion app",
    descripcion:
      "Java tool for calculating and converting international currencies using APIs for updated exchange rates and currency formatting.",
  },
  "liter-alura": {
    resumen: "Classic book discovery with PostgreSQL persistence",
    descripcion:
      "Java and Spring Boot application that searches, registers, and analyzes classic books through the Gutendex API, storing them in PostgreSQL with custom queries.",
  },
  "talent-circle": {
    resumen: "Technical content automation and multi-channel distribution",
    descripcion:
      "Technical publishing platform with multi-channel integration for newsletters, LinkedIn, Twitter, and a community feed to automate content distribution and replace manual work.",
  },
  "heavy-trucks": {
    resumen: "E-commerce for truck parts",
    descripcion:
      "Online catalog and store for truck parts, designed for an auto-parts business.",
  },
  rent4u: {
    resumen: "Website for a vehicle rental company",
    descripcion:
      "Website for a vehicle rental company, featuring its fleet and contact channels.",
  },
  "sneakers-store": {
    resumen: "Online sneaker store",
    descripcion:
      "Online sneaker store, one of the portfolio's early e-commerce projects.",
  },
  mokepones: {
    resumen: "Interactive turn-based combat game in the browser",
    descripcion:
      "Interactive web game built with vanilla JavaScript, featuring turn-based combat, character selection, and dynamic DOM manipulation.",
  },
  "sentiment-analysis": {
    resumen: "Machine-learning sentiment analysis API — team hackathon project",
    descripcion:
      "Team hackathon project: a sentiment analysis API built and presented in machine-learning notebooks. I participated as a member of Team 66 alongside other developers during a fixed competition period.",
    transparencia:
      "This is neither an individual project nor client work; it was a team hackathon project. The original repository belongs to another member of Team 66, so this link points to their repository. My working fork is github.com/Ed-Pino/Sentiment_Analisis. It is presented as team work with proper attribution.",
  },
}

export function getLocalizedCaso(caso: Caso, locale: Locale): Caso {
  if (locale === "es") return caso

  const translation = translations[caso.slug]
  if (!translation) {
    throw new Error(`Missing English portfolio translation for "${caso.slug}".`)
  }

  return { ...caso, ...translation }
}

export function getLocalizedCategory(category: Caso["categoria"], locale: Locale) {
  if (locale === "es") return category

  const labels: Record<Caso["categoria"], string> = {
    Web: "Web",
    "E-commerce": "E-commerce",
    "API & Backend": "API & Backend",
    IA: "AI",
    Herramientas: "Tools",
    Finanzas: "Finance",
    Hackathon: "Hackathon",
  }

  return labels[category]
}
