"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export const LanguageSwitch = ({ lang, label }: { lang: string; label: string }) => {
  const pathname = usePathname()
  const target = lang === "fr" ? "en" : "fr"
  const href = pathname.replace(new RegExp(`^/${lang}`), `/${target}`) || `/${target}`

  return (
    <Button
      asChild
      size="sm"
      variant="ghost"
      className="rounded-full px-3 text-xs font-medium text-muted-foreground hover:text-foreground"
    >
      <Link href={href} aria-label={label} hrefLang={target}>
        {target.toUpperCase()}
      </Link>
    </Button>
  )
}
