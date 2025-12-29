import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Alexis S.",
  description: "Fullstack developer",
  icons: "nayko_logo.png",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased min-h-screen font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="bg-card/30 mx-auto flex min-h-screen w-full max-w-6xl flex-col border-x border-border/30 relative">
            <Navbar />
            <main className="flex-1 bg-transparent px-2 sm:px-4 mt-32 w-full min-w-0 flex justify-center z-[1]">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
