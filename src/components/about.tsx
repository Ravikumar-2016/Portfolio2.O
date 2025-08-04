"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in React, Node.js, and modern web technologies",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Building solutions for agriculture and disaster management",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Active participant in hackathons and collaborative projects",
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description: "Always exploring new technologies and industry trends",
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
                I am a passionate computer science student with a drive for innovation and continuous learning.
                Currently pursuing B.Tech in Computer Science and Engineering at IIITDM Jabalpur, I am passionate about
                software development and constantly exploring new technologies to build scalable and impactful
                solutions.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My technical expertise spans across multiple programming languages including Python, Java, C, C++, and
                JavaScript. I have hands-on experience with modern web frameworks like React, Node.js, and Express,
                along with database technologies such as MySQL and MongoDB.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in learning by doing, which is why I actively participate in hackathons and collaborative
                projects. My growing interests in cloud computing and AI-driven applications drive me to stay updated
                with the latest industry trends.
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
