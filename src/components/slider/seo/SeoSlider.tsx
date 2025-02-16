"use client";

import { convertWithBrSpan } from "@/lib/helper/converter";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  sliderText: string;
};

const SeoSlider = ({ sliderText }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      <div className="inner-container large has_fade_anim">
        <div className=" pt-[30px] lg:pt-[70px] xl:pt-[90px] xxl:pt-[110px]">
          <Marquee autoFill speed={100}>
            <div className="overflow-hidden ms-3">
              <h2
                className="seo-text-slider  font-spacegrotesk text-[35px] xs:text-[45px] sm:text-[75px] md:text-[90px] lg:text-[100px] xl:text-[140px] xxl:text-[190px] font-medium leading-[1.10]"
                dangerouslySetInnerHTML={convertWithBrSpan(sliderText)}
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SeoSlider;
