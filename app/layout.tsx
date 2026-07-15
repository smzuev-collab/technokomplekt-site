import type { Metadata } from "next"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "GEOSIDEAL | Кухни и корпусная мебель",
    template: "%s | GEOSIDEAL",
  },
  description:
    "GEOSIDEAL: кухни и корпусная мебель на заказ. Индивидуальный дизайн, производство и монтаж.",
  keywords: [
    "кухни на заказ",
    "корпусная мебель",
    "гардеробные",
    "шкафы",
    "GEOSIDEAL",
  ],
  openGraph: {
    title: "GEOSIDEAL | Кухни и корпусная мебель",
    description: "Кухни и корпусная мебель, созданные под ваш интерьер.",
    type: "website",
    locale: "ru_RU",
  },
}

export const viewport = {
  themeColor: "#f7f6f2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="bg-background">
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
