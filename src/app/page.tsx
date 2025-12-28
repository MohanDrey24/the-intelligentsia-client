"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/assets/hero.png"
        alt="hero"
        fill
        className="object-cover"
        priority
      />

      <h1 className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transform font-extrabold [-webkit-text-stroke:3px_white] sm:text-[20px] md:text-[50px] lg:text-[75px]">
        THE INTELLIGENTSIA
      </h1>

      {/* Red overlay that slides away from right to left */}
      <motion.div
        className="absolute inset-0 bg-red-500 z-10"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 1.0,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <motion.h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-white"
          initial={{ x: 0, y: 0 }}
          animate={{ y: 50, opacity: 0 }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
          }}
        >
          The Intelligentsia
        </motion.h1>
      </motion.div>
    </div>
  );
}
