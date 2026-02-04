"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable applications with React, Next.js, Node.js, and modern databases",
    },
    {
      icon: Lightbulb,
      title: "AI/ML Integration",
      description: "Implementing AI-powered features for agriculture, productivity, and safety solutions",
    },
    {
      icon: Users,
      title: "Real-World Impact",
      description: "Creating solutions for disaster management, agriculture, and team productivity",
    },
    {
      icon: Zap,
      title: "Continuous Innovation",
      description: "Always exploring new technologies and industry trends in cloud and AI",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I am a passionate Full Stack Developer and AI/ML enthusiast with a drive for innovation and continuous learning.
                Currently pursuing B.Tech in Computer Science and Engineering at IIITDM Jabalpur with 8.3 CGPA, I am focused on
                building scalable, impactful solutions that solve real-world problems.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My flagship projects include <strong>SAVIOUR</strong> (AI-powered disaster management with WebSocket alerts and TensorFlow predictions), 
                <strong> FarmEase</strong> (agricultural intelligence platform with PlantNet disease detection and 95%+ accuracy crop recommendations), and <strong>MeetTask AI</strong> 
                (meeting transcription with AssemblyAI speaker diarization). These projects demonstrate my expertise in full-stack 
                development, AI/ML integration, and building production-ready applications.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My technical expertise spans React 19, Next.js 15/16, TypeScript, Node.js, Firebase, MongoDB Atlas, 
                and various AI/ML technologies including TensorFlow and AssemblyAI. I actively work on projects that 
                integrate multiple APIs and deliver real-world impact through technology.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <highlight.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                      <h3 className="font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
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
