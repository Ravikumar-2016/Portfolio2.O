import Link from "next/link"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Ravikumar-2016", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ravikumar-gunti-8b360a2a8/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ravikumar_gunti__/", label: "Instagram" },
    { icon: Mail, href: "mailto:ravikumargunti837@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ravikumar Gunti
            </h3>
            <p className="text-gray-400 mt-2">Computer Science Student & Developer</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Ravikumar Gunti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
