import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const HeroTitle = () => {
  return (
    <div className="w-full flex flex-col justify-center mx-auto lg:mx-0 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl text-center lg:text-justify font-bold text-primary-300">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
            Hey, I&apos;m
          </span>{" "}
          <span className="text-white">Alexis</span>
        </h1>
        <h2 className="text-2xl text-muted-foreground text-center lg:text-justify">
          Software Engineer
        </h2>
      </div>
      <div className="flex gap-2 items-center justify-center lg:justify-start">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/alexis-sanchis-617301129/"
        >
          <Button size={"icon"} className="rounded-full" variant="default">
            <Linkedin />
          </Button>
        </Link>
        <Link href="mailto:sanchis.alexis@gmail.com">
          <Button size={"icon"} className="rounded-full" variant="default">
            <Mail />
          </Button>
        </Link>
        <Link target="_blank" href="https://x.com/Nayk0_x">
          <Button size={"icon"} className="rounded-full" variant="default">
            <X />
          </Button>
        </Link>
        <Link href="/about">
          <Button className="rounded-full px-0 pr-2" variant="default">
            <Image
              src="/alexis_japan.webp"
              alt="Alexis"
              width={32}
              height={32}
              className="w-8 h-8 object-cover rounded-full"
            />
            <p>About me</p>
          </Button>
        </Link>
      </div>
      <div
        className={cn(
          "max-w-md mx-auto lg:mx-0 text-center lg:text-justify text-white/60"
        )}
      >
        I am a french software engineer, passionate about designing and evolving web
        and mobile applications, using modern technologies such as Next.js,
        React Native, Nest.js, Laravel, and Tailwind.
      </div>
    </div>
  );
};
