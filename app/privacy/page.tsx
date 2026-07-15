import type { Metadata } from "next"

export const metadata: Metadata = { title: "Политика конфиденциальности" }

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Документы</p>
      <h1 className="mt-5 font-serif text-5xl font-light md:text-7xl">Политика конфиденциальности</h1>
      <div className="mt-10 space-y-7 leading-relaxed text-muted-foreground">
        <p>Это технический шаблон страницы. Перед публикацией сайта текст необходимо заменить документом, подготовленным под фактического владельца сайта, подключённые формы, аналитику и способы обработки персональных данных.</p>
        <h2 className="font-serif text-3xl text-foreground">Какие данные могут обрабатываться</h2>
        <p>Имя, телефон, адрес электронной почты и сведения, которые пользователь добровольно указывает при обращении.</p>
        <h2 className="font-serif text-3xl text-foreground">Цель обработки</h2>
        <p>Ответ на обращение, подготовка предложения, согласование консультации и дальнейшая коммуникация по проекту.</p>
      </div>
    </article>
  )
}
