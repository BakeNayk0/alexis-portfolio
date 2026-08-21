import Link from "next/link"

const NotFound = () => {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col items-center justify-center gap-4 bg-background font-sans text-foreground">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">404</p>
        <Link href="/" className="text-lg font-medium underline underline-offset-4 hover:text-primary">
          Back to home
        </Link>
      </body>
    </html>
  )
}

export default NotFound
