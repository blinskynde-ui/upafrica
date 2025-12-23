import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 bg-up-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[120px] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-up-white mb-6"
        >
          See the Full Picture
        </motion.h2>
        <p className="text-xl text-up-text mb-12 max-w-2xl mx-auto">
          We are currently in private beta. Join our waitlist to get early access to the financial memory of a continent.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 bg-up-light-blue border border-gray-700 text-up-white py-4 pl-12 pr-4 rounded focus:outline-none focus:border-up-neon transition-colors"
            />
          </div>
          <button className="bg-up-neon text-up-dark font-bold py-4 px-8 rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
            Request Access <ArrowRight size={20} />
          </button>
        </motion.div>

        <div className="mt-12">
            <button className="text-up-text hover:text-up-neon underline underline-offset-4 transition-colors">
                or Join the Discord
            </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
