'use client';

import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import ServiceCard from '../Cards/ServiceCard';

type Service = {
  id: string;
  title: string;
  label: string;
  description: string;
  href:string;
};

const SERVICES: Service[] = [
  { id: 't1', title: 'AI SaaS Product', label: 'AI SaaS Product', description: 'We develop scalable AI-powered SaaS solutions with predictive analytics, automation, and personalized user experiences.', href: "https://www.youtube.com/watch?v=ecshMQyEh3A" },
  { id: 't2', title: 'Data Science', label: 'Data Science', description: 'We turn complex data into clear, actionable insights using AI and advanced analytics.', href: "https://www.youtube.com/watch?v=e5tEoIrXK6o&list=RDe5tEoIrXK6o&start_radio=1" },
  { id: 't3', title: 'AI Chatbot Virtual', label: 'AI Chatbot Virtual', description: 'Intelligent virtual assistants powered by NLP and machine learning for automation and support.', href: "https://www.youtube.com/watch?v=ecshMQyEh3A" },
  { id: 't4', title: 'AI for E-commerce', label: 'AI for E-commerce', description: 'Personalization, recommendation engines, and AI-driven optimization for online stores.', href: "https://www.youtube.com/watch?v=ecshMQyEh3A" },
  { id: 't5', title: 'AI Consulting', label: 'AI Consulting', description: 'Strategic AI consulting to integrate technologies and scale business impact.', href: "https://www.youtube.com/watch?v=ecshMQyEh3A" },
  { id: 't6', title: 'AI Marketing', label: 'AI Marketing', description: 'AI-powered marketing, predictive analytics, and personalized campaigns.', href: "https://www.youtube.com/watch?v=ecshMQyEh3A" },
];

const DEFAULT_INDEX = Math.floor(SERVICES.length / 2);
const SCROLL_LOCK_MS = 800;

export default function TopServices() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_INDEX);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Record<string, HTMLElement | null>>({});
  const isScrolling = useRef(false);
  const userSelected = useRef(false);

  const setPanelRef = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      panelRefs.current[id] = el;
    },
    []
  );

  const activateCard = (index: number) => {
    if (index === activeIndex || isScrolling.current) return;
    const el = panelRefs.current[SERVICES[index].id];
    if (!el) return;

    userSelected.current = true;
    setActiveIndex(index);
    isScrolling.current = true;

    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

    setTimeout(() => { isScrolling.current = false; }, SCROLL_LOCK_MS);
  };

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (userSelected.current || isScrolling.current) return;

        let bestIndex = activeIndex;
        let bestRatio = 0;

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestIndex = idx;
          }
        });

        if (bestRatio > 0.65 && bestIndex !== activeIndex) setActiveIndex(bestIndex);
      },
      { root: container, threshold: [0.5,0.6,0.65,0.7,0.8,0.9], rootMargin: '0px -10% 0px -10%' }
    );

    SERVICES.forEach((s, i) => {
      const el = panelRefs.current[s.id];
      if (el) {
        el.dataset.index = String(i);
        observer.observe(el);
      }
    });

    const initialEl = panelRefs.current[SERVICES[DEFAULT_INDEX].id];
    if (initialEl) initialEl.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#071026] text-white py-24">
      <div ref={containerRef} className="mt-12 md:flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-8 pb-10 select-none justify-center">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            isActive={activeIndex === i}
            onHover={() => activateCard(i)}
            setRef={setPanelRef(service.id)}
          />
        ))}
      </div>
      <div className="mt-6 text-center text-sm text-white/60">
        <em>Hover or scroll horizontally to explore services.</em>
      </div>
    </section>
  );
}
