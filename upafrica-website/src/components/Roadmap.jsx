import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const steps = [
    { title: "Kenya (NSE)", subtitle: "MVP Launched", status: "active" },
    { title: "East Africa", subtitle: "Uganda (USE) & Tanzania (DSE)", status: "pending" },
    { title: "Pan-Africa", subtitle: "Connecting the Continent", status: "pending" },
  ];

  return (
    <section className="py-24 bg-up-blue">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-up-white mb-16">The Roadmap</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-center justify-center"
              >
                {/* Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${step.status === 'active' ? 'bg-up-neon border-up-neon shadow-[0_0_15px_rgba(100,255,218,0.7)]' : 'bg-up-dark border-gray-600'}`}></div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto text-right pr-10' : 'ml-auto text-left pl-10'}`}>
                  <h3 className={`text-2xl font-bold ${step.status === 'active' ? 'text-up-neon' : 'text-up-white'}`}>
                    {step.title}
                  </h3>
                  <p className="text-up-text mt-2">{step.subtitle}</p>
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
