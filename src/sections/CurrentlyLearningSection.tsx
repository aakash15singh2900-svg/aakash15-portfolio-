import React from 'react';
import { currentlyLearningSkills } from '../data/portfolioData';
import {
  Binary,
  Cpu,
  Network,
  ShieldAlert,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Data Structures & Algorithms': <Binary className="w-5 h-5" />,
  'System Design': <Cpu className="w-5 h-5" />,
  Networking: <Network className="w-5 h-5" />,
  Cybersecurity: <ShieldAlert className="w-5 h-5" />,
  'Generative AI': <Sparkles className="w-5 h-5" />,
};

export const CurrentlyLearningSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-widest uppercase mb-1">
            08 // GROWTH & MASTERY ROADMAP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Currently Learning
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-3" />
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Deepening computer science fundamentals and expanding technical horizons to engineer
            resilient, distributed systems.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentlyLearningSkills.map((item) => (
            <div
              key={item.name}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                    {iconMap[item.name] || <TrendingUp className="w-5 h-5" />}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-emerald-500/10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>Active Study Track</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Continuous Practice</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
