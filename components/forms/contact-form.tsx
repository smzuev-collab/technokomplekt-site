"use client"

import { FormEvent, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contacts } from "@/lib/site"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Заявка с сайта GEOSIDEAL от ${name || "клиента"}`)
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\n\nКомментарий:\n${message || "Не указан"}`,
    )
    window.location.href = `mailto:${contacts.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm">Имя</label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="h-12 w-full border border-border bg-background px-4 outline-none transition focus:border-foreground/45"
          placeholder="Как к вам обращаться"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm">Телефон</label>
        <input
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="h-12 w-full border border-border bg-background px-4 outline-none transition focus:border-foreground/45"
          placeholder="+7 900 000-00-00"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm">Комментарий</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-32 w-full resize-y border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground/45"
          placeholder="Какая мебель нужна, площадь, сроки"
        />
      </div>
      <Button type="submit" size="lg" variant="accent" className="w-full sm:w-auto">
        Подготовить письмо
        <ArrowRight className="h-4 w-4" />
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Кнопка откроет почтовую программу с заполненной заявкой. Для автоматической отправки потребуется подключить форму к CRM или почтовому сервису.
      </p>
    </form>
  )
}
