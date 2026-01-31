"use client"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, mobile applications, AI/ML, and
            innovative solutions for real-world problems.
          </p>

          {/* Featured Projects Section */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200">
                Featured Projects
              </h3>
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} featured />
                </motion.div>
              ))}
            </div>
          </div>

          {/* More Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Explore more projects on my GitHub profile
            </p>
            <Link href="https://github.com/Ravikumar-2016" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                View More on GitHub
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
