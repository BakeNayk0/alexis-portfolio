import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Linkedin, Mail, X } from "lucide-react"
import Link from "next/link"

const socials = [
  {
    icon: <X size={20} />,
    href: "https://x.com/Nayk0_x",
    label: "X",
    handle: "@Nayk0_x",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:sanchis.alexis@gmail.com",
    label: "Email",
    handle: "sanchis.alexis@gmail.com",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/alexis-sanchis-617301129/",
    label: "Linkedin",
    handle: "Alexis Sanchis",
  },
]

export default function Contact() {
  return (
    <div className={cn("container flex flex-col gap-4 min-h-screen px-4 mx-auto sm:-mt-36 font-sans")}>
      <div className="grid w-full min-h-screen grid-cols-1 items-center justify-center gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
        {socials.map((s, index) => (
          <Card key={index} className="border-border p-4 bg-card">
            <Link
              href={s.href}
              target="_blank"
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
            >
              <span
                className="absolute w-px h-2/3 bg-gradient-to-b from-border via-border/50 to-transparent"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-muted-foreground group-hover:text-foreground group-hover:bg-primary border-border bg-card group-hover:border-primary drop-shadow-orange">
                {s.icon}
              </span>
              <div className="z-10 flex flex-col items-center">
                <span className="lg:text-xl font-medium duration-150 xl:text-2xl text-foreground group-hover:text-primary font-display">
                  {s.handle}
                </span>
                <span className="mt-4 text-sm text-center duration-1000 text-muted-foreground group-hover:text-foreground">
                  {s.label}
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
