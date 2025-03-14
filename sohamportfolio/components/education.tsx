"use client"

import { motion } from "framer-motion"
import { GraduationCap, School, BookOpen } from "lucide-react"

export function Education() {
  const educationData = [
    {
      institution: "Sanjay Ghodawat College, Kolhapur",
      degree: "B.Tech in Computer Science & Engineering",
      period: "Current",
      icon: <GraduationCap className="h-6 w-6 text-accent" />,
      description: "Currently pursuing my bachelor's degree in Computer Science & Engineering.",
    },
    {
      institution: "Vivekanand College, Kolhapur",
      degree: "12th Standard",
      period: "Scored 63.50%",
      icon: <BookOpen className="h-6 w-6 text-secondary" />,
      description: "Completed higher secondary education with a focus on science and mathematics.",
    },
    {
      institution: "New Model English School, Kolhapur",
      degree: "10th Standard",
      period: "Scored 80%",
      icon: <School className="h-6 w-6 text-primary" />,
      description: "Completed secondary education with excellent academic performance.",
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
            <span className="relative z-10">EDUCATION</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">My academic journey and educational background.</p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((item, index) => (
            <motion.div key={index} className="relative pl-8 pb-12 last:pb-0" variants={item}>
              {/* Timeline line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-primary"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gray-900 border-2 border-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center mb-2">
                  {item.icon}
                  <h3 className="text-xl font-semibold ml-2">{item.institution}</h3>
                </div>
                <div className="mb-2">
                  <p className="text-accent">{item.degree}</p>
                  <p className="text-sm text-gray-400">{item.period}</p>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

