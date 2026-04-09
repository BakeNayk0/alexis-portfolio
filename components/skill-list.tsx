import type { Skill } from "@/lib/definitions"
import { cn } from "@/lib/utils"
import { OuterAvatar } from "./ui/avatar"
import { Skeleton } from "./ui/skeleton"
import Image from "next/image"
import type { Dictionary } from "@/lib/dictionaries"

const urls = [
  "nextjs-icon",
  "tech_react.svg",
  "tech_typescript.svg",
  "tech_nestjs.svg",
  "tech_python.svg",
]

export const SkillList = ({ dict }: { dict: Dictionary }) => {
  return (
    <>
      {dict.skills.map((skill, index) => (
        <div key={skill.title} className="flex items-start text-sm gap-3">
          {skill.title === "Next.js" ? (
            <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border border-border p-1">
              <Image src="/nextjs-icon-dark.svg" alt={skill.title} width={40} height={40} className="dark:block hidden" />
              <Image src="/nextjs-icon-light.svg" alt={skill.title} width={40} height={40} className="dark:hidden block" />
            </div>
          ) : (
            <OuterAvatar src={urls[index]} />
          )}
          <div className="flex flex-col gap-1">
            <h1 className="text-foreground font-medium">{skill.title}</h1>
            <p className={cn("text-muted-foreground leading-relaxed")}>{skill.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export const SkillListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => i).map((_, index) => (
        <div key={index} className="w-full flex items-center gap-2">
          <div className="p-2 bg-muted rounded-full">
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-full h-10" />
          </div>
        </div>
      ))}
    </>
  )
}
