import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contacts } from "@/lib/site"

export function CtaSection({
  title = "Обсудим ваш будущий интерьер",
  text = "Запишитесь в шоурум. Дизайнер уточнит задачи, покажет материалы и предложит план следующего шага.",
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/55">Консультация</p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/70 md:text-lg">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="accent">
            <Link href="/contacts">
              Записаться
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outlineLight">
            <a href={contacts.phoneHref}>
              <Phone className="h-4 w-4" />
              {contacts.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
