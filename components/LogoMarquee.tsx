import React from 'react';

const LOGOS = ['Sitemark', 'SiteGPT', 'Cambridge', 'Luminous', 'Umbrella', 'Madrid', 'Aether', 'Nexus', 'Flux'];

export const LogoMarquee: React.FC = () => {
  // Duplicating logos to create a seamless infinite loop
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className=" max-w-6xl mx-auto relative z-10">
      <div className="bg-slate-900/40 border border-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 overflow-hidden group">
        {/* Top Highlight Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-liner-to-r from-transparent via-teal-500/50 to-transparent"></div>
        
        <div className="flex flex-col items-center gap-10">
          {/* Header */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-slate-700"></span>
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 group-hover:text-teal-400 transition-colors">
              Trusted by 120+ Industry Leaders
            </p>
            <span className="h-px w-8 bg-slate-700"></span>
          </div>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient Fades for Edge Masking */}
            <div className="absolute inset-y-0 left-0 w-24 bg-liner-to-r from-slate-900/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-liner-to-l from-slate-900/80 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Content */}
            <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
              {duplicatedLogos.map((logo, index) => (
                <div 
                  key={`${logo}-${index}`} 
                  className="flex shrink-0 mx-10 text-xl md:text-2xl font-black tracking-tighter text-slate-400 hover:text-teal-400 transition-colors cursor-default select-none"
                >
                  {logo.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
