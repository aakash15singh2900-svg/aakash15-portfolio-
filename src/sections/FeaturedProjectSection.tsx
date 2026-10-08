import React, { useState } from 'react';
import { Project } from '../types';
import {
  ExternalLink,
  Github,
  Layers,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  CheckCircle,
  Sparkles,
  Eye,
  SlidersHorizontal,
  LayoutDashboard,
  CalendarCheck,
  Image,
  MailCheck,
} from 'lucide-react';

interface FeaturedProjectSectionProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjectSection: React.FC<FeaturedProjectSectionProps> = ({
  project,
  onSelectProject,
}) => {
  const [activeMockView, setActiveMockView] = useState<'booking' | 'admin'>('booking');

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-widest uppercase mb-1">
            <span>03 // PORTFOLIO WORK</span>
            <span className="text-slate-400">·</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
              PRIMARY FEATURED PROJECT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Engineering Project
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-3" />
        </div>

        {/* Featured Project Large Container */}
        <div className="relative rounded-3xl bg-white dark:bg-[#0c1410] border-2 border-emerald-500/30 shadow-xl overflow-hidden transition-all duration-300">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
            
            {/* Left Details Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category & Badges */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold tracking-wider">
                  PROJECT {project.number}
                </span>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {project.category}
                </span>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Full Stack MERN
                </span>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/25 px-2 py-0.5 rounded text-[11px] font-medium">
                  Live Demo: Coming Soon
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-base text-emerald-700 dark:text-emerald-400 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Key Capabilities Grid */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Core Modules & Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Customer & Admin Portals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Razorpay (Sandbox / Test Mode)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>ImageKit Cloud Uploads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Automated Email Integration</span>
                  </div>
                </div>
              </div>

              {/* Technologies Badges */}
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-2">
                  Built With:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-[#132219] text-slate-800 dark:text-emerald-300 border border-slate-200 dark:border-emerald-500/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-md shadow-emerald-700/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px]"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project Details</span>
                </button>

                <a
                  href={project.githubUrl || 'https://github.com/aakash15singh2900-svg'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-300 dark:border-emerald-500/30 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-emerald-950/40 text-sm font-medium transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>GitHub</span>
                </a>

                <span
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-300 dark:border-emerald-500/20 bg-slate-100/80 dark:bg-[#0c1611] text-slate-500 dark:text-slate-400 text-sm font-mono min-h-[44px] select-none"
                  title="Live deployment is currently being prepared"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span>Live Demo — Coming Soon</span>
                </span>
              </div>

            </div>

            {/* Right Visual CSS-based Interface Mockup */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 dark:border-emerald-500/30 bg-slate-900 shadow-2xl overflow-hidden text-slate-100 select-none">
                
                {/* Mock Browser Header */}
                <div className="px-4 py-3 bg-[#0a0f0d] border-b border-emerald-500/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 bg-black/40 px-3 py-1 rounded border border-emerald-500/15 truncate max-w-[200px]">
                    https://new-era-solutions.internal
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </div>
                </div>

                {/* Sub-Tabs: Customer View vs Admin View */}
                <div className="px-4 pt-2.5 bg-[#0a110d] border-b border-emerald-500/15 flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setActiveMockView('booking')}
                    className={`pb-2 px-2.5 font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
                      activeMockView === 'booking'
                        ? 'border-emerald-400 text-emerald-300 font-semibold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Customer Portal</span>
                  </button>
                  <button
                    onClick={() => setActiveMockView('admin')}
                    className={`pb-2 px-2.5 font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
                      activeMockView === 'admin'
                        ? 'border-emerald-400 text-emerald-300 font-semibold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Admin Operations</span>
                  </button>
                </div>

                {/* Mock Application UI Content */}
                <div className="p-4 sm:p-5 space-y-4 bg-[#0a120e]">
                  
                  {activeMockView === 'booking' ? (
                    <>
                      {/* Top Bar inside app */}
                      <div className="flex items-center justify-between border-b border-emerald-500/15 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                            NE
                          </div>
                          <span className="font-bold text-xs text-white">NEW ERA SOLUTIONS</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          <CreditCard className="w-3 h-3" />
                          <span>Razorpay (Sandbox / Test Mode)</span>
                        </div>
                      </div>

                      {/* Service Booking Card Showcase */}
                      <div className="p-3.5 rounded-xl bg-[#0f1d16] border border-emerald-500/25 space-y-2.5">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-[10px] font-mono text-emerald-400 uppercase">
                              Industrial Service Booking (Simulation)
                            </div>
                            <div className="text-sm font-bold text-white">
                              Engineering Maintenance & Diagnostics
                            </div>
                          </div>
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            ₹ Test Mode
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-300 leading-snug">
                          Instant customer account verification, service scheduling, test payment processing, and ImageKit inspection uploads.
                        </div>
                        <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-emerald-500/15">
                          <span className="flex items-center gap-1 text-emerald-400">
                            <MailCheck className="w-3 h-3" /> Nodemailer Dispatch ✓
                          </span>
                          <span className="text-slate-400">Status: Confirmed</span>
                        </div>
                      </div>

                      {/* Micro Specs Grid */}
                      <div className="grid grid-cols-2 gap-2 text-left">
                        <div className="p-2.5 rounded-lg bg-[#0d1812] border border-emerald-500/15">
                          <div className="text-[10px] font-mono text-slate-400">Customer Flow</div>
                          <div className="text-xs font-bold text-emerald-400 font-mono">Catalog → Booking → Pay</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0d1812] border border-emerald-500/15">
                          <div className="text-[10px] font-mono text-slate-400">Security Model</div>
                          <div className="text-xs font-bold text-white font-mono">JWT + Role RBAC</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Admin View Mockup */}
                      <div className="flex items-center justify-between border-b border-emerald-500/15 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            ADMIN // CONTROL CONSOLE
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">
                          Role: SuperAdmin
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-left">
                        <div className="p-2.5 rounded-lg bg-[#0d1812] border border-emerald-500/20">
                          <div className="text-[10px] font-mono text-slate-400">Total Bookings</div>
                          <div className="text-base font-bold text-emerald-400 font-mono">Realtime Synced</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0d1812] border border-emerald-500/20">
                          <div className="text-[10px] font-mono text-slate-400">Service Management</div>
                          <div className="text-base font-bold text-white font-mono">Full CRUD</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#0f1d16] border border-emerald-500/20 text-xs text-slate-300 space-y-1.5">
                        <div className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">
                          Admin Operations
                        </div>
                        <div className="text-[11px]">
                          Update service rates, assign field technicians, inspect customer uploads, and track platform analytics.
                        </div>
                      </div>
                    </>
                  )}

                  {/* Interactive Trigger in visual */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>Inspect Full Architecture Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
