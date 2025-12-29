import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Alexis S.",
  description: "Fullstack developer",
  icons: "nayko_logo.png",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased min-h-screen font-sans">
        <div className="bg-zinc-900 mx-auto flex min-h-screen w-full max-w-6xl flex-col border-x border-slate-100/10">
          <Navbar />
          <main className="flex-1 bg-transparent px-2 sm:px-4 mt-32 w-full min-w-0 flex justify-center z-[1]">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster richColors />
      </body>
    </html>
  )
}
