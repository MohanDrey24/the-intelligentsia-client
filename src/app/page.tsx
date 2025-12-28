"use client";

import Image from "next/image";
import { motion } from "motion/react";
import BelowHero from "../components/ui/BelowHero";
import HeroTitle from "../components/ui/HeroTitle";
import HeroOverlay from "../components/ui/HeroOverlay";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/assets/hero.png"
          alt="hero"
          fill
          className="object-cover filter hue-rotate-15"
          priority
        />

        <HeroTitle>THE INTELLIGENTSIA</HeroTitle>

        <HeroOverlay />
      </div>

      <BelowHero />
    </>
  );
}
