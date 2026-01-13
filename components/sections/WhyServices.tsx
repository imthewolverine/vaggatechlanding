'use client';

import React from 'react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  img?: string;
}

const features: Feature[] = [
  {
    title: 'Secure, ethical & scalable AI',
    description: 'Privacy-first design and reliable infrastructure for production workloads',
    img: '/images/about/bald_guy.svg',
  },
  {
    title: 'Expert team of AI specialists',
    description: 'Experienced engineers and researchers building tailored solutions',
    img: '/images/about/bald_guy.svg',
  },
  {
    title: 'Custom-built solutions that fit you',
    description: 'Solutions designed for your business goals and data',
    img: '/images/about/bald_guy.svg',
  },
  {
    title: 'Client-centered, business-focused',
    description: 'We align product outcomes with measurable business impact',
    img: '/images/about/bald_guy.svg',
  },
];

export const WhyServices: React.FC<{ imageSrc?: string }> = ({ imageSrc = '/images/about-hero.jpg' }) => {
  return (
    <section className="why-services relative overflow-hidden py-16 lg:py-28">
      <div className="absolute inset-0 bg-liner-to-r from-[#061627]/70 via-[#081628]/60 to-transparent pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-sm text-emerald-400">
            <span className="h-2 w-2 bg-emerald-400 rounded-full inline-block" />
            <span>Why We Are Better?</span>
            <span className="h-2 w-2 bg-emerald-400 rounded-full inline-block" />
          </div>

          <h2 className="mt-6 text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Why our services are
            <br />
            better than others?
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="feature-card bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 flex items-center gap-4"
              >
                <div className="icon h-12 w-12 rounded-full bg-liner-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white">
                  {/* Next.js Image ашиглах */}
                  {f.img && <Image src={f.img} alt={f.title} width={24} height={24} />}
                </div>

                <div>
                  <h3 className="text-white font-semibold">{f.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 mt-6 lg:mt-0">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imageSrc}
              width={900}
              height={600}
              alt="team"
              className="object-cover w-full h-105 lg:h-140"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyServices;
