import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-up-neon-blue/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-up-neon-orange/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-up-neon-blue/30 bg-up-neon-blue/10 text-up-neon-blue text-sm font-semibold tracking-wide">
            THE FINANCIAL MEMORY OF A CONTINENT
          </span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            The Unseen Goldmine of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-up-neon-blue to-up-neon-orange">
              African Market Data
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-up-text-muted mb-10">
            From the Nairobi Securities Exchange to the entire continent. We don't just show you the market today; we show you the market's DNA.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-lg bg-up-neon-blue text-up-dark font-bold hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2">
              Join the Waitlist <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/5 transition-colors font-semibold">
              View Prototype
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-up-text-muted rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-up-text-muted rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
