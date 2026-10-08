import React from 'react';

interface MonogramAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showRings?: boolean;
}

export const MonogramAvatar: React.FC<MonogramAvatarProps> = ({
  size = 'hero',
  className = '',
  showRings = true,
}) => {
  const dimensions = {
    sm: { box: 'w-10 h-10', svgSize: 40, textSize: 'text-base' },
    md: { box: 'w-16 h-16', svgSize: 64, textSize: 'text-2xl' },
    lg: { box: 'w-24 h-24', svgSize: 96, textSize: 'text-4xl' },
    hero: { box: 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64', svgSize: 256, textSize: 'text-7xl' },
  }[size];

  return (
    <div className={`relative flex items-center justify-center select-none ${dimensions.box} ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 blur-2xl transition-all duration-700 pointer-events-none" />

      {/* Decorative orbital rings for futuristic developer aesthetic */}
      {showRings && (
        <>
          {/* Outer dashed spinning/fixed technical ring */}
          <div className="absolute inset-[-14px] sm:inset-[-18px] rounded-full border border-emerald-500/20 dark:border-emerald-400/25 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none" />

          {/* Secondary micro-ticks ring */}
          <div className="absolute inset-[-6px] sm:inset-[-8px] rounded-full border border-emerald-500/30 dark:border-emerald-500/25 pointer-events-none" />

          {/* Subtle 4-quadrant corner markers */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
          <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
        </>
      )}

      {/* Core Monogram Disc */}
      <div className="relative w-full h-full rounded-full overflow-hidden p-[2px] bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-800 shadow-xl shadow-emerald-950/20 dark:shadow-emerald-950/50 group">
        <div className="w-full h-full rounded-full bg-slate-900 dark:bg-[#070d0a] flex items-center justify-center relative overflow-hidden transition-colors">
          {/* Subtle grid background texture inside disc */}
          <div
            className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18]"
            style={{
              backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`,
              backgroundSize: '12px 12px',
            }}
          />

          {/* Precision SVG Monogram Graphic */}
          <svg
            viewBox="0 0 100 100"
            className="w-3/5 h-3/5 text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.45)] transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Aakash Singh Monogram"
          >
            <defs>
              <linearGradient id="monogramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="60%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="glowG" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Stylized Architectural Letter 'A' */}
            <path
              d="M50 14L22 84H35.5L42 67.5H58L64.5 84H78L50 14Z"
              fill="url(#monogramGradient)"
            />
            {/* Inner triangular negative space / portal */}
            <polygon
              points="50,33 44.5,57.5 55.5,57.5"
              fill="#070d0a"
              className="dark:fill-[#070d0a] fill-slate-900"
            />
            {/* Horizontal precision cyber-crossbar */}
            <path
              d="M40 54H60"
              stroke="#a7f3d0"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Zenith vertex indicator */}
            <circle cx="50" cy="14" r="2.5" fill="#a7f3d0" />
          </svg>

          {/* Clean minimal tech status pip */}
          <div className="absolute bottom-2 font-mono text-[9px] tracking-widest text-emerald-500/80 uppercase font-semibold">
            DEV
          </div>
        </div>
      </div>
    </div>
  );
};
