"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  brands: {
    image: {
      dark: string;
      light: string;
    };
  }[];
};

const borderClassMap: Record<number, string | undefined> = {
  0: "sm:border-b-0",
  1: "sm:border-r-0",
  3: "sm:border-l-0 sm:border-r-0",
  4: "sm:border-r-0",
  6: "sm:border-t-0",
  7: "sm:border-t-0 sm:border-l-0 sm:border-r-0",
  8: "sm:border-t-0 sm:border-r-0",
  9: "sm:border-t-0",
  10: "sm:border-l-0",
  11: "sm:border-t-0",
};

const indexClassMap: Record<number, string | undefined> = {
  0: "sm:col-start-2",
  1: "sm:col-start-1",
  6: "sm:col-start-2",
  11: "sm:col-start-5",
};

const ClientArea = ({ brands }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="container xl:max-w-[1320px]" ref={containerRef}>
      <div className="main-section-spacing">
        <div className="relative">
          <h2 className="has_fade_anim font-normal text-[18px] font-beatricetrial static text-center sm:text-start mb-[10px] mx-auto leading-[1] left-[40%] sm:absolute max-w-[230px] sm:top-10 md:text-[22px] md:max-w-[280px] md:top-[50px] lg:text-[26px] lg:max-w-[370px] lg:top-[70px] xl:text-[30px]">
            We worked with largest global brands
          </h2>
        </div>
        <div>
          <div className="has_fade_anim grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 relative">
            {brands?.map((brand, index) => (
              <div
                key={index}
                className={cn(
                  "client-box flex justify-center sm:border-[1px] items-center min-w-[100px] aspect-[2/1] sm:aspect-[1] px-5 group",
                  indexClassMap[index],
                  brands.length > 9 && borderClassMap[index]
                )}
              >
                <img
                  className="opacity-60 transition-all duration-500 group-hover:opacity-100"
                  alt="brand-img"
                  src={brand.image.dark}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientArea;
