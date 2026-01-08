import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import SocialFooter from "@/components/SocialFooter"

export const metadata: Metadata = {
  title: "M!$$|○N€X+",
  description: "Curated referral perks",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {/* Top navigation */}
        <Navbar />

        {/* Page content */}
        <main className="pb-20">
          {children}
        </main>

        {/* Persistent social footer */}
        <SocialFooter />
      </body>
    </html>
  )
}
