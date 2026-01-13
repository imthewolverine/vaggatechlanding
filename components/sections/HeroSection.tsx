import Link from "next/link";
import FeatureCard from "@/components/Cards/FeatureCard";
import GreenButton from "@/components/Buttons/GreenButton";

function InsightsIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <circle cx="24" cy="24" r="12" className="fill-cyan-400/30" />
      <path d="M24 16v16M16 24h16" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="16" r="4" className="fill-blue-500/40" />
      <circle cx="16" cy="32" r="3" className="fill-cyan-300/40" />
      <defs>
        <linearGradient id="grad1" x1="16" y1="16" x2="32" y2="32">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <path 
        d="M24 8L12 14v8c0 7.5 5.2 14.5 12 16 6.8-1.5 12-8.5 12-16v-8L24 8z" 
        className="fill-gradient-to-br from-cyan-400/30 to-blue-600/30"
        stroke="url(#grad2)"
        strokeWidth="2"
      />
      <circle cx="24" cy="24" r="6" className="fill-cyan-400/50" />
      <defs>
        <linearGradient id="grad2" x1="12" y1="8" x2="36" y2="40">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <path 
        d="M24 8L16 16L24 24L16 32L24 40L32 32L24 24L32 16L24 8z" 
        className="fill-blue-500/30"
        stroke="url(#grad3)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="4" className="fill-cyan-400/60" />
      <defs>
        <linearGradient id="grad3" x1="16" y1="8" x2="32" y2="40">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#020617] min-h-screen flex flex-col items-center overflow-hidden">
      {/* Striped background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 60px,
            rgba(59, 130, 246, 0.05) 60px,
            rgba(59, 130, 246, 0.05) 120px
          )`
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Hero content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl xl:text-7xl">
              Empower your business
              <br />
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                with smarter AI agency
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/80">
              Unlock growth and efficiency with tailored AI solutions. We use automation
              and data-driven strategies to help you innovate and scale.
            </p>

            <div>
              <GreenButton href="/auth/register" />
            </div>
          </div>

          {/* 3D Illustration placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 blur-3xl" />
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="h-64 w-64 rounded-3xl bg-linear-to-br from-slate-300 to-slate-500 opacity-80 shadow-2xl shadow-cyan-500/20" 
                     style={{ transform: 'perspective(800px) rotateX(15deg) rotateY(-15deg)' }}>
                  <div className="absolute inset-4 rounded-2xl bg-linear-to-br from-slate-400 to-slate-600 opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<InsightsIcon />}
            title="Smarter insights"
            description="Make faster, data-driven decisions powered by real-time AI analysis and prediction."
          />
          <FeatureCard
            icon={<SecurityIcon />}
            title="Integrated AI solutions"
            description="No extra tools or plugins needed. Get built-in, scalable AI from day one."
          />
          <FeatureCard
            icon={<AutomationIcon />}
            title="End-to-end automation"
            description="Eliminate bottlenecks with intelligent workflows that never leave you guessing."
          />
        </div>
      </div>
    </section>
  );
}
