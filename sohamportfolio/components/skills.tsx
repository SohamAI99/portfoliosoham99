"use client"

import { motion } from "framer-motion"
import { Code, FileCode, Github, Cpu } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-10 w-10 text-primary" />,
      skills: ["C", "C++", "Python", "SQL"],
    },
    {
      title: "Web Development",
      icon: <FileCode className="h-10 w-10 text-secondary" />,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "AI & ML",
      icon: <Cpu className="h-10 w-10 text-accent" />,
      skills: ["Basic Machine Learning", "YOLO-5"],
    },
    {
      title: "Tools",
      icon: <Github className="h-10 w-10 text-primary" />,
      skills: ["GitHub", "Figma"],
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
            <span className="relative z-10">SKILLS</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical toolkit that I've developed through education, projects, and continuous learning.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
              variants={item}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-800 group-hover:bg-gray-800/80 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

