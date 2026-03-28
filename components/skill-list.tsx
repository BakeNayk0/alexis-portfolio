import type { Skill } from "@/lib/definitions"
import { cn } from "@/lib/utils"
import { OuterAvatar } from "./ui/avatar"
import { Skeleton } from "./ui/skeleton"
import Image from "next/image"

const getSkills = async () => {
  try {
    return [
      {
        title: "Next.js",
        description:
          "My primary framework for building full-stack web applications. I rely on it for server-side rendering, API routes, and everything in between.",
        url: "nextjs-icon",
      },
      {
        title: "React",
        description:
          "The foundation of my front-end work. I build reusable, composable UIs and manage complex client-side state with confidence.",
        url: "tech_react.svg",
      },
      {
        title: "TypeScript",
        description:
          "I write TypeScript by default. Strong typing catches bugs early, improves refactoring, and makes codebases easier to maintain over time.",
        url: "tech_typescript.svg",
      },
      {
        title: "Nest.js",
        description:
          "My go-to for scalable backend services. I appreciate its modular architecture and how naturally it maps to domain-driven design.",
        url: "tech_nestjs.svg",
      },
      {
        title: "Python",
        description:
          "Used for scripting, automation, and cybersecurity tooling. Its versatility makes it invaluable for CTF challenges, exploit development, and quick prototyping.",
        url: "tech_python.svg",
      },
    ]
  } catch (error) {
    console.error(error)
    return null
  }
}

export const SkillList = async () => {
  const skills = await getSkills()

  return (
    <>
      {skills?.map(({ title, url, description }: Skill) => (
        <div key={title} className="flex items-start text-sm gap-3">
          {title === "Next.js" ? (
            <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border border-border p-1">
              <Image src="/nextjs-icon-dark.svg" alt={title} width={40} height={40} className="dark:block hidden" />
              <Image src="/nextjs-icon-light.svg" alt={title} width={40} height={40} className="dark:hidden block" />
            </div>
          ) : (
            <OuterAvatar src={url} />
          )}
          <div className="flex flex-col gap-1">
            <h1 className="text-foreground font-medium">{title}</h1>
            <p className={cn("text-muted-foreground leading-relaxed")}>{description}</p>
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
