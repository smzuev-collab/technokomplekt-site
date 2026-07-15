"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.09,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "div" | "section" | "span" | "li"
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
    >
      {children}
    </MotionTag>
  )
}
