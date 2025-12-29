"use client"

import { Card } from "@/components/ui/card"

import useMediaQuery from "@/hooks/useMediaQuery"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { routes } from "../lib/definitions"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { AlignJustify } from "lucide-react"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"
import { ThemeToggle } from "./theme-toggle"

export const Navbar = () => {
  const ref = useRef<HTMLElement>(null)
  const [isIntersecting, setIntersecting] = useState(true)
  const smallScreen = useMediaQuery("(max-width: 640px)")
  const pathname = usePathname()
  const [openDrawer, setOpenDrawer] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <header ref={ref} className="relative flex justify-center">
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center">
        <div
          className={cn(
            "w-full max-w-6xl rounded-b-3xl border-b backdrop-blur duration-200",
            isIntersecting ? "border-transparent bg-background/0" : "border-primary/20 bg-background/80",
          )}
        >
          <div className="flex items-center gap-3 px-4 py-4 sm:px-8">
            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-full ring ring-2 ring-primary/30"
            >
              <Avatar>
                <AvatarImage className="rounded-full" src="/nekawa_favicon.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
            {smallScreen ? (
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <Link
                  href="/"
                  className={cn("min-w-0 flex-1 truncate text-center text-sm text-muted-foreground font-mono")}
                >
                  nayko.dev
                </Link>
                <ThemeToggle />
                <Drawer onClose={() => setOpenDrawer(false)} open={openDrawer}>
                  <DrawerTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-muted-foreground"
                      onClick={() => setOpenDrawer(true)}
                    >
                      <AlignJustify className="h-5 w-5" />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle className="font-sans">Dive into my world, roam around</DrawerTitle>
                      <DrawerDescription className="font-mono">
                        You can also visit Nekawa Tree for other projects, with the button below.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col gap-2 p-2">
                      {routes.map(({ href, icon, description }) => (
                        <Card key={href} className="flex flex-row items-center gap-2 p-2">
                          {icon}
                          <Link
                            href={href}
                            onClick={() => setOpenDrawer(false)}
                            className={cn(
                              "text-sm transition-all hover:text-primary font-mono",
                              pathname.includes(href) && "text-primary",
                            )}
                          >
                            {description}
                          </Link>
                        </Card>
                      ))}
                    </div>
                    <DrawerFooter>
                      <Button asChild onClick={() => setOpenDrawer(false)}>
                        <a href="https://tree.nekawa.fr" target="_blank" rel="noopener noreferrer">
                          Visit Nekawa
                        </a>
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            ) : (
              <nav className="ml-auto flex items-center gap-4 text-sm">
                {routes.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn("transition-all hover:text-primary", pathname.includes(href) && "text-primary")}
                  >
                    {label}
                  </Link>
                ))}
                <ThemeToggle />
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
