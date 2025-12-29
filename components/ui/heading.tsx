import type { ReactNode } from "react"
import { PreviousButton } from "./previous-button"
import { cn } from "@/lib/utils"

interface HeadingProps {
  title: string
  children?: ReactNode
  className?: string
}

export const Heading = ({ title, children, className }: HeadingProps) => {
  return (
    <div className={cn(className)}>
      <div className="flex items-center gap-4">
        <PreviousButton />
        <h1 className={cn(`text-3xl`)}>{title}</h1>
      </div>
      {children}
    </div>
  )
}
