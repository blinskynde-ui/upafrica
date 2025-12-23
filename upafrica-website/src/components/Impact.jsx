import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, LineChart } from 'lucide-react';

const Impact = () => {
  return (
    <section className="py-24 bg-up-dark relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-up-neon blur-[80px] opacity-20 rounded-full"></div>
              <div className="relative bg-up-light-blue border border-gray-700 rounded-lg p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                   <div className="text-up-white font-bold text-xl">Market Trust Index</div>
                   <div className="text-up-neon flex items-center gap-2"><TrendingUp size={20} /> +124%</div>
                </div>
                {/* Abstract Chart Viz */}
                <div className="flex items-end space-x-2 h-40">
                   {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100].map((h, i) => (
                     <div
                        key={i}
                        className="w-full bg-gradient-to-t from-blue-900 to-up-neon opacity-80 rounded-t"
                        style={{ height: `${h}%` }}
                     />
                   ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-up-white mb-6">
              Smarter Capital
            </h2>
            <p className="text-lg text-up-text mb-6">
              When data is transparent and complete, trust increases. When trust increases, investment flows.
            </p>
            <p className="text-lg text-up-text mb-8">
              We are helping to build a <span className="text-up-neon font-bold">$10 Billion</span> value ecosystem by giving investors the clarity they need to deploy capital confidently.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center text-up-text">
                <Globe className="mr-3 text-blue-500" /> Pan-African Connectivity
              </li>
              <li className="flex items-center text-up-text">
                <LineChart className="mr-3 text-blue-500" /> Data-Driven Decisions
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Impact;
