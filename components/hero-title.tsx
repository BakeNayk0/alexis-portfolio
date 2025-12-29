import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const HeroTitle = () => {
  return (
    <div className="w-full flex flex-col justify-center mx-auto lg:mx-0 gap-8">
      <div className="flex flex-col gap-3 opacity-0 animate-fade-up">
        <p className="text-sm font-medium tracking-wider text-primary-400 uppercase text-center lg:text-left">
          Software Engineer
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500">
            Hey, I&apos;m
          </span>{" "}
          <span className="text-foreground">Alexis</span>
        </h1>
      </div>

      <div className="flex gap-3 items-center justify-center lg:justify-start opacity-0 animate-fade-up stagger-2">
        <Link target="_blank" href="https://www.linkedin.com/in/alexis-sanchis-617301129/" className="group">
          <Button
            size="icon"
            className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            variant="ghost"
          >
            <Linkedin className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="mailto:sanchis.alexis@gmail.com" className="group">
          <Button
            size="icon"
            className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            variant="ghost"
          >
            <Mail className="h-4 w-4" />
          </Button>
        </Link>
        <Link target="_blank" href="https://x.com/Nayk0_x" className="group">
          <Button
            size="icon"
            className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            variant="ghost"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Button>
        </Link>
        <Link href="/about">
          <Button
            className="rounded-full pl-1 pr-4 gap-2 bg-primary/10 hover:bg-primary text-primary-300 hover:text-primary-foreground border border-primary/20 hover:border-primary transition-all duration-300 group"
            variant="ghost"
          >
            <Image
              src="/alexis_japan.webp"
              alt="Alexis"
              width={32}
              height={32}
              className="w-8 h-8 object-cover rounded-full ring-2 ring-primary/30 group-hover:ring-primary-foreground/30 transition-all"
            />
            <span className="font-medium">About me</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <p className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left text-muted-foreground leading-relaxed opacity-0 animate-fade-up stagger-3">
        I am a French software engineer passionate about designing and evolving web and mobile applications, using
        modern technologies such as <span className="text-primary-300 font-medium">Next.js</span>,{" "}
        <span className="text-primary-300 font-medium">React Native</span>,{" "}
        <span className="text-primary-300 font-medium">Nest.js</span>, and{" "}
        <span className="text-primary-300 font-medium">Tailwind</span>.
      </p>
    </div>
  )
}
