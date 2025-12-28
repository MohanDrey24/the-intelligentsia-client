import { motion } from "motion/react";

export default function HeroOverlay() {
  return (
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
  );
}
