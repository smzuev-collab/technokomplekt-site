import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { furnitureCategories, mainNav, contacts } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8">
            <div className="font-serif text-2xl tracking-[0.25em] text-foreground">
              GEOSIDEAL
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Премиальные кухни и корпусная мебель на заказ. Индивидуальный
              дизайн и собственное производство полного цикла.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Каталог
            </h3>
            <ul className="mt-5 space-y-3">
              {furnitureCategories.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Компания
            </h3>
            <ul className="mt-5 space-y-3">
              {mainNav
                .find((i) => i.title === "О компании")
                ?.children?.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-foreground/80 transition-colors hover:text-accent"
                >
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Контакты
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={contacts.phoneHref} className="hover:text-accent">
                  {contacts.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${contacts.email}`} className="hover:text-accent">
                  {contacts.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{contacts.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{contacts.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} GEOSIDEAL. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="/contacts" className="hover:text-accent">
              Политика конфиденциальности
            </Link>
            <span>Дизайн-квартал, Москва</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
