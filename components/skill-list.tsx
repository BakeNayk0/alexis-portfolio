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
          "A React framework that offers features like server-side rendering and static site generation, enhancing performance and SEO.",
        url: "nextjs-icon",
      },
      {
        title: "React",
        description:
          "A JavaScript library for building user interfaces, well known for its efficient and flexible approach to creating complex UIs using reusable components.",
        url: "tech_react.svg",
      },
      {
        title: "Nest.js",
        description:
          "A modern backend framework built with TypeScript that simplifies the creation of scalable and maintainable web applications.",
        url: "tech_nestjs.svg",
      },
      {
        title: "Laravel",
        description:
          "A popular PHP framework used for building modern web applications. It follows the MVC (Model-View-Controller) architectural pattern and provides an elegant syntax that simplifies tasks like routing, authentication, sessions, and caching.",
        url: "tech_laravel.svg",
      },
      {
        title: "Tailwind",
        description:
          "A popular utility-first CSS framework for quickly building modern, responsive user interfaces. Instead of writing custom CSS, you use predefined utility classes directly in your HTML to style elements.",
        url: "tech_tailwind.svg",
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
        <div key={title} className="flex items-start text-sm gap-2">
          {title === "Next.js" ? (
            <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border border-border p-1">
              <Image src="/nextjs-icon-dark.svg" alt={title} width={40} height={40} className="dark:block hidden" />
              <Image src="/nextjs-icon-light.svg" alt={title} width={40} height={40} className="dark:hidden block" />
            </div>
          ) : (
            <OuterAvatar src={url} />
          )}
          <div className="flex flex-col gap-2">
            <h1 className="text-foreground">{title}</h1>
            <p className={cn("text-muted-foreground")}>{description}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export const SkillListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 4 }, (_, i) => i).map((_, index) => (
        <div key={index} className="min-w-xl lg:min-w-6xl w-full flex items-center gap-2">
          <div className="p-2 bg-muted rounded-full">
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-full h-12" />
          </div>
        </div>
      ))}
    </>
  )
}
