import { ReactNode } from "react";

export default function HeroTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="absolute font-anton text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transform font-extrabold sm:text-[20px] md:text-[50px] lg:text-[75px]">
      {children}
    </h1>
  );
}
