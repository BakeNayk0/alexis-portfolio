import dayjs from "dayjs"
import { PreviousButton } from "@/components/ui/previous-button"
import { getBlogs } from "@/features/blogs/service/getBlogs"
import { notFound } from "next/navigation"
import "dayjs/locale/fr"

dayjs.locale("fr")

export async function generateStaticParams() {
  const blogs = await getBlogs()
  return blogs.map((blog) => ({ slug: blog.slug }))
}

const BlogPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params
  const blogs = await getBlogs()
  const blog = blogs.find((blog) => blog.slug === slug) || null

  if (!blog) notFound()

  return (
    <div className="relative max-w-sm sm:max-w-3xl w-full mx-auto px-6 sm:px-4 space-y-4">
      <div className="flex justify-center mt-2">
        <div className="max-w-xs sm:max-w-3xl sm:w-full flex flex-col gap-8">
          <div className="text-muted-foreground flex items-center gap-1">
            <span>
              <PreviousButton className="mr-2" />
            </span>
            <p className="text-primary-200 mr-2">|</p>
            <p className="capitalize">{dayjs(blog.createdAt).format("MMMM YYYY")}</p>
          </div>
          <h1 className="text-5xl font-medium font-sans">{blog.title}</h1>
          <article className="prose prose-invert prose-lg max-w-none">
            {blog.content?.split("\n\n").map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-white mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              // Handle code blocks
              if (paragraph.startsWith("```")) {
                const lines = paragraph.split("\n")
                const lang = lines[0].replace("```", "")
                const code = lines.slice(1, -1).join("\n")
                return (
                  <pre key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto my-4">
                    <code className="text-sm font-mono text-zinc-300">{code}</code>
                  </pre>
                )
              }
              // Handle lists
              if (paragraph.startsWith("- ") || paragraph.startsWith("1. ")) {
                const items = paragraph.split("\n").filter(Boolean)
                const isOrdered = paragraph.startsWith("1. ")
                const ListTag = isOrdered ? "ol" : "ul"
                return (
                  <ListTag
                    key={index}
                    className={`${isOrdered ? "list-decimal" : "list-disc"} list-inside space-y-2 my-4 text-zinc-300`}
                  >
                    {items.map((item, i) => (
                      <li key={i} className="text-zinc-300">
                        {item.replace(/^[-\d.]\s*\*?\*?/, "").replace(/\*\*/g, "")}
                      </li>
                    ))}
                  </ListTag>
                )
              }
              // Regular paragraphs
              return (
                <p key={index} className="text-zinc-300 leading-relaxed my-4">
                  {paragraph}
                </p>
              )
            })}
          </article>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
