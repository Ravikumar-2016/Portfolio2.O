"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C/C++", "HTML5", "CSS3", "SQL"],
    },
    {
      title: "Frontend Technologies",
      skills: ["React 19", "Next.js 15/16", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Radix UI", "Responsive Design"],
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSocket", "JWT Authentication", "Vercel Serverless"],
    },
    {
      title: "Databases & Storage",
      skills: ["MongoDB Atlas", "Firebase Firestore", "MySQL", "Redis", "Cloudinary"],
    },
    {
      title: "AI/ML & APIs",
      skills: ["TensorFlow", "AssemblyAI", "PlantNet API", "WeatherAPI", "OpenWeatherMap", "Google Maps API"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "Vercel", "AWS", "Postman", "ESLint"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-center">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
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
