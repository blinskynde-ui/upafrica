import React from 'react';
import { motion } from 'framer-motion';
import { History, Layers, ShieldCheck } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-24 bg-up-blue relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-up-dark to-transparent opacity-50 z-0"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-up-white mb-4"
          >
            A Unified History
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-up-text max-w-2xl mx-auto"
          >
            UpAfrica is digitizing everything. From IPO to Delisting.
            We possess the data others ignored—the deep history of mergers, acquisitions, and insolvencies.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <History size={40} />,
              title: "Time Machine",
              desc: "Access the entire lifecycle of companies, not just the survivors."
            },
            {
              icon: <Layers size={40} />,
              title: "Digitized Archive",
              desc: "We convert analog chaos into structured, queryable digital assets."
            },
            {
              icon: <ShieldCheck size={40} />,
              title: "The Moat",
              desc: "Proprietary historical data that no other provider has bothered to save."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-up-dark p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-900/20"
            >
              <div className="text-blue-400 mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-up-white mb-4">{item.title}</h3>
              <p className="text-up-text leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
