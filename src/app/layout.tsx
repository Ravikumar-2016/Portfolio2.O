import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ravikumar Gunti - Computer Science Student & Developer",
  description:
    "B.Tech Computer Science student at IIITDM Jabalpur. Passionate about software development, web technologies, and building scalable solutions.",
  keywords: [
    "Ravikumar Gunti",
    "Computer Science",
    "IIITDM Jabalpur",
    "Web Developer",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Ravikumar Gunti" }],
  creator: "Ravikumar Gunti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravikumar-portfolio.vercel.app",
    title: "Ravikumar Gunti - Computer Science Student & Developer",
    description:
      "B.Tech Computer Science student at IIITDM Jabalpur. Passionate about software development and building scalable solutions.",
    siteName: "Ravikumar Gunti Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravikumar Gunti - Computer Science Student & Developer",
    description:
      "B.Tech Computer Science student at IIITDM Jabalpur. Passionate about software development and building scalable solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
