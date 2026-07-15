import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  text,
  className,
  align = "left",
}: {
  eyebrow?: string
  title: string
  text?: string
  className?: string
  align?: "left" | "center"
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-balance font-serif text-4xl font-light leading-tight md:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">{text}</p>
      ) : null}
    </div>
  )
}
