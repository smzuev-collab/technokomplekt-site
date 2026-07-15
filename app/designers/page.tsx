import type { Metadata } from "next"
import { Check } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"

export const metadata: Metadata = { title: "Дизайнерам и архитекторам" }

const points = ["Техническая проверка решений до согласования с клиентом", "Образцы материалов и помощь в комплектации", "Конструкторская документация и привязки", "Прозрачный график производства и монтажа", "Единое контактное лицо по проекту", "Сервисная поддержка после сдачи"]

export default function DesignersPage() {
  return (
    <>
      <PageHero eyebrow="Партнёрская программа" title="Производственная опора для дизайнеров" text="Помогаем реализовать авторский замысел без потери технической логики, сроков и качества монтажа." image="/images/project-1.png" primaryLabel="Обсудить сотрудничество" />
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32"><Reveal><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading eyebrow="Сотрудничество" title="Не подменяем дизайн, а доводим его до производства" /><div><p className="text-lg leading-relaxed text-muted-foreground md:text-xl">Подключаемся на этапе концепции или готового дизайн-проекта. Проверяем узлы, предлагаем технические альтернативы и берём на себя мебельную часть реализации.</p><ul className="mt-9 grid gap-4 sm:grid-cols-2">{points.map((point) => <li key={point} className="flex items-start gap-3 border-t border-border pt-4 text-sm leading-relaxed"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{point}</li>)}</ul></div></div></Reveal></section>
      <CtaSection title="Обсудим ваш текущий проект" text="Пришлите планировку или визуализации. Мы оценим состав работ и предложим порядок взаимодействия." />
    </>
  )
}
