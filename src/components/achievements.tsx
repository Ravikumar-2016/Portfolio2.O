"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { achievements } from "@/lib/data"
import { Award, Code2, Laptop, Github } from "lucide-react"
import { motion } from "framer-motion"

// Map string icon names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  Award: Award,
  Code: Code2,
  Laptop: Laptop,
  Github: Github,
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gray-50/50 dark:bg-gray-800/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Key Achievements
          </h2>
          <p className="text-center text-gray-550 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-sm md:text-base">
            Milestones demonstrating academic excellence, engineering contributions, and software capabilities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {achievements.map((ach, index) => {
              const IconComponent = iconMap[ach.iconName] || Award

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60 hover:shadow-md transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-850 dark:text-gray-100">
                          {ach.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 flex-grow">
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-450 leading-relaxed">
                        {ach.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
