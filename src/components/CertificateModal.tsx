import React, { useEffect } from 'react';
import { CertificationItem } from '../types';
import { X, Award, CheckCircle, Calendar, Building, Sparkles } from 'lucide-react';

interface CertificateModalProps {
  certification: CertificationItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certification,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certification) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cert-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden transition-all text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Frame Header */}
        <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-emerald-500/20 bg-slate-50/90 dark:bg-[#080d0a]/90 flex items-start justify-between">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold tracking-wider uppercase">
                Official Credential Verification
              </div>
              <h2
                id="modal-cert-title"
                className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white"
              >
                {certification.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Document Visual Mock */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-dashed border-emerald-500/30 dark:border-emerald-500/30 bg-slate-50 dark:bg-[#080f0b] text-center space-y-4 relative overflow-hidden">
            <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/25">
              Verified Workshop
            </div>
            <Sparkles className="w-8 h-8 text-emerald-500 mx-auto" />
            <div className="space-y-1">
              <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Certificate of Completion
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Awarded to <span className="font-bold text-emerald-700 dark:text-emerald-400">Aakash Singh</span> for successfully completing
              </p>
              <div className="text-base font-extrabold text-slate-900 dark:text-white pt-1">
                {certification.title}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs font-mono text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-emerald-500/20">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-emerald-500" />
                Issuer: <strong className="text-slate-800 dark:text-slate-200">{certification.issuer}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                Date: <strong className="text-slate-800 dark:text-slate-200">{certification.issueDate}</strong>
              </span>
            </div>
          </div>

          {/* Topics Covered */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3">
              Curriculum Competencies & Skills Acquired
            </h3>
            <div className="space-y-2">
              {certification.topics.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/80 dark:bg-[#121c16]/80 border border-slate-200/70 dark:border-emerald-500/15 text-sm text-slate-800 dark:text-slate-200 font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Note regarding file upload */}
          <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#0e1612] p-3.5 rounded-xl border border-slate-200 dark:border-emerald-500/10">
            <span className="font-bold text-slate-800 dark:text-slate-200">Document Note: </span>
            The digital completion certificate file issued by be10x is on record and will be attached upon verification.
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:px-8 border-t border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-[#080d0a] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
