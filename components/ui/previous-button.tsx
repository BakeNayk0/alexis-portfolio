"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface PreviousButtonProps {
  className?: string
  onClick?: () => void
  asChild?: boolean
  href?: string
}

export const PreviousButton = ({ className, onClick, asChild, href }: PreviousButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <button
      className={`hover:bg-primary/20 transition-all cursor-pointer rounded-full w-fit border bg-muted border-border p-3 ${className}`}
      onClick={!asChild ? (onClick ?? handleClick) : undefined}
    >
      <ArrowLeft className="w-4 h-4 text-muted-foreground" />
    </button>
  )
}
