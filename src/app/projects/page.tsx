import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"
import { ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Projects - Ravikumar Gunti",
  description:
    "Explore all projects by Ravikumar Gunti including web applications, mobile apps, and innovative solutions.",
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive collection of my flagship projects spanning web applications, mobile development, AI/ML solutions, 
            and innovative projects in agriculture technology and disaster management.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} featured />
            ))}
          </div>
        </div>

        {/* More Projects Link */}
        <div className="text-center py-8 border-t">
          <p className="text-muted-foreground mb-4">
            Explore more projects and contributions on my GitHub profile
          </p>
          <Link href="https://github.com/Ravikumar-2016" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
              Visit GitHub Profile
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
