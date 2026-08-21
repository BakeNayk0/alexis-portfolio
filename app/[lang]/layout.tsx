import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { getDictionary } from "@/lib/dictionaries"

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }]
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const params = await props.params
  const dict = await getDictionary(params.lang)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    icons: { icon: "/nayko.png" },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "profile",
      locale: params.lang === "fr" ? "fr_FR" : "en_US",
    },
  }
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const params = await props.params
  const dict = await getDictionary(params.lang)
  const { children } = props

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 sm:px-6">
            <Navbar lang={params.lang} dict={dict} />
            <main className="flex-1 pt-28 sm:pt-32">{children}</main>
            <Footer dict={dict} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
