import { motion } from "motion/react";

export default function HeroOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-50 pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        delay: 1.6,
        ease: "easeInOut",
      }}
      style={{ background: "transparent" }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full absolute inset-0"
      >
        <defs>
          <mask id="diamond-mask">
            <rect width="100" height="100" fill="white" />
            <motion.rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="black"
              transform="translate(-25 -25) rotate(45 25 25)"
              initial={{ scale: 0.01 }}
              animate={{ scale: 2.2, rotate: 180 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
            />
          </mask>
        </defs>
        <rect width="100" height="100" fill="black" mask="url(#diamond-mask)" />
      </svg>
    </motion.div>
  );
}
