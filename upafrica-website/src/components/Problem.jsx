import React from 'react';
import { motion } from 'framer-motion';
import { FileWarning, Database, SearchX } from 'lucide-react';

const Problem = () => {
  return (
    <section className="py-24 bg-up-dark relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-up-white mb-6">
              The Graveyard of Data
            </h2>
            <p className="text-lg text-up-text mb-6">
              Currently, African financial data is fragmented, lost in old PDFs, or deleted when companies delist.
              Investors suffer from <span className="text-up-neon">"Survivorship Bias."</span>
            </p>
            <p className="text-lg text-up-text">
              They only see the companies that made it, missing the critical lessons from those that didn't.
              You cannot invest in Africa's future without understanding its full past.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <FileWarning size={32} />,
                title: "Fragmented PDFs",
                desc: "Critical data locked in unsearchable formats."
              },
              {
                icon: <SearchX size={32} />,
                title: "Delisted = Deleted",
                desc: "Historical records vanish when companies leave the exchange."
              },
              {
                icon: <Database size={32} />,
                title: "Incomplete Picture",
                desc: "Investors operate with only 60% of the market reality."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-up-light-blue p-6 rounded-lg border border-gray-800 hover:border-up-neon transition-colors group"
              >
                <div className="flex items-start">
                  <div className="bg-up-dark p-3 rounded text-up-neon group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-up-white mb-2">{item.title}</h3>
                    <p className="text-up-text text-sm">{item.desc}</p>
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

export default Problem;
