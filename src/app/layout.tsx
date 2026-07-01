import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ravi Kumar Gunti | Full Stack Developer",
  description:
    "Portfolio of Ravi Kumar Gunti, a final-year B.Tech Computer Science and Engineering student at IIITDM Jabalpur. Specializing in React, Next.js, Node.js, software engineering, and AI API integrations.",
  keywords: [
    "Ravi Kumar Gunti",
    "Full Stack Developer",
    "Software Engineer",
    "IIITDM Jabalpur",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Software Engineering Internship",
    "Portfolio",
  ],
  authors: [{ name: "Ravi Kumar Gunti" }],
  creator: "Ravi Kumar Gunti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-sigma-roan-70.vercel.app/",
    title: "Ravi Kumar Gunti | Full Stack Developer",
    description:
      "Final-year B.Tech CSE student at IIITDM Jabalpur. Building modern full-stack web applications using React, Next.js, Node.js, and AI technologies.",
    siteName: "Ravi Kumar Gunti Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Kumar Gunti | Full Stack Developer",
    description:
      "Final-year B.Tech CSE student at IIITDM Jabalpur. Building modern full-stack web applications using React, Next.js, Node.js, and AI technologies.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ravi Kumar Gunti",
    "jobTitle": "Full Stack Developer",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Indian Institute of Information Technology, Design and Manufacturing, Jabalpur",
      "sameAs": "https://www.iiitdmj.ac.in/"
    },
    "url": "https://portfolio-sigma-roan-70.vercel.app/",
    "sameAs": [
      "https://github.com/Ravikumar-2016",
      "https://www.linkedin.com/in/ravikumar-gunti-8b360a2a8/"
    ],
    "knowsAbout": [
      "Full Stack Development",
      "Software Engineering",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "AI Integration"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
