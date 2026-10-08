import React from 'react';
import { educationData } from '../data/portfolioData';
import {
  GraduationCap,
  Calendar,
  Building,
  Award,
  CheckCircle,
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-widest uppercase mb-1">
            06 // ACADEMIC FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-3" />
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Formal computer science and technology education credentials.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => {
            const isCurrent = edu.yearOrStatus === 'Currently Pursuing';

            return (
              <div
                key={edu.id}
                className={`p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1410] border shadow-sm transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
                  isCurrent
                    ? 'border-emerald-500/50 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 dark:border-emerald-500/20'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                        STAGE 0{4 - index}
                      </span>
                    </div>

                    {isCurrent ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Currently Pursuing
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#121c16] px-3 py-1 rounded-full font-medium">
                        {edu.yearOrStatus}
                      </span>
                    )}
                  </div>

                  {/* Degree & Institution */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 mt-1">
                      <Building className="w-4 h-4 shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  {/* Description / Specialization */}
                  {edu.details && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>

                {/* Score / Grade if provided */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-emerald-500/10 flex items-center justify-between text-xs font-mono">
                  {edu.score ? (
                    <div className="inline-flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      <Award className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Academic CGPA: {edu.score}</span>
                    </div>
                  ) : (
                    <div className="text-slate-500 dark:text-slate-400 font-medium">
                      Curriculum Completed
                    </div>
                  )}

                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
