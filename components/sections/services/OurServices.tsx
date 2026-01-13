'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PageHeader } from '@/components/widgets/PageHeader';
import GreenButton from '@/components/Buttons/GreenButton';

type Service = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  industry?: string;
  country?: string;
  tech?: string[];
};

export default function OurServices() {
  const services: Service[] = [
    {
      id: 's1',
      title: 'E-commerce & marketing',
      description:
        'We create AI solutions that boost sales and customer engagement—smart product recommendations, dynamic pricing and behavior-based targeting.',
      image: '/images/services/bg.jpg',
    },
    {
      id: 's2',
      title: 'Computer vision projects',
      description:
        'We develop systems that see and understand visual data—detecting objects, recognizing patterns, and automating inspections.',
      image: '/images/services/bg.jpg',
    },
    {
      id: 's3',
      title: 'Custom dashboards',
      description:
        'Interactive dashboards and analytics platforms that turn data into actionable insights with real-time updates.',
      image: '/images/services/bg.jpg',
    },
    {
      id: 's4',
      title: 'Mobile-first experiences',
      description:
        'Design and development focused on mobile-first performance and accessibility to reach users where they are.',
      image: '/images/services/bg.jpg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            setActiveIndex(index);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: [0.45, 0.5, 0.75] }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Show/hide right-side nav depending on whether the section wrapper is in view
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setShowNav(entry.isIntersecting));
    }, { threshold: 0.1 });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    const el = sectionRefs.current[index];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#071026] text-white">
      <div className="relative" ref={wrapperRef}>
        {/* Right side vertical numbered nav: visible only when section is in view */}
        

        {/* Sections */}
        <main className="space-y-8">
          {services.map((s, i) => (
            <section
              key={s.id}
              ref={(el) => { sectionRefs.current[i] = el; }}
              data-index={i}
              className={`relative min-h-[65vh] md:min-h-[78vh] flex items-center transition-all duration-700 ${i === activeIndex ? 'opacity-100' : 'opacity-70'}`}
            >
              <div className="container mx-auto px-4">
                <div className="flex flex-col gap-6 md:grid md:grid-cols-12 md:items-center">
                  {/* Left: sticky info card */}
                  <div className="md:col-span-6">
                    <div className={`md:sticky md:top-24 transition-transform duration-500 ${i === activeIndex ? 'translate-y-0 scale-100' : 'translate-y-6 scale-95'}`}>
                      <div className="max-w-xl rounded-xl bg-[#323a43]/90 p-8 shadow-2xl backdrop-blur-md">
                        <h3 className="text-3xl md:text-4xl font-semibold leading-tight">{s.title}</h3>
                        <p className="mt-4 text-white/80">{s.description}</p>

                        <div className="mt-6 flex gap-6">
                          <div>
                            <div className="text-sm text-white/80">Industry</div>
                            <div className="text-cyan-400 font-semibold">{s.industry ?? 'AI / Data'}</div>
                          </div>
                          <div>
                            <div className="text-sm text-white/80">Country</div>
                            <div className="text-cyan-400 font-semibold">{s.country ?? 'Global'}</div>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                          {(s.tech ?? []).slice(0,3).map((t) => (
                            <div key={t} className="inline-flex items-center justify-center rounded-full bg-white p-2">
                              <span className="text-black text-xs font-semibold">{t}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <GreenButton href="/auth/register"
                          label='SEE MORE' />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Illustration / image */}
                  {/* <div className="md:col-span-6 flex justify-end">
                    <div className={`w-full max-w-135 transition-all duration-700 ${i === activeIndex ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-95 opacity-60'}`}>
                      <div className="rounded-xl shadow-2xl overflow-hidden bg-black" style={{ height: '360px' }}>
                        <iframe
                          src="http://localhost:3000"
                          title={`preview-${s.id}`}
                          className="w-full h-full border-0"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>
          ))}
          {showNav && (
          <nav className="hidden md:block fixed right-3 lg;right-80 top-1/2 z-50 -translate-y-1/2 transition-opacity duration-300">
            <ul className="space-y-4">
              {services.map((s, i) => (
                <li key={s.id}>
                  <button 
                    onClick={() => scrollTo(i)}
                    aria-current={i === activeIndex ? 'true' : undefined}
                    className={`group flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                      i === activeIndex
                        ? 'bg-emerald-400 text-black shadow-[0_0_0_6px_rgba(16,185,129,0.12)]'
                        : 'bg-transparent text-white/90 border-white/10 hover:border-emerald-400'
                    }`}
                  >
                    <span className="font-medium">{i + 1}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
        </main>
      </div>

      <div className="container mx-auto px-4 py-12 text-center text-sm text-white/60">
        <em>Scroll to browse each service. Click the numbers on the right to jump to a section.</em>
      </div>
    </div>
  );
}
