import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { DetailPage } from "@/components/site/detail-page"
import { kitchens, kitchenList } from "@/lib/content"

export function generateStaticParams() {
  return kitchenList.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = kitchens[slug]
  if (!item) return {}
  return { title: item.title, description: item.description }
}

export default async function KitchenPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = kitchens[slug]
  if (!item) notFound()

  return (
    <DetailPage
      eyebrow="Кухни GEOSIDEAL"
      title={item.title}
      intro={item.intro}
      description={item.description}
      hero={item.hero}
      features={item.features}
      gallery={item.gallery}
      specs={[
        { title: "Фасады", items: item.facades },
        { title: "Столешницы", items: item.countertops },
        { title: "Материалы", items: item.materials },
        { title: "Фурнитура", items: item.hardware },
      ]}
    />
  )
}
