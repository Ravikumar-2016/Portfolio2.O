"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/data"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(99,102,241,0.03),transparent_40%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Work Experience
          </h2>
          <p className="text-center text-gray-550 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-sm md:text-base">
            Professional development roles and internship projects.
          </p>

          <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline node */}
                <div className="absolute -left-[13px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm ring-4 ring-white dark:ring-gray-950">
                  <Briefcase className="h-3 w-3" />
                </div>

                <Card className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-150">
                          {exp.role}
                        </CardTitle>
                        <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-sm text-gray-500 dark:text-gray-400">
                        <Badge variant="secondary" className="w-fit bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 hover:dark:bg-blue-900/40 px-2.5 py-1">
                          <Calendar className="mr-1.5 h-3.5 w-3.5 inline" />
                          {exp.period}
                        </Badge>
                        <span className="hidden sm:inline text-gray-300 dark:text-gray-700">|</span>
                        <span className="flex items-center">
                          <MapPin className="mr-1 h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3.5">
                      {exp.points.map((point, ptIndex) => (
                        <li key={ptIndex} className="flex items-start">
                          <span className="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                          <span className="text-gray-650 dark:text-gray-350 text-sm md:text-base leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
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
