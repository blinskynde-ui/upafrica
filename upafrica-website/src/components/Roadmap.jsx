import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const steps = [
    {
      title: "NSE MVP",
      description: "Launch with comprehensive data from Nairobi Securities Exchange.",
      status: "Current",
      color: "border-up-neon-blue"
    },
    {
      title: "East Africa Expansion",
      description: "Integration with USE (Uganda) and DSE (Tanzania).",
      status: "Upcoming",
      color: "border-white/20"
    },
    {
      title: "Pan-Africa",
      description: "Coverage of major exchanges across the continent (JSE, NGX, EGX).",
      status: "Future",
      color: "border-white/20"
    },
    {
      title: "The 'Binance' of Data",
      description: "Complete fundamental data ecosystem for African markets.",
      status: "Vision",
      color: "border-up-neon-orange"
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-up-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">
          The <span className="text-white">Roadmap</span>
        </h2>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-up-neon-blue to-up-neon-orange opacity-30" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-5/12" />

                <div className="z-10 w-8 h-8 rounded-full bg-up-dark border-4 border-up-card shadow-lg flex items-center justify-center relative">
                   <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-up-neon-blue animate-pulse' : 'bg-white/20'}`} />
                </div>

                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`p-6 rounded-xl border bg-up-card/50 hover:bg-up-card transition-colors ${step.color}`}>
                    <div className="text-sm font-mono text-up-text-muted mb-2 uppercase tracking-wider">{step.status}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-up-text-muted">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
