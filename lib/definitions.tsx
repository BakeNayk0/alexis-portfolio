import { Github, Linkedin, Mail, FileText } from "lucide-react"
import type { ReactNode } from "react"

export const EMAIL = "sanchis.alexis@gmail.com"

export type ContactLink = {
  key: "email" | "linkedin" | "github" | "resume"
  href: string
  icon: ReactNode
  value: string
  external: boolean
}

export const contactLinks: ContactLink[] = [
  {
    key: "email",
    href: `mailto:${EMAIL}`,
    icon: <Mail className="h-5 w-5" />,
    value: EMAIL,
    external: false,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/alexis-sanchis-617301129/",
    icon: <Linkedin className="h-5 w-5" />,
    value: "in/alexis-sanchis",
    external: true,
  },
  {
    key: "github",
    href: "https://github.com/BakeNayk0",
    icon: <Github className="h-5 w-5" />,
    value: "BakeNayk0",
    external: true,
  },
  {
    key: "resume",
    href: "/cv_alexis_sanchis.pdf",
    icon: <FileText className="h-5 w-5" />,
    value: "cv_alexis_sanchis.pdf",
    external: true,
  },
]

// Company/school logos, index-aligned with dict.experience.items
export const experienceLogos = ["elipce.jpg", "cba.jpg", "arche-mc2.png", "lg.jpg", "ceri.jpg"]
