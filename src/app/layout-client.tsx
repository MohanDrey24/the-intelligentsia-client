"use client";

import { useRef, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { type LenisRef } from "lenis/react";
import { AnimatePresence } from "motion/react";

interface LayoutClientProps {
  children: React.ReactNode;
  fontVars: string;
}

export function LayoutClient({ children, fontVars }: LayoutClientProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.2,
        wheelMultiplier: 0.4,
        easing: (t: number) => t * (2 - t),
      }}
    >
      <AnimatePresence>
        <body className={`${fontVars} antialiased`}>{children}</body>
      </AnimatePresence>
    </ReactLenis>
  );
}
