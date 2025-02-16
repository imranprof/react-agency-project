"use client";

import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  title: string;
  description: string;
};

const IntroSection = ({ title, description }: Props) => {
  const textMovRef = useRef<HTMLHeadingElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasTextMovAnim(textMovRef.current);
    },
    { scope: containerRef }
  );

  return (
    <>
      <div className="" ref={containerRef}>
        <div className="">
          <h1 ref={textMovRef} className=" inner-section-title large">
            {title}
          </h1>
        </div>
      </div>
      <div className=" mt-6 lg:ms-[220px]">
        <p className=" max-w-[410px] has_fade_anim" data-fade-from="left">
          {description}
        </p>
      </div>
    </>
  );
};

export default IntroSection;
