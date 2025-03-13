import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Brain, Github, Linkedin, Mail, Phone } from 'lucide-react';

function Home() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen relative flex items-center justify-center px-4 pt-16"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900" />
        
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="container mx-auto max-w-4xl relative z-10 text-center"
        >
          <Brain className="w-20 h-20 mx-auto mb-6 text-blue-500" />
          <motion.h1 
            initial={{ letterSpacing: '0.1em' }}
            animate={{ letterSpacing: '0.25em' }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            SOHAM LAMB
          </motion.h1>
          <div className="h-12 mb-6">
            <TypeAnimation
              sequence={[
                'Aspiring AI/ML Engineer',
                2000,
                'Python Developer',
                2000,
                'Computer Vision Enthusiast',
                2000,
              ]}
              wrapper="h2"
              className="font-cyber text-xl md:text-2xl text-blue-400"
              repeat={Infinity}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Passionate about artificial intelligence and machine learning, specializing in computer vision
            and real-time object detection. Building the future through code and innovation.
          </motion.p>
        </motion.div>
      </motion.section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cyber text-3xl font-bold mb-12 text-center"
          >
            Get in Touch
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-cyber text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:sohamlamb31@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors">
                  <Mail className="w-6 h-6" />
                  <span>sohamlamb31@gmail.com</span>
                </a>
                <a href="tel:+919829482038" className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors">
                  <Phone className="w-6 h-6" />
                  <span>+91 98294 82038</span>
                </a>
                <a href="https://github.com/SohamAI99" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors">
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/soham-lamb-baa32b286/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-cyber"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;