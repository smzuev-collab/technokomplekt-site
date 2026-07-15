"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { mainNav, contacts } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
  }, [mobileOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md transition-all duration-500",
        scrolled && "shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="font-serif text-2xl font-medium tracking-[0.25em] text-foreground md:text-[1.6rem]"
        >
          GEOSIDEAL
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.children ? item.title : null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-[0.82rem] uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:text-foreground",
                  pathname === item.href && "text-foreground",
                )}
              >
                {item.title}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contacts.phoneHref}
            className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
          >
            {contacts.phone}
          </a>
          <Button asChild size="sm" variant="accent">
            <Link href="/contacts">Записаться</Link>
          </Button>
        </div>

        <button
          className="flex items-center justify-center p-2 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop mega dropdown */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full hidden border-b border-border bg-background/95 backdrop-blur-md lg:block"
          >
            <div className="mx-auto max-w-[1400px] px-8 py-8">
              <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                {mainNav
                  .find((i) => i.title === openMenu)
                  ?.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="group rounded-md p-4 transition-colors hover:bg-secondary"
                    >
                      <div className="font-serif text-lg text-foreground">
                        {child.title}
                      </div>
                      {child.description && (
                        <div className="mt-1 text-sm text-muted-foreground">
                          {child.description}
                        </div>
                      )}
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background lg:hidden"
          >
            <div className="flex flex-col px-5 py-6">
              {mainNav.map((item) => (
                <MobileNavItem key={item.title} item={item} />
              ))}
              <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6">
                <a
                  href={contacts.phoneHref}
                  className="flex items-center gap-2 text-lg text-foreground"
                >
                  <Phone className="h-4 w-4" /> {contacts.phone}
                </a>
                <Button asChild variant="accent" size="lg">
                  <Link href="/contacts">Записаться в шоурум</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function MobileNavItem({ item }: { item: (typeof mainNav)[number] }) {
  const [open, setOpen] = useState(false)
  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="border-b border-border py-4 font-serif text-2xl text-foreground"
      >
        {item.title}
      </Link>
    )
  }
  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between py-4 font-serif text-2xl text-foreground"
        onClick={() => setOpen((v) => !v)}
      >
        {item.title}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-4 pl-3">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="py-2 text-base text-muted-foreground"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
