import Link from "next/link"
import { Card } from "./ui/card"
import { BlogPreview } from "./blog-preview"
import type { Blog } from "@/lib/definitions"
import dayjs from "dayjs"
import { Skeleton } from "./ui/skeleton"
import { getBlogs } from "@/features/blogs/service/getBlogs"
import { PenLine } from "lucide-react"
import "dayjs/locale/fr"

dayjs.locale("fr")

const getBlogPreviews = async () => {
  try {
    const blogs = await getBlogs()
    return blogs.map((blog) => ({
      ...blog,
      rawText: blog.excerpt || blog.title,
    }))
  } catch (error) {
    console.error(`Failed to get blog previews`)
    return null
  }
}

export const BlogPreviewList = async () => {
  const blogPreviews = await getBlogPreviews()

  if (!blogPreviews) return null

  return (
    <div className="flex flex-col w-full max-w-xl gap-4 lg:max-w-3xl order-last lg:order-first">
      <div className="flex items-center gap-3 px-1 mb-2">
        <PenLine className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Latest Articles</h2>
      </div>
      {blogPreviews.map(({ slug, title, rawText, createdAt }: Blog & { rawText: string }, index) => {
        return (
          <Link key={slug} href={`/blog/${slug}`} className="group">
            <Card
              className={`card-hover bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 p-5 opacity-0 animate-fade-up`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <BlogPreview date={dayjs(createdAt).format("MMMM YYYY")} title={title} description={rawText} />
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

export const BlogPreviewSkeleton = () => {
  return (
    <div className="flex flex-col w-full max-w-xl lg:max-w-3xl gap-4 min-w-0">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="flex flex-col bg-card/30 w-full p-6 h-48 rounded-xl gap-4 overflow-hidden">
          <Skeleton className="bg-muted w-20 h-4 rounded" />
          <Skeleton className="bg-muted w-48 h-6 rounded" />
          <Skeleton className="bg-muted w-full h-16 rounded" />
          <Skeleton className="bg-muted w-24 h-4 rounded" />
        </Skeleton>
      ))}
    </div>
  )
}
