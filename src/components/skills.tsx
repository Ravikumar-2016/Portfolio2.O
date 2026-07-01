"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code2, Layout, Server, Database, BrainCircuit, Wrench, Cpu } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "C", "C++","OOPS IN JAVA", "SQL", "HTML", "CSS"],
      color: "text-red-500 bg-red-500/10 dark:bg-red-500/20",
    },
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      color: "text-blue-500 bg-blue-500/10 dark:bg-blue-500/20",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express", "REST APIs","Django REST Framework"],
      color: "text-green-500 bg-green-500/10 dark:bg-green-500/20",
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["MongoDB", "Firebase", "MYSQL"],
      color: "text-amber-500 bg-amber-500/10 dark:bg-amber-500/20",
    },
    {
      title: "AI / ML Integration",
      icon: BrainCircuit,
      skills: [ "OpenCV", "AssemblyAI", "PlantNet API"],
      color: "text-purple-500 bg-purple-500/10 dark:bg-purple-500/20",
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Vercel", "Cloudinary"],
      color: "text-pink-500 bg-pink-500/10 dark:bg-pink-500/20",
    },
    {
      title: "Core Computer Science",
      icon: Cpu,
      skills: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
      color: "text-indigo-500 bg-indigo-500/10 dark:bg-indigo-500/20",
    },
  ]

  return (
    <section id="skills" className="py-24 bg-gray-50/50 dark:bg-gray-800/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Technical Competencies
          </h2>
          <p className="text-center text-gray-550 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-sm md:text-base">
            Structured skill categories showcasing my development profile, tool ecosystem, and foundational coursework.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader className="pb-3 flex flex-row items-center gap-3 space-y-0">
                    <div className={`p-2.5 rounded-lg ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-150">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-250 py-1.5 px-3 border border-transparent dark:border-gray-800 rounded-md transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
