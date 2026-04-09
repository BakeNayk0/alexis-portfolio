export const metadata = {
  title: 'About | Alexis Sanchis',
  description: 'Learn more about Alexis Sanchis, a Software Engineer specializing in Next.js, Nest.js, and Python.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
