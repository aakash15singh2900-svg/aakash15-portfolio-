import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ShieldCheck,
  GraduationCap,
  MapPin,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-widest uppercase mb-1 flex items-center gap-2">
            <span>01 // PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Professional Bio Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-3 border-emerald-500 pl-4 py-1 font-medium text-slate-800 dark:text-slate-200 bg-emerald-500/5 rounded-r-lg">
              I’m an MCA student and aspiring Full Stack Developer with a strong interest in building
              modern, scalable, and secure web applications. I work primarily with JavaScript, React,
              Node.js, Express.js, and MongoDB, and have hands-on experience developing full-stack
              applications, RESTful APIs, authentication systems, and database-driven solutions.
            </p>

            <p>
              I enjoy turning ideas into functional products and continuously improving my skills
              through real-world projects and problem-solving. Alongside full-stack development, I’m
              also exploring Data Structures & Algorithms, System Design, Networking, and Cybersecurity
              to build a strong foundation as a software developer.
            </p>

            <p>
              My goal is to contribute to real-world software projects, learn from experienced
              developers, and grow into a highly skilled and reliable Full Stack Developer.
            </p>

            {/* Engineering Principles Ribbon */}
            <div className="pt-3 border-t border-slate-200/80 dark:border-emerald-500/15 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Security-first mindset
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                RESTful Architecture
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Production MERN Stack
              </span>
            </div>
          </div>

          {/* Right Highlight Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1510] border border-slate-200 dark:border-emerald-500/20 shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-md group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Primary Stack
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                MERN Ecosystem
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                MongoDB, Express.js, React.js, Node.js with Vite & Tailwind CSS.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1510] border border-slate-200 dark:border-emerald-500/20 shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-md group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Current Degree
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                MCA Candidate
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                Dev Bhoomi Uttarakhand University (Currently Pursuing).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1510] border border-slate-200 dark:border-emerald-500/20 shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-md group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Key Specialization
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                APIs & Auth Systems
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                JWT tokens, OTP verification, session cookies, and payment gateways.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1510] border border-slate-200 dark:border-emerald-500/20 shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-md group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Location Base
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                Haridwar, India
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                Open to remote positions and on-site software engineering opportunities.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
