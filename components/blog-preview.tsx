import { ArrowUpRight } from "lucide-react"

interface BlogPreviewProps {
  date: string
  title: string
  description: string
}

export const BlogPreview = ({ date, title, description }: BlogPreviewProps) => {
  return (
    <div className="group flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium text-muted-foreground tracking-wide uppercase">{date}</div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{description}</p>
      <div className="flex items-center gap-1 text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors">
        <span>Read article</span>
        <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  )
}
