"use client";

import Image from "next/image";

type MovingImage = {
  src: string;
  alt: string;
  borderClass: string;
  shadowClass: string;
};

const images: MovingImage[] = [
  { src: "/images/office.jpg", alt: "Office", borderClass: "border-white/10", shadowClass: "shadow-black/40" },
  { src: "/images/robot.jpg", alt: "AI Robot", borderClass: "border-cyan-400/20", shadowClass: "shadow-cyan-500/20" },
  { src: "/images/ai.jpg", alt: "AI Chip", borderClass: "border-purple-400/20", shadowClass: "shadow-purple-500/20" },
];

export default function MovingImages() {
  // Duplicate the array for seamless looping, but render via one map.
  const loopImages = [...images, ...images];

  return (
    <section className="relative overflow-hidden bg-[#070b16] py-24">
      <div className="overflow-hidden">
        <div className="flex gap-8 animate-scroll">
          {loopImages.map((img, idx) => (
            <div key={idx} className="shrink-0">
              <div className={`relative h-40 w-60
    sm:h-50 sm:w-75
    md:h-65 md:w-98
    lg:h-80 lg:w-120
    xl:h-100 xl:w-150 overflow-hidden rounded-full border-4 ${img.borderClass} shadow ${img.shadowClass}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 30s linear infinite; }
        .animate-scroll:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
