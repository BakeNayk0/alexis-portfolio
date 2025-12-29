import type { Work } from "@/lib/definitions"
import { OuterAvatar } from "./ui/avatar"
import { Skeleton } from "./ui/skeleton"

const getWorks = async (): Promise<Work[] | null> => {
  try {
    return [
      {
        title: "Elipce Solutions",
        job: "Software Engineer",
        date: "2025 - Present",
        url: "elipce.jpg",
      },
      {
        title: "CBA Informatique Libérale",
        job: "Fullstack developer",
        date: "2023 - 2024",
        url: "cba.jpg",
      },
      {
        title: "Arche MC2",
        job: "Lead Android developer",
        date: "2018 - 2023",
        url: "arche-mc2.png",
      },
      {
        title: "Logic'gram",
        job: "Analyst developer",
        date: "2017 - 2018",
        url: "lg.jpg",
      },
      {
        title: "Master in Softare Engineering",
        job: "Student",
        date: "2015 - 2017",
        url: "ceri.jpg",
      },
    ]
  } catch (error) {
    return null
  }
}

export const WorkList = async () => {
  const works = await getWorks()

  return (
    <>
      {works?.map(({ title, url, job, date }: Work) => (
        <div key={title} className="flex items-start text-sm gap-2">
          <OuterAvatar src={url} />
          <div className="flex flex-col w-full gap-2">
            <h1 className="text-foreground">{title}</h1>
            <h2 className="flex-1 text-primary">{job}</h2>
            <div className="text-muted-foreground">
              <h2>{date}</h2>
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
