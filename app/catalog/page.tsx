import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { ImageCard } from "@/components/site/image-card"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"
import { furnitureList, kitchenList } from "@/lib/content"

export const metadata: Metadata = { title: "Каталог мебели" }

export default function CatalogPage() {
  return (
    <>
      <PageHero eyebrow="Каталог" title="Мебель для всего интерьера" text="Кухни, гардеробные, шкафы, прихожие и гостиные, спроектированные как единая система." image="/images/living-room.png" />
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <Reveal><SectionHeading eyebrow="Корпусная мебель" title="Цельное пространство без случайных предметов" /></Reveal>
        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {furnitureList.map((item, index) => (
            <Reveal key={item.slug} delay={index % 3}>
              <ImageCard href={`/${item.slug}`} image={item.image} title={item.title} text={item.short} tall={index === 0} />
            </Reveal>
          ))}
          <Reveal delay={1}><ImageCard href="/kitchens" image="/images/hero-kitchen.png" title="Кухни" text="Индивидуальные гарнитуры и островные композиции" tall /></Reveal>
        </div>
      </section>
      <section className="bg-secondary/55 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal><SectionHeading eyebrow="Кухни" title="Выберите направление" /></Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {kitchenList.map((item, index) => (
              <Reveal key={item.slug} delay={index % 3}>
                <ImageCard href={`/kitchens/${item.slug}`} image={item.hero} title={item.title} text={item.short} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
