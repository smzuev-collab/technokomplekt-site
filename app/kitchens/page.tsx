import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { ImageCard } from "@/components/site/image-card"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"
import { kitchenList } from "@/lib/content"

export const metadata: Metadata = {
  title: "Кухни на заказ",
  description: "Современные, классические, угловые кухни и кухни с островом по индивидуальному проекту.",
}

export default function KitchensPage() {
  return (
    <>
      <PageHero
        eyebrow="Каталог кухонь"
        title="Кухня под ваш сценарий жизни"
        text="Проектируем композицию, хранение, свет и интеграцию техники. Стиль выбирается после логики, а не вместо неё."
        image="/images/kitchen-island.png"
      />
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <Reveal><SectionHeading eyebrow="Направления" title="Семь характеров одной системы" text="Каждое направление можно адаптировать по цвету, материалам, планировке и комплектации." /></Reveal>
        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {kitchenList.map((item, index) => (
            <Reveal key={item.slug} delay={index % 3}>
              <ImageCard href={`/kitchens/${item.slug}`} image={item.hero} title={item.title} text={item.short} tall={index === 0 || index === 4} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaSection title="Подберём планировку и комплектацию кухни" />
    </>
  )
}
