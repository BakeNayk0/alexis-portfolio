import { NekawaLink } from "./nekawa-link"
import { Heart } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="text-sm flex flex-col w-full items-center mt-24 gap-4 py-8 border-t border-border/30">
      <div className="flex flex-col items-center gap-2 text-center px-4">
        <p className="text-muted-foreground flex items-center gap-1.5">
          Crafted with <Heart className="h-3.5 w-3.5 text-primary-600 dark:text-primary-400 animate-pulse-soft" /> by Alexis
        </p>
        <p className="text-muted-foreground/60 text-xs">
          &copy; 2025 - <NekawaLink>Nekawa</NekawaLink>
        </p>
      </div>
    </footer>
  )
}
