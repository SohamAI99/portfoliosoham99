import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

function ProjectCard({ title, description, image, github, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 max-w-2xl mx-auto"
    >
      <div className="aspect-video overflow-hidden max-h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-cyber text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-3">{description}</p>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 text-sm"
        >
          <Github className="w-4 h-4" />
          <span className="font-cyber">View on GitHub</span>
        </a>
      </div>
    </motion.div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Real-time Object Detection",
      description: "AI/ML Internship project implementing YOLO-5 for real-time object detection with high accuracy.",
      image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66",
      github: "https://github.com/SohamAI99"
    },
    {
      title: "AI-Powered Face Recognition",
      description: "Advanced facial recognition system using deep learning and OpenCV for secure authentication.",
      image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9",
      github: "https://github.com/SohamAI99"
    },
    {
      title: "Hostel Management System",
      description: "Complete hostel management solution built with Python, MySQL, and Tkinter for efficient administration.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
      github: "https://github.com/SohamAI99"
    },
    {
      title: "Stock Analysis System",
      description: "C++ based stock analysis tool developed for Korde Masale, featuring comprehensive market analysis.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      github: "https://github.com/SohamAI99"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 pt-24">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-cyber text-3xl md:text-4xl font-bold mb-12 text-center cyber-glitch"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;