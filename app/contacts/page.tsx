import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Linkedin, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socials = [
  {
    icon: <XIcon />,
    href: "https://x.com/Nayk0_x",
    label: "Follow me on X",
    handle: "@Nayk0_x",
    description: "Tech thoughts & updates",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:sanchis.alexis@gmail.com",
    label: "Send an email",
    handle: "sanchis.alexis@gmail.com",
    description: "For work inquiries",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/alexis-sanchis-617301129/",
    label: "Connect on LinkedIn",
    handle: "Alexis Sanchis",
    description: "Professional network",
  },
]

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-16 sm:py-24">
      <div className="text-center mb-12 animate-fade-up opacity-0">
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3">Get in Touch</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        </p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        {socials.map((s, index) => (
          <Card
            key={index}
            className={cn(
              "group relative overflow-hidden border-border bg-card",
              "transition-all duration-300 ease-out",
              "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
              "opacity-0 animate-fade-up",
              index === 0 && "stagger-1",
              index === 1 && "stagger-2",
              index === 2 && "stagger-3",
            )}
          >
            <Link
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 sm:p-10"
            >
              <span className="flex items-center justify-center w-14 h-14 mb-6 rounded-full border border-border bg-muted/50 text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:scale-110">
                {s.icon}
              </span>

              <div className="text-center space-y-1">
                <span className="block text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {s.handle}
                </span>
                <span className="block text-sm text-muted-foreground">{s.description}</span>
              </div>

              <span className="mt-6 flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-primary transition-all duration-300">
                {s.label}
                <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Card>
        ))}
      </div>
    </main>
  )
}
