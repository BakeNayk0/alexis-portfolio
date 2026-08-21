import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { contactLinks } from "@/lib/definitions"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/lib/dictionaries"

export const Contact = ({ dict }: { dict: Dictionary }) => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="flex flex-col gap-6 rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <h2 id="contact-heading" className="text-xl font-semibold text-foreground">
          {dict.contact.title}
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">{dict.contact.subtitle}</p>
      </div>

      <ul className="grid gap-2 sm:grid-cols-2">
        {contactLinks.map(({ key, href, icon, value, external }) => (
          <li key={key}>
            <Link
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={cn(
                "group flex items-center gap-3 rounded-xl border p-3 transition-colors",
                key === "email"
                  ? "border-primary/40 bg-primary/5 hover:border-primary hover:bg-primary/10"
                  : "border-border/50 hover:border-primary/40 hover:bg-muted/50",
              )}
            >
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
                  key === "email"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground group-hover:text-foreground",
                )}
              >
                {icon}
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-sm font-medium text-foreground">{dict.actions[key]}</span>
                <span className="truncate text-xs text-muted-foreground">{value}</span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
