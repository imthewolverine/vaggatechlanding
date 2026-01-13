import SectionTitle from "../widgets/SectionTitle";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#070b16] px-6 py-24">
      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <SectionTitle title="Who We Are" dots={1} fontsize={"text-sm"} />

        {/* Main content grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Heading with embedded icons */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
              We helping{" "}
              <span className="inline-flex h-12 w-12 items-center justify-center align-middle lg:h-16 lg:w-16">
                <span className="text-4xl lg:text-5xl">📈</span>
              </span>{" "}
              grow businesses and{" "}
              <span className="inline-flex h-12 w-12 items-center justify-center align-middle lg:h-16 lg:w-16">
                <span className="text-4xl lg:text-5xl">🎯</span>
              </span>{" "}
              scale with smart, data-driven AI agency
            </h2>
          </div>

          {/* 3D Illustration area */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 blur-3xl" />
              <div className="relative flex h-full w-full items-center justify-center">
                {/* Placeholder for 3D model - can be replaced with actual image or 3D component */}
                <div className="relative h-72 w-72">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-slate-700/30 to-slate-500/30 backdrop-blur-sm" 
                       style={{ transform: 'perspective(1000px) rotateX(-10deg) rotateY(20deg)' }}>
                    <div className="absolute inset-4 rounded-xl bg-linear-to-br from-slate-600/40 to-slate-400/40" />
                    <div className="absolute inset-8 rounded-lg bg-linear-to-br from-slate-500/50 to-slate-300/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
