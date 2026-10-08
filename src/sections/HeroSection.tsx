import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MonogramAvatar } from '../components/MonogramAvatar';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  FolderGit2,
  Send,
  MapPin,
  GraduationCap,
  Sparkles,
  Copy,
  Check,
  Terminal,
  Layers,
  ShieldCheck,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [copiedBio, setCopiedBio] = useState(false);

  const copyRecruiterBio = () => {
    const summary = `${personalInfo.name} — ${personalInfo.title} (${personalInfo.secondaryTitle})\nLocation: ${personalInfo.location}\nEmail: ${personalInfo.email} | Phone: ${personalInfo.phoneDisplay}\nStack: JavaScript, React.js, Node.js, Express.js, MongoDB\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}`;
    navigator.clipboard.writeText(summary);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background subtle futuristic elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial emerald ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle, #10b981 1.2px, transparent 1.2px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Tech Coordinate Annotations */}
        <div className="absolute top-14 left-8 font-mono text-[10px] text-emerald-700/50 dark:text-emerald-400/40 hidden lg:block select-none">
          <span className="text-emerald-500 font-bold">// SYS_NODE:</span> HARIDWAR_UTTARAKHAND
          <br />
          <span className="text-emerald-500 font-bold">// LAT_LON:</span> 29.9457° N · 78.1642° E
        </div>
        <div className="absolute top-14 right-8 font-mono text-[10px] text-emerald-700/50 dark:text-emerald-400/40 hidden lg:block select-none text-right">
          <span className="text-emerald-500 font-bold">// STATUS:</span> OPEN_FOR_ROLES
          <br />
          <span className="text-emerald-500 font-bold">// FOCUS:</span> MERN · REST · SECURITY
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            
            {/* Status pills & secondary identity */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Engineering Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#0c1611] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/20 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {personalInfo.secondaryTitle}
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <div className="text-lg sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono tracking-tight flex items-center justify-center lg:justify-start gap-2">
                <span>{personalInfo.title}</span>
              </div>
            </div>

            {/* Hero Tagline */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              "{personalInfo.tagline}"
            </p>

            {/* Recruiter Fast-Track Quick Summary Card */}
            <div className="p-4 sm:p-4.5 rounded-2xl bg-white/80 dark:bg-[#0c1511]/85 border border-slate-200/90 dark:border-emerald-500/20 shadow-sm backdrop-blur-sm text-left">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-emerald-500/15 pb-2 mb-2.5">
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Recruiter Quick Snapshot</span>
                </div>
                <button
                  onClick={copyRecruiterBio}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono rounded-lg border border-slate-200 dark:border-emerald-500/20 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  title="Copy candidate summary to clipboard"
                >
                  {copiedBio ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedBio ? 'Copied' : 'Copy Summary'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">Core Stack</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">React · Node · Mongo</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">Focus Areas</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">REST APIs · JWT Auth</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">Location Base</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-500 shrink-0" />
                    Haridwar, India
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Action CTAs */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-md shadow-emerald-700/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px]"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-emerald-500/30 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-emerald-950/40 font-medium text-sm transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px]"
              >
                <Send className="w-4 h-4 text-emerald-500" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-300 dark:border-emerald-500/25 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-300 dark:border-emerald-500/25 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Monogram & Interactive Developer Visual */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="relative">
              {/* Monogram circular avatar */}
              <MonogramAvatar size="hero" showRings={true} />

              {/* Futuristic floating micro-badges around the avatar */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-[#0c1510]/95 backdrop-blur-md border border-slate-200 dark:border-emerald-500/30 shadow-lg text-left hidden sm:block">
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
                  Stack Focus
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  React · Node · Express · Mongo
                </div>
              </div>

              <div className="absolute -top-3 -right-4 sm:-right-8 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-[#0c1510]/95 backdrop-blur-md border border-slate-200 dark:border-emerald-500/30 shadow-lg text-left hidden sm:block">
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
                  Authentication & APIs
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  JWT · OTP · Session Security
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom subtle scroll-down prompt */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
          >
            <span>DISCOVER</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
