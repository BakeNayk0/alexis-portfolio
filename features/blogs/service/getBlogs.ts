import type { Blog } from "@/lib/definitions"
import { blogs } from "./blogData"

export async function getBlogs(): Promise<Blog[]> {
  return blogs
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  return blogs.find((blog) => blog.slug === slug) || null
}
