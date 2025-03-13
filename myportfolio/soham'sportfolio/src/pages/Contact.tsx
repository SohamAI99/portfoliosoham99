import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

function Contact() {
  return (
    <section className="min-h-screen py-20 px-4 pt-24">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-cyber text-3xl md:text-4xl font-bold mb-12 text-center cyber-glitch"
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
                <span className="font-cyber">sohamlamb31@gmail.com</span>
              </a>
              <a href="tel:+919829482038" className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors">
                <Phone className="w-6 h-6" />
                <span className="font-cyber">+91 98294 82038</span>
              </a>
              <a href="https://github.com/SohamAI99" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors">
                <Github className="w-6 h-6" />
                <span className="font-cyber">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/soham-lamb-baa32b286/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="font-cyber">LinkedIn</span>
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
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 font-cyber"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 font-cyber"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 font-cyber"
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
  );
}

export default Contact;