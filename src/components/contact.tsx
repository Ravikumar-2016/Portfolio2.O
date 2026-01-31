"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ravikumargunti837@gmail.com",
      href: "mailto:ravikumargunti837@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Available on request",
      href: null,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Ravikumar-2016",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ravikumar-gunti-8b360a2a8/",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/ravikumar_gunti__/",
      color: "hover:text-pink-600",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about
                  technology. Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Connect on Social Media</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {socialLinks.map((social, index) => (
                        <Link
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <social.icon
                            className={`h-6 w-6 text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                          />
                          <span className="font-medium">{social.label}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link href="mailto:ravikumargunti837@gmail.com">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <Mail className="mr-2 h-5 w-5" />
                          Send Email
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
