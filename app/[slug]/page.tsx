import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { DetailPage } from "@/components/site/detail-page"
import { furniture, furnitureList } from "@/lib/content"

export function generateStaticParams() {
  return furnitureList.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = furniture[slug]
  if (!item) return {}
  return { title: item.title, description: item.description }
}

export default async function FurniturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = furniture[slug]
  if (!item) notFound()

  return (
    <DetailPage
      eyebrow="Корпусная мебель"
      title={item.title}
      intro={item.intro}
      description={item.description}
      hero={item.image}
      features={item.features}
      gallery={[item.image, "/images/detail-1.png", "/images/detail-2.png", "/images/detail-3.png", "/images/project-4.png"]}
    />
  )
}
