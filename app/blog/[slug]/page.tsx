import dayjs from "dayjs"
import { PreviousButton } from "@/components/ui/previous-button"
import { getBlogs } from "@/lib/blogs"
import { notFound } from "next/navigation"
import "dayjs/locale/fr"

dayjs.locale("fr")

export async function generateStaticParams() {
  const blogs = await getBlogs()
  return blogs.map((blog) => ({ slug: blog.slug }))
}

const BlogPage = async (props: { params: { slug: string } }) => {
  const { slug } = props.params
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
            <p className="text-primary mr-2">|</p>
            <p className="capitalize">{dayjs(blog.createdAt).format("MMMM YYYY")}</p>
          </div>
          <h1 className="text-5xl font-medium font-sans text-foreground">{blog.title}</h1>
          <article className="prose prose-lg max-w-none dark:prose-invert">
            {blog.content?.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("```")) {
                const lines = paragraph.split("\n")
                const lang = lines[0].replace("```", "")
                const code = lines.slice(1, -1).join("\n")
                return (
                  <pre key={index} className="bg-muted border border-border rounded-lg p-4 overflow-x-auto my-4">
                    <code className="text-sm font-mono text-foreground">{code}</code>
                  </pre>
                )
              }
              if (paragraph.startsWith("- ") || paragraph.startsWith("1. ")) {
                const items = paragraph.split("\n").filter(Boolean)
                const isOrdered = paragraph.startsWith("1. ")
                const ListTag = isOrdered ? "ol" : "ul"
                return (
                  <ListTag
                    key={index}
                    className={`${isOrdered ? "list-decimal" : "list-disc"} list-inside space-y-2 my-4 text-muted-foreground`}
                  >
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item.replace(/^[-\d.]\s*\*?\*?/, "").replace(/\*\*/g, "")}
                      </li>
                    ))}
                  </ListTag>
                )
              }
              return (
                <p key={index} className="text-muted-foreground leading-relaxed my-4">
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
