import { Code, CircleUser, AtSign } from "lucide-react"
import type { ReactNode } from "react"

export type Work = {
  title: string
  job: string
  description?: string
  date: string
  url?: string
}

export type Skill = {
  title: string
  description: string
  url?: string
}

export type Blog = {
  id: number
  title: string
  slug: string
  createdAt: string
  excerpt?: string
  content?: string
}

export type Hero = {
  name: string
  greetings: string
  description: string
}

type Route = {
  href: string
  label: string
  description?: string
  icon?: ReactNode
}

export const routes: Route[] = [
  {
    href: "/about",
    label: "About",
    description: "Know a little bit more about me",
    icon: <CircleUser size={"20"} />,
  },
  {
    href: "/techs",
    label: "Techs",
    description: "The tools I'm using to craft apps",
    icon: <Code size={"20"} />,
  },
  {
    href: "/contacts",
    label: "Contacts",
    description: "How to contact me",
    icon: <AtSign size={"20"} />,
  },
]

export type ProductType = {
  id: string
  title: string
  handle: string
  featuredImage: {
    url: string
  }
}

export type CollectionType = {
  id: string
  title: string
  handle: string
  image: {
    url: string
  }
}
