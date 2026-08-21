import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitch } from "./language-switch"
import type { Dictionary } from "@/lib/dictionaries"

export const Navbar = ({ lang, dict }: { lang: string; dict: Dictionary }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div className="w-full max-w-4xl border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="flex items-center gap-2 px-4 py-3 sm:px-6">
          <Link href={`/${lang}`} className="text-sm font-medium tracking-tight text-foreground">
            {dict.hero.name}
          </Link>
          <div className="ml-auto flex items-center gap-1">
            <LanguageSwitch lang={lang} label={dict.nav.switch_language} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
