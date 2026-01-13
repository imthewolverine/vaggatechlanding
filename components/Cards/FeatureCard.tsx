type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-blue-950/40 via-slate-900/40 to-cyan-950/40 p-8 backdrop-blur-sm transition-all hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400/20 to-blue-600/20 backdrop-blur-sm">
          {icon}
        </div>
        
        <h3 className="mb-3 text-xl font-semibold text-white">
          {title}
        </h3>
        
        <p className="text-sm leading-relaxed text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
}
