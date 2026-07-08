import Link from "next/link"
import { Button } from "@/components/ui/button"
import { contacts } from "@/lib/site"

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
        GEOSIDEAL
      </p>
      <h1 className="text-balance font-serif text-4xl font-light leading-tight md:text-6xl">
        Премиальные кухни и корпусная мебель на заказ
      </h1>
      <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        Индивидуальный дизайн, собственное производство и консультация в фирменном
        шоуруме. Создаём мебель, которая служит десятилетиями.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button asChild>
          <Link href="/kitchens">Смотреть кухни</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contacts">Записаться в шоурум</Link>
        </Button>
      </div>
      <p className="mt-10 text-sm text-muted-foreground">{contacts.phone}</p>
    </section>
  )
}
