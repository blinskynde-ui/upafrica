import React from 'react';
import { motion } from 'framer-motion';
import { Database, AlertTriangle } from 'lucide-react';

const Graveyard = () => {
  return (
    <section id="problem" className="py-24 bg-up-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              The Graveyard <span className="text-up-neon-orange">Problem</span>
            </h2>
            <p className="text-lg text-up-text-muted mb-6">
              Investors lose money because they only see active companies. This is called <strong className="text-white">Survivorship Bias</strong>.
            </p>
            <p className="text-lg text-up-text-muted mb-8">
              We bring the delisted giants (e.g., Mumias, Uchumi) back to life for analysis. Understanding why they failed is just as important as knowing who is succeeding.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-up-card border border-white/5">
                <AlertTriangle className="text-up-neon-orange flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Fragmented Data</h4>
                  <p className="text-sm text-up-text-muted">Historical data is scattered across PDFs, old news archives, and broken links.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-up-card border border-white/5">
                <Database className="text-up-neon-blue flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Missing Context</h4>
                  <p className="text-sm text-up-text-muted">Numbers without stories are dangerous. We link financial drops to real-world events.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Visual representation of a 'Black Hole' of data */}
            <div className="relative aspect-square rounded-full bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center shadow-2xl shadow-up-neon-orange/10">
              <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-white/5 animate-reverse-spin" />

              <div className="text-center p-8 z-10">
                <span className="text-6xl font-bold text-white/10">DATA</span>
                <div className="mt-2 text-up-neon-orange font-mono">DELISTED / SUSPENDED</div>
              </div>

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-up-text-muted rounded-full opacity-50"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Graveyard;
