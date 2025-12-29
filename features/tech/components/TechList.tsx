import Parallax from "@/components/parallax"
import { Skeleton } from "@/components/ui/skeleton"
import { getTechs } from "@/features/tech/api"

export const TechList = async () => {
  const techs = await getTechs()

  return (
    <>
      <Parallax
        images={techs.map((tech) => {
          return {
            url: `${tech.url}`,
            label: tech.name,
            description: tech.description,
          }
        })}
      />
    </>
  )
}

export const TechListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }, (_, i) => i).map((_, index) => (
        <div key={index} className="flex flex-col items-center w-80 h-72 gap-4">
          <Skeleton className="rounded-3xl w-full h-full" />
          <Skeleton className="w-24 h-8" />
          <Skeleton className="w-32 h-8" />
        </div>
      ))}
    </>
  )
}
