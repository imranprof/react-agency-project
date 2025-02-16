"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasCountAnim from "@/lib/animation/hasCountAnim";

type Props = {
  totalEmployee: string;
  image: string;
};
const TeamImageArea = ({ totalEmployee, image }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const countRef = useRef<HTMLSpanElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasCountAnim(countRef.current, totalEmployee);
    },
    { scope: containerRef }
  );

  return (
    <div className="" ref={containerRef}>
      <div className="container">
        <div className=" relative">
          <div
            className="has_fade_anim mb-[60px] sm:mb-0 top-0 sm:absolute w-[200px] md:w-[250px] xxl:w-[310px] aspect-square flex justify-center items-center bg-[#FBF9F9] rounded-[50%] flex-col start-0 lg:top-[-116px] z-[20] "
            data-fade-from="top"
            data-ease="bounce"
          >
            <h2 className=" text-[70px] md:text-[100px] xxl:text-[120px] font-normal font-beatricetrial">
              <span ref={countRef}>{totalEmployee}</span>+
            </h2>
            <h2 className=" text-[16px] md:text-[20px] xxl:text-[24px] font-normal leading-[1.16]">
              Expertise <br /> employees
            </h2>
          </div>
        </div>
      </div>
      <Image
        src={image}
        alt="team_image"
        width={1920}
        height={680}
        className="w-full has_fade_anim"
      />
    </div>
  );
};

export default TeamImageArea;
