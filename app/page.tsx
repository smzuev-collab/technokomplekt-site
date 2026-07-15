import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { ImageCard } from "@/components/site/image-card"
import { CtaSection } from "@/components/site/cta-section"
import { Reveal } from "@/components/motion/reveal"
import {
  advantages,
  blogPosts,
  faqs,
  furnitureList,
  kitchenList,
  processSteps,
  projects,
  reviews,
} from "@/lib/content"

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Кухни и корпусная мебель на заказ"
        title="Интерьер, собранный вокруг вашей жизни"
        text="Индивидуальный дизайн, собственное производство и монтаж одной командой. От первой планировки до готового пространства."
        image="/images/hero-kitchen.png"
        primaryHref="/kitchens"
        primaryLabel="Смотреть кухни"
        secondaryHref="/projects"
        secondaryLabel="Наши проекты"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionHeading
              eyebrow="Каталог"
              title="Мебель как часть архитектуры"
              text="Проектируем не отдельный предмет, а цельную систему: хранение, свет, техника, материалы и сценарии использования."
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {advantages.map((item, index) => (
                <div key={item.title} className="border-t border-border pt-4">
                  <p className="font-serif text-3xl text-accent">0{index + 1}</p>
                  <h3 className="mt-4 text-sm font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {furnitureList.map((item, index) => (
            <Reveal key={item.slug} delay={index % 3}>
              <ImageCard
                href={`/${item.slug}`}
                image={item.image}
                title={item.title}
                text={item.short}
                tall={index === 0}
              />
            </Reveal>
          ))}
          <Reveal delay={1}>
            <ImageCard
              href="/kitchens"
              image="/images/kitchen-modern.png"
              title="Кухни"
              text="Семь направлений от минимализма до неоклассики"
              tall
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/55 py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Кухни"
                title="Стиль начинается с логики"
                text="Выберите направление. Каждое решение адаптируется под помещение, привычки и бюджет проекта."
              />
              <Button asChild variant="ghost">
                <Link href="/kitchens">
                  Все кухни <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {kitchenList.slice(0, 6).map((item, index) => (
              <Reveal key={item.slug} delay={index % 3}>
                <ImageCard
                  href={`/kitchens/${item.slug}`}
                  image={item.hero}
                  title={item.title}
                  text={item.short}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <Image
                src="/images/about-brand.png"
                alt="Интерьер кухни GEOSIDEAL"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:pl-10">
              <SectionHeading
                eyebrow="О бренде"
                title="Одна команда отвечает за весь результат"
                text="Дизайнер, конструктор, технолог, производство и монтаж работают в единой системе. Это снижает число компромиссов и ошибок между красивой визуализацией и реальным интерьером."
              />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Точный замер помещения", "3D-проект и подбор материалов", "Собственная фабрика полного цикла", "Доставка, монтаж и сервис"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-9">
                <Link href="/about">Подробнее о компании</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Процесс"
              title="Понятный маршрут от идеи до монтажа"
              text="На каждом этапе вы понимаете, что происходит, какие решения согласованы и когда будет следующий результат."
              className="[&_*]:text-inherit"
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.num} delay={index}>
                <div className="border-t border-primary-foreground/20 pt-5">
                  <p className="font-serif text-4xl text-accent">{step.num}</p>
                  <h3 className="mt-6 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-32">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Реализованные проекты"
              title="Не рендеры, а пространства для жизни"
              text="Подборка проектов с разной площадью, планировкой и характером."
            />
            <Button asChild variant="ghost">
              <Link href="/projects">Все проекты <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <Reveal key={project.title} delay={index % 2}>
              <ImageCard
                href={`/projects/${project.slug}`}
                image={project.image}
                title={project.title}
                text={project.location}
                meta={`${project.category} · ${project.area}`}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/55 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Отзывы" title="Что говорят после монтажа" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal key={review.name} delay={index}>
                <blockquote className="h-full bg-background p-7 md:p-9">
                  <p className="font-serif text-2xl leading-snug">«{review.text}»</p>
                  <footer className="mt-8 border-t border-border pt-5">
                    <p className="text-sm font-medium">{review.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{review.role}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:px-8 md:py-32 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Вопросы"
            title="До первой встречи"
            text="Базовые ответы. Точные сроки и стоимость зависят от проекта, материалов и комплектации."
          />
        </Reveal>
        <Reveal>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none pr-8 font-serif text-xl marker:hidden">
                  {item.q}
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-32">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Блог" title="Материалы, планировки, уход" />
            <Button asChild variant="ghost"><Link href="/blog">Все статьи <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Reveal key={post.title} delay={index}>
              <ImageCard href={`/blog/${post.slug}`} image={post.image} title={post.title} text={post.excerpt} meta={post.category} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
