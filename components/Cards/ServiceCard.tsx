'use client';

import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

type Service = {
  id: string;
  title: string;
  label: string;
  description: string;
  href: string;
};

type ServiceCardProps = {
  service: Service;
  isActive: boolean;
  onHover: () => void;
  setRef: (el: HTMLElement | null) => void;
};

type ArrowIconProps = {
  className?: string;
};

export function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M7 17L17 7M17 7H7M17 7v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceCard({
  service,
  isActive,
  onHover,
  setRef,
}: ServiceCardProps) {
  const [showContent, setShowContent] = useState(false);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setShowContent(true), 450);
      return () => clearTimeout(t);
    } else {
      setShowContent(false);
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => onHover(), 150);
  };
  const handleMouseLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  return (
    <Link
      href={service.href}
      target="_blank"
      rel="noopener noreferrer"
      ref={setRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative shrink-0 snap-center rounded-sm overflow-hidden cursor-pointer shadow-2xl transition-all duration-700
        ${
          isActive
            ? 'w-[35vw] lg:w-[30vw] opacity-100 z-20'
            : 'w-[12vw] min-w-25 opacity-70'
        }
        min-h-130`}
    >
      {/* Background */}
      <div className="absolute inset-0 border border-white/10 bg-linear-to-br from-blue-950/40 via-slate-900/40 to-cyan-950/40 p-8 backdrop-blur-sm transition-all hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10" />
      <div className="absolute inset-0 backdrop-blur-sm z-0" />

      {!isActive && (
        <div className="relative z-20 h-full flex items-center justify-center px-10">
          <div className="-rotate-90 text-lg md:text-xl font-semibold text-white/90 whitespace-nowrap">
            {service.label}
          </div>
        </div>
      )}

      {showContent && (
        <div className="relative z-20 h-full p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold text-white">{service.title}</h3>
              <p className="text-white/90 mt-2">{service.description}</p>
            </div>
            <div className="flex items-center justify-center">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white m-1">
                <ArrowIcon />
              </span>
            </div>
          </div>

          <div className="w-full h-full pt-10">
            <img src="/images/services/bg.jpg" className="w-full h-auto rounded-md" />
          </div>
        </div>
      )}
    </Link>
  );
}
