"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail, ArrowUpRight, FolderGit2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.p 
              variants={itemVariants}
              className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm md:text-base mb-3"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
                Ravi Kumar Gunti
              </span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-6"
            >
              Final Year B.Tech CSE Student at IIITDM Jabalpur
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed"
            >
              Building modern full-stack web applications using React, Next.js, Node.js and AI technologies.
            </motion.p>

            {/* Redesigned Button Cluster */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center items-center gap-4 max-w-3xl"
            >
        

              {/* Resume */}
              <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/80 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 font-medium transition-all duration-300 hover:-translate-y-0.5" asChild>
                <a href="/Gunti Ravikumar.pdf" download="Ravikumar_Gunti_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>

              {/* GitHub */}
              <Link href="https://github.com/Ravikumar-2016" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:-translate-y-0.5">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </Link>

              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/in/ravikumar-gunti-8b360a2a8/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:-translate-y-0.5">
                  <Linkedin className="mr-2 h-5 w-5 text-[#0A66C2] dark:text-[#0A66C2]" />
                  LinkedIn
                </Button>
              </Link>

              {/* Contact */}
              <Link href="#contact">
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:-translate-y-0.5">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Downward indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 dark:opacity-30">
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-1.5 bg-gray-400 rounded-full"
        />
      </div>
    </section>
  )
}
