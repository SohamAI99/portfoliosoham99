import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Home = () => (
  <section className="p-8 text-gray-300 text-center">
    <motion.h2 className="text-5xl font-extrabold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Soham Lamb</motion.h2>
    <motion.p className="text-2xl text-gray-400" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>Aspiring AI/ML Engineer</motion.p>
    <motion.p className="mt-4 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>Passionate about AI and Machine Learning, I specialize in building intelligent systems. With expertise in C, C++, Python, MySQL, and web technologies, I love working on real-world AI solutions. Constantly learning, I aim to push boundaries in AI-driven applications.</motion.p>
    <div className="mt-6 flex justify-center space-x-6 text-gray-400">
      <a href="mailto:sohamlamb31@gmail.com" className="hover:text-white"><FaEnvelope size={24} /></a>
      <a href="https://github.com/SohamAI99" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub size={24} /></a>
      <a href="https://www.linkedin.com/in/soham-lamb-baa32b286/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin size={24} /></a>
      <a href="tel:09829482038" className="hover:text-white"><FaPhone size={24} /></a>
    </div>
  </section>
);

const Skills = () => (
  <section className="p-8 text-gray-300">
    <h2 className="text-3xl font-semibold border-b-2 border-gray-500 pb-1 mb-4">Skills</h2>
    <div className="flex flex-wrap gap-4 justify-center">
      {["C", "C++", "MySQL", "Python", "HTML", "CSS", "Figma"].map((skill, index) => (
        <motion.div key={index} className="px-6 py-3 bg-gray-700 rounded-lg flex flex-col items-center shadow-lg" whileHover={{ scale: 1.1 }}>
          <img src={`/images/${skill.toLowerCase()}.png`} alt={skill} className="w-16 h-16 mb-2" />
          {skill}
        </motion.div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section className="p-8 text-gray-300">
    <h2 className="text-3xl font-semibold border-b-2 border-gray-500 pb-1 mb-4">Projects</h2>
    <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
      <h3 className="text-xl font-semibold">Real-Time Object Detection</h3>
      <img src="/images/object-detection.png" alt="Real-Time Object Detection" className="w-full h-auto my-4 rounded-lg shadow-md" />
      <p>An AI-based system utilizing YOLO-5 for detecting objects in real-time.</p>
      <a href="https://github.com/SohamAI99" className="text-blue-400 hover:underline mt-2 inline-block">GitHub Link</a>
    </motion.div>
  </section>
);

const Portfolio = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans p-8">
        <nav className="flex justify-center space-x-8 text-gray-300 mb-8 text-lg">
          <Link to="/skills" className="hover:text-white">Skills</Link>
          <Link to="/projects" className="hover:text-white">Projects</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>   
      </div>
    </Router>
  );
};

export default Portfolio;
