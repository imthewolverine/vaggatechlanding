import HeroSection from "@/components/sections/HeroSection";
import MovingImages from "@/components/sections/MovingImages";
import OurMainServices from "@/components/sections/OurMainServices";
import WhoWeAre from "@/components/sections/WhoWeAre";
import TopServices from "@/components/sections/TopServices";
import Image from "next/image";
import WhyChooseUs from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <WhoWeAre />
      <MovingImages />
      <OurMainServices />
      <TopServices />
      <WhyChooseUs/>
    </div>
  );
}
