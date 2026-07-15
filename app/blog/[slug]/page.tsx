import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"
import { blogPosts } from "@/lib/content"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) notFound()

  return (
    <>
      <article className="mx-auto max-w-[1100px] px-5 pb-20 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{post.category}</p>
          <h1 className="mt-5 max-w-4xl text-balance font-serif text-5xl font-light leading-tight md:text-7xl">{post.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <div className="relative mt-12 aspect-[16/10] overflow-hidden bg-secondary"><Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" /></div>
        </Reveal>
        <Reveal>
          <div className="prose-copy mx-auto mt-14 max-w-3xl space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>Хорошее решение начинается с условий эксплуатации. Одной фотографии из подборки недостаточно: важно учитывать размеры помещения, освещение, частоту использования и требования к уходу.</p>
            <h2 className="font-serif text-4xl font-light text-foreground">На что смотреть в первую очередь</h2>
            <p>Сравнивайте не только внешний вид. Уточняйте конструкцию, способ обработки кромок, доступность ремонта, совместимость с фурнитурой и то, как поверхность изменится через несколько лет.</p>
            <p>На встрече с дизайнером полезно зафиксировать приоритеты: что критично, где допустим компромисс и какие решения влияют на бюджет сильнее всего. Тогда подбор становится управляемым, а не превращается в бесконечный просмотр образцов.</p>
            <h2 className="font-serif text-4xl font-light text-foreground">Практический вывод</h2>
            <p>Выбирайте материал и планировку в контексте всего проекта. Отдельно красивый фасад может конфликтовать со светом, столешницей или сценарием использования. Цель не в самом эффектном образце, а в системе, которая останется удобной после монтажа.</p>
          </div>
        </Reveal>
      </article>
      <CtaSection title="Разберём эти решения на вашем проекте" />
    </>
  )
}
