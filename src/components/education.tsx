"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "IIITDM Jabalpur",
      period: "2023 - 2027",
      status: "Current",
      description:
        "Currently pursuing Bachelor's in Technology with focus on software development, algorithms, and emerging technologies.",
      type: "current",
    },
    {
      degree: "Intermediate Education",
      institution: "Narayana Junior College",
      period: "2021 - 2023",
      status: "Completed",
      description: "Completed intermediate education with strong foundation in mathematics and sciences.",
      type: "completed",
    },
    {
      degree: "Secondary Education",
      institution: "MJPTBCWREIS",
      period: "2017 - 2021",
      status: "Completed",
      description: "Completed secondary education with excellent academic performance.",
      type: "completed",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <GraduationCap className="h-6 w-6 text-blue-600" />
                          <div>
                            <CardTitle className="text-xl">{edu.degree}</CardTitle>
                            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{edu.institution}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={edu.type === "current" ? "default" : "secondary"} className="mb-2">
                            {edu.status}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
