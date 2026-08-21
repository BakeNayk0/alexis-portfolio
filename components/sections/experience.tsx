import { OuterAvatar } from "@/components/ui/avatar"
import { experienceLogos } from "@/lib/definitions"
import type { Dictionary } from "@/lib/dictionaries"

type ExperienceItem = Dictionary["experience"]["items"][number] & { description?: string }

export const Experience = ({ dict }: { dict: Dictionary }) => {
  return (
    <section aria-labelledby="experience-heading" className="flex flex-col gap-5">
      <h2 id="experience-heading" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {dict.experience.title}
      </h2>

      <ol className="flex flex-col">
        {(dict.experience.items as ExperienceItem[]).map((item, index) => (
          <li key={item.company} className="flex items-start gap-4 border-b border-border/40 py-5 last:border-0">
            <OuterAvatar src={experienceLogos[index]} alt={item.company} className="mt-0.5" />

            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <p className="font-medium text-foreground">{item.company}</p>
                <p className="shrink-0 text-xs tabular-nums text-muted-foreground/80">{item.date}</p>
              </div>

              <p className="text-sm text-primary">{item.role}</p>

              {item.description && (
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
