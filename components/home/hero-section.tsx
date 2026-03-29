import { Earth } from "lucide-react"
import dynamic from "next/dynamic"
import { HeroTitle } from "../hero-title"
import { Badge } from "../ui/badge"

const HeroAvatar = dynamic(() => import("@/components/hero-avatar"))

const HeroSection = () => {
  return (
    <div className="flex-col-reverse min-w-full flex flex-col lg:flex-row items-start mt-16 sm:mt-28 gap-12 px-6 lg:gap-8">
      <HeroTitle />
      <div className="w-full mx-auto justify-center items-center flex flex-col gap-4 opacity-0 animate-scale-in">
        <HeroAvatar />
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Earth size={16} className="text-primary-600 dark:text-primary-400" />
          <span>Based in France</span>
        </div>
        <div className="flex gap-2 items-center">
          <Badge
            variant="secondary"
            className="rounded-full text-xs font-medium bg-secondary/80 text-muted-foreground border border-border/50"
          >
            French
          </Badge>
          <Badge
            variant="secondary"
            className="rounded-full text-xs font-medium bg-secondary/80 text-muted-foreground border border-border/50"
          >
            English
          </Badge>
        </div>
      </div>
    </div>
  )
}

HeroSection.displayName = "HeroSection"

export default HeroSection
