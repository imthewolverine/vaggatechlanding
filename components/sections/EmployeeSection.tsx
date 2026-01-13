
import React from 'react';
import { Zap } from 'lucide-react';
import EmployeeCard from '../Cards/EmployeeCard';
import { employees } from './data-Employee';


export default function EmployeeSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
       <section className="relative min-h-screen overflow-hidden bg-[#02040a] pt-20 pb-56 px-6 lg:px-8">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-architect-grid pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="scanline" />
      
      {/* Large Blurred Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/2 px-6 py-2 backdrop-blur-xl">
              <Zap size={14} className="text-emerald-500 fill-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">
                The Personnel Grid
              </span>
            </div>
            <h2 className="max-w-4xl text-4xl font-black tracking-tighter text-white sm:text-8xl lg:text-6xl uppercase leading-[0.9]">
              БИДНИЙ БҮРЭЛДЭХҮҮН <br />
              <span className="text-outline">БАГ ХАМТ ОЛОН</span>
            </h2>
            <p className="mt-12 max-w-2xl text-lg font-medium leading-relaxed text-white/30">
              Дэвшилтэт технологийг хэрэгжүүлж, илүү үр дүнтэй шийдлүүдийг бий болгодог мэргэжлийн баг хамт олон.
            </p>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/5 to-transparent hidden xl:block" />
      <div className="absolute right-12 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/5 to-transparent hidden xl:block" />
    </section>
  );
};
