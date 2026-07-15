import Image from "next/image"
import { Check } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"

export function DetailPage({
  eyebrow,
  title,
  intro,
  description,
  hero,
  features,
  gallery = [],
  specs,
}: {
  eyebrow: string
  title: string
  intro: string
  description: string
  hero: string
  features: string[]
  gallery?: string[]
  specs?: { title: string; items: string[] }[]
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} text={intro} image={hero} />

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading eyebrow="Концепция" title={intro} />
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">{description}</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 border-t border-border pt-4 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {gallery.length > 0 ? (
        <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-32">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 6).map((image, index) => (
              <Reveal key={`${image}-${index}`} delay={index % 3}>
                <div className={`relative overflow-hidden bg-secondary ${index === 0 ? "aspect-[4/5] md:row-span-2 md:aspect-auto md:h-full" : "aspect-[4/3]"}`}>
                  <Image src={image} alt={`${title}, деталь ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {specs && specs.length > 0 ? (
        <section className="bg-secondary/55 py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="Комплектация" title="Материалы и решения" text="Финальный набор подбирается под задачи, внешний вид и бюджет конкретного проекта." />
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {specs.map((spec, index) => (
                <Reveal key={spec.title} delay={index}>
                  <div className="h-full bg-background p-7">
                    <h3 className="font-serif text-2xl">{spec.title}</h3>
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {spec.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaSection title={`Создадим проект: ${title.toLowerCase()}`} />
    </>
  )
}
