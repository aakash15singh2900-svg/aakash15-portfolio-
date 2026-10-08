import React, { useEffect } from 'react';
import { Project } from '../types';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const copyDetails = () => {
    const text = `${project.name} (${project.category})\n${project.description}\nTech: ${project.technologies.join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl my-6 bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/25 rounded-3xl shadow-2xl overflow-hidden transition-all text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner */}
        <div className="relative px-6 py-6 sm:px-8 border-b border-slate-200 dark:border-emerald-500/20 bg-slate-50/90 dark:bg-[#080d0a]/90">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-2">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold tracking-wider">
                  PROJECT {project.number}
                </span>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {project.category}
                </span>
                {project.status && (
                  <>
                    <span className="text-slate-400 dark:text-slate-600">/</span>
                    <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-md">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Status: {project.status}
                    </span>
                  </>
                )}
              </div>
              <h2
                id="modal-project-title"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white"
              >
                {project.name}
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-emerald-950/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="px-6 py-6 sm:px-8 sm:py-8 space-y-7 max-h-[68vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> System Architecture & Overview
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {project.overviewDetailed}
            </p>
          </div>

          {/* Problem & Goal */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/80 dark:bg-[#121c16]/80 border border-slate-200/90 dark:border-emerald-500/15">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1">
              Objective & Business Need
            </h4>
            <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
              {project.problemGoal}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-100 dark:bg-[#132219] text-slate-800 dark:text-emerald-300 border border-slate-200 dark:border-emerald-500/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Concepts */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Architecture Concepts
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.architectureConcepts.map((concept, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-[#0f1a14] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/15"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>

          {/* Authentic Code Status Note */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-700 dark:text-slate-300">
            <p className="font-bold text-emerald-800 dark:text-emerald-400 mb-1">
              Repository Access & Demonstration Note
            </p>
            <p className="leading-relaxed">
              Source code repositories and backend instances for this project are maintained under version control.
              Reach out directly to Aakash Singh for code walkthroughs, private repository invites, or technical reviews.
            </p>
          </div>
        </div>

        {/* Modal Footer / Action CTA */}
        <div className="px-6 py-4 sm:px-8 border-t border-slate-200 dark:border-emerald-500/20 bg-slate-50/90 dark:bg-[#080d0a]/90 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={copyDetails}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-emerald-500/30 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/30 transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied Specs' : 'Copy Specs'}
          </button>

          <div className="flex flex-wrap items-center gap-2.5">
            {project.status === 'In Development' ? (
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-medium rounded-xl bg-slate-200 dark:bg-[#16221c] text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-emerald-500/20 select-none min-h-[44px]">
                <Github className="w-4 h-4" />
                GitHub — Coming Soon
              </span>
            ) : (
              <a
                href={project.githubUrl || 'https://github.com/aakash15singh2900-svg'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium rounded-xl border border-slate-300 dark:border-emerald-500/30 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{project.githubUrl ? 'View Repository' : 'GitHub Profile'}</span>
              </a>
            )}

            {project.hasFrontend && (
              project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-700/20 transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-mono rounded-xl bg-slate-200 dark:bg-[#16221c] text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-emerald-500/20 select-none min-h-[44px]">
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span>Live Demo — Coming Soon</span>
                </span>
              )
            )}

            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors min-h-[44px]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
