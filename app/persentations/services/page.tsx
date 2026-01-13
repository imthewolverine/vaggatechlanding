
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Globe, Cpu, Database, Layout, Terminal } from 'lucide-react';
import ServiceProcess from '@/components/sections/serviceprocess/ServiceProcess';

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  industry: string;
  codeSnippet: string;
};

const services: Service[] = [
  {
    id: 'S-01',
    title: 'E-commerce Neural Engines',
    description: 'We architect AI systems that autonomously optimize conversion pipelines—predictive targeting, dynamic pricing, and behavioral modeling.',
    icon: <Globe size={32} />,
    industry: 'Global Commerce',
    codeSnippet: 'model.optimize({ metric: "LTV", strategy: "dynamic_pricing" })'
  },
  {
    id: 'S-02',
    title: 'Vision Intelligence Systems',
    description: 'Deployment of sensory neural networks for real-time visual interpretation, pattern detection, and automated oversight.',
    icon: <Cpu size={32} />,
    industry: 'Industrial Ops',
    codeSnippet: 'vision.detect(stream).map(obj => obj.track())'
  },
  {
    id: 'S-03',
    title: 'Analytic Control Centers',
    description: 'Mission-critical command centers that synthesize planetary data into high-fidelity actionable intelligence.',
    icon: <Database size={32} />,
    industry: 'Enterprise Data',
    codeSnippet: 'cluster.aggregate(data_stream).then(render_insight)'
  },
  {
    id: 'S-04',
    title: 'Adaptive User Interfaces',
    description: 'Designing intelligence-first interfaces that anticipate user intent and optimize for high-bandwidth interaction.',
    icon: <Layout size={32} />,
    industry: 'Cognitive Design',
    codeSnippet: 'ui.adapt(user_behavior).apply({ layout: "focused" })'
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observer = new IntersectionObserver((entries) => {
      // Logic Fix: Find the entry with the highest intersection ratio to ensure 
      // the "most visible" section is always the active one.
      let highestRatio = 0;
      let mostVisibleIndex = activeIndex;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
          highestRatio = entry.intersectionRatio;
          mostVisibleIndex = Number((entry.target as HTMLElement).dataset.index);
        }
      });

      if (highestRatio > 0.1) {
        setActiveIndex(mostVisibleIndex);
      }
    }, observerOptions);

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    
    <div className="relative bg-[#02040a]">
      <div className='px-100 pb-100'>
        <ServiceProcess/>
      </div>
      <div className="mb-20 flex items-center gap-6">
         <h2 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl">
           Specialized <br/><span className="text-outline">Divisions</span>
         </h2>
         <div className="h-px flex-1 bg-linear-to-r from-emerald-500/30 to-transparent" />
      </div>
      
      <div className="grid gap-20 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-40">
          {services.map((s, i) => (
            <section
              key={s.id}
              ref={(el) => { sectionRefs.current[i] = el; }}
              data-index={i}
              className={`group relative transition-all duration-1000 ${i === activeIndex ? 'opacity-100 scale-100' : 'opacity-20 scale-95 blur-[1px]'}`}
            >
              {/* Border Beam Animation (Prettier Component) */}
              {i === activeIndex && (
                <div className="absolute -inset-1px rounded-3xl bg-linear-to-r from-transparent via-emerald-500/50 to-transparent opacity-50 blur-sm animate-[pulse_3s_infinite]" />
              )}

              <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#0A0D18]/40 p-10 backdrop-blur-xl">
                {/* Visual Content */}
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="flex-1">
                    <div className="mb-10 flex items-center justify-between">
                      <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                        {s.icon}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase">Module // {s.id}</span>
                        <div className="mt-1 h-1 w-12 bg-emerald-500/20 rounded-full overflow-hidden">
                           <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: i === activeIndex ? '100%' : '0%' }} />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter group-hover:text-emerald-400 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xl text-white/40 leading-relaxed max-w-xl mb-10 italic font-light">
                      "{s.description}"
                    </p>

                    <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-1">Target Sector</div>
                        <div className="text-emerald-500 font-bold uppercase tracking-widest text-xs">{s.industry}</div>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Mockup (Prettier Detail) */}
                  <div className="hidden xl:flex w-72 flex-col rounded-xl bg-black/40 border border-white/5 p-4 font-mono text-[10px]">
                     <div className="flex gap-1.5 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-500/20" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                     </div>
                     <div className="text-emerald-500/60 mb-2 flex items-center gap-2">
                        <Terminal size={10} /> source_code.exec
                     </div>
                     <div className="text-white/40 leading-relaxed">
                        {s.codeSnippet}
                     </div>
                     <div className="mt-auto pt-4 text-emerald-500/20 animate-pulse">
                        RUNNING_INST_0{i+1}...
                     </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-end">
                  <button className="group/btn relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-white px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-950 transition-all hover:pr-14 hover:bg-emerald-500">
                    Deploy Capability 
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Sticky Nav HUD (Logic Sync Fix) */}
        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-48 p-10 rounded-3xl border border-white/5 bg-[#0A0D18]/20 backdrop-blur-3xl">
            <div className="mb-10 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.5em] text-white/20 uppercase">Nav Matrix</span>
              <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            </div>
            <ul className="space-y-8">
              {services.map((s, i) => (
                <li key={s.id}>
                  <button 
                    onClick={() => {
                      sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      setActiveIndex(i);
                    }}
                    className={`group flex items-center gap-6 w-full text-left transition-all duration-500 ${i === activeIndex ? 'text-emerald-400 translate-x-4' : 'text-white/10 hover:text-white/30'}`}
                  >
                    <span className="font-mono text-xl font-thin">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        {s.title.split(' ')[0]}
                      </span>
                      <div className={`h-px transition-all duration-700 bg-emerald-500/50 ${i === activeIndex ? 'w-full' : 'w-0'}`} />
                    </div>
                    {i === activeIndex && <ArrowRight size={14} className="ml-auto" />}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-16 pt-8 border-t border-white/5">
              <div className="text-[9px] font-mono text-white/20 mb-4 uppercase">System Status</div>
              <div className="flex items-center gap-2 text-emerald-500/60 text-[10px] font-bold">
                 <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 ALL_NODES_OPERATIONAL
              </div>
            </div>
          </div>
        </aside>
      </div>

    </div>
  );
}
