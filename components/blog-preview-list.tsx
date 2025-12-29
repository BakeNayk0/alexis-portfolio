import Link from "next/link"
import { Card } from "./ui/card"
import { BlogPreview } from "./blog-preview"
import type { Blog } from "@/lib/definitions"
import dayjs from "dayjs"
import { Skeleton } from "./ui/skeleton"
import { getBlogs } from "@/features/blogs/service/getBlogs"
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
      {blogPreviews.map(({ slug, title, rawText, createdAt }: Blog & { rawText: string }) => {
        return (
          <Link key={slug} href={`/blog/${slug}`}>
            <Card>
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
        <Skeleton key={index} className="flex flex-col bg-white/40 w-full p-6 h-64 rounded-xl gap-4 overflow-hidden">
          <Skeleton className="bg-white/80 w-12 h-6" />
          <Skeleton className="bg-white/80 w-24 h-6" />
          <Skeleton className="bg-white/80 w-full h-24" />
          <Skeleton className="bg-white/80 w-12 h-6" />
        </Skeleton>
      ))}
    </div>
  )
}
