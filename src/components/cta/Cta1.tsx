"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import SwapButtonGroup from "@/components/elements/button/SwapButtonGroup";
import { FaArrowRight } from "react-icons/fa";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  sub_title: string;
};

const Cta1 = ({ title, sub_title }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="cta_area main-section-style bg-mint-green"
    >
      <div ref={containerRef} className="container">
        <div className=" main-section-spacing">
          <div className=" text-center">
            <div className="">
              <div className="">
                <span className="has_fade_anim text-[20px] md:text-[24px] lg:text-[26px] xxl:text-[30px] uppercase font-getaway leading-none font-normal">
                  {sub_title}
                </span>
              </div>
              <div className=" mt-5 lg:mt-[30px]">
                <h2 className="has_fade_anim text-[60px] xs:text-[70px] md:text-[100px] lg:text-[120px] xxl:text-[150px] font-normal font-getaway uppercase max-w-[900px] mx-auto">
                  {title}
                </h2>
              </div>
            </div>
            <div className="has_fade_anim flex justify-center mt-[35px] lg:mt-[45px]">
              <SwapButtonGroup
                button1Content={
                  <FaArrowRight className="transform rotate-[-45deg] text-[18px]" />
                }
                button2Content="Contact Us"
                button1Class="text-white bg-black h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] text-[14px] rounded-full
                last:ms-0 last:me-[-50px] lg:last:me-[-70px] group-hover:me-0 group-hover:first:ms-[-50px]  lg:group-hover:first:ms-[-70px]"
                button2Class="text-[15px] text-white px-[32px] lg:px-[42px] text-white bg-black rounded-[40px]"
                textFirst={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta1;
