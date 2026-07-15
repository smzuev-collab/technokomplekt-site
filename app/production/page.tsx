import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"

export const metadata: Metadata = { title: "Производство" }

const stages = [
  ["01", "Конструкторская подготовка", "Проверяем размеры, узлы, фурнитуру и технические ограничения до запуска."],
  ["02", "Раскрой и обработка", "Детали производятся по цифровым картам с контролем геометрии."],
  ["03", "Отделка и сборка", "Фасады, кромки, механизмы и подсветка проходят промежуточную проверку."],
  ["04", "Комплектация и монтаж", "Изделия маркируются, доставляются и собираются штатной монтажной командой."],
]

export default function ProductionPage() {
  return (
    <>
      <PageHero eyebrow="Фабрика полного цикла" title="Производство, встроенное в проект" text="Технологи подключаются до запуска, поэтому дизайн проверяется не после ошибки, а до неё." image="/images/production.png" />
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <Reveal><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading eyebrow="Контроль" title="Точность складывается из этапов" /><p className="text-lg leading-relaxed text-muted-foreground md:text-xl">Собственная производственная цепочка нужна не ради красивой формулировки. Она сокращает разрывы между дизайн-проектом, чертежами, фактическими материалами и монтажом на объекте.</p></div></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">{stages.map((stage, index) => <Reveal key={stage[0]} delay={index % 2}><div className="border-t border-border pt-6"><p className="font-serif text-4xl text-accent">{stage[0]}</p><h3 className="mt-5 font-serif text-3xl">{stage[1]}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{stage[2]}</p></div></Reveal>)}</div>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-32"><Reveal><div className="grid gap-4 md:grid-cols-3"><div className="relative aspect-[4/5] overflow-hidden md:col-span-2"><Image src="/images/production.png" alt="Мебельное производство" fill className="object-cover" sizes="66vw" /></div><div className="grid gap-4"><div className="relative aspect-square overflow-hidden"><Image src="/images/detail-2.png" alt="Деталь фасада" fill className="object-cover" sizes="33vw" /></div><div className="relative aspect-square overflow-hidden"><Image src="/images/detail-3.png" alt="Система хранения" fill className="object-cover" sizes="33vw" /></div></div></div></Reveal></section>
      <CtaSection title="Спроектируем мебель с учётом производства" />
    </>
  )
}
