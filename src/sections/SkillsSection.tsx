import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Check,
  Terminal,
  Search,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = skillCategories
    .filter((cat) => (activeTab === 'all' ? true : cat.categoryKey === activeTab))
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const matchedSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      return {
        ...cat,
        skills: matchedSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 dark:bg-[#070b09]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-widest uppercase mb-1">
              02 // TECHNICAL CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Technical Skills
            </h2>
            <div className="w-12 h-1 bg-emerald-500 rounded mt-3" />
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Verified competencies across full-stack engineering, authentication architectures,
              and database modeling.
            </p>
          </div>

          {/* Quick Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors w-full sm:w-48"
              />
            </div>

            {/* Category Filter Controls */}
            <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  activeTab === 'all'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.categoryKey}
                  onClick={() => setActiveTab(cat.categoryKey)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    activeTab === cat.categoryKey
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-emerald-500/20 text-slate-500 dark:text-slate-400">
            No technical skills matched "{searchQuery}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => (
              <div
                key={cat.categoryKey}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                        {iconMap[cat.iconName] || <Terminal className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {cat.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {cat.skills.length} competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Badges/Skill Items */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                          skill.highlight
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 font-semibold'
                            : 'bg-slate-100 dark:bg-[#121c16] text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800/80'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Subtle Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="uppercase tracking-wider">Engineering Rigor</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Hands-on Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
