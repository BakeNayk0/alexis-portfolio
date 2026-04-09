import type { Work } from "@/lib/definitions"
import { OuterAvatar } from "./ui/avatar"
import { Skeleton } from "./ui/skeleton"
import type { Dictionary } from "@/lib/dictionaries"

const urls = [
  "elipce.jpg",
  "cba.jpg",
  "arche-mc2.png",
  "lg.jpg",
  "ceri.jpg",
]

export const WorkList = ({ dict }: { dict: Dictionary }) => {
  return (
    <>
      {dict.works.map((work, index) => (
        <div key={work.title} className="flex items-start text-sm gap-2">
          <OuterAvatar src={urls[index]} />
          <div className="flex flex-col w-full gap-2">
            <h1 className="text-foreground">{work.title}</h1>
            <h2 className="flex-1 text-primary">{work.job}</h2>
            <div className="text-muted-foreground">
              <h2>{work.date}</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export const WorkListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 4 }, (_, i) => i).map((_, index) => (
        <div key={index} className="min-w-xl lg:min-w-6xl w-full flex items-center text-sm gap-2">
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
