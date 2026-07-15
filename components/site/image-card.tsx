import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function ImageCard({
  href,
  image,
  title,
  text,
  meta,
  tall = false,
}: {
  href: string
  image: string
  title: string
  text?: string
  meta?: string
  tall?: boolean
}) {
  return (
    <Link href={href} className="group block">
      <div className={`relative overflow-hidden bg-secondary ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          {meta ? <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{meta}</p> : null}
          <h3 className="mt-1 font-serif text-2xl font-normal md:text-3xl">{title}</h3>
          {text ? <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{text}</p> : null}
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  )
}
