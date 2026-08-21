import type { Dictionary } from "@/lib/dictionaries"

export const Footer = ({ dict }: { dict: Dictionary }) => {
  return (
    <footer className="mt-20 border-t border-border/40 py-8">
      <p className="text-center text-xs text-muted-foreground/70">
        &copy; {new Date().getFullYear()} {dict.hero.name}. {dict.footer.rights}
      </p>
    </footer>
  )
}
