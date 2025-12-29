interface BlogPreviewProps {
  date: string;
  title: string;
  description: string;
}


export const BlogPreview = ({
  date,
  title,
  description,
}: BlogPreviewProps) => {
  return (
    <>
      <div className="text-sm text-muted-foreground flex items-center gap-1">
        <p className="text-primary-200">|</p>
        <p>{date}</p>
      </div>
      <div className="font-bold">
        {title}
      </div>
      <div className="text-sm text-white/70">{description}</div>
      <div className="text-sm text-primary-200">
        Read more
      </div>
    </>
  )
}
