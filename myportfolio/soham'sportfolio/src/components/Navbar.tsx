import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-blue-500/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="font-cyber text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Soham.dev
            </span>
          </NavLink>
          <div className="hidden md:flex space-x-8">
            {[
              ['Home', '/'],
              ['Skills', '/skills'],
              ['Projects', '/projects'],
            ].map(([name, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `font-cyber text-sm uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-blue-500'
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;