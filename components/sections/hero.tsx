import Image from "next/image"
import { MapPin, Wifi } from "lucide-react"
import { ActionLinks } from "@/components/action-links"
import { Badge } from "@/components/ui/badge"
import type { Dictionary } from "@/lib/dictionaries"

export const Hero = ({ dict }: { dict: Dictionary }) => {
  return (
    <section className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
      <div className="flex flex-1 flex-col gap-5 text-center sm:text-left">
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            {dict.hero.role}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {dict.hero.name}
          </h1>
          <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground sm:justify-start">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {dict.hero.location}
          </p>
        </div>

        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {dict.hero.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
          <Badge variant="secondary" className="rounded-full border border-border/50 text-xs font-normal">
            {dict.hero.french}
          </Badge>
          <Badge variant="secondary" className="rounded-full border border-border/50 text-xs font-normal">
            {dict.hero.english}
          </Badge>
          <Badge
            variant="secondary"
            className="gap-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs font-normal text-primary"
          >
            <Wifi className="h-3 w-3" aria-hidden="true" />
            {dict.hero.remote}
          </Badge>
        </div>

        <ActionLinks dict={dict} className="justify-center sm:justify-start" />
      </div>

      <Image
        src="/alexis_pro.webp"
        alt={dict.hero.name}
        width={160}
        height={160}
        priority
        className="h-32 w-32 shrink-0 rounded-full object-cover ring-1 ring-border sm:h-40 sm:w-40"
      />
    </section>
  )
}
