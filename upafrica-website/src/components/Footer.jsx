import React from 'react';
import { Github, Twitter, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-up-card border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-up-neon-blue to-up-neon-orange">
              UNIFRIX
            </span>
            <p className="mt-2 text-up-text-muted text-sm max-w-xs">
              The Financial Memory of a Continent. Uncovering the DNA of African Markets.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-up-text-muted hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-up-text-muted hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-up-text-muted hover:text-white transition-colors">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-up-text-muted text-sm">
          &copy; {new Date().getFullYear()} Unifrix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
