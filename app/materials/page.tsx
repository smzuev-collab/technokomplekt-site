import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"

export const metadata: Metadata = { title: "Материалы и фурнитура" }

const groups = [
  ["Фасады", "МДФ в эмали, натуральный шпон, массив, керамика и стекло. Выбор зависит от тактильности, эксплуатации и визуальной задачи."],
  ["Столешницы", "Кварцевый агломерат, керамогранит, натуральный камень и компакт-ламинат с разной стойкостью и характером поверхности."],
  ["Фурнитура", "Петли, направляющие, подъёмники и системы хранения подбираются по нагрузке и сценарию ежедневного использования."],
  ["Свет", "Интегрированная подсветка рабочих зон, витрин и внутренних секций с продуманным доступом к обслуживанию."],
]

export default function MaterialsPage() {
  return (
    <>
      <PageHero eyebrow="Материалы" title="Поверхности, которые выдерживают жизнь" text="Выбираем материалы не только по образцу, но и по условиям эксплуатации, уходу и долговечности." image="/images/materials.png" />
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <Reveal><SectionHeading eyebrow="Подбор" title="Красота без технической наивности" text="Материал оценивается по трём критериям: как выглядит, как ведёт себя каждый день и можно ли его корректно реализовать в выбранном узле." /></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">{groups.map((group, index) => <Reveal key={group[0]} delay={index % 2}><div className="h-full border border-border bg-background p-7 md:p-9"><p className="text-xs uppercase tracking-[0.18em] text-accent">0{index + 1}</p><h3 className="mt-5 font-serif text-3xl">{group[0]}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{group[1]}</p></div></Reveal>)}</div>
      </section>
      <section className="bg-secondary/55 py-20 md:py-28"><div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center"><Reveal><div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/detail-1.png" alt="Фурнитура" fill className="object-cover" sizes="50vw" /></div></Reveal><Reveal><div><SectionHeading eyebrow="Образцы" title="Материалы нужно видеть и трогать" text="Цвет на экране и реальная поверхность редко совпадают полностью. В шоуруме можно сравнить оттенки, блеск, фактуру, кромки и работу механизмов." /><div className="mt-8 grid grid-cols-2 gap-4"><div className="relative aspect-square overflow-hidden"><Image src="/images/detail-2.png" alt="Деревянный фасад" fill className="object-cover" /></div><div className="relative aspect-square overflow-hidden"><Image src="/images/detail-3.png" alt="Внутреннее наполнение" fill className="object-cover" /></div></div></div></Reveal></div></section>
      <CtaSection title="Подберём материалы под проект и эксплуатацию" />
    </>
  )
}
