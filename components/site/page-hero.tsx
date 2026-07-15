import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  primaryHref = "/contacts",
  primaryLabel = "Обсудить проект",
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string
  title: string
  text: string
  image: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-neutral-950 text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-[1400px] items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-white/70">{eyebrow}</p>
          <h1 className="mt-5 text-balance font-serif text-5xl font-light leading-[0.96] md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/78 md:text-lg">
            {text}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="accent">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button asChild size="lg" variant="outlineLight">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
