import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";

export const HeroTitle = ({ dict }: { dict: Dictionary }) => {
  return (
    <div className="w-full flex flex-col justify-center mx-auto lg:mx-0 gap-8">
      <div className="flex flex-col gap-3 opacity-0 animate-fade-up">
        <p className="text-sm font-medium tracking-wider text-primary-600 dark:text-primary-400 uppercase text-center lg:text-left">
          {dict.hero_title.role}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 dark:from-primary-300 dark:via-primary-400 dark:to-primary-500">
            {dict.hero_title.hey}
          </span>{" "}
          <span className="text-foreground">Alexis</span>
        </h1>
      </div>

      <div className="flex gap-3 items-center justify-center lg:justify-start opacity-0 animate-fade-up stagger-2">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/alexis-sanchis-617301129/"
          className="group"
        >
          <Button
            size="icon"
            className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
            variant="ghost"
          >
            <Linkedin className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="mailto:sanchis.alexis@gmail.com" className="group">
          <Button
            size="icon"
            className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
            variant="ghost"
          >
            <Mail className="h-4 w-4" />
          </Button>
        </Link>
        <Link target="_blank" href="https://x.com/Nayk0_x" className="group">
          <Button
            size="icon"
            className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
            variant="ghost"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Button>
        </Link>
        <Link href="/about">
          <Button
            className="rounded-full pl-1 pr-4 gap-2 bg-primary/10 hover:bg-primary dark:hover:bg-primary/20 text-primary-300 hover:text-primary-foreground dark:hover:text-primary-200 border border-primary/20 hover:border-primary dark:hover:border-primary/40 transition-all duration-300 group cursor-pointer"
            variant="ghost"
          >
            <Image
              src="/alexis_japan.webp"
              alt="Alexis"
              width={32}
              height={32}
              className="w-8 h-8 object-cover rounded-full ring-2 ring-primary/30 group-hover:ring-primary-foreground/30 dark:group-hover:ring-primary/50 transition-all"
            />
            <span className="font-medium">{dict.hero_title.about_me}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <p className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left text-muted-foreground leading-relaxed opacity-0 animate-fade-up stagger-3">
        {dict.hero_title.desc_1}
        <span className="text-primary-600 dark:text-primary-300 font-medium">
          Next.js
        </span>
        {dict.hero_title.desc_2}
        <span className="text-primary-600 dark:text-primary-300 font-medium">
          Nest.js
        </span>
        {dict.hero_title.desc_3}
        <span className="text-primary-600 dark:text-primary-300 font-medium">
          Python
        </span>
        {dict.hero_title.desc_4}
        <span className="text-primary-600 dark:text-primary-300 font-medium">
          {dict.hero_title.modern_ai}
        </span>{" "}
        {dict.hero_title.desc_5}
        <span className="text-primary-600 dark:text-primary-300 font-medium">
          {dict.hero_title.cybersecurity}
        </span>{" "}
        {dict.hero_title.desc_6}
      </p>
    </div>
  );
};
