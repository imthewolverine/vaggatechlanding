
import React from 'react';

interface FeatureCardProps {
  index: string;
  title: string;
  icon: React.ReactNode;
  align?: 'left' | 'right';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ index, title, icon, align = 'left' }) => {
  const isLeftSide = align === 'left';
  
  return (
    <div className={`group relative p-6 rounded-2xl transition-all duration-500 border border-white/5 bg-white/2 backdrop-blur-xl hover:bg-white/4 hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] w-full max-w-85 flex flex-col gap-3 overflow-hidden`}>
      
      {/* Hover Light Effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-liner-to-r from-transparent via-blue-400 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div className={`flex items-start gap-5 w-full ${isLeftSide ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
        
        {/* Icon & Index Area */}
        <div className="relative shrink-0 flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-liner-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:border-cyan-400/50 transition-all duration-500 shadow-xl">
            {React.cloneElement(icon as React.ReactElement<any>, { size: 22 })}
          </div>
          <span className="mt-2 text-[10px] font-bold text-slate-500 tracking-tighter group-hover:text-blue-400 transition-colors uppercase">
            {index}
          </span>
        </div>

        {/* Text Area */}
        <div className="flex-1 pt-1">
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors leading-snug tracking-tight">
            {title}
          </h3>
          <div className={`h-1 w-0 group-hover:w-12 bg-blue-500 transition-all duration-500 mt-2 ${isLeftSide ? 'ml-auto' : 'mr-auto'}`} />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
