'use client';

import { Linkedin, Target, ShieldCheck, Cpu } from 'lucide-react';
import { Employee } from '../sections/data-Employee';

export default function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <div className="group relative">
      {/* Precision Micro-Lines */}
      <div className="absolute -top-1 -left-1 h-3 w-3 border-t border-l border-emerald-500/20 group-hover:border-emerald-500/60 transition-colors" />
      <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-emerald-500/20 group-hover:border-emerald-500/60 transition-colors" />

      <div className="relative overflow-hidden rounded-2xl border border-white/4 bg-[#0A0D18]/40 p-5 transition-all duration-700 backdrop-blur-md group-hover:bg-[#0E1324]/60 group-hover:border-white/10 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
        
        {/* Subtle Light Sweep Effect */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Header Label */}
          <div className="flex justify-between items-center px-1">
            <span className="text-[9px] font-bold tracking-[0.3em] text-white/20 group-hover:text-emerald-500/40 uppercase">
              System Instance // {employee.id}
            </span>
            <div className="flex gap-1">
              <div className="h-1 w-1 rounded-full bg-emerald-500 group-hover:animate-ping" />
              <div className="h-1 w-1 rounded-full bg-white/5" />
            </div>
          </div>

          {/* Avatar with 20% scale logic */}
          <div className="aspect-4/5 w-full overflow-hidden rounded-xl bg-slate-900 border border-white/5 shadow-2xl">
            <img 
              src={employee.imageUrl} 
              alt={employee.name} 
              className="h-full w-full object-cover grayscale opacity-80 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.2]"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
          </div>

          {/* Content Area */}
          <div className="space-y-2 px-1">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300">
              {employee.name}
            </h3>
            <div className="flex items-center gap-3">
              <span className="flex h-px flex-1 bg-linear-to-r from-emerald-500/30 to-transparent" />
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 group-hover:text-white/60 transition-colors">
                {employee.role}
              </p>
            </div>
          </div>

          {/* Status Indicators & Social */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex gap-3 text-white/20 group-hover:text-white/40 transition-colors">
               <ShieldCheck size={14} className="hover:text-emerald-400 transition-colors cursor-help" />
               <Cpu size={14} className="hover:text-emerald-400 transition-colors cursor-help" />
               <Target size={14} className="hover:text-emerald-400 transition-colors cursor-help" />
            </div>
            <a 
              href={employee.linkedinUrl}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500 hover:text-white transition-all hover:scale-110"
            >
              PROFILE <Linkedin size={14} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
