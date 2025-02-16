"use client";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasImageReveal from "@/lib/animation/hasImageReveal";
import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
type Props = {
  data: {
    title: string;
    shape1: string;
    shape2: string;
    value: number;
  };
};

const BrandingFunFact = ({ data }: Props) => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const imgReveal = useRef<HTMLImageElement>(null);
  const countElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasImageReveal(imgReveal.current);
      hasCountAnim(countElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="fun-fact-area main-section-style bg-[#d9dced] "
    >
      <div ref={containerRef} className="container ">
        <div className="main-section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="has_fade_anim main-section-title max-w-[840px] font-instrument font-semibold">
                  {data.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="counter-wrapper-box mt-[50px] lg:mt-[70px] xl:mt-[90px]">
            <div className="counter-box ml-auto overflow-hidden max-w-[1310px] flex items-center gap-[50px] xs:gap-[80px] sm:gap-[120px] lg:gap-[220px]">
              <img
                ref={imgReveal}
                className=" shape-1 h-[135px] xs:h-[215px] sm:h-[265px] md:h-[315px] lg:h-[415px] xxl:h-[515px]"
                src={data.shape1}
                alt="image"
              />
              <img
                className="hidden h-[135px] xs:h-[215px] sm:h-[265px] md:h-[315px] lg:h-[415px] xxl:h-[515px] img_anim_reveal"
                src={data.shape2}
                alt="image"
              />
              <h3
                ref={countElement}
                className=" text-[120px] xs:text-[170px] sm:text-[200px] md:text-[250px] lg:text-[350px] xxl:text-[450px]"
              >
                {data.value}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingFunFact;
