import GreenButton from "@/components/Buttons/GreenButton";
import SectionTitle from "../widgets/SectionTitle";

export default function OurMainServices() {
  return (
    <section className="relative overflow-hidden bg-[#070b16] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        
          <SectionTitle title="Our Main Services" dots={1} fontsize={"text-sm"} />
        <div className="flex flex-nowrap items-center justify-center gap-4 md:gap-6 text-white">
          {/* Label */}
            
          
          <h2 className="min-w-0 text-center text-3xl font-bold leading-tight sm:text-left md:text-4xl lg:text-4xl xl:text-5xl">
            Helping you grow with the power of AI
          </h2>
          {/* Button stays on the row */}
          <div className="flex-none">
            <GreenButton href="/persentations/services" label="VIEW MORE SERVICES" />
          </div>

        </div>
      </div>
    </section>
  );
}
