import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, LineChart } from 'lucide-react';

const Solution = () => {
  return (
    <section id="features" className="py-24 bg-up-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            AI Intelligence <span className="text-up-neon-blue">Solution</span>
          </h2>
          <p className="text-xl text-up-text-muted max-w-2xl mx-auto">
            Data with Accountability. Our AI explains why trends happen, not just what happened.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-up-dark border border-white/5 shadow-lg"
          >
            <div className="w-12 h-12 rounded-lg bg-up-neon-blue/10 flex items-center justify-center mb-6">
              <Brain className="text-up-neon-blue" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">The "Why?" Engine</h3>
            <p className="text-up-text-muted">
              We link financial drops (e.g., dividends) to context (e.g., acquisitions) with citations.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-up-dark border border-white/5 shadow-lg"
          >
            <div className="w-12 h-12 rounded-lg bg-up-neon-orange/10 flex items-center justify-center mb-6">
              <LineChart className="text-up-neon-orange" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Unified Data Platform</h3>
            <p className="text-up-text-muted">
              Aggregates historical financial data from African stock exchanges, starting with NSE.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-up-dark border border-white/5 shadow-lg"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
              <Search className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Deep Search</h3>
            <p className="text-up-text-muted">
              Find specific data points across decades of reports instantly with semantic search.
            </p>
          </motion.div>
        </div>

        {/* Dashboard Mockup Visualization */}
        <div className="mt-20 relative rounded-xl border border-white/10 bg-black/40 p-4 shadow-2xl backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-up-neon-blue/5 to-transparent pointer-events-none rounded-xl" />

          <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="grid grid-cols-4 gap-4 h-64">
            <div className="col-span-1 border-r border-white/10 p-2 space-y-2">
              <div className="h-4 w-3/4 bg-white/10 rounded" />
              <div className="h-4 w-1/2 bg-white/10 rounded" />
              <div className="h-4 w-5/6 bg-white/10 rounded" />
            </div>
            <div className="col-span-3 p-2 relative">
               <div className="h-4 w-1/3 bg-white/10 rounded mb-4" />
               <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-between px-2">
                  {[40, 60, 45, 70, 30, 55, 65, 80].map((h, i) => (
                    <div key={i} className="w-8 bg-up-neon-blue/50 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
               </div>

               {/* AI Tooltip Overlay */}
               <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="absolute top-1/4 left-1/2 bg-up-card border border-white/20 p-4 rounded-lg shadow-xl max-w-xs"
               >
                 <div className="flex items-center gap-2 mb-2">
                   <Brain size={16} className="text-up-neon-blue" />
                   <span className="text-xs font-bold text-white">Analysis</span>
                 </div>
                 <p className="text-xs text-up-text-muted">
                   Sharp drop correlated with dividend payout announcement on June 12th.
                 </p>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
