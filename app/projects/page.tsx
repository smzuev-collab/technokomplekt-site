import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { ImageCard } from "@/components/site/image-card"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"
import { projects } from "@/lib/content"

export const metadata: Metadata = { title: "Наши проекты" }

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Портфолио" title="Реализованные интерьеры" text="Разные площади и стили, одна дисциплина: точная планировка, материалы и монтаж." image="/images/project-2.png" primaryLabel="Обсудить свой проект" />
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <Reveal><SectionHeading eyebrow="Подборка" title="От компактной студии до загородного дома" text="Проекты показаны как ориентиры. Ваш интерьер будет рассчитан с нуля под конкретное помещение." /></Reveal>
        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index % 2}>
              <ImageCard href={`/projects/${project.slug}`} image={project.image} title={project.title} text={project.location} meta={`${project.category} · ${project.area}`} tall={index === 1 || index === 4} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaSection title="Ваш проект может стать следующим" />
    </>
  )
}
