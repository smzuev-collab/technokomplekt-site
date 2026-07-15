import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { ImageCard } from "@/components/site/image-card"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"
import { blogPosts } from "@/lib/content"

export const metadata: Metadata = { title: "Блог" }

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Блог" title="О дизайне без декоративного тумана" text="Материалы, эргономика, планировки и эксплуатация мебели." image="/images/detail-2.png" primaryHref="/contacts" primaryLabel="Задать вопрос" />
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32"><Reveal><SectionHeading eyebrow="Материалы" title="Что стоит знать до заказа мебели" /></Reveal><div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post, index) => <Reveal key={post.title} delay={index % 3}><ImageCard href="/contacts" image={post.image} title={post.title} text={post.excerpt} meta={post.category} tall={index === 0 || index === 4} /></Reveal>)}</div></section>
      <CtaSection title="Нужен ответ по вашему проекту?" />
    </>
  )
}
