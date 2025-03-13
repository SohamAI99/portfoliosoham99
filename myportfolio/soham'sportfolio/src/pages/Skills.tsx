import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code } from 'lucide-react';

function SkillCard({ title, skills, icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
    >
      <div className="flex items-center space-x-4 mb-4">
        {icon}
        <h3 className="font-cyber text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: delay + 0.2 * index, duration: 0.8 }}
            className="relative pt-1"
          >
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="font-cyber text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-500 bg-blue-500/10">
                  {skill}
                </span>
              </div>
            </div>
            <div className="flex h-2 mb-4 overflow-hidden rounded bg-gray-700">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.random() * 30 + 70}%` }}
                transition={{ delay: delay + 0.2 * index, duration: 1 }}
                className="flex flex-col justify-center rounded bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section className="min-h-screen py-20 px-4 pt-24">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-cyber text-3xl md:text-4xl font-bold mb-12 text-center cyber-glitch"
        >
          Technical Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            title="Programming"
            skills={['C', 'C++', 'Python', 'MySQL']}
            icon={<Code className="w-8 h-8 text-blue-500" />}
            delay={0.2}
          />
          <SkillCard
            title="Web Development"
            skills={['HTML', 'CSS', 'Figma']}
            icon={<Code className="w-8 h-8 text-purple-500" />}
            delay={0.4}
          />
          <SkillCard
            title="AI/ML"
            skills={['TensorFlow', 'OpenCV', 'YOLO-5']}
            icon={<Brain className="w-8 h-8 text-green-500" />}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;