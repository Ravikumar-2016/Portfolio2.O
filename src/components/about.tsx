"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain, Wrench, GraduationCap, Award, Compass } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const stats = [
    {
      icon: GraduationCap,
      label: "B.Tech CSE (Final Year)",
      value: "IIITDM Jabalpur",
      desc: "Graduating Class of 2027",
    },
    {
      icon: Award,
      label: "Academic Profile",
      value: "8.4 / 10.0 CGPA",
      desc: "Consistent academic record",
    },
    {
      icon: Compass,
      label: "JEE Mains Exam",
      value: "98.2 Percentile",
      desc: "Top 1.8% of 1.2M candidates",
    },
  ]

  const pillars = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Developing responsive client interfaces and robust server components using React, Next.js, Node.js, and Express.",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Integrating modern AI capabilities, such as computer vision models and speech-to-text APIs, to automate workflows.",
    },
    {
      icon: Wrench,
      title: "Software Engineering",
      description: "Applying software design methodologies, strict type safety with TypeScript, and structured version control.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Strengthening core computer science fundamentals, exploring new frameworks, and refining problem-solving practices.",
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
            About Me
          </h2>

          <div className="grid lg:grid-cols-1 gap-10 items-center mb-16">
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              <p>
                I am a final-year Computer Science and Engineering student at the <strong>Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Jabalpur</strong>. 
                My academic journey is anchored by a strong foundation in core computer science disciplines, coupled with a deep interest in software engineering and web technologies. 
                I maintain a <strong>CGPA of 8.4/10</strong> and secured a <strong>98.2 percentile in JEE Mains</strong>.
              </p>
              <p>
                My focus centers on constructing modern full-stack web applications. In my development work, I aim to bridge frontend design with efficient backend architectures, leveraging frameworks like React, Next.js, and Node.js. 
                Additionally, I explore artificial intelligence integrations, incorporating speech-to-text models and computer vision workflows into my projects.
              </p>
              <p>
                I approach software development with a mindset of problem-solving and structured design. Through my coursework and projects, I continuously refine my understanding of algorithms, databases, and network architectures, aiming to write clean, maintainable, and well-documented code.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{stat.value}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pillars of Competence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-850 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-150 mb-2">{pillar.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{pillar.description}</p>
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
