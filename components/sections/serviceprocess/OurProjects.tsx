"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  industry: string;
  country: string;
  image: string;
  tech: string[];
  href?: string;
};

export default function OurProjexts() {
  const projects: Project[] = [
    {
      id: "p1",
      title: "Chatbot & NLP projects",
      description:
        "Smart chatbots and NLP tools for customer support, document analysis, and automation.",
      industry: "Data Processing",
      country: "Germany",
      image: "/images/projects/chatbot.jpg",
      tech: ["Python", "NLProc", "TensorFlow"],
      href: "/project/chatbot",
    },
    {
      id: "p2",
      title: "E-commerce & marketing",
      description:
        "AI solutions that boost sales — smart product recommendations, dynamic pricing, and personalization.",
      industry: "Artificial Intelligence",
      country: "Singapore",
      image: "/images/projects/robotic-arm.jpg",
      tech: ["Python", "Recommender", "Analytics"],
      href: "/project/ecommerce",
    },
    {
      id: "p3",
      title: "Computer vision projects",
      description:
        "Systems that see and understand visual data — object detection, recognition, and automated inspection.",
      industry: "Computer Vision",
      country: "United States",
      image: "/images/projects/computer-vision.jpg",
      tech: ["OpenCV", "PyTorch", "Edge"],
      href: "/project/computer-vision",
    },
    {
      id: "p4",
      title: "Data science & analytics",
      description:
        "Predictive models and real-time dashboards that turn data into actionable business insights.",
      industry: "Data Science",
      country: "Canada",
      image: "/images/projects/data-analytics.jpg",
      tech: ["SQL", "PowerBI", "Python"],
      href: "/project/analytics",
    },
  ];

  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const touchStartRef = useRef<number | null>(null);

  // Intersection observer to set active on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting && entry.intersectionRatio > 0.45) setActive(idx);
        });
      },
      { threshold: [0.45, 0.6] }
    );

    sectionRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  // keyboard navigation (up/down)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.min(active + 1, projects.length - 1);
        scrollTo(next);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(active - 1, 0);
        scrollTo(prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const scrollTo = (index: number) => {
    const el = sectionRefs.current[index];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent, index: number) => {
    const start = touchStartRef.current;
    if (start == null) return;
    const end = e.changedTouches[0].clientY;
    const delta = start - end;
    if (delta > 40) {
      // swipe up -> next
      const next = Math.min(index + 1, projects.length - 1);
      scrollTo(next);
    } else if (delta < -40) {
      // swipe down -> prev
      const prev = Math.max(index - 1, 0);
      scrollTo(prev);
    }
    touchStartRef.current = null;
  };

  return (
    <section className="project bg_img pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-white">Our Projects</h2>
          <p className="mt-3 text-white/70">See the results that reflect our hard work</p>
          <div className="mt-4">
            <Link href="/project" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-black font-medium">
              View more projects
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Right numbered nav - small circular buttons */}
          <nav className="hidden md:flex fixed right-6 top-1/2 z-30 -translate-y-1/2">
            <ul className="space-y-3">
              {projects.map((p, i) => (
                <li key={p.id}>
                  <button
                    onClick={() => scrollTo(i)}
                    aria-current={i === active ? "true" : undefined}
                    aria-label={`Go to project ${i + 1}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 focus:outline-none ${
                      i === active
                        ? "bg-emerald-400 text-black shadow-[0_0_0_6px_rgba(16,185,129,0.12)] ring-2 ring-emerald-400/40"
                        : "bg-black/60 text-white/80 border border-white/5 hover:bg-emerald-400 hover:text-black"
                    }`}
                  >
                    <span className="pointer-events-none">{i + 1}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Projects stack */}
          <div className="space-y-12">
            {projects.map((p, i) => (
              <article
                key={p.id}
                ref={(el) => { sectionRefs.current[i] = el; }}
                data-index={i}
                onTouchStart={onTouchStart}
                onTouchEnd={(e) => onTouchEnd(e, i)}
                className={`relative min-h-[60vh] rounded-xl overflow-hidden transition-transform duration-700 ease-out will-change-transform ${
                  i === active
                    ? "scale-100 translate-y-0 opacity-100"
                    : "scale-95 translate-y-6 opacity-60"
                }`}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(2,6,23,0.6), rgba(2,6,23,0.6)), url('${p.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl mt-10 rounded-xl bg-[#0b1624]/80 p-8 shadow-2xl backdrop-blur-md">
                    <h3 className="text-3xl font-semibold">{p.title}</h3>
                    <p className="mt-3 text-white/80">{p.description}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
                      <span>
                        <strong className="text-white">Industry:</strong>{' '}
                        <span className="text-cyan-400">{p.industry}</span>
                      </span>
                      <span className="ml-4">
                        <strong className="text-white">Country:</strong>{' '}
                        <span className="text-cyan-400">{p.country}</span>
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link href={p.href ?? '#'} className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-4 py-2 text-black font-medium transition-transform duration-200">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile pagination dots (bottom) */}
          <div className="mt-8 flex items-center justify-center md:hidden">
            <ul className="flex gap-3">
              {projects.map((_, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(i)}
                    aria-current={i === active ? "true" : undefined}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      i === active ? 'bg-emerald-400' : 'bg-white/30'
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
