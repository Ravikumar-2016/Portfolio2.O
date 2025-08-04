import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Projects - Ravikumar Gunti",
  description:
    "Explore all projects by Ravikumar Gunti including web applications, mobile apps, and innovative solutions.",
}

export default function ProjectsPage() {
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
            All Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive collection of my work spanning web applications, mobile development, and innovative
            solutions in agriculture technology and disaster management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
