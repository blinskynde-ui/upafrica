import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Abstract Viz - Placeholder for 3D/Canvas */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-up-neon rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="z-10 text-center px-4 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-up-neon font-mono mb-4 tracking-widest uppercase text-sm"
        >
          The Financial Memory of a Continent
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-up-white leading-tight mb-8"
        >
          The Unseen Goldmine of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-up-neon to-blue-500">
            African Market Data
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-up-text max-w-2xl mx-auto mb-10"
        >
          We are building the single source of truth for all African securities exchanges.
          Unlock the value of the past to invest in the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-transparent border border-up-neon text-up-neon hover:bg-up-neon hover:text-up-dark px-8 py-3 rounded text-lg font-semibold transition-colors duration-300">
            Explore the Vision
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-up-text rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-up-neon rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
