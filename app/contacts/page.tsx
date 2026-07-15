import type { Metadata } from "next"
import Image from "next/image"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/forms/contact-form"
import { SectionHeading } from "@/components/site/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { contacts } from "@/lib/site"

export const metadata: Metadata = { title: "Контакты" }

export default function ContactsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-20 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Reveal><SectionHeading eyebrow="Контакты" title="Запишитесь в шоурум" text="На встрече разберём задачу, покажем материалы и оценим следующий этап. Контактные данные в текущей версии демонстрационные, их нужно заменить перед публикацией." /></Reveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <div className="space-y-5 border-y border-border py-7">
                <a href={contacts.phoneHref} className="flex items-start gap-4"><Phone className="mt-1 h-5 w-5 text-accent" /><div><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Телефон</p><p className="mt-1 font-serif text-2xl">{contacts.phone}</p></div></a>
                <a href={`mailto:${contacts.email}`} className="flex items-start gap-4"><Mail className="mt-1 h-5 w-5 text-accent" /><div><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Почта</p><p className="mt-1 font-serif text-2xl">{contacts.email}</p></div></a>
                <div className="flex items-start gap-4"><MapPin className="mt-1 h-5 w-5 text-accent" /><div><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Адрес</p><p className="mt-1 text-lg">{contacts.address}</p></div></div>
                <div className="flex items-start gap-4"><Clock className="mt-1 h-5 w-5 text-accent" /><div><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Время работы</p><p className="mt-1 text-lg">{contacts.hours}</p></div></div>
              </div>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-secondary"><Image src="/images/about-brand.png" alt="Шоурум GEOSIDEAL" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /></div>
            </div>
          </Reveal>
          <Reveal><div className="bg-secondary/55 p-6 md:p-10"><h2 className="font-serif text-4xl">Расскажите о задаче</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Форма подготовит письмо в вашей почтовой программе. Это временное решение до подключения CRM.</p><div className="mt-8"><ContactForm /></div></div></Reveal>
        </div>
      </section>
    </>
  )
}
