"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  hero: {
    title: string;
    sub_title: string;
    description: string;
  };
};

const AboutHero = ({ hero }: Props) => {
  const { title, sub_title, description } = hero;

  const containerRef = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="">
      <div ref={containerRef} className="container">
        <div className=" pb-[53px] lg:pb-[63px] xl:pb-[83px] xxl:pb-[133px] pt-[128px] lg:pt-[158px] xl:pt-[178px] xxl:pt-[218px]">
          <div className="">
            <div className="">
              <div className="">
                <h1 className=" has_fade_anim inner-section-title large sm:text-center font-normal">
                  {title}
                </h1>
              </div>
            </div>
            <div className=" grid gap-y-5 gap-x-10 md:grid-cols-[auto_auto] sm:justify-center mt-6 lg:mt-[34px] xl:mt-11">
              <div className="has_fade_anim mt-1" data-fade-from="right">
                <span className="text-[16px] leading-none inline-block uppercase pe-[100px] relative">
                  {sub_title}
                  <span className="absolute w-20 h-[2px] bg-white-2 top-1/2 -translate-y-1/2 end-0"></span>
                </span>
              </div>
              <div className="">
                <p
                  className="has_fade_anim max-w-[440px]"
                  data-fade-from="left"
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
