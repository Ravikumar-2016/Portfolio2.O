"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Download, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Ravikumar-2016", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ravikumar-gunti-8b360a2a8/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ravikumar_gunti__/", label: "Instagram" },
    { icon: Mail, href: "mailto:ravikumargunti837@gmail.com", label: "Email" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Ravikumar Gunti
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Computer Science & Engineering Student
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
              B.Tech at IIITDM Jabalpur (2023-2027)
            </p>

            <p className="text-base md:text-lg text-gray-500 dark:text-gray-500 mb-8">
              Passionate about software development and building scalable solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <social.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <a href="/Gunti Ravikumar.pdf" download="Ravikumar_Gunti_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Link href="#contact">
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
