"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "AI Image Recognition",
      description: "A machine learning project using YOLO-5 for object detection in images.",
      image: "/placeholder.svg?height=300&width=500",
      techStack: ["Python", "PyTorch", "YOLO-5"],
      github: "https://github.com/SohamAI99",
    },
    {
      title: "Database Management System",
      description: "A SQL-based database management system for student records.",
      image: "/placeholder.svg?height=300&width=500",
      techStack: ["SQL", "MySQL", "PHP"],
      github: "https://github.com/SohamAI99",
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
            <span className="relative z-10">PROJECTS</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">A showcase of my technical projects and applications.</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900/60 backdrop-blur-sm border border-gray-800 h-full transition-all duration-500 hover:border-secondary/50">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-secondary text-secondary hover:bg-secondary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>

                {hoveredIndex === index && (
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-1 rounded-full bg-gray-900/80 backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4 text-secondary" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

