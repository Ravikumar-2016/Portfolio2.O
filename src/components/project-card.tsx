import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/data"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col">
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {project.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold line-clamp-1">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow">
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs px-2 py-1">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs px-2 py-1">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          <Link href={`/projects/${project.slug}`} className="flex-1">
            <Button variant="default" size="sm" className="w-full">
              <Eye className="mr-1 h-3 w-3" />
              Details
            </Button>
          </Link>
          {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <Github className="h-3 w-3" />
              </Button>
            </Link>
          )}
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <ExternalLink className="h-3 w-3" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
