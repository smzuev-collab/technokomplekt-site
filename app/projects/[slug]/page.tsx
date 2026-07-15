import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"
import { projects } from "@/lib/content"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) return {}
  return { title: project.title, description: `${project.category}, ${project.location}` }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()
  const gallery = [project.image, "/images/detail-1.png", "/images/detail-2.png", "/images/detail-3.png"]

  return (
    <>
      <article className="mx-auto max-w-[1400px] px-5 pb-20 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{project.category}</p><h1 className="mt-5 max-w-4xl text-balance font-serif text-5xl font-light leading-tight md:text-7xl">{project.title}</h1></div>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-3 border-t border-border pt-5 text-sm lg:min-w-80"><div><dt className="text-muted-foreground">Локация</dt><dd className="mt-1">{project.location}</dd></div><div><dt className="text-muted-foreground">Площадь</dt><dd className="mt-1">{project.area}</dd></div></dl>
          </div>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden bg-secondary"><Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" /></div>
        </Reveal>
        <Reveal><div className="mx-auto grid max-w-5xl gap-10 py-16 lg:grid-cols-2"><h2 className="font-serif text-4xl font-light">Задача проекта</h2><p className="text-lg leading-relaxed text-muted-foreground">Создать цельное пространство, в котором хранение, техника и рабочие зоны не спорят с архитектурой помещения. Композиция рассчитана под ежедневные сценарии семьи и визуально поддерживает остальной интерьер.</p></div></Reveal>
        <div className="grid gap-4 md:grid-cols-3">{gallery.slice(1).map((image, index) => <Reveal key={image} delay={index}><div className="relative aspect-square overflow-hidden bg-secondary"><Image src={image} alt={`${project.title}, деталь ${index + 1}`} fill sizes="33vw" className="object-cover" /></div></Reveal>)}</div>
      </article>
      <CtaSection title="Создадим проект под ваше пространство" />
    </>
  )
}
