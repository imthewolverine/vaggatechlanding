'use client'
import React from 'react';
import { Facebook, Twitter, Linkedin as LinkedinIcon, Youtube, ArrowRight, MapPin } from 'lucide-react';

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.5 7.5 12 12.5l7.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 4.5c1.2-1.2 3.3-.9 4.1.6l.7 1.3c.5 1 .2 2.3-.7 3l-.9.8c1.4 2.5 3.6 4.6 6.1 6l.8-.9c.7-.9 2-1.2 3-.7l1.3.7c1.5.8 1.8 2.9.6 4.1-.9 1-2.2 1.5-3.5 1.1-6.8-2.1-12-7.3-14.1-14.1-.4-1.3.1-2.6 1.1-3.5Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function Social({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <a href="#" className="group flex flex-1 items-center justify-center gap-3 px-8 py-6 text-xs transition-all duration-300 hover:bg-white/5 border-r border-white/5 last:border-r-0">
      <span className="text-white/20 transition-colors group-hover:text-emerald-500">{icon}</span>
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-white">{label}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#02040a] pt-48 pb-16 overflow-hidden">
      {/* Background Architectural Text */}
      <div className="pointer-events-none absolute inset-x-0 -top-8 flex justify-center">
        <span className="select-none text-[25vw] font-black leading-none text-outline opacity-20 tracking-tighter uppercase">
          VAGGA
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="flex flex-col items-center">
          {/* Main CTA */}
          <div className="mb-32 text-center">
            <h4 className="mb-10 text-xs font-black uppercase tracking-[0.8em] text-emerald-500/50">Initiate Contact</h4>
            <a
              href="mailto:VAGGA@domain.com"
              className="group relative inline-flex items-center gap-6 rounded-full border border-white/10 bg-white/2 pl-4 pr-10 py-3.5 text-lg font-bold transition-all duration-500 hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-slate-950 transition-transform group-hover:rotate-15">
                <MailIcon className="w-5 h-5" />
              </div>
              <span className="tracking-tight text-white/80 group-hover:text-white transition-colors">VAGGA@domain.com</span>
            </a>
          </div>

          {/* Navigation Grid */}
          <div className="grid w-full grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-5 mb-32">
            {[
              { label: "Systems", title: "Үйлчилгээнүүд" },
              { label: "Identity", title: "Бидний тухай" },
              { label: "Channel", title: "Холбоо барих" },
              { label: "Registry", title: "Projects" },
              { label: "Bulletin", title: "Archive" },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer border-l-2 border-white/5 pl-6 hover:border-emerald-500/50 transition-colors">
                <div className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20 group-hover:text-emerald-500/50">{item.label}</div>
                <div className="mt-4 text-xl font-bold tracking-tight text-white/70 group-hover:text-white">{item.title}</div>
              </div>
            ))}
          </div>

          {/* Social Row */}
          <div className="w-full overflow-hidden rounded-2xl border border-white/5 bg-white/1 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row">
              <Social label="Facebook" icon={<Facebook size={16} />} />
              <Social label="X / Twitter" icon={<Twitter size={16} />} />
              <Social label="LinkedIn" icon={<LinkedinIcon size={16} />} />
              <Social label="YouTube" icon={<Youtube size={16} />} />
              <a href="#" className="flex items-center justify-center px-10 py-6 text-white/20 hover:text-emerald-500 transition-colors">
                <ArrowRight size={24} />
              </a>
            </div>
          </div>

          {/* Copyright & Info */}
          <div className="mt-20 flex w-full flex-col items-center justify-between gap-10 border-t border-white/5 pt-16 md:flex-row">
             <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                <MapPin size={14} className="text-emerald-500" />
                4517 ULAANBAATAR, MNG // [47.6062° N, 122.3321° W]
             </div>

             <div className="text-[10px] font-mono tracking-widest text-white/10 uppercase">
               © 2025 // <span className="text-white/40">Infrastructure VAGGA</span> // All Rights Encrypted
             </div>

             <div className="flex items-center gap-8">
               <a href="tel:+112304528597" className="flex items-center gap-3 text-[11px] font-black tracking-widest text-white/60 hover:text-emerald-500 transition-colors">
                 <PhoneIcon className="text-emerald-500" />
                 +1 1230 452 8597
               </a>
               <button 
                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                 className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 transition-all hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500"
               >
                 <ArrowRight className="-rotate-90 transition-transform group-hover:-translate-y-1" size={20} />
               </button>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
