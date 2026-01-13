
import React from 'react';

const VisualCylinder: React.FC = () => {
  return (
    <div className="relative w-full max-w-[450px] mx-auto">
      <svg 
        viewBox="0 0 400 440" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_0_80px_rgba(59,130,246,0.2)]"
      >
        <defs>
          <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
          
          <linearGradient id="neonBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          <filter id="hyperGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>{`
            @keyframes slide {
              0% { stroke-dashoffset: 40; }
              100% { stroke-dashoffset: 0; }
            }
            .data-link {
              stroke-dasharray: 4 6;
              animation: slide 1.5s linear infinite;
            }
            .node-pulse {
              animation: pulse 2s ease-in-out infinite;
            }
            @keyframes pulse {
              0%, 100% { r: 3; opacity: 0.4; }
              50% { r: 5; opacity: 1; }
            }
          `}</style>
        </defs>

        {/* Central Interlink Backbone */}
        <path d="M 200 40 L 200 400" stroke="url(#neonBlue)" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="10 5" />

        {/* --- Top Tier --- */}
        <g transform="translate(40, 50)">
          {/* Active Unit (Left) */}
          <rect x="0" y="0" width="145" height="100" rx="12" fill="url(#neonCyan)" fillOpacity="0.9" />
          <rect x="0" y="0" width="145" height="100" rx="12" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
          <circle cx="20" cy="20" r="4" fill="white" fillOpacity="0.6" className="node-pulse" />
          
          {/* Ghost Framework (Right) */}
          <rect x="175" y="0" width="145" height="100" rx="12" stroke="url(#neonCyan)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
          
          {/* Connection Bridge */}
          <path d="M 145 50 L 175 50" stroke="#22D3EE" strokeWidth="3" filter="url(#hyperGlow)" strokeLinecap="round" />
          <path d="M 145 50 L 175 50" stroke="white" strokeWidth="1" className="data-link" />
        </g>

        {/* --- Middle Tier --- */}
        <g transform="translate(40, 170)">
          {/* Ghost Framework (Left) */}
          <rect x="0" y="0" width="145" height="100" rx="12" stroke="url(#neonBlue)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
          
          {/* Active Unit (Right) */}
          <rect x="175" y="0" width="145" height="100" rx="12" fill="url(#neonBlue)" fillOpacity="0.9" />
          <rect x="175" y="0" width="145" height="100" rx="12" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
          <circle cx="195" cy="20" r="4" fill="white" fillOpacity="0.6" className="node-pulse" />

          {/* Connection Bridge */}
          <path d="M 145 50 L 175 50" stroke="#3B82F6" strokeWidth="3" filter="url(#hyperGlow)" strokeLinecap="round" />
          <path d="M 145 50 L 175 50" stroke="white" strokeWidth="1" className="data-link" />
        </g>

        {/* --- Bottom Tier --- */}
        <g transform="translate(40, 290)">
          {/* Active Unit (Left) */}
          <rect x="0" y="0" width="145" height="100" rx="12" fill="url(#neonCyan)" fillOpacity="0.9" />
          <rect x="0" y="0" width="145" height="100" rx="12" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
          <circle cx="20" cy="20" r="4" fill="white" fillOpacity="0.6" className="node-pulse" />

          {/* Ghost Framework (Right) */}
          <rect x="175" y="0" width="145" height="100" rx="12" stroke="url(#neonCyan)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />
          
          {/* Connection Bridge */}
          <path d="M 145 50 L 175 50" stroke="#22D3EE" strokeWidth="3" filter="url(#hyperGlow)" strokeLinecap="round" />
          <path d="M 145 50 L 175 50" stroke="white" strokeWidth="1" className="data-link" />
        </g>

        {/* Energy Flow Nodes between tiers */}
        <circle cx="200" cy="150" r="5" fill="#3B82F6" filter="url(#hyperGlow)" className="node-pulse" />
        <circle cx="200" cy="270" r="5" fill="#22D3EE" filter="url(#hyperGlow)" className="node-pulse" style={{ animationDelay: '1s' }} />
      </svg>
      
      {/* Dynamic Layered Glows */}
      <div className="absolute top-[10%] left-1/4 w-32 h-32 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-1/4 w-32 h-32 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default VisualCylinder;
