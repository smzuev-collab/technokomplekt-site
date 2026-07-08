import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "GEOSIDEAL — Премиальные кухни и корпусная мебель",
    template: "%s — GEOSIDEAL",
  },
  description:
    "GEOSIDEAL — премиальные кухни и корпусная мебель на заказ. Индивидуальный дизайн, собственное производство, консультация в фирменном шоуруме.",
  keywords: [
    "кухни на заказ",
    "премиальная мебель",
    "корпусная мебель",
    "гардеробные",
    "шкафы",
    "GEOSIDEAL",
  ],
  openGraph: {
    title: "GEOSIDEAL — Премиальные кухни и корпусная мебель",
    description:
      "Премиальные кухни и корпусная мебель, созданные для вашего дома.",
    type: "website",
    locale: "ru_RU",
  },
}

export const viewport = {
  themeColor: "#f7f6f2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`bg-background ${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
