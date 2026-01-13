'use client';

import { ArrowUp } from 'lucide-react';

export const ScrollTopButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
     <button 
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 group transition-all active:scale-95"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
              <div className="relative w-14 h-14 bg-slate-900/90 border border-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-xl transition-all group-hover:border-cyan-400/50 group-hover:rotate-12">
                <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
    </button>
  );
};
