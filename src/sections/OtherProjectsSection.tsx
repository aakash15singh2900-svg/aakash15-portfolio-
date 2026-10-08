import React, { useState } from 'react';
import { Project } from '../types';
import {
  Github,
  Eye,
  KeyRound,
  Train,
  CheckCircle2,
  AlertCircle,
  Terminal,
  ShieldCheck,
  Lock,
  Database,
  ArrowRight,
} from 'lucide-react';

interface OtherProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const OtherProjectsSection: React.FC<OtherProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sub-heading */}
        <div className="mb-8">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-widest uppercase mb-1">
            04 // SPECIALIZED ARCHITECTURES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Backend & Systems Engineering
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Production-oriented authentication microservices, security architectures, and core Python systems.
          </p>
        </div>

        {/* Grid for Projects 02 & 03 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => {
            const isBackend = proj.category === 'Backend / Authentication';
            const isInDev = proj.status === 'In Development';

            return (
              <div
                key={proj.id}
                className="rounded-3xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Top Bar / Metadata */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {isBackend ? <KeyRound className="w-5 h-5" /> : <Train className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                          PROJECT {proj.number}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                          {proj.category}
                        </div>
                      </div>
                    </div>

                    {/* Status indicator */}
                    {isInDev ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Status: In Development
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                        <Terminal className="w-3.5 h-3.5" />
                        Backend Microservice
                      </span>
                    )}
                  </div>

                  {/* Project Name & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {proj.name}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                      {proj.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Visual Architecture Matrix for Recruiters */}
                  {isBackend ? (
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#070d0a] border border-slate-200/90 dark:border-emerald-500/20 space-y-3 text-xs font-mono">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-b border-slate-200/60 dark:border-emerald-500/15 pb-2">
                        <span className="uppercase tracking-wider font-semibold flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                          <Lock className="w-3.5 h-3.5" /> Dual Token JWT Lifecycle
                        </span>
                        <span className="text-[10px] text-slate-500">Stateless + Secure</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="p-2 rounded-xl bg-white dark:bg-[#101b15] border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-slate-200">
                          <div className="font-bold text-emerald-600 dark:text-emerald-400">6-Digit OTP</div>
                          <div className="text-[9px] text-slate-500 mt-0.5">Email Verified</div>
                        </div>
                        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300">
                          <div className="font-bold">Access Token</div>
                          <div className="text-[9px] text-emerald-600 dark:text-emerald-400 mt-0.5">15m Expiry</div>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-[#101b15] border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-slate-200">
                          <div className="font-bold text-emerald-600 dark:text-emerald-400">Refresh Token</div>
                          <div className="text-[9px] text-slate-500 mt-0.5">HttpOnly Cookie</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#070d0a] border border-slate-200/90 dark:border-emerald-500/20 space-y-3 text-xs font-mono">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-b border-slate-200/60 dark:border-emerald-500/15 pb-2">
                        <span className="uppercase tracking-wider font-semibold flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                          <Database className="w-3.5 h-3.5" /> Python Systems Architecture
                        </span>
                        <span className="text-[10px] text-amber-600">Active Build</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="p-2 rounded-xl bg-white dark:bg-[#101b15] border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-slate-200">
                          <div className="font-bold text-amber-600 dark:text-amber-400">OOP Engine</div>
                          <div className="text-[9px] text-slate-500 mt-0.5">Inheritance & Models</div>
                        </div>
                        <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300">
                          <div className="font-bold">PNR Logic</div>
                          <div className="text-[9px] text-amber-600 dark:text-amber-400 mt-0.5">Deterministic</div>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-[#101b15] border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-slate-200">
                          <div className="font-bold text-amber-600 dark:text-amber-400">File Storage</div>
                          <div className="text-[9px] text-slate-500 mt-0.5">Persistence Records</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Highlights of Key Features */}
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-2">
                      Key Highlights:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                      {proj.keyFeatures.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-[#132219] text-slate-800 dark:text-emerald-300 border border-slate-200 dark:border-emerald-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="px-6 py-4 sm:px-8 bg-slate-50/80 dark:bg-[#09100c] border-t border-slate-200 dark:border-emerald-500/15 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(proj)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Specifications</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {isInDev ? (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono rounded-xl bg-slate-200/80 dark:bg-[#14201a] text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-emerald-500/20 select-none">
                        <Github className="w-3.5 h-3.5" />
                        GitHub — Coming Soon
                      </span>
                    ) : (
                      <a
                        href={proj.githubUrl || 'https://github.com/aakash15singh2900-svg'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono rounded-xl border border-slate-300 dark:border-emerald-500/25 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px]"
                      >
                        <Github className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
