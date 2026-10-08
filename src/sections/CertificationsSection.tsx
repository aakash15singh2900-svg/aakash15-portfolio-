import React from 'react';
import { certificationData } from '../data/portfolioData';
import {
  Award,
  Calendar,
  Building,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  FileCheck,
} from 'lucide-react';

interface CertificationsSectionProps {
  onOpenCertificate: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onOpenCertificate,
}) => {
  return (
    <section id="certifications" className="py-20 relative bg-slate-50/50 dark:bg-[#070b09]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-widest uppercase mb-1">
            07 // CREDENTIALS & WORKSHOPS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-3" />
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Continuous technical skill upgrades and specialized engineering workshops.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="max-w-3xl rounded-3xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/25 shadow-sm hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header / Issuer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    Executive Workshop
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {certificationData.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#121c16] text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/20 font-medium">
                  <Building className="w-3.5 h-3.5 text-emerald-500" />
                  {certificationData.issuer}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#121c16] text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/20 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                  {certificationData.issueDate}
                </span>
              </div>
            </div>

            {/* Note & Context */}
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {certificationData.verificationNote}
            </p>

            {/* Topics Covered */}
            <div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-3">
                Key Skills & Topics Mastered:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {certificationData.topics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-[#111e17] border border-slate-200/90 dark:border-emerald-500/15 text-xs text-slate-800 dark:text-slate-200 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 dark:border-emerald-500/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <FileCheck className="w-4 h-4 text-emerald-500" />
                <span>Certificate documentation available upon evaluation</span>
              </div>

              <button
                onClick={onOpenCertificate}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-700/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px]"
              >
                <Award className="w-4 h-4" />
                <span>View Certificate</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
