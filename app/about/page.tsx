import type { Metadata } from "next"
import Image from "next/image"
import { Check } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"
import { advantages, processSteps } from "@/lib/content"

export const metadata: Metadata = { title: "О бренде" }

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="О GEOSIDEAL" title="Мебель, которая становится частью дома" text="Мы соединяем дизайн, инженерную точность и производство в одной системе ответственности." image="/images/about-brand.png" />
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading eyebrow="Подход" title="Сначала сценарии жизни, затем форма" />
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">Проект начинается не с выбора цвета фасада. Мы выясняем, как устроен ваш день, сколько нужно хранения, где будет техника, кто готовит и как пространство связано с остальным интерьером.</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {["Единая команда проекта", "Фиксация решений до производства", "Технический контроль", "Сервис после монтажа"].map((item) => <div key={item} className="flex gap-3 border-t border-border pt-4 text-sm"><Check className="h-4 w-4 text-accent" />{item}</div>)}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="bg-secondary/55 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal><SectionHeading eyebrow="Принципы" title="Что влияет на конечный результат" /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, index) => <Reveal key={item.title} delay={index}><div className="h-full bg-background p-7"><p className="font-serif text-4xl text-accent">0{index + 1}</p><h3 className="mt-6 font-serif text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div></Reveal>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal><div className="relative aspect-square overflow-hidden bg-secondary"><Image src="/images/production.png" alt="Производство мебели" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></Reveal>
          <Reveal><div className="lg:pl-10"><SectionHeading eyebrow="От идеи до монтажа" title="Контроль не передаётся между подрядчиками" text="Конструкторы и технологи работают с тем же проектом, который согласован с дизайнером. Это помогает сохранить замысел и техническую реалистичность." /><div className="mt-9 space-y-5">{processSteps.map((step) => <div key={step.num} className="grid grid-cols-[52px_1fr] gap-4 border-t border-border pt-5"><span className="font-serif text-2xl text-accent">{step.num}</span><div><h3 className="font-medium">{step.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p></div></div>)}</div></div></Reveal>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
