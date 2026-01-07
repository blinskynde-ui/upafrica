import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-up-dark/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-up-neon-blue to-up-neon-orange">
              UNIFRIX
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-up-text-muted hover:text-up-neon-blue transition-colors">Features</a>
            <a href="#problem" className="text-up-text-muted hover:text-up-neon-blue transition-colors">Problem</a>
            <a href="#roadmap" className="text-up-text-muted hover:text-up-neon-blue transition-colors">Roadmap</a>
          </div>
          <div>
            <button className="px-4 py-2 rounded-full border border-up-neon-blue text-up-neon-blue hover:bg-up-neon-blue/10 transition-colors text-sm font-semibold">
              View Prototype
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
