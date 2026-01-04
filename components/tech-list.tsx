import { Suspense } from "react"
import { getTechs } from "@/lib/techs"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import Link from "next/link"

async function TechListContent() {
  const techs = await getTechs()

  return (
    <>
      {techs.map((tech, index) => (
        <Link key={tech.name} href={`/techs/${tech.slug}`} className="block">
          <Card
            className="card-hover bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 p-5 opacity-0 animate-fade-up transition-all duration-300 cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                {tech.slug === "nextjs" ? (
                  <>
                    <Image
                      src="/nextjs-icon-dark.svg"
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="dark:block hidden"
                    />
                    <Image
                      src="/nextjs-icon-light.svg"
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="dark:hidden block"
                    />
                  </>
                ) : (
                  <Image src={`/${tech.url}`} alt={tech.name} width={48} height={48} className="object-contain" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground">{tech.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{tech.description}</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </>
  )
}

export function TechListSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="h-32 bg-card/30 rounded-xl" />
      ))}
    </>
  )
}

export function TechList() {
  return (
    <Suspense fallback={<TechListSkeleton />}>
      <TechListContent />
    </Suspense>
  )
}
