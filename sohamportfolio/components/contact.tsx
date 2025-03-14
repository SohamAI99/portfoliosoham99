"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "sohamlamb31@gmail.com",
      link: "mailto:sohamlamb31@gmail.com",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "SohamAI99",
      link: "https://github.com/SohamAI99",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "Soham Lamb",
      link: "https://linkedin.com/in/soham-lamb",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-950/30 to-black/80 z-0"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span className="relative z-10">CONTACT</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let's connect! Reach out to me through any of these platforms.
          </p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
              variants={item}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-800 text-primary group-hover:animate-glow transition-all duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{contact.label}</h3>
                <p className="text-gray-300 group-hover:text-primary transition-colors duration-300">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Looking for collaboration or have a project in mind? Feel free to reach out!
          </p>
          <Button className="bg-primary text-black hover:bg-primary/80 neon-border" asChild>
            <a href="mailto:sohamlamb31@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

