import Link from "next/link"
import { Button } from "@/components/ui/button"
import { contactLinks } from "@/lib/definitions"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/lib/dictionaries"

export const ActionLinks = ({ dict, className }: { dict: Dictionary; className?: string }) => {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {contactLinks.map(({ key, href, icon, external }) => {
        const primary = key === "email"

        return (
          <Button
            key={key}
            asChild
            size="sm"
            variant="ghost"
            className={cn(
              "gap-2 rounded-full border transition-colors",
              primary
                ? "border-primary bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground"
                : "border-border/60 text-muted-foreground hover:text-foreground",
            )}
          >
            <Link
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {icon}
              <span>{dict.actions[key]}</span>
            </Link>
          </Button>
        )
      })}
    </div>
  )
}
