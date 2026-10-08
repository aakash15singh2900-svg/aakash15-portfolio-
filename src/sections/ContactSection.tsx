import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full Stack Opportunity / Engineering Inquiry',
    message: '',
  });

  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    // Build mailto query to honestly send via user's email client
    const subjectEncoded = encodeURIComponent(formData.subject);
    const bodyEncoded = encodeURIComponent(
      `Hello Aakash,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from Portfolio Contact Inquiry`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    
    // Trigger user's mail client
    window.location.href = mailtoUrl;

    setStatusMessage(
      `Opening your default mail client to dispatch your message to ${personalInfo.email}...`
    );
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-[#070b09]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-widest uppercase mb-1">
            09 // GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Connect & Collaborate
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-3" />
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Interested in discussing full-stack engineering roles, technical architecture, or
            freelance client projects? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm transition-all hover:border-emerald-500/40">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-emerald-500/25 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm transition-all hover:border-emerald-500/40">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Direct Phone
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {personalInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-emerald-500/25 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label="Copy phone number"
                  title="Copy phone number"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    Location Base
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm hover:border-emerald-500/40 flex items-center gap-3 transition-colors group min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Github className="w-5 h-5 text-slate-800 dark:text-white group-hover:text-emerald-500 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">GitHub</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate max-w-[110px]">@aakash15singh2900-svg</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm hover:border-emerald-500/40 flex items-center gap-3 transition-colors group min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Linkedin className="w-5 h-5 text-[#0a66c2] group-hover:opacity-80 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">LinkedIn</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Aakash Singh</div>
                </div>
              </a>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-emerald-800 dark:text-emerald-400">
                  Response SLA:
                </span>{' '}
                Direct inquiries receive replies within 24 hours for recruiter discussions, technical interviews, and engineering collaborations.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form UI */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/20 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-emerald-500/15 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Compose a direct message or proposal.
                  </p>
                </div>
                <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Direct Communication</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Recruiter / Client Name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-emerald-500/25 bg-slate-50 dark:bg-[#080d0a] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. hiring@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-emerald-500/25 bg-slate-50 dark:bg-[#080d0a] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-emerald-500/25 bg-slate-50 dark:bg-[#080d0a] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the opportunity, project scope, or technical query..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-emerald-500/25 bg-slate-50 dark:bg-[#080d0a] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-900 dark:text-emerald-300 font-medium">
                    {statusMessage}
                  </div>
                )}

                {/* Direct Client Dispatch Notice */}
                <div className="p-3.5 rounded-xl bg-slate-100/90 dark:bg-[#080f0b] border border-slate-200 dark:border-emerald-500/15 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    Transparent Communication Notice:
                  </div>
                  <div>
                    Clicking "Send Message" automatically prepares and dispatches this message through your default email
                    client directly to <strong>{personalInfo.email}</strong>. No middleman data collection.
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-700/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs text-emerald-700 dark:text-emerald-400 hover:underline font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 p-2 rounded"
                  >
                    Open in Email Client Directly →
                  </a>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
