import { motion } from "motion/react";
import { ReactNode } from "react";

export default function HeroTitle({ children }: { children: ReactNode }) {
  return (
    <motion.h1
      className="absolute z-10000 font-anton text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold sm:text-[20px] md:text-[50px] lg:text-[75px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {children}
    </motion.h1>
  );
}
