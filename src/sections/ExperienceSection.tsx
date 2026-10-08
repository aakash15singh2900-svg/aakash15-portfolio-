import React from 'react';
import { experienceData } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  FolderGit2,
  Layers,
  Sparkles,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-50/50 dark:bg-[#070b09]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-widest uppercase mb-1">
            05 // PROFESSIONAL TRACK RECORD
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Client & Project Experience
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-3" />
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Delivering full-stack commercial web systems and business solutions for real-world client engagements.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/25 ml-4 sm:ml-6 md:ml-8 pl-6 sm:pl-8 md:pl-10 space-y-10">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-[#080d0a] shadow-md shadow-emerald-500/40 group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg space-y-5">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-1">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">
                        {exp.type}
                      </span>
                      <span className="text-slate-400 dark:text-slate-600">/</span>
                      <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1 font-semibold">
                        <Building2 className="w-3.5 h-3.5 text-emerald-500" />
                        {exp.client}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-[#121f18] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/20 w-fit shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-3">
                    Delivered Client Outcomes:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies used in engagement */}
                <div className="pt-3 border-t border-slate-100 dark:border-emerald-500/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold mr-1">
                    Delivered with:
                  </span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-[#132219] text-slate-800 dark:text-emerald-300 border border-slate-200 dark:border-emerald-500/20 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
