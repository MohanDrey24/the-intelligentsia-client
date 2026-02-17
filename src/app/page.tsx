"use client";

import Image from "next/image";
import BelowHero from "@/components/ui/BelowHero";
import HeroTitle from "@/components/ui/HeroTitle";
import HeroOverlay from "@/components/ui/HeroOverlay";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="/assets/school-of-athens.jpg"
          alt="hero background"
          fill
          className="absolute object-cover z-10"
          priority
        />

        <Image
          src="/assets/school-of-athens-people.png"
          alt="hero foreground"
          fill
          className="absolute object-cover z-20"
          priority
        />

        <HeroTitle>THE INTELLIGENTSIA</HeroTitle>

        <HeroOverlay />
      </div>

      {/* <BelowHero /> */}
    </>
  );
}
