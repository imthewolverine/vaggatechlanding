'use client';

import React from 'react';
import { PageHeader } from '@/components/widgets/PageHeader';
import FeatureCard from '@/components/Cards/FeatureCard';
import ServiceProcess from '@/components/sections/serviceprocess/ServiceProcess';
import ContactForm from '@/components/sections/contants/ContactForm';


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

export const Services: React.FC<{ imageSrc?: string }> = ({ imageSrc = '/images/about-hero.jpg' }) => {
  return (
    <section className="why-services relative overflow-hidden py-16 lg:py-28 bg-[#00020F]">
        <div className="flex justify-center text-4xl">
            <PageHeader
                title="Our Services"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services' }
                ]}
                
            />
        </div>
       <ContactForm/>
    
    </section>
  );
};

export default Services;
