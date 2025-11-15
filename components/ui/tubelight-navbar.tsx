"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type TubelightNavItem = {
  name: string
  url: string
  icon?: LucideIcon
}

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  items: TubelightNavItem[]
  initialActiveIndex?: number
  onItemSelect?: (
    item: TubelightNavItem,
    index: number,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => void
}

export function NavBar({
  items,
  className,
  initialActiveIndex = 0,
  onItemSelect,
  ...props
}: NavBarProps) {
  const highlightId = React.useId()
  const itemRefs = React.useRef<Array<HTMLAnchorElement | null>>([])

  const clampIndex = React.useCallback(
    (index: number) =>
      items.length ? Math.min(Math.max(index, 0), items.length - 1) : -1,
    [items.length],
  )

  const [activeIndex, setActiveIndex] = React.useState(() => clampIndex(initialActiveIndex))
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null)

  React.useEffect(() => {
    setActiveIndex((current) => clampIndex(current))
  }, [items, clampIndex])

  React.useEffect(() => {
    setActiveIndex(clampIndex(initialActiveIndex))
  }, [initialActiveIndex, clampIndex])

  const resolvedIndex = focusedIndex ?? activeIndex

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "relative mx-auto flex w-full max-w-2xl items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 p-1.5 shadow-[0_12px_35px_rgba(15,23,42,0.08)] backdrop-blur",
        "dark:border-white/10 dark:bg-white/5 dark:shadow-[0_12px_35px_rgba(15,23,42,0.35)]",
        className,
      )}
      onMouseLeave={() => setFocusedIndex(null)}
      onKeyDown={(event) => {
        if (!items.length) return

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          event.preventDefault()
          setActiveIndex((current) => {
            const nextIndex = clampIndex((current + 1) % items.length)
            itemRefs.current[nextIndex]?.focus()
            return nextIndex
          })
        }

        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          event.preventDefault()
          setActiveIndex((current) => {
            const nextIndex = clampIndex((current - 1 + items.length) % items.length)
            itemRefs.current[nextIndex]?.focus()
            return nextIndex
          })
        }
      }}
      {...props}
    >
      <div className="relative flex w-full items-center justify-between gap-1">
        {items.map((item, index) => {
          const ItemIcon = item.icon

          return (
            <Link
              key={item.name}
              href={item.url}
              prefetch={false}
              ref={(element) => {
                itemRefs.current[index] = element
              }}
              className={cn(
                "group relative z-10 flex flex-1 select-none items-center justify-center gap-2 overflow-hidden rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-700 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-800/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black",
              )}
              onFocus={() => setFocusedIndex(index)}
              onMouseEnter={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              onMouseDown={() => setActiveIndex(index)}
              onClick={(event) => {
                if (onItemSelect) {
                  event.preventDefault()
                  onItemSelect(item, index, event)
                }
              }}
            >
              {resolvedIndex === index ? (
                <motion.span
                  layoutId={highlightId}
                  className="absolute inset-0 -z-10 rounded-full border border-zinc-900/10 bg-white"
                  transition={{ type: "spring", stiffness: 500, damping: 40, mass: 1 }}
                />
              ) : null}
              {ItemIcon ? (
                <ItemIcon className="h-4 w-4 shrink-0 text-zinc-600 transition-colors duration-200 group-hover:text-black" />
              ) : null}
              <span className="relative z-10 tracking-[0.3em] text-xs text-zinc-700 transition-colors duration-200 group-hover:text-black">
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
