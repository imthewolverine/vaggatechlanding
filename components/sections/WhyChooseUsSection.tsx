
import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  BrainCircuit,
  UserCheck,
  Zap,
  Target,
  Sparkles
} from 'lucide-react';
import FeatureCard from '../FeatureCard';
import VisualCylinder from '../VisualCylinder';
import LogoMarquee from '../LogoMarquee';
import { ScrollTopButton } from '../ScrollTopButton';

export default function WhyChooseUsSection(){
    
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#020617] min-h-screen flex flex-col items-center overflow-hidden">
      {/* Premium Background Layering */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      
      {/* Floating Ambient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Header Section */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-bounce">
          <Sparkles size={14} />
          Why Choose Our Agency
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          We Build the <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400">Future of Intelligence</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Unleash the full potential of your business with our cutting-edge AI ecosystem designed for elite performance.
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-4">
        
        {/* Left Column: Features */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-12 order-2 lg:order-1">
          <FeatureCard 
            index="01"
            title="Privacy-First Architecture" 
            icon={<ShieldCheck />}
            align="left"
          />
          <FeatureCard 
            index="02"
            title="Hyper-Tailored Model Logic" 
            icon={<Cpu />}
            align="left"
          />
          <FeatureCard 
            index="03"
            title="Sovereign AI Infrastructure" 
            icon={<BrainCircuit />}
            align="left"
          />
        </div>

        <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center py-4 transform hover:scale-105 transition-transform duration-700">
          <VisualCylinder />
        </div>

        <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-12 order-3">
          <FeatureCard 
            index="04"
            title="Elite Silicon Valley Talent" 
            icon={<UserCheck />}
            align="right"
          />
          <FeatureCard 
            index="05"
            title="Zero-Latency Deployment" 
            icon={<Zap />}
            align="right"
          />
          <FeatureCard 
            index="06"
            title="Unmatched Strategic ROI" 
            icon={<Target />}
            align="right"
          />
        </div>
      </div>

      <div className="mt-40 w-full relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>
        <LogoMarquee />
      </div>


      <ScrollTopButton />
    </section>
  );
}
