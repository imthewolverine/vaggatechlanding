
'use client';

import React, { useState } from "react";
import { Shield, Zap, Target, Rocket, ChevronDown } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string[];
  alert: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Diagnostics & Strategic Mapping",
    description: [
      "Defining organizational target parameters",
      "User intent modeling & persona mapping",
      "Synthesizing scope & capability requirements",
      "High-fidelity UI/UX schematic validation",
    ],
    alert: "Diagnostic mismatch at this stage impacts total system integrity.",
    icon: <Target size={18} />,
  },
  {
    id: 2,
    title: "Neural Construction",
    description: [
      "Frontend & Core interface engineering",
      "Backend & API synchronization",
      "High-fidelity schematic adherence validation",
      "Iterative feature-cycle deployment",
    ],
    alert: "Design deviation detected during construction triggers revision protocols.",
    icon: <Zap size={18} />,
  },
  {
    id: 3,
    title: "Integrity Calibration",
    description: [
      "Bug-trace diagnostics & resolution",
      "Performance & security hardening",
      "Cross-device synchronization testing",
      "Multi-tier stakeholder validation",
    ],
    icon: <Shield size={18} />,
    alert: "Sub-optimal calibration impacts deployment reliability.",
  },
  {
    id: 4,
    title: "System Launch & Maintenance",
    description: [
      "Planetary server-side deployment",
      "SSL, Domain & Store-front synchronization",
      "Administrator command-center onboarding",
      "Post-launch warranty & optimization cycle",
    ],
    icon: <Rocket size={18} />,
    alert: "Monitoring infrastructure required for post-deployment stability.",
  },
];

export default function ServiceProcess() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="relative">
      <div className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[1em] text-emerald-500/50 mb-6 text-center">Lifecycle Protocol</h2>
        <div className="flex justify-center flex-col items-center">
          <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white mb-8">The <span className="text-outline">Process</span></h3>
          <div className="h-2px w-24 bg-linear-to-r from-transparent via-emerald-500 to-transparent" />
        </div>
      </div>

      <div className="grid gap-20 lg:grid-cols-2 items-center">
        {/* Accordion List */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 ${openId === step.id ? 'bg-emerald-500/3 border-emerald-500/40 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]' : 'bg-transparent border-white/5 hover:border-white/10'}`}
            >
              <button
                onClick={() => setOpenId(openId === step.id ? null : step.id)}
                className="flex w-full items-center justify-between p-8 text-left"
              >
                <div className="flex items-center gap-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500 ${openId === step.id ? 'bg-emerald-500 text-slate-950 border-emerald-500' : 'bg-white/5 border-white/5 text-white/20'}`}>
                    {step.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-mono text-[9px] tracking-[0.3em] uppercase ${openId === step.id ? 'text-emerald-500/60' : 'text-white/10'}`}>
                      Phase // 0{step.id}
                    </span>
                    <h3 className={`text-xl font-black tracking-tight uppercase mt-1 ${openId === step.id ? 'text-white' : 'text-white/40'}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className={`transition-all duration-500 ${openId === step.id ? 'rotate-180 text-emerald-500' : 'text-white/10'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openId === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-28 pb-10 space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    {step.description.map((line, i) => (
                      <div key={i} className="flex items-start gap-4 text-sm text-white/40 hover:text-white/60 transition-colors">
                        <div className="mt-1.5 h-1 w-1 rounded-full bg-emerald-500/40 shrink-0" />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 relative overflow-hidden rounded-xl bg-red-500/5 border border-red-500/20 px-5 py-4">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                    <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block mb-1">Integrity Alert</span>
                    <p className="text-[11px] font-medium text-red-400/70 italic leading-relaxed">
                      "{step.alert}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HUD Visualization (Logic-Synced Graphics) */}
        <div className="relative group perspective-2000 hidden lg:block">
           <div className="relative aspect-square w-full transform-gpu transition-all duration-1000 ease-out group-hover:rotate-y-12 group-hover:rotate-x-6">
              {/* Spinning Decorative Rings */}
              <div className="absolute inset-0 border border-emerald-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-10 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              
              <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Central Data Pillar */}
                <line x1="200" y1="50" x2="200" y2="350" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />

                {steps.map((step, i) => {
                  const cy = 80 + i * 80;
                  const active = openId === step.id;
                  return (
                    <g key={i} className="transition-all duration-1000" style={{ transform: `translateY(${active ? '-10px' : '0px'})` }}>
                      <ellipse 
                        cx="200" cy={cy} rx={active ? "160" : "120"} ry={active ? "35" : "25"} 
                        fill={active ? "rgba(16,185,129,0.08)" : "none"} 
                        stroke={active ? "#10b981" : "rgba(255,255,255,0.05)"} 
                        strokeWidth={active ? "2" : "1"} 
                        className="transition-all duration-700"
                      />
                      
                      {active && (
                        <>
                          <circle cx="200" cy={cy} r="4" fill="#10b981" className="animate-ping" />
                          <circle cx="200" cy={cy} r="2" fill="#10b981" />
                        </>
                      )}
                      
                      <text 
                        x="200" y={cy + 5} 
                        textAnchor="middle" 
                        className={`font-black uppercase tracking-[0.3em] transition-all duration-700 pointer-events-none ${active ? 'fill-white text-[12px]' : 'fill-white/10 text-[10px]'}`}
                      >
                        {step.title.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
           </div>
           
           {/* Float Tags */}
           <div className="absolute top-0 right-0 p-4 border border-white/10 rounded-lg bg-black/60 backdrop-blur-md text-[9px] font-mono text-emerald-500/50 animate-bounce">
              STATUS: SYNCED_WITH_CORE
           </div>
        </div>
      </div>
    </section>
  );
}
