"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { certificates } from "@/lib/data"
import { Award, Cloud, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// Map string icon names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  Award: Award,
  Cloud: Cloud,
  FileText: FileText,
}

export function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Certifications
          </h2>
          <p className="text-center text-gray-550 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-sm md:text-base">
            Professional certifications and recognitions that validate my technical skills and expertise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {certificates.map((cert, index) => {
              const IconComponent = iconMap[cert.iconName] || Award

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20 hover:shadow-md transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-gray-850 dark:text-gray-100">
                            {cert.title}
                          </CardTitle>
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardFooter className="pt-4 mt-auto">
                      <Link 
                        href={cert.pdfUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        View Certificate
                      </Link>
                    </CardFooter>
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
